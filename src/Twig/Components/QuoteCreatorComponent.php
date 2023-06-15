<?php

namespace App\Twig\Components;

use App\Entity\Quote;
use App\Entity\QuoteLine;
use App\Entity\Recipe;
use App\Repository\RecipeRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\UX\LiveComponent\Attribute\LiveArg;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\DefaultActionTrait;
use Symfony\UX\LiveComponent\Attribute\LiveAction;
use Symfony\UX\LiveComponent\Attribute\LiveListener;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\ValidatableComponentTrait;
use Symfony\UX\TwigComponent\Attribute\ExposeInTemplate;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[AsLiveComponent('quote_creator')]
final class QuoteCreatorComponent extends AbstractController
{
    use DefaultActionTrait;
    use ValidatableComponentTrait;

    #[LiveProp(writable: ['title', 'labourCost'])]
    public Quote $quote;

    #[LiveProp]
    public array $quoteLineItems = [];

    /**
     * A temporary flag that we just saved.
     *
     * This doesn't need to be a LiveProp because it's set in a LiveAction,
     * rendered immediately, then we want it to be forgotten.
     */
    public bool $savedSuccessfully = false;
    public bool $saveFailed = false;

    public function __construct(
        private RecipeRepository $recipeRepository,
    ){}

    public function mount(Quote $quote): void
    {
        $this->quote = $quote;
        $this->quoteLineItems = $this->populateQuoteLineItems($quote);
    }

    #[LiveAction]
    public function addQuoteLineItem(): void
    {
        $this->quoteLineItems[] = [
            'quoteLineId' => null,
            'recipeId' => null,
            'quantity' => 1,
            'preparation' => 1,
            'unit_price' => 1,
            'total_price' => 0,
            'isEditing' => true,
        ];
    }

    #[ExposeInTemplate()]
    public function getTotalRecipes(): float
    {
        $total = 0;

        foreach ($this->quoteLineItems as $quotelineItem) {
            $total += $quotelineItem['total_price'];
        }

        return $total;
    }

    #[ExposeInTemplate()]
    public function getTotalLabour(): float
    {
        $total = 0;

        foreach ($this->quoteLineItems as $quotelineItem) {
            $total += $quotelineItem['preparation'] * $quotelineItem['quantity'] * ($this->quote->getLabourCost() / 60) ;
        }

        return $total;
    }

    #[ExposeInTemplate()]
    public function getTotalPrice(): float
    {
        return $this->getTotalRecipes() + $this->getTotalLabour();
    }

    #[ExposeInTemplate()]
    public function getSellPrice(): float
    {
        return $this->getTotalPrice() * 2;
    }

    #[LiveListener('removeQuoteLineItem')]
    public function removeQuoteLineItem(#[LiveArg] int $key): void
    {
        unset($this->quoteLineItems[$key]);
    }

    #[ExposeInTemplate]
    public function areAnyLineItemsEditing(): bool
    {
        foreach ($this->quoteLineItems as $lineItem) {
            if ($lineItem['isEditing']) {
                return true;
            }
        }

        return false;
    }

    #[LiveListener('quote_line_item:change_edit_mode')]
    public function onQuoteLineItemEditModeChange(#[LiveArg] int $key, #[LiveArg] $isEditing): void
    {
        $this->quoteLineItems[$key]['isEditing'] = $isEditing;
    }

    #[LiveAction]
    public function saveQuote(EntityManagerInterface $entityManager)
    {
        // assign connected user
        $this->quote
            ->setUser($this->getUser())
            ->setTotalLabour(round($this->getTotalLabour(), 2))
            ->setTotalRecipe(round($this->getTotalRecipes(), 2))
            ->setTotalPrice(round($this->getTotalPrice(), 2))
            ->setSellPrice(round($this->getSellPrice(), 2))
        ;

        $this->saveFailed = true;
        $this->validate();
        $this->saveFailed = false;

        // TODO: do we check for `isSaved` here... and throw an error?

        // remove any items that no longer exist
        foreach ($this->quote->getQuoteLines() as $key => $item) {
            if (!isset($this->quoteLineItems[$key])) {
                // orphanRemoval will cause these to be deleted
                $this->quote->removeQuoteLine($item);
            }
        }

        foreach ($this->quoteLineItems as $key => $lineItem) {
            $quoteLine = $this->quote->getQuoteLines()->get($key);
            if (null === $quoteLine) {
                // this is a new item! Welcome!
                $quoteLine = new QuoteLine();
                $entityManager->persist($quoteLine);
                $this->quote->addQuoteLine($quoteLine);
            } 

            $recipe = $this->findRecipe($lineItem['recipeId']);

            $quoteLine
                ->setQuantity($lineItem['quantity'])
                ->setPrice($lineItem['unit_price'])
                ->setPreparation($lineItem['preparation'])
                ->setTotal($lineItem['total_price'])
                ->setRecipe($recipe)
                ->setQuote($this->quote)
            ;
        }

        $isNew = null === $this->quote->getId();
        $entityManager->persist($this->quote);
        $entityManager->flush();

        if ($isNew) {
            // it's new! Let's redirect to the edit page
            $this->addFlash('success', 'Quote saved!');

            return $this->redirectToRoute('app_admin_quote_edit', [
                'id' => $this->quote->getId(),
            ]);
        }

        // it's not new! We should already be on the edit page, so let's
        // just let the component stay rendered.
        $this->savedSuccessfully = true;

        // Keep the lineItems in sync with the invoice: new InvoiceItems may
        //      not have been given the same key as the original lineItems
        $this->quoteLineItems = $this->populateQuoteLineItems($this->quote);
    }

    private function findRecipe(int $id): Recipe
    {
        return $this->recipeRepository->find($id);
    }

    private function populateQuoteLineItems(Quote $quote): array
    {
        $quoteLineItems = [];
        foreach ($quote->getQuoteLines() as $item) {
            $quoteLineItems[] = [
                'quoteLineId' => $item->getId(),
                'recipeId' => $item->getRecipe()->getId(),
                'quantity' => $item->getQuantity(),
                'preparation' => $item->getRecipe()->getPreparation() * $item->getQuantity(),
                'unit_price' => $item->getPrice(),
                'total_price' => $item->getTotal(),
                'isEditing' => false,
            ];
        }

        return $quoteLineItems;
    }

    #[LiveListener('quote_line_item:save')]
    public function saveLineItem(
        #[LiveArg] int $key,
        #[LiveArg] int $recipeId,
        #[LiveArg] float $quantity,
        #[LiveArg] float $unit_price,
        #[LiveArg] int $preparation,
        #[LiveArg] float $total_price,
        #[LiveArg] ?int $quoteLineId = null,
    ): void
    {
        if (!isset($this->quoteLineItems[$key])) {
            // shouldn't happen
            return;
        }

        $this->quoteLineItems[$key]['recipeId'] = $recipeId;
        $this->quoteLineItems[$key]['quoteLineId'] = $quoteLineId;
        $this->quoteLineItems[$key]['quantity'] = $quantity;
        $this->quoteLineItems[$key]['unit_price'] = $unit_price;
        $this->quoteLineItems[$key]['quantity'] = $quantity;
        $this->quoteLineItems[$key]['preparation'] = $preparation;
        $this->quoteLineItems[$key]['total_price'] = $total_price;
    }
}
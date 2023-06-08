<?php

namespace App\Twig\Components;

use App\Entity\Recipe;
use App\Entity\Invoice;
use App\Entity\Product;
use App\Entity\Ingredient;
use App\Entity\InvoiceItem;
use App\Entity\RecipeIngredient;
use App\Repository\ProductRepository;
use App\Repository\IngredientRepository;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\RecipeIngredientRepository;
use Symfony\UX\LiveComponent\Attribute\LiveArg;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\DefaultActionTrait;
use Symfony\Component\Validator\Constraints\Valid;
use Symfony\UX\LiveComponent\Attribute\LiveAction;
use Symfony\UX\LiveComponent\Attribute\LiveListener;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\ValidatableComponentTrait;
use Symfony\UX\TwigComponent\Attribute\ExposeInTemplate;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[AsLiveComponent('recipe_creator')]
class RecipeCreatorComponent extends AbstractController
{
    use DefaultActionTrait;
    use ValidatableComponentTrait;

    #[LiveProp(writable: ['title'])]
    #[Valid]
    public Recipe $recipe;

    #[LiveProp]
    public array $lineItems = [];

    /**
     * A temporary flag that we just saved.
     *
     * This doesn't need to be a LiveProp because it's set in a LiveAction,
     * rendered immediately, then we want it to be forgotten.
     */
    public bool $savedSuccessfully = false;
    public bool $saveFailed = false;

    public function __construct(
        private RecipeIngredientRepository $recipeIngredientRepository,
        private IngredientRepository $ingredientRepository,
    ){}

    // add mount method
    public function mount(Recipe $recipe): void
    {
        $this->recipe = $recipe;
        $this->lineItems = $this->populateLineItems($recipe);
    }

    #[LiveAction]
    public function addLineItem(): void
    {
        $this->lineItems[] = [
            'recipeIngredientId' => null,
            'quantity' => 1,
            'ingredientId' => null,
            'unit' => 'test',
            'price' => 1,
            'amount' => 1,
            'isEditing' => true,
            'totalPrice' => 0,
        ];
    }

    #[LiveListener('removeLineItem')]
    public function removeLineItem(#[LiveArg] int $key): void
    {
        unset($this->lineItems[$key]);
    }

    #[LiveListener('line_item:change_edit_mode')]
    public function onLineItemEditModeChange(#[LiveArg] int $key, #[LiveArg] $isEditing): void
    {
        $this->lineItems[$key]['isEditing'] = $isEditing;
    }

    #[LiveListener('line_item:save')]
    public function saveLineItem(
        #[LiveArg] int $key,
        #[LiveArg] int $ingredientId,
        #[LiveArg] float $quantity,
        #[LiveArg] float $price,
        #[LiveArg] float $amount,
        #[LiveArg] string $unit,
        #[LiveArg] float $totalPrice,
        #[LiveArg] ?int $recipeIngredientId = null,
    ): void
    {
        if (!isset($this->lineItems[$key])) {
            // shouldn't happen
            return;
        }

        $this->lineItems[$key]['recipeIngredientId'] = $recipeIngredientId;
        $this->lineItems[$key]['ingredientId'] = $ingredientId;
        $this->lineItems[$key]['quantity'] = $quantity;
        $this->lineItems[$key]['price'] = $price;
        $this->lineItems[$key]['amount'] = $amount;
        $this->lineItems[$key]['unit'] = $unit;
        $this->lineItems[$key]['totalPrice'] = $totalPrice;
    }

    #[LiveAction]
    public function saveRecipe(EntityManagerInterface $entityManager)
    {
        // assign connected user
        $this->recipe->setUser($this->getUser());

        $this->saveFailed = true;
        $this->validate();
        $this->saveFailed = false;

        // TODO: do we check for `isSaved` here... and throw an error?

        // remove any items that no longer exist
        foreach ($this->recipe->getRecipeIngredients() as $key => $item) {
            if (!isset($this->lineItems[$key])) {
                // orphanRemoval will cause these to be deleted
                $this->recipe->removeRecipeIngredient($item);
            }
        }

        foreach ($this->lineItems as $key => $lineItem) {
            $recipeIngredient = $this->recipe->getRecipeIngredients()->get($key);
            if (null === $recipeIngredient) {
                // this is a new item! Welcome!
                $recipeIngredient = new RecipeIngredient();
                $entityManager->persist($recipeIngredient);
                $this->recipe->addRecipeIngredient($recipeIngredient);
            } 
            
            $ingredient = $this->findIngredient($lineItem['ingredientId']);

            $recipeIngredient
                ->setQuantity($lineItem['quantity'])
                ->setPrice($lineItem['price'])
                ->setAmount($lineItem['amount'])
                ->setTotalPrice($lineItem['totalPrice'])
                ->setUnit($lineItem['unit'])
                ->setRecipe($this->recipe)
                ->setIngredient($ingredient)
            ;
        }

        $isNew = null === $this->recipe->getId();
        $entityManager->persist($this->recipe);
        $entityManager->flush();

        if ($isNew) {
            // it's new! Let's redirect to the edit page
            $this->addFlash('success', 'Recipe saved!');

            return $this->redirectToRoute('app_admin_recipe_edit', [
                'id' => $this->recipe->getId(),
            ]);
        }

        // it's not new! We should already be on the edit page, so let's
        // just let the component stay rendered.
        $this->savedSuccessfully = true;

        // Keep the lineItems in sync with the invoice: new InvoiceItems may
        //      not have been given the same key as the original lineItems
        $this->lineItems = $this->populateLineItems($this->recipe);
    }

    public function getTotal(): float
    {
        $total = 0;

        foreach ($this->lineItems as $lineItem) {
            $total += $lineItem['totalPrice'];
        }

        return $total;
    }

    #[ExposeInTemplate]
    public function areAnyLineItemsEditing(): bool
    {
        foreach ($this->lineItems as $lineItem) {
            if ($lineItem['isEditing']) {
                return true;
            }
        }

        return false;
    }

    private function populateLineItems(Recipe $recipe): array
    {
        $lineItems = [];
        foreach ($recipe->getRecipeIngredients() as $item) {
            $lineItems[] = [
                'recipeIngredientId' => $item->getId(),
                'quantity' => $item->getQuantity(),
                'amount' => $item->getAmount(),
                'price' => $item->getPrice(),
                'ingredientId' => $item->getIngredient()->getId(),
                'unit' => $item->getUnit(),
                'totalPrice' => $item->getTotalPrice(),
                'isEditing' => false,
            ];
        }

        return $lineItems;
    }

    private function findRecipeIngredient(int $id): RecipeIngredient
    {
        return $this->recipeIngredientRepository->find($id);
    }

    private function findIngredient(int $id): Ingredient
    {
        return $this->ingredientRepository->find($id);
    }
}
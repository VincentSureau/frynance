<?php

namespace App\Twig\Components;

use App\Entity\Recipe;
use App\Entity\QuoteLine;
use App\Repository\RecipeRepository;
use App\Repository\QuoteLineRepository;
use Symfony\UX\LiveComponent\LiveResponder;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\DefaultActionTrait;
use Symfony\UX\LiveComponent\Attribute\LiveAction;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\ValidatableComponentTrait;
use Symfony\UX\TwigComponent\Attribute\ExposeInTemplate;

#[AsLiveComponent('quote_creator_line_item')]
class QuoteCreatorLineItemComponent
{
    use DefaultActionTrait;
    use ValidatableComponentTrait;

    #[LiveProp]
    public int $key;

    #[LiveProp(writable: true)]
    public ?QuoteLine $quoteLine = null;

    #[LiveProp(writable: true)]
    #[Assert\NotNull]
    public ?Recipe $recipe = null;

    #[LiveProp(writable: true)]
    public ?int $recipeId = null;

    #[LiveProp(writable: true)]
    #[Assert\Positive]
    public float $quantity = 1;

    #[LiveProp(writable: true)]
    #[Assert\Positive]
    public float $preparation = 1;

    #[LiveProp(writable: true)]
    #[Assert\Positive]
    public float $unit_price = 1;

    #[LiveProp(writable: false)]
    #[Assert\PositiveOrZero]
    public float $total_price = 0;

    #[LiveProp()]
    public bool $isEditing = false;

    public function __construct(private RecipeRepository $recipeRepository, private QuoteLineRepository $quoteLineRepository)
    {
    }

    public function mount(?int $quoteLineId, ?int $recipeId): void
    {
        if ($quoteLineId) {
            $this->quoteLine = $this->quoteLineRepository->find($quoteLineId);
        }
        if ($recipeId) {
            $this->recipe = $this->recipeRepository->find($recipeId);
        }
    }

    #[LiveAction]
    public function save(LiveResponder $responder): void
    {
        $this->validate();

        $responder->emitUp('quote_line_item:save', [
            'key' => $this->key,
            'recipeId' => $this->recipe->getId(),
            'quantity' => $this->quantity,
            'unit_price' => $this->unit_price,
            'preparation' => $this->preparation,
            'total_price' => $this->getTotalPrice(),
            'quoteLineId' => $this->quoteLine?->getId(),
        ]);

        $this->changeEditMode(false, $responder);
    }

    #[LiveAction]
    public function edit(LiveResponder $responder): void
    {
        $this->changeEditMode(true, $responder);
    }

    #[ExposeInTemplate]
    public function getRecipes(): array
    {
        return $this->recipeRepository->findAll();
    }

    #[ExposeInTemplate]
    public function getTotalPrice()
    {
        try {
            if($this->quantity == 0) {
                $this->total_price = 0;
                throw new \Exception("Division by Zero");
            }
            $this->total_price = $this->unit_price * $this->quantity;
        } catch (\Exception $e) {
            $this->total_price = 0;
        }
        return $this->total_price;
    }

    private function changeEditMode(bool $isEditing, LiveResponder $responder): void
    {
        $this->isEditing = $isEditing;

        // emit to QuoteCreator so it can track which items are being edited
        $responder->emitUp('quote_line_item:change_edit_mode', [
            'key' => $this->key,
            'isEditing' => $this->isEditing,
        ]);
    }
}

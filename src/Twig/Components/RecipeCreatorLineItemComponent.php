<?php

namespace App\Twig\Components;

use App\Entity\Ingredient;
use App\Entity\RecipeIngredient;
use App\Repository\IngredientRepository;
use App\Repository\RecipeIngredientRepository;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveAction;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\DefaultActionTrait;
use Symfony\UX\LiveComponent\LiveResponder;
use Symfony\UX\LiveComponent\ValidatableComponentTrait;
use Symfony\UX\TwigComponent\Attribute\ExposeInTemplate;

#[AsLiveComponent('recipe_creator_line_item')]
class RecipeCreatorLineItemComponent
{
    use DefaultActionTrait;
    use ValidatableComponentTrait;

    #[LiveProp]
    public int $key;

    #[LiveProp(writable: true)]
    public ?RecipeIngredient $recipeIngredient = null;

    #[LiveProp(writable: true)]
    #[Assert\NotNull]
    public ?Ingredient $ingredient = null;

    #[LiveProp(writable: true)]
    public ?int $ingredientId = null;

    #[LiveProp(writable: true)]
    #[Assert\Positive]
    public float $quantity = 1;

    #[LiveProp(writable: true)]
    #[Assert\Positive]
    public float $price = 1;

    #[LiveProp(writable: true)]
    #[Assert\NotBlank]
    public string $unit = "";

    #[LiveProp(writable: true)]
    #[Assert\Positive]
    public float $amount = 1;

    #[LiveProp(writable: true)]
    #[Assert\PositiveOrZero]
    public float $totalPrice = 0;

    #[LiveProp()]
    public bool $isEditing = false;

    public function __construct(private IngredientRepository $ingredientRepository, private RecipeIngredientRepository $recipeIngredientRepository)
    {
    }

    public function mount(?int $recipeIngredientId, ?int $ingredientId): void
    {
        if ($recipeIngredientId) {
            $this->recipeIngredient = $this->recipeIngredientRepository->find($recipeIngredientId);
        }
        if ($ingredientId) {
            $this->ingredient = $this->ingredientRepository->find($ingredientId);
        }
    }

    #[LiveAction]
    public function save(LiveResponder $responder): void
    {
        $this->validate();
        $responder->emitUp('line_item:save', [
            'key' => $this->key,
            // 'ingredient' => $this->ingredient,
            'ingredientId' => $this->ingredient->getId(),
            'quantity' => $this->quantity,
            'price' => $this->price,
            'amount' => $this->amount,
            'unit' => $this->unit,
            'totalPrice' => $this->totalPrice,
            'recipeIngredientId' => $this->recipeIngredient?->getId(),
        ]);

        $this->changeEditMode(false, $responder);
    }

    #[LiveAction]
    public function edit(LiveResponder $responder): void
    {
        $this->changeEditMode(true, $responder);
    }

    #[ExposeInTemplate]
    public function getIngredients(): array
    {
        return $this->ingredientRepository->findAll();
    }

    public function getTotalPrice()
    {
        try {
            if($this->quantity == 0) {
                $this->totalPrice = 0;
                throw new \Exception("Division by Zero");
            }
            $this->totalPrice = $this->price / $this->quantity * $this->amount;
        } catch (\Exception $e) {
            $this->totalPrice = 0;
        }
        return $this->totalPrice;
    }

    private function changeEditMode(bool $isEditing, LiveResponder $responder): void
    {
        $this->isEditing = $isEditing;

        // emit to RecipeCreator so it can track which items are being edited
        $responder->emitUp('line_item:change_edit_mode', [
            'key' => $this->key,
            'isEditing' => $this->isEditing,
        ]);
    }
}

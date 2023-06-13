<?php

namespace App\Twig\Components;

use App\Entity\Quote;
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

    #[LiveProp(writable: ['title','price', 'labourCost'])]
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

    public function mount(Quote $quote): void
    {
        $this->quote = $quote;
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
    public function getTotal(): float
    {
        $total = 0;

        foreach ($this->quoteLineItems as $quotelineItem) {
            $total += $quotelineItem['total_price'];
        }

        return $total;
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
}
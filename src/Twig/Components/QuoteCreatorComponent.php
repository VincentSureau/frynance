<?php

namespace App\Twig\Components;

use App\Entity\Quote;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\DefaultActionTrait;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\ValidatableComponentTrait;
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

    public function mount(Quote $quote): void
    {
        $this->quote = $quote;
    }
}
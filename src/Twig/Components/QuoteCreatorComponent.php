<?php

namespace App\Twig\Components;

use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\DefaultActionTrait;

#[AsLiveComponent('quote_creator')]
final class QuoteCreatorComponent
{
    use DefaultActionTrait;
}

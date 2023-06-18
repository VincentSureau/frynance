<?php

declare(strict_types=1);

namespace App\EventListener;

use Doctrine\ORM\Events;
use App\Entity\Ingredient;
use App\Service\Translation\MyMemoryApi;
use Doctrine\ORM\EntityManagerInterface;
use function Symfony\Component\String\u;
use Doctrine\ORM\Event\PrePersistEventArgs;
use Symfony\Component\String\UnicodeString;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\DependencyInjection\Attribute\Autowire;
use Doctrine\Bundle\DoctrineBundle\Attribute\AsEntityListener;

#[AsEntityListener(event: Events::prePersist, method: 'translateIngredient', entity: Ingredient::class)]
class IngredientCreatedNotifier
{
    private $currentLocale;
    private $destinationLocales;

    public function __construct(
        private RequestStack $requestStack,
        private EntityManagerInterface $em,
        private MyMemoryApi $myMemoryService,
        #[Autowire('%app.supported_locales%')]
        private string $supportedLocales
    )
    {
        $supportedLocales = array_map(
            fn(UnicodeString $locale) => $locale->toString(),
            u($this->supportedLocales)->split('|')
        );
        $this->currentLocale = $requestStack->getCurrentRequest()->getLocale();
        $this->destinationLocales = array_filter($supportedLocales, fn($locale) => $locale !== $this->currentLocale);
    }

    public function translateIngredient(Ingredient $ingredient, PrePersistEventArgs $event): void
    {
        $repository = $this->em->getRepository('Gedmo\\Translatable\\Entity\\Translation');

        foreach($this->destinationLocales as $locale)
        {
            $repository->translate(
                $ingredient,
                'name',
                $locale,
                $this->getTranslation($ingredient, $locale)
            );
        }
    }

    private function getTranslation(Ingredient $ingredient, string $locale): string
    {
        return $this->myMemoryService->translate($ingredient->getName(), $this->currentLocale, $locale);
    }
}
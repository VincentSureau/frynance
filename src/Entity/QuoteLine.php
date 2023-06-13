<?php

namespace App\Entity;

use App\Repository\QuoteLineRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: QuoteLineRepository::class)]
class QuoteLine
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'quoteLines')]
    #[ORM\JoinColumn(nullable: false)]
    #[Assert\NotNull]
    private ?Quote $quote = null;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(nullable: false)]
    private ?Recipe $recipe = null;

    #[ORM\Column]
    #[Assert\PositiveOrZero()]
    private ?float $quantity = 0;

    #[ORM\Column]
    #[Assert\PositiveOrZero()]
    private ?float $price = 0;

    #[ORM\Column]
    #[Assert\PositiveOrZero()]
    private ?float $total = 0;

    #[ORM\Column]
    #[Assert\PositiveOrZero()]
    private ?float $preparation = 0;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getQuote(): ?Quote
    {
        return $this->quote;
    }

    public function setQuote(?Quote $quote): self
    {
        $this->quote = $quote;

        return $this;
    }

    public function getRecipe(): ?Recipe
    {
        return $this->recipe;
    }

    public function setRecipe(?Recipe $recipe): self
    {
        $this->recipe = $recipe;

        return $this;
    }

    public function getQuantity(): ?float
    {
        return $this->quantity;
    }

    public function setQuantity(float $quantity): self
    {
        $this->quantity = $quantity;

        return $this;
    }

    public function getPrice(): ?float
    {
        return $this->price;
    }

    public function setPrice(float $price): self
    {
        $this->price = $price;

        return $this;
    }

    public function getTotal(): ?float
    {
        return $this->total;
    }

    public function setTotal(float $total): self
    {
        $this->total = $total;

        return $this;
    }

    public function getPreparation(): ?float
    {
        return $this->preparation;
    }

    public function setPreparation(float $preparation): self
    {
        $this->preparation = $preparation;

        return $this;
    }
}

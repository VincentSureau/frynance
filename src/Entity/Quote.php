<?php

namespace App\Entity;

use App\Repository\QuoteRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: QuoteRepository::class)]
class Quote
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'quotes')]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $user = null;

    #[ORM\Column]
    #[Assert\PositiveOrZero]
    private ?float $price = 0;

    #[ORM\Column(length: 255)]
    #[Assert\NotBlank]
    private ?string $title = null;

    #[ORM\OneToMany(mappedBy: 'quote', targetEntity: QuoteLine::class, orphanRemoval: true)]
    private Collection $quoteLines;

    #[ORM\Column]
    #[Assert\PositiveOrZero]
    private ?float $labourCost = 0;

    public function __construct()
    {
        $this->title =(new \DateTime('now'))->format('d-m-Y');
        $this->quoteLines = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

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

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    /**
     * @return Collection<int, QuoteLine>
     */
    public function getQuoteLines(): Collection
    {
        return $this->quoteLines;
    }

    public function addQuoteLine(QuoteLine $quoteLine): self
    {
        if (!$this->quoteLines->contains($quoteLine)) {
            $this->quoteLines->add($quoteLine);
            $quoteLine->setQuote($this);
        }

        return $this;
    }

    public function removeQuoteLine(QuoteLine $quoteLine): self
    {
        if ($this->quoteLines->removeElement($quoteLine)) {
            // set the owning side to null (unless already changed)
            if ($quoteLine->getQuote() === $this) {
                $quoteLine->setQuote(null);
            }
        }

        return $this;
    }

    public function getLabourCost(): ?float
    {
        return $this->labourCost;
    }

    public function setLabourCost(float $labourCost): self
    {
        $this->labourCost = $labourCost;

        return $this;
    }
}

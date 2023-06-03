<?php

namespace App\Tests\Entity;

use App\Entity\User;
use App\Entity\Recipe;
use App\Entity\Ingredient;
use App\Entity\RecipeIngredient;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

class RecipeIngredientIngredientTest extends KernelTestCase
{
    /**
     * @var \Doctrine\ORM\EntityManager
     */
    private $entityManager;

    protected function setUp(): void
    {
        $kernel = self::bootKernel();

        $this->entityManager = $kernel->getContainer()
            ->get('doctrine')
            ->getManager();
    }

    public function getEntity(): RecipeIngredient
    {
        return (new RecipeIngredient())
            ->setRecipe(
                (new Recipe())
                ->setTitle('title')
                ->setUser(
                    (new User())
                        ->setFirstname('firtname')
                        ->setLastname('lastname')
                        ->setEmail('name@example.com')
                        ->setPassword('password')
                )
            )
            ->setIngredient(
                (new Ingredient())
                    ->setName('name')
            )
            ->setQuantity(100)
            ->setUnit("grammes")
            ->setAmount(50)
            ->setPrice(10)
        ;
    }

    public function assertHasErrors(RecipeIngredient $recipeIngredient, int $number = 0)
    {
        self::bootKernel();
        $errors = static::getContainer()->get('validator')->validate($recipeIngredient);
        $messages = [];
        /** @var ConstraintViolation $error */
        foreach($errors as $error) {
            $messages[] = $error->getPropertyPath() . ' => ' . $error->getMessage();
        }
        $this->assertCount($number, $errors, implode(', ', $messages));
    }

    public function testValidEntity()
    {
        $this->assertHasErrors($this->getEntity(), 0);
    }

    public function testInvalidRecipe()
    {
        $this->assertHasErrors($this->getEntity()->setRecipe(null), 1);
    }

    public function testInvalidIngredient()
    {
        $this->assertHasErrors($this->getEntity()->setIngredient(null), 1);
    }

    public function testInvalidQuantity()
    {
        $this->assertHasErrors($this->getEntity()->setQuantity(-10), 1);
    }

    public function testInvalidAmount()
    {
        $this->assertHasErrors($this->getEntity()->setAmount(-10), 1);
    }

    public function testInvalidUnit()
    {
        $this->assertHasErrors($this->getEntity()->setUnit(''), 1);
    }

    public function testInvalidPrice()
    {
        $this->assertHasErrors($this->getEntity()->setPrice(-10), 1);
    }

    protected function tearDown(): void
    {
        parent::tearDown();

        // doing this is recommended to avoid memory leaks
        $this->entityManager->close();
        $this->entityManager = null;
    }
}

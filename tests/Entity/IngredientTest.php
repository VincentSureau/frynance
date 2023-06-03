<?php

namespace App\Tests\Entity;

use App\Entity\Ingredient;
use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

class IngredientTest extends KernelTestCase
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

    public function getEntity(): Ingredient
    {
        return (new Ingredient())
            ->setName('name')
        ;
    }

    public function assertHasErrors(Ingredient $ingredient, int $number = 0)
    {
        self::bootKernel();
        $errors = static::getContainer()->get('validator')->validate($ingredient);
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

    public function testInvalidName()
    {
        $this->assertHasErrors($this->getEntity()->setName(''), 1);
    }

    protected function tearDown(): void
    {
        parent::tearDown();

        // doing this is recommended to avoid memory leaks
        $this->entityManager->close();
        $this->entityManager = null;
    }
}

<?php

namespace App\Tests\Entity;

use App\Entity\Recipe;
use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

class RecipeTest extends KernelTestCase
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

    public function getEntity(): Recipe
    {
        return (new Recipe())
            ->setTitle('title')
            ->setUser(
                (new User())
                    ->setFirstname('firtname')
                    ->setLastname('lastname')
                    ->setEmail('name@example.com')
                    ->setPassword('password')
            )
        ;
    }

    public function assertHasErrors(Recipe $recipe, int $number = 0)
    {
        self::bootKernel();
        $errors = static::getContainer()->get('validator')->validate($recipe);
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

    public function testInvalidTitle()
    {
        $this->assertHasErrors($this->getEntity()->setTitle(''), 1);
    }

    public function testInvalidUser()
    {
        $this->assertHasErrors($this->getEntity()->setUser(null), 1);
    }

    protected function tearDown(): void
    {
        parent::tearDown();

        // doing this is recommended to avoid memory leaks
        $this->entityManager->close();
        $this->entityManager = null;
    }
}

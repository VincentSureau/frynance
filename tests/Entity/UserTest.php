<?php

namespace App\Tests\Entity;

use App\Entity\User;
use Symfony\Component\Validator\ConstraintViolation;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

class UserTest extends KernelTestCase
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

    public function getEntity(): User
    {
        return (new User())
            ->setFirstname('firtname')
            ->setLastname('lastname')
            ->setEmail('name@example.com')
            ->setPassword('password')
        ;
    }

    public function assertHasErrors(User $user, int $number = 0)
    {
        self::bootKernel();
        $errors = static::getContainer()->get('validator')->validate($user);
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

    public function testInvalidEmail()
    {
        $this->assertHasErrors($this->getEntity()->setEmail('wrongmail'), 1);
    }

    public function testInvalidBlankLastName()
    {
        $this->assertHasErrors($this->getEntity()->setLastname(''), 1);
    }

    public function testInvalidBlankPassword()
    {
        $this->assertHasErrors($this->getEntity()->setPassword(''), 1);
    }

    public function testInvalidUniqueEmail()
    {
        $user1 = $this->getEntity();
        $this->entityManager->persist($user1);
        $this->entityManager->flush();
        $this->assertHasErrors($this->getEntity(), 1);
    }
    // public function testSomething(): void
    // {
    //     $kernel = self::bootKernel();

    //     $this->assertSame('test', $kernel->getEnvironment());
    //     // $routerService = static::getContainer()->get('router');
    //     // $myCustomService = static::getContainer()->get(CustomService::class);
    // }

    protected function tearDown(): void
    {
        parent::tearDown();

        // doing this is recommended to avoid memory leaks
        $this->entityManager->close();
        $this->entityManager = null;
    }
}

<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserFixtures extends Fixture
{
    public function __construct(private UserPasswordHasherInterface $userPasswordHasher)
    {}

    public function load(ObjectManager $manager): void
    {
        $user = new User();
        $user
            ->setFirstname('firtname')
            ->setLastname('lastname')
            ->setEmail('name@example.com')
            ->setRoles(['ROLE_ADMIN'])
            ->setPassword(
                $this->userPasswordHasher->hashPassword(
                    $user,
                    'password'
                )
            )
        ;
        $manager->persist($user);
        $manager->flush();
        $this->addReference('user', $user);
    }
}

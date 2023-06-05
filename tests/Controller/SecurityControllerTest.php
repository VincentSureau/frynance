<?php

namespace App\Tests\Controller;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class SecurityControllerTest extends WebTestCase
{
    /**
     * @var \Doctrine\ORM\EntityManager
     */
    private $entityManager;

    private $client;

    protected function setUp(): void
    {
        $this->client = static::createClient();
        $kernel = self::bootKernel();

        $this->entityManager = $kernel->getContainer()
            ->get('doctrine')
            ->getManager()
        ;
    }

    public function getEntity($verified = true): User
    {
        $user = new User();
        $user
            ->setFirstname('firtname')
            ->setLastname('lastname')
            ->setEmail('name@example.com')
            ->setPassword('$2y$13$nP.d339J61uhAGc3gC6nceeAtN.VMCPWfnUJqwmNN.mBI7/ehXtMe')
            ->setIsVerified($verified)
        ;
        $this->entityManager->persist($user);
        $this->entityManager->flush();
        return $user;
    }


    public function testLoginPage(): void
    {
        $crawler = $this->client->request('GET', '/fr/login');

        $this->assertResponseIsSuccessful();
        $this->assertSelectorTextContains('h1', 'Log in.');
    }

    public function testLoginWithUnverifiedUser(): void
    {
        $user = $this->getEntity(false);
        $crawler = $this->client->request('GET', '/fr/login');
        
        $form = $crawler->selectButton('Log in')->form();
        $form['email'] = 'name@example.com';
        $form['password'] = 'password';

        $this->client->submit($form);
        
        // Asserts that the user was redirected to the "/after-login" page
        $this->assertResponseRedirects('/fr/login');
        
        $crawler = $this->client->followRedirect();
        
        // Check error message is displayed
        $this->assertSelectorExists('.alert.alert-danger');
    }

    public function testLoginWithValidUser(): void
    {
        $user = $this->getEntity();
        $crawler = $this->client->request('GET', '/fr/login');
        
        $form = $crawler->selectButton('Log in')->form();
        $form['email'] = 'name@example.com';
        $form['password'] = 'password';

        $this->client->submit($form);
        
        // Asserts that the user was redirected to the "/after-login" page
        $this->assertResponseRedirects('/fr/admin/');
        
        $crawler = $this->client->followRedirect();
        
        // Check some condition after redirection 
        // $this->assertSelectorTextContains('h1', 'Welcome');
    }

    public function testLoginWithInvalidUser(): void
    {
        $crawler = $this->client->request('GET', '/fr/login');

        $form = $crawler->selectButton('Log in')->form();
        $form['email'] = 'invalid_username';
        $form['password'] = 'invalid_password';

        $this->client->submit($form);

        // Asserts that the user was redirected back to the login page
        $this->assertResponseRedirects('/fr/login');

        $crawler = $this->client->followRedirect();
        
        // Check error message is displayed
        $this->assertSelectorExists('.alert.alert-danger');
    }
}

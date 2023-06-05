<?php

namespace App\Tests\Controller\Front;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use Liip\TestFixturesBundle\Services\DatabaseToolCollection;

class ResetPasswordControllerTest extends WebTestCase
{
    /** @var AbstractDatabaseTool */
    protected $databaseTool;

    protected $client;

    public function setUp(): void
    {
        $this->client = static::createClient();
        parent::setUp();
        $this->databaseTool = static::getContainer()->get(DatabaseToolCollection::class)->get();
    }
        
    public function testRestPageExist(): void
    {
        $crawler = $this->client->request('GET', '/fr/reset-password');

        $this->assertResponseIsSuccessful();
        $this->assertSelectorTextContains('h1', 'Forgot Password');
    }
 
    public function testValidUser(): void
    {
        $fixtures = $this
            ->databaseTool->loadFixtures([
                'App\DataFixtures\UserFixtures',
            ])
            ->getReferenceRepository();
        ;

        $user = $fixtures->getReference('user');
        
        $crawler = $this->client->request('GET', '/fr/reset-password');

        $buttonCrawlerNode = $crawler->selectButton('Send');
        $form = $buttonCrawlerNode->form();
        $form['reset_password_request_form[email]'] = $user->getEmail();
        $this->client->submit($form);

        $this->assertResponseRedirects('/fr/reset-password/check-email', Response::HTTP_FOUND);
        $this->assertEmailCount(1); // use assertQueuedEmailCount() when using Messenger

        $email = $this->getMailerMessage();

        $this->assertEmailHtmlBodyContains($email, 'To reset your password');
    }

    public function testInvalidUser(): void
    {
        $crawler = $this->client->request('GET', '/fr/reset-password');

        $buttonCrawlerNode = $crawler->selectButton('Send');
        $form = $buttonCrawlerNode->form();
        $form['reset_password_request_form[email]'] = 'invalid-email@example.com';
        $this->client->submit($form);

        $this->assertResponseRedirects('/fr/reset-password/check-email', Response::HTTP_FOUND);
        $this->assertEmailCount(0); 
    }

    protected function tearDown(): void
    {
        parent::tearDown();
        unset($this->databaseTool);
    }
}

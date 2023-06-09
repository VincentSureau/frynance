<?php

namespace App\Tests\Controller\Front;

use App\Repository\UserRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class RegistrationControllerTest extends WebTestCase
{
    public function testRegistrationPageIsDisplayed()
    {
        $client = static::createClient();
        $crawler = $client->request('GET', '/fr/register');
        $this->assertResponseIsSuccessful();
        $this->assertSelectorTextContains('h1', "M'inscrire");
    }

    public function testNewValidUser(): void
    {
        $client = static::createClient();
        $crawler = $client->request('GET', '/fr/register');
        $buttonCrawlerNode = $crawler->selectButton("M'inscrire");

        $form = $buttonCrawlerNode->form();
        $form['registration_form[email]'] = 'test@example.com';
        $form['registration_form[firstname]'] = 'firstname';
        $form['registration_form[lastname]'] = 'lastname';
        $form['registration_form[plainPassword][first]'] = 'fhW*n%y$zBx3L@&UWqG6ktn#YPmY$tgG68P&S5JSAVPK';
        $form['registration_form[plainPassword][second]'] = 'fhW*n%y$zBx3L@&UWqG6ktn#YPmY$tgG68P&S5JSAVPK';
        $form['registration_form[agreeTerms]']->tick();
        $client->submit($form);

        $this->assertResponseRedirects('/fr/', Response::HTTP_FOUND);

        /** @var UserRepository $userRepository */
        $userRepository = static::getContainer()->get(UserRepository::class);

        /** @var \App\Entity\Post $post */
        $user = $userRepository->findOneByEmail('test@example.com');

        $this->assertNotNull($user);
        $this->assertSame('firstname', $user->getFirstName());
        $this->assertSame('lastname', $user->getLastname());

        $this->assertEmailCount(1); // use assertQueuedEmailCount() when using Messenger

        $email = $this->getMailerMessage();

        $this->assertEmailHtmlBodyContains($email, 'Bienvenue sur Frynance');
    }

    public function testNewInvalidUser(): void
    {
        $client = static::createClient();
        $crawler = $client->request('GET', '/fr/register');
        $buttonCrawlerNode = $crawler->selectButton("M'inscrire");

        $form = $buttonCrawlerNode->form();
        $form['registration_form[email]'] = 'test';
        $form['registration_form[firstname]'] = '';
        $form['registration_form[lastname]'] = '';
        $form['registration_form[plainPassword][first]'] = 'fhW*n%y$zBx3L@&UWqG6ktn#YPmY$tgG68P&S5JSAVPm';
        $form['registration_form[plainPassword][second]'] = 'fhW*n%y$zBx3L@&UWqG6ktn#YPmY$tgG68P&S5JSAVPK';
        $client->submit($form);

        $this->assertResponseIsSuccessful();
        $this->assertSelectorExists('#registration_form_email.is-invalid ~ .invalid-feedback');
        $this->assertSelectorExists('#registration_form_firstname.is-invalid ~ .invalid-feedback');
        $this->assertSelectorExists('#registration_form_lastname.is-invalid ~ .invalid-feedback');
        $this->assertSelectorExists('#registration_form_plainPassword_first.is-invalid ~ .invalid-feedback');
    }
}

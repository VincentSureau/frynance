<?php

namespace App\Tests\Controller\Front;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class HomeControllerTest extends WebTestCase
{
    public function testPageIsDisplayed(): void
    {
        $client = static::createClient();
        $crawler = $client->request('GET', '/fr/');

        $this->assertResponseIsSuccessful();
        $this->assertSelectorTextContains('h1', 'Calculez le coût de vos recettes facilement avec Frynance');

        $crawler = $client->request('GET', '/en/');

        $this->assertResponseIsSuccessful();
        $this->assertSelectorTextContains('h1', 'Calcul your recipes\' cost easily with Frynance');
    }
}

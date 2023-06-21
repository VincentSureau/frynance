<?php

namespace App\Test\Controller\Back;

use App\Entity\Quote;
use App\Repository\QuoteRepository;
use Symfony\Bundle\FrameworkBundle\KernelBrowser;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use Liip\TestFixturesBundle\Services\DatabaseToolCollection;

class QuoteControllerTest extends WebTestCase
{
    private KernelBrowser $client;
    private QuoteRepository $repository;
    private string $path = '/fr/admin/quote/';
    /** @var AbstractDatabaseTool */
    protected $databaseTool;
    private $fixtures;
    private $user;

    protected function setUp(): void
    {
        $this->client = static::createClient();
        $this->repository = static::getContainer()->get('doctrine')->getRepository(Quote::class);
        $this->databaseTool = static::getContainer()->get(DatabaseToolCollection::class)->get();
        foreach ($this->repository->findAll() as $object) {
            $this->repository->remove($object, true);
        }

        $this->fixtures = $this
            ->databaseTool->loadFixtures([
                'App\DataFixtures\UserFixtures',
            ])
            ->getReferenceRepository();
        ;

        $this->user = $this->fixtures->getReference('user');
    }

    public function testIndex(): void
    {
        $this->client->loginUser($this->user);
        $crawler = $this->client->request('GET', $this->path);

        self::assertResponseStatusCodeSame(200);
        self::assertPageTitleContains('Liste des devis');

        // Use the $crawler to perform additional assertions e.g.
        // self::assertSame('Some text on the page', $crawler->filter('.p')->first());
    }

    public function testRemove(): void
    {
        $this->client->loginUser($this->user);

        $originalNumObjectsInRepository = count($this->repository->findAll());

        $fixture = new Quote();
        $fixture
            ->setTitle('My Title')
            ->setUser($this->user)
            ->setTotalPrice(1)
            ->setTotalLabour(1)
            ->setTotalRecipe(1)
            ->setSellPrice(1)
        ;

        $this->repository->save($fixture, true);

        self::assertSame($originalNumObjectsInRepository + 1, count($this->repository->findAll()));

        $this->client->request('GET', sprintf('%s%s/edit', $this->path, $fixture->getId()));
        $this->client->submitForm('Supprimer');

        self::assertSame($originalNumObjectsInRepository, count($this->repository->findAll()));
        self::assertResponseRedirects('/fr/admin/quote/');
    }
}

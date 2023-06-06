<?php

namespace App\Test\Controller\Back;

use App\Entity\Ingredient;
use App\Repository\IngredientRepository;
use Symfony\Bundle\FrameworkBundle\KernelBrowser;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use Liip\TestFixturesBundle\Services\DatabaseToolCollection;
use Liip\TestFixturesBundle\Services\DatabaseTools\AbstractDatabaseTool;

class IngredientControllerTest extends WebTestCase
{
    private KernelBrowser $client;
    private IngredientRepository $repository;
    /** @var AbstractDatabaseTool */
    protected $databaseTool;
    private $fixtures;
    private string $path = '/fr/admin/ingredient/';
    private $user;

    protected function setUp(): void
    {
        $this->client = static::createClient();
        $this->repository = static::getContainer()->get('doctrine')->getRepository(Ingredient::class);
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
        self::assertPageTitleContains('Ingredient index');
        // Use the $crawler to perform additional assertions e.g.
        // self::assertSame('Some text on the page', $crawler->filter('.p')->first());
    }

    public function testNew(): void
    {
        $originalNumObjectsInRepository = count($this->repository->findAll());

        $this->markTestIncomplete();
        $this->client->request('GET', sprintf('%snew', $this->path));

        self::assertResponseStatusCodeSame(200);

        $this->client->submitForm('Save', [
            'ingredient[name]' => 'Testing',
        ]);

        self::assertResponseRedirects('/back/ingredient/');

        self::assertSame($originalNumObjectsInRepository + 1, count($this->repository->findAll()));
    }

    public function testShow(): void
    {
        $this->markTestIncomplete();
        $fixture = new Ingredient();
        $fixture->setName('My Title');

        $this->repository->save($fixture, true);

        $this->client->request('GET', sprintf('%s%s', $this->path, $fixture->getId()));

        self::assertResponseStatusCodeSame(200);
        self::assertPageTitleContains('Ingredient');

        // Use assertions to check that the properties are properly displayed.
    }

    public function testEdit(): void
    {
        $this->markTestIncomplete();
        $fixture = new Ingredient();
        $fixture->setName('My Title');

        $this->repository->save($fixture, true);

        $this->client->request('GET', sprintf('%s%s/edit', $this->path, $fixture->getId()));

        $this->client->submitForm('Update', [
            'ingredient[name]' => 'Something New',
        ]);

        self::assertResponseRedirects('/back/ingredient/');

        $fixture = $this->repository->findAll();

        self::assertSame('Something New', $fixture[0]->getName());
    }

    public function testRemove(): void
    {
        $this->markTestIncomplete();

        $originalNumObjectsInRepository = count($this->repository->findAll());

        $fixture = new Ingredient();
        $fixture->setName('My Title');

        $this->repository->save($fixture, true);

        self::assertSame($originalNumObjectsInRepository + 1, count($this->repository->findAll()));

        $this->client->request('GET', sprintf('%s%s', $this->path, $fixture->getId()));
        $this->client->submitForm('Delete');

        self::assertSame($originalNumObjectsInRepository, count($this->repository->findAll()));
        self::assertResponseRedirects('/back/ingredient/');
    }
}

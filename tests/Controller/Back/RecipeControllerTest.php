<?php

namespace App\Test\Controller\Back;

use App\Entity\Recipe;
use App\Repository\RecipeRepository;
use Symfony\Bundle\FrameworkBundle\KernelBrowser;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use Liip\TestFixturesBundle\Services\DatabaseToolCollection;

class RecipeControllerTest extends WebTestCase
{
    private KernelBrowser $client;
    private RecipeRepository $repository;
    private string $path = '/fr/admin/recipe/';
    /** @var AbstractDatabaseTool */
    protected $databaseTool;
    private $fixtures;
    private $user;

    protected function setUp(): void
    {
        $this->client = static::createClient();
        $this->repository = static::getContainer()->get('doctrine')->getRepository(Recipe::class);
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
        self::assertPageTitleContains('Liste des recettes');

        // Use the $crawler to perform additional assertions e.g.
        // self::assertSame('Some text on the page', $crawler->filter('.p')->first());
    }

    // public function testNew(): void
    // {
    //     $this->client->loginUser($this->user);
        
    //     $originalNumObjectsInRepository = count($this->repository->findAll());

    //     $this->client->request('GET', sprintf('%snew', $this->path));

    //     self::assertResponseStatusCodeSame(200);

    //     $this->client->submitForm('Enregistrer', [
    //         'recipe-title' => 'testing'
    //     ]);


    //     self::assertResponseRedirects(sprintf('%s%s/edit', $this->path, $this->repository->findAll([],['id'=>'DESC'])[0]->getId()));

    //     self::assertSame($originalNumObjectsInRepository + 1, count($this->repository->findAll()));
    // }

    // public function testShow(): void
    // {
    //     $this->markTestIncomplete();
    //     $fixture = new Recipe();
    //     $fixture->setTitle('My Title');
    //     $fixture->setUser('My Title');

    //     $this->repository->save($fixture, true);

    //     $this->client->request('GET', sprintf('%s%s', $this->path, $fixture->getId()));

    //     self::assertResponseStatusCodeSame(200);
    //     self::assertPageTitleContains('Recipe');

    //     // Use assertions to check that the properties are properly displayed.
    // }

    // public function testEdit(): void
    // {
    //     $this->markTestIncomplete();
    //     $fixture = new Recipe();
    //     $fixture->setTitle('My Title');
    //     $fixture->setUser('My Title');

    //     $this->repository->save($fixture, true);

    //     $this->client->request('GET', sprintf('%s%s/edit', $this->path, $fixture->getId()));

    //     $this->client->submitForm('Update', [
    //         'recipe[title]' => 'Something New',
    //         'recipe[user]' => 'Something New',
    //     ]);

    //     self::assertResponseRedirects('/admin/recipe/');

    //     $fixture = $this->repository->findAll();

    //     self::assertSame('Something New', $fixture[0]->getTitle());
    //     self::assertSame('Something New', $fixture[0]->getUser());
    // }

    public function testRemove(): void
    {
        $this->client->loginUser($this->user);

        $originalNumObjectsInRepository = count($this->repository->findAll());

        $fixture = new Recipe();
        $fixture->setTitle('My Title');
        $fixture->setUser($this->user);

        $this->repository->save($fixture, true);

        self::assertSame($originalNumObjectsInRepository + 1, count($this->repository->findAll()));

        $this->client->request('GET', sprintf('%s%s/edit', $this->path, $fixture->getId()));
        $this->client->submitForm('Supprimer');

        self::assertSame($originalNumObjectsInRepository, count($this->repository->findAll()));
        self::assertResponseRedirects($this->path);
    }
}

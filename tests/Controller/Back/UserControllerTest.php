<?php

namespace App\Test\Controller\Back;

use App\Entity\User;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\KernelBrowser;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use Liip\TestFixturesBundle\Services\DatabaseToolCollection;
use Symfony\Component\PasswordHasher\Hasher\PasswordHasherFactoryInterface;
use Symfony\Component\Security\Core\User\LegacyPasswordAuthenticatedUserInterface;

class UserControllerTest extends WebTestCase
{
    private KernelBrowser $client;
    private UserRepository $repository;
    private string $path = '/fr/admin/user/';
    /** @var AbstractDatabaseTool */
    protected $databaseTool;
    private $fixtures;
    private $user;
    private PasswordHasherFactoryInterface $hasherFactory;

    protected function setUp(): void
    {
        $this->client = static::createClient();
        $this->repository = static::getContainer()->get('doctrine')->getRepository(User::class);
        $this->databaseTool = static::getContainer()->get(DatabaseToolCollection::class)->get();
        $this->hasherFactory = static::getContainer()->get(PasswordHasherFactoryInterface::class);
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
        self::assertPageTitleContains('Liste des utilisateurs');

        // Use the $crawler to perform additional assertions e.g.
        // self::assertSame('Some text on the page', $crawler->filter('.p')->first());
    }

    public function testNew(): void
    {
        $this->client->loginUser($this->user);
        $originalNumObjectsInRepository = count($this->repository->findAll());

        $this->client->request('GET', sprintf('%snew', $this->path));

        self::assertResponseStatusCodeSame(200);

        $this->client->submitForm('Enregistrer', [
            'user[email]' => 'Testing@testing.com',
            // 'user[roles]' => ['Testing'],
            'user[plainPassword]' => 'Testing',
            'user[firstname]' => 'Testing',
            'user[lastname]' => 'Testing',
            'user[isVerified]' => true,
        ]);

        self::assertResponseRedirects('/fr/admin/user/');
        $fixture = $this->repository->findOneByEmail('Testing@testing.com');
        self::assertTrue($this->hasherFactory->getPasswordHasher($fixture)->verify($fixture->getPassword(), 'Testing', $fixture instanceof LegacyPasswordAuthenticatedUserInterface ? $fixture->getSalt() : null));
        self::assertSame($originalNumObjectsInRepository + 1, count($this->repository->findAll()));
    }

    public function testShow(): void
    {
        $this->client->loginUser($this->user);
        $fixture = new User();
        $fixture->setEmail('testin@testing.com');
        $fixture->setRoles(['ROLE_USER']);
        $fixture->setPassword('My Title');
        $fixture->setFirstname('My Title');
        $fixture->setLastname('My Title');
        $fixture->setIsVerified(true);

        $this->repository->save($fixture, true);

        $this->client->request('GET', sprintf('%s%s', $this->path, $fixture->getId()));

        self::assertResponseStatusCodeSame(200);
        self::assertPageTitleContains('User');

        // Use assertions to check that the properties are properly displayed.
    }

    public function testEdit(): void
    {
        $this->client->loginUser($this->user);
        $fixture = new User();
        $fixture->setEmail('testing2@gmail.com');
        $fixture->setRoles(['ROLE_USER']);
        $fixture->setPassword('My Title');
        $fixture->setFirstname('My Title');
        $fixture->setLastname('My Title');
        $fixture->setIsVerified(true);

        $this->repository->save($fixture, true);

        $this->client->request('GET', sprintf('%s%s/edit', $this->path, $fixture->getId()));

        $this->client->submitForm('Enregistrer', [
            'user[email]' => 'testing3@testing.com',
            // 'user[roles]' => ['ROLE_NEW'],
            'user[plainPassword]' => 'SomethingNew',
            'user[firstname]' => 'Something New',
            'user[lastname]' => 'Something New',
            'user[isVerified]' => true,
        ]);

        self::assertResponseRedirects('/fr/admin/user/');

        $fixture = $this->repository->findOneByEmail('testing3@testing.com');

        self::assertSame('testing3@testing.com', $fixture->getEmail());
        self::assertSame('Something New', $fixture->getFirstname());
        self::assertSame('Something New', $fixture->getLastname());
        self::assertSame(true, $fixture->isVerified());
        self::assertTrue($this->hasherFactory->getPasswordHasher($fixture)->verify($fixture->getPassword(), 'SomethingNew', $fixture instanceof LegacyPasswordAuthenticatedUserInterface ? $fixture->getSalt() : null));
    }

    public function testRemove(): void
    {
        $this->client->loginUser($this->user);

        $originalNumObjectsInRepository = count($this->repository->findAll());

        $fixture = new User();
        $fixture->setEmail('testing@testing.com');
        $fixture->setRoles(['ROLE_USER']);
        $fixture->setPassword('My Title');
        $fixture->setFirstname('My Title');
        $fixture->setLastname('My Title');
        $fixture->setIsVerified(true);

        $this->repository->save($fixture, true);

        self::assertSame($originalNumObjectsInRepository + 1, count($this->repository->findAll()));

        $this->client->request('GET', sprintf('%s%s', $this->path, $fixture->getId()));
        $this->client->submitForm('Supprimer');

        self::assertSame($originalNumObjectsInRepository, count($this->repository->findAll()));
        self::assertResponseRedirects('/fr/admin/user/');
    }
}

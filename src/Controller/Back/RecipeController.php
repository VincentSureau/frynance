<?php

namespace App\Controller\Back;

use App\Entity\Recipe;
use App\Form\RecipeType;
use App\Repository\RecipeRepository;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\ExpressionLanguage\Expression;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[IsGranted(new Expression('is_granted("ROLE_USER")'))]
#[Route('/recipe')]
class RecipeController extends AbstractController
{
    #[Route('/', name: 'recipe_index', methods: ['GET'])]
    public function index(RecipeRepository $recipeRepository, PaginatorInterface $paginator, Request $request): Response
    {
        $pagination = $paginator->paginate(
            $recipeRepository->getRecipes($this->getUser()), /* query NOT result */
            $request->query->getInt('page', 1), /*page number*/
            10 /*limit per page*/
        );
        return $this->render('back/recipe/index.html.twig', [
            'pagination' => $pagination,
        ]);
    }

    #[Route('/new', name: 'recipe_new', methods: ['GET', 'POST'])]
    public function new(): Response
    {
        $recipe = new Recipe();
        $recipe->setUser($this->getUser());

        return $this->render('back/recipe/new.html.twig', [
            'recipe' => $recipe,
        ]);
    }

    #[IsGranted(
        attribute: new Expression('user === subject["author"] or is_granted("ROLE_ADMIN")'),
        subject: [
            'author' => new Expression('args["recipe"].getUser()'),
            'recipe',
        ],
    )]
    #[Route('/{id}', name: 'recipe_show', methods: ['GET'])]
    public function show(Recipe $recipe): Response
    {
        return $this->render('back/recipe/show.html.twig', [
            'recipe' => $recipe,
        ]);
    }

    #[IsGranted(
        attribute: new Expression('user === subject["author"] or is_granted("ROLE_ADMIN")'),
        subject: [
            'author' => new Expression('args["recipe"].getUser()'),
            'recipe',
        ],
    )]
    #[Route('/{id}/edit', name: 'recipe_edit', methods: ['GET', 'POST'])]
    public function edit(Recipe $recipe): Response
    {
        return $this->render('back/recipe/edit.html.twig', [
            'recipe' => $recipe,
        ]);
    }

    #[Route('/{id}', name: 'recipe_delete', methods: ['POST'])]
    public function delete(Request $request, Recipe $recipe, RecipeRepository $recipeRepository): Response
    {
        if ($this->isCsrfTokenValid('delete'.$recipe->getId(), $request->request->get('_token'))) {
            $recipeRepository->remove($recipe, true);
        }

        return $this->redirectToRoute('app_admin_recipe_index', [], Response::HTTP_SEE_OTHER);
    }
}

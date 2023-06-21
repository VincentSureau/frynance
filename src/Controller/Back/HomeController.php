<?php

namespace App\Controller\Back;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[IsGranted('ROLE_USER')]
class HomeController extends AbstractController
{
    #[Route('', name: 'home')]
    public function index(Request $request): Response
    {
        return $this->redirectToRoute('app_admin_recipe_index', ['_locale' => $request->getLocale()]);
    }
}
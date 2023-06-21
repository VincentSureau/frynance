<?php

namespace App\Controller\Front;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class LegalsController extends AbstractController
{
    #[Route('/legals', name: 'legals')]
    public function index(): Response
    {
        return $this->render('front/legals/index.html.twig', [
        ]);
    }
}

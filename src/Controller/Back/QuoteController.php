<?php

namespace App\Controller\Back;

use App\Entity\Quote;
use App\Form\QuoteType;
use App\Repository\QuoteRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/quote')]
class QuoteController extends AbstractController
{
    #[Route('/', name: 'quote_index', methods: ['GET'])]
    public function index(QuoteRepository $quoteRepository): Response
    {
        return $this->render('back/quote/index.html.twig', [
            'quotes' => $quoteRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'quote_new', methods: ['GET', 'POST'])]
    public function new(Request $request, QuoteRepository $quoteRepository): Response
    {
        $quote = new Quote();

        return $this->render('back/quote/new.html.twig', [
            'quote' => $quote
        ]);
    }

    #[Route('/{id}/edit', name: 'quote_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Quote $quote, QuoteRepository $quoteRepository): Response
    {
        return $this->render('back/quote/edit.html.twig', [
            'quote' => $quote
        ]);
    }

    #[Route('/{id}', name: 'quote_delete', methods: ['POST'])]
    public function delete(Request $request, Quote $quote, QuoteRepository $quoteRepository): Response
    {
        if ($this->isCsrfTokenValid('delete'.$quote->getId(), $request->request->get('_token'))) {
            $quoteRepository->remove($quote, true);
        }

        return $this->redirectToRoute('app_admin_quote_index', [], Response::HTTP_SEE_OTHER);
    }
}

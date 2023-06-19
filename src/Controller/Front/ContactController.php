<?php

namespace App\Controller\Front;

use App\Utils\Contact;
use App\Form\ContactType;
use Symfony\Component\Mime\Address;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ContactController extends AbstractController
{
    #[Route('/contact', name: 'contact')]
    public function index(Request $request, MailerInterface $mailer): Response
    {
        $contact = new Contact();

        $form = $this->createForm(ContactType::class, $contact);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
            $email = (new TemplatedEmail())
                ->from(new Address('contact@webmonkey.fr', 'frynance'))
                ->to('contact@webmonkey.fr')
                ->subject('Vous avez reçu un message de Frynance')
                ->htmlTemplate('front/contact/email.html.twig')
                ->context([
                    'contact' => $contact,
                ])            ;
            $mailer->send($email);

            $this->addFlash(
                'success',
                'contact.message_sent'
            );
            return $this->redirectToRoute("app_front_home");
        }

        return $this->render('front/contact/index.html.twig', [
            'form' => $form,
            'contact' => $contact
        ]);
    }
}

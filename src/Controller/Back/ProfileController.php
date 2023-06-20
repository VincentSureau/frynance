<?php

namespace App\Controller\Back;

use App\Form\ProfileInfosType;
use App\Form\ProfilePasswordType;
use App\Repository\UserRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasher;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Security\Core\Authentication\Token\UsernamePasswordToken;

class ProfileController extends AbstractController
{
    #[Route('/profile', name: 'profile')]
    public function index(Request $request, UserPasswordHasherInterface $userPasswordHasher, UserRepository $userRepository): Response
    {
        /** @var \App\Entity\User $user */
        $user = $this->getUser();

        $infosForm = $this->createForm(ProfileInfosType::class, $user);
        $infosForm->handleRequest($request);

        $changePasswordForm = $this->createForm(ProfilePasswordType::class);
        $changePasswordForm->handleRequest($request);

        if($infosForm->isSubmitted() && $infosForm->isValid()) {
            $userRepository->save($user, true);
            $this->addFlash('success', 'Your data have been updated');
            $this->redirectToRoute('app_admin_profile');
        }
        
        if($changePasswordForm->isSubmitted() && $changePasswordForm->isValid()) {
            $userRepository->upgradePassword($user, $userPasswordHasher->hashPassword(
                $user,
                $changePasswordForm->get('plainPassword')->getData()
            ));

            $this->addFlash('success', 'Your password has been updated');
            $this->redirectToRoute('app_admin_profile');
        }

        return $this->render('back/profile/index.html.twig', [
            'infosForm' => $infosForm,
            'changePasswordForm' => $changePasswordForm
        ]);
    }
}

<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Vich\UploaderBundle\Form\Type\VichImageType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;

class ProfileInfosType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('imageFile', VichImageType::class, [
                'required' => false,
                'label' => 'Avatar'
            ])
            ->add('firstname', TextType::Class, [
                'label' => 'Firstname'
            ])
            ->add('lastname', TextType::Class, [
                'label' => 'Lastname'
            ])
            ->add('email', EmailType::Class, [
                'label' => 'Email'
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
            'translation_domain' => 'admin'
        ]);
    }
}

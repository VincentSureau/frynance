<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class UserType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('email', EmailType::class, [
                "label" => "admin.user.form.email"
            ])
            // ->add('roles')
            ->add('plainPassword', TextType::class, [
                'mapped' => false
            ])
            ->add('firstname', TextType::class, [
                'label' => "admin.user.form.firstname"
            ])
            ->add('lastname', TextType::class, [
                'label' => "admin.user.form.lastname"
            ])
            ->add('isVerified', CheckboxType::class, [
                'label' => "admin.user.form.isverified"
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
            'translation_domain' => 'admin',
            'validation_groups' => ['registration'],
        ]);
    }
}

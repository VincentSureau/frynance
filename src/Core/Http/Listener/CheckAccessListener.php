<?php

namespace App\Core\Http\Listener;

use Symfony\Component\HttpKernel\Event\RequestEvent;
use Symfony\Component\EventDispatcher\Attribute\AsEventListener;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[AsEventListener('kernel.request', method: 'onKernelRequest')]
class CheckAccessListener extends AbstractController
{
    public function onKernelRequest(RequestEvent $event): void
    {
        $request = $event->getRequest();
        $route = $request->attributes->get('_route');

        if (str_starts_with($route, 'app_admin_')) {
            $user = $this->getUser();
            if ($user === null) {
                $this->denyAccessUnlessGranted([
                    'ROLE_ADMIN',
                    'ROLE_SUPER_ADMIN',
                ]);
            }
        }
    }
}
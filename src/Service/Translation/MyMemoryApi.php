<?php

declare(strict_types=1);

namespace App\Service\Translation;

use Symfony\Contracts\HttpClient\HttpClientInterface;
use Symfony\Component\DependencyInjection\Attribute\Autowire;

class MyMemoryApi
{
    const MY_MEMORY_URL = "https://api.mymemory.translated.net/get";

    public function __construct(
        private HttpClientInterface $client,
        #[Autowire('%env(resolve:MY_MEMORY_KEY)%')]
        private $api_key
    ) {
    }

    public function translate(string $word, string $from, string $to): string
    {
        $response = $this->client->request(
            'GET',
            self::MY_MEMORY_URL,
            [
                'query' => [
                    'q' => $word,
                    'langpair' => sprintf('%s|%s', $from, $to),
                    'key' => $this->api_key
                ]
            ]
        );
        
        $statusCode = $response->getStatusCode();

        if($statusCode !== 200) {
            return $word;
        }

        $content = $response->getContent();
        $content = $response->toArray();

        return $content['responseData']['translatedText'];
    }
}
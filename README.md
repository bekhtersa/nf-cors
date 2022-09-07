# @nfaddon/nf-cors

Для возможности интеграции фреймворка в сторонние приложения.

В конфигурации приложения NF указать для каких адресов доступны запросы 
с указанием ответных заголовков.

Например:
```
"@nfaddon/cors": {
    "https://example.com": {
        "OPTIONS": {
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
            "Access-Control-Allow-Headers": "DNT,User-agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Cookie",
            "Access-Control-Allow-Credentials": "true"
        },
        "GET": {
            "Access-Control-Allow-Credentials": "true"
        },
        "POST": {
            "Access-Control-Allow-Credentials": "true"
        }
    }
}
```

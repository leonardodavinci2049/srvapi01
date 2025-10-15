#!/bin/bash
echo "=== Testando API sem chave ==="
curl -s -X POST http://localhost:3333/account/v1/find-account-config \
  -H "Content-Type: application/json" \
  -d '{"userId": 1}' || echo "Request failed"

echo -e "

=== Testando API com chave correta ==="
curl -s -X POST http://localhost:3333/account/v1/find-account-config \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer 9fc735176b51137b87d4303011dee5eb" \
  -d '{"userId": 1}' || echo "Request failed"

echo -e "

=== Testando endpoint público ==="
curl -s -X GET http://localhost:3333/check || echo "Request failed"


---
name: save-stored-procedure
description: Grava (deploy) uma stored procedure MariaDB no banco de dados a partir de um arquivo .sql. Use quando o usuário pedir para gravar, salvar, publicar, aplicar ou fazer deploy de uma procedure, informando o caminho do arquivo. Antes de gravar, valida sintaxe e referências de tabelas/colunas; em caso de erro, NÃO grava e avisa o usuário.
---

# Skill: Gravar Stored Procedure no Banco de Dados

Responsável por publicar uma stored procedure (`CREATE PROCEDURE`) contida em um
arquivo `.sql` no banco **MariaDB**, usando o cliente de terminal `mariadb`,
**somente após validar que não há erros de sintaxe nem de referência**.

## Quando usar

Use esta skill QUANDO o usuário solicitar gravar / salvar / publicar / aplicar /
fazer deploy de uma stored procedure, informando (ou referenciando) o caminho do
arquivo `.sql` que contém o código.

Exemplo de chamada do usuário:
> "grava a procedure `database-objects/stored-procedures/physical-product/physical_product/find/sp_physical_product_find_all_v2/sp_physical_product_find_all_v2.sql`"

## Pré-requisitos / Contexto do projeto

1. **Banco de dados**: o SGBD em uso é o **MariaDB**. A operação deve ser feita
   pelo binário `mariadb`, instalado pelo pacote `mariadb-client`.
2. **Credenciais do banco**: estão no arquivo `.env` (raiz do projeto), nestas variáveis:
   - `DATABASE_HOST`, `DATABASE_PORT`, `DATABASE_NAME`
   - `DATABASE_USER`, `DATABASE_PASSWORD`
   - Carregue-as antes de qualquer comando (ver seção "Conexão").
3. **Schemas das tabelas**: TODO o DDL (estrutura, campos e tipos) das tabelas do
   banco está na pasta **`database-objects/schemas/`** (um arquivo `.sql` por
   tabela + um `index.md` com o índice). Consulte esses arquivos sempre que
   precisar confirmar nomes de tabelas, nomes de colunas e seus tipos de dados.
4. **Estrutura do arquivo de procedure**: cada arquivo já contém, no início,
   `DROP PROCEDURE IF EXISTS <nome>;` seguido de `DELIMITER $$` + `CREATE PROCEDURE ...`.
   O DROP + CREATE é necessário porque **não existe `UPDATE PROCEDURE`** — a
   forma de "atualizar" é dropar e recriar.
5. **Cliente CLI**: assume-se que há o binário `mariadb` no PATH. Em Ubuntu/WSL,
   instale com:
   ```bash
   sudo apt update
   sudo apt install -y mariadb-client
   ```

## Conexão e pré-flight (use sempre este padrão)

Antes de executar qualquer validação no banco, carregue as credenciais, valide
as variáveis obrigatórias e detecte o cliente MariaDB:

```bash
set -euo pipefail

set -a; source ./.env; set +a
export MYSQL_PWD="$DATABASE_PASSWORD"        # evita expor a senha na linha de comando
CLIENT="$(command -v mariadb)"

if [ -z "$CLIENT" ]; then
  echo "Erro: cliente MariaDB não encontrado. Instale com: sudo apt install -y mariadb-client"
  exit 1
fi

for VAR_NAME in DATABASE_HOST DATABASE_PORT DATABASE_NAME DATABASE_USER DATABASE_PASSWORD; do
  if [ -z "${!VAR_NAME:-}" ]; then
    echo "Erro: variável $VAR_NAME não definida no .env"
    exit 1
  fi
done
```

Em todos os comandos abaixo, use:
```bash
"$CLIENT" --show-warnings -h"$DATABASE_HOST" -P"$DATABASE_PORT" -u"$DATABASE_USER" ...
```

Antes de validar ou gravar, teste a conexão sem selecionar banco:

```bash
"$CLIENT" --show-warnings -h"$DATABASE_HOST" -P"$DATABASE_PORT" -u"$DATABASE_USER" \
  -e "SELECT VERSION() AS mariadb_version;"
```

## Fluxo de trabalho (sempre siga ESTA ordem)

### Passo 0 — Confirmar o alvo
- Confirme o caminho do arquivo `.sql` da procedure informado pelo usuário.
- Leia o arquivo e identifique o **nome da procedure** (após `CREATE PROCEDURE`).
- Se o usuário já indicou explicitamente o arquivo e pediu para gravar, trate o
  nome identificado como confirmação do alvo e siga com as validações.
- Se houver divergência entre nome do arquivo/pasta e `CREATE PROCEDURE`, pare e
  confirme com o usuário antes de prosseguir.

### Passo 1 — Análise estática do código
Leia o conteúdo do arquivo e verifique:
- Estrutura básica presente: `DROP PROCEDURE IF EXISTS`, `DELIMITER $$`,
  `CREATE PROCEDURE <nome>(<params>)`, bloco `BEGIN ... END`, `DELIMITER ;`.
- Parênteses, `BEGIN/END`, `IF/THEN/END IF`, `CASE/END CASE`, loops
  (`WHILE/END WHILE`, `LOOP/END LOOP`) balanceados.
- Todo `DECLARE` está APÓS o `BEGIN` e ANTES de qualquer outro statement.
- Parâmetros com prefixo consistente (`PE_` para entrada, conforme convenção).
- Nenhum `DELIMITER` ausente ou mal posicionado.
- Não há sintaxe específica de outro SGBD (ex.: `GO` do SQL Server,
  `@variable` estilo T-SQL em contextos inválidos, etc.).

Se encontrar erro de sintaxe óbvio **PARE**, não grave e informe o erro
(linha + descrição) ao usuário.

### Passo 2 — Validação de referências (tabelas/colunas)
- Liste as tabelas referenciadas no `FROM`/`JOIN`/`INTO` da procedure.
- Para cada tabela, abra o arquivo correspondente em
  `database-objects/schemas/<tabela>.sql` e confirme:
  - O nome da tabela existe.
  - As colunas referenciadas no `SELECT`/`WHERE`/`JOIN ... ON` existem.
  - Os tipos usados em comparações/joins são compatíveis.
- Aliases (`AS`) e tabelas derivadas não precisam existir nos schemas.

Se alguma tabela/coluna não existir, **PARE**, não grave e informe a
inconsistência (ex.: "coluna `tbl_x.coluna_y` não encontrada no schema").

### Passo 3 — Validação de sintaxe no banco (schema temporário)
Mesmo após a análise estática, valide a sintaxe de fato no MariaDB usando um
**banco de dados temporário**. O MariaDB faz o *parse* completo do corpo da
procedure no momento do `CREATE PROCEDURE`, então isso detecta erros de
sintaxe reais. Como o binding de tabelas é *lazy*, a procedure compila mesmo
sem as tabelas existirem — perfeito para validar apenas a sintaxe sem risco.

Execute a validação ANTES de tocar o banco de produção:

```bash
SQL_FILE="CAMINHO_DO_ARQUIVO.sql"
TMP_DB="tmp_sp_validation"

cleanup_tmp_db() {
  "$CLIENT" --show-warnings -h"$DATABASE_HOST" -P"$DATABASE_PORT" -u"$DATABASE_USER" \
    -e "DROP DATABASE IF EXISTS \`$TMP_DB\`;" >/dev/null 2>&1 || true
}

trap cleanup_tmp_db EXIT

# 1) cria banco temporário (dropa antes por segurança)
"$CLIENT" --show-warnings -h"$DATABASE_HOST" -P"$DATABASE_PORT" -u"$DATABASE_USER" \
  -e "DROP DATABASE IF EXISTS \`$TMP_DB\`; CREATE DATABASE \`$TMP_DB\`;"

# 2) tenta compilar a procedure no banco temporário (valida sintaxe)
"$CLIENT" --show-warnings -h"$DATABASE_HOST" -P"$DATABASE_PORT" -u"$DATABASE_USER" "$TMP_DB" \
  < "$SQL_FILE"
```

- **Se o comando acima retornar erro** → há erro de sintaxe. **NÃO GRAVE** no
  banco de produção. A limpeza será executada pelo `trap`; informe o usuário com
  a mensagem de erro retornada pelo MariaDB (linha e causa).
- **Se não retornar erro** → a sintaxe está válida. Prossiga para o Passo 4.

### Passo 4 — Gravar no banco de produção
Agora sim, execute o arquivo no banco de destino (`$DATABASE_NAME`). O script
faz `DROP PROCEDURE IF EXISTS` e depois `CREATE PROCEDURE`:

```bash
"$CLIENT" --show-warnings -h"$DATABASE_HOST" -P"$DATABASE_PORT" -u"$DATABASE_USER" "$DATABASE_NAME" \
  < "$SQL_FILE"
```

- **Sucesso** → confirme ao usuário que a procedure foi gravada (nome + banco).
- **Erro** (improvável após o Passo 3, mas pode ocorrer por permissão/conexão) →
  informe o erro. Atenção: o `DROP` já pode ter removido a procedure anterior,
  então deixe o usuário ciente disso.

Após gravar, confirme no catálogo:

```bash
"$CLIENT" --show-warnings -h"$DATABASE_HOST" -P"$DATABASE_PORT" -u"$DATABASE_USER" "$DATABASE_NAME" \
  -N -B -e "SELECT CONCAT(ROUTINE_SCHEMA, '.', ROUTINE_NAME, ' ', ROUTINE_TYPE)
             FROM information_schema.ROUTINES
            WHERE ROUTINE_SCHEMA = DATABASE()
              AND ROUTINE_NAME = 'NOME_DA_PROCEDURE';"
```

### Passo 5 — Limpeza
Sempre remova o banco temporário de validação ao final (sucesso ou falha):

```bash
"$CLIENT" --show-warnings -h"$DATABASE_HOST" -P"$DATABASE_PORT" -u"$DATABASE_USER" \
  -e "DROP DATABASE IF EXISTS \`tmp_sp_validation\`;"
```

Quando estiver usando o padrão do Passo 3, a limpeza já fica garantida pelo
`trap cleanup_tmp_db EXIT`; ainda assim, confirme no output que o deploy não
ficou parado antes da limpeza.

## Resumo das regras OBRIGATÓRIAS

- **NUNCA** grave direto no banco de produção sem antes validar (Passos 1 a 3).
- Se houver **qualquer** erro de sintaxe ou de referência, **PARE**, não grave e
  informe o erro ao usuário de forma clara (linha + causa).
- Sempre use um **schema temporário** para validar a sintaxe real — nunca
  valide direto no banco de produção (o `DROP` no início do arquivo removeria a
  procedure atual caso o `CREATE` falhasse).
- Sempre **limpe** o banco temporário ao final.
- Use `trap` para limpar o schema temporário mesmo quando a validação ou o deploy
  falhar.
- Após o deploy, consulte `information_schema.ROUTINES` para confirmar que a
  procedure existe no banco de destino.
- Nunca imprima/exiba a senha do banco. Use `MYSQL_PWD` (variável de ambiente)
  em vez de `-pSenha` na linha de comando, para evitar expor a credencial.
- O banco é **MariaDB**; ao citar o SGBD nas mensagens, use "MariaDB".

# @hitechline/rebimboka-database

Responsável pelo estrutura e conexões com os bancos de dados.

## Instalação

Lembre-se de ter seguido o passo a passo de [Configuração de ambiente](https://github.com/hitechline/hitl-rbk-packages#configura%C3%A7%C3%A3o-de-ambiente) para instalar às bibliotecas.

```bash
npm install @hitechline/database
```

## Docker

Se preferir você pode criar os containers de cada banco utilizando docker.

### PostgreSQL

Para criar um banco de dados PostgreSQL, utilize o seguinte comando:

```bash
docker run --name pg -d -p 5432:5432 -e POSTGRES_DB=docker -e POSTGRES_USER=root -e POSTGRES_PASSWORD=docker postgres
```

Lembrando que:

- O banco inicial será `docker`
- O usuário será `root`
- A senha será `docker`
- E a porta de acesso será `5432`

### Mongo

Para criar um banco de dados Mongo, utilize o seguinte comando:

```bash
docker run --name mongo -d -p 27017:27017 -e MONGODB_ADVERTISED_HOSTNAME=127.0.0.1 -e MONGODB_REPLICA_SET_MODE=primary -e MONGODB_ROOT_USER=root -e MONGODB_ROOT_PASSWORD=docker -e MONGODB_REPLICA_SET_KEY=replicasetkey123 bitnami/mongodb:latest
```

Lembrando que:

- O usuário será `root`
- A senha será `docker`
- E a porta de acesso será `27017`

## Sincronização

### PostgreSQL

Para sincronizar seu banco postgres com as migrations, siga os seguintes passos:

1. Na pasta `prisma/postgres` (fora do src) copie o arquivo `.env.example` e renomeie-o para `.env`.
2. Defina as credenciais.
3. Entre no diretório dos packages, com: `cd packages/database`.
4. Rode as migrations: `npm run migrate:postgres:dev`.

### Mongo

Para sincronizar seu banco mongo, siga os seguintes passos:

1. Na pasta `prisma/mongo` (fora do src) copie o arquivo `.env.example` e renomeie-o para `.env`.
2. Defina as credenciais.
3. Entre no diretório dos packages, com: `cd packages/database`.
4. Agora basta sincronizar: `npm run db:push:mongo`.

## Alterações

### PostgreSQL

Faça alguma alteração no arquivo `schema.prisma` dentro de `prisma/postgres` (fora do src) e rode o comando `npm run migrate:postgres:dev` onde será aberto um prompt perguntando o nome da migration a ser criada. Com o nome inserido basta dar enter, que a alteração será feita.

Lembre-se de estar no diretório `packages/database` e ter configurado as credenciais.

### Mongo

Faça alguma alteração no arquivo `schema.prisma` dentro de `prisma/mongo` (fora do src) e rode o comando `npm run db:push:mongo` para sincronizar as alterações.

Lembre-se de estar no diretório `packages/database` e ter configurado as credenciais.

# @hitechline/rebimboka-database

Responsável pelo estrutura e conexões com os bancos de dados.

## Instalação

> Lembre-se de ter seguido o passo a passo de [Configuração de ambiente](https://github.com/hitechline/hitl-rbk-packages/blob/develop/README.md) para instalar às bibliotecas.

```bash
npm install @hitechline/database
```

## Docker

Se preferir você pode criar os containers de cada banco utilizando docker.

Para criar um banco de dados PostgreSQL, utilize o seguinte comando:

```bash
docker run --name pg -d -p 5432:5432 -e POSTGRES_DB=docker -e POSTGRES_USER=root -e POSTGRES_PASSWORD=docker postgres
```

> Lembrando que:
>
> - O banco inicial será `docker`;
> - O usuário será `root`;
> - A senha será `docker`;
> - E a porta de acesso será `5432`.

Para criar um banco de dados Mongo, utilize o seguinte comando:

```bash
docker run --name mongo -d -p 27017:27017 -e MONGODB_ADVERTISED_HOSTNAME=127.0.0.1 -e MONGODB_REPLICA_SET_MODE=primary -e MONGODB_ROOT_USER=root -e MONGODB_ROOT_PASSWORD=docker -e MONGODB_REPLICA_SET_KEY=replicasetkey123 bitnami/mongodb:latest
```

> Lembrando que:
>
> - O usuário será `root`;
> - A senha será `docker`;
> - E a porta de acesso será `27017`.

## Migrações do Banco de dados

### Sincronização

Para subir as migrations no seu banco, você precisa escolher qual banco de dados que deseja subir. Se for postgres você precisa configurar as variaveis de ambiente, basta copiar o arquivo `.env.example` e renomear para `.env` e definir as credenciais. Se for mongo, você repitira o mesmo processo.

Tendo definido as credenciais do banco de dados escolhido você precisa rodar alguns comandos:

1. Entre no diretório

```bash

```

### Alterações

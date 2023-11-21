# Rebimboka Packages

Bibliotecas utilizadas para o desenvolvimento de front-end e back-end.

## Bibliotecas

Disponíveis no [Github NPM Registry](https://github.com/orgs/hitechline/packages?repo_name=hitl-rbk-packages).

- [@hitechline/rebimboka-database](https://github.com/hitechline/hitl-rbk-packages/blob/develop/packages/database)
- [@hitechline/rebimboka-errors](https://github.com/hitechline/hitl-rbk-packages/blob/develop/packages/errors)
- [@hitechline/rebimboka-protos](https://github.com/hitechline/hitl-rbk-packages/blob/develop/packages/protos)

## Configuração de ambiente

Para usar as bibliotecas, você precisa fazer login com um token especial. Siga os seguintes passos:

1. Primeiro você precisa gerar um token pessoal do tipo `classic`.
2. Em [Developer settings](https://github.com/settings/tokens), gere um novo token.
3. Selecione os seguintes escopos de token: `repo`, `workflow`, `write:packages` e `admin:org`.
4. Abra seu terminal e usando o seguinte comando defina o token nas configurações NPM de sua máquina:

```bash
npm config set //npm.pkg.github.com/:_authToken=YOUR_TOKEN
```

5. Defina o escopo.

```bash
npm config set @hitechline:registry https://npm.pkg.github.com/
```

## Desenvolvimento

Para realizar alguma contribuição em alguma biblioteca, você primeiramente precisa instalar às dependências utilizando `npm install`, lembre-se de ter a versão do Node.js superior a 14.

Feito isso basta seguir o passo a passo da documentação da biblioteca escolhida para poder começar fazer alterações.

hitechline sairá de linha.

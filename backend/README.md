# Backend do LandingPageBolos

Este README descreve a estrutura atual do backend do projeto `LandingPageBolos`, incluindo as pastas, arquivos e as responsabilidades principais de cada item.

## Visão geral

O backend está implementado em TypeScript com Express, organizado em módulos para rotas, controladores, serviços, middlewares e configuração de servidor.

## Estrutura de pastas

- `dist/`
  - Saída de build do TypeScript.
- `src/`
  - Código-fonte principal do backend.
- `package.json`
  - Dependências, scripts e configuração do pacote.
- `tsconfig.json`
  - Configuração do compilador TypeScript.

## Estrutura do `src/`

- `app.ts`
  - Configura e exporta a instância do Express.
  - Aplica middlewares `cors`, `express.json`, `express.urlencoded` e rotas estáticas para uploads.
  - Registra rota global de health check em `/health`.
  - Monta o roteador principal em `/api`.

- `server.ts`
  - Importa `app.ts` e inicia o servidor na porta definida por `process.env.PORT` ou `3333`.

- `database/`
  - `connection.ts`
    - Arquivo presente, atualmente sem conteúdo definido.

- `controllers/`
  - `auth.controller.ts`
    - Arquivo presente, atualmente sem implementação.
  - `content.controller.ts`
    - Arquivo presente, atualmente sem implementação.
  - `health.controller.ts`
    - Implementa o endpoint de health check que retorna `{ status: "ok" }`.
  - `image.controller.ts`
    - Arquivo presente, atualmente sem implementação.

- `middlewares/`
  - `auth.middleware.ts`
    - Contém middleware placeholder `ensureAuth` que passa para o próximo middleware sem verificar autenticação.
  - `upload.middleware.ts`
    - Define o storage do `multer` para receber uploads de arquivos e gravá-los em `src/public/uploads`.

- `routes/`
  - `auth.routes.ts`
    - Arquivo presente, atualmente sem implementação.
  - `content.routes.ts`
    - Arquivo presente, atualmente sem implementação.
  - `image.routes.ts`
    - Arquivo presente, atualmente sem implementação.
  - `index.ts`
    - Roteador principal que registra `/health` e importa outros roteadores conforme necessário.

- `services/`
  - `auth.service.ts`
    - Arquivo presente, atualmente sem implementação.
  - `content.service.ts`
    - Arquivo presente, atualmente sem implementação.
  - `image.service.ts`
    - Arquivo presente, atualmente sem implementação.
  - `placeholder.service.ts`
    - Arquivo presente, provavelmente usado como serviço de exemplo ou placeholder.

## Dependências principais

- `express`
- `cors`
- `dotenv`
- `jsonwebtoken`
- `bcryptjs`
- `multer`

## DevDependencies principais

- `typescript`
- `ts-node-dev`
- `@types/node`
- `@types/express`
- `@types/cors`
- `@types/jsonwebtoken`
- `@types/multer`
- `@types/bcryptjs`

## Scripts disponíveis

- `npm run dev`
  - Executa o servidor em modo de desenvolvimento com `ts-node-dev` e recarregamento automático.
- `npm run build`
  - Compila o TypeScript para `dist/` usando `tsc -p .`.
- `npm run start`
  - Executa o build compilado a partir de `dist/server.js`.
- `npm run test`
  - Placeholder que retorna erro, sem testes configurados.

## Observações atuais

- Vários controladores e rotas ainda estão sem implementação (`auth`, `content`, `image`).
- `database/connection.ts` também está vazio, sem configuração de banco de dados.
- O middleware de autenticação é um placeholder e não protege nenhuma rota.
- O backend já possui um health check funcional e suporte básico a uploads via `multer`.

## Próximos passos sugeridos

1. Implementar rotas e controladores de `auth`, `content` e `image`.
2. Definir a conexão com banco de dados em `database/connection.ts`.
3. Completar os serviços correspondentes e aplicar autenticação real.
4. Adicionar testes e documentação adicional de endpoints.

# Projeto Final Bloco 02 - E-commerce Farmácia

**Objetivo:** Sistema de Comércio Eletrônico de Farmácia (API REST com NestJS)
**Tempo Limite Estimado:** 4h30m
**Entregável:** Link do Repositório GitHub + Prints/Vídeo no Canvas

## Instruções Gerais & Fluxo de Trabalho
- [x] Utilizar Visual Studio Code.
- [x] Criar repositório projeto_final_bloco_02 no GitHub.
- [ ] Commit & Push ao final de cada etapa.
- [ ] Prints/Evidências do funcionamento para entrega no Canvas.

## Etapa 01: Configuração (CONCLUÍDO)
**Estimativa: 45 min**

- [x] Criar Branch 01_Configurando_Projeto.
- [x] Inicializar projeto NestJS.
- [x] Conectar com repositório remoto.
- [x] Instalar dependências (@nestjs/typeorm, typeorm, mysql2, class-validator, etc.).
- [x] Configurar Banco de Dados db_farmacia no app.module.ts.
- [x] Configurar main.ts (ValidationPipe, Timezone, CORS).
- [x] Testar inicialização da aplicação.
- [x] Atualizar Branch Remota.

## Etapa 02: CRUD Categoria (FINALIZADO)
**Estimativa: 90 min**

- [x] Criar Branch 02_CRUD_Categoria.
- [x] Criar Módulo Categoria:
    - [x] Entity Categoria (Atributos: id, tipo + Relacionamento OneToMany futuro).
    - [x] Module CategoriaModule.
    - [x] Service CategoriaService.
    - [x] Controller CategoriaController.
- [x] Implementar 6 Métodos CRUD:
    - [x] findAll() - Listar todas.
    - [x] findById(id) - Buscar por ID.
    - [x] findByTipo(tipo) - Buscar por descrição/tipo.
    - [x] create(categoria) - Cadastrar.
    - [x] update(categoria) - Atualizar.
    - [x] delete(id) - Deletar.
- [x] Validação:
    - [x] Testar todas as rotas no Insomnia.
    - [x] Tirar Prints dos testes de Categoria.
- [x] Git: add, commit e push da branch atual.

## Etapa 03: Produto e Relacionamento (PRÓXIMO PASSO)
**Estimativa: 90 min**

- [ ] Git: Criar e mudar para Branch 03_CRUD_Produto_Relacionamento.
- [x] Criar Módulo Produto:
    - [x] Entity Produto (Atributos: id, nome, descricao, quantidade, preco, foto).
    - [x] Module ProdutoModule.
    - [x] Service ProdutoService.
    - [x] Controller ProdutoController.
- [x] Implementar Relacionamento (1:N Bidirecional):
    - [x] Adicionar @ManyToOne na Entity Produto (Muitos produtos -> Uma Categoria).
    - [x] Adicionar @OneToMany na Entity Categoria (Uma Categoria -> Muitos Produtos).
- [x] Implementar 6 Métodos CRUD em Produto:
    - [x] findAll (incluindo a relação com categoria).
    - [x] findById (incluindo a relação).
    - [x] findByNome (busca por nome do produto).
    - [x] create.
    - [x] update.
    - [x] delete.
- [ ] Validação:
    - [ ] Testar rotas de Produto no Insomnia.
    - [ ] Verificar se ao buscar Categoria, os Produtos aparecem.
    - [ ] Verificar se ao buscar Produto, a Categoria aparece.
    - [ ] Tirar Prints dos testes.
- [ ] Git: Atualizar a branch com o conteúdo desenvolvido.

## Etapa 04: Extras (Opcional)
- [x] Criar Branch 04_extras.
- [ ] Implementar validações extras (ex: preço não pode ser negativo).
- [x] Documentação com Swagger (Diferencial). 
- [ ] Merge para a branch main (git checkout main -> git merge 04_extras).

## Finalização e Entrega
- [ ] Merge Final: Garantir que todo o código das branches esteja na main.
- [ ] Evidências: Organizar os prints das telas ou vídeo de funcionamento.
- [ ] Canvas:
    - [ ] Enviar Link do Repositório GitHub.
    - [ ] Enviar Arquivos de Mídia (Prints/Vídeo).

## Jest Testing Environment Setup (COMPLETE)
**Estimativa: 30 min**

- [x] Instalar supertest (`npm install --save-dev supertest`)
- [x] Instalar sqlite3 (`npm install sqlite3`)
- [x] Instalar @types (`npm i --save-dev @types/jest @types/supertest`)
- [x] Configurar test/app.e2e-spec.ts:
  - Import TypeOrmModule, ValidationPipe
  - beforeAll, SQLite in-memory DB config (dropSchema: true)
  - app.useGlobalPipes(new ValidationPipe())
  - afterAll(app.close())
- [x] Run `npm run test:e2e` to verify setup (passes empty suite)
- [ ] Write tests for Categoria/Produto CRUD
- [ ] Git commit/push

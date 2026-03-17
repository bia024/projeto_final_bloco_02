# Projeto Final Bloco 02 - E-commerce Farmácia

Sistema de Comércio Eletrônico de Farmácia desenvolvido com **NestJS**, **TypeORM** e **MySQL**. Implementa CRUD completo para **Categoria** e **Produto** com relacionamento One-to-Many bidirecional.

[![NestJS](https://img.shields.io/badge/NestJS-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)](https://nestjs.com/)
[![TypeORM](https://img.shields.io/badge/TypeORM-%23231F20.svg?style=for-the-badge&logo=typeorm&logoColor=white)](https://typeorm.io/)
[![MySQL](https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE.md)

## Funcionalidades

### Etapa 02 - CRUD Categoria (Concluído)
- `GET /categoria` - Listar todas as categorias
- `GET /categoria/:id` - Buscar por ID
- `GET /categoria/tipo/:tipo` - Buscar por tipo
- `POST /categoria` - Criar categoria
- `PUT /categoria/:id` - Atualizar categoria
- `DELETE /categoria/:id` - Deletar categoria

### Etapa 03 - Produto + Relacionamento (Próximo)
- Entity Produto: `id`, `nome`, `tamanho`, `preco`, `foto`, `categoria` (relacionada)
- Relacionamento `@ManyToOne` (Produto → Categoria)
- Relacionamento `@OneToMany` (Categoria → Produtos)
- CRUD completo com 6 métodos (incluindo `findByNome`)

## Tecnologias

- **Backend:** NestJS 10+
- **ORM:** TypeORM
- **Banco:** MySQL (`db_farmacia`)
- **Validação:** class-validator
- **Testes:** Insomnia
- **Git:** Branches por Etapa (01_Configurando_Projeto, 02_CRUD_Categoria, 03_CRUD_Produto_Relacionamento)

## Iniciando o Projeto

### Pré-requisitos
- Node.js 18+
- MySQL 8+ (banco `db_farmacia`)
- Insomnia/Postman (testes API)

### Instalação
```bash
git clone https://github.com/bia024/projeto_final_bloco_02.git
cd projeto_final_bloco_02
npm install
```

### Configuração Banco de Dados
1. Crie o banco `db_farmacia` no MySQL
2. Configure `.env` com suas credenciais:
```
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=sua_senha
DB_DATABASE=db_farmacia
```

### Executar
```bash
# Desenvolvimento
npm run start:dev

# Produção
npm run start:prod

# Testes
npm run test
```

## Diagrama ER

```
Categoria (1) ---- (N) Produto
├── id (PK)
├── tipo            ├── id (PK)
                     ├── nome
                     ├── descricao
                     ├── quantidade
                     ├── preco
                     ├── foto
                     └── categoria_id (FK)
```

## Estrutura do Projeto

```
projeto_final_bloco_02/
├── src/
│   ├── categoria/     - Módulo completo
│   │   ├── entities/
│   │   ├── controllers/
│   │   ├── services/
│   │   └── categoria.module.ts
│   ├── produto/       - Próximo módulo
│   ├── app.module.ts
│   └── main.ts
├── TODO.md           - Progresso detalhado
├── README.md
├── LICENSE.md
└── CONTRIBUTORS.md
```

## Progresso Atual

Consulte [TODO.md](TODO.md) para status detalhado das Etapas.

## Contribuição

Veja [CONTRIBUTORS.md](CONTRIBUTORS.md)

## Licença

Este projeto está sob a licença [MIT](LICENSE.md).

---

**Desenvolvido por Bianca Caetano** | [LinkedIn](https://www.linkedin.com/in/bia-caetano) | [GitHub](https://github.com/bia024)


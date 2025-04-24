#  API DIWO – Lugares para conhecer

API REST desenvolvida com **NestJS**, **Prisma** e **PostgreSQL** para cadastrar lugares que o usuário deseja visitar ao redor do mundo.

---

##  Como executar o projeto

###  Pré-requisitos

- Node.js 18 ou superior
- Docker e Docker Compose instalados
- Git

---

###  Passo a passo

```bash
# 1. Clone o repositório
git clone https://github.com/laizaso/API-DIWO.git
cd API-DIWO

# 2. Instale as dependências
npm install

# 3. Gere o Prisma Client
npx prisma generate

# 4. Suba o banco de dados com Docker
docker-compose up -d

# 5. Rode as migrações do banco
npx prisma migrate dev --name init

# 6. Inicie a aplicação
npm run start:dev

# Crie um arquivo .env na raiz com o seguinte conteúdo:
DATABASE_URL="postgresql://pguser:diwo@localhost:5432/diwo"

# Rotas para testar (via Postman ou Insomnia)
GET | /places | Listar todos os lugares
POST | /places | Criar um novo lugar
GET | /places/:id | Buscar lugar pelo ID
PATCH | /places/:id | Editar local ou data da meta
DELETE | /places/:id | Deletar um lugar


# Tecnologias usadas
NestJS
Prisma ORM
PostgreSQL
Docker
TypeScript

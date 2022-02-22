# Blog Post 

## Descrição do sistema

O projeto é um backend nodeJS com express, utilizando o banco de dados PostgreSQL.

## Para Rodar o Projeto:

## Passo 1

Primeriramente é necessário fazer o build da imagem, o arquivo Dockerfile está na pasta raiz.

```
docker build -t <nome_imagem>:<tag> .
```

## Passo 2

Abra o aruivo docker-compose.yml, edite o arquivo para se adeguar ao seu ambiente.

Váriaveis de Ambiente:

```
ENV - Referentes ao container do PostgreSQL
POSTGRES_USER: usuário master do banco (opcional, padão postgres)
POSTGRES_PASSWORD: senha do usuário master (obrigatório)
POSTGRES_DB: nome do banco (opcional)

ENV - Referentes a conexão do banco de dados no backend

DB_HOST: nome do container do banco de dados
DB_PORT: porta do banco de dados (padrão 5432)
DB_NAME: nome do banco de dados
DB_USER: nome de usuário (padrão postgres)
DB_USER_PASSWORD: senha do usuário do banco de dados
```
## Passo 3

Defidamente feito a configuração do docker-compose.yml.
No terminal rode o comando:

```
docker-compose up
```

## Passo 4

Utilize um programa como Insomnia ou Postman para testar os endpoints

```
POST /posts 
{
  "title": string,
  "content": string
}

GET /posts 
GET /posts/:id 

PUT /posts/:id 
```
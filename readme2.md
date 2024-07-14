# KINETIX | Backend

## Setup

### Access to private registry

Please follow the guide to login to private github package repositories
Without that, you can have trouble to pull the package with the prefix **@git-kenetix**

[Link to Notion](https://www.notion.so/kinetix/Private-registries-d80b533cbcaa4dc2989ba9d08e8af6e7)

### Install

```
npm install
```

### Problem with Python

If you have some problem with python, you need to install python 2.7
Don't try to do some funky stuffs, you will ended up loosing your mind and wasting time
Go directly to Python official release and take the correct installer for your system
Install it and retry

[Link to Python 2.7.18](https://www.python.org/downloads/release/python-2718)

### Environnements variables

This project use .dotenv library to load environnements variables.
Do not forget to create a **.env** file at the root of the folder with the correct values

### Database connection

When use the backend locally, if you a ssh tunneling to access the database, do not forget to set correctly the path of our public key.
You will also need to send your key so we registered it to be able to use the ssh tunnel.
If not done, you will have timeout errors when the app try to connect the database.

```
SSH_KEY_PATH=the_path_to_your_public_key
```

## Run

One run

```
npm start
```

With nodemon for hot reload

```
npm run app
```

## Docker

When you used the PPA key from Github to login, please set it in NPM_TOKEN or something like that to reuse to be able to build the Docker image locally

```
docker build --build-arg NPM_TOKEN=${NPM_TOKEN} -t kinetix-backend:latest .
```

## ECS Task definition

```
aws ecs describe-task-definition --task-definition kinetix-backend --query taskDefinition > task-definition.json
```

## Postman collection

You will find a Postman collection, so you can import it and use it easily

[Postman collection link](Kinetix.postman_collection.json)

## Run locally

You need to have docker installed on your system to have a postgres & redis running

You will need to unzip the file db.zip to have access to a ready to use dump from the dev database
If you need another dump from an other environment, you can refer to this [Notion page](https://www.notion.so/kinetix/PostgreSQL-connection-a0789924d79d4ec3aa93d164d2a2a6d9?pvs=4)

```
unzip db.zip
```

Alter your .env file

```sh
DB_DIALECT="postgres"
DB_HOST="localhost"
DB_NAME="kinetix"
DB_PASSWORD="postgres"
DB_PORT="5432"
DB_USER="postgres"
```

To start the postgres & redis

```sh
docker-compose up
```

Now you can start the app normally

```sh
npm run start
```

# kinetix-sdk-on-premise

## Quick start

To start a new project from scratch with all the infrastructure components and an postgres database

```sh
docker compose up
```

To start only the infrastructure components without the apis (mainly for dev purposes)

```sh
docker compose up db cache s3
```

## Database setup

We currently only support relational Postgres, MariaDB, MySQL databases.
We are currently planning to add support for SQL Server and Oracle databases in an near future.
Use the DB_DIALECT environment variable to select the wanted database engine, correct values are "postgres", "mariadb", "mysql".

Postgres configuration example:

```sh
DB_DIALECT="postgres"
DB_HOST="localhost"
DB_PORT="5432"
DB_NAME="kinetix"
DB_USER="postgres"
DB_PASSWORD="postgres"
```

MariaDB configuration example:

```sh
DB_DIALECT="postgres"
DB_HOST="localhost"
DB_PORT="5432"
DB_NAME="kinetix"
DB_USER="postgres"
DB_PASSWORD="postgres"
```

MySQL configuration example:

```sh
DB_DIALECT="postgres"
DB_HOST="localhost"
DB_PORT="5432"
DB_NAME="kinetix"
DB_USER="postgres"
DB_PASSWORD="postgres"
```

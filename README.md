# kinetix-sdk-on-premise

> [!WARNING]  
> This version is in its early stages, and we are actively addressing bugs to enhance its reliability.

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
DB_DIALECT="< postgres | mysql | mariadb | mssql | oracle >"
DB_HOST="< hostname >"
DB_PORT="< port >" # If not provided, the default port corresponding to the provided dialect will be set automatically
DB_NAME="< database name >"
DB_USER="< database user >"
DB_PASSWORD="< database user password >"
```

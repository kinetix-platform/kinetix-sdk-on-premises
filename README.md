# kinetix-sdk-on-premises

> [!WARNING]  
> This version is in its early stages, and we are actively addressing bugs to enhance its reliability.

Welcome to the Kinetix Emote Generation Platform.
Our AI-powered infrastructure generates dynamic and expressive emotes for in-game characters, enhancing the gaming experience.

## Overview

Kinetix has made it easy to create in-game emotes using AI.
Our platform, previously available only as a SaaS product, now also supports on-premises deployment.
Choose the option that best fits your needs.
Here you will find everything related to on-premises deployment.

## Quick start

To start a new project from scratch with all the infrastructure components and an postgres database

```sh
docker compose up
```

To start only the infrastructure components without the apis (mainly for dev purposes)

```sh
docker compose up db cache s3
```

### Database setup

We support the belowed databases:

- [Postgres](https://www.postgresql.org/)
- [MariaDB](https://mariadb.org/)
- [MySQL](https://www.mysql.com/)
- [SQL Server](https://www.microsoft.com/sql-server/sql-server-2022)
- [Oracle](https://www.oracle.com/database/)

Use the DB_DIALECT environment variable to select the wanted database engine,
correct values are "postgres", "mariadb", "mysql", "mssql", "oracle".

> [!WARNING]  
> SQL Server & Oracle are still in testing phase

Configuration example:

```sh
DB_DIALECT="< postgres | mysql | mariadb | mssql | oracle >"
DB_HOST="< hostname >"
DB_PORT="< port >" # If not provided, the default port corresponding to the provided dialect will be set automatically
DB_NAME="< database name >"
DB_USER="< database user >"
DB_PASSWORD="< database user password >"
DB_REPLICA
```

### Cache setup

We support the belowed cache engines :

- [Redis](https://redis.io/)
- [Memcached](https://memcached.org/)

Use the DB_DIALECT environment variable to select the wanted database engine,
correct values are "postgres", "mariadb", "mysql", "mssql", "oracle".

Configuration example:

```sh
CACHE_STORE="< redis | memcached >"
CACHE_ENDPOINTS="< hostname:port or hostname1:port1;hostname2:port2>"
```

### Files hosting setup

We support different ways to handle files hosting & distributions.
We strongly support S3 systems to manage files hosting.
We support the belowed S3 implementations including cloud providers solution:

- [Min.io](https://min.io/)
- [AWS S3](https://aws.amazon.com/s3/)

If you are in an case where you do not want to use an S3 solution for your files, you can use your local file system (you can use network mounted disk drives)

Use the DB_DIALECT environment variable to select the wanted database engine,
correct values are "fs", "minio", "aws"

Configuration example:

```sh
CACHE_STORE="< redis | memcached >"
CACHE_ENDPOINTS="< hostname:port or hostname1:port1;hostname2:port2>"
```

## Documentation

For more details, visit our [a documentation](https://stackoverflow.com/questions/19633531/configure-msbuild-output-path), where you'll find guides, API references, and tutorials.

## Support

If you need help, please contact us at [ben@kinetix.tech](mailto=ben@kinetix.tech)

---
sidebar_position: 2
title: DB Setup
sidebar_label: DB Setup
---

## Which db to setup on which node

As we've outlined [here](./current-infra.md#db1-server-), we have a dedicated server for storing `eSamwad backend` data due to its resource-intensive nature. Similarly, the databases for the rest of the cross-cutting services are hosted on a separate server, as mentioned [here](./current-infra.md#db2-server-), since they are lightweight services and can be accommodated onto a single server.

## Backup & Restore existing prod schema & db

Since backing up and restoring databases is a routine task applicable to various database systems, we have provided comprehensive steps for performing these operations.

#### eSamwad Backend Database

The `eSamwad backend` database resides on the **db1 server**, requiring an SSH connection to perform backup or restore operations.

**Backup:**

```sh
# Backup to a .sql file
docker-compose -f /home/samarth-devops/docker-compose/db-compose-esamwad-be.yml exec postgres-esamwad-be pg_dump -U postgres -d postgres > backup_2023_08_07_17_00_00.sql

# Compress the backup file (Optional)
tar -cvzf backup_2023_08_07_17_00_00.sql.tar.gz backup_2023_08_07_17_00_00.sql
```

**Restore:**

If the `sql` file is zipped, unzip it before passing it to the `psql` utility.

```sh
cat backup_2023_08_07_17_00_00.sql | docker-compose -f /home/samarth-devops/docker-compose/db-compose-esamwad-be.yml exec -T postgres-esamwad-be psql -U postgres -d postgres
```

#### Other Services

The databases for the following services are deployed on the **db2 server**, requiring SSH access for backup or restore operations.

##### ODK UCI Adapter

**Backup:**

```sh
docker-compose -f /home/samarth-devops/docker-compose/db-compose.yml exec postgres-odk-adapter pg_dump -U postgres -d postgres > backup_2023_08_07_17_00_00.sql
```

**Restore:**

```sh
cat backup_2023_08_07_17_00_00.sql | docker-compose -f /home/samarth-devops/docker-compose/db-compose.yml exec -T postgres-odk-adapter psql -U postgres -d postgres
```

##### Doc-generator

**Backup:**

```sh
docker-compose -f /home/samarth-devops/docker-compose/db-compose.yml exec postgres-doc-gen pg_dump -U postgres -d postgres > backup_2023_08_07_17_00_00.sql
```

**Restore:**

```sh
cat backup_2023_08_07_17_00_00.sql | docker-compose -f /home/samarth-devops/docker-compose/db-compose.yml exec -T postgres-doc-gen psql -U postgres -d postgres
```

##### Yaus

**Backup:**

```sh
docker-compose -f /home/samarth-devops/docker-compose/db-compose.yml exec postgres-yaus pg_dump -U postgres -d postgres > backup_2023_08_07_17_00_00.sql
```

**Restore:**

```sh
cat backup_2023_08_07_17_00_00.sql | docker-compose -f /home/samarth-devops/docker-compose/db-compose.yml exec -T postgres-yaus psql -U postgres -d postgres
```

##### Templater

**Backup:**

```sh
docker-compose -f /home/samarth-devops/docker-compose/db-compose.yml exec postgres-templater pg_dump -U postgres -d postgres > backup_2023_08_07_17_00_00.sql
```

**Restore:**

```sh
cat backup_2023_08_07_17_00_00.sql | docker-compose -f /home/samarth-devops/docker-compose/db-compose.yml exec -T postgres-templater psql -U postgres -d postgres
```

Remember to replace the timestamps in the file names and other variables with your specific details.

## Hasura Metadata

Install Hasura CLI: https://hasura.io/docs/latest/hasura-cli/install-hasura-cli/

### Doc Generator

As we have already imported/restored the existing DB; we don't have to apply migrations again. We'll just have to apply metadata.

- `cd hasura/doc-generator`
- Create `.env` using `sample.env` as a reference & configure the credentials.
- Mark the initial migration as present: `hasura migrate apply --skip-execution --version 1692688379356`.
- Run `hasura metadata apply` to sync the metadata.

### ODK UCI Adapter

As we have already imported/restored the existing DB; we don't have to apply migrations again. We'll just have to apply metadata.

- `cd hasura/odk-uci-adapter`
- Create `.env` using `sample.env` as a reference & configure the credentials.
- Mark the initial migration as present: `hasura migrate apply --skip-execution --version 1692701191239`.
- Run `hasura metadata apply` to sync the metadata.

### Esamwad Backend

As we have already imported/restored the existing DB; we don't have to apply migrations again. We'll just have to apply metadata.

- `cd hasura/esamwad-backend`
- Create `.env` using `sample.env` as a reference & configure the credentials.
- Mark the initial migration as present: `hasura migrate apply --skip-execution --version 1692692627467`.
- Run `hasura metadata apply` to sync the metadata.

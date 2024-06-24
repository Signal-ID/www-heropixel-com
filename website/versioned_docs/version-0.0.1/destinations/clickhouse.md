---
id: clickhouse
title: ClickHouse
description: desc
---

# ClickHouse

## Features

| Feature                        | Supported?\(Yes/No\) | Notes |
| :----------------------------- | :------------------- | :---- |
| Full Refresh Sync              | Yes                  |       |
| Incremental - Append Sync      | Yes                  |       |
| Incremental - Append + Deduped | Yes                  |       |
| Namespaces                     | Yes                  |       |

#### Output Schema

Each stream will be output into its own table in ClickHouse. Each table will contain 3 columns:

- `_airbyte_ab_id`: a uuid assigned by Airbyte to each event that is processed. The column type in ClickHouse is `String`.
- `_airbyte_emitted_at`: a timestamp representing when the event was pulled from the data source. The column type in ClickHouse is `DateTime64`.
- `_airbyte_data`: a json blob representing with the event data. The column type in ClickHouse is `String`.

## Getting Started \(Airbyte Cloud\)

Hero Pixel only supports connecting to your ClickHouse instance with SSL or TLS encryption, which is supported by [ClickHouse JDBC driver](https://github.com/ClickHouse/clickhouse-jdbc).

## Getting Started

#### Requirements

To use the ClickHouse destination, you'll need:

- A ClickHouse server version 21.8.10.19 or above

#### Configure Network Access

Make sure your ClickHouse database can be accessed by Hero Pixel. If your database is within a VPC, you may need to allow access from the Hero Pixel IPs.

#### **Permissions**

You need a ClickHouse user with the following permissions:

- can create tables and write rows.
- can create databases e.g:

You can create such a user by running:

```
GRANT CREATE ON * TO heropixel_user;
GRANT CREATE ON default * TO heropixel_user;
GRANT DROP ON * TO heropixel_user;
GRANT TRUNCATE ON * TO heropixel_user;
GRANT INSERT ON * TO heropixel_user;
GRANT SELECT ON * TO heropixel_user;
GRANT CREATE DATABASE ON airbyte_internal.* TO heropixel_user;
GRANT CREATE TABLE ON airbyte_internal.* TO heropixel_user;
GRANT DROP ON airbyte_internal.* TO heropixel_user;
GRANT TRUNCATE ON airbyte_internal.* TO heropixel_user;
GRANT INSERT ON airbyte_internal.* TO heropixel_user;
GRANT SELECT ON airbyte_internal.* TO heropixel_user;
```

You can also use a pre-existing user but we highly recommend creating a dedicated user for Hero Pixel.

#### Target Database

You will need to choose an existing database or create a new database that will be used to store synced data from Hero Pixel.

### Setup the ClickHouse Destination in Hero Pixel

You should now have all the requirements needed to configure ClickHouse as a destination in the UI. You'll need the following information to configure the ClickHouse destination:

- **Host**
- **Port**
- **Username**
- **Password**
- **Database**
- **Jdbc_url_params**

## Naming Conventions

From [ClickHouse SQL Identifiers syntax](https://clickhouse.com/docs/en/sql-reference/syntax/):

- SQL identifiers and key words must begin with a letter \(a-z, but also letters with diacritical marks and non-Latin letters\) or an underscore \(\_\).
- Subsequent characters in an identifier or key word can be letters, underscores, digits \(0-9\).
- Identifiers can be quoted or non-quoted. The latter is preferred.
- If you want to use identifiers the same as keywords or you want to use other symbols in identifiers, quote it using double quotes or backticks, for example, "id", `id`.
- If you want to write portable applications you are advised to always quote a particular name or never quote it.

Therefore, Hero Pixel's ClickHouse destination will create tables and schemas using the Unquoted identifiers when possible or fallback to Quoted Identifiers if the names are containing special characters.

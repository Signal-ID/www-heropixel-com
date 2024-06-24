---
id: postgres
title: Postgres
description: desc
---

# Postgres

This page guides you through the process of setting up the Postgres destination connector.

## Warning

:::warning

Postgres, while an excellent relational database, is not a data warehouse. Please only consider using postgres as a destination for small data volumes (e.g. less than 10GB) or for testing purposes. For larger data volumes, we recommend using a data warehouse like BigQuery, Snowflake, or Redshift.

:::

## Prerequisites

To use the Postgres destination, you'll need:

- A Postgres server version 9.5 or above

Hero Pixel only supports connecting to your Postgres instances with SSL or TLS encryption. TLS is
used by default.

You'll need the following information to configure the Postgres destination:

- **Host** - The host name of the server.
- **Port** - The port number the server is listening on. Defaults to the PostgreSQL™ standard port
  number (5432).
- **Username**
- **Password**
- **Default Schema Name** - Specify the schema (or several schemas separated by commas) to be set in
  the search-path. These schemas will be used to resolve unqualified object names used in statements
  executed over this connection.
- **Database** - The database name. The default is to connect to a database with the same name as
  the user name.
- **JDBC URL Params** (optional)

[Refer to this guide for more details](https://jdbc.postgresql.org/documentation/use/#connecting-to-the-database)

#### Configure Network Access

Make sure your Postgres database can be accessed by Hero Pixel. If your database is within a VPC, you
may need to allow access from the IP you're using to expose Hero Pixel.

## Step 1: Set up Postgres

#### **Permissions**

You need a Postgres user with the following permissions:

- can create tables and write rows.
- can create schemas e.g:

You can create such a user by running:

```
CREATE USER hero_user WITH PASSWORD '<password>';
GRANT CREATE, TEMPORARY ON DATABASE <database> TO hero_user;
```

You can also use a pre-existing user but we highly recommend creating a dedicated user for Hero Pixel.

## Step 2: Set up the Postgres connector in Hero Pixel

#### Target Database

You will need to choose an existing database or create a new database that will be used to store
synced data from Hero Pixel.

## Naming Conventions

From
[Postgres SQL Identifiers syntax](https://www.postgresql.org/docs/9.0/sql-syntax-lexical.html#SQL-SYNTAX-IDENTIFIERS):

- SQL identifiers and key words must begin with a letter \(a-z, but also letters with diacritical
  marks and non-Latin letters\) or an underscore \(\_\).
- Subsequent characters in an identifier or key word can be letters, underscores, digits \(0-9\), or
  dollar signs \($\).

  Note that dollar signs are not allowed in identifiers according to the SQL standard, so their use
  might render applications less portable. The SQL standard will not define a key word that contains
  digits or starts or ends with an underscore, so identifiers of this form are safe against possible
  conflict with future extensions of the standard.

- The system uses no more than NAMEDATALEN-1 bytes of an identifier; longer names can be written in
  commands, but they will be truncated. By default, NAMEDATALEN is 64 so the maximum identifier
  length is 63 bytes
- Quoted identifiers can contain any character, except the character with code zero. \(To include a
  double quote, write two double quotes.\) This allows constructing table or column names that would
  otherwise not be possible, such as ones containing spaces or ampersands. The length limitation
  still applies.
- Quoting an identifier also makes it case-sensitive, whereas unquoted names are always folded to
  lower case.
- In order to make your applications portable and less error-prone, use consistent quoting with each
  name (either always quote it or never quote it).

:::info

Hero Pixel Postgres destination will create raw tables and schemas using the Unquoted identifiers by
replacing any special characters with an underscore. All final tables and their corresponding
columns are created using Quoted identifiers preserving the case sensitivity. Special characters in final
tables are replaced with underscores.

:::

1. Log into your Hero Pixel account.
2. In the left navigation bar, click **Destinations**. In the top-right corner, click **new
   destination**.
3. On the Set up the destination page, enter the name for the Postgres connector and select
   **Postgres** from the Destination type dropdown.
4. Enter a name for your source.
5. For the **Host**, **Port**, and **DB Name**, enter the hostname, port number, and name for your
   Postgres database.
6. List the **Default Schemas**.

:::note

The schema names are case sensitive. The 'public' schema is set by default. Multiple schemas may be
used at one time. No schemas set explicitly - will sync all of existing.

:::

7. For **User** and **Password**, enter the username and password you created for postgres.
8. Toggle the switch to connect using SSL.
9. For SSL Modes, select:
   - **disable** to disable encrypted communication between Hero Pixel and the source
   - **allow** to enable encrypted communication only when required by the source
   - **prefer** to allow unencrypted communication only when the source doesn't support encryption
   - **require** to always require encryption. Note: The connection will fail if the source doesn't
     support encryption.
   - **verify-ca** to always require encryption and verify that the source has a valid SSL
     certificate
   - **verify-full** to always require encryption and verify the identity of the source
10. To customize the JDBC connection beyond common options, specify additional supported
    [JDBC URL parameters](https://jdbc.postgresql.org/documentation/head/connect.html) as key-value
    pairs separated by the symbol & in the **JDBC URL Parameters (Advanced)** field.

    Example: key1=value1&key2=value2&key3=value3

    These parameters will be added at the end of the JDBC URL that the Hero Pixel will use to connect
    to your Postgres database.

    The connector now supports `connectTimeout` and defaults to 60 seconds. Setting connectTimeout
    to 0 seconds will set the timeout to the longest time available.

    **Note:** Do not use the following keys in JDBC URL Params field as they will be overwritten by
    Hero Pixel: `currentSchema`, `user`, `password`, `ssl`, and `sslmode`.

:::warning

This is an advanced configuration option. Users are advised to use it with caution.

:::

11. For SSH Tunnel Method, select:

    - **No Tunnel** for a direct connection to the database
    - **SSH Key Authentication** to use an RSA Private as your secret for establishing the SSH
      tunnel
    - **Password Authentication** to use a password as your secret for establishing the SSH tunnel

:::warning

Since Hero Pixel requires encrypted communication, select **SSH Key Authentication** or
**Password Authentication** if you selected **disable**, **allow**, or **prefer** as the **SSL
Mode**; otherwise, the connection will fail.

:::

12. Click **Set up destination**.

## Supported sync modes

The Postgres destination connector supports the
following sync modes:

| Feature                        | Supported?\(Yes/No\) | Notes |
| :----------------------------- | :------------------- | :---- |
| Full Refresh Sync              | Yes                  |       |
| Incremental - Append Sync      | Yes                  |       |
| Incremental - Append + Deduped | Yes                  |       |
| Namespaces                     | Yes                  |       |

## Schema map

### Output Schema (Raw Tables)

Each stream will be mapped to a separate raw table in Postgres. The default schema in which the raw
tables are created is `airbyte_internal`. This can be overridden in the configuration. Each table
will contain 3 columns:

- `_airbyte_raw_id`: a uuid assigned by Hero Pixel to each event that is processed. The column type in
  Postgres is `VARCHAR`.
- `_airbyte_extracted_at`: a timestamp representing when the event was pulled from the data source.
  The column type in Postgres is `TIMESTAMP WITH TIME ZONE`.
- `_airbyte_loaded_at`: a timestamp representing when the row was processed into final table. The
  column type in Postgres is `TIMESTAMP WITH TIME ZONE`.
- `_airbyte_data`: a json blob representing with the event data. The column type in Postgres is
  `JSONB`.

### Final Tables Data type mapping

| Hero Pixel Type            | Postgres Type            |
| :------------------------- | :----------------------- |
| string                     | VARCHAR                  |
| number                     | DECIMAL                  |
| integer                    | BIGINT                   |
| boolean                    | BOOLEAN                  |
| object                     | JSONB                    |
| array                      | JSONB                    |
| timestamp_with_timezone    | TIMESTAMP WITH TIME ZONE |
| timestamp_without_timezone | TIMESTAMP                |
| time_with_timezone         | TIME WITH TIME ZONE      |
| time_without_timezone      | TIME                     |
| date                       | DATE                     |

### Naming limitations

Postgres restricts all identifiers to 63 characters or less. If your stream includes column names
longer than 63 characters, they will be truncated to this length. If this results in two columns
having the same name, Hero Pixel may modify these column names to avoid the collision.

## Creating dependent objects

:::caution

This section involves running `DROP ... CASCADE` on the tables that Hero Pixel produces. Make sure you
fully understand the consequences before enabling this option. **Permanent** data loss is possible
with this option!

:::

You may want to create objects that depend on the tables generated by Hero Pixel, such as views. If you
do so, we strongly recommend:

- Using a tool like `dbt` to automate the creation
- And using an orchestrator to trigger `dbt`.

This is because you will need to enable the "Drop tables with CASCADE" option. The connector
sometimes needs to recreate the tables; if you have created dependent objects, Postgres will require
the connector to run drop statements with CASCADE enabled. However, this will cause the connector to
**also drop the dependent objects**. Therefore, you MUST have a way to recreate those dependent
objects from scratch.

## Vendor-Specific Connector Limitations

:::warning

Not all implementations or deployments of a database will be the same. This section lists specific limitations and known issues with the connector based on _how_ or
_where_ it is deployed.

:::

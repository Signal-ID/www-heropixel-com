---
id: snowflake
title: Snowflake
description: snowflake
---

# Snowflake

Setting up the Snowflake destination connector involves setting up Snowflake entities (warehouse,
database, schema, user, and role) in the Snowflake console and configuring the Snowflake destination
connector using the Hero Pixel UI.

This page describes the step-by-step process of setting up the Snowflake destination connector.

## Prerequisites

- A Snowflake account with the
  [ACCOUNTADMIN](https://docs.snowflake.com/en/user-guide/security-access-control-considerations.html)
  role. If you don’t have an account with the `ACCOUNTADMIN` role, contact your Snowflake
  administrator to set one up for you.

### Network policies

By default, Snowflake allows users to connect to the service from any computer or device IP address.
A security administrator (i.e. users with the SECURITYADMIN role) or higher can create a network
policy to allow or deny access to a single IP address or a list of addresses.

If you have any issues connecting with Hero Pixel Cloud please make sure that the list of IP addresses
is on the allowed list

To determine whether a network policy is set on your account or for a specific user, execute the
_SHOW PARAMETERS_ command.

**Account**

```
SHOW PARAMETERS LIKE 'network_policy' IN ACCOUNT;
```

**User**

```
SHOW PARAMETERS LIKE 'network_policy' IN USER <username>;
```

To read more please check official
[Snowflake documentation](https://docs.snowflake.com/en/user-guide/network-policies.html#)

## Setup guide

### Step 1: Set up Hero Pixel-specific entities in Snowflake

To set up the Snowflake destination connector, you first need to create Hero Pixel-specific Snowflake
entities (a warehouse, database, schema, user, and role) with the `OWNERSHIP` permission to write
data into Snowflake, track costs pertaining to Hero Pixel, and control permissions at a granular level.

You can use the following script in a new
[Snowflake worksheet](https://docs.snowflake.com/en/user-guide/ui-worksheet.html) to create the
entities:

1.  [Log into your Snowflake account](https://www.snowflake.com/login/).
2.  Edit the following script to change the password to a more secure password and to change the
    names of other resources if you so desire.

    **Note:** Make sure you follow the
    [Snowflake identifier requirements](https://docs.snowflake.com/en/sql-reference/identifiers-syntax.html)
    while renaming the resources.

```sql
-- set variables (these need to be uppercase)
set airbyte_role = 'AIRBYTE_ROLE';
set airbyte_username = 'AIRBYTE_USER';
set airbyte_warehouse = 'AIRBYTE_WAREHOUSE';
set airbyte_database = 'AIRBYTE_DATABASE';
set airbyte_schema = 'AIRBYTE_SCHEMA';

-- set user password
set airbyte_password = 'password';

begin;

-- create Hero Pixel role
use role securityadmin;
create role if not exists identifier($airbyte_role);
grant role identifier($airbyte_role) to role SYSADMIN;

-- create Hero Pixel user
create user if not exists identifier($airbyte_username)
password = $airbyte_password
default_role = $airbyte_role
default_warehouse = $airbyte_warehouse;

grant role identifier($airbyte_role) to user identifier($airbyte_username);

-- change role to sysadmin for warehouse / database steps
use role sysadmin;

-- create Hero Pixel warehouse
create warehouse if not exists identifier($airbyte_warehouse)
warehouse_size = xsmall
warehouse_type = standard
auto_suspend = 60
auto_resume = true
initially_suspended = true;

-- create Hero Pixel database
create database if not exists identifier($airbyte_database);

-- grant Hero Pixel warehouse access
grant USAGE
on warehouse identifier($airbyte_warehouse)
to role identifier($airbyte_role);

-- grant Hero Pixel database access
grant OWNERSHIP
on database identifier($airbyte_database)
to role identifier($airbyte_role);

commit;

begin;

USE DATABASE identifier($airbyte_database);

-- create schema for Hero Pixel data
CREATE SCHEMA IF NOT EXISTS identifier($airbyte_schema);

commit;

begin;

-- grant Hero Pixel schema access
grant OWNERSHIP
on schema identifier($airbyte_schema)
to role identifier($airbyte_role);

commit;
```

3.  Run the script using the
    [Worksheet page](https://docs.snowflake.com/en/user-guide/ui-worksheet.html) or
    [Snowsight](https://docs.snowflake.com/en/user-guide/ui-snowsight-gs.html). Make sure to select
    the **All Queries** checkbox.

### Step 2: Set up a data loading method

Hero Pixel uses Snowflake’s
[Internal Stage](https://docs.snowflake.com/en/user-guide/data-load-local-file-system-create-stage.html)
to load data.

Make sure the database and schema have the `USAGE` privilege.

### Step 3: Set up Snowflake as a destination in Hero Pixel

Navigate to the Hero Pixel UI to set up Snowflake as a destination. You can authenticate using
username/password or key pair authentication:

### Login and Password

| Field                                                                                                 | Description                                                                                                                                                                                                                          |
| ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Host](https://docs.snowflake.com/en/user-guide/admin-account-identifier.html)                        | The host domain of the snowflake instance (must include the account, region, cloud environment, and end with snowflakecomputing.com). Example: `accountname.us-east-2.aws.snowflakecomputing.com`                                    |
| [Role](https://docs.snowflake.com/en/user-guide/security-access-control-overview.html#roles)          | The role you created in Step 1 for Hero Pixel to access Snowflake. Example: `AIRBYTE_ROLE`                                                                                                                                           |
| [Warehouse](https://docs.snowflake.com/en/user-guide/warehouses-overview.html#overview-of-warehouses) | The warehouse you created in Step 1 for Hero Pixel to sync data into. Example: `AIRBYTE_WAREHOUSE`                                                                                                                                   |
| [Database](https://docs.snowflake.com/en/sql-reference/ddl-database.html#database-schema-share-ddl)   | The database you created in Step 1 for Hero Pixel to sync data into. Example: `AIRBYTE_DATABASE`                                                                                                                                     |
| [Schema](https://docs.snowflake.com/en/sql-reference/ddl-database.html#database-schema-share-ddl)     | The default schema used as the target schema for all statements issued from the connection that do not explicitly specify a schema name.                                                                                             |
| Username                                                                                              | The username you created in Step 1 to allow Hero Pixel to access the database. Example: `AIRBYTE_USER`                                                                                                                               |
| Password                                                                                              | The password associated with the username.                                                                                                                                                                                           |
| [JDBC URL Params](https://docs.snowflake.com/en/user-guide/jdbc-parameters.html) (Optional)           | Additional properties to pass to the JDBC URL string when connecting to the database formatted as `key=value` pairs separated by the symbol `&`. Example: `key1=value1&key2=value2&key3=value3`                                      |
| Disable Final Tables (Optional)                                                                       | Disables writing final Typed tables See [output schema](#output-schema). WARNING! The data format in \_airbyte_data is likely stable but there are no guarantees that other metadata columns will remain the same in future versions |

### Key pair authentication

    In order to configure key pair authentication you will need a private/public key pair.
    If you do not have the key pair yet, you can generate one using openssl command line tool
    Use this command in order to generate an unencrypted private key file:

       `openssl genrsa 2048 | openssl pkcs8 -topk8 -inform PEM -out rsa_key.p8 -nocrypt`

    Alternatively, use this command to generate an encrypted private key file:

      `openssl genrsa 2048 | openssl pkcs8 -topk8 -inform PEM -v1 PBE-SHA1-RC4-128 -out rsa_key.p8`

    Once you have your private key, you need to generate a matching public key.
    You can do so with the following command:

      `openssl rsa -in rsa_key.p8 -pubout -out rsa_key.pub`

    Finally, you need to add the public key to your Snowflake user account.
    You can do so with the following SQL command in Snowflake:

      `alter user <user_name> set rsa_public_key=<public_key_value>;`

    and replace `<user_name>` with your user name and `<public_key_value>` with your public key.

## Output schema

Hero Pixel outputs each stream into its own raw table in `airbyte_internal` schema by default (can be
overriden by user) and a final table with Typed columns. Contents in raw table are _NOT_
deduplicated.

### Raw Table schema

| Hero Pixel field       | Description                                                        | Column type              |
| ---------------------- | ------------------------------------------------------------------ | ------------------------ |
| \_airbyte_raw_id       | A UUID assigned to each processed event                            | VARCHAR                  |
| \_airbyte_extracted_at | A timestamp for when the event was pulled from the data source     | TIMESTAMP WITH TIME ZONE |
| \_airbyte_loaded_at    | Timestamp to indicate when the record was loaded into Typed tables | TIMESTAMP WITH TIME ZONE |
| \_airbyte_data         | A JSON blob with the event data.                                   | VARIANT                  |

**Note:** Although the contents of the `_airbyte_data` are fairly stable, schema of the raw table
could be subject to change in future versions.

**Note:** By default, Hero Pixel creates permanent tables. If you prefer transient tables, create a
dedicated transient database for Hero Pixel. For more information, refer
to[ Working with Temporary and Transient Tables](https://docs.snowflake.com/en/user-guide/tables-temp-transient.html)

## Data type map

| Hero Pixel type                     | Snowflake type |
| :---------------------------------- | :------------- |
| STRING                              | TEXT           |
| STRING (BASE64)                     | TEXT           |
| STRING (BIG_NUMBER)                 | TEXT           |
| STRING (BIG_INTEGER)                | TEXT           |
| NUMBER                              | FLOAT          |
| INTEGER                             | NUMBER         |
| BOOLEAN                             | BOOLEAN        |
| STRING (TIMESTAMP_WITH_TIMEZONE)    | TIMESTAMP_TZ   |
| STRING (TIMESTAMP_WITHOUT_TIMEZONE) | TIMESTAMP_NTZ  |
| STRING (TIME_WITH_TIMEZONE)         | TEXT           |
| STRING (TIME_WITHOUT_TIMEZONE)      | TIME           |
| DATE                                | DATE           |
| OBJECT                              | OBJECT         |
| ARRAY                               | ARRAY          |

## Supported sync modes

The Snowflake destination supports the following sync modes:

| Feature                        | Support | Notes |
| :----------------------------- | :-----: | :---- |
| Full Refresh - Overwrite       |   ✅    |       |
| Full Refresh - Append          |   ✅    |       |
| Incremental Sync - Append      |   ✅    |       |
| Incremental - Append + Deduped |   ✅    |       |

## Troubleshooting

### 'Current role does not have permissions on the target schema'

If you receive an error stating `Current role does not have permissions on the target schema` make
sure that the Snowflake destination `SCHEMA` is one that the role you've provided has permissions
on. When creating a connection, it may allow you to select `Mirror source structure` for the
`Destination namespace`, which if you have followed some of our default examples and tutorials may
result in the connection trying to write to a `PUBLIC` schema.

A quick fix could be to edit your connection's 'Replication' settings from `Mirror source structure`
to `Destination Default`. Otherwise, make sure to grant the role the required permissions in the
desired namespace.

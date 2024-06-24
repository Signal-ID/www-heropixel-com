---
id: duckdb
title: DuckDB
description: desc
---

# DuckDB

## Overview

[DuckDB](https://duckdb.org/) is an in-process SQL OLAP database management system and this destination is meant to use locally if you have multiple smaller sources such as GitHub repos, some social media and local CSVs or files you want to run analytics workloads on. This destination writes data to the [MotherDuck](https://motherduck.com) service, or to a file on the _local_ filesystem on the host running Airbyte.

## Use with MotherDuck

This DuckDB destination is compatible with [MotherDuck](https://motherduck.com).

### Specifying a MotherDuck Database

To specify a MotherDuck-hosted database as your destination, simply provide your database uri with the normal `md:` database prefix in the `destination_path` configuration option.

:::caution

We do not recommend providing your API token in the `md:` connection string, as this may cause your token to be printed to execution logs. Please use the `MotherDuck API Key` setting instead.

:::

### Authenticating to MotherDuck

For authentication, you can can provide your [MotherDuck Service Credential](https://motherduck.com/docs/authenticating-to-motherduck/#syntax) as the `motherduck_api_key` configuration option.

### Sync Overview

#### Output schema

Each table will contain 3 columns:

- `_airbyte_ab_id`: a uuid assigned by Airbyte to each event that is processed.
- `_airbyte_emitted_at`: a timestamp representing when the event was pulled from the data source.
- `_airbyte_data`: a json blob representing with the event data.

#### Features

| Feature                        | Supported |     |
| :----------------------------- | :-------- | :-- |
| Full Refresh Sync              | Yes       |     |
| Incremental - Append Sync      | Yes       |     |
| Incremental - Append + Deduped | No        |     |
| Namespaces                     | No        |     |

#### Performance consideration

This integration will be constrained by the speed at which your filesystem accepts writes.

## Troubleshooting

### Error message `Request failed:  (UNAVAILABLE, RPC 'GET_WELCOME_PACK')`

This error may indicate that you are connecting with a `0.10.x` DuckDB client (as per DuckDB Destination connector versions `>=0.4.0`) and your database has not yet been upgraded to a version `>=0.10.x`. To resolve this, you'll need to manually upgrade your database or revert to a previous version of the DuckDB Destination connector.

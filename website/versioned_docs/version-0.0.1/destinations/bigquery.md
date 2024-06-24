---
id: bigquery
title: BigQuery
description: desc
---

# BigQuery

Setting up the BigQuery destination connector involves setting up the data loading method (BigQuery
Standard method and Google Cloud Storage bucket) and configuring the BigQuery destination connector
using the Airbyte UI.

This page guides you through setting up the BigQuery destination connector.

## Prerequisites

- [A Google Cloud project with BigQuery enabled](https://cloud.google.com/bigquery/docs/quickstarts/query-public-dataset-console)
- [A BigQuery dataset](https://cloud.google.com/bigquery/docs/quickstarts/quickstart-web-ui#create_a_dataset)
  to sync data to.

  **Note:** Queries written in BigQuery can only reference datasets in the same physical location.
  If you plan on combining the data that Airbyte syncs with data from other datasets in your
  queries, create the datasets in the same location on Google Cloud. For more information, read
  [Introduction to Datasets](https://cloud.google.com/bigquery/docs/datasets-intro)

- (Required for Airbyte Cloud; Optional for Airbyte Open Source) A Google Cloud
  [Service Account](https://cloud.google.com/iam/docs/service-accounts) with the
  [`BigQuery User`](https://cloud.google.com/bigquery/docs/access-control#bigquery) and
  [`BigQuery Data Editor`](https://cloud.google.com/bigquery/docs/access-control#bigquery) roles and
  the
  [Service Account Key in JSON format](https://cloud.google.com/iam/docs/creating-managing-service-account-keys).

## Setup guide

### Step 1: Set up a data loading method

Although you can load data using BigQuery's
[`INSERTS`](https://cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax), we highly
recommend using a [Google Cloud Storage bucket](https://cloud.google.com/storage/docs/introduction)
not only for performance and cost but reliability since larger datasets are prone to more failures
when using standard inserts.

#### (Recommended) Using a Google Cloud Storage bucket

To use a Google Cloud Storage bucket:

1. [Create a Cloud Storage bucket](https://cloud.google.com/storage/docs/creating-buckets) with the
   Protection Tools set to `none` or `Object versioning`. Make sure the bucket does not have a
   [retention policy](https://cloud.google.com/storage/docs/samples/storage-set-retention-policy).
2. [Create an HMAC key and access ID](https://cloud.google.com/storage/docs/authentication/managing-hmackeys#create).
3. Grant the
   [`Storage Object Admin` role](https://cloud.google.com/storage/docs/access-control/iam-roles#standard-roles)
   to the Google Cloud [Service Account](https://cloud.google.com/iam/docs/service-accounts). This
   must be the same service account as the one you configure for BigQuery access in the
   [BigQuery connector setup step](#step-2-set-up-the-bigquery-connector).
4. Make sure your Cloud Storage bucket is accessible from the machine running Airbyte. The easiest
   way to verify if Airbyte is able to connect to your bucket is via the check connection tool in
   the UI.

Your bucket must be encrypted using a Google-managed encryption key (this is the default setting
when creating a new bucket). We currently do not support buckets using customer-managed encryption
keys (CMEK). You can view this setting under the "Configuration" tab of your GCS bucket, in the
`Encryption type` row.

#### Using `INSERT`

You can use BigQuery's
[`INSERT`](https://cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax) statement to
upload data directly from your source to BigQuery. While this is faster to set up initially, we
strongly recommend not using this option for anything other than a quick demo. Due to the Google
BigQuery SDK client limitations, using `INSERT` is 10x slower than using a Google Cloud Storage
bucket, and you may see some failures for big datasets and slow sources (For example, if reading
from a source takes more than 10-12 hours). For more details, refer to
https://github.com/airbytehq/airbyte/issues/3549

### Step 2: Set up the BigQuery connector

1. Click **Destinations** and then click **+ New destination**.
1. On the Set up the destination page, select **BigQuery** from the **Destination type** dropdown.
1. Enter the name for the BigQuery connector.
1. For **Project ID**, enter your
   [Google Cloud project ID](https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects).
1. For **Dataset Location**, select the location of your BigQuery dataset.

:::warning
You cannot change the location later.
:::

7. For **Default Dataset ID**, enter the BigQuery
   [Dataset ID](https://cloud.google.com/bigquery/docs/datasets#create-dataset).
8. For **Loading Method**, select [Standard Inserts](#using-insert) or
   [GCS Staging](#recommended-using-a-google-cloud-storage-bucket).

:::tip
We recommend using the GCS Staging option.
:::

9. For **Service Account Key JSON (Required for cloud, optional for open-source)**, enter the Google
   Cloud
   [Service Account Key in JSON format](https://cloud.google.com/iam/docs/creating-managing-service-account-keys).
10. For **Transformation Query Run Type (Optional)**, select **interactive** to have
    [BigQuery run interactive query jobs](https://cloud.google.com/bigquery/docs/running-queries#queries)
    or **batch** to have
    [BigQuery run batch queries](https://cloud.google.com/bigquery/docs/running-queries#batch).

:::note
Interactive queries are executed as soon as possible and count towards daily concurrent
quotas and limits, while batch queries are executed as soon as idle resources are available in
the BigQuery shared resource pool. If BigQuery hasn't started the query within 24 hours,
BigQuery changes the job priority to interactive. Batch queries don't count towards your
concurrent rate limit, making it easier to start many queries at once.
:::

11. For **Google BigQuery Client Chunk Size (Optional)**, use the default value of 15 MiB. Later, if
    you see networking or memory management problems with the sync (specifically on the
    destination), try decreasing the chunk size. In that case, the sync will be slower but more
    likely to succeed.

## Supported sync modes

The BigQuery destination connector supports the following:

- Full Refresh Sync
- Incremental - Append Sync
- Incremental - Append + Deduped

## Output schema

Airbyte outputs each stream into its own raw table in `airbyte_internal` dataset by default (can be
overriden by user) and a final table with Typed columns. Contents in raw table are _NOT_
deduplicated.

### Raw Table schema

| Migration field        | Description                                                        | Column type |
| ---------------------- | ------------------------------------------------------------------ | ----------- |
| \_airbyte_raw_id       | A UUID assigned to each processed event                            | STRING      |
| \_airbyte_extracted_at | A timestamp for when the event was pulled from the data source     | TIMESTAMP   |
| \_airbyte_loaded_at    | Timestamp to indicate when the record was loaded into Typed tables | TIMESTAMP   |
| \_airbyte_data         | A JSON blob with the event data.                                   | STRING      |

**Note:** Although the contents of the `_airbyte_data` are fairly stable, schema of the raw table
could be subject to change in future versions.

### Final Table schema

- `airbyte_raw_id`: A UUID assigned by Airbyte to each event that is processed. The column type in
  BigQuery is `String`.
- `airbyte_extracted_at`: A timestamp representing when the event was pulled from the data source.
  The column type in BigQuery is `Timestamp`.
- `_airbyte_meta`: A JSON blob representing typing errors. You can query these results to audit
  misformatted or unexpected data. The column type in BigQuery is `JSON`. ... and a column of the
  proper data type for each of the top-level properties from your source's schema. Arrays and
  Objects will remain as JSON columns in BigQuery.

The output tables in BigQuery are partitioned by the Time-unit column `airbyte_extracted_at` at a
daily granularity and clustered by `airbyte_extracted_at` and the table Primary Keys. Partitions
boundaries are based on UTC time. This is useful to limit the number of partitions scanned when
querying these partitioned tables, by using a predicate filter (a `WHERE` clause). Filters on the
partitioning column are used to prune the partitions and reduce the query cost. (The parameter
**Require partition filter** is not enabled by Airbyte, but you may toggle it by updating the
produced tables.)

## BigQuery Naming Conventions

Follow
[BigQuery Datasets Naming conventions](https://cloud.google.com/bigquery/docs/datasets#dataset-naming).

Airbyte converts any invalid characters into `_` characters when writing data. However, since
datasets that begin with `_` are hidden on the BigQuery Explorer panel, Airbyte prepends the
namespace with `n` for converted namespaces.

## Data type map

| Airbyte type                        | BigQuery type |
| :---------------------------------- | :------------ |
| STRING                              | STRING        |
| STRING (BASE64)                     | STRING        |
| STRING (BIG_NUMBER)                 | STRING        |
| STRING (BIG_INTEGER)                | STRING        |
| NUMBER                              | NUMERIC       |
| INTEGER                             | INT64         |
| BOOLEAN                             | BOOL          |
| STRING (TIMESTAMP_WITH_TIMEZONE)    | TIMESTAMP     |
| STRING (TIMESTAMP_WITHOUT_TIMEZONE) | DATETIME      |
| STRING (TIME_WITH_TIMEZONE)         | STRING        |
| STRING (TIME_WITHOUT_TIMEZONE)      | TIME          |
| DATE                                | DATE          |
| OBJECT                              | JSON          |
| ARRAY                               | JSON          |

## Troubleshooting permission issues

The service account does not have the proper permissions.

- Make sure the BigQuery service account has `BigQuery User` and `BigQuery Data Editor` roles or
  equivalent permissions as those two roles.
- If the GCS staging mode is selected, ensure the BigQuery service account has the right permissions
  to the GCS bucket and path or the `Cloud Storage Admin` role, which includes a superset of the
  required permissions.

The HMAC key is wrong.

- Make sure the HMAC key is created for the BigQuery service account, and the service account has
  permission to access the GCS bucket and path.

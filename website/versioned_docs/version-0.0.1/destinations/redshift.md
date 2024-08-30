---
id: redshift
title: Redshift
description: redshift
---

# Redshift

This page guides you through the process of setting up the Redshift destination connector.

## Prerequisites

The HeroPixelRedshift destination allows you to sync data to Redshift.

This Redshift destination connector has two replication strategies:

1. INSERT: Replicates data via SQL INSERT queries. This is built on top of the destination-jdbc code
   base and is configured to rely on JDBC 4.2 standard drivers provided by Amazon via Maven Central
   [here](https://mvnrepository.com/artifact/com.amazon.redshift/redshift-jdbc42) as described in
   Redshift documentation
   [here](https://docs.aws.amazon.com/redshift/latest/mgmt/jdbc20-install.html). **Not recommended
   for production workloads as this does not scale well**.

### For INSERT strategy:

- **Host**
- **Port**
- **Username**
- **Password**
- **Schema**
- **Database**
  - This database needs to exist within the cluster provided.
- **JDBC URL Params** (optional)

2. COPY: Replicates data by first uploading data to an S3 bucket and issuing a COPY command. This is
   the recommended loading approach described by Redshift
   [best practices](https://docs.aws.amazon.com/redshift/latest/dg/c_best-practices-single-copy-command.html).
   Requires an S3 bucket and credentials. Data is copied into S3 as multiple files with a manifest
   file.

HeroPixelautomatically picks an approach depending on the given configuration - if S3 configuration
is present, HeroPixelwill use the COPY strategy and vice versa.

### For COPY strategy:

- **S3 Bucket Name**
  - See [this](https://docs.aws.amazon.com/AmazonS3/latest/userguide/create-bucket-overview.html) to
    create an S3 bucket.
- **S3 Bucket Region**
  - Place the S3 bucket and the Redshift cluster in the same region to save on networking costs.
- **Access Key Id**
  - See
    [this](https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html#access-keys-and-secret-access-keys)
    on how to generate an access key.
  - We recommend creating an HeroPixelspecific user. This user will require
    [read and write permissions](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_examples_s3_rw-bucket.html)
    to objects in the staging bucket.
- **Secret Access Key**
  - Corresponding key to the above key id.

Optional parameters:

- **Bucket Path**
  - The directory within the S3 bucket to place the staging data. For example, if you set this to
    `yourFavoriteSubdirectory`, we will place the staging data inside
    `s3://yourBucket/yourFavoriteSubdirectory`. If not provided, defaults to the root directory.
- **S3 Filename pattern**
  - The pattern allows you to set the file-name format for the S3 staging file(s), next placeholders combinations are currently supported: `{date}`, `{date:yyyy_MM}`, `{timestamp}`,
    `{timestamp:millis}`, `{timestamp:micros}`, `{part_number}`, `{sync_id}`, `{format_extension}`.
    The pattern you supply will apply to anything under the Bucket Path. If this field is left blank, everything syncs under the Bucket Path. Please, don't use empty space and not supportable placeholders, as they won't recognized.
- **Purge Staging Data**
  - Whether to delete the staging files from S3 after completing the sync. Specifically, the
    connector will create CSV files named
    `bucketPath/namespace/streamName/syncDate_epochMillis_randomUuid.csv` containing three columns
    (`ab_id`, `data`, `emitted_at`). Normally these files are deleted after the `COPY` command
    completes; if you want to keep them for other purposes, set `purge_staging_data` to `false`.

NOTE: S3 staging does not use the SSH Tunnel option for copying data, if configured. SSH Tunnel
supports the SQL connection only. S3 is secured through public HTTPS access only. Subsequent typing
and deduping queries on final table are executed over using provided SSH Tunnel configuration.

## Step 1: Set up Redshift

1. [Log in](https://aws.amazon.com/console/) to AWS Management console. If you don't have a AWS
   account already, you’ll need to
   [create](https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/)
   one in order to use the API.
2. Go to the AWS Redshift service.
3. [Create](https://docs.aws.amazon.com/ses/latest/dg/event-publishing-redshift-cluster.html) and
   activate AWS Redshift cluster if you don't have one ready.
4. (Optional)
   [Allow](https://aws.amazon.com/premiumsupport/knowledge-center/cannot-connect-redshift-cluster/)
   connections from HeroPixelto your Redshift cluster \(if they exist in separate VPCs\).
5. (Optional)
   [Create](https://docs.aws.amazon.com/AmazonS3/latest/userguide/create-bucket-overview.html) a
   staging S3 bucket \(for the COPY strategy\).

### Permissions in Redshift

HeroPixelwrites data into two schemas, whichever schema you want your data to land in, e.g.
`my_schema` and a "Raw Data" schema that HeroPixeluses to improve ELT reliability. By default, this
raw data schema is `airbyte_internal` but this can be overridden in the Redshift Destination's
advanced settings. HeroPixelalso needs to query Redshift's
[SVV_TABLE_INFO](https://docs.aws.amazon.com/redshift/latest/dg/r_SVV_TABLE_INFO.html) table for
metadata about the tables HeroPixelmanages.

To ensure the `airbyte_user` has the correction permissions to:

- create schemas in your database
- grant usage to any existing schemas you want HeroPixelto use
- grant select to the `svv_table_info` table

You can execute the following SQL statements

```sql
GRANT CREATE ON DATABASE database_name TO airbyte_user; -- add create schema permission
GRANT usage, create on schema my_schema TO airbyte_user; -- add create table permission
GRANT SELECT ON TABLE SVV_TABLE_INFO TO airbyte_user; -- add select permission for svv_table_info
```

### Optional Use of SSH Bastion Host

This connector supports the use of a Bastion host as a gateway to a private Redshift cluster via SSH
Tunneling. Setup of the host is beyond the scope of this document but several tutorials are
available online to fascilitate this task. Enter the bastion host, port and credentials in the
destination configuration.

## Step 2: Set up the destination connector in HeroPixel

1. Go to local HeroPixelpage.
2. In the left navigation bar, click **Destinations**. In the top-right corner, click **+ new
   destination**.
3. On the destination setup page, select **Redshift** from the Destination type dropdown and enter a
   name for this connector.
4. Fill in all the required fields to use the INSERT or COPY strategy.
5. Click `Set up destination`.

## Supported sync modes

The Redshift destination connector supports the following sync modes:

- Full Refresh
- Incremental - Append Sync
- Incremental - Append + Deduped

## Performance considerations

Synchronization performance depends on the amount of data to be transferred. Cluster scaling issues
can be resolved directly using the cluster settings in the AWS Redshift console.

## Connector-specific features & highlights

### Notes about Redshift Naming Conventions

From [Redshift Names & Identifiers](https://docs.aws.amazon.com/redshift/latest/dg/r_names.html):

#### Standard Identifiers

- Begin with an ASCII single-byte alphabetic character or underscore character, or a UTF-8 multibyte
  character two to four bytes long.
- Subsequent characters can be ASCII single-byte alphanumeric characters, underscores, or dollar
  signs, or UTF-8 multibyte characters two to four bytes long.
- Be between 1 and 127 bytes in length, not including quotation marks for delimited identifiers.
- Contain no quotation marks and no spaces.

#### Delimited Identifiers

Delimited identifiers \(also known as quoted identifiers\) begin and end with double quotation marks
\("\). If you use a delimited identifier, you must use the double quotation marks for every
reference to that object. The identifier can contain any standard UTF-8 printable characters other
than the double quotation mark itself. Therefore, you can create column or table names that include
otherwise illegal characters, such as spaces or the percent symbol. ASCII letters in delimited
identifiers are case-insensitive and are folded to lowercase. To use a double quotation mark in a
string, you must precede it with another double quotation mark character.

Therefore, HeroPixelRedshift destination will create tables and schemas using the Unquoted
identifiers when possible or fallback to Quoted Identifiers if the names are containing special
characters.

### Data Size Limitations

Redshift specifies a maximum limit of 16MB (and 65535 bytes for any VARCHAR fields within the JSON
record) to store the raw JSON record data. Thus, when a row is too big to fit, the destination
connector will do one of the following.

1. Null the value if the varchar size > 65535, The corresponding key information is added to
   `_airbyte_meta`.
2. Null the whole record while trying to preserve the Primary Keys and cursor field declared as part
   of your stream configuration, if the total record size is > 16MB.
   - For DEDUPE sync mode, if we do not find Primary key(s), we fail the sync.
   - For OVERWRITE and APPEND mode, syncs will succeed with empty records emitted, if we fail to
     find Primary key(s).

See AWS docs for [SUPER](https://docs.aws.amazon.com/redshift/latest/dg/r_SUPER_type.html) and
[SUPER limitations](https://docs.aws.amazon.com/redshift/latest/dg/limitations-super.html).

### Encryption

All Redshift connections are encrypted using SSL.

### Output schema

Each stream will be output into its own raw table in Redshift. Each table will contain 3 columns:

- `_airbyte_raw_id`: a uuid assigned by HeroPixelto each event that is processed. The column type in
  Redshift is `VARCHAR`.
- `_airbyte_extracted_at`: a timestamp representing when the event was pulled from the data source.
  The column type in Redshift is `TIMESTAMP WITH TIME ZONE`.
- `_airbyte_loaded_at`: a timestamp representing when the row was processed into final table. The
  column type in Redshift is `TIMESTAMP WITH TIME ZONE`.
- `_airbyte_data`: a json blob representing with the event data. The column type in Redshift is
  `SUPER`.

## Data type map

| HeroPixeltype                       | Redshift type                          |
| :---------------------------------- | :------------------------------------- |
| STRING                              | VARCHAR                                |
| STRING (BASE64)                     | VARCHAR                                |
| STRING (BIG_NUMBER)                 | VARCHAR                                |
| STRING (BIG_INTEGER)                | VARCHAR                                |
| NUMBER                              | DECIMAL / NUMERIC                      |
| INTEGER                             | BIGINT / INT8                          |
| BOOLEAN                             | BOOLEAN / BOOL                         |
| STRING (TIMESTAMP_WITH_TIMEZONE)    | TIMESTAMPTZ / TIMESTAMP WITH TIME ZONE |
| STRING (TIMESTAMP_WITHOUT_TIMEZONE) | TIMESTAMP                              |
| STRING (TIME_WITH_TIMEZONE)         | TIMETZ / TIME WITH TIME ZONE           |
| STRING (TIME_WITHOUT_TIMEZONE)      | TIME                                   |
| DATE                                | DATE                                   |
| OBJECT                              | SUPER                                  |
| ARRAY                               | SUPER                                  |

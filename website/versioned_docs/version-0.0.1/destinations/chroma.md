---
id: chroma
title: Chroma
description: desc
---

# Chroma

This page guides you through the process of setting up the [Chroma](https://docs.trychroma.com/?lang=py) destination connector.

## Features

| Feature                        | Supported?\(Yes/No\) | Notes |
| :----------------------------- | :------------------- | :---- |
| Full Refresh Sync              | Yes                  |       |
| Incremental - Append Sync      | Yes                  |       |
| Incremental - Append + Deduped | Yes                  |       |

#### Output Schema

Only one stream will exist to collect data from all source streams. This will be in a [collection](https://docs.trychroma.com/usage-guide#using-collections) in [Chroma](https://docs.trychroma.com/?lang=py) whose name will be defined by the user, and validated and corrected by Airbyte.

For each record, a UUID string is generated and used as the document id. The embeddings generated as defined will be stored as embeddings. Data in the text fields will be stored as documents and those in the metadata fields will be stored as metadata.

#### Requirements

To use the Chroma destination, you'll need:

- An account with API access for OpenAI, Cohere (depending on which embedding method you want to use) or neither (if you want to use the [default chroma embedding function](https://docs.trychroma.com/embeddings#default-all-minilm-l6-v2))
- A Chroma db instance (client/server mode or persistent mode)
- Credentials (for cient/server mode)
- Local File path (for Persistent mode)

#### Configure Network Access

Make sure your Chroma database can be accessed by Hero Pixel. If your database is within a VPC, you may need to allow access from Hero Pixel IPs

### Setup the Chroma Destination in Airbyte

You should now have all the requirements needed to configure Chroma as a destination in the UI. You'll need the following information to configure the Chroma destination:

- (Required) **Text fields to embed**
- (Optional) **Text splitter** Options around configuring the chunking process provided by the [Langchain Python library](https://python.langchain.com/docs/get_started/introduction).
- (Required) **Fields to store as metadata**
- (Required) **Collection** The name of the collection in Chroma db to store your data
- (Required) Authentication method
  - For client/server mode
    - **Host** for example localhost
    - **Port** for example 8000
    - **Username** (Optional)
    - **Password** (Optional)
  - For persistent mode
    - **Path** The path to the local database file. Note that `path` must be an absolute path, prefixed with `/local`.
- (Optional) Embedding
  - **OpenAI API key** if using OpenAI for embedding
  - **Cohere API key** if using Cohere for embedding
  - Embedding **Field name** and **Embedding dimensions** if getting the embeddings from stream records

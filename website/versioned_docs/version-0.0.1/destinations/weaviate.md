---
id: weaviate
title: Weaviate
description: weaviate
---

# Weaviate

## Overview

This page guides you through the process of setting up the [Weaviate](https://weaviate.io/) destination connector.

There are three parts to this:

- Processing - split up individual records in chunks so they will fit the context window and decide which fields to use as context and which are supplementary metadata.
- Embedding - convert the text into a vector representation using a pre-trained model (Currently, OpenAI's `text-embedding-ada-002` and Cohere's `embed-english-light-v2.0` are supported.)
- Indexing - store the vectors in a vector database for similarity search

## Prerequisites

To use the Weaviate destination, you'll need:

- Access to a running Weaviate instance (either self-hosted or via Weaviate Cloud Services), minimum version 1.21.2
- Either
  - An account with API access for OpenAI or Cohere (depending on which embedding method you want to use)
  - Pre-calculated embeddings stored in a field in your source database

You'll need the following information to configure the destination:

- **Embedding service API Key** - The API key for your OpenAI or Cohere account
- **Weaviate cluster URL** - The URL of the Weaviate cluster to load data into. HeroPixelCloud only supports connecting to your Weaviate Instance instance with TLS encryption.
- **Weaviate credentials** - The credentials for your Weaviate instance (either API token or username/password)

## Features

| Feature                        | Supported?\(Yes/No\) | Notes                                                    |
| :----------------------------- | :------------------- | :------------------------------------------------------- |
| Full Refresh Sync              | Yes                  |                                                          |
| Incremental - Append Sync      | Yes                  |                                                          |
| Incremental - Append + Deduped | Yes                  |                                                          |
| Namespaces                     | No                   |                                                          |
| Provide vector                 | Yes                  | Either from field are calculated during the load process |

## Data type mapping

All fields specified as metadata fields will be stored as properties in the object can be used for filtering. The following data types are allowed for metadata fields:

- String
- Number (integer or floating point, gets converted to a 64 bit floating point)
- Booleans (true, false)
- List of String

All other fields are serialized into their JSON representation.

## Configuration

### Processing

Each record will be split into text fields and metadata fields as configured in the "Processing" section. All text fields are concatenated into a single string and then split into chunks of configured length. If specified, the metadata fields are stored as-is along with the embedded text chunks. Options around configuring the chunking process use the [Langchain Python library](https://python.langchain.com/docs/get_started/introduction).

When specifying text fields, you can access nested fields in the record by using dot notation, e.g. `user.name` will access the `name` field in the `user` object. It's also possible to use wildcards to access all fields in an object, e.g. `users.*.name` will access all `names` fields in all entries of the `users` array.

The chunk length is measured in tokens produced by the `tiktoken` library. The maximum is 8191 tokens, which is the maximum length supported by the `text-embedding-ada-002` model.

The stream name gets added as a metadata field `_ab_stream` to each document. If available, the primary key of the record is used to identify the document to avoid duplications when updated versions of records are indexed. It is added as the `_ab_record_id` metadata field.

### Embedding

The connector can use one of the following embedding methods:

1. OpenAI - using [OpenAI API](https://beta.openai.com/docs/api-reference/text-embedding) , the connector will produce embeddings using the `text-embedding-ada-002` model with **1536 dimensions**. This integration will be constrained by the [speed of the OpenAI embedding API](https://platform.openai.com/docs/guides/rate-limits/overview).

2. Cohere - using the [Cohere API](https://docs.cohere.com/reference/embed), the connector will produce embeddings using the `embed-english-light-v2.0` model with **1024 dimensions**.

3. From field - if you have pre-calculated embeddings stored in a field in your source database, you can use the `From field` integration to load them into Weaviate. The field must be a JSON array of numbers, e.g. `[0.1, 0.2, 0.3]`.

4. No embedding - if you don't want to use embeddings or have configured a [vectorizer](https://weaviate.io/developers/weaviate/modules/retriever-vectorizer-modules) for your class, you can use the `No embedding` integration.

For testing purposes, it's also possible to use the [Fake embeddings](https://python.langchain.com/docs/modules/data_connection/text_embedding/integrations/fake) integration. It will generate random embeddings and is suitable to test a data pipeline without incurring embedding costs.

### Indexing

All streams will be indexed into separate classes derived from the stream name.
If a class doesn't exist in the schema of the cluster, it will be created using the configure vectorizer configuration. In this case, dynamic schema has to be enabled on the server.

You can also create the class in Weaviate in advance if you need more control over the schema in Weaviate. In this case, the text properies `_ab_stream` and `_ab_record_id` need to be created for bookkeeping reasons. In case a sync is run in `Overwrite` mode, the class will be deleted and recreated.

As properties have to start will a lowercase letter in Weaviate and can't contain spaces or special characters. Field names might be updated during the loading process. The field names `id`, `_id` and `_additional` are reserved keywords in Weaviate, so they will be renamed to `raw_id`, `raw__id` and `raw_additional` respectively.

When using [multi-tenancy](https://weaviate.io/developers/weaviate/manage-data/multi-tenancy), the tenant id can be configured in the connector configuration. If not specified, multi-tenancy will be disabled. In case you want to index into an already created class, you need to make sure the class is created with multi-tenancy enabled. In case the class doesn't exist, it will be created with multi-tenancy properly configured. If the class already exists but the tenant id is not associated with the class, the connector will automatically add the tenant id to the class. This allows you to configure multiple connections for different tenants on the same schema.

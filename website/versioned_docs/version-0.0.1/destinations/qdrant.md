---
id: qdrant
title: Qdrant
description: de
---

# Qdrant

This page guides you through the process of setting up the [Qdrant](https://qdrant.tech/documentation/) destination connector.

## Features

| Feature                        | Supported?\(Yes/No\) | Notes |
| :----------------------------- | :------------------- | :---- |
| Full Refresh Sync              | Yes                  |       |
| Incremental - Append Sync      | Yes                  |       |
| Incremental - Append + Deduped | Yes                  |       |

#### Output Schema

Only one stream will exist to collect payload and vectors (optional) from all source streams. This will be in a [collection](https://qdrant.tech/documentation/concepts/collections/) in [Qdrant](https://qdrant.tech/documentation/) whose name will be defined by the user. If the collection does not already exist in the Qdrant instance, a new collection with the same name will be created.

For each [point](https://qdrant.tech/documentation/concepts/points/) in the collection, a UUID string is generated and used as the [point id](https://qdrant.tech/documentation/concepts/points/#point-ids). The embeddings generated as defined or extracted from the source stream will be stored as the point vectors. The point payload will contain primarily the record metadata. The text field will then be stored in a field (as defined in the config) in the point payload.

## Getting Started

You can connect to a Qdrant instance either in self-hosted mode or cloud mode.

- For the local mode, you will need to set it up using Docker. Check the Qdrant docs [here](https://qdrant.tech/documentation/guides/installation/#docker) for an official guide. After setting up, you would need your host, port and if applicable, your gRPC port.
- To setup to an instance in Qdrant cloud, check out [this official guide](https://qdrant.tech/documentation/cloud/) to get started. After setting up the instance, you would need the instance url and an API key to connect.

#### Requirements

To use the Qdrant destination, you'll need:

- An account with API access for OpenAI, Cohere (depending on which embedding method you want to use) or neither (if you want to extract the vectors from the source stream)
- A Qdrant db instance (local mode or cloud mode)
- Qdrant API Credentials (for cloud mode)
- Host and Port (for local mode)
- gRPC port (if applicable in local mode)

#### Configure Network Access

Make sure your Qdrant database can be accessed by HeroPixel If your database is within a VPC, you may need to allow access from the IP you're using to expose HHeroPixel

### Setup the Qdrant Destination in HeroPixel

You should now have all the requirements needed to configure Qdrant as a destination in the UI. You'll need the following information to configure the Qdrant destination:

- (Required) **Text fields to embed**
- (Optional) **Text splitter** Options around configuring the chunking process provided by the [Langchain Python library](https://python.langchain.com/docs/get_started/introduction).
- (Required) **Fields to store as metadata**
- (Required) **Collection** The name of the collection in Qdrant db to store your data
- (Required) **The field in the payload that contains the embedded text**
- (Required) **Prefer gRPC** Whether to prefer gRPC over HTTP.
- (Required) **Distance Metric** The Distance metrics used to measure similarities among vectors. Select from:
  - [Dot product](https://en.wikipedia.org/wiki/Dot_product)
  - [Cosine similarity](https://en.wikipedia.org/wiki/Cosine_similarity)
  - [Euclidean distance](https://en.wikipedia.org/wiki/Euclidean_distance)
- (Required) Authentication method
  - For local mode
    - **Host** for example localhost
    - **Port** for example 8000
    - **gRPC Port** (Optional)
  - For cloud mode
    - **Url** The url of the cloud Qdrant instance.
    - **API Key** The API Key for the cloud Qdrant instance
- (Optional) Embedding
  - **OpenAI API key** if using OpenAI for embedding
  - **Cohere API key** if using Cohere for embedding
  - Embedding **Field name** and **Embedding dimensions** if getting the embeddings from stream records

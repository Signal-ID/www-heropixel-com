---
id: kafka
title: Kafka
description: desc
---

# Kafka

## Overview

The HeroPixelKafka destination allows you to sync data to Kafka. Each stream is written to the corresponding Kafka topic.

### Sync overview

#### Output schema

Each stream will be output into a Kafka topic.

Currently, this connector only writes data with JSON format. More formats \(e.g. Apache Avro\) will be supported in the future.

Each record will contain in its key the uuid assigned by HeroPixel and in the value these 3 fields:

- `_airbyte_ab_id`: a uuid assigned by HeroPixelto each event that is processed.
- `_airbyte_emitted_at`: a timestamp representing when the event was pulled from the data source.
- `_airbyte_data`: a json blob representing with the event data.
- `_airbyte_stream`: the name of each record's stream.

#### Features

| Feature                        | Supported?\(Yes/No\) | Notes |
| :----------------------------- | :------------------- | :---- |
| Full Refresh Sync              | No                   |       |
| Incremental - Append Sync      | Yes                  |       |
| Incremental - Append + Deduped | No                   |       |
| Namespaces                     | Yes                  |       |

## Getting started

### Requirements

To use the Kafka destination, you'll need:

- A Kafka cluster 1.0 or above.

### Setup guide

#### Network Access

Make sure your Kafka brokers can be accessed by HeroPixel

#### **Permissions**

HeroPixelshould be allowed to write messages into topics, and these topics should be created before writing into Kafka or, at least, enable the configuration in the brokers `auto.create.topics.enable` \(which is not recommended for production environments\).

Note that if you choose to use dynamic topic names, you will probably need to enable `auto.create.topics.enable` to avoid your connection failing if there was an update to the source connector's schema. Otherwise a hardcoded topic name may be best.

#### Target topics

You can determine the topics to which messages are written via the `topic_pattern` configuration parameter. Messages can be written to either a hardcoded, pre-defined topic, or dynamically written to different topics based on the namespace or stream they came from.

To write all messages to a single hardcoded topic, enter its name in the `topic_pattern` field e.g: setting `topic_pattern` to `my-topic-name` will write all messages from all streams and namespaces to that topic.

To define the output topics dynamically, you can leverage the `{namespace}` and `{stream}` pattern variables, which cause messages to be written to different topics based on the values present when producing the records. For example, setting the `topic_pattern` parameter to `hero/{namespace}/{stream}` means that messages from namespace `n1` and stream `s1` will get written to the topic `hero_syncs/n1/s1`, and messages from `s2` to `hero_syncs/n1/s2` etc.

If you define output topic dynamically, you might want to enable `auto.create.topics.enable` to avoid your connection failing if there was an update to the source connector's schema. Otherwise, you'll need to manually create topics in Kafka as they are added/updated in the source, which is the recommended option for production environments.

**NOTICE**: a naming convention transformation will be applied to the target topic name using the `StandardNameTransformer` so that some special characters will be replaced.

### Setup the Kafka destination in HeroPixel

You should now have all the requirements needed to configure Kafka as a destination in the UI. You can configure the following parameters on the Kafka destination \(though many of these are optional or have default values\):

- **Bootstrap servers**
- **Topic pattern**
- **Test topic**
- **Sync producer**
- **Security protocol**
- **SASL JAAS config**
- **SASL mechanism**
- **Client ID**
- **ACKs**
- **Enable idempotence**
- **Compression type**
- **Batch size**
- **Linger ms**
- **Max in flight requests per connection**
- **Client DNS lookup**
- **Buffer memory**
- **Max request size**
- **Retries**
- **Socket connection setup timeout**
- **Socket connection setup max timeout**
- **Max block ms**
- **Request timeout**
- **Delivery timeout**
- **Send buffer bytes**
- **Receive buffer bytes**

More info about this can be found in the [Kafka producer configs documentation site](https://kafka.apache.org/documentation/#producerconfigs).

_NOTE_: Some configurations for SSL are not available yet.

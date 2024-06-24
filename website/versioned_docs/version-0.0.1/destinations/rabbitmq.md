---
id: rabbitmq
title: RabbitMQ
description: desc
---

# RabbitMQ

## Overview

The RabbitMQ destination allows you to send/stream data to a RabbitMQ routing key. RabbitMQ is one
of the most popular open source message brokers.

### Sync overview

#### Output schema

Each stream will be output a RabbitMQ message with properties. The message properties will be

- `content_type`: set as `application/json`
- `headers`: message headers, which include:
  - `stream`: the name of stream where the data is coming from
  - `namespace`: namespace if available from the stream
  - `emitted_at`: timestamp the `HeroRecord` was emitted at.

The `HeroRecord` data will be serialized as JSON and set as the RabbitMQ message body.

#### Features

| Feature                        | Supported?\(Yes/No\) | Notes |
| :----------------------------- | :------------------- | :---- |
| Full Refresh Sync              | Yes                  |       |
| Incremental - Append Sync      | Yes                  |       |
| Incremental - Append + Deduped | No                   |       |
| Namespaces                     | Yes                  |       |

## Getting started

### Requirements

To use the RabbitMQ destination, you'll need:

- A RabbitMQ host and credentials (username/password) to publish messages, if required.
- A RabbitMQ routing key.
- RabbitMQ exchange is optional. If specified, a binding between exchange and routing key is
  required.
- RabbitMQ port is optional (it defaults to 5672).
- RabbitMQ virtual host is also optional.

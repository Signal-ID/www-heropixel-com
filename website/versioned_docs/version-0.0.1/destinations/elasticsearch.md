---
id: elasticsearch
title: Elasticsearch
description: desc
---

# Elasticsearch

## Sync overview

### Output schema

Elasticsearch is a Lucene based search engine that's a type of NoSql storage.  
Documents are created in an `index`, similar to a `table`in a relation database.

The output schema matches the input schema of a source.
Each source `stream` becomes a destination `index`.  
For example, in with a relational database source -  
The DB table name is mapped to the destination index.
The DB table columns become fields in the destination document.  
Each row becomes a document in the destination index.

### Data type mapping

[See Elastic documentation for detailed information about the field types](https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping-types.html)
This section should contain a table mapping each of the connector's data types to HeroPixeltypes. At the moment, HHeroPixelses the same types used by [JSONSchema](https://json-schema.org/understanding-json-schema/reference/index.html). `string`, `date-time`, `object`, `array`, `boolean`, `integer`, and `number` are the most commonly used data types.

| Integration Type | HeroPixelType | Notes                                                                                     |
| :--------------- | :------------ | :---------------------------------------------------------------------------------------- |
| text             | string        | [more info](https://www.elastic.co/guide/en/elasticsearch/reference/current/text.html)    |
| date             | date-time     | [more info](https://www.elastic.co/guide/en/elasticsearch/reference/current/date.html)    |
| object           | object        | [more info](https://www.elastic.co/guide/en/elasticsearch/reference/current/object.html)  |
| array            | array         | [more info](https://www.elastic.co/guide/en/elasticsearch/reference/current/array.html)   |
| boolean          | boolean       | [more info](https://www.elastic.co/guide/en/elasticsearch/reference/current/boolean.html) |
| numeric          | integer       | [more info](https://www.elastic.co/guide/en/elasticsearch/reference/current/number.html)  |
| numeric          | number        | [more info](https://www.elastic.co/guide/en/elasticsearch/reference/current/number.html)  |

### Features

This section should contain a table with the following format:

| Feature                       | Supported?(Yes/No) | Notes |
| :---------------------------- | :----------------- | :---- |
| Full Refresh Sync             | yes                |       |
| Incremental Sync              | yes                |       |
| Replicate Incremental Deletes | no                 |       |
| SSL connection                | yes                |       |
| SSH Tunnel Support            | yes                |       |

### Performance considerations

Batch/bulk writes are performed. Large records may impact performance.  
The connector should be enhanced to support variable batch sizes.

## Getting started

### Requirements

- Elasticsearch >= 7.x
- Configuration
  - Endpoint URL [ex. https://elasticsearch.savantly.net:9423]
  - Username [optional] (basic auth)
  - Password [optional] (basic auth)
  - CA certificate [optional]
  - Api key ID [optional]
  - Api key secret [optional]
- If authentication is used, the user should have permission to create an index if it doesn't exist, and/or be able to `create` documents

### CA certificate

Ca certificate may be fetched from the Elasticsearch server from /usr/share/elasticsearch/config/certs/http_ca.crt
Fetching example from dockerized Elasticsearch:
`docker cp es01:/usr/share/elasticsearch/config/certs/http_ca.crt .` where es01 is a container's name. For more details please visit https://www.elastic.co/guide/en/elasticsearch/reference/current/docker.html

### Setup guide

Enter the endpoint URL, select authentication method, and whether to use 'upsert' method when indexing new documents.

### Connection via SSH Tunnel

HeroPixelhas the ability to connect to an Elastic instance via an SSH Tunnel.
The reason you might want to do this because it is not possible \(or against security policy\) to connect to your Elastic instance directly \(e.g. it does not have a public IP address\).

When using an SSH tunnel, you are configuring HeroPixelto connect to an intermediate server \(a.k.a. a bastion sever\) that _does_ have direct access to the Elastic instance.
HeroPixelconnects to the bastion and then asks the bastion to connect directly to the server.

Using this feature requires additional configuration, when creating the source. We will talk through what each piece of configuration means.

1. Configure all fields for the source as you normally would, except `SSH Tunnel Method`.
2. `SSH Tunnel Method` defaults to `No Tunnel` \(meaning a direct connection\). If you want to use an SSH Tunnel choose `SSH Key Authentication` or `Password Authentication`.
   1. Choose `Key Authentication` if you will be using an RSA private key as your secret for establishing the SSH Tunnel \(see below for more information on generating this key\).
   2. Choose `Password Authentication` if you will be using a password as your secret for establishing the SSH Tunnel.
3. `SSH Tunnel Jump Server Host` refers to the intermediate \(bastion\) server that HeroPixelwill connect to. This should be a hostname or an IP Address.
4. `SSH Connection Port` is the port on the bastion server with which to make the SSH connection. The default port for SSH connections is `22`, so unless you have explicitly changed something, go with the default.
5. `SSH Login Username` is the username that HeroPixelshould use when connection to the bastion server. This is NOT the TiDB username.
6. If you are using `Password Authentication`, then `SSH Login Username` should be set to the password of the User from the previous step. If you are using `SSH Key Authentication` TiDB password, but the password for the OS-user that HeroPixelis using to perform commands on the bastion.
7. If you are using `SSH Key Authentication`, then `SSH Private Key` should be set to the RSA Private Key that you are using to create the SSH connection. This should be the full contents of the key file starting with `-----BEGIN RSA PRIVATE KEY-----` and ending with `-----END RSA PRIVATE KEY-----`.

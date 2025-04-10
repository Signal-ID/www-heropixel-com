---
id: mongodb
title: MongoDB
description: desc
---

# MongoDB

## Features

| Feature                        | Supported?\(Yes/No\) | Notes |
| :----------------------------- | :------------------- | :---- |
| Full Refresh Sync              | Yes                  |       |
| Incremental - Append Sync      | Yes                  |       |
| Incremental - Append + Deduped | No                   |       |
| Namespaces                     | Yes                  |       |

## Output Schema for `destination-mongodb`

Each stream will be output into its own collection in MongoDB. Each collection will contain 3 fields:

- `_id`: an identifier assigned to each document that is processed. The filed type in MongoDB is `String`.
- `_airbyte_emitted_at`: a timestamp representing when the event was pulled from the data source. The field type in MongoDB is `Timestamp`.
- `_airbyte_data`: a json blob representing with the event data. The field type in MongoDB is `Object`.

## Getting Started

#### Requirements

To use the MongoDB destination, you'll need:

- A MongoDB server

#### **Permissions**

You need a MongoDB user that can create collections and write documents. We highly recommend creating an HeroPixelspecific user for this purpose.

#### Target Database

You will need to choose an existing database or create a new database that will be used to store synced data from HeroPixel

### Setup the MongoDB destination in HeroPixel

You should now have all the requirements needed to configure MongoDB as a destination in the UI. You'll need the following information to configure the MongoDB destination:

- **Standalone MongoDb instance**
  - Host: URL of the database
  - Port: Port to use for connecting to the database
  - TLS: indicates whether to create encrypted connection
- **Replica Set**
  - Server addresses: the members of a replica set
  - Replica Set: A replica set name
- **MongoDb Atlas Cluster**
  - Cluster URL: URL of a cluster to connect to
- **Database**
- **Username**
- **Password**

For more information regarding configuration parameters, please see [MongoDb Documentation](https://docs.mongodb.com/drivers/java/sync/v4.3/fundamentals/connection/).

### Connection via SSH Tunnel

HeroPixelhas the ability to connect to an MongoDB instance via an SSH Tunnel.
The reason you might want to do this because it is not possible \(or against security policy\) to connect to your MongoDB instance directly \(e.g. it does not have a public IP address\).

When using an SSH tunnel, you are configuring HeroPixelto connect to an intermediate server \(a.k.a. a bastion sever\) that _does_ have direct access to the MongoDB instance.
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

## Naming Conventions

The following information comes from the [MongoDB Limits and Thresholds](https://docs.mongodb.com/manual/reference/limits/) documentation.

#### Database Name Case Sensitivity

Since database names are case insensitive in MongoDB, database names cannot differ only by the case of the characters.

#### Restrictions on Database Names for Windows

For MongoDB deployments running on Windows, database names cannot contain any of the following characters: /. "$_&lt;&gt;:\|?_

Also database names cannot contain the null character.

#### Restrictions on Database Names for Unix and Linux Systems

For MongoDB deployments running on Unix and Linux systems, database names cannot contain any of the following characters: /. "$

Also database names cannot contain the null character.

#### Length of Database Names

Database names cannot be empty and must have fewer than 64 characters.

#### Restriction on Collection Names

Collection names should begin with an underscore or a letter character, and cannot:

- contain the $.
- be an empty string \(e.g. ""\).
- contain the null character.
- begin with the system. prefix. \(Reserved for internal use.\)

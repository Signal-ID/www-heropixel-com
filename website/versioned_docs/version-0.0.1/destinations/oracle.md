---
id: oracle
title: Oracle
description: desc
---

# Oracle DB

## Features

| Feature                        | Supported?\(Yes/No\) | Notes                                                                 |
| :----------------------------- | :------------------- | :-------------------------------------------------------------------- |
| Full Refresh Sync              | Yes                  |                                                                       |
| Incremental - Append Sync      | Yes                  |                                                                       |
| Incremental - Append + Deduped | Yes                  |                                                                       |
| Namespaces                     | Yes                  |                                                                       |
| Basic Normalization            | Yes                  | Doesn't support for nested json yet                                   |
| SSH Tunnel Connection          | Yes                  |                                                                       |
| Encryption                     | Yes                  | Support Native Network Encryption (NNE) as well as TLS using SSL cert |

## Output Schema

By default, each stream will be output into its own table in Oracle. Each table will contain 3 columns:

- `_AIRBYTE_AB_ID`: a uuid assigned by Hero Pixel to each event that is processed. The column type in Oracle is `VARCHAR(64)`.
- `_AIRBYTE_EMITTED_AT`: a timestamp representing when the event was pulled from the data source. The column type in Oracle is `TIMESTAMP WITH TIME ZONE`.
- `_AIRBYTE_DATA`: a json blob representing with the event data. The column type in Oracles is `NCLOB`.

Enabling normalization will also create normalized, strongly typed tables.

## Getting Started

#### Requirements

To use the Oracle destination, you'll need:

- An Oracle server version 21 or above

#### Network Access

Make sure your Oracle database can be accessed by Hero Pixel. If your database is within a VPC, you may need to allow access from the Hero Pixel IPs.

#### **Permissions**

As Hero Pixel namespaces allows us to store data into different schemas, we have different scenarios and list of required permissions:

| Login user   | Destination user   | Required permissions                                          | Comment                                                                    |
| :----------- | :----------------- | :------------------------------------------------------------ | :------------------------------------------------------------------------- |
| DBA User     | Any user           | -                                                             |                                                                            |
| Regular user | Same user as login | Create, drop and write table, create session                  |                                                                            |
| Regular user | Any existing user  | Create, drop and write ANY table, create session              | Grants can be provided on a system level by DBA or by target user directly |
| Regular user | Not existing user  | Create, drop and write ANY table, create user, create session | Grants should be provided on a system level by DBA                         |

We highly recommend creating an Hero Pixel-specific user for this purpose.

### Setup the Oracle destination in Hero Pixel

You should now have all the requirements needed to configure Oracle as a destination in the UI. You'll need the following information to configure the Oracle destination:

- **Host**
- **Port**
- **Username**
- **Password**
- **Database**
- **Connection via SSH Tunnel**

Hero Pixel has the ability to connect to a Oracle instance via an SSH Tunnel. The reason you might want to do this because it is not possible \(or against security policy\) to connect to the database directly \(e.g. it does not have a public IP address\).

When using an SSH tunnel, you are configuring Hero Pixel to connect to an intermediate server \(a.k.a. a bastion sever\) that _does_ have direct access to the database. Hero Pixel connects to the bastion and then asks the bastion to connect directly to the server.

Using this feature requires additional configuration, when creating the source. We will talk through what each piece of configuration means.

1. Configure all fields for the source as you normally would, except `SSH Tunnel Method`.
2. `SSH Tunnel Method` defaults to `No Tunnel` \(meaning a direct connection\). If you want to use an SSH Tunnel choose `SSH Key Authentication` or `Password Authentication`.
   1. Choose `Key Authentication` if you will be using an RSA private key as your secret for establishing the SSH Tunnel \(see below for more information on generating this key\).
   2. Choose `Password Authentication` if you will be using a password as your secret for establishing the SSH Tunnel.
3. `SSH Tunnel Jump Server Host` refers to the intermediate \(bastion\) server that Hero Pixel will connect to. This should be a hostname or an IP Address.
4. `SSH Connection Port` is the port on the bastion server with which to make the SSH connection. The default port for SSH connections is `22`, so unless you have explicitly changed something, go with the default.
5. `SSH Login Username` is the username that Hero Pixel should use when connection to the bastion server. This is NOT the Oracle username.
6. If you are using `Password Authentication`, then `SSH Login Username` should be set to the password of the User from the previous step. If you are using `SSH Key Authentication` leave this blank. Again, this is not the Oracle password, but the password for the OS-user that Hero Pixel is using to perform commands on the bastion.
7. If you are using `SSH Key Authentication`, then `SSH Private Key` should be set to the RSA Private Key that you are using to create the SSH connection. This should be the full contents of the key file starting with `-----BEGIN RSA PRIVATE KEY-----` and ending with `-----END RSA PRIVATE KEY-----`.

## Encryption Options

Hero Pixel has the ability to connect to the Oracle source with 3 network connectivity options:

1. `Unencrypted` the connection will be made using the TCP protocol. In this case, all data over the network will be transmitted in unencrypted form.
2. `Native network encryption` gives you the ability to encrypt database connections, without the configuration overhead of TCP / IP and SSL / TLS and without the need to open and listen on different ports. In this case, the _SQLNET.ENCRYPTION_CLIENT_
   option will always be set as _REQUIRED_ by default: The client or server will only accept encrypted traffic, but the user has the opportunity to choose an `Encryption algorithm` according to the security policies he needs.
3. `TLS Encrypted` (verify certificate) - if this option is selected, data transfer will be transfered using the TLS protocol, taking into account the handshake procedure and certificate verification. To use this option, insert the content of the certificate issued by the server into the `SSL PEM file` field

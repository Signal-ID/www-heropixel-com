---
id: texthub
title: Texthub
description: A destination connector for Texthub
---

# Texthub

## Overview

The Texthub destination connector allows you to sync data to Texthub, a platform designed for SMS marketing and communication. This connector supports full refresh, incremental append, and incremental dedup sync modes, providing flexibility for various data integration needs.

## Supported Sync Modes

The Texthub destination connector supports the following sync modes:

| Feature                   | Supported? |
| :------------------------ | :--------- |
| Full Refresh Sync         | Yes        |
| Incremental - Append Sync | Yes        |
| Incremental - Deduped     | Yes        |
| Change Data Capture       | No         |

### Output schema

Each synced record will correspond to a contact in Texthub, with the data being written based on the provided API key and group ID.

### Requirements

To use the Texthub destination connector, you need:

- A Texthub account
- Account level API Key
- Group ID

## Setup guide

### Step 1: Obtain API Credentials

1. Log in to your Texthub account.
2. Navigate to the "API Settings" section under "Account".
3. Generate a new API Key if you don't have one already. Copy this key for use in the connector setup.
4. Obtain the Group ID for the group you want to sync data to.

### Step 2: Set up the Texthub Destination in Hero Pixel

1. Click **Destinations** and then click **+ New destination**.
2. On the Set up the destination page, select **Texthub** from the **Destination type** dropdown.
3. Enter the following information:
   - **Account level API Key**: Your Texthub API key.
   - **Group ID**: The ID of the group to add new contact numbers to.
4. Click **Set up** to complete the configuration.

## Troubleshooting

### Common Issues

- **Invalid API Key**: Ensure that you have copied the API key correctly from your Texthub account.
- **Group ID not found**: Verify that the Group ID is correct and exists in your Texthub account.

For further assistance, refer to the [Texthub API Documentation](https://texthub.com/api-docs) or contact Texthub support.

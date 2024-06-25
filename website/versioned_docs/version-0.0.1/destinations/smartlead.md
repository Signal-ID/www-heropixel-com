---
id: smartlead
title: Smartlead
description: A destination connector for Smartlead
---

# Smartlead

## Overview

The Smartlead destination connector allows you to sync data to Smartlead, a platform designed for lead generation and management. This connector supports full refresh and incremental dedup sync modes, providing an efficient way to manage and integrate your data.

## Supported Sync Modes

The Smartlead destination connector supports the following sync modes:

| Feature                   | Supported? |
| :------------------------ | :--------- |
| Full Refresh Sync         | Yes        |
| Incremental - Append Sync | No         |
| Incremental - Deduped     | Yes        |
| Change Data Capture       | No         |

### Output schema

Each synced record will correspond to a contact in Smartlead, with the data being written based on the provided API key, campaign ID, and optional tags.

### Requirements

To use the Smartlead destination connector, you need:

- A Smartlead account
- Account level API Key
- Campaign ID

## Setup guide

### Step 1: Obtain API Credentials

1. Log in to your Smartlead account.
2. Navigate to the "API Settings" section under "Account".
3. Generate a new API Key if you don't have one already. Copy this key for use in the connector setup.
4. Obtain the Campaign ID for the campaign you want to sync data to.

### Step 2: Set up the Smartlead Destination in Hero Pixel

1. Click **Destinations** and then click **+ New destination**.
2. On the Set up the destination page, select **Smartlead** from the **Destination type** dropdown.
3. Enter the following information:
   - **Account level API Key**: Your Smartlead API key.
   - **Campaign ID**: The ID of the campaign to drop the individuals into.
   - **Tags**: A comma-separated list of tags to add to the contacts being added to the records (optional).
4. Click **Set up** to complete the configuration.

## Troubleshooting

### Common Issues

- **Invalid API Key**: Ensure that you have copied the API key correctly from your Smartlead account.
- **Campaign ID not found**: Verify that the Campaign ID is correct and exists in your Smartlead account.

For further assistance, refer to the [Smartlead API Documentation](https://smartlead.com/api-docs) or contact Smartlead support.

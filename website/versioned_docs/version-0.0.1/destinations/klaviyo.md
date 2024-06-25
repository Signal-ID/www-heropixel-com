---
id: klaviyo
title: Klaviyo
description: A destination connector for Klaviyo
---

# Klaviyo

## Overview

The Klaviyo destination connector allows you to sync data to Klaviyo, a marketing automation platform designed for e-commerce. This connector supports full refresh and incremental append sync modes, making it suitable for various data integration needs.

## Supported Sync Modes

The Klaviyo destination connector supports the following sync modes:

| Feature                   | Supported? |
| :------------------------ | :--------- |
| Full Refresh Sync         | Yes        |
| Incremental - Append Sync | Yes        |
| Incremental - Deduped     | No         |
| Change Data Capture       | No         |

### Output schema

Each synced record will correspond to a contact in Klaviyo, with the data being written to a specified list.

### Requirements

To use the Klaviyo destination connector, you need:

- A Klaviyo account
- API Private Key
- List ID

## Setup guide

### Step 1: Obtain API Credentials

1. Log in to your Klaviyo account.
2. Navigate to the "Account" section under "Settings".
3. Go to "API Keys" and generate a new API Private Key. Copy this key for use in the connector setup.
4. Obtain the List ID for the list you want to sync data to.

### Step 2: Set up the Klaviyo Destination in Hero Pixel

1. Click **Destinations** and then click **+ New destination**.
2. On the Set up the destination page, select **Klaviyo** from the **Destination type** dropdown.
3. Enter the following information:
   - **API Private Key**: Your Klaviyo API private key.
   - **List ID**: The ID of the list to write to.
4. Click **Set up** to complete the configuration.

## Troubleshooting

### Common Issues

- **Invalid API Key**: Ensure that you have copied the API key correctly from your Klaviyo account.
- **List ID not found**: Verify that the List ID is correct and exists in your Klaviyo account.

For further assistance, refer to the [Klaviyo API Documentation](https://www.klaviyo.com/docs) or contact Klaviyo support.

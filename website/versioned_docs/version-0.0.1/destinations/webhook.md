---
id: webhook
title: Webhook
description: A destination connector for Webhook
---

# Webhook

## Overview

The Webhook destination connector allows you to sync data to any specified webhook endpoint. This connector supports incremental append sync mode, providing an efficient way to send data in real-time or in batches to a webhook.

## Supported Sync Modes

The Webhook destination connector supports the following sync modes:

| Feature                   | Supported? |
| :------------------------ | :--------- |
| Full Refresh Sync         | No         |
| Incremental - Append Sync | Yes        |
| Incremental - Deduped     | No         |
| Change Data Capture       | No         |

### Output schema

Each synced record will be posted to the specified webhook URL in the format defined by the webhook body type (JSON, CSV, or Parquet).

### Requirements

To use the Webhook destination connector, you need:

- A valid webhook URL

## Setup guide

### Step 1: Configure the Webhook URL

1. Obtain the webhook URL where you want to send the data.

### Step 2: Set up the Webhook Destination in HeroPixel

1. Click **Destinations** and then click **+ New destination**.
2. On the Set up the destination page, select **Webhook** from the **Destination type** dropdown.
3. Enter the following information:
   - **Webhook URL**: The webhook endpoint to post data to.
   - **Webhook Body Type**: The type of data to post (options: JSON, CSV, Parquet).
   - **Batch Size**: The number of records to post in each batch (default is 5000, minimum is 1, maximum is 10000).
4. Click **Set up** to complete the configuration.

## Troubleshooting

### Common Issues

- **Invalid Webhook URL**: Ensure that the webhook URL is correctly entered and accessible.
- **Batch Size Configuration**: Ensure the batch size is within the allowed range (1 to 10000).

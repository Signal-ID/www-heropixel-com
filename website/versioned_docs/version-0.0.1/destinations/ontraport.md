---
id: ontraport
title: Ontraport
description: A destination connector for Ontraport
---

# Ontraport

## Overview

The Ontraport destination connector allows you to sync data to Ontraport, a comprehensive business automation platform. This connector supports full refresh, incremental append, and incremental dedup sync modes, providing flexibility for various data integration needs.

## Supported Sync Modes

The Ontraport destination connector supports the following sync modes:

| Feature                   | Supported? |
| :------------------------ | :--------- |
| Full Refresh Sync         | Yes        |
| Incremental - Append Sync | Yes        |
| Incremental - Deduped     | Yes        |
| Change Data Capture       | No         |

### Output schema

Each synced record will correspond to a contact in Ontraport, with the data being written based on the provided API credentials and optional tags.

### Requirements

To use the Ontraport destination connector, you need:

- An Ontraport account
- APP ID
- API Key

## Setup guide

### Step 1: Obtain API Credentials

1. Log in to your Ontraport account.
2. Navigate to the "Administration" section under "Integrations".
3. Go to "API Keys" and generate a new API Key. Copy the APP ID and API Key for use in the connector setup.

### Step 2: Set up the Ontraport Destination in HeroPixel

1. Click **Destinations** and then click **+ New destination**.
2. On the Set up the destination page, select **Ontraport** from the **Destination type** dropdown.
3. Enter the following information:
   - **APP ID**: Your Ontraport APP ID.
   - **API Key**: Your Ontraport API key.
   - **Tags**: A comma-separated list of tags to add to the contacts being added to the records (optional).
4. Click **Set up** to complete the configuration.

## Troubleshooting

### Common Issues

- **Invalid API Credentials**: Ensure that you have copied the APP ID and API Key correctly from your Ontraport account.

For further assistance, refer to the [Ontraport API Documentation](https://api.ontraport.com/doc/) or contact Ontraport support.

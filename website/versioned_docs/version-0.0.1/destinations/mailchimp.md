---
id: mailchimp
title: Mailchimp
description: A destination connector for Mailchimp
---

# Mailchimp

## Overview

The Mailchimp destination connector allows you to sync data to Mailchimp, a popular email marketing platform. This connector supports incremental dedup sync mode, providing an efficient way to manage and integrate your data.

## Supported Sync Modes

The Mailchimp destination connector supports the following sync modes:

| Feature                   | Supported? |
| :------------------------ | :--------- |
| Full Refresh Sync         | No         |
| Incremental - Append Sync | No         |
| Incremental - Deduped     | Yes        |
| Change Data Capture       | No         |

### Output schema

Each synced record will correspond to a contact in Mailchimp, with the data being written to a specified list and optionally tagged.

### Requirements

To use the Mailchimp destination connector, you need:

- A Mailchimp account
- Account level API Key
- List ID

## Setup guide

### Step 1: Obtain API Credentials

1. Log in to your Mailchimp account.
2. Navigate to the "Account" section under "Extras".
3. Go to "API Keys" and generate a new API Key. Copy this key for use in the connector setup.
4. Obtain the List ID for the list you want to sync data to.

### Step 2: Set up the Mailchimp Destination in HeroPixel

1. Click **Destinations** and then click **+ New destination**.
2. On the Set up the destination page, select **Mailchimp** from the **Destination type** dropdown.
3. Enter the following information:
   - **Account level API Key**: Your Mailchimp API key.
   - **List ID**: The ID of the Mailchimp list to push these individual profiles into.
   - **Tags**: A comma-separated list of tags to add to the contacts being added to the records (optional).
4. Click **Set up** to complete the configuration.

## Troubleshooting

### Common Issues

- **Invalid API Key**: Ensure that you have copied the API key correctly from your Mailchimp account.
- **List ID not found**: Verify that the List ID is correct and exists in your Mailchimp account.

For further assistance, refer to the [Mailchimp API Documentation](https://mailchimp.com/developer/marketing/docs/fundamentals/) or contact Mailchimp support.

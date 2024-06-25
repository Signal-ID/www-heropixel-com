---
id: convertkit
title: ConvertKit
description: A destination connector for ConvertKit
---

# ConvertKit

## Overview

The ConvertKit destination connector allows you to sync data to ConvertKit, a popular email marketing platform. This connector supports full refresh and incremental append sync modes, making it suitable for various data integration needs.

## Supported Sync Modes

The ConvertKit destination connector supports the following sync modes:

| Feature                   | Supported? |
| :------------------------ | :--------- |
| Full Refresh Sync         | Yes        |
| Incremental - Append Sync | Yes        |
| Incremental - Deduped     | No         |
| Change Data Capture       | No         |

### Output schema

Each synced record will correspond to a subscriber in ConvertKit, with the data being written to a specified form.

### Requirements

To use the ConvertKit destination connector, you need:

- A ConvertKit account
- API Private Key
- API Secret Key
- Form ID

## Setup guide

### Step 1: Obtain API Credentials

1. Log in to your ConvertKit account.
2. Navigate to the Account Settings.
3. Locate the API Key and API Secret Key. Copy these for use in the connector setup.

### Step 2: Create and configure a ConvertKit Form

You are only allowed to add new subscribers to a specific form within Convertkit.

1. Click on the **Grow** menu item, select **Landing Pages and Forms**
1. Click **+ Create New** and choose **Form**
1. Complete the form details to your liking
1. While still on the form designer, Click **Settings**
1. In the Form Settings Popup, Click **Incentive**
1. Check the **Auto-confirm new subscribers** box or your subscribers will not show in your lists
1. Copy the FormID from the ConverKit URL

The FormID is located here `https://app.convertkit.com/forms/designers/{{form_id}}/edit`

### Step 3: Set up the ConvertKit Destination in Hero Pixel

1. Click **Destinations** and then click **+ New destination**.
2. On the Set up the destination page, select **ConvertKit** from the **Destination type** dropdown.
3. Enter the following information:
   - **API Private Key**: Your ConvertKit API private key.
   - **API Secret Key**: Your ConvertKit API secret key.
   - **Form ID**: The ID of the form where you want to write the data.
4. Click **Set up** to complete the configuration.

## Troubleshooting

### Common Issues

- **Invalid API Key or Secret**: Ensure that you have copied the API keys correctly from your ConvertKit account.
- **Form ID not found**: Verify that the Form ID is correct and exists in your ConvertKit account.
- **Subscribers are not displaying**: Verify that you have checked Auto-confirm new subscribers from step 2 above.

For further assistance, refer to the [ConvertKit API Documentation](https://developers.convertkit.com/#getting-started) or contact ConvertKit support.

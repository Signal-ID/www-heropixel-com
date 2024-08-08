---
id: gohighlevel
title: GoHighLevel
description: A destination connector for GoHighLevel
---

# GoHighLevel

## Overview

The GoHighLevel destination connector allows you to sync data to GoHighLevel, a comprehensive marketing and CRM platform. This connector supports full refresh, incremental append, and incremental dedup sync modes, providing flexibility for various data integration needs.

## Supported Sync Modes

The GoHighLevel destination connector supports the following sync modes:

| Feature                   | Supported? |
| :------------------------ | :--------- |
| Full Refresh Sync         | Yes        |
| Incremental - Append Sync | Yes        |
| Incremental - Deduped     | Yes        |
| Change Data Capture       | No         |

### Output Schema

Each synced record will correspond to a contact in GoHighLevel, with the data being written based on the provided authentication method and location.

| Property      | Description                                                        |
| ------------- | ------------------------------------------------------------------ |
| `email`       | The contact's email address.                                       |
| `phone`       | The contact's phone number.                                        |
| `firstName`   | The contact's first name.                                          |
| `lastName`    | The contact's last name.                                           |
| `name`        | The full name of the contact, combining first and last name.       |
| `address1`    | The street address of the contact.                                 |
| `city`        | The city of the contact.                                           |
| `state`       | The state of the contact.                                          |
| `country`     | The country of the contact (default is "US").                      |
| `postalCode`  | The postal code (ZIP code) of the contact.                         |
| `companyName` | The name of the company the contact is associated with.            |
| `tags`        | A list of tags associated with the contact, including `heropixel`. |
| `source`      | The source of the data (default is "capitalaudience").             |

Additionally, if you create a custom field in GoHighLevel, our system will look for those fields. If our sync system finds that one of your custom fields has a matching key, it will update the value for that contact.

If you have GoHighLevel set up to allow duplicates, then duplicates will be created. If you restrict duplicates based on email or phone, then our system will update records instead of creating new ones.

## Setup Guide

### Step 1: Set Up the GoHighLevel Destination in Hero Pixel

1. Click **Settings** and then click **Integrations**.
2. On the integrations page, select **+ New Integration** and then **GoHighLevel** from the dropdown.
3. Choose the authentication method:
   - **OAuth**: Click the OAuth button to log into GoHighLevel. The system will redirect you to GoHighLevel so you can log into your account and choose the space you'd like to connect.
   - **Personal Access Token**: Enter your API_KEY to authenticate.

### Step 2: Configure Sync Settings

1. After connecting to your GoHighLevel account, configure the sync settings to determine how data should be synced.
2. Choose the appropriate sync mode (Full Refresh, Incremental Append, or Incremental Dedup).
3. Create the custom fields in your GHL account that you want synced over

### Step 3: Start Syncing

1. Once the configuration is complete, you can start the syncing process.
2. Monitor the sync status and logs to ensure data is being synced correctly.

## Custom Data

![GHL Custom Field Creation](/img/heropixel/ghl-custom-field.png)

Our system supports the use of custom fields in GoHighLevel. If a custom field in your GoHighLevel account matches a key in the data being synced, the corresponding value will be updated for the contact.

## Troubleshooting

For further assistance, refer to the [GoHighLevel API Documentation](https://developers.gohighlevel.com) or contact GoHighLevel support. If you encounter issues specific to the Hero Pixel integration, please reach out to our support team for help.

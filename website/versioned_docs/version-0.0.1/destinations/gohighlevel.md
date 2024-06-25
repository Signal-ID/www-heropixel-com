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

### Output schema

Each synced record will correspond to a contact in GoHighLevel, with the data being written based on the provided authentication method and location.

### Requirements

To use the GoHighLevel destination connector, you need:

- A GoHighLevel account
- Authentication credentials

## Setup guide

### Step 1: Set up the GoHighLevel Destination in Hero Pixel

1. Click **Destinations** and then click **+ New destination**.
2. On the Set up the destination page, select **GoHighLevel** from the **Destination type** dropdown.
3. Click the oAuth button to log into GHL
4. The system will redirect you to GHL so you can log into your account and choose the space you'd like to connect.

## Troubleshooting

For further assistance, refer to the [GoHighLevel API Documentation](https://developers.gohighlevel.com) or contact GoHighLevel support.

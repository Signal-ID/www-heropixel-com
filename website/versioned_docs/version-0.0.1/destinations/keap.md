---
id: keap
title: InfusionSoft/Keap
description: A destination connector for InfusionSoft/Keap
---

# InfusionSoft/Keap

## Overview

The InfusionSoft/Keap destination connector allows you to sync data to InfusionSoft/Keap, a powerful CRM and marketing automation platform. This connector supports full refresh and incremental append sync modes, making it suitable for various data integration needs.

## Supported Sync Modes

The InfusionSoft/Keap destination connector supports the following sync modes:

| Feature                   | Supported? |
| :------------------------ | :--------- |
| Full Refresh Sync         | Yes        |
| Incremental - Append Sync | Yes        |
| Incremental - Deduped     | No         |
| Change Data Capture       | No         |

### Output schema

Each synced record will correspond to a contact in InfusionSoft/Keap, with the data being written based on the provided access token, tag ID, and contact type.

### Requirements

To use the InfusionSoft/Keap destination connector, you need:

- A InfusionSoft/Keap account
- Personal Access Token
- Tag ID
- Contact Type

## Setup guide

### Step 1: Obtain API Credentials

1. Log in to your InfusionSoft/Keap account.
2. Navigate to the "Settings" section under "API".
3. Generate a Personal Access Token. Copy this token for use in the connector setup.
4. Obtain the Tag ID and Contact Type for your data sync.

### Step 2: Set up the InfusionSoft/Keap Destination in Airbyte

1. Click **Destinations** and then click **+ New destination**.
2. On the Set up the destination page, select **InfusionSoft/Keap** from the **Destination type** dropdown.
3. Enter the following information:
   - **Personal Access Token**: Your InfusionSoft/Keap personal access token.
   - **Tag ID**: The Tag ID to write to.
   - **Contact Type**: The Contact Type to write to (e.g., Lead, Client, Prospect, Other).
4. Click **Set up** to complete the configuration.

## Troubleshooting

### Common Issues

- **Invalid Access Token**: Ensure that you have copied the access token correctly from your InfusionSoft/Keap account.
- **Tag ID not found**: Verify that the Tag ID is correct and exists in your InfusionSoft/Keap account.
- **Invalid Contact Type**: Ensure the contact type is valid and correctly specified.

For further assistance, refer to the [InfusionSoft/Keap API Documentation](https://developer.infusionsoft.com/docs/rest/) or contact InfusionSoft/Keap support.

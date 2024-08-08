---
id: intro-to-integrations
title: Overview of Destinations
description: desc
---

import SvgTable from '@site/src/components/IntegrationsList/SvgTable';

# What to know about Destinations

This page will help you understand how to work with our integrations system and get your first integration setup. Every destination has a unique set of connection requirements which will be covered in their specific docs. This document will cover the general process that you will need to follow for all destinations.

<a class="btn btn-primary" href="https://app.heropixel.com/settings/integrations" target="_blank">Open Your Integrations</a>

## Where to find the Destinations

1. Access your dashboard **[https://app.heropixel.com](https://app.heropixel.com)**
2. In the left menu, on your dashboard, you'll see a link to **[Settings](https://app.heropixel.com/settings)**
3. And then click the **[Integrations Tab](https://app.heropixel.com/settings/integrations)** (You can also click this link)
4. Choose the "+ New Integration" button to get started

## Choose your Destination

![Dropdown of Destinations](/img/heropixel/dropdown.png)

Once the integration configurations display we can begin by choosing our preferred destination. I've also provided you with a list of those destinations below, and a sidebar category called "Destinations" for your perusal.

You'll have your destination specific configurations that display, but under those there's two global settings, Stream Type and Sync Frequency.

### Update Type

All integrations are set to only send you new data. It's called an Incremental Append. If you choose to have your integration a Full Refresh or other type of sync that's listed in the individual documentation, reach out to support and we can make that adjustment for you.

### Stream Type

| **Type**                        | **Description**                                                                                                                                                                                               |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Sync All Unique Individuals** | Syncs all unique individual records from the chose pixel, ensuring that each person is represented once in the destination. This is ideal for a CRM.                                                          |
| **Sync All Unique Sessions**    | Syncs all unique sessions, ensuring that each session (typically a user's interaction within a time frame) is captured once in the destination. This is ideal for remarketing ads or abandoned cart sessions. |
| **Sync Every Pageview**         | Syncs every pageview event, capturing each time a page is viewed regardless of sessions or individual uniqueness. Ideal for segmenting your users based on the product pages they visit.                      |

### Sync Frequency

You'll have the option to choose how often the sync runs and passes you data. Every hour, 2, 3, 4, 6, 8, 10, 12, or 24 hours.

![Custom Cron Options](/img/heropixel/custom-cron.png)
We also have a custom cron. If you'd like something other than the quick options provided, scroll to the bottom and choose custom schedule.

A cron is a time-based job scheduler in Unix-like operating systems. It allows users to schedule scripts or commands to run automatically at specified intervals, such as daily, weekly, or even down to the minute.

Use this tool to generate a cron schedule that fits your needs. [Cron Schedule Tool](https://crontab.cronhub.io/)

**How Cron Works:**

- **Cron Jobs:** A cron job is a specific task or command scheduled to run at a particular time.
- **Cron Table (Crontab):** This is a configuration file where cron jobs are defined. Each line in the crontab file represents a job, and includes the schedule, the command to be executed, and optional output redirection.

**Cron Syntax:**
The schedule for a cron job is specified using five fields:

1. **Minute (0-59)**
2. **Hour (0-23)**
3. **Day of the month (1-31)**
4. **Month (1-12)**
5. **Day of the week (0-7)**, where both 0 and 7 represent Sunday.

For example, the following cron entry runs a script every day at 2:30 AM:

```
30 2 * * * /path/to/script.sh
```

Cron is powerful because it can automate repetitive tasks, ensuring they run consistently and on time without manual intervention.

## Available Destinations

A destination is a location that we can send the data to. The following table lists various connectors with their logos, titles, descriptions, and links to their configuration docs.

<SvgTable />

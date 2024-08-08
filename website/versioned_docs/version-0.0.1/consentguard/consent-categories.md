---
id: consent-categories
title: Consent Categories
description: How to categorize scripts with ConsentGuard and ensure compliance with GDPR and CCPA.
---

# Consent Categories

## Overview

ConsentGuard helps you manage cookie consent by categorizing scripts on your website. This ensures compliance with data protection regulations like GDPR and CCPA.

## Categorizing Scripts

Adding the `data-consent-category` attribute to your script tags helps ConsentGuard know how to handle them. If a script is not categorized, the system will nag you in the developer console until you address it. Essential scripts do not require any changes and should be marked as `essential`.

### Example

Here’s a simple example of an existing script tag and how to add the `data-consent-category` attribute:

#### Before Categorization

```html
<script src="path/to/analytics.js"></script>
```

#### After Categorization

```html
<script
  data-consent-category="performance"
  src="path/to/analytics.js"></script>
```

### Developer Console Alerts

If a script does not have a `data-consent-category` attribute, you will see an alert in the developer console. This ensures that every script is reviewed and categorized appropriately.

### Essential Scripts

Essential scripts do not need to be changed. GDPR and CCPA allow essential scripts required for the basic functionality of the website. Mark these as `essential`, and the nag will go away.

```html
<script
  data-consent-category="essential"
  src="path/to/essential.js"></script>
```

## Consent Categories

Here’s a table listing all consent categories, along with descriptions and their default consent requirements under GDPR and CCPA:

| Category    | Description                                                  | GDPR     | CCPA     |
| ----------- | ------------------------------------------------------------ | -------- | -------- |
| essential   | Essential for basic website functionality.                   | Implicit | Implicit |
| performance | Used for analytics and tracking site performance.            | Explicit | Implicit |
| functional  | Enable additional functionality like chat widgets or videos. | Explicit | Implicit |
| targeting   | Used for advertising and tracking user activity.             | Explicit | Implicit |
| social      | Enable social media sharing and interactions.                | Explicit | Implicit |

By following this guide and categorizing your scripts correctly, you can ensure that your website is compliant with data protection regulations and provides a better user experience.

## Summary

Properly categorizing your scripts with the `data-consent-category` attribute is crucial for compliance and transparency. Make sure to review and categorize all scripts to avoid any developer console alerts and ensure your website functions smoothly under ConsentGuard.

---
id: explicit-consent
title: Explicit Consent
description: Documentation on how to use the explicit consent tag with ConsentGuard.
---

## Explicit Consent Management

### Overview

Explicit consent requires users to actively agree to the collection and use of their data by providing clear consent. This is typically required for non-essential cookies, such as those used for tracking or targeting, especially under GDPR regulations.

### What is Explicit Consent?

Explicit consent means that users must actively opt-in to allow the collection and use of their data. This can be done by clicking an "Accept" button or checking a box. For scripts that collect data, explicit consent is crucial to ensure compliance with GDPR.

<div className="content-banner">
  Rest assured that much research has gone into the study of acceptance rates. ConsentGuard has been designed specifically to get the highest number of opt-ins possible.
  <img className="content-banner-img" src="/docs/assets/p_android-ios-devices.svg" alt=" " />
</div>

### How it Works

Adding the `script-explicit` tag to your scripts ensures they are only loaded if the user explicitly opts in to the relevant categories. These categories are not loaded unless the user consents to them. Selecting the "Accept All" option is an explicit opt-in and will cause these scripts to load.

### Example

Identify the script tags on your website that should be controlled by explicit consent and replace them with the `script-explicit` tag. Add the `data-consent-category` attribute to specify the category of the script.

```html
<!-- Original script tag -->
<script src="path/to/your/script.js"></script>

<!-- Updated script tag with explicit consent -->
<script-explicit
  data-consent-category="targeting"
  src="path/to/your/script.js"></script-explicit>
```

### Remember to Include the ConsentGuard JavaScript

Ensure you have included the ConsentGuard JavaScript snippet in your HTML:

```html
<script data-consent-category="essential">
  window.cookieConsentOptions = {
    privacyPolicyLink: 'https://yourwebsite.com/privacy-policy',
  };
</script>
<script
  data-consent-category="essential"
  src="https://app.heropixel.com/consentguard_cookie_banner/index.js"></script>
```

### Categories and Their Descriptions

| Category    | Description                                                  | Implicit for CCPA | Explicit for GDPR |
| ----------- | ------------------------------------------------------------ | ----------------- | ----------------- |
| essential   | Essential for basic website functionality.                   | Yes               | Yes               |
| performance | Used for analytics and tracking site performance.            | Yes               | No                |
| functional  | Enable additional functionality like chat widgets or videos. | Yes               | No                |
| targeting   | Used for advertising and tracking user activity.             | Yes               | No                |
| social      | Enable social media sharing and interactions.                | Yes               | No                |

### Important Notes

- **Essential Scripts:** Essential scripts should not be tagged with `script-explicit` as they are necessary for the website's basic functionality and should always be loaded.
- **User Preferences:** ConsentGuard will manage the loading of scripts based on the user’s preferences. If a user does not opt in to a category, the corresponding scripts with `script-explicit` tags will not be loaded.
- **Include consentguard.js:** Without the ConsentGuard.js, this tag will not load.

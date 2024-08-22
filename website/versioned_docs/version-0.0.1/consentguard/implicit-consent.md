---
id: implicit-consent
title: Implicit Consent
description: Documentation on how to use the implicit consent tag with ConsentGuard.
---

## Implicit Consent Management

### Overview

Implicit consent allows your scripts to load as normal unless the user explicitly opts out of certain categories. This is useful for compliance with regulations like CCPA, where users are considered to have given consent unless they take action to opt-out. This documentation explains how to use the `script-implicit` tag provided by ConsentGuard.

### What is Implicit Consent?

Implicit consent means that users are considered to have given consent by not taking any action to opt-out. For example, continuing to use the website might be seen as implicit consent. This approach is less commonly used in GDPR jurisdictions due to stricter data protection regulations, but it is compliant with CCPA as long as users are provided with a clear option to opt-out.

### How it Works

Adding the `script-implicit` tag to your scripts will cause their loading to be controlled by the ConsentGuard System. As long as this JavaScript snippet is included on your pages, the script tag will load as normal unless the user adjusts their allowed categories. Once the script preferences are made, and only if categories are blocked, ConsentGuard will step in and block the loading for implicit tags according to the user’s blocked categories.

Essential scripts cannot be disabled by users and therefore should not receive the special script tag as it may interfere with the functional loading of your essential scripts.

### Example

Identify the script tags on your website that should be controlled by implicit consent and replace them with the `script-implicit` tag. Add the `data-consent-category` attribute to specify the category of the script.

```html
<!-- Original script tag -->
<script src="path/to/your/script.js"></script>

<!-- Updated script tag with implicit consent -->
<script-implicit
  data-consent-category="performance"
  src="path/to/your/script.js"></script-implicit>
```

### Remember to Include the ConsentGuard JavaScript

Ensure you have included the ConsentGuard JavaScript snippet in your HTML or this script-implicit will not load.

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

- **Essential Scripts:** Essential scripts should not be tagged with `script-implicit` as this may interfere with the functional loading of your essential scripts. These scripts are always loaded regardless of user consent preferences.
- **User Preferences:** ConsentGuard will manage the loading of scripts based on the user’s preferences. If a user blocks a category, the corresponding scripts with `script-implicit` tags will not be loaded.
- **Include consentguard.js:** Without the ConsentGuard.js this tag will not load.

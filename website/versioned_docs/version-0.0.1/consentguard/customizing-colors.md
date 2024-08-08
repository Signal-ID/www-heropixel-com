---
id: customizing-colors
title: Customizing Colors
description: Documentation on how to customize the colors of the ConsentGuard banner.
---

## Customizing Colors in ConsentGuard

### Overview

ConsentGuard allows you to customize the colors of the cookie consent banner and preference manager to match your website's branding. This documentation explains how to configure the color options available in ConsentGuard.

### Configuration Options

You can customize the colors by setting the appropriate properties in the `window.cookieConsentOptions` object. Here are the available options:

- **accept_color**: Color for the "Accept All" button.
- **nuetral_color**: Color for the "Manage Preferences" button.
- **preference_color**: Color for active elements in the preference manager.
- **background_color**: Background color for the banner and preference manager.

### Setting the Configuration Options

Place your configuration options for the banner by defining the global `window.cookieConsentOptions` object. Make sure to place this script BEFORE the inclusion of the main cookie banner script.

### Example

Here is an example of how to configure the colors:

```html
<script data-consent-category="essential">
  window.cookieConsentOptions = window.cookieConsentOptions || {};
  window.cookieConsentOptions = {
    privacy_policy_link: 'https://yourwebsite.com/privacy-policy',
    accept_color: '#28A745', // Green color for the "Accept All" button
    nuetral_color: '#6c757d', // Grey color for the "Manage Preferences" button
    preference_color: '#3482F3', // Blue color for active elements in the preference manager
    background_color: '#f8f9fa', // Light grey background color for the banner and preference manager
  };
</script>
```

### Including the Cookie Banner Script

Add the following script to your HTML file, ensuring it's included in the `<head>` or at the end of the `<body>`, and after your configurations:

```html
<script
  data-consent-category="essential"
  src="https://app.heropixel.com/consentguard_cookie_banner/index.js"></script>
```

### Customization Details

#### Accept All Button Color

The `accept_color` property sets the color of the "Accept All" button. This button is prominently displayed on the banner and should be a color that stands out and matches your website's primary action color. This default color has been proven through study to receive the highest number of opt-ins.

#### Manage Preferences Button Color

The `nuetral_color` property sets the color of the "Manage Preferences" button. This button allows users to manage their cookie preferences and should be a color that is easily distinguishable from the "Accept All" button. We use a soft calming nuetral blue to reduce the number of people who choose to explicitly opt-out.

#### Active Elements Color

The `preference_color` property sets the color for active elements in the preference manager. This includes checkboxes, radio buttons, and other interactive elements within the Privacy Center.

#### Background Color

The `background_color` property sets the background color for both the banner and the preference manager. Choose a background color that ensures good contrast with the text and interactive elements to maintain readability.

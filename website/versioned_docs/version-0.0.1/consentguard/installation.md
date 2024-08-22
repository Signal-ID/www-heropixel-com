---
id: consentguard-installation
title: Installation Guide
description: How to install and configure ConsentGuard on your website.
---

# ConsentGuard Installation Guide

## Getting Started

This guide will help you get ConsentGuard up and running on your website. ConsentGuard provides a simple and effective way to manage cookie consent and ensure compliance with data protection regulations.

This is only the first step and does not mean that you are compliant. Once you've installed this tag on your website the ConsentGuard Cookie Banner will begin displaying and accepting user cookie preferences immediately. In the next step we will show you how to control how those scripts load.

### Option 1: Using CDN

To use ConsentGuard via CDN, simply include the following script in your HTML. Make sure to place it in the `<head>` above all other script tags.

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

### Option 2: Hosting Locally

If you prefer to host ConsentGuard locally, download the script from the [Github repository](https://github.com/Signal-ID/ConsentGuard) and include it in your project. Then, add the following script in your HTML. Make sure to place it in the `<head>` above all other script tags.

```html
<script data-consent-category="essential">
  window.cookieConsentOptions = {
    privacyPolicyLink: 'https://yourwebsite.com/privacy-policy',
  };
</script>
<script
  data-consent-category="essential"
  src="/path/to/your/consentguard.js"></script>
```

## Congratulations! But you're not done yet...

The next step is to actually control the way your scripts are loading:

- [Script Categories](/docs/consentguard/consent-categories)
- [Managing Implicit Consent](/docs/consentguard/implicit-consent)
- [Managing Explicit Consent](/docs/consentguard/explicit-consent)

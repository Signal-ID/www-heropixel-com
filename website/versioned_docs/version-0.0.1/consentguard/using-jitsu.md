---
id: using-jitsu
title: Recording User Preferences
description: Documentation on how to integrate and use Jitsu with ConsentGuard.
---

## Using Jitsu with ConsentGuard

### Overview

Jitsu is a powerful open-source data integration platform that can collect and store user preferences for ConsentGuard. This documentation will explain how to integrate Jitsu with ConsentGuard, the special Jitsu URL, and how to get a Jitsu Cloud account.

### Why Use Jitsu?

Tracking user preferences is essential for compliance and to demonstrate that you are honoring user choices. Jitsu allows you to store and analyze these preferences, ensuring transparency and accountability.

### Getting a Jitsu Cloud Account

To get started with Jitsu, you need a Jitsu Cloud account. You can sign up for a free account [here](https://jitsu.com/). A Jitsu Cloud account includes a free ClickHouse database, which can be used to store and query user preferences.

### Integration with ConsentGuard

ConsentGuard can send all user preferences to Jitsu for storage. This integration allows you to easily connect to any database, including the free ClickHouse DB provided by Jitsu Cloud.

### HeroPixelIntegration

HeroPixeloffers a complimentary Jitsu URL and write key that maps user preferences directly to your account. This data can be accessed through our extensive integrations, and we use opt-out data to control the HHeroPixel

### Configuration

To configure Jitsu with ConsentGuard, you need to include the Jitsu URL and write key in your configuration options. Here's how you can do it:

#### Step 1: Configure the Cookie Consent Options

Place your configuration options for the banner by defining the global `window.cookieConsentOptions` object. Place this script BEFORE the inclusion of the main cookie banner script:

```html
<script data-consent-category="essential">
  window.cookieConsentOptions = window.cookieConsentOptions || {};
  window.cookieConsentOptions = {
    writeKey: 'YOUR_JITSU_WRITE_KEY',
    jitsuUrl: 'https://your-jitsu-url.com',
    privacy_policy_link: 'https://yourwebsite.com/privacy-policy',
  };
</script>
```

### Benefits of Recording User Preferences

- **Compliance:** Demonstrate that you are honoring user preferences by tracking opt-ins and opt-outs.
- **Integration:** Easily connect to any database, including the free ClickHouse DB provided by Jitsu Cloud.
- **Analytics:** Analyze user preferences and behaviors to improve your website and services.
- **Control:** Use the opt-out data to control the HeroPixel ensuring that user preferences are respected.

### Additional Resources

For more information on setting up Jitsu and integrating it with your projects, refer to the [Jitsu Documentation](https://jitsu.com/docs/).

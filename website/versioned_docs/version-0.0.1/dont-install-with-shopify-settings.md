---
id: dont-install-with-shopify-settings
title: Shopify Settings Limitations
description: desc
---

Shopify refers to their environment for loading scripts through their platform as the "ScriptTag" API or "web pixels" within the "Checkout UI Extensions" framework.

# Why Our Pixel Snippet Cannot Be Installed Using Shopify's ScriptTag or Web Pixels

## The Official Result

No, our pixel snippet cannot be installed using Shopify's ScriptTag or web pixels due to Shopify’s sandbox environment for scripts. This sandboxing restricts scripts from accessing critical data needed for the pixel to function properly.

## Impact

Using Shopify's ScriptTag or web pixels to load our pixel snippet leads to several limitations:

1. **Domain Authorization**: Our pixel requires firing directly on the authorized domain. Loading it through Shopify’s ScriptTag or web pixels results in it being fired in a sandboxed environment, not the authorized domain.
2. **Access to Page Information**: The pixel cannot read essential page information such as the URL or metadata.
3. **Third-Party Cookies**: The pixel is unable to access third-party cookies, crucial for tracking and analytics.

These limitations prevent our pixel from functioning correctly when installed through Shopify's ScriptTag or web pixels.

## Shopify Documentation and Statements

Shopify’s sandbox environment imposes several restrictions on scripts that impact our pixel’s functionality:

1. **Sandboxed JavaScript**: Shopify’s sandboxed environment for web pixels ensures a secure execution by limiting access to the global window object and other features that could compromise security.

   - [Shopify Web Pixels](https://shopify.dev/docs/api/checkout-ui-extensions)

2. **Content Security Policies**: Shopify enforces strict content security policies that restrict the capabilities of JavaScript loaded through its settings, preventing it from accessing sensitive data on the page.

   - [Shopify Content Security Policy](https://shopify.dev/docs/api/admin-rest/2023-10/resources/scripttag)

3. **Data Layer and Event Subscription**: Shopify provides APIs for subscribing to customer events in a controlled manner, but direct interaction with the data layer is restricted.
   - [About Web Pixels](https://shopify.dev/docs/api/checkout-ui-extensions)

For a more detailed and up-to-date explanation, refer to Shopify’s official documentation on [Sandboxed JavaScript](https://shopify.dev/docs/api/checkout-ui-extensions).

## Alternative Method

To ensure our pixel functions correctly, it must be installed directly in the `<head>` section of your website. For detailed instructions on how to do this, please refer to our [installation guide](/docs/start-pixel-installation).

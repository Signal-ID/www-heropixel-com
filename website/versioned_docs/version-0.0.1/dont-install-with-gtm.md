---
id: dont-install-with-gtm
title: Google Tag Manager Limitations
description: desc
---

# Why Google Tag Manager Cannot Be Used to Install Our Pixel Snippet...

## The Official Result

No, our pixel snippet cannot be installed using Google Tag Manager (GTM) due to Google’s new sandbox environment for scripts. This sandboxing prevents the pixel from accessing crucial data required for its functionality.

## Impact

Using GTM to load our pixel snippet results in several limitations:

1. **Domain Authorization**: Our pixel can only be fired directly on the authorized domain. Firing the pixel inside GTM loads it in a Google sandboxed domain, which is not authorized.
2. **Access to Page Information**: The pixel cannot read the URL, metadata, or other essential page information.
3. **Third-Party Cookies**: The pixel cannot access third-party cookies, which are necessary for tracking and analytics.
4. **Critical Fingerprinting**: The sandbox's design is to prevent us from accessing certain browser functions that are necessary to create a unique fingerprint of the users machine.

These limitations make it impossible for our pixel to function correctly when triggered from GTM.

## Google Documentation and Statements

Google provides detailed information on sandboxed JavaScript in the context of Google Tag Manager (GTM). Here's a summary of their approach and guidelines regarding rendering scripts in a sandboxed environment:

1. **Sandboxed JavaScript**: Google Tag Manager uses sandboxed JavaScript to ensure a secure execution environment for custom templates. This sandboxing limits the scope of JavaScript, removing or restricting certain features to prevent malicious actions and enhance security.

   - [Google Tag Manager Sandboxed JavaScript](https://developers.google.com/tag-platform/tag-manager/templates/sandboxed-javascript)

2. **Execution Environment**: The sandboxed environment is based on ECMAScript 5.1, with certain modern features removed. This includes restrictions on accessing certain global objects and methods that could potentially compromise security.

   - [Google Tag Manager Web](https://developers.google.com/tag-platform/tag-manager/web)

3. **Permissions and Restrictions**: Custom templates in GTM require explicit permissions to perform certain actions. The template APIs define what actions are allowed, and these permissions are automatically detected and enforced during the template creation process.

   - [Google Tag Manager Templates](https://developers.google.com/tag-platform/tag-manager/templates/permissions)

4. **Data Layer and Variables**: In a sandboxed environment, accessing the global `window` object or directly interacting with the data layer can be restricted. Instead, GTM provides specific APIs to interact with the data layer in a controlled manner.
   - [Google Tag Manager Data Layer](https://developers.google.com/tag-platform/tag-manager/templates/data-layer)

For a more detailed and up-to-date explanation, refer to Google’s official documentation on [Sandboxed JavaScript](https://developers.google.com/tag-platform/tag-manager/templates/sandboxed-javascript).

## Alternative Method

To ensure our pixel functions correctly, it must be installed directly in the `<head>` section of your website. For detailed instructions on how to do this, please refer to our [installation guide](/docs/start-pixel-installation).

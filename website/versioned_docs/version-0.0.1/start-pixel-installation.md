---
id: start-pixel-installation
title: Pixel Installation
description: desc
---

# Guide to Install a Created Pixel

<div className="content-banner">
  If you feel daunted by this task, please contact our support team at [support@heropixel.com](mailto:support@heropixel.com). We'll quickly help you install and verify that your pixel is working.
  <img className="content-banner-img" src="/docs/assets/p_android-ios-devices.svg" alt=" " />
</div>

## Purpose

Our pixel snippet (aka. HeroPixelSite Tag) installs just like the Google Analytics Site Tag.

## FOLLOW THESE STEPS

> You should have already created your pixel in the [last section](/docs/start-create-a-pixel).

### Step 1: Copy and Paste into your website head

A. **Locating your snippet**

- You can find the following snippet of code already customized for your preferences when "editing" or "creating" your pixel in the dashboard.
- Copy the HeroPixelSite Tag from this page, or email it to your developer for assistance.

B. **Copy and Paste the snippet into your website head section**

- Paste the HeroPixelSite Tag into the `<head>` section of your HTML, before the closing `</head>` tag.
- It's best to have the snippet to the top of your website and not the bottom.

<br/>
    ```html
    <head>
        <!-- Analytics Tracker -->
        <script>
            (function() {var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
            g.async=true; g.src='https://app.heropixel.com'+'/pixel/script.js'; s.parentNode.insertBefore(g,s);})();
        </script>
        <script>
            window.analyticsLayer = window.analyticsLayer || [];
            window.analyticsLayer.push({
                event: 'pageview',
                websiteId: '0'
            });
        </script>
        <!-- End Analytics Tracker Code -->

    </head>
    ```

### Step 2: Verify Installation

- Save the changes to your HTML file and upload it to your web server if necessary.
- Click the "Verify Installation" black button in the lower left of this page. Our system will automatically load your root domain to determine if the pixel is installed.
- You should see a message indicating that data is being received if the installation was successful.

## Troubleshooting

- **Pixel Installation Cannot Be Verified Automatically?**
  - Load the page where your pixel is installed.
  - Right click and "view source" of this page.
  - Search for the pixel snippet and confirm that it looks exactly as you have copied it from your dashboard.
  - Close the page source
  - Right click on your webpage again, go to "Inspect" or "Inspect Element" depending on your browser.
  - A Developer Tools frame will load, typically at the bottom of your browser.
  - In the Developer Tools frame, review the "Network" tab (you may need to reload your website while leaving the developer tools frame open)
  - Search for "heropixel" and verify that you're receiving a `200` Success code from our servers.

## Support

- If you encounter any issues or need further assistance, contact our support team at [support@heropixel.com](mailto:support@heropixel.com).

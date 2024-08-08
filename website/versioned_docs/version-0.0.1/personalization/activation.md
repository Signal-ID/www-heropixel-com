---
id: activate-personalization
title: Activate Personalization
description: How to enable personalization on your landing pages
---

# Activating Personalization on Your Landing Pages

## Introduction

This guide will help you activate personalization on your pixel and show you how to display custom visitor information.

## Prerequisites

Ensure you have already placed the analytics tracking code on your website. Here’s the basic tracking code:

```html
<!-- Analytics Tracker -->
<script>
  (function () {
    var d = document,
      g = d.createElement('script'),
      s = d.getElementsByTagName('script')[0];
    g.async = true;
    g.src = '{!! $baseUrl !!}' + '{!! $scriptPath !!}';
    s.parentNode.insertBefore(g, s);
  })();
</script>
<script>
  window.analyticsLayer = window.analyticsLayer || [];
  window.analyticsLayer.push({
    event: 'pageview',
    websiteId: '$siteId',
  });
</script>
<!-- End Analytics Tracker Code -->
```

## Steps to Activate Personalization

To enable personalization, you only need to add one line to your existing tracking code.

### Step 1: Modify the Tracking Code

Add the `personalize: true` line to your `analyticsLayer` push command. Here’s the updated tracking code: `personalize: true`. Here's how you would activate personalization:

```html
<!-- Analytics Tracker -->
<script>
  (function () {
    var d = document,
      g = d.createElement('script'),
      s = d.getElementsByTagName('script')[0];
    g.async = true;
    g.src = '{!! $baseUrl !!}' + '{!! $scriptPath !!}';
    s.parentNode.insertBefore(g, s);
  })();
</script>
<script>
  window.analyticsLayer = window.analyticsLayer || [];
  window.analyticsLayer.push({
    event: 'pageview',
    websiteId: '$siteId',
    personalize: true,
  });
</script>
<!-- End Analytics Tracker Code -->
```

Now you won't see anything change on your website if you don't already have Dynamic Text in place.

### Step 2: Use Dynamic Text in Your Sales Copy

To begin personalization, you will use Dynamic Text placeholders in your sales copy. For example:

```html
<p>Welcome to our website! Your city is {{city}}.</p>
```

### Step 3: Add Fallback Values

If the visitor’s city is not available, you can specify a default value using the `default` helper:

```html
<p>
  Welcome to our website! Your city is {{default city "Orlando"}}.
</p>
```

In case we don't know the variable you're wanting to use we will fallback to Orlando in this case. This helps provide a consistent experience for visitors who we don't identify.

## How It Works

1. **Initial Setup**: The tracking code with `personalize: true` is added to your website. This enables the personalization feature.
2. **Waiting for Enrichment**: A listener is set up to wait for the visitor's information to be enriched. During this time, any dynamic text placeholders will fallback to the default values you have specified.
3. **Dynamic Text Update**: Within seconds of the visitor arriving on the page, the pixel will receive their information and update the dynamic text accordingly.

## Next Steps

Explore more about dynamic text and personalization features:

- [View all of the data you can use in your personalization](/docs/personalization/visitor-attributes)

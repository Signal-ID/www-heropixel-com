---
id: event-pageview
title: Pageview
description: desc
---

# Customizing and Installing the `pageview` Event for Your Pixel

## Purpose

The pageview event is required in order for the pixel to generate leads. This guide will help you customize and install the `pageview` event for your pixel. The `pageview` event tracks all information about the ind. You can also pass additional data to comply with HIPAA regulations and store custom information.

## Event Code

Here is the code snippet for the `pageview` event:

```html
<!-- Trigger the 'pageview' event -->
<script>
  window.analyticsLayer = window.analyticsLayer || [];
  window.analyticsLayer.push({
    event: 'pageview',
    websiteId: 'example_website_id',
    hipaa: false,
    custom_one: 'value_one',
    custom_two: 'value_two',
    custom_three: 'value_three',
    custom_four: 'value_four',
    custom_five: 'value_five',
    // ... other properties
  });
</script>
```

## Steps to Customize the Event

1. **Open Your Website's Code**

   - Access the HTML file where you want to add the `pageview` event.

2. **Customize the Event Properties**

   - Replace `example_website_id` with your actual website ID.

3. **Advanced Settings**

> Only deal with the advanced settings if you are confident in what you're doing. Otherwise you should ignore them.

- Set `hipaa` to `true` if you need to remove page URLs, titles, and descriptions to comply with HIPAA regulations. Otherwise, leave it as `false`.
- Replace `value_one`, `value_two`, `value_three`, `value_four`, and `value_five` with your actual custom data values.

## Installing the Event

1. **Locate the Right Place to Add the Event**

   - Identify where the `pageview` action should be tracked on your website (e.g., within the page header or after a specific action).

2. **Insert the Script**

   - Add the customized script to the HTML code at the appropriate location to ensure it is triggered on each page view.

   Example:

   ```html
   <head>
     <!-- Other head elements -->

     <!-- Trigger the 'pageview' event -->
     <script>
       window.analyticsLayer = window.analyticsLayer || [];
       window.analyticsLayer.push({
         event: 'pageview',
         websiteId: '12345',
         hipaa: true,
         custom_one: 'custom_value_1',
         custom_two: 'custom_value_2',
         custom_three: 'custom_value_3',
         custom_four: 'custom_value_4',
         custom_five: 'custom_value_5',
         // ... other properties
       });
     </script>
   </head>
   ```

## Troubleshooting

- **Event Not Firing?**

  - Ensure the script is placed correctly in the HTML and that it is being triggered on each page view.
  - Verify that there are no JavaScript errors in the console.

- **Incorrect Data in Event?**
  - Double-check the values and properties being pushed to the `analyticsLayer`.

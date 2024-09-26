---
id: form-customization
title: Customizing Your Optin Forms
description: Learn how to download, modify, and customize our optin forms to fit your needs.
---

# Customizing Your Optin Forms

## Download and Host Locally

Our optin forms offer full flexibility for customization. You can download the code from either `/forms/funding.js` or `/forms/optin.js` and host it locally on your own servers. Once downloaded, you can modify the script to better fit your specific requirements.

### Steps to Download and Customize

1. **Download the Form Script**:

   - To use our default optin form: Download `/forms/optin.js`.
   - To use the sales qualifying optin form: Download `/forms/funding.js`.

2. **Host Locally**:
   After downloading the script, you can host it locally on your own server. This gives you complete control over modifications and ensures the script aligns perfectly with your website's needs.

3. **Modify the Code**:
   You can modify and customize the form behavior as needed. Below is an overview of how the key functionalities work within the form.

## How the Forms Work

Our forms are powered by event listeners that handle user data asynchronously. Below is a breakdown of how we handle lead capture and enrichment:

### Event Listener for Data Capture

The core of the enrichment functionality is based on listening for events and processing responses asynchronously. Here's an example of how the event listener is implemented in the form:

```javascript
// Trigger the pageview event
window.analyticsLayer = window.analyticsLayer || [];
window.analyticsLayer.push(
  {
    onEvent: 'leadcaptureResponse',
    callback: data => {
      // handle the data
    },
  },
  {
    ...this.capturedData,
    event: 'leadcapture',
  },
);
```

The data provided to the event listener callback can be [found here](/docs/personalization/visitor-attributes).

### Explanation:

- **onEvent**: We set up an event listener using `onEvent`, which listens for the `'leadcaptureResponse'` event.
- **callback**: When the event is triggered, the returned response (the captured data) is passed to the callback listener. The callback then processes the data.
- **Asynchronous Process**: This is an asynchronous process, meaning that data is captured and sent without causing delays or blocking other operations on the page.

### Sending Data to the System

To send data collected from any optin form to our system, the event `'leadcapture'` is triggered. Here are the parameters that are accepted from the event:

#### Parameters:

- **url**: The URL where the form is hosted.
- **timestamp**: Time when the data was captured.
- **websiteId**: The unique identifier for the website.
- **first_name**: The lead's first name.
- **last_name**: The lead's last name.
- **email**: The lead's email address.
- **md5**: The hashed email value for further data enrichment.
- **hem**: A unique identifier tied to the enrichment process.
- **phone**: The lead's phone number.
- **tcpa**: TCPA compliance flag.
- **prefiConsentDate**: The date when the lead provided consent.
- **custom_one**: Custom field one for additional data.
- **custom_two**: Custom field two.
- **custom_three**: Custom field three.
- **custom_four**: Custom field four.
- **custom_five**: Custom field five.

### Customizing Event Behavior

You can modify the behavior of the form by editing how events are triggered and handled. By adjusting the callback function and the data sent to the system, you can tailor the form to meet your specific data collection and lead enrichment needs.

```javascript
window.analyticsLayer.push({
  onEvent: 'yourCustomEvent',
  callback: customData => {
    // Customize your callback behavior here
  },
  ...additionalData,
});
```

## Conclusion

By downloading and hosting our form scripts locally, you have full flexibility to modify and customize them to fit your unique use cases. Whether you're capturing leads for high-ticket products or enriching optin data with personalized offers, our forms provide a solid foundation for optimized lead capture and qualification.

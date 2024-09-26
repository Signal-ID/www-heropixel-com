---
id: optin-forms
title: Intelligent Optin Forms
description: How our optin forms increase conversion rates through data enrichment.
---

# Intelligent Optin Forms

## Maximizing Conversions with Prefilled, Enriched Optin Forms

Our standard optin forms, similar to Clearbit forms, are designed to prefill enriched data for users, increasing optin rates and simplifying the user experience. This approach allows you to gather more information while lowering the barriers for users, as they do not need to complete the entire form for us to collect additional data and enrich the lead profile.

### Key Benefits:

- **Increased Conversion Rates**: Case studies have shown a significant increase in conversion rates when forms are prefilled with enriched data. Users are more likely to opt-in when the effort required is minimized.
- **Personalized User Experience**: By pre-enriching the form fields, users are presented with a personalized experience, making them more inclined to engage with your brand.
- **No Completion Required**: Even if a user doesn't complete the form, our system can still collect and enrich the necessary data, ensuring you never miss out on valuable leads.

### How to Install

Installing our optin form is a simple process that requires minimal setup. Once implemented on your page, it will automatically begin collecting enriched optins, providing you with more detailed lead profiles right from the start. Get started today and see how easy it is to boost your conversion rates with personalized, enriched optin forms.

To install our intelligent optin form on your website, follow these simple steps:

1. **Include the following script in the header of your page**:

   ```html
   <script>
     (function () {
       var d = document,
         g = d.createElement('script'),
         s = d.getElementsByTagName('script')[0];
       g.async = true;
       g.src = 'https://app.heropixel.com/' + 'pixel/script.js';
       s.parentNode.insertBefore(g, s);
     })();
   </script>
   ```

2. **Place this custom element anywhere you want the optin form to display**:

   ```html
   <opt-in-form
     headline="You Qualify for Access to a Free LIVE Training! Submit your mobile # to get access to it..."
     tcpa-text="I consent to receive SMS alerts and marketing. Msg freq varies. Msg & data rates may apply. Reply STOP to opt-out. By providing your number, you agree to our Privacy Policy."
     website-id="{{ your pixel id }}">
   </opt-in-form>
   <script src="https://app.heropixel.com/forms/optin.js"></script>
   ```

Customize the headline and tcpa notice to your business, or exclude the headline to manage it outside of the optin form.

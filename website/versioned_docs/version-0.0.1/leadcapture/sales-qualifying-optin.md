---
id: sales-qualifying-optin
title: Sales Qualifying Optin Form
description: How our Sales Qualifying Optin Form boosts conversions and optimizes lead prioritization.
---

# Sales Qualifying Optin Form

## Revolutionizing Lead Qualification with Financial Insights

Our **Sales Qualifying Optin Form** is a game changer in the industry. Utilizing cutting-edge technology, it performs a full credit analysis on visitors and pre-approves them for the loan products your financing team offers. Whether you're selling high-ticket coaching, consulting courses, or offering AfterPay for an eCommerce product, this system will determine if the visitor has the financial capability or access to the money needed to afford your products.

### Key Benefits:

- **Prioritized Lead Followup**: Send sales-qualified leads (SQLs) directly to your sales team, ensuring they focus on high-value prospects.
- **Reduce Wasted Effort**: Eliminate time wasted on chasing leads who cannot afford your services, streamlining your sales process.
- **Higher Conversion Rates**: By targeting only pre-qualified leads, you'll increase your overall sales conversion rates.

### Installation Instructions:

1. **Include this script in the header of your website**:

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
   <script src="https://app.heropixel.com/forms/funding.js"></script>
   ```

2. **Place this custom element anywhere on your site (usually below or beside your Video Sales Letter)**:

   ```html
   <opt-in-form
     headline-sqls="{{FIRST_NAME}} You're Approved for {{AMOUNT}} in Business Funding! Submit your mobile # to get access to it.."
     headline-nqls="{{FIRST_NAME}} You Qualify for Access to our Private Skool Community! Submit your mobile # to get access to it..."
     headline-unknowns="You Qualify for Access to a Free LIVE Training with The Man himself! Submit your mobile # to get access to it..."
     tcp-text="I consent to receive SMS alerts and marketing. Msg freq varies. Msg & data rates may apply. Reply STOP to opt-out. By providing your number, you agree to our Privacy Policy."
     website-id="18">
   </opt-in-form>
   ```

### Customization and Features:

- **Dynamic Messaging**: Customize the verbiage for each visitor based on their qualification status.
  - **Sales Qualified Leads (SQLs)**: Display offers directly tied to approved business funding amounts.
  - **Non-Qualified Leads (NQLs)**: Redirect them to community offers or alternative products.
  - **Unknown Status**: Offer live training or other engaging entry points.

Once implemented, the form dynamically adapts based on the financial status of the lead, ensuring that the right offer is presented to the right person.

### Setup Requirements:

To utilize this form, you will need to work with our team to enable the **advanced funding data** and prepare the underwriting process for your SQLs. Contact us to activate these features and begin converting more qualified leads today.

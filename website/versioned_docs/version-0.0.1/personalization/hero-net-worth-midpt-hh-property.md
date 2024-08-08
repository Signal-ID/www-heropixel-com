---
id: net-worth-midpt-hh-property
title: Net Worth Midpoints HH Property
description: Guide to using the household net worth midpoints property
---

# Net Worth Midpoints HH Property

## Introduction

The `Net_Worth_Midpt_HH` property allows you to tailor your content based on the midpoint of the household net worth range of your visitors. This guide provides an overview of how to use the `Net_Worth_Midpt_HH` property to create personalized experiences and includes a list of potential net worth midpoint values.

## Usage

The `Net_Worth_Midpt_HH` property can be used to display content that resonates with the visitor's household net worth midpoints, making your communication more relevant and effective.

### Example

**Usage:**

```html
{{#if (eq Net_Worth_Midpt_HH 1)}}
<p>
  Our financial planning resources can help you start building
  your wealth from scratch.
</p>
<img src="/images/build_wealth.jpg" alt="Build Wealth" />
{{else if (eq Net_Worth_Midpt_HH 75000)}}
<p>
  Discover investment opportunities tailored for your net worth
  range of $75,000.
</p>
<img
  src="/images/investment_opportunities.jpg"
  alt="Investment Opportunities" />
{{else if (eq Net_Worth_Midpt_HH 750000)}}
<p>
  Take advantage of our exclusive wealth management services
  designed for high net worth households.
</p>
<img
  src="/images/wealth_management.jpg"
  alt="Wealth Management" />
{{else}}
<p>
  Welcome! Explore our range of services tailored to various net
  worth levels.
</p>
<img src="/images/general_services.jpg" alt="General Services" />
{{/if}}
```

In this example, various personalized messages and offers are displayed based on the visitor's household net worth midpoints, providing fresh ideas to enhance user engagement and conversions.

## Potential Values

The following table lists the potential values for the `Net_Worth_Midpt_HH` property:

| Value    | Description                              |
| -------- | ---------------------------------------- |
| `1`      | Household net worth midpoint of $1       |
| `2500`   | Household net worth midpoint of $2,500   |
| `7500`   | Household net worth midpoint of $7,500   |
| `17500`  | Household net worth midpoint of $17,500  |
| `37500`  | Household net worth midpoint of $37,500  |
| `75000`  | Household net worth midpoint of $75,000  |
| `175000` | Household net worth midpoint of $175,000 |
| `375000` | Household net worth midpoint of $375,000 |
| `750000` | Household net worth midpoint of $750,000 |

## Conclusion

Using the `Net_Worth_Midpt_HH` property allows you to personalize your landing pages based on the visitor's household net worth midpoints. By leveraging this property, you can deliver content that resonates with different net worth levels, enhancing user engagement and effectiveness.

## Next Steps

Explore more features:

- [String and Number Functions](/docs/personalization/hero-string-number-functions)
- [Conditional Helpers](/docs/personalization/hero-conditional-helpers)
- [Advanced Templating Techniques](/docs/personalization/hero-advanced-techniques)

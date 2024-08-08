---
id: income-midpts-hh-property
title: Income Midpoints HH Property
description: Guide to using the household income midpoints property
---

# Income Midpoints HH Property

## Introduction

The `income_midpts_hh` property allows you to tailor your content based on the midpoint of the household income range of your visitors. This guide provides an overview of how to use the `income_midpts_hh` property to create personalized experiences and includes a list of potential income midpoint values.

## Usage

The `income_midpts_hh` property can be used to display content that resonates with the visitor's household income midpoints, making your communication more relevant and effective.

### Example

**Usage:**

```html
{{#if (eq income_midpts_hh 10000)}}
<p>
  Our budget-friendly options are perfect for households with an
  income of around $10,000.
</p>
<div class="special-offer">
  Special Offer: Save big on essential products!
</div>
{{else if (eq income_midpts_hh 125000)}}
<p>
  Enjoy our premium services designed for households with a
  midpoint income of $125,000.
</p>
<div class="exclusive-deals">
  Exclusive Deals: Access luxury items at discounted rates.
</div>
{{else if (eq income_midpts_hh 300000)}}
<p>
  Explore our high-end products and services for households with
  an income of $300,000.
</p>
<div class="luxury-offers">
  Luxury Offers: Experience the finest quality with special
  privileges.
</div>
{{else}}
<p>
  Welcome! Discover our range of services and products suitable
  for various income levels.
</p>
<div class="general-offers">
  Explore: Find the best deals tailored for you.
</div>
{{/if}}
```

In this example, various personalized messages and offers are displayed based on the visitor's household income midpoints, providing fresh ideas to enhance user engagement and conversions.

## Potential Values

The following table lists the potential values for the `income_midpts_hh` property:

| Value    | Description                           |
| -------- | ------------------------------------- |
| `10000`  | Household income midpoint of $10,000  |
| `15000`  | Household income midpoint of $15,000  |
| `25000`  | Household income midpoint of $25,000  |
| `35000`  | Household income midpoint of $35,000  |
| `45000`  | Household income midpoint of $45,000  |
| `55000`  | Household income midpoint of $55,000  |
| `67500`  | Household income midpoint of $67,500  |
| `87500`  | Household income midpoint of $87,500  |
| `125000` | Household income midpoint of $125,000 |
| `162500` | Household income midpoint of $162,500 |
| `187500` | Household income midpoint of $187,500 |
| `225000` | Household income midpoint of $225,000 |
| `300000` | Household income midpoint of $300,000 |

## Conclusion

Using the `income_midpts_hh` property allows you to personalize your landing pages based on the visitor's household income midpoints. By leveraging this property, you can deliver content that resonates with different income levels, enhancing user engagement and effectiveness.

## Next Steps

Explore more features:

- [String and Number Functions](/docs/personalization/hero-string-number-functions)
- [Conditional Helpers](/docs/personalization/hero-conditional-helpers)
- [Advanced Templating Techniques](/docs/personalization/hero-advanced-techniques)

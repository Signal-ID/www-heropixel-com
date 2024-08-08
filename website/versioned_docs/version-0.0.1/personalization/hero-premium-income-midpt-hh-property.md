---
id: premium-income-midpt-hh-property
title: Premium Income Midpoint HH Property
description: Guide to using the premium income midpoint HH property
---

# Premium Income Midpoint HH Property

## Introduction

The `Premium_Income_Midpt_HH` property allows you to tailor your content based on the midpoint of the premium household income of your visitors. This guide provides an overview of how to use the `Premium_Income_Midpt_HH` property to create personalized experiences and includes a list of potential income midpoint values.

## Usage

The `Premium_Income_Midpt_HH` property can be used to display content that resonates with the visitor's premium household income midpoint, making your communication more relevant and effective.

### Example

**Usage:**

```html
{{#if (eq Premium_Income_Midpt_HH 75000)}}
<p>Discover our premium products that match your income level.</p>
<img src="/images/premium_products.jpg" alt="Premium Products" />
{{else if (eq Premium_Income_Midpt_HH 3000000)}}
<p>
  Welcome to our ultra-luxury collection, tailored for the elite.
</p>
<img
  src="/images/ultra_luxury_collection.jpg"
  alt="Ultra Luxury Collection" />
{{else}}
<p>Explore our diverse range of products and services.</p>
<img src="/images/general_offers.jpg" alt="General Offers" />
{{/if}}
```

In this example, various personalized messages and offers are displayed based on the visitor's premium household income midpoint, providing fresh ideas to enhance user engagement and conversions.

## Potential Values

The following table lists the potential values for the `Premium_Income_Midpt_HH` property:

| Value     | Description                          |
| --------- | ------------------------------------ |
| `7500`    | Midpoint of premium household income |
| `17500`   | Midpoint of premium household income |
| `25000`   | Midpoint of premium household income |
| `35000`   | Midpoint of premium household income |
| `45000`   | Midpoint of premium household income |
| `55000`   | Midpoint of premium household income |
| `65000`   | Midpoint of premium household income |
| `75000`   | Midpoint of premium household income |
| `85000`   | Midpoint of premium household income |
| `95000`   | Midpoint of premium household income |
| `105000`  | Midpoint of premium household income |
| `115000`  | Midpoint of premium household income |
| `125000`  | Midpoint of premium household income |
| `135000`  | Midpoint of premium household income |
| `145000`  | Midpoint of premium household income |
| `167500`  | Midpoint of premium household income |
| `187500`  | Midpoint of premium household income |
| `212500`  | Midpoint of premium household income |
| `237500`  | Midpoint of premium household income |
| `267500`  | Midpoint of premium household income |
| `287500`  | Midpoint of premium household income |
| `350000`  | Midpoint of premium household income |
| `450000`  | Midpoint of premium household income |
| `550000`  | Midpoint of premium household income |
| `675000`  | Midpoint of premium household income |
| `875000`  | Midpoint of premium household income |
| `1500000` | Midpoint of premium household income |
| `3000000` | Midpoint of premium household income |

## Conclusion

Using the `Premium_Income_Midpt_HH` property allows you to personalize your landing pages based on the midpoint of the visitor's premium household income. By leveraging this property, you can deliver content that resonates with different income levels, enhancing user engagement and effectiveness.

## Next Steps

Explore more features:

- [String and Number Functions](/docs/personalization/hero-string-number-functions)
- [Conditional Helpers](/docs/personalization/hero-conditional-helpers)
- [Advanced Templating Techniques](/docs/personalization/hero-advanced-techniques)

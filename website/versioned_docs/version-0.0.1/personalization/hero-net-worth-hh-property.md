---
id: net-worth-hh-property
title: Net Worth HH Property
description: Guide to using the household net worth property
---

# Net Worth HH Property

## Introduction

The `Net_Worth_HH` property allows you to tailor your content based on the household net worth of your visitors. This guide provides an overview of how to use the `Net_Worth_HH` property to create personalized experiences and includes a list of potential net worth values.

## Usage

The `Net_Worth_HH` property can be used to display content that resonates with the visitor's household net worth, making your communication more relevant and effective.

### Example

**Usage:**

```html
{{#if (eq Net_Worth_HH "B. Less than $1")}}
<p>
  Our financial planning resources can help you start building
  your wealth today.
</p>
<img src="/images/build_wealth.jpg" alt="Build Wealth" />
{{else if (eq Net_Worth_HH "F. $25,000 - $49,999")}}
<p>
  Discover investment opportunities tailored for your net worth
  range.
</p>
<img
  src="/images/investment_opportunities.jpg"
  alt="Investment Opportunities" />
{{else if (eq Net_Worth_HH "J. Greater than $499,999")}}
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

In this example, various personalized messages and offers are displayed based on the visitor's household net worth, providing fresh ideas to enhance user engagement and conversions.

## Potential Values

The following table lists the potential values for the `Net_Worth_HH` property:

| Value                      | Description                                     |
| -------------------------- | ----------------------------------------------- |
| `B. Less than $1`          | Household net worth less than $1                |
| `C. $1 - $4,999`           | Household net worth between $1 - $4,999         |
| `D. $5,000 - $9,999`       | Household net worth between $5,000 - $9,999     |
| `E. $10,000 - $24,999`     | Household net worth between $10,000 - $24,999   |
| `F. $25,000 - $49,999`     | Household net worth between $25,000 - $49,999   |
| `G. $50,000 - $99,999`     | Household net worth between $50,000 - $99,999   |
| `H. $100,000 - $249,999`   | Household net worth between $100,000 - $249,999 |
| `I. $250,000 - $499,999`   | Household net worth between $250,000 - $499,999 |
| `J. Greater than $499,999` | Household net worth greater than $499,999       |

## Conclusion

Using the `Net_Worth_HH` property allows you to personalize your landing pages based on the visitor's household net worth. By leveraging this property, you can deliver content that resonates with different net worth levels, enhancing user engagement and effectiveness.

## Next Steps

Explore more features:

- [String and Number Functions](/docs/personalization/hero-string-number-functions)
- [Conditional Helpers](/docs/personalization/hero-conditional-helpers)
- [Advanced Templating Techniques](/docs/personalization/hero-advanced-techniques)

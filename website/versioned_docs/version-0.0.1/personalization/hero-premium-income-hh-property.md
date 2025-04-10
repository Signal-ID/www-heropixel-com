---
id: premium-income-hh-property
title: Premium Income HH Property
description: Guide to using the premium income HH property
---

# Premium Income HH Property

## Introduction

The `Premium_Income_HH` property allows you to tailor your content based on the premium household income of your visitors. This guide provides an overview of how to use the `Premium_Income_HH` property to create personalized experiences and includes a list of potential income values.

## Usage

The `Premium_Income_HH` property can be used to display content that resonates with the visitor's premium household income, making your communication more relevant and effective.

### Example

**Usage:**

```html
{{#if (eq Premium_Income_HH "AB. <$15K")}}
<p>Discover our affordable products that suit your budget.</p>
<img
  src="/images/affordable_products.jpg"
  alt="Affordable Products" />
{{else if (eq Premium_Income_HH "H. $90K-$100K")}}
<p>
  Explore our premium range designed for higher income households.
</p>
<img src="/images/premium_range.jpg" alt="Premium Range" />
{{else if (eq Premium_Income_HH "Z. $2000K+")}}
<p>Welcome to our exclusive luxury collection.</p>
<img
  src="/images/luxury_collection.jpg"
  alt="Luxury Collection" />
{{else}}
<p>
  Welcome! Check out our diverse range of products and services.
</p>
<img src="/images/general_offers.jpg" alt="General Offers" />
{{/if}}
```

In this example, various personalized messages and offers are displayed based on the visitor's premium household income, providing fresh ideas to enhance user engagement and conversions.

## Potential Values

The following table lists the potential values for the `Premium_Income_HH` property:

| Value              | Description                                        |
| ------------------ | -------------------------------------------------- |
| `AB. <$15K`        | Household income less than $15,000                 |
| `AC. $15K-$20K`    | Household income between $15,000 and $20,000       |
| `AD. $20K-$30K`    | Household income between $20,000 and $30,000       |
| `B. $30K-$40K`     | Household income between $30,000 and $40,000       |
| `C. $40K-$50K`     | Household income between $40,000 and $50,000       |
| `D. $50K-$60K`     | Household income between $50,000 and $60,000       |
| `E. $60K-$70K`     | Household income between $60,000 and $70,000       |
| `F. $70K-$80K`     | Household income between $70,000 and $80,000       |
| `G. $80K-$90K`     | Household income between $80,000 and $90,000       |
| `H. $90K-$100K`    | Household income between $90,000 and $100,000      |
| `I. $100K-$110K`   | Household income between $100,000 and $110,000     |
| `J. $110K-$120K`   | Household income between $110,000 and $120,000     |
| `K. $120K-$130K`   | Household income between $120,000 and $130,000     |
| `L. $130K-$140K`   | Household income between $130,000 and $140,000     |
| `M. $140K-$150K`   | Household income between $140,000 and $150,000     |
| `N. $150K-$175K`   | Household income between $150,000 and $175,000     |
| `O. $175K-$200K`   | Household income between $175,000 and $200,000     |
| `P. $200K-$225K`   | Household income between $200,000 and $225,000     |
| `Q. $225K-$250K`   | Household income between $225,000 and $250,000     |
| `R. $250K-$275K`   | Household income between $250,000 and $275,000     |
| `S. $275K-$300K`   | Household income between $275,000 and $300,000     |
| `T. $300K-$400K`   | Household income between $300,000 and $400,000     |
| `U. $400K-$500K`   | Household income between $400,000 and $500,000     |
| `V. $500K-$600K`   | Household income between $500,000 and $600,000     |
| `W. $600K-$750K`   | Household income between $600,000 and $750,000     |
| `X. $750K-$1000K`  | Household income between $750,000 and $1,000,000   |
| `Y. $1000K-$2000K` | Household income between $1,000,000 and $2,000,000 |
| `Z. $2000K+`       | Household income greater than $2,000,000           |

## Conclusion

Using the `Premium_Income_HH` property allows you to personalize your landing pages based on the visitor's premium household income. By leveraging this property, you can deliver content that resonates with different income levels, enhancing user engagement and effectiveness.

## Next Steps

Explore more features:

- [String and Number Functions](/docs/personalization/hero-string-number-functions)
- [Conditional Helpers](/docs/personalization/hero-conditional-helpers)
- [Advanced Templating Techniques](/docs/personalization/hero-advanced-techniques)

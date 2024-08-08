---
id: income-hh-property
title: Income HH Property
description: Guide to using the household income property
---

# Income HH Property

## Introduction

The `income_hh` property allows you to tailor your content based on the household income range of your visitors. This guide provides an overview of how to use the `income_hh` property to create personalized experiences and includes a list of potential household income values.

## Usage

The `income_hh` property can be used to display content that resonates with the visitor's household income range, making your communication more relevant and effective.

### Example

**Usage:**

```html
{{#if (eq income_hh "A. Under $10,000")}}
<p>
  Explore our budget-friendly options and financial assistance
  programs designed for you.
</p>
<img src="/images/budget_friendly.jpg" alt="Budget Friendly" />
{{else if (eq income_hh "K. $100,000-$149,999")}}
<p>
  Discover our premium products and services tailored for higher
  income households.
</p>
<img src="/images/premium_services.jpg" alt="Premium Services" />
{{else if (eq income_hh "O. $250K +")}}
<p>
  Take advantage of our exclusive offers and luxury experiences
  available for you.
</p>
<img src="/images/exclusive_offers.jpg" alt="Exclusive Offers" />
{{else}}
<p>
  Welcome! Discover our range of services and products tailored to
  various income levels.
</p>
<img src="/images/general_services.jpg" alt="General Services" />
{{/if}}
```

In this example, a message and image relevant to the visitor's household income range are displayed, helping to create a more personalized and engaging experience.

## Potential Values

The following table lists the potential values for the `income_hh` property:

| Value                  | Description                                |
| ---------------------- | ------------------------------------------ |
| `A. Under $10,000`     | Household income under $10,000             |
| `B. $10,000-$19,999`   | Household income between $10,000-$19,999   |
| `C. $20,000-$29,999`   | Household income between $20,000-$29,999   |
| `D. $30,000-$39,999`   | Household income between $30,000-$39,999   |
| `E. $40,000-$49,999`   | Household income between $40,000-$49,999   |
| `F. $50,000-$59,999`   | Household income between $50,000-$59,999   |
| `G. $60,000-$74,999`   | Household income between $60,000-$74,999   |
| `H. $75,000-$99,999`   | Household income between $75,000-$99,999   |
| `K. $100,000-$149,999` | Household income between $100,000-$149,999 |
| `L. $150,000-$174,999` | Household income between $150,000-$174,999 |
| `M. $175,000-$199,999` | Household income between $175,000-$199,999 |
| `N. $200,000-$249,999` | Household income between $200,000-$249,999 |
| `O. $250K +`           | Household income of $250,000 and above     |

## Conclusion

Using the `income_hh` property allows you to personalize your landing pages based on the visitor's household income range. By leveraging this property, you can deliver content that resonates with different income levels, enhancing user engagement and effectiveness.

## Next Steps

Explore more features:

- [String and Number Functions](/docs/personalization/hero-string-number-functions)
- [Conditional Helpers](/docs/personalization/hero-conditional-helpers)
- [Advanced Templating Techniques](/docs/personalization/hero-advanced-techniques)

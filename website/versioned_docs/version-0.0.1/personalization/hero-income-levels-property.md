---
id: income-levels-property
title: Income Levels Property
description: Guide to using the income levels property
---

# Income Levels Property

## Introduction

The `income_levels` property allows you to tailor your content based on the visitor's household income levels. This guide provides an overview of how to use the `income_levels` property to create personalized experiences and includes a list of potential income level values.

## Usage

The `income_levels` property can be used to display content that resonates with the visitor's income levels, making your communication more relevant and effective.

### Example

**Usage:**

```html
{{#if (eq income_levels "100K_150")}}
<p>
  Enjoy our premium content and services tailored for high-income
  households.
</p>
<div class="exclusive-offer">
  Exclusive offer: Get 20% off on our luxury product range!
</div>
{{else if (eq income_levels "30K_50K")}}
<p>
  Discover our affordable solutions designed to meet your budget.
</p>
<div class="budget-friendly">
  Special savings: Check out our latest discounts and deals.
</div>
{{else if (eq income_levels "50K_74K")}}
<p>
  Explore our mid-range services that provide the best value for
  your money.
</p>
<div class="value-deals">
  Limited-time offer: Save 15% on our top-rated services.
</div>
{{else if (eq income_levels "75K_99K")}}
<p>
  Access our high-quality services that cater to your lifestyle
  needs.
</p>
<div class="high-quality">
  Featured service: Complimentary consultation with our experts.
</div>
{{else if (eq income_levels "GT_150K")}}
<p>
  Welcome to our elite club! Benefit from our bespoke services and
  products.
</p>
<div class="elite-benefits">
  VIP treatment: Personalized services and exclusive benefits just
  for you.
</div>
{{else if (eq income_levels "LT_30K")}}
<p>
  Our cost-effective solutions are designed to help you make the
  most of your income.
</p>
<div class="cost-effective">
  Budget tips: Learn how to save more with our expert advice.
</div>
{{else}}
<p>
  Welcome! Discover our diverse range of products and services
  tailored to various income levels.
</p>
<div class="general-offers">
  Check out our latest offerings and find what suits you best.
</div>
{{/if}}
```

In this example, various personalized messages and offers are displayed based on the visitor's household income levels, providing fresh ideas to enhance user engagement and conversions.

## Potential Values

The following table lists the potential values for the `income_levels` property:

| Value      | Description                                |
| ---------- | ------------------------------------------ |
| `100K_150` | Household income between $100,000-$150,000 |
| `30K_50K`  | Household income between $30,000-$50,000   |
| `50K_74K`  | Household income between $50,000-$74,999   |
| `75K_99K`  | Household income between $75,000-$99,999   |
| `GT_150K`  | Household income greater than $150,000     |
| `LT_30K`   | Household income less than $30,000         |

## Conclusion

Using the `income_levels` property allows you to personalize your landing pages based on the visitor's income levels. By leveraging this property, you can deliver content that resonates with different income brackets, enhancing user engagement and effectiveness.

## Next Steps

Explore more features:

- [String and Number Functions](/docs/personalization/hero-string-number-functions)
- [Conditional Helpers](/docs/personalization/hero-conditional-helpers)
- [Advanced Templating Techniques](/docs/personalization/hero-advanced-techniques)

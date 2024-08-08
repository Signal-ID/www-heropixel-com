---
id: credit-midpts-property
title: Credit Midpoints Property
description: Guide to using the credit midpoints property
---

# Credit Midpoints Property

## Introduction

The `credit_midpts` property allows you to tailor your content based on the midpoint of the visitor's credit score range. This guide provides an overview of how to use the `credit_midpts` property to create personalized experiences and includes a list of potential credit midpoint values.

## Legal Disclaimer

Federal law prohibits the use of this data to determine an individual's creditworthiness. The `credit_midpts` property provides an approximate midpoint of a visitor's credit score range and is not an exact score. It should be used only for personalization purposes to enhance user engagement and not for any credit-related decisions.

## What is Credit Midpoints?

In the context of Acxiom data, the `credit_midpts` property represents the midpoint of the visitor's credit score range. This helps you understand the visitor's creditworthiness and tailor your content accordingly.

## Usage

The `credit_midpts` property can be used to display content that resonates with the visitor's credit score midpoint, making your communication more relevant and effective.

### Example

**Usage:**

```html
{{#if (eq credit_midpts 800)}}
<p>
  Congratulations! You qualify for our best interest rates and
  premium offers.
</p>
<img src="/images/premium_offers.jpg" alt="Premium Offers" />
{{else if (eq credit_midpts 675)}}
<p>
  Explore our competitive offers designed for your credit range.
</p>
<img
  src="/images/competitive_offers.jpg"
  alt="Competitive Offers" />
{{else if (eq credit_midpts 450)}}
<p>
  We have special programs to help you improve your credit score.
  Learn more!
</p>
<img src="/images/improve_credit.jpg" alt="Improve Credit" />
{{else}}
<p>
  Check out our various offers tailored to different credit
  ranges.
</p>
<img src="/images/general_offers.jpg" alt="General Offers" />
{{/if}}
```

In this example, a message and image relevant to the visitor's credit score midpoint are displayed, helping to create a more personalized and engaging experience.

## Potential Values

The following table lists the valid values for the `credit_midpts` property:

| Value | Description                  |
| ----- | ---------------------------- |
| `0`   | No credit score available    |
| `450` | Midpoint credit score of 450 |
| `525` | Midpoint credit score of 525 |
| `575` | Midpoint credit score of 575 |
| `625` | Midpoint credit score of 625 |
| `675` | Midpoint credit score of 675 |
| `725` | Midpoint credit score of 725 |
| `775` | Midpoint credit score of 775 |
| `800` | Midpoint credit score of 800 |

## Conclusion

Using the `credit_midpts` property allows you to personalize your landing pages based on the visitor's credit score midpoint. By leveraging this property, you can deliver content that resonates with different credit scores, enhancing user engagement and effectiveness.

## Next Steps

Explore more features:

- [String and Number Functions](/docs/personalization/hero-string-number-functions)
- [Conditional Helpers](/docs/personalization/hero-conditional-helpers)
- [Advanced Templating Techniques](/docs/personalization/hero-advanced-techniques)

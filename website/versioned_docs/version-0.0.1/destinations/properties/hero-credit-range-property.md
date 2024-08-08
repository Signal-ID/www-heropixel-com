---
id: credit-range-property
title: Credit Range Property
description: Guide to using the credit range property
---

# Credit Range Property

## Introduction

The `credit_range` property allows you to tailor your content based on the credit score range of your visitors. This guide provides an overview of how to use the `credit_range` property to create personalized experiences and includes a list of potential credit range values.

## Usage

The `credit_range` property can be used to display content that resonates with the visitor's credit score range, making your communication more relevant and effective.

### Example

**Usage:**

```html
{{#if (eq credit_range "A. 800+")}}
<p>
  Congratulations! You qualify for our best interest rates and
  premium offers.
</p>
<img src="/images/premium_offers.jpg" alt="Premium Offers" />
{{else if (eq credit_range "D. 650-699")}}
<p>
  Explore our competitive offers designed for your credit range.
</p>
<img
  src="/images/competitive_offers.jpg"
  alt="Competitive Offers" />
{{else if (eq credit_range "H. 499 & Less")}}
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

In this example, a message and image relevant to the visitor's credit score range are displayed, helping to create a more personalized and engaging experience.

## Potential Values

The following table lists the potential values for the `credit_range` property:

| Value           | Description                   |
| --------------- | ----------------------------- |
| `A. 800+`       | Credit score of 800 and above |
| `B. 750-799`    | Credit score between 750-799  |
| `C. 700-749`    | Credit score between 700-749  |
| `D. 650-699`    | Credit score between 650-699  |
| `E. 600-649`    | Credit score between 600-649  |
| `F. 550-599`    | Credit score between 550-599  |
| `G. 500-549`    | Credit score between 500-549  |
| `H. 499 & Less` | Credit score of 499 and below |

## Conclusion

Using the `credit_range` property allows you to personalize your landing pages based on the visitor's credit score range. By leveraging this property, you can deliver content that resonates with different credit ranges, enhancing user engagement and effectiveness.

## Next Steps

Explore more features:

- [String and Number Functions](/docs/personalization/hero-string-number-functions)
- [Conditional Helpers](/docs/personalization/hero-conditional-helpers)
- [Advanced Templating Techniques](/docs/personalization/hero-advanced-techniques)

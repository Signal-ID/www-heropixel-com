---
id: marital-status-property
title: Marital Status Property
description: Guide to using the marital status property
---

# Marital Status Property

## Introduction

The `Marital_Status` property allows you to tailor your content based on the visitor's marital status. This guide provides an overview of how to use the `Marital_Status` property to create personalized experiences and includes a list of potential marital status values.

## Usage

The `Marital_Status` property can be used to display content that resonates with the visitor's marital status, making your communication more relevant and effective.

### Example

**Usage:**

```html
{{#if (eq Marital_Status "Married")}}
<p>
  Enjoy our special offers for married couples. Plan a romantic
  getaway with exclusive discounts!
</p>
<img src="/images/married_couples.jpg" alt="Married Couples" />
{{else if (eq Marital_Status "Single")}}
<p>
  Explore our exciting deals and opportunities for singles.
  Discover new adventures and make the most of your single life.
</p>
<img src="/images/singles.jpg" alt="Singles" />
{{else}}
<p>
  Welcome! Discover our range of services and products tailored to
  various lifestyles.
</p>
<img src="/images/general_offers.jpg" alt="General Offers" />
{{/if}}
```

In this example, various personalized messages and offers are displayed based on the visitor's marital status, providing fresh ideas to enhance user engagement and conversions.

## Potential Values

The following table lists the potential values for the `Marital_Status` property:

| Value     | Description        |
| --------- | ------------------ |
| `Married` | Visitor is married |
| `Single`  | Visitor is single  |

## Conclusion

Using the `Marital_Status` property allows you to personalize your landing pages based on the visitor's marital status. By leveraging this property, you can deliver content that resonates with different marital statuses, enhancing user engagement and effectiveness.

## Next Steps

Explore more features:

- [String and Number Functions](/docs/personalization/hero-string-number-functions)
- [Conditional Helpers](/docs/personalization/hero-conditional-helpers)
- [Advanced Templating Techniques](/docs/personalization/hero-advanced-techniques)

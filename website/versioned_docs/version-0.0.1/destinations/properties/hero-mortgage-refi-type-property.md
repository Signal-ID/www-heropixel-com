---
id: mortgage-refi-type-property
title: Mortgage Refi Type Property
description: Guide to using the mortgage refinance type property
---

# Mortgage Refi Type Property

## Introduction

The `Mortgage_Refi_Type` property allows you to tailor your content based on the type of mortgage refinance the visitor has. This guide provides an overview of how to use the `Mortgage_Refi_Type` property to create personalized experiences and includes a list of potential mortgage refinance type values.

## Usage

The `Mortgage_Refi_Type` property can be used to display content that resonates with the visitor's mortgage refinance type, making your communication more relevant and effective.

### Example

**Usage:**

```html
{{#if (eq Mortgage_Refi_Type "Adjustable")}}
<p>
  Learn more about how to maximize your savings with an
  adjustable-rate mortgage refinance.
</p>
<img src="/images/adjustable_rate.jpg" alt="Adjustable Rate" />
{{else if (eq Mortgage_Refi_Type "Fixed")}}
<p>
  Discover the stability and predictability of a fixed-rate
  mortgage refinance.
</p>
<img src="/images/fixed_rate.jpg" alt="Fixed Rate" />
{{else}}
<p>
  Welcome! Explore our range of refinancing options to suit your
  needs.
</p>
<img
  src="/images/general_refinance.jpg"
  alt="General Refinance" />
{{/if}}
```

In this example, various personalized messages and offers are displayed based on the visitor's mortgage refinance type, providing fresh ideas to enhance user engagement and conversions.

## Potential Values

The following table lists the potential values for the `Mortgage_Refi_Type` property:

| Value        | Description                        |
| ------------ | ---------------------------------- |
| `Adjustable` | Adjustable-rate mortgage refinance |
| `Fixed`      | Fixed-rate mortgage refinance      |

## Conclusion

Using the `Mortgage_Refi_Type` property allows you to personalize your landing pages based on the visitor's mortgage refinance type. By leveraging this property, you can deliver content that resonates with different refinance types, enhancing user engagement and effectiveness.

## Next Steps

Explore more features:

- [String and Number Functions](/docs/personalization/hero-string-number-functions)
- [Conditional Helpers](/docs/personalization/hero-conditional-helpers)
- [Advanced Templating Techniques](/docs/personalization/hero-advanced-techniques)

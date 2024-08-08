---
id: mortgage-loan-type-property
title: Mortgage Loan Type Property
description: Guide to using the mortgage loan type property
---

# Mortgage Loan Type Property

## Introduction

The `Mortgage_Loan_Type` property allows you to tailor your content based on the type of mortgage loan the visitor has. This guide provides an overview of how to use the `Mortgage_Loan_Type` property to create personalized experiences and includes a list of potential mortgage loan type values.

## Usage

The `Mortgage_Loan_Type` property can be used to display content that resonates with the visitor's mortgage loan type, making your communication more relevant and effective.

### Example

**Usage:**

```html
{{#if (eq Mortgage_Loan_Type "Community Development Authority")}}
<p>
  Take advantage of our special programs designed for Community
  Development Authority loan holders.
</p>
<img
  src="/images/community_development.jpg"
  alt="Community Development" />
{{else if (eq Mortgage_Loan_Type "Conventional")}}
<p>
  Explore our competitive rates and offers for conventional
  mortgage holders.
</p>
<img
  src="/images/conventional_mortgage.jpg"
  alt="Conventional Mortgage" />
{{else}}
<p>
  Welcome! Discover our range of services tailored to various
  mortgage types.
</p>
<img src="/images/general_mortgage.jpg" alt="General Mortgage" />
{{/if}}
```

In this example, various personalized messages and offers are displayed based on the visitor's mortgage loan type, providing fresh ideas to enhance user engagement and conversions.

## Potential Values

The following table lists the potential values for the `Mortgage_Loan_Type` property:

| Value                             | Description                                       |
| --------------------------------- | ------------------------------------------------- |
| `Community Development Authority` | Community Development Authority loan holders      |
| `Conventional`                    | Conventional mortgage loan holders                |
| `FHA`                             | Federal Housing Administration (FHA) loan holders |
| `Private Party Lender`            | Private party lender mortgage holders             |
| `Small Business Administration`   | Small Business Administration (SBA) loan holders  |
| `VA Loan`                         | Veterans Affairs (VA) loan holders                |
| `Wrap-Around Mortgage`            | Wrap-around mortgage holders                      |

## Conclusion

Using the `Mortgage_Loan_Type` property allows you to personalize your landing pages based on the visitor's mortgage loan type. By leveraging this property, you can deliver content that resonates with different mortgage types, enhancing user engagement and effectiveness.

## Next Steps

Explore more features:

- [String and Number Functions](/docs/personalization/hero-string-number-functions)
- [Conditional Helpers](/docs/personalization/hero-conditional-helpers)
- [Advanced Templating Techniques](/docs/personalization/hero-advanced-techniques)

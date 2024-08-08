---
id: dwelling-type-property
title: Dwelling Type Property
description: Guide to using the dwelling type property
---

# Dwelling Type Property

## Introduction

The `dwelling_type` property allows you to tailor your content based on the type of dwelling the visitor resides in. This guide provides an overview of how to use the `dwelling_type` property to create personalized experiences and includes a list of potential dwelling type values.

## Usage

The `dwelling_type` property can be used to display content that resonates with the visitor's dwelling type, making your communication more relevant and effective.

### Example

**Usage:**

```html
{{#if (eq dwelling_type "Single Family")}}
<p>
  Enjoy our exclusive offers and services designed for
  single-family homeowners.
</p>
<img
  src="/images/single_family_home.jpg"
  alt="Single Family Home" />
{{else if (eq dwelling_type "Multi Family Dwelling/Apartment")}}
<p>
  Discover our tailored solutions and discounts for apartment and
  multi-family dwelling residents.
</p>
<img
  src="/images/multi_family_dwelling.jpg"
  alt="Multi Family Dwelling/Apartment" />
{{else}}
<p>Welcome! Discover our services tailored to your needs.</p>
<img src="/images/general_services.jpg" alt="General Services" />
{{/if}}
```

In this example, a message and image relevant to the visitor's dwelling type are displayed, helping to create a more personalized and engaging experience.

## Potential Values

The following table lists the potential values for the `dwelling_type` property:

| Value                             | Description                                             |
| --------------------------------- | ------------------------------------------------------- |
| `Single Family`                   | Visitor resides in a single-family home                 |
| `Multi Family Dwelling/Apartment` | Visitor resides in a multi-family dwelling or apartment |

## Conclusion

Using the `dwelling_type` property allows you to personalize your landing pages based on the visitor's dwelling type. By leveraging this property, you can deliver content that resonates with different dwelling types, enhancing user engagement and effectiveness.

## Next Steps

Explore more features:

- [String and Number Functions](/docs/personalization/hero-string-number-functions)
- [Conditional Helpers](/docs/personalization/hero-conditional-helpers)
- [Advanced Templating Techniques](/docs/personalization/hero-advanced-techniques)

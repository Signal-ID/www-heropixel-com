---
id: home-owner-ordinal-property
title: Home Owner Ordinal Property
description: Guide to using the home owner ordinal property
---

# Home Owner Ordinal Property

## Introduction

The `home_owner_ordinal` property allows you to tailor your content based on the visitor's likelihood of home ownership, as quantified by a numerical scale in the context of Acxiom data. This guide provides an overview of how to use the `home_owner_ordinal` property to create personalized experiences and includes a list of potential values.

## What is Home Owner Ordinal?

In the context of Acxiom data, the `home_owner_ordinal` property represents the likelihood of the visitor being a home owner using a numerical scale. Each value corresponds to a specific level of home ownership probability.

## Usage

The `home_owner_ordinal` property can be used to display content that resonates with the visitor's likelihood of home ownership, making your communication more relevant and effective.

### Example

**Usage:**

```html
{{#if (eq home_owner_ordinal 4)}}
<p>
  We have exclusive offers for confirmed home owners like you.
  Explore our range of home improvement solutions.
</p>
<img
  src="/images/confirmed_home_owner.jpg"
  alt="Confirmed Home Owner" />
{{else if (eq home_owner_ordinal 1)}}
<p>
  Considering buying a home? Check out our mortgage and real
  estate guides to help you on your journey.
</p>
<img
  src="/images/probable_home_owner.jpg"
  alt="Probable Home Owner" />
{{else if (eq home_owner_ordinal 0)}}
<p>
  Renting? Discover our renter-friendly solutions and affordable
  rental insurance plans.
</p>
<img src="/images/renter.jpg" alt="Renter" />
{{else if (eq home_owner_ordinal 3)}}
<p>
  Explore our home ownership resources designed for those likely
  to own a home.
</p>
<img
  src="/images/likely_home_owner.jpg"
  alt="Likely Home Owner" />
{{else}}
<p>Welcome! Discover our services tailored to your needs.</p>
<img src="/images/general_services.jpg" alt="General Services" />
{{/if}}
```

In this example, a message and image relevant to the visitor's likelihood of home ownership are displayed, helping to create a more personalized and engaging experience.

## Potential Values

The following table lists the potential values for the `home_owner_ordinal` property:

| Value | Description               |
| ----- | ------------------------- |
| `4`   | Confirmed home owner      |
| `3`   | Likely home owner         |
| `1`   | Probable home owner       |
| `0`   | Not a home owner (Renter) |

## Conclusion

Using the `home_owner_ordinal` property allows you to personalize your landing pages based on the visitor's likelihood of home ownership. By leveraging this property, you can deliver content that resonates with different levels of home ownership probability, enhancing user engagement and effectiveness.

## Next Steps

Explore more features:

- [String and Number Functions](/docs/personalization/hero-string-number-functions)
- [Conditional Helpers](/docs/personalization/hero-conditional-helpers)
- [Advanced Templating Techniques](/docs/personalization/hero-advanced-techniques)

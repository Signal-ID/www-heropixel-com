---
id: home-heat-type-property
title: Home Heat Type Property
description: Guide to using the home heat type property
---

# Home Heat Type Property

## Introduction

The `home_heat_type` property allows you to tailor your content based on the type of heating system the visitor's home uses. This guide provides an overview of how to use the `home_heat_type` property to create personalized experiences and includes a list of potential home heat type values.

## Usage

The `home_heat_type` property can be used to display content that resonates with the visitor's home heating system, making your communication more relevant and effective.

### Example

**Usage:**

```html
{{#if (eq home_heat_type "Gas")}}
<p>
  Optimize your gas heating system with our energy-saving tips and
  offers.
</p>
<img src="/images/gas_heating.jpg" alt="Gas Heating" />
{{else if (eq home_heat_type "Electric")}}
<p>
  Discover efficient electric heating solutions and discounts on
  our services.
</p>
<img src="/images/electric_heating.jpg" alt="Electric Heating" />
{{else if (eq home_heat_type "Oil")}}
<p>
  Keep your oil heating system running smoothly with our
  maintenance packages.
</p>
<img src="/images/oil_heating.jpg" alt="Oil Heating" />
{{else if (eq home_heat_type "Propane")}}
<p>
  Explore our propane heating services and special offers designed
  for you.
</p>
<img src="/images/propane_heating.jpg" alt="Propane Heating" />
{{else}}
<p>Welcome! Discover our wide range of home heating solutions.</p>
<img src="/images/general_heating.jpg" alt="General Heating" />
{{/if}}
```

In this example, a message and image relevant to the visitor's home heating system are displayed, helping to create a more personalized and engaging experience.

## Potential Values

The following table lists the potential values for the `home_heat_type` property:

| Value      | Description                          |
| ---------- | ------------------------------------ |
| `Gas`      | Visitor's home uses gas heating      |
| `Electric` | Visitor's home uses electric heating |
| `Oil`      | Visitor's home uses oil heating      |
| `Propane`  | Visitor's home uses propane heating  |

## Conclusion

Using the `home_heat_type` property allows you to personalize your landing pages based on the visitor's home heating system. By leveraging this property, you can deliver content that resonates with different heating systems, enhancing user engagement and effectiveness.

## Next Steps

Explore more features:

- [String and Number Functions](/docs/personalization/hero-string-number-functions)
- [Conditional Helpers](/docs/personalization/hero-conditional-helpers)
- [Advanced Templating Techniques](/docs/personalization/hero-advanced-techniques)

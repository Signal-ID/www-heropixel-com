---
id: address-type-property
title: Address Type Property
description: Guide to using the address type property
---

# Address Type Property

## Introduction

The `address_type` property allows you to tailor your content based on the type of address the visitor has. This guide provides an overview of how to use the `address_type` property to create personalized experiences and includes a list of potential address type values.

## Usage

The `address_type` property can be used to display content that resonates with the visitor's address type, making your communication more relevant and effective.

### Example

**Usage:**

```html
{{#if (eq address_type "Street")}}
<p>
  Discover our special offers for residents in urban areas with
  street addresses.
</p>
<img src="/images/street_address.jpg" alt="Street Address" />
{{else if (eq address_type "Highway")}}
<p>
  Check out our services designed for those living along highways.
</p>
<img src="/images/highway_address.jpg" alt="Highway Address" />
{{else if (eq address_type "PO Box")}}
<p>
  We have convenient solutions for customers using PO Box
  addresses.
</p>
<img src="/images/po_box_address.jpg" alt="PO Box Address" />
{{else if (eq address_type "Rural Route")}}
<p>Explore our offers tailored for rural route residents.</p>
<img
  src="/images/rural_route_address.jpg"
  alt="Rural Route Address" />
{{else}}
<p>Welcome! Discover our services tailored to your needs.</p>
<img src="/images/general_services.jpg" alt="General Services" />
{{/if}}
```

In this example, a message and image relevant to the visitor's address type are displayed, helping to create a more personalized and engaging experience.

## Potential Values

The following table lists the potential values for the `address_type` property:

| Value         | Description                                |
| ------------- | ------------------------------------------ |
| `Street`      | Visitor's address is a street address      |
| `Highway`     | Visitor's address is along a highway       |
| `PO Box`      | Visitor's address is a PO Box              |
| `Rural Route` | Visitor's address is a rural route address |

## Conclusion

Using the `address_type` property allows you to personalize your landing pages based on the visitor's address type. By leveraging this property, you can deliver content that resonates with different address types, enhancing user engagement and effectiveness.

## Next Steps

Explore more features:

- [String and Number Functions](/docs/personalization/hero-string-number-functions)
- [Conditional Helpers](/docs/personalization/hero-conditional-helpers)
- [Advanced Templating Techniques](/docs/personalization/hero-advanced-techniques)

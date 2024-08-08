---
id: phone-carrier-property
title: Phone Carrier Property
description: Guide to using the phone carrier property
---

# Phone Carrier Property

## Introduction

The `phone_carrier` property allows you to tailor your content based on the carrier (service provider) to which the visitor's phone number is assigned. This guide provides an overview of how to use the `phone_carrier` property to create personalized experiences and includes a list of potential phone carrier values.

## Usage

The `phone_carrier` property can be used to display content that resonates with the visitor's phone carrier, making your communication more relevant and effective.

### Example

**Usage:**

```html
{{#if (eq phone_carrier "Verizon Wireless")}}
<p>
  Welcome, Verizon Wireless customer! Check out our exclusive
  offers just for you.
</p>
<img src="/images/verizon_offers.jpg" alt="Verizon Offers" />
{{else if (eq phone_carrier "AT&T")}}
<p>
  Hello, AT&T user! Discover our special deals tailored to your
  needs.
</p>
<img src="/images/att_offers.jpg" alt="AT&T Offers" />
{{else if (eq phone_carrier "Bell Canada")}}
<p>
  Hi, Bell Canada customer! Enjoy our unique promotions crafted
  for you.
</p>
<img src="/images/bell_offers.jpg" alt="Bell Canada Offers" />
{{else}}
<p>
  Welcome! Explore our range of products and services tailored to
  various carriers.
</p>
<img src="/images/general_offers.jpg" alt="General Offers" />
{{/if}}
```

In this example, various personalized messages and offers are displayed based on the visitor's phone carrier, providing fresh ideas to enhance user engagement and conversions.

## Potential Values

The following table lists a selection of potential values for the `phone_carrier` property, including popular phone carriers in the U.S.:

| Value                    | Description            |
| ------------------------ | ---------------------- |
| `AT&T`                   | U.S. phone carrier     |
| `Bell Canada`            | Canadian phone carrier |
| `Verizon Wireless`       | U.S. phone carrier     |
| `T-Mobile`               | U.S. phone carrier     |
| `Sprint`                 | U.S. phone carrier     |
| `US Cellular`            | U.S. phone carrier     |
| `Boost Mobile`           | U.S. phone carrier     |
| `Cricket Wireless`       | U.S. phone carrier     |
| `Metro by T-Mobile`      | U.S. phone carrier     |
| `Virgin Mobile`          | U.S. phone carrier     |
| `Xfinity Mobile`         | U.S. phone carrier     |
| `Google Fi`              | U.S. phone carrier     |
| `Spectrum Mobile`        | U.S. phone carrier     |
| `Republic Wireless`      | U.S. phone carrier     |
| `Mint Mobile`            | U.S. phone carrier     |
| `Consumer Cellular`      | U.S. phone carrier     |
| `Ting`                   | U.S. phone carrier     |
| `Straight Talk`          | U.S. phone carrier     |
| `Page Plus`              | U.S. phone carrier     |
| `Simple Mobile`          | U.S. phone carrier     |
| `TracFone`               | U.S. phone carrier     |
| `Net10 Wireless`         | U.S. phone carrier     |
| `Total Wireless`         | U.S. phone carrier     |
| `H2O Wireless`           | U.S. phone carrier     |
| `Red Pocket`             | U.S. phone carrier     |
| `Visible`                | U.S. phone carrier     |
| `Wing`                   | U.S. phone carrier     |
| `Project Fi`             | U.S. phone carrier     |
| `Walmart Family Mobile`  | U.S. phone carrier     |
| `Credo Mobile`           | U.S. phone carrier     |
| `Cellcom`                | U.S. phone carrier     |
| `FreedomPop`             | U.S. phone carrier     |
| `Boost Infinite`         | U.S. phone carrier     |
| `Nextel`                 | U.S. phone carrier     |
| `Bluegrass Cellular`     | U.S. phone carrier     |
| `Republic Wireless`      | U.S. phone carrier     |
| `Spectrum`               | U.S. phone carrier     |
| `Straight Talk Wireless` | U.S. phone carrier     |
| `MetroPCS`               | U.S. phone carrier     |
| `C Spire`                | U.S. phone carrier     |
| `Appalachian Wireless`   | U.S. phone carrier     |
| `GreatCall`              | U.S. phone carrier     |
| `Ptel Mobile`            | U.S. phone carrier     |
| `GCI Wireless`           | U.S. phone carrier     |
| `Tello`                  | U.S. phone carrier     |
| `Ultra Mobile`           | U.S. phone carrier     |
| `Voyager Mobile`         | U.S. phone carrier     |
| `Boom Mobile`            | U.S. phone carrier     |
| `Gen Mobile`             | U.S. phone carrier     |
| `Hello Mobile`           | U.S. phone carrier     |
| `Lycamobile`             | U.S. phone carrier     |

and many more...

## Conclusion

Using the `phone_carrier` property allows you to personalize your landing pages based on the visitor's phone carrier. By leveraging this property, you can deliver content that resonates with different carriers, enhancing user engagement and effectiveness.

## Next Steps

Explore more features:

- [String and Number Functions](/docs/personalization/hero-string-number-functions)
- [Conditional Helpers](/docs/personalization/hero-conditional-helpers)
- [Advanced Templating Techniques](/docs/personalization/hero-advanced-techniques)

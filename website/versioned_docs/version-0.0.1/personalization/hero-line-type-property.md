---
id: line-type-property
title: Line Type Property
description: Guide to using the line type property
---

# Line Type Property

## Introduction

The `line_type` property allows you to tailor your content based on the type of phone line associated with the visitor's phone number. This guide provides an overview of how to use the `line_type` property to create personalized experiences and includes a list of potential line type values.

## Usage

The `line_type` property can be used to display content that resonates with the visitor's phone line type, making your communication more relevant and effective.

### Example

**Usage:**

```html
{{#if (eq line_type "Wireless")}}
<p>
  We noticed you are using a wireless number. Stay connected with
  our mobile-friendly services!
</p>
<img src="/images/wireless.jpg" alt="Wireless Services" />
{{else if (eq line_type "Landline")}}
<p>
  Welcome, landline user! Explore our home services tailored just
  for you.
</p>
<img src="/images/landline.jpg" alt="Landline Services" />
{{else if (eq line_type "VOIP")}}
<p>
  Using a VOIP number? Check out our latest internet-based offers.
</p>
<img src="/images/voip.jpg" alt="VOIP Offers" />
{{else}}
<p>
  Welcome! Explore our range of products and services tailored to
  various line types.
</p>
<img src="/images/general_offers.jpg" alt="General Offers" />
{{/if}}
```

In this example, various personalized messages and offers are displayed based on the visitor's phone line type, providing fresh ideas to enhance user engagement and conversions.

## Potential Values

The following table lists the potential values for the `line_type` property:

| Value          | Description                         |
| -------------- | ----------------------------------- |
| `Toll Free`    | Toll free phone line                |
| `Wireless`     | Wireless phone line                 |
| `Landline`     | Landline phone line                 |
| `Satellite`    | Satellite phone line                |
| `VOIP`         | Voice Over IP (VOIP) phone line     |
| `Premium Rate` | Premium rate phone line             |
| `Pager`        | Pager phone line                    |
| `N/A`          | Unknown or not applicable line type |

## Conclusion

Using the `line_type` property allows you to personalize your landing pages based on the visitor's phone line type. By leveraging this property, you can deliver content that resonates with different line types, enhancing user engagement and effectiveness.

## Next Steps

Explore more features:

- [String and Number Functions](/docs/personalization/hero-string-number-functions)
- [Conditional Helpers](/docs/personalization/hero-conditional-helpers)
- [Advanced Templating Techniques](/docs/personalization/hero-advanced-techniques)

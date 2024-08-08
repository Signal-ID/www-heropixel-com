---
id: home-owner-property
title: Home Owner Property
description: Guide to using the home owner property
---

# Home Owner Property

## Introduction

The `home_owner` property allows you to tailor your content based on the visitor's home ownership status. This guide provides an overview of how to use the `home_owner` property to create personalized experiences and includes a list of potential home ownership values.

## Usage

The `home_owner` property can be used to display content that resonates with the visitor's home ownership status, making your communication more relevant and effective.

### Example

**Usage:**

```html
{{#if (eq home_owner "Home Owner")}}
<p>
  As a home owner, you might be interested in our home insurance
  plans and renovation tips.
</p>
<img src="/images/home_owner.jpg" alt="Home Owner" />
{{else if (eq home_owner "Renter")}}
<p>
  Explore our renter-friendly solutions and affordable rental
  insurance plans.
</p>
<img src="/images/renter.jpg" alt="Renter" />
{{else if (eq home_owner "Probable Home Owner")}}
<p>
  Check out our home ownership guides and mortgage options that
  might suit you.
</p>
<img
  src="/images/probable_home_owner.jpg"
  alt="Probable Home Owner" />
{{else}}
<p>Discover our wide range of services tailored to your needs.</p>
<img src="/images/general_services.jpg" alt="General Services" />
{{/if}}
```

In this example, a message and image relevant to the visitor's home ownership status are displayed, helping to create a more personalized and engaging experience.

## Potential Values

The following table lists the potential values for the `home_owner` property:

| Value                 | Description                      |
| --------------------- | -------------------------------- |
| `Home Owner`          | Visitor is a home owner          |
| `Renter`              | Visitor is a renter              |
| `Probable Home Owner` | Visitor is a probable home owner |

## Conclusion

Using the `home_owner` property allows you to personalize your landing pages based on the visitor's home ownership status. By leveraging this property, you can deliver content that resonates with different home ownership statuses, enhancing user engagement and effectiveness.

## Next Steps

Explore more features:

- [String and Number Functions](/docs/personalization/hero-string-number-functions)
- [Conditional Helpers](/docs/personalization/hero-conditional-helpers)
- [Advanced Templating Techniques](/docs/personalization/hero-advanced-techniques)

---
id: generation-ordinal-property
title: Generation Ordinal Property
description: Guide to using the generation ordinal property
---

# Generation Ordinal Property

## Introduction

The `generation_ordinal` property allows you to tailor your content based on the generational cohort of your visitors, as quantified by a numerical scale. This guide provides an overview of how to use the `generation_ordinal` property to create personalized experiences and includes a list of potential values.

## What is Generation Ordinal?

In the context of Acxiom data, the `generation_ordinal` property represents the visitor's generational cohort using a numerical scale. Each value corresponds to a specific generation, helping you understand the visitor's age group and tailor your content accordingly.

## Usage

The `generation_ordinal` property can be used to display content that resonates with the visitor's generational cohort, helping to build trust and rapport.

### Example

**Usage:**

```html
{{#if (eq generation_ordinal 3)}}
<p>
  Thank you for being a loyal customer since the early days. We
  appreciate your continued support!
</p>
<img src="/images/baby_boomers.jpg" alt="Baby Boomers" />
{{else if (eq generation_ordinal 2)}}
<p>
  As a member of Generation X, your experience and insights are
  invaluable to us. Thank you for being with us!
</p>
<img src="/images/generation_x.jpg" alt="Generation X" />
{{else if (eq generation_ordinal 4)}}
<p>
  We honor the wisdom and contributions of the Post-WWII
  generation. Your legacy inspires us every day.
</p>
<img src="/images/post_wwii.jpg" alt="Post-WWII Generation" />
{{else if (eq generation_ordinal 1)}}
<p>
  Welcome, future leaders! Your innovative spirit and energy drive
  us to create better solutions for tomorrow.
</p>
<img
  src="/images/millennials_gen_z.jpg"
  alt="Millennials and Gen Z" />
{{else}}
<p>
  Welcome! We value your unique perspective and are glad to have
  you with us.
</p>
<img src="/images/general_welcome.jpg" alt="General Welcome" />
{{/if}}
```

In this example, a message and image relevant to the visitor's generational cohort are displayed, helping to create a more personalized and engaging experience.

## Potential Values

The following table lists the potential values for the `generation_ordinal` property:

| Value | Description                            |
| ----- | -------------------------------------- |
| `3`   | Baby Boomers (1943-1960)               |
| `2`   | Generation X (1961-1981)               |
| `4`   | Post-WWII (1942 and before)            |
| `1`   | Millennials and Gen Z (1982 and after) |
| `0`   | Other                                  |

## Conclusion

Using the `generation_ordinal` property allows you to personalize your landing pages based on the visitor's generational cohort, as quantified by a numerical scale. By leveraging this property, you can deliver content that resonates with different generations, enhancing user engagement and effectiveness.

## Next Steps

Explore more features:

- [String and Number Functions](/docs/personalization/hero-string-number-functions)
- [Conditional Helpers](/docs/personalization/hero-conditional-helpers)
- [Advanced Templating Techniques](/docs/personalization/hero-advanced-techniques)

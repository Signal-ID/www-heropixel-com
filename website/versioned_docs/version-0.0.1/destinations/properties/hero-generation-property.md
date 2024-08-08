---
id: hero-generation-property
title: Generation Property
description: Guide to using the generation property in Hero Dynamic Text
---

# Generation Property

## Introduction

The `generation` property in Hero Dynamic Text allows you to tailor your content to the generational background of your visitors. This guide provides an overview of how to use the `generation` property to create personalized experiences and includes a list of potential generation values.

## Usage

The `generation` property can be used to display content that resonates with the visitor's generational background, helping to build trust and rapport.

### Example

**Usage:**

```html
{{#if (eq generation "3. Baby Boomers (1943-1960)")}}
<p>
  Thank you for being a loyal customer since the early days. We
  appreciate your continued support!
</p>
<img src="/images/baby_boomers.jpg" alt="Baby Boomers" />
{{else if (eq generation "2. Generation X (1961-1981)")}}
<p>
  As a member of Generation X, your experience and insights are
  invaluable to us. Thank you for being with us!
</p>
<img src="/images/generation_x.jpg" alt="Generation X" />
{{else if (eq generation "4. Post-WWII (1942 and before)")}}
<p>
  We honor the wisdom and contributions of the Post-WWII
  generation. Your legacy inspires us every day.
</p>
<img src="/images/post_wwii.jpg" alt="Post-WWII Generation" />
{{else if (eq generation "1. Millennials and Gen Z (1982 and
after)")}}
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

In this example, a message and image relevant to the visitor's generation are displayed, helping to build trust and rapport with personalized content.

## Potential Values

The following table lists the potential values for the `generation` property:

| Value                                       | Description                |
| ------------------------------------------- | -------------------------- |
| `1. Millennials and Gen Z (1982 and after)` | Born in 1982 and after     |
| `2. Generation X (1961-1981)`               | Born between 1961 and 1981 |
| `3. Baby Boomers (1943-1960)`               | Born between 1943 and 1960 |
| `4. Post-WWII (1942 and before)`            | Born in 1942 and before    |

## Conclusion

Using the `generation` property in Hero Dynamic Text allows you to personalize your landing pages based on the visitor's generational background. By leveraging this property, you can deliver content that resonates with different generations, helping to build trust and rapport with your audience.

## Next Steps

Explore more features of Hero Dynamic Text:

- [String and Number Functions](/docs/personalization/hero-string-number-functions)
- [Conditional Helpers](/docs/personalization/hero-conditional-helpers)
- [Advanced Templating Techniques](/docs/personalization/hero-advanced-techniques)

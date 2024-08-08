---
id: education-ordinal-property
title: Education Ordinal Property
description: Guide to using the education ordinal property
---

# Education Ordinal Property

## Introduction

The `education_ordinal` property allows you to tailor your content based on the visitor's educational attainment level, as quantified by a numerical scale. This guide provides an overview of how to use the `education_ordinal` property to create personalized experiences and includes a list of potential values.

## What is Education Ordinal?

In the context of our data, the `education_ordinal` property represents the visitor's highest level of education using a numerical scale. Each value corresponds to a specific level of educational attainment.

## Usage

The `education_ordinal` property can be used to display content that resonates with the visitor's educational level, making your communication more relevant and effective.

### Example

**Usage:**

```html
{{#if (eq education_ordinal 5)}}
<p>
  Thank you for completing college! We have specialized content to
  support your ongoing professional journey.
</p>
<img
  src="/images/completed_college.jpg"
  alt="Completed College" />
{{else if (eq education_ordinal 3)}}
<p>
  Thank you for joining us! Explore our resources tailored for
  high school graduates like you.
</p>
<img
  src="/images/completed_high_school.jpg"
  alt="Completed High School" />
{{else}}
<p>
  Welcome! We offer a wide range of content to suit various
  educational backgrounds.
</p>
<img
  src="/images/general_education.jpg"
  alt="General Education" />
{{/if}}
```

In this example, a message and image relevant to the visitor's educational level are displayed, helping to create a more personalized and engaging experience.

## Potential Values

The following table lists the potential values for the `education_ordinal` property:

| Value | Description                   |
| ----- | ----------------------------- |
| `5`   | Completed College             |
| `3`   | Completed High School         |
| `6`   | Completed Graduate School     |
| `2`   | Attended Vocational/Technical |
| `4`   | Some College                  |
| `0`   | Some High School              |
| `1`   | Doctorate/PhD or Above        |
| `7`   | Other                         |

## Conclusion

Using the `education_ordinal` property allows you to personalize your landing pages based on the visitor's educational level, as quantified by a numerical scale. By leveraging this property, you can deliver content that resonates with different educational levels, enhancing user engagement and effectiveness.

## Next Steps

Explore more features:

- [String and Number Functions](/docs/personalization/hero-string-number-functions)
- [Conditional Helpers](/docs/personalization/hero-conditional-helpers)
- [Advanced Templating Techniques](/docs/personalization/hero-advanced-techniques)

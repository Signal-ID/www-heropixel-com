---
id: education-property
title: Education Property
description: Guide to using the education property
---

# Education Property

## Introduction

The `education` property allows you to tailor your content based on the educational background of your visitors. This guide provides an overview of how to use the `education` property to create personalized experiences and includes a list of potential education values.

## Usage

The `education` property can be used to display content that resonates with the visitor's educational background, making your communication more relevant and effective.

### Example

**Usage:**

```html
{{#if (eq education "Completed College")}}
<p>
  Congratulations on completing your college degree! We have
  specialized content to support your ongoing professional
  journey.
</p>
<img
  src="/images/completed_college.jpg"
  alt="Completed College" />
{{else if (eq education "Completed High School")}}
<p>
  Thank you for joining us! Explore our resources tailored for
  high school graduates like you.
</p>
<img
  src="/images/completed_high_school.jpg"
  alt="Completed High School" />
{{else if (eq education "Doctorate/PhD or Above")}}
<p>
  With a PhD or higher, your expertise is invaluable. Access our
  exclusive content for top-tier professionals.
</p>
<img
  src="/images/doctorate_phd.jpg"
  alt="Doctorate/PhD or Above" />
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

In this example, a message and image relevant to the visitor's educational background are displayed, helping to create a more personalized and engaging experience.

## Potential Values

The following table lists the potential values for the `education` property:

| Value                           | Description                                         |
| ------------------------------- | --------------------------------------------------- |
| `Completed College`             | Visitor has completed a college degree              |
| `Completed High School`         | Visitor has completed high school                   |
| `Completed Graduate School`     | Visitor has completed graduate school               |
| `Attended Vocational/Technical` | Visitor has attended vocational or technical school |
| `Some College`                  | Visitor has attended some college                   |
| `Some High School`              | Visitor has attended some high school               |
| `Doctorate/PhD or Above`        | Visitor has a Doctorate/PhD or higher               |

## Conclusion

Using the `education` property allows you to personalize your landing pages based on the visitor's educational background. By leveraging this property, you can deliver content that resonates with different educational levels, enhancing user engagement and effectiveness.

## Next Steps

Explore more features:

- [String and Number Functions](/docs/personalization/hero-string-number-functions)
- [Conditional Helpers](/docs/personalization/hero-conditional-helpers)
- [Advanced Templating Techniques](/docs/personalization/hero-advanced-techniques)

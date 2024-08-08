---
id: urbanicity-property
title: Urbanicity Property
description: Guide to using the urbanicity property
---

# Urbanicity Property

## Introduction

The `urbanicity` property allows you to tailor your content based on the visitor's living environment. This guide provides an overview of how to use the `urbanicity` property to create personalized experiences and includes a list of potential values.

## Usage

The `urbanicity` property can be used to display content that resonates with the visitor's living environment, enhancing the relevance and effectiveness of your communication.

### Example

**Usage:**

```html
{{#if (eq urbanicity "1. Rural")}}
<p>Welcome to our rural community!</p>
<img src="/images/rural_community.jpg" alt="Rural Community" />
{{else if (eq urbanicity "3. Suburban")}}
<p>Welcome to our suburban community!</p>
<img
  src="/images/suburban_community.jpg"
  alt="Suburban Community" />
{{else if (eq urbanicity "4. Urban")}}
<p>Welcome to our urban community!</p>
<img src="/images/urban_community.jpg" alt="Urban Community" />
{{else}}
<p>Welcome to our community!</p>
<img
  src="/images/general_community.jpg"
  alt="General Community" />
{{/if}}
```

In this example, personalized messages and images are displayed based on the visitor's living environment, helping to build trust and rapport with your audience.

## Potential Values

The following table lists the potential values for the `urbanicity` property:

| Values        | Value Type | Description                 |
| ------------- | ---------- | --------------------------- |
| `1. Rural`    | string     | Rural living environment    |
| `3. Suburban` | string     | Suburban living environment |
| `4. Urban`    | string     | Urban living environment    |

## Conclusion

Using the `urbanicity` property allows you to create personalized content that resonates with the visitor's living environment. By leveraging this property, you can enhance user engagement and build trust with your audience.

## Next Steps

Explore more features:

- [String and Number Functions](/docs/personalization/hero-string-number-functions)
- [Conditional Helpers](/docs/personalization/hero-conditional-helpers)
- [Advanced Templating Techniques](/docs/personalization/hero-advanced-techniques)

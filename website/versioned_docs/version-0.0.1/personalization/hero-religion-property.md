---
id: religion-property
title: Religion Property
description: Guide to using the religion property
---

# Religion Property

## Introduction

The `religion` property allows you to tailor your content based on the visitor's religious affiliation. This guide provides an overview of how to use the `religion` property to create personalized experiences and includes a list of potential values.

## Usage

The `religion` property can be used to display content that resonates with the visitor's religious beliefs, enhancing the relevance and effectiveness of your communication.

### Example

**Usage:**

```html
{{#if (eq religion "Buddhist")}}
<p>Welcome to our Buddhist community!</p>
<img
  src="/images/buddhist_community.jpg"
  alt="Buddhist Community" />
{{else if (eq religion "Catholic")}}
<p>Welcome to our Catholic community!</p>
<img
  src="/images/catholic_community.jpg"
  alt="Catholic Community" />
{{else if (eq religion "Jewish")}}
<p>Welcome to our Jewish community!</p>
<img src="/images/jewish_community.jpg" alt="Jewish Community" />
{{else}}
<p>Welcome to our community!</p>
<img
  src="/images/general_community.jpg"
  alt="General Community" />
{{/if}}
```

In this example, personalized messages and images are displayed based on the visitor's religious affiliation, helping to build trust and rapport with your audience.

## Potential Values

The following table lists the potential values for the `religion` property:

| Values             | Value Type | Description                      |
| ------------------ | ---------- | -------------------------------- |
| `Buddhist`         | string     | Buddhist religious affiliation   |
| `Catholic`         | string     | Catholic religious affiliation   |
| `Christian`        | string     | Christian religious affiliation  |
| `Hindu`            | string     | Hindu religious affiliation      |
| `Islamic / Muslim` | string     | Islamic religious affiliation    |
| `Jewish`           | string     | Jewish religious affiliation     |
| `Other`            | string     | Other religious affiliation      |
| `Protestant`       | string     | Protestant religious affiliation |

## Conclusion

Using the `religion` property allows you to create personalized content that resonates with the visitor's religious beliefs. By leveraging this property, you can enhance user engagement and build trust with your audience.

## Next Steps

Explore more features:

- [String and Number Functions](/docs/personalization/hero-string-number-functions)
- [Conditional Helpers](/docs/personalization/hero-conditional-helpers)
- [Advanced Templating Techniques](/docs/personalization/hero-advanced-techniques)

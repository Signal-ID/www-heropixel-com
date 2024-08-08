---
id: hero-ethnic-group-property
title: Ethnic Group Property
description: Guide to using the ethnic group property in Hero Dynamic Text
---

# Ethnic Group Property

## Introduction

The `ethnic_group` property in Hero Dynamic Text allows you to tailor your content to the ethnic background of your visitors. This guide provides an overview of how to use the `ethnic_group` property to create personalized experiences and includes a list of potential ethnic group values.

## Usage

The `ethnic_group` property can be used to display content that resonates with the visitor's cultural background, ensuring a more relevant and engaging experience.

### Example

**Usage:**

```html
{{#if (eq ethnic_group "Hispanic")}}
<img
  src="/images/hispanic_community.jpg"
  alt="Hispanic Community" />
{{else if (eq ethnic_group "Asian")}}
<img src="/images/asian_community.jpg" alt="Asian Community" />
{{else if (eq ethnic_group "African American")}}
<img
  src="/images/african_american_community.jpg"
  alt="African American Community" />
{{else if (eq ethnic_group "Jewish")}}
<img src="/images/jewish_community.jpg" alt="Jewish Community" />
{{else if (eq ethnic_group "White")}}
<img src="/images/white_community.jpg" alt="White Community" />
{{else}}
<img src="/images/general_community.jpg" alt="Community" />
{{/if}}
```

In this example, the image is displayed in Spanish if the visitor's ethnic group is Hispanic, in Chinese if the ethnic group is Asian, and in English for all other ethnic groups.

## Potential Values

The following table lists the potential values for the `ethnic_group` property:

| Value            | Description        |
| ---------------- | ------------------ |
| White            | Caucasian or White |
| Hispanic         | Hispanic or Latino |
| Asian            | Asian              |
| Jewish           | Jewish             |
| African American | African American   |
| Other            | Other              |

## Conclusion

Using the `ethnic_group` property in Hero Dynamic Text allows you to personalize your landing pages based on the visitor's ethnic background. By leveraging this property, you can deliver a more culturally relevant user experience.

## Next Steps

Explore more features of Hero Dynamic Text:

- [String and Number Functions](/docs/personalization/hero-string-number-functions)
- [Conditional Helpers](/docs/personalization/hero-conditional-helpers)
- [Advanced Templating Techniques](/docs/personalization/hero-advanced-techniques)

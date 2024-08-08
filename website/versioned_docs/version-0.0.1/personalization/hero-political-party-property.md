---
id: political-party-property
title: Political Party Property
description: Guide to using the political party property
---

# Political Party Property

## Introduction

The `Political_Party` property allows you to tailor your content based on the political party affiliation of your visitors. This guide provides an overview of how to use the `Political_Party` property to create personalized experiences and includes a list of potential political party values.

## Usage

The `Political_Party` property can be used to display content that resonates with the visitor's political party affiliation, making your communication more relevant and effective.

### Example

**Usage:**

```html
{{#if (eq Political_Party "Conservative")}}
<p>
  Welcome, Conservative! Check out our policies that align with
  your values.
</p>
<img
  src="/images/conservative_policies.jpg"
  alt="Conservative Policies" />
{{else if (eq Political_Party "Republican")}}
<p>
  Welcome, Republican! Explore our conservative policies and
  initiatives.
</p>
<img
  src="/images/republican_policies.jpg"
  alt="Republican Policies" />
{{else}}
<p>Welcome! Explore our range of policies and initiatives.</p>
<img src="/images/general_policies.jpg" alt="General Policies" />
{{/if}}
```

In this example, various personalized messages and offers are displayed based on the visitor's political party affiliation, providing fresh ideas to enhance user engagement and conversions.

## Potential Values

The following table lists the potential values for the `Political_Party` property:

| Value          | Description                                    |
| -------------- | ---------------------------------------------- |
| `Conservative` | Visitor identifies with the Conservative party |
| `Democrat`     | Visitor identifies with the Democrat party     |
| `Independence` | Visitor identifies with the Independence party |
| `Independent`  | Visitor identifies as an Independent           |
| `Liberal`      | Visitor identifies with the Liberal party      |
| `Libertarian`  | Visitor identifies with the Libertarian party  |
| `Republican`   | Visitor identifies with the Republican party   |

## Conclusion

Using the `Political_Party` property allows you to personalize your landing pages based on the visitor's political party affiliation. By leveraging this property, you can deliver content that resonates with different political affiliations, enhancing user engagement and effectiveness.

## Next Steps

Explore more features:

- [String and Number Functions](/docs/personalization/hero-string-number-functions)
- [Conditional Helpers](/docs/personalization/hero-conditional-helpers)
- [Advanced Templating Techniques](/docs/personalization/hero-advanced-techniques)

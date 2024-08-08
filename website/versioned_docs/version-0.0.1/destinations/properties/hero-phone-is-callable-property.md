---
id: phone-is-callable-property
title: Phone Is Callable Property
description: Guide to using the phone is callable property
---

# Phone Is Callable Property

## Introduction

The `phone_is_callable` property allows you to determine whether a phone number can be called. This guide provides an overview of how to use the `phone_is_callable` property to create personalized experiences and includes a list of the criteria used to determine if a phone number is callable.

## Usage

The `phone_is_callable` property can be used to display content based on whether the visitor's phone number is callable, making your communication more relevant and effective.

### Example

**Usage:**

```html
{{#if (eq phone_is_callable 1)}}
<p></p>
<img src="/images/callable.jpg" alt="Callable" />
{{else}}
<p>
  Please provide an alternative contact method to stay updated
  with our offers.
</p>
<img src="/images/not_callable.jpg" alt="Not Callable" />
{{/if}}
```

In this example, various personalized messages and offers are displayed based on whether the visitor's phone number is callable, providing fresh ideas to enhance user engagement and conversions.

## Criteria for Callable Phone Numbers

The following table lists the criteria used to determine if a phone number is callable:

| Property      | Description                                                                            |
| ------------- | -------------------------------------------------------------------------------------- |
| `success`     | Indicates if the validation was successful                                             |
| `valid`       | Indicates if the phone number is valid                                                 |
| `prepaid`     | Ensures the phone number is NOT prepaid                                                |
| `active`      | Indicates if the phone number is active                                                |
| `do_not_call` | Indicates if the phone number is on a do-not-call list (checked at time of engagement) |
| `line_type`   | The type of phone line (should not be "Toll Free")                                     |
| `country`     | The country of the phone number (should be "US")                                       |

### Callable Phone Number Values

The `phone_is_callable` property can return the following values:

| Value | Description                  |
| ----- | ---------------------------- |
| `0`   | Phone number is not callable |
| `1`   | Phone number is callable     |

## Conclusion

Using the `phone_is_callable` property allows you to personalize your landing pages based on whether the visitor's phone number is callable. By leveraging this property, you can deliver content that resonates with different contact statuses, enhancing user engagement and effectiveness.

## Next Steps

Explore more features:

- [String and Number Functions](/docs/personalization/hero-string-number-functions)
- [Conditional Helpers](/docs/personalization/hero-conditional-helpers)
- [Advanced Templating Techniques](/docs/personalization/hero-advanced-techniques)

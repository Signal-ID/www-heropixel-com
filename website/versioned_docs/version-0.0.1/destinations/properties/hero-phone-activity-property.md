---
id: phone-activity-property
title: Phone Activity Property
description: Guide to using the phone activity property
---

# Phone Activity Property

## Introduction

The `phone_activity` property allows you to tailor your content based on the frequency at which a phone number engages in legitimate user behavior online. This guide provides an overview of how to use the `phone_activity` property to create personalized experiences and includes a list of potential phone activity values.

## Usage

The `phone_activity` property can be used to display content that resonates with the visitor's phone activity level, making your communication more relevant and effective.

### Example

**Usage:**

```html
{{#if (eq phone_activity "high")}}
<p>
  Your phone number shows high activity, which indicates you are
  an active and engaged user. Enjoy our exclusive offers!
</p>
<img src="/images/high_activity.jpg" alt="High Activity" />
{{else if (eq phone_activity "medium")}}
<p>
  Your phone number shows medium activity. Check out our special
  deals tailored for you.
</p>
<img src="/images/medium_activity.jpg" alt="Medium Activity" />
{{else if (eq phone_activity "low")}}
<p>
  Your phone number shows low activity. Discover our latest
  promotions and start engaging more.
</p>
<img src="/images/low_activity.jpg" alt="Low Activity" />
{{else if (eq phone_activity "none")}}
<p>
  It looks like your phone number has no recent activity. Sign up
  for our newsletter to stay updated with our offers.
</p>
<img src="/images/no_activity.jpg" alt="No Activity" />
{{else}}
<p>
  Welcome! Explore our range of products and services tailored to
  various activity levels.
</p>
<img src="/images/general_offers.jpg" alt="General Offers" />
{{/if}}
```

In this example, various personalized messages and offers are displayed based on the visitor's phone activity level, providing fresh ideas to enhance user engagement and conversions.

## Potential Values

The following table lists the potential values for the `phone_activity` property:

| Value    | Description                                                                               |
| -------- | ----------------------------------------------------------------------------------------- |
| `high`   | High frequency of legitimate purchases, account registrations, and online user behavior   |
| `medium` | Medium frequency of legitimate purchases, account registrations, and online user behavior |
| `low`    | Low frequency of legitimate purchases, account registrations, and online user behavior    |
| `none`   | No history of legitimate purchases, account registrations, or online user behavior        |

## Conclusion

Using the `phone_activity` property allows you to personalize your landing pages based on the visitor's phone activity level. By leveraging this property, you can deliver content that resonates with different activity levels, enhancing user engagement and effectiveness.

## Next Steps

Explore more features:

- [String and Number Functions](/docs/personalization/hero-string-number-functions)
- [Conditional Helpers](/docs/personalization/hero-conditional-helpers)
- [Advanced Templating Techniques](/docs/personalization/hero-advanced-techniques)

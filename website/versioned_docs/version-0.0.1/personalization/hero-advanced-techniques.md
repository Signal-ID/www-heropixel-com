---
id: hero-advanced-techniques
title: Advanced Templating Techniques
description: Guide to advanced templating techniques in Hero Dynamic Text
---

# Advanced Templating Techniques

## Introduction

Hero Dynamic Text provides powerful templating capabilities that allow you to create highly dynamic and personalized content. This guide covers advanced techniques to help you take full advantage of these capabilities and enhance your landing pages.

## Nested Helpers

You can nest helpers within each other to create more complex conditions and logic.

**Example:**

```html
{{#if (eq country "USA")}} {{#if (gt age 21)}}
<p>
  Enjoy our premium products available in the USA for adults over
  21.
</p>
{{/if}} {{/if}}
```

This example checks if the `country` is "USA" and if the `age` is greater than 21 before displaying the message.

## Iterating with `each`

The `each` helper is useful for iterating over lists or arrays, rendering a block of code for each item.

**Example:**

```html
<ul>
  {{#each products}}
  <li>{{name}} - ${{price}}</li>
  {{/each}}
</ul>
```

If `products` is an array of product objects, this example renders a list of product names and prices.

## Block Parameters

Block parameters allow you to give alias names to each iteration of the `each` helper, making the template more readable.

**Example:**

```html
<ul>
  {{#each products as |product|}}
  <li>{{product.name}} - ${{product.price}}</li>
  {{/each}}
</ul>
```

In this example, `product` is used as an alias for each item in the `products` array, making the code more readable.

## Conditional Comparisons

Hero Dynamic Text supports comparisons directly within the `if` helper, allowing for more complex conditional logic.

**Example:**

```html
{{#if (eq subscription "premium")}}
<p>Welcome, premium member!</p>
{{else if (eq subscription "basic")}}
<p>Welcome, basic member!</p>
{{else}}
<p>Welcome, guest!</p>
{{/if}}
```

This example displays different messages based on the value of the `subscription` property.

## Inline Helpers

Inline helpers can be used to perform operations or transformations directly within the template.

**Example:**

```html
<p>Welcome, {{toUpperCase firstName}}!</p>
```

If `firstName` is "john", this example converts it to "JOHN" and displays "Welcome, JOHN!".

## Combining Helpers

You can combine multiple helpers to achieve more complex functionality within your templates.

**Example:**

```html
<p>Shipping to: {{toUpperCase city}}, {{state}}</p>
{{#if (and (eq country "USA") (gt age 18))}}
<p>You are eligible for free shipping within the USA.</p>
{{/if}}
```

This example combines the `toUpperCase` helper with conditional logic to display a message based on multiple conditions.

## Conclusion

By leveraging these advanced templating techniques, you can create highly dynamic and personalized content with Hero Dynamic Text. These techniques allow you to build complex templates that can adapt to various user attributes and behaviors, enhancing the overall user experience.

## Next Steps

Explore more features of Hero Dynamic Text:

- [String and Number Functions](/docs/personalization/hero-string-number-functions)
- [Conditional Helpers](/docs/personalization/hero-conditional-helpers)

---
id: hero-conditional-helpers
title: Conditional Helpers
description: Guide to using conditional helpers in Hero Dynamic Text
---

# Conditional Helpers

## Introduction

Hero Dynamic Text provides a range of helpers to manage conditional logic within your templates. This guide covers the most commonly used conditional helpers to help you create dynamic and personalized content.

## Conditional Helpers

### `if`

The `if` helper evaluates a condition and renders a block of code if the condition is true.

**Usage:**

```html
{{#if condition}}
<!-- Content to display if condition is true -->
{{/if}}
```

**Example:**

```html
{{#if amex_card}}
<p>Exclusive offer for American Express cardholders!</p>
{{/if}}
```

If `amex_card` is true, the message "Exclusive offer for American Express cardholders!" will be displayed.

### `unless`

The `unless` helper is the inverse of `if`. It renders a block of code if the condition is false.

**Usage:**

```html
{{#unless home_owner}}
<p>Check out our great deals for renters!</p>
{{/unless}}
```

If `home_owner` is false, the message "Check out our great deals for renters!" will be displayed.

### `else`

The `else` helper is used in conjunction with `if` and `unless` to define an alternative block of code to render when the condition is false.

**Usage:**

```html
{{#if condition}}
<!-- Content to display if condition is true -->
{{else}}
<!-- Content to display if condition is false -->
{{/if}}
```

**Example:**

```html
{{#if home_owner}}
<p>Thank you for being a homeowner! Enjoy exclusive benefits.</p>
{{else}}
<p>Check out our great deals for renters!</p>
{{/if}}
```

If `home_owner` is true, the message "Thank you for being a homeowner! Enjoy exclusive benefits." will be displayed. Otherwise, "Check out our great deals for renters!" will be shown.

### `with`

The `with` helper changes the context within a block of code to a specified object.

**Usage:**

```html
{{#with object}}
<!-- Content to display with object as the context -->
{{/with}}
```

**Example:**

```html
{{#with address}}
<p>Street: {{street}}</p>
<p>City: {{city}}</p>
<p>ZIP: {{zip}}</p>
{{/with}}
```

Assuming `address` is an object with properties `street`, `city`, and `zip`, this will display the address details.

### `each`

The `each` helper iterates over a list or array, rendering a block of code for each item.

**Usage:**

```html
{{#each array}}
<!-- Content to display for each item in the array -->
{{/each}}
```

**Example:**

```html
<ul>
  {{#each hobbies}}
  <li>{{this}}</li>
  {{/each}}
</ul>
```

If `hobbies` is an array of values, this will render each hobby as a list element.

### `#if` with Comparisons

Hero Dynamic Text supports comparisons directly within the `if` helper. You can use custom comparison helpers for greater flexibility.

#### `eq` (equal)

**Usage:**

```html
{{#if (eq value1 value2)}}
<!-- Content to display if value1 equals value2 -->
{{/if}}
```

**Example:**

```html
{{#if (eq gender "m")}}
<p>Welcome, sir!</p>
{{/if}}
```

If `gender` is "m", the message "Welcome, sir!" will be displayed.

#### `ne` (not equal)

**Usage:**

```html
{{#if (ne value1 value2)}}
<!-- Content to display if value1 does not equal value2 -->
{{/if}}
```

**Example:**

```html
{{#if (ne marital_status "single")}}
<p>Discover family-friendly offers!</p>
{{/if}}
```

If `marital_status` is not "single", the message "Discover family-friendly offers!" will be displayed.

#### `gt` (greater than)

**Usage:**

```html
{{#if (gt income_hh 100000)}}
<p>Exclusive luxury products for high-income households!</p>
{{/if}}
```

**Example:**

```html
{{#if (gt income_hh 100000)}}
<p>Exclusive luxury products for high-income households!</p>
{{/if}}
```

If `income_hh` is greater than 100,000, the message "Exclusive luxury products for high-income households!" will be displayed.

#### `lt` (less than)

**Usage:**

```html
{{#if (lt income_hh 50000)}}
<p>Special discounts for budget-conscious shoppers!</p>
{{/if}}
```

**Example:**

```html
{{#if (lt income_hh 50000)}}
<p>Special discounts for budget-conscious shoppers!</p>
{{/if}}
```

If `income_hh` is less than 50,000, the message "Special discounts for budget-conscious shoppers!" will be displayed.

#### `gte` (greater than or equal to)

**Usage:**

```html
{{#if (gte age 18)}}
<p>Explore our range of products for adults.</p>
{{/if}}
```

**Example:**

```html
{{#if (gte age 18)}}
<p>Explore our range of products for adults.</p>
{{/if}}
```

If `age` is 18 or older, the message "Explore our range of products for adults." will be displayed.

#### `lte` (less than or equal to)

**Usage:**

```html
{{#if (lte age 12)}}
<p>Check out our kids' collection!</p>
{{/if}}
```

**Example:**

```html
{{#if (lte age 12)}}
<p>Check out our kids' collection!</p>
{{/if}}
```

If `age` is 12 or younger, the message "Check out our kids' collection!" will be displayed.

## Conclusion

These conditional helpers in Hero Dynamic Text allow you to create dynamic and personalized content by evaluating various conditions within your templates. By leveraging these helpers, you can enhance user engagement and deliver more relevant experiences.

## Next Steps

Explore more features of Hero Dynamic Text:

- [String and Number Functions](/docs/personalization/hero-string-number-functions)
- [Advanced Templating Techniques](/docs/personalization/hero-advanced-techniques)

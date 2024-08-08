---
id: hero-string-number-functions
title: String and Number Functions
description: List of Handlebars string and number functions for displaying property values
---

# String and Number Functions

## Introduction

Hero Dynamic Text provides a range of helpers and functions to manipulate strings and numbers within your templates. This guide covers the most commonly used string and number functions to help you display and format property values effectively.

## String Functions

### `toUpperCase`

Converts a string to uppercase.

**Usage:**

```html
{{toUpperCase propertyName}}
```

**Example:**

```html
{{toUpperCase religion}}
```

If `religion` is "Catholic", the output will be "CATHOLIC".

### `toLowerCase`

Converts a string to lowercase.

**Usage:**

```html
{{toLowerCase propertyName}}
```

**Example:**

```html
{{toLowerCase religion}}
```

If `politicalParty` is "Conservative", the output will be "conservative".

### `capitalize`

Capitalizes the first letter of a string.

**Usage:**

```html
{{capitalize propertyName}}
```

**Example:**

```html
{{capitalize city}}
```

If `city` is "new york", the output will be "New york".

### `trim`

Removes whitespace from both ends of a string.

**Usage:**

```html
{{trim propertyName}}
```

**Example:**

```html
{{trim regionName}}
```

If `regionName` is " Texas ", the output will be "Texas".

### `substring`

Extracts a substring from a string.

**Usage:**

```html
{{substring propertyName start end}}
```

**Example:**

```html
{{substring zip 0 3}}
```

If `zip` is "83714", the output will be "837".

## Number Functions

### `add`

Adds two numbers.

**Usage:**

```html
{{add number1 number2}}
```

**Example:**

```html
{{add homePurchasedYearsAgo 5}}
```

If `homePurchasedYearsAgo` is 25, the output will be 30.

### `subtract`

Subtracts one number from another.

**Usage:**

```html
{{subtract number1 number2}}
```

**Example:**

```html
{{subtract age 5}}
```

If `age` is 25, the output will be 20.

### `multiply`

Multiplies two numbers.

**Usage:**

```html
{{multiply number1 number2}}
```

**Example:**

```html
{{multiply age 2}}
```

If `age` is 20, the output will be 40.

### `divide`

Divides one number by another.

**Usage:**

```html
{{divide number1 number2}}
```

**Example:**

```html
{{divide total 2}}
```

If `total` is 100, the output will be 50.

### `mod`

Calculates the remainder of the division of one number by another.

**Usage:**

```html
{{mod number1 number2}}
```

**Example:**

```html
{{mod total 3}}
```

If `total` is 10, the output will be 1.

### `ceil`

Rounds a number up to the nearest integer.

**Usage:**

```html
{{ceil number}}
```

**Example:**

```html
{{ceil price}}
```

If `price` is 19.99, the output will be 20.

### `floor`

Rounds a number down to the nearest integer.

**Usage:**

```html
{{floor number}}
```

**Example:**

```html
{{floor price}}
```

If `price` is 19.99, the output will be 19.

### `round`

Rounds a number to the nearest integer.

**Usage:**

```html
{{round number}}
```

**Example:**

```html
{{round price}}
```

If `price` is 19.5, the output will be 20. If `price` is 19.4, the output will be 19.

## Conclusion

These string and number functions provided by Hero Dynamic Text allow you to manipulate and display property values effectively within your templates. By leveraging these functions, you can ensure your content is formatted correctly and meets your specific requirements.

## Next Steps

Explore more advanced Handlebars features:

- [Conditional Helpers](/docs/personalization/hero-conditional-helpers)

By mastering these functions, you can create dynamic and engaging templates that enhance the user experience on your landing pages.

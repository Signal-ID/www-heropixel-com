---
id: phone-is-callable-property
title: Phone Is Callable Property
description: Guide to using the phone is callable property
---

# Phone Is Callable Property

## Introduction

The `phone_is_callable` property

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

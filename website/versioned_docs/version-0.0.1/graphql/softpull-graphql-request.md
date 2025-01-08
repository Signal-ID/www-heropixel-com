---
id: softpull-graphql-request
title: Softpull GraphQL Request
description: desc
---

# Softpull GraphQL Request

## Overview

The Softpull GraphQL Request helps track credit inquiries (softpulls) for analytics and reporting. A softpull is a credit check that does not affect your credit score. This system ensures your data is processed securely and efficiently.

### How It Works

- You submit event details via the Softpull request.
- The backend processes the data for analytics without affecting your credit score.
- Optional fields allow you to provide additional details for richer insights.

This system is designed to be user-friendly and transparent, ensuring your data is handled with care and precision.

---

## Authentication

Most mutations and queries require authentication. The `auth` object must be provided as part of the request. It includes:

### Auth Object

| Field       | Type   | Description                                                                                      |
| ----------- | ------ | ------------------------------------------------------------------------------------------------ |
| `appId`     | String | The application ID. Request this from [support@heropixel.com](mailto:support@heropixel.com).     |
| `appSecret` | String | The application secret. Request this from [support@heropixel.com](mailto:support@heropixel.com). |

---

## Operations

### Mutation: `softpull`

Tracks a softpull event for analytics.

#### Endpoint

```graphql
mutation HeroPixel($event: SoftpullEventInput!) {
  softpull(auth: {appId: "", appSecret: ""}, event: $event) {
    message
    code
    data
  }
}
```

#### Parameters

| Parameter | Type               | Required | Description                     |
| --------- | ------------------ | -------- | ------------------------------- |
| `auth`    | AuthInput          | Yes      | The authentication credentials. |
| `event`   | SoftpullEventInput | Yes      | Details of the softpull event.  |

#### `SoftpullEventInput` Fields

| Field              | Type   | Required | Description                              |
| ------------------ | ------ | -------- | ---------------------------------------- |
| `address`          | String | No       | The user's street address.               |
| `city`             | String | No       | The user's city.                         |
| `consumerId`       | String | No       | An optional identifier for the consumer. |
| `email`            | String | Yes      | The user's email address.                |
| `event`            | String | No       | The event name or type.                  |
| `firstName`        | String | Yes      | The user's first name.                   |
| `ip`               | String | Yes      | The IP address of the user.              |
| `lastName`         | String | Yes      | The user's last name.                    |
| `md5`              | String | No       | The MD5 hash of an identifier or email.  |
| `phone`            | String | Yes      | The user's phone number.                 |
| `pixelId`          | Float  | Yes      | The unique ID for the pixel.             |
| `prefiConsentDate` | String | No       | The date and time of consent.            |
| `state`            | String | No       | The user's state.                        |
| `uniqueId`         | String | No       | A unique identifier for the event.       |
| `zip`              | String | No       | The user's zip or postal code.           |

#### Example Request

```json
{
  "query": "mutation HeroPixel($event: SoftpullEventInput!) { softpull(auth: { appId: \"yourAppIdHere\", appSecret: \"yourAppSecretHere\" }, event: $event) { message code data } }",
  "variables": {
    "event": {
      "pixelId": 1,
      "email": "john@doe.com",
      "firstName": "John",
      "lastName": "Doe",
      "phone": "(202) 111-1111",
      "prefiConsentDate": "2025-01-01T00:00:00Z",
      "ip": "127.0.0.1"
    }
  }
}
```

#### Example CURL Request

```bash
curl -X POST https://sweet-colt-9750.ddn.hasura.app/graphql \
-H "Content-Type: application/json" \
-d '{
  "query": "mutation HeroPixel($event: SoftpullEventInput!) { softpull(auth: { appId: \"yourAppIdHere\", appSecret: \"yourAppSecretHere\" }, event: $event) { message code data } }",
  "variables": {
    "event": {
      "pixelId": 1,
      "email": "john@doe.com",
      "firstName": "John",
      "lastName": "Doe",
      "phone": "(202) 111-1111",
      "prefiConsentDate": "2025-01-01T00:00:00Z",
      "ip": "127.0.0.1"
    }
  }
}'
```

#### Example Response

```json
{
  "data": {
    "softpull": {
      "code": 200,
      "data": {
        "consumer_data": {
          "event": "softpull",
          "team_id": 1,
          "first_name": "John",
          "last_name": "Doe",
          "website_id": 1,
          "pixel_id": 1,
          "consumer_id": null,
          "isUniqueLead": false,
          "created_at": 1736248154,
          "timestamp": "2025-01-07 11:09:14.270",
          "prefi_consent_date": "2025-01-02T02:30:59Z",
          "prefi_consent_ip": "127.0.0.1",
          "email": "john@doe.com",
          "ip": "127.0.0.1",
          "unique_id": "69654f75d5b647478f447aef62dc2c55",
          "phone": "(202) 111-1111",
          "md5": "69654f75d5b647478f447aef62dc2c55",
          "address": null,
          "city": null,
          "zip": null,
          "state": null,
          "ledger": {
            "credits_pixel_total": 0,
            "credits_team_balance": 0,
            "credits_team_today": 0,
            "credits_pixel_today": 0
          }
        },
        "funding_offers": {
          "email": "john@doe.com",
          "phone": "(202) 111-1111",
          "first_name": "John",
          "last_name": "Doe",
          "prefi_consent_date": "2025-01-02 02:30:59",
          "prefi_consent_ip": "127.0.0.1",
          "consumer_id": "",
          "offername1": "Automatic Financing",
          "offerscore1": "818",
          "offerdetails1": "Financing Automatically and Instantly Available",
          "offerstatus1": "Approved",
          "offeramount1": "$82,000",
          "offercontingencies1": "",
          "offername2": "0% Unsecured Funding",
          "offerscore2": "818",
          "offerdetails2": "Unsecured Revolving Credit Lines - 0% for 12-21 months - To book: https://calendly.com/guidinglightamber",
          "offerstatus2": "If Fixed",
          "offeramount2": "$99,000",
          "offercontingencies2": "PayD-$11,000",
          "emails": ["john.doe@example.com", "j.doe@hotmail.com"],
          "phones": ["202-230-1111", "202-258-2222"],
          "dob": "69",
          "address1": "SOMEWHERE 200",
          "city1": "WASHINGTON",
          "state1": "DC",
          "zip1": "00000",
          "address2": "SOMEWHERE 500",
          "city2": "WASHINGTON",
          "state2": "DC",
          "zip2": "11111",
          "address3": "",
          "city3": "",
          "state3": "",
          "zip3": "",
          "address4": "1",
          "city4": "",
          "state4": "",
          "zip4": "",
          "created_at": "2025-01-03 04:07:17"
        }
      },
      "message": "Success"
    }
  }
}
```

#### Response Object

The response object for all API calls adheres to the following structure:

```typescript
export interface ApiResponseType {
  code: number;
  message: string;
  data: sdk.JSONValue;
}
```

- **`code`**: Indicates the result of the operation.
  - `200`: Successful operation.
  - `400`: Client error, such as invalid input.
  - `500`: Server error.
- **`message`**: A descriptive message about the operation's outcome.
- **`data`**: Contains the result of the operation. For errors, this will be an empty object.

---

## Error Handling

### Common Errors

| Code | Message               | Description                                 |
| ---- | --------------------- | ------------------------------------------- |
| 200  | Operation Successful  | The operation completed successfully.       |
| 400  | Invalid Input         | One or more input fields are invalid.       |
| 500  | Internal Server Error | An unexpected error occurred on the server. |

### Example Error Response

```json
{
  "code": 400,
  "message": "Invalid input provided.",
  "data": {}
}
```

```json
{
  "code": 500,
  "message": "Internal server error.",
  "data": {}
}
```

For all error responses, the `data` field will be an empty object, and the `message` field will describe the issue encountered.

---

## Contact

For additional support, contact our development team at [support@heropixel.com](mailto:support@heropixel.com).

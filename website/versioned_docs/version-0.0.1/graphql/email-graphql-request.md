---
id: email-graphql-request
title: Email Opt-in GraphQL Request
description: Capture email opt-ins with comprehensive consumer information
---

# Email Opt-in API Documentation

## Overview

The Email Opt-in API allows you to capture email opt-ins and receive comprehensive consumer information. This API is designed to process email subscriptions while providing detailed demographic, financial, and behavioral insights about your subscribers, enabling more targeted marketing and personalized customer interactions.

## How It Works

The Email Opt-in API works through the following process:

1. **Submit Email Opt-in**: You send the subscriber's email along with any additional information you have, such as name or phone number.
2. **Matching Process**: The system processes the opt-in and attempts to match the provided information against a comprehensive consumer database.
3. **Data Enrichment**: When a match is found, the API returns detailed consumer data, including demographic information, financial details, property data, and behavioral insights.
4. **Response Handling**: You can use the enriched data to better understand your subscribers, personalize marketing efforts, or enhance your CRM records with valuable consumer insights.

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

### Mutation: `email`

Captures email opt-ins and returns enriched consumer data.

#### Endpoint

```graphql
mutation Email(
  $auth: AuthRequestInput!
  $event: EmailOptinEventInput!
) {
  email(auth: $auth, event: $event) {
    code
    data
    message
  }
}
```

#### Parameters

| Parameter | Type                 | Required | Description                     |
| --------- | -------------------- | -------- | ------------------------------- |
| `auth`    | AuthRequestInput     | Yes      | The authentication credentials. |
| `event`   | EmailOptinEventInput | Yes      | Details of the email opt-in.    |

#### `EmailOptinEventInput` Fields

| Field              | Type    | Required | Description                          |
| ------------------ | ------- | -------- | ------------------------------------ |
| `email`            | String  | Yes      | Email address of the subscriber.     |
| `pixel_id`         | Int     | Yes      | The unique ID for the pixel.         |
| `domain`           | String  | Yes      | The domain where the event occurred. |
| `pusher_channel`   | String  | No       | Pusher channel identifier.           |
| `first_name`       | String  | No       | First name of the subscriber.        |
| `last_name`        | String  | No       | Last name of the subscriber.         |
| `tcpa`             | Int     | No       | TCPA compliance flag.                |
| `phone`            | String  | No       | Phone number of the subscriber.      |
| `md5`              | String  | No       | MD5 hash for identification.         |
| `hem`              | String  | No       | HEM identifier.                      |
| `request_id`       | String  | No       | Unique request identifier.           |
| `as`               | String  | No       | AS identifier.                       |
| `canonical`        | String  | No       | Canonical URL.                       |
| `city`             | String  | No       | City of the subscriber.              |
| `country`          | String  | No       | Country of the subscriber.           |
| `description`      | String  | No       | Description of the event.            |
| `ip`               | String  | No       | IP address of the subscriber.        |
| `isp`              | String  | No       | Internet Service Provider.           |
| `language`         | String  | No       | Language preference of the user.     |
| `lat`              | Float   | No       | Latitude coordinate.                 |
| `lon`              | Float   | No       | Longitude coordinate.                |
| `org`              | String  | No       | Organization.                        |
| `referrer`         | String  | No       | Referring URL.                       |
| `timestamp`        | Int     | No       | Timestamp of the event.              |
| `timezone`         | String  | No       | Timezone of the subscriber.          |
| `title`            | String  | No       | Page title.                          |
| `url`              | String  | No       | Current URL.                         |
| `sessionid`        | String  | No       | Session identifier.                  |
| `zip`              | String  | No       | ZIP/Postal code.                     |
| `age`              | String  | No       | Age of the subscriber.               |
| `gender`           | String  | No       | Gender of the subscriber.            |
| `sha1`             | String  | No       | SHA-1 hash.                          |
| `sha2`             | String  | No       | SHA-2 hash.                          |
| `nonId`            | String  | No       | Non-ID identifier.                   |
| `utm_source`       | String  | No       | UTM source parameter.                |
| `utm_medium`       | String  | No       | UTM medium parameter.                |
| `utm_campaign`     | String  | No       | UTM campaign parameter.              |
| `utm_term`         | String  | No       | UTM term parameter.                  |
| `utm_content`      | String  | No       | UTM content parameter.               |
| `os`               | String  | No       | Operating system.                    |
| `fingerprint`      | String  | No       | Browser fingerprint.                 |
| `user_agent`       | String  | No       | User agent string.                   |
| `browser`          | String  | No       | Browser name and version.            |
| `device_type`      | String  | No       | Type of device.                      |
| `resolution`       | String  | No       | Screen resolution.                   |
| `event`            | String  | No       | Event type.                          |
| `region_name`      | String  | No       | Region/state name.                   |
| `country_code`     | String  | No       | Country code.                        |
| `unique_id`        | String  | No       | Unique identifier.                   |
| `is_new_session`   | Boolean | No       | Whether this is a new session.       |
| `is_eu`            | Boolean | No       | Whether the user is in the EU.       |
| `referring_domain` | String  | No       | Referring domain.                    |
| `inner_resolution` | String  | No       | Inner window resolution.             |
| `custom_one`       | String  | No       | Custom field one.                    |
| `custom_two`       | String  | No       | Custom field two.                    |
| `custom_three`     | String  | No       | Custom field three.                  |
| `custom_four`      | String  | No       | Custom field four.                   |
| `custom_five`      | String  | No       | Custom field five.                   |

#### Example Request

```json
{
  "query": "mutation Email($auth: AuthRequestInput!, $event: EmailOptinEventInput!) { email(auth: $auth, event: $event) { code data message } }",
  "variables": {
    "auth": {
      "appId": "yourAppIdHere",
      "appSecret": "yourAppSecretHere"
    },
    "event": {
      "email": "user@example.com",
      "pixel_id": 123,
      "domain": "example.com",
      "first_name": "John",
      "last_name": "Smith"
    }
  }
}
```

#### Example CURL Request

```bash
curl -X POST https://sweet-colt-9750.ddn.hasura.app/graphql \
-H "Content-Type: application/json" \
-d '{
  "query": "mutation Email($auth: AuthRequestInput!, $event: EmailOptinEventInput!) { email(auth: $auth, event: $event) { code data message } }",
  "variables": {
    "auth": {
      "appId": "yourAppIdHere",
      "appSecret": "yourAppSecretHere"
    },
    "event": {
      "email": "user@example.com",
      "pixel_id": 123,
      "domain": "example.com",
      "first_name": "John",
      "last_name": "Smith"
    }
  }
}'
```

#### Example Response

```json
{
  "data": {
    "email": {
      "code": 200,
      "data": {
        "consumer_data": {
          "pusher_channel": null,
          "event": "email_optin",
          "team_id": 1,
          "first_name": "John",
          "last_name": "Smith",
          "website_id": 123,
          "pixel_id": 123,
          "domain": "example.com",
          "canonical": "undefined",
          "consumer_id": "10000001",
          "isUniqueLead": false,
          "created_at": 1716979200,
          "timestamp": "2024-05-29 12:00:00.000",
          "tcpa": null,
          "hem": "",
          "sha2": "",
          "email": "user@example.com",
          "country_code": "",
          "is_eu": false,
          "lat": 0,
          "lon": 0,
          "timezone": "",
          "language": "",
          "request_id": null,
          "description": null,
          "ip": "",
          "url": "undefined",
          "nonId": null,
          "is_new_session": null,
          "as": null,
          "title": null,
          "sessionid": null,
          "fingerprint": null,
          "unique_id": "a1b2c3d4e5f6g7h8i9j0",
          "org": "",
          "isp": "",
          "referrer": "",
          "referring_domain": "",
          "utm_source": "",
          "utm_medium": "",
          "utm_campaign": "",
          "utm_term": "",
          "utm_content": "",
          "os": "",
          "user_agent": "",
          "_unmapped_data": "",
          "browser": "",
          "device_type": "",
          "resolution": "",
          "inner_resolution": "",
          "custom_one": "",
          "custom_two": "",
          "custom_three": "",
          "custom_four": "",
          "custom_five": "",
          "phone": "",
          "phone_formatted": "",
          "phone_voip": "",
          "phone_carrier": "",
          "phone_type": "",
          "phone_dialing_code": 0,
          "phone_do_not_call": false,
          "phone_activity": "",
          "phone_is_callable": false,
          "phone_can_receive_texts": false,
          "md5": "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6",
          "sha1": "",
          "address": "123 Main St",
          "city": "Washington",
          "region_name": "DC",
          "zip": "20001",
          "country": "United States",
          "age": 45,
          "gender": "Male",
          "multilingual": false,
          "marital_status": "Married",
          "ethnic_group": "",
          "generation": "Generation X",
          "political_party": "Independent",
          "religion": "Christian",
          "education": "College Graduate",
          "occupation_detail": "Professional",
          "income_hh": "$100,000 - $150,000",
          "net_worth_hh": "$500,000 - $999,999",
          "income_levels": "",
          "credit_range": "750-799",
          "new_credit_offered_hh": false,
          "amex_card": false,
          "bank_card": false,
          "owns_investments": false,
          "premium_amex_card": false,
          "premium_card": false,
          "owns_stocks_and_bonds": false,
          "political_contributor": false,
          "premium_income_hh": "",
          "income_midpts_hh": 0,
          "home_owner": "Home Owner",
          "dwelling_type": "Single Family",
          "home_heat_type": "",
          "home_price": 350000,
          "home_purchased_years_ago": 5,
          "home_value": 400000,
          "mortgage_age": 5,
          "mortgage_amount": 280000,
          "mortgage_loan_type": "Conventional",
          "mortgage_refi_age": 2,
          "mortgage_refi_amount": "250000",
          "mortgage_refi_type": "Fixed",
          "urbanicity": "Urban",
          "child_aged_0_3_hh": 0,
          "child_aged_4_6_hh": 1,
          "child_aged_7_9_hh": 1,
          "child_aged_10_12_hh": 0,
          "child_aged_13_18_hh": 0,
          "veteran_hh": 0,
          "num_persons_hh": 4,
          "num_adults_hh": 2,
          "num_children_hh": 2,
          "number_of_vehicles_in_hh": 2,
          "ledger": {
            "credits_pixel_total": 500,
            "credits_team_balance": 10000,
            "credits_team_today": 1,
            "credits_pixel_today": 1
          }
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

For all error responses, the `data` field will be an empty object, and the `message` field will describe the issue encountered.

---

## Contact

For additional support or questions about the Email API, contact our development team at [support@heropixel.com](mailto:support@heropixel.com).

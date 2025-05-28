---
id: basic-graphql-request
title: Basic GraphQL Request
description: desc
---

# GraphQL API Documentation

## Overview

The GraphQL API provides a structured interface to interact with the backend. It enables querying, and mutating data. Below is the documentation for the available operations.

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

### Mutation: `pageview`

Tracks a pageview event for analytics.

#### Endpoint

```graphql
mutation Pageview(
  $auth: AuthRequestInput!
  $event: PagviewEventInput!
) {
  pageview(auth: $auth, event: $event) {
    message
    code
    data
  }
}
```

#### Parameters

| Parameter | Type              | Required | Description                     |
| --------- | ----------------- | -------- | ------------------------------- |
| `auth`    | AuthInput         | Yes      | The authentication credentials. |
| `event`   | PagviewEventInput | Yes      | Details of the pageview event.  |

#### `PagviewEventInput` Fields

| Field              | Type    | Required | Description                          |
| ------------------ | ------- | -------- | ------------------------------------ |
| `pixel_id`         | Int     | Yes      | The unique ID for the pixel.         |
| `md5`              | String  | No       | MD5 hash for identification.         |
| `domain`           | String  | No       | The domain where the event occurred. |
| `pusher_channel`   | String  | No       | Pusher channel identifier.           |
| `hem`              | String  | No       | HEM identifier.                      |
| `request_id`       | String  | No       | Unique request identifier.           |
| `as`               | String  | No       | AS identifier.                       |
| `canonical`        | String  | No       | Canonical URL.                       |
| `city`             | String  | No       | City of the user.                    |
| `country`          | String  | No       | Country of the user.                 |
| `description`      | String  | No       | Description of the event.            |
| `email`            | String  | No       | Email address of the user.           |
| `phone`            | String  | No       | Phone number of the user.            |
| `tcpa`             | Int     | No       | TCPA compliance flag.                |
| `ip`               | String  | No       | IP address of the user.              |
| `isp`              | String  | No       | Internet Service Provider.           |
| `language`         | String  | No       | Language preference of the user.     |
| `lat`              | Float   | No       | Latitude coordinate.                 |
| `lon`              | Float   | No       | Longitude coordinate.                |
| `org`              | String  | No       | Organization.                        |
| `referrer`         | String  | No       | Referring URL.                       |
| `timestamp`        | Int     | No       | Timestamp of the event.              |
| `timezone`         | String  | No       | Timezone of the user.                |
| `title`            | String  | No       | Page title.                          |
| `url`              | String  | No       | Current URL.                         |
| `sessionid`        | String  | No       | Session identifier.                  |
| `zip`              | String  | No       | ZIP/Postal code.                     |
| `age`              | String  | No       | Age of the user.                     |
| `gender`           | String  | No       | Gender of the user.                  |
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
  "query": "mutation Pageview($auth: AuthRequestInput!, $event: PagviewEventInput!) { pageview(auth: $auth, event: $event) { code data message } }",
  "variables": {
    "auth": {
      "appId": "yourAppIdHere",
      "appSecret": "yourAppSecretHere"
    },
    "event": {
      "md5": "",
      "pixel_id": 1,
      "domain": "example.com"
    }
  }
}
```

#### Example CURL Request

```bash
curl -X POST https://sweet-colt-9750.ddn.hasura.app/graphql \
-H "Content-Type: application/json" \
-d '{
  "query": "mutation Pageview($auth: AuthRequestInput!, $event: PagviewEventInput!) { pageview(auth: $auth, event: $event) { code data message } }",
  "variables": {
    "auth": {
      "appId": "yourAppIdHere",
      "appSecret": "yourAppSecretHere"
    },
    "event": {
      "md5": "",
      "pixel_id": 1,
      "domain": "example.com"
    }
  }
}'
```

#### Example Response

```json
{
  "data": {
    "pageview": {
      "code": 200,
      "data": {
        "consumer_data": {
          "pusher_channel": null,
          "event": "pageview",
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
          "tcpa": 0,
          "hem": "",
          "sha2": "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6",
          "email": "user@example.com",
          "country_code": "US",
          "is_eu": false,
          "lat": 38.9,
          "lon": -77.0,
          "timezone": "America/New_York",
          "language": "en-US",
          "request_id": null,
          "description": null,
          "ip": "192.168.1.1",
          "url": "undefined",
          "nonId": null,
          "is_new_session": null,
          "as": null,
          "title": null,
          "sessionid": null,
          "fingerprint": "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6",
          "unique_id": "a1b2c3d4e5f6g7h8i9j0",
          "org": "Example Organization",
          "isp": "Example ISP",
          "referrer": "https://www.google.com",
          "referring_domain": "google.com",
          "utm_source": "search",
          "utm_medium": "organic",
          "utm_campaign": "brand",
          "utm_term": "example term",
          "utm_content": "example content",
          "os": "Windows 10",
          "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
          "_unmapped_data": "",
          "browser": "Chrome 91.0.4472.124",
          "device_type": "desktop",
          "resolution": "1920x1080",
          "inner_resolution": "1920x950",
          "custom_one": "",
          "custom_two": "",
          "custom_three": "",
          "custom_four": "",
          "custom_five": "",
          "phone": "2025551234",
          "phone_formatted": "(202) 555-1234",
          "phone_voip": "0",
          "phone_carrier": "Example Carrier",
          "phone_type": "Wireless",
          "phone_dialing_code": 1,
          "phone_do_not_call": false,
          "phone_activity": "N/A",
          "phone_is_callable": true,
          "phone_can_receive_texts": true,
          "md5": "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6",
          "sha1": "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6",
          "address": "123 Main St",
          "city": "Washington",
          "region_name": "DC",
          "zip": "20001",
          "country": "United States",
          "age": 45,
          "gender": "Male",
          "multilingual": false,
          "marital_status": "Married",
          "ethnic_group": "White",
          "generation": "Generation X",
          "political_party": "Independent",
          "religion": "Christian",
          "education": "College Graduate",
          "occupation_detail": "Professional",
          "income_hh": "$100,000 - $150,000",
          "net_worth_hh": "$500,000 - $999,999",
          "income_levels": "0",
          "credit_range": "750-799",
          "new_credit_offered_hh": false,
          "amex_card": true,
          "bank_card": true,
          "owns_investments": true,
          "premium_amex_card": false,
          "premium_card": false,
          "owns_stocks_and_bonds": true,
          "political_contributor": false,
          "premium_income_hh": "",
          "income_midpts_hh": 125000,
          "home_owner": "Home Owner",
          "dwelling_type": "Single Family",
          "home_heat_type": "Gas",
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
          "aerobics": 1,
          "antiques": 0,
          "arts_and_crafts": 0,
          "auto_racing_affinity": 0,
          "baseball": 1,
          "basketball": 1,
          "bird_watching": 0,
          "boating_sailing": 1,
          "camping_hiking": 1,
          "cars_interest": 0,
          "cat_owner": 1,
          "charity_interest": 1,
          "cigars": 0,
          "coins": 0,
          "cooking": 1,
          "dieting": 0,
          "diy": 1,
          "do_it_yourself_affinity": 1,
          "dog_affinity": 1,
          "dog_owner": 1,
          "fine_arts_collector": 0,
          "fishing": 1,
          "fitness": 1,
          "football": 1,
          "gambling": 0,
          "gambling_affinity": 0,
          "gardening": 1,
          "golf": 0,
          "golf_affinity": 0,
          "gourmet_affinity": 1,
          "healthy_living": 1,
          "healthy_living_interest": 1,
          "hockey": 0,
          "home_decorating_affinity": 1,
          "home_improvement": 1,
          "home_study": 0,
          "hunting": 0,
          "knitting_quilting_sewing": 0,
          "likely_charitable_donor": 1,
          "luxury_life": 0,
          "magazine_subscriber": 0,
          "motor_racing": 0,
          "motorcycles": 0,
          "motorcycles_affinity": 0,
          "movies": 1,
          "music": 1,
          "nascar": 0,
          "outdoors": 1,
          "pet_owner": 1,
          "pets_affinity": 1,
          "photography": 1,
          "running": 1,
          "rv": 0,
          "scuba": 0,
          "self_improvement": 1,
          "snow_skiing": 0,
          "soccer": 1,
          "soho_business": 0,
          "sports_memoribilia_collector": 0,
          "stamps": 0,
          "tennis": 1,
          "travel_cruise_affinity": 0,
          "travel_cruises": 0,
          "travel_foreign": 1,
          "travel_vacation": 1,
          "truck_owner": 0,
          "trucks_affinity": 0,
          "walking": 1,
          "woodworking": 0,
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

For additional support, contact our development team at [support@heropixel.com](mailto:support@heropixel.com).

---
id: enrichment-graphql-request
title: Enrichment GraphQL Request
description: Enrich lead data with comprehensive consumer information
---

# Enrichment API Documentation

## Overview

The Enrichment API allows you to enhance your existing lead data with comprehensive consumer information. This API is designed to provide detailed demographic, financial, and behavioral insights about your leads, enabling more targeted marketing and personalized customer interactions.

## How It Works

The Enrichment API works through the following process:

1. **Submit Lead Information**: You send basic information about a lead, such as email, phone number, or name, to the API.
2. **Matching Process**: The system attempts to match the provided information against a comprehensive consumer database.
3. **Data Enrichment**: When a match is found, the API returns detailed consumer data, including demographic information, financial details, property data, and behavioral insights.
4. **Response Handling**: You can use the enriched data to better understand your leads, personalize marketing efforts, or enhance your CRM records with valuable consumer insights.

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

### Mutation: `enrichment`

Enriches lead information with comprehensive consumer data.

#### Endpoint

```graphql
mutation Enrichment(
  $auth: AuthRequestInput!
  $event: EnrichmentEventInput!
) {
  enrichment(auth: $auth, event: $event) {
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
| `event`   | EnrichmentEventInput | Yes      | Details of the lead to enrich.  |

#### `EnrichmentEventInput` Fields

| Field        | Type   | Required | Description                  |
| ------------ | ------ | -------- | ---------------------------- |
| `pixelId`    | Int    | Yes      | The unique ID for the pixel. |
| `email`      | String | No       | Email address of the user.   |
| `phone`      | String | No       | Phone number of the user.    |
| `md5`        | String | No       | MD5 hash for identification. |
| `first_name` | String | No       | First name of the lead.      |
| `last_name`  | String | No       | Last name of the lead.       |

#### Example Request

```json
{
  "query": "mutation Enrichment($auth: AuthRequestInput!, $event: EnrichmentEventInput!) { enrichment(auth: $auth, event: $event) { code data message } }",
  "variables": {
    "auth": {
      "appId": "yourAppIdHere",
      "appSecret": "yourAppSecretHere"
    },
    "event": {
      "pixelId": 123,
      "email": "user@example.com",
      "phone": "2025559876",
      "md5": "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6"
    }
  }
}
```

#### Example CURL Request

```bash
curl -X POST https://sweet-colt-9750.ddn.hasura.app/graphql \
-H "Content-Type: application/json" \
-d '{
  "query": "mutation Enrichment($auth: AuthRequestInput!, $event: EnrichmentEventInput!) { enrichment(auth: $auth, event: $event) { code data message } }",
  "variables": {
    "auth": {
      "appId": "yourAppIdHere",
      "appSecret": "yourAppSecretHere"
    },
    "event": {
      "pixelId": 123,
      "email": "user@example.com",
      "phone": "2025559876",
      "md5": "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6"
    }
  }
}'
```

#### Example Response

```json
{
  "data": {
    "enrichment": {
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
          "domain": null,
          "canonical": "undefined",
          "consumer_id": "10000001",
          "isUniqueLead": false,
          "created_at": 1672531200,
          "timestamp": "2023-01-01 12:00:00.000",
          "tcpa": 0,
          "hem": "",
          "sha2": "0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef",
          "email": "user@example.com",
          "country_code": "US",
          "is_eu": false,
          "lat": 38.9,
          "lon": -77.0,
          "timezone": "America/New_York",
          "language": "en-US",
          "request_id": null,
          "description": null,
          "ip": "192.0.2.1",
          "url": "undefined",
          "nonId": null,
          "is_new_session": null,
          "as": null,
          "title": null,
          "sessionid": null,
          "fingerprint": "0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef",
          "unique_id": "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6",
          "org": "Example Organization",
          "isp": "Example ISP",
          "referrer": "",
          "referring_domain": "",
          "utm_source": "",
          "utm_medium": "",
          "utm_campaign": "",
          "utm_term": "",
          "utm_content": "",
          "os": "Windows 10",
          "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.0.0 Safari/537.36",
          "_unmapped_data": "",
          "browser": "Chrome 100.0.0.0",
          "device_type": "desktop",
          "resolution": "1920x1080",
          "inner_resolution": "1920x950",
          "custom_one": "",
          "custom_two": "",
          "custom_three": "",
          "custom_four": "",
          "custom_five": "",
          "phone": "2025559876",
          "phone_formatted": "(202) 555-9876",
          "phone_voip": "0",
          "phone_carrier": "Example Carrier",
          "phone_type": "Wireless",
          "phone_dialing_code": 1,
          "phone_do_not_call": false,
          "phone_activity": "N/A",
          "phone_is_callable": true,
          "phone_can_receive_texts": true,
          "md5": "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6",
          "sha1": "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6a1b2c3d4",
          "address": "123 Main St",
          "city": "Washington",
          "region_name": "DC",
          "zip": "20001",
          "country": null,
        "emails": [
          {
            "id": 10000001,
            "address_id": 20000001,
            "household_id": 3000001,
            "domain": "example.com",
            "email": "user@example.com",
            "emailid": 40000001,
            "emailoptin": true,
            "emailqualitylevel": 4,
            "ip": "192.0.2.1",
            "md5_uc": "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6",
            "md5": "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6",
            "rankorder": 1,
            "registerdate": "2022-01-01T00:00:00.000Z",
            "sha1_uc": "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6a1b2c3d4",
            "sha1": "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6a1b2c3d4",
            "sha256_uc": "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6",
            "sha256": "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6",
            "updatedate": "2023-01-01T00:00:00.000Z",
            "url": "example.com"
          },
          "marital_status": "Married",
          "education": "Bachelor's Degree",
          "occupation": "Software Engineer",
          "income_range": "$100,000 - $150,000",
          "credit_score_range": "700-749",
          "homeowner_status": "Owner",
          "property_value": "$450,000",
          "property_type": "Single Family Home",
          "length_of_residence": "5 years",
          "household_size": 3,
          "presence_of_children": true,
          "interests": [
            "Technology",
            "Travel",
            "Outdoor Activities"
          ],
          "purchase_behavior": [
            "Online Shopper",
            "Premium Brand Buyer",
            "Early Adopter"
          ],
          "lifestyle_indicators": [
            "Health Conscious",
            "Tech Savvy",
            "Environmentally Aware"
          ],
          "political_affiliation": "Independent",
          "charitable_donations": true,
          "investment_activity": "Active",
          "vehicle_ownership": [
            {
              "make": "Tesla",
              "model": "Model 3",
              "year": 2022
            }
          ],
          "social_media_presence": [
            "LinkedIn",
            "Twitter",
            "Instagram"
          ],
          "digital_behavior": {
            "devices_used": [
              "Smartphone",
              "Laptop",
              "Tablet"
            ],
            "online_shopping_frequency": "Weekly",
            "streaming_services": [
              "Netflix",
              "Spotify",
              "Disney+"
            ]
          },
          "risk_factors": {
            "financial_stress": "Low",
            "credit_risk": "Low",
            "identity_theft_risk": "Low"
          }
        },
        "message": "Success"
      }
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

For additional support or questions about the Super Leads API, contact our development team at [support@heropixel.com](mailto:support@heropixel.com).

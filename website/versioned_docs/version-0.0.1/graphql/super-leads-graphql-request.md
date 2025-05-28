---
id: super-leads-graphql-request
title: Super Leads GraphQL Request
description: desc
---

# Super Leads API Documentation

## Overview

The Super Leads GraphQL API provides a powerful interface for submitting lead information and receiving enriched consumer data in return. This API enables businesses to identify and qualify leads by matching submitted information against a comprehensive consumer database, returning detailed demographic, financial, property, and behavioral data when matches are found.

## How It Works

1. **Submit Lead Information**: Send basic lead data such as name, email, phone number, or hashed identifiers to the API.

2. **Matching Process**: The system attempts to match the provided information against our extensive consumer database using deterministic and probabilistic matching techniques.

3. **Data Enrichment**: When a match is found, the API returns comprehensive consumer data including:

   - Personal identifiable information (PII)
   - Email addresses with quality scores
   - Phone numbers with carrier information
   - Demographic details (age, gender, education, etc.)
   - Financial information (income, credit range, etc.)
   - Property data (home value, mortgage details, etc.)
   - Behavioral insights and interests

4. **Response Handling**: Process the returned data to qualify leads, personalize marketing efforts, or enhance your CRM records.

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

### Mutation: `apiLeadsSuper`

Sends lead information to the Super Leads API.

#### Endpoint

```graphql
mutation ApiLeadsSuper(
  $auth: AuthRequestInput!
  $event: ApiLeadsEventInput!
) {
  apiLeadsSuper(auth: $auth, event: $event) {
    code
    data
    message
  }
}
```

#### Parameters

| Parameter | Type               | Required | Description                     |
| --------- | ------------------ | -------- | ------------------------------- |
| `auth`    | AuthRequestInput   | Yes      | The authentication credentials. |
| `event`   | ApiLeadsEventInput | Yes      | Details of the lead event.      |

#### `ApiLeadsEventInput` Fields

| Field               | Type    | Required | Description                          |
| ------------------- | ------- | -------- | ------------------------------------ |
| `pixel_id`          | Int     | Yes      | The unique ID for the pixel.         |
| `domain`            | String  | No       | The domain where the event occurred. |
| `first_name`        | String  | No       | First name of the lead.              |
| `last_name`         | String  | No       | Last name of the lead.               |
| `strict_name_match` | Boolean | No       | Whether to strictly match the name.  |
| `md5`               | String  | No       | MD5 hash.                            |
| `email_md5`         | String  | No       | MD5 hash of the email address.       |
| `email_sha256`      | String  | No       | SHA-256 hash of the email address.   |
| `email`             | String  | No       | Email address of the user.           |
| `phone_md5`         | String  | No       | MD5 hash of the phone number.        |
| `phone_sha256`      | String  | No       | SHA-256 hash of the phone number.    |
| `phone`             | String  | No       | Phone number of the user.            |
| `pusher_channel`    | String  | No       | Pusher channel identifier.           |
| `tcpa`              | Int     | No       | TCPA compliance flag.                |
| `hem`               | String  | No       | HEM identifier.                      |
| `request_id`        | String  | No       | Unique request identifier.           |
| `as`                | String  | No       | AS identifier.                       |
| `canonical`         | String  | No       | Canonical URL.                       |
| `city`              | String  | No       | City of the user.                    |
| `country`           | String  | No       | Country of the user.                 |
| `description`       | String  | No       | Description of the event.            |
| `ip`                | String  | No       | IP address of the user.              |
| `isp`               | String  | No       | Internet Service Provider.           |
| `language`          | String  | No       | Language preference of the user.     |
| `lat`               | Float   | No       | Latitude coordinate.                 |
| `lon`               | Float   | No       | Longitude coordinate.                |
| `org`               | String  | No       | Organization.                        |
| `referrer`          | String  | No       | Referring URL.                       |
| `timestamp`         | Int     | No       | Timestamp of the event.              |
| `timezone`          | String  | No       | Timezone of the user.                |
| `title`             | String  | No       | Page title.                          |
| `url`               | String  | No       | Current URL.                         |
| `sessionid`         | String  | No       | Session identifier.                  |
| `zip`               | String  | No       | ZIP/Postal code.                     |
| `age`               | String  | No       | Age of the user.                     |
| `gender`            | String  | No       | Gender of the user.                  |
| `sha1`              | String  | No       | SHA-1 hash.                          |
| `sha2`              | String  | No       | SHA-2 hash.                          |
| `nonId`             | String  | No       | Non-ID identifier.                   |
| `utm_source`        | String  | No       | UTM source parameter.                |
| `utm_medium`        | String  | No       | UTM medium parameter.                |
| `utm_campaign`      | String  | No       | UTM campaign parameter.              |
| `utm_term`          | String  | No       | UTM term parameter.                  |
| `utm_content`       | String  | No       | UTM content parameter.               |
| `os`                | String  | No       | Operating system.                    |
| `fingerprint`       | String  | No       | Browser fingerprint.                 |
| `user_agent`        | String  | No       | User agent string.                   |
| `browser`           | String  | No       | Browser name and version.            |
| `device_type`       | String  | No       | Type of device.                      |
| `resolution`        | String  | No       | Screen resolution.                   |
| `event`             | String  | No       | Event type.                          |
| `region_name`       | String  | No       | Region/state name.                   |
| `country_code`      | String  | No       | Country code.                        |
| `unique_id`         | String  | No       | Unique identifier.                   |
| `is_new_session`    | Boolean | No       | Whether this is a new session.       |
| `is_eu`             | Boolean | No       | Whether the user is in the EU.       |
| `referring_domain`  | String  | No       | Referring domain.                    |
| `inner_resolution`  | String  | No       | Inner window resolution.             |
| `custom_one`        | String  | No       | Custom field one.                    |
| `custom_two`        | String  | No       | Custom field two.                    |
| `custom_three`      | String  | No       | Custom field three.                  |
| `custom_four`       | String  | No       | Custom field four.                   |
| `custom_five`       | String  | No       | Custom field five.                   |

#### Example Request

```json
{
  "query": "mutation ApiLeadsSuper($auth: AuthRequestInput!, $event: ApiLeadsEventInput!) { apiLeadsSuper(auth: { appId: \"yourAppIdHere\", appSecret: \"yourAppSecretHere\" }, event: $event) { message code data } }",
  "variables": {
    "auth": {
      "appId": "yourAppIdHere",
      "appSecret": "yourAppSecretHere"
    },
    "event": {
      "pixel_id": 123,
      "domain": "example.com",
      "email": "user@example.com",
      "first_name": "John",
      "last_name": "Doe"
    }
  }
}
```

#### Example CURL Request

```bash
curl -X POST https://sweet-colt-9750.ddn.hasura.app/graphql \
-H "Content-Type: application/json" \
-d '{
  "query": "mutation ApiLeadsSuper($auth: AuthRequestInput!, $event: ApiLeadsEventInput!) { apiLeadsSuper(auth: { appId: \"yourAppIdHere\", appSecret: \"yourAppSecretHere\" }, event: $event) { message code data } }",
  "variables": {
    "auth": {
      "appId": "yourAppIdHere",
      "appSecret": "yourAppSecretHere"
    },
    "event": {
      "pixel_id": 123,
      "domain": "example.com",
      "email": "user@example.com",
      "first_name": "John",
      "last_name": "Doe"
    }
  }
}'
```

#### Example Response

```json
{
  "data": {
    "apiLeadsSuper": {
      "code": 200,
      "data": {
        "consumer_id": 405343959,
        "pii": {
          "id": 405343959,
          "address_id": 36347261,
          "household_id": 3416591,
          "first_name": "kristen",
          "last_name": "hanacek",
          "name_suffix": "",
          "address": "27 Halehaven Dr",
          "city": "Simpsonville",
          "state": "SC",
          "zip": "29681",
          "zip4": "4856",
          "dpbc": "272",
          "carrier_route": "R025",
          "fips_state_code": "45",
          "fips_county_code": "045",
          "county_name": "Greenville",
          "latitude": 34.828075,
          "longitude": -82.22206,
          "address_type": "S",
          "cbsa": "24860",
          "census_tract": "002814",
          "census_block_group": "1",
          "census_block": "1003",
          "gender": "F",
          "addr_primary": "27 Halehaven Dr",
          "addr_pre": "",
          "addr_street": "Halehaven",
          "addr_post": "",
          "addr_suffix": "Dr",
          "addr_abrev": "Simpsonville",
          "addr_secy": "",
          "prop_type": "",
          "hasemail": 1,
          "hasphone": 1,
          "dpv": "272",
          "dma": 567,
          "msa": 3160,
          "scf": "296",
          "congressional_district": "04",
          "urbanicity_code": "S",
          "nationalconsumerdatabase": "1"
        },
        "emails": [
          {
            "id": 405343959,
            "address_id": 36347261,
            "household_id": 3416591,
            "domain": "thecallfamily",
            "email": "landon@thecallfamily.com",
            "emailid": 484862434,
            "emailoptin": true,
            "emailqualitylevel": 4,
            "ip": "208.110.136.131",
            "md5_uc": "574b16c61deb1fffbb2d98996075b1f1",
            "md5": "437172010ab62415515924068f437d44",
            "rankorder": 8,
            "registerdate": "2017-06-06T00:00:00.000Z",
            "sha1_uc": "72b4a9c060dd51cb2b5917f699ebf1b8d4d3f52a",
            "sha1": "4db80d75c91a8db267e4532ed96cc1e4fd7dd434",
            "sha256_uc": "4e05228d28d81173a8e43c3221e2f2543114cbbd3cae750952e31e620e26660a",
            "sha256": "3a4e878edafb581eba01164da83b95eee02f3d28596cfce25bf57de6f26b8bb7",
            "updatedate": "2020-04-02T00:00:00.000Z",
            "url": "badcreditquoteking.com"
          },
          {
            "id": 405343959,
            "address_id": 36347261,
            "household_id": 3416591,
            "domain": "netscape",
            "email": "kristennelli@netscape.net",
            "emailid": 993149039,
            "emailoptin": true,
            "emailqualitylevel": 1,
            "ip": "128.92.87.186",
            "md5_uc": "6acfa5f85f568300ee5356357c8326bf",
            "md5": "69416e0180d8f1976c3c1078f7fab095",
            "rankorder": 5,
            "registerdate": "2018-01-25T00:00:00.000Z",
            "sha1_uc": "9c4240937b07474dae589b5832c9defae81e768a",
            "sha1": "6e0c649f67f6d52ac885b4b632dac6a7d979dda4",
            "sha256_uc": "7bc8149903fb38d32bc96de806061d6ec79baedca1f8d6e18c73f0017a849f38",
            "sha256": "e959e9354fbdeb44107bb58cdfac1c2d2f68aace362e4dea1a35348492c2173a",
            "updatedate": "2024-04-24T00:00:00.000Z",
            "url": "itsonus.net"
          }
        ],
        "phones": [
          {
            "id": "405343959",
            "address_id": "36347261",
            "household_id": "3416591",
            "phone": "8648725726",
            "dnc": "1",
            "mobilecarrier": "New Cingular Wireless",
            "addeddate": "2024-09-27",
            "updatedate": "2024-09-28",
            "lastseendate": "2024-02-06",
            "phonetype": "0",
            "workphone": "",
            "rankorder": "2",
            "phonequalitylevel": "2"
          },
          {
            "id": "405343959",
            "address_id": "36347261",
            "household_id": "3416591",
            "phone": "8649052150",
            "dnc": "",
            "mobilecarrier": "New Cingular Wireless",
            "addeddate": "2024-07-30",
            "updatedate": "2024-09-28",
            "lastseendate": "2024-07-15",
            "phonetype": "0",
            "workphone": "",
            "rankorder": "1",
            "phonequalitylevel": "0"
          }
        ],
        "data": {
          "id": 405343959,
          "language": "English",
          "nationalconsumerdatabase": 1,
          "age": 56,
          "gender": "Female",
          "multilingual": 0,
          "marital_status": "Married",
          "ethnic_group": "White",
          "generation": "2. Generation X (1961-1981)",
          "political_party": "",
          "religion": "Catholic",
          "education": "Completed College",
          "education_ordinal": 5,
          "white_collar": 0,
          "blue_collar": 0,
          "birth_year": 1968
        },
        "financial": {
          "id": "405343959",
          "household_id": "3416591",
          "address_id": "36347261",
          "income_hh": "P. $250-$299k",
          "discretionary_income": "K. $100,000-$149,999",
          "financial_power": "9",
          "credit_range": "C. 700-749",
          "mortgage_amount": 115000,
          "mortgage_refi_amount": "107000",
          "mortgage_refi_type": "Fixed",
          "automotive_loan_intent": "1",
          "bank_card_intent": "1",
          "card_offer_response": "1",
          "mortgage_offer_response": "1"
        },
        "property": {
          "propertyid": 7842156,
          "addressid": 36347261,
          "id": 405343959,
          "first": "kristen",
          "last": "hanacek",
          "id_source": 29,
          "consumer": 1,
          "business": 0,
          "std_address": "27 Halehaven Dr",
          "std_city": "Simpsonville",
          "std_state": "SC",
          "std_zip": "29681",
          "std_zip4": "4856",
          "carrier_route": "R025",
          "dpv_point_code": "272",
          "county_code": "045",
          "county_name": "Greenville",
          "subdivision": "Halehaven",
          "lat": 34.828075,
          "lon": -82.22206,
          "apn": "0539030100901",
          "owner_occupied": 1,
          "prop_type": "SFR",
          "mobile_home": 0,
          "bldg_style": "Ranch",
          "stories_nmbr": 1,
          "con_type": "Frame",
          "ext_type": "Brick",
          "markval": 405400,
          "landval": 65000,
          "imprval": 340400,
          "yr_built_orig": 1998,
          "acres": 0.32,
          "land_sqft": 13939,
          "living_sqft": 2450,
          "nmbr_bedrooms": 4,
          "full_baths": 2,
          "half_baths": 1,
          "ac_type": "Central",
          "fireplace": 1,
          "nmbr_fireplace": 1,
          "gar_type": "Attached",
          "nmbr_park_spaces": 2,
          "heat_type": "Forced Air",
          "pool": 0,
          "roof_covtype": "Composition Shingle",
          "hmstd": 1,
          "ttl_tax": 3842.76,
          "tax_yr": 2024,
          "sale_date": "1999-06-15T00:00:00.000Z",
          "sale_amt": 179000,
          "loan_amt": 115000,
          "loan_date": "2015-08-12T00:00:00.000Z",
          "mrtg_type": "Conventional",
          "mrtg_term": 30,
          "lender_name": "Wells Fargo Bank",
          "mrtg_refi": 1,
          "mrtg_intrate": 3.25,
          "rate_type": "Fixed",
          "equity": 290400,
          "censusblockgroup": "1",
          "censustract": "002814",
          "msacode": "24860"
        },
        "behaviors": [
          {
            "id": "405343959",
            "address_id": "36347261",
            "household_id": "3416591",
            "nationalconsumerdatabase": "1",
            "iab": "1714",
            "recency": "1",
            "created_at": "2025-01-27 19:24:37"
          },
          {
            "id": "405343959",
            "address_id": "36347261",
            "household_id": "3416591",
            "nationalconsumerdatabase": "1",
            "iab": "179",
            "recency": "2",
            "created_at": "2025-01-27 19:24:37"
          },
          {
            "id": "405343959",
            "address_id": "36347261",
            "household_id": "3416591",
            "nationalconsumerdatabase": "1",
            "iab": "3356",
            "recency": "3",
            "created_at": "2025-01-27 19:24:37"
          }
        ]
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

For additional support or questions about the Super Leads API, contact our development team at [support@heropixel.com](mailto:support@heropixel.com).

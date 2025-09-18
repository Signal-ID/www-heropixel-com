---
id: domains-graphql-request
title: Pixel Domains API
description: Manage domains associated with pixels
---

# Pixel Domains API Documentation

## Overview

The Pixel Domains API allows you to manage domains associated with your pixels. This API provides functionality to add, remove, and list domains for a specific pixel, enabling better tracking and organization of your marketing efforts across different websites.

## How It Works

The Pixel Domains API works through the following process:

1. **Domain Management**: You can add, remove, or list domains associated with a specific pixel.
2. **Domain Validation**: When adding a domain, the system validates and cleans the domain format.
3. **Response Handling**: The API returns confirmation of successful operations or detailed error messages.

---

## Authentication

All operations require authentication. The `auth` object must be provided as part of the request. It includes:

### Auth Object

| Field       | Type   | Description                                                                                      |
| ----------- | ------ | ------------------------------------------------------------------------------------------------ |
| `appId`     | String | The application ID. Request this from [support@heropixel.com](mailto:support@heropixel.com).     |
| `appSecret` | String | The application secret. Request this from [support@heropixel.com](mailto:support@heropixel.com). |

---

## Operations

### Mutation: `domains`

Manages domains associated with a pixel.

#### Endpoint

```graphql
mutation Domains(
  $auth: AuthRequestInput!
  $event: ApiDomainsEventInput!
) {
  domains(auth: $auth, event: $event) {
    code
    data
    message
  }
}
```

#### Parameters

| Parameter | Type                | Required | Description                     |
| --------- | ------------------- | -------- | ------------------------------- |
| `auth`    | AuthRequestInput    | Yes      | The authentication credentials. |
| `event`   | ApiDomainsEventInput | Yes      | Details of the domains operation. |

#### `ApiDomainsEventInput` Fields

| Field       | Type   | Required | Description                                                   |
| ----------- | ------ | -------- | ------------------------------------------------------------- |
| `pixel_id`  | Int    | Yes      | The unique ID for the pixel.                                  |
| `action`    | String | Yes      | The action to perform: 'add', 'remove', or 'list'.            |
| `domain`    | String | No       | The domain to add or remove (required for 'add' and 'remove'). |

#### Example Request: Add Domain

```json
{
  "query": "mutation Domains($auth: AuthRequestInput!, $event: ApiDomainsEventInput!) { domains(auth: $auth, event: $event) { code data message } }",
  "variables": {
    "auth": {
      "appId": "yourAppIdHere",
      "appSecret": "yourAppSecretHere"
    },
    "event": {
      "pixel_id": 123,
      "action": "add",
      "domain": "example.com"
    }
  }
}
```

#### Example CURL Request: Add Domain

```bash
curl -X POST https://sweet-colt-9750.ddn.hasura.app/graphql \
-H "Content-Type: application/json" \
-d '{
  "query": "mutation Domains($auth: AuthRequestInput!, $event: ApiDomainsEventInput!) { domains(auth: $auth, event: $event) { code data message } }",
  "variables": {
    "auth": {
      "appId": "yourAppIdHere",
      "appSecret": "yourAppSecretHere"
    },
    "event": {
      "pixel_id": 123,
      "action": "add",
      "domain": "example.com"
    }
  }
}'
```

#### Example Response: Add Domain

```json
{
  "data": {
    "domains": {
      "code": 200,
      "data": {
        "domain": "example.com",
        "pixel_id": 123
      },
      "message": "Success"
    }
  }
}
```

#### Example Request: Remove Domain

```json
{
  "query": "mutation Domains($auth: AuthRequestInput!, $event: ApiDomainsEventInput!) { domains(auth: $auth, event: $event) { code data message } }",
  "variables": {
    "auth": {
      "appId": "yourAppIdHere",
      "appSecret": "yourAppSecretHere"
    },
    "event": {
      "pixel_id": 123,
      "action": "remove",
      "domain": "example.com"
    }
  }
}
```

#### Example Response: Remove Domain

```json
{
  "data": {
    "domains": {
      "code": 200,
      "data": {
        "domain": "example.com",
        "pixel_id": 123,
        "deleted": true
      },
      "message": "Success"
    }
  }
}
```

#### Example Request: List Domains

```json
{
  "query": "mutation Domains($auth: AuthRequestInput!, $event: ApiDomainsEventInput!) { domains(auth: $auth, event: $event) { code data message } }",
  "variables": {
    "auth": {
      "appId": "yourAppIdHere",
      "appSecret": "yourAppSecretHere"
    },
    "event": {
      "pixel_id": 123,
      "action": "list"
    }
  }
}
```

#### Example Response: List Domains

```json
{
  "data": {
    "domains": {
      "code": 200,
      "data": {
        "domains": [
          {
            "id": 1,
            "pixel_id": 123,
            "domain": "example.com",
            "created_at": "2025-09-17T22:32:13.000Z",
            "updated_at": "2025-09-17T22:32:13.000Z"
          },
          {
            "id": 2,
            "pixel_id": 123,
            "domain": "another-example.com",
            "created_at": "2025-09-17T22:35:45.000Z",
            "updated_at": "2025-09-17T22:35:45.000Z"
          }
        ]
      },
      "message": "Success"
    }
  }
}
```

#### Error Responses

##### Domain Already Exists

```json
{
  "data": {
    "domains": {
      "code": 409,
      "data": {},
      "message": "Domain example.com already exists for this pixel"
    }
  }
}
```

##### Domain Not Found

```json
{
  "data": {
    "domains": {
      "code": 404,
      "data": {},
      "message": "Domain example.com not found for this pixel"
    }
  }
}
```

##### Invalid Domain Format

```json
{
  "data": {
    "domains": {
      "code": 400,
      "data": {},
      "message": "Invalid domain format"
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
  - `404`: Resource not found.
  - `409`: Conflict, such as duplicate domain.
  - `500`: Server error.
- **`message`**: A descriptive message about the operation's outcome.
- **`data`**: Contains the result of the operation. For errors, this will be an empty object.

For all error responses, the `data` field will be an empty object, and the `message` field will describe the issue encountered.

---

## Contact

For additional support or questions about the Pixel Domains API, contact our development team at [support@heropixel.com](mailto:support@heropixel.com).

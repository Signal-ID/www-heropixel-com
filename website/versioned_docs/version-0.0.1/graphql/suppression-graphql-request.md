---
id: suppression-graphql-request
title: Suppression GraphQL Request
description: desc
---

# Suppression GraphQL Request

## Overview

The Suppression GraphQL Request allows you to manage contact suppression lists for your team. This system helps you maintain a list of contacts that should be excluded from your communications, ensuring compliance with user preferences and privacy requirements.

### How It Works

- You submit one or more contacts to be suppressed via the Suppression request.
- The system checks for existing suppressions to prevent duplicates.
- Each contact is processed and added to your team's suppression list if not already present.
- Detailed results are provided for each contact's processing status.

This system is designed to be efficient and reliable, handling both single and bulk suppression requests with ease.

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

### Mutation: `suppression`

Adds one or more contacts to your team's suppression list.

#### Endpoint

```graphql
mutation HeroPixel(
  $auth: AuthRequestInput!
  $event: SuppressionEventInput!
) {
  suppression(auth: $auth, event: $event) {
    message
    code
    data
  }
}
```

#### Parameters

| Parameter | Type                 | Required | Description                     |
| --------- | ------------------- | -------- | ------------------------------- |
| `auth`    | AuthRequestInput    | Yes      | The authentication credentials. |
| `event`   | SuppressionEventInput | Yes      | Details of the contacts to suppress. |

#### `SuppressionEventInput` Fields

| Field     | Type    | Required | Description                                |
| --------- | ------- | -------- | ------------------------------------------ |
| `contacts`| Contact[] | Yes      | Array of contacts to suppress.            |

#### `Contact` Fields

| Field     | Type   | Required | Description                                |
| --------- | ------ | -------- | ------------------------------------------ |
| `email`   | String | Yes      | The email address to suppress.             |
| `reason`  | String | No       | Optional reason for the suppression.       |

#### Example Request

```json
{
  "query": "mutation HeroPixel($auth: AuthRequestInput!, $event: SuppressionEventInput!) { suppression(auth: $auth, event: $event) { message code data } }",
  "variables": {
    "auth": {
      "appId": "yourAppIdHere",
      "appSecret": "yourAppSecretHere"
    },
    "event": {
      "contacts": [
        {
          "email": "john@doe.com",
          "reason": "Unsubscribed"
        },
        {
          "email": "jane@doe.com",
          "reason": "Bounced"
        }
      ]
    }
  }
}
```

#### Example CURL Request

```bash
curl -X POST https://sweet-colt-9750.ddn.hasura.app/graphql \
-H "Content-Type: application/json" \
-d '{
  "query": "mutation HeroPixel($auth: AuthRequestInput!, $event: SuppressionEventInput!) { suppression(auth: $auth, event: $event) { message code data } }",
  "variables": {
    "auth": {
      "appId": "yourAppIdHere",
      "appSecret": "yourAppSecretHere"
    },
    "event": {
      "contacts": [
        {
          "email": "john@doe.com",
          "reason": "Unsubscribed"
        },
        {
          "email": "jane@doe.com",
          "reason": "Bounced"
        }
      ]
    }
  }
}'
```

#### Example Response

```json
{
  "data": {
    "suppression": {
      "code": 200,
      "data": {
        "success": true,
        "results": [
          {
            "email": "john@doe.com",
            "status": "success"
          },
          {
            "email": "jane@doe.com",
            "status": "already_suppressed"
          }
        ],
        "summary": {
          "total": 2,
          "suppressed": 1,
          "skipped": 1
        }
      },
      "message": "Success"
    }
  }
}
```

#### Response Status Types

| Status | Description |
| ------ | ----------- |
| `success` | Contact was successfully added to the suppression list. |
| `already_suppressed` | Contact was already present in the suppression list. |

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
  - `401`: Unauthorized - Invalid credentials or team not found.
  - `500`: Server error.
- **`message`**: A descriptive message about the operation's outcome.
- **`data`**: Contains the result of the operation. For errors, this will be an empty object.

---

## Error Handling

### Common Errors

| Code | Message                | Description                                  |
| ---- | --------------------- | -------------------------------------------- |
| 200  | Operation Successful  | The operation completed successfully.        |
| 400  | Invalid Input         | One or more input fields are invalid.        |
| 401  | Unauthorized          | Invalid credentials or team not found.       |
| 500  | Internal Server Error | An unexpected error occurred on the server.  |

### Example Error Response

```json
{
  "code": 400,
  "message": "Invalid email addresses found in request",
  "data": {}
}
```

```json
{
  "code": 401,
  "message": "Unauthorized - Team not found",
  "data": {}
}
```

For all error responses, the `data` field will be an empty object, and the `message` field will describe the issue encountered.

---

## Contact

For additional support, contact our development team at [support@heropixel.com](mailto:support@heropixel.com).

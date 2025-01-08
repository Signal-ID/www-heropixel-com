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
mutation HeroPixel($event: PageviewEventInput!) {
  pageview(auth: {appId: "", appSecret: ""}, event: $event) {
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
| `event`   | PageviewEventInput | Yes      | Details of the pageview event.  |

#### `PageviewEventInput` Fields

| Field     | Type   | Required | Description                          |
| --------- | ------ | -------- | ------------------------------------ |
| `email`   | String | No       | The user's email address.            |
| `pixelId` | Int    | Yes      | The unique ID for the pixel.         |
| `domain`  | String | Yes      | The domain where the event occurred. |

#### Example Request

```json
{
  "query": "mutation HeroPixel($event: PageviewEventInput!) { pageview(auth: { appId: \"\", appSecret: \"\" }, event: $event) { message code data } }",
  "variables": {
    "event": {
      "md5": "",
      "pixelId": 1,
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
  "query": "mutation HeroPixel($event: PageviewEventInput!) { pageview(auth: { appId: \"yourAppIdHere\", appSecret: \"yourAppSecretHere\" }, event: $event) { message code data } }",
  "variables": {
    "event": {
      "md5": "",
      "pixelId": 1,
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
      "message": "User Found",
      "code": 200,
      "data": {}
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

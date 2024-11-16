---
id: link-to-zapier-docs
title: Zapier
description: desc
---

# Zapier Integration

## Step 1 - Convert Email Address to MD5

This guide explains how to set up a **Code by Zapier** task to convert an email address into an MD5 hash. This is the first step in the Zapier workflow for integrating with the GraphQL API.

---

### Step 1: Add a "Code by Zapier" Task

1. **Create a New Zap**

   - Log in to Zapier and create a new Zap.
   - Select the desired trigger for the Zap (e.g., "New Lead" or "Form Submission").

2. **Add a Code by Zapier Action**

   - Click on **+ Add Action**.
   - Choose **Code by Zapier** as the app.
   - Select **Run JavaScript** as the event.

3. **Configure the JavaScript Code**

   - In the **Code** field, copy and paste the following JavaScript code:

     ```javascript
     // Import the crypto library
     const crypto = require('crypto');

     // Input data: email from the previous step
     const email = inputData.email;

     // Trim and lowercase the email
     const cleanEmail = email.trim().toLowerCase();

     // Generate MD5 hash of the cleaned email
     const md5Hash = crypto
       .createHash('md5')
       .update(cleanEmail)
       .digest('hex');

     // Return the hashed value
     return {md5: md5Hash};
     ```

4. **Set Input Data**

   - Under the **Input Data** section, add a new key-value pair:
     - **Key**: `email`
     - **Value**: Map this to the email field from the trigger step (e.g., "Email Address").

5. **Test the Code**

   - Click **Test & Review** to verify that the MD5 hash is generated correctly.
   - The output will include the MD5 hash of the provided email:

     ```json
     {
       "md5": "e13743a7f1db7f4246badd6fd6ff54ff"
     }
     ```

6. **Use the MD5 Output in Subsequent Steps**
   - In the following steps of your Zap, you can use the `md5` value as input for other actions, such as enriching the lead with the GraphQL API.

## Step 2 - Custom Webhook Request for GraphQL Mutation

In this step, you will configure a **Custom Webhook** in Zapier to send a **GraphQL mutation** to your endpoint. The webhook will pass data through as part of the mutation request.

### Url to POST

`https://sweet-colt-9750.ddn.hasura.app/graphql`

Select Passthrough Data, YES

### Raw Request Structure:

Here’s the exact request format that Zapier will use to send the GraphQL mutation:

```json
{
  "query": "mutation HeroPixel($event: PagviewEventInput!) { pageview(auth: { appId: \"yourAppId\", appSecret: \"yourAppSecret\" }, event: $event) { message code data } }",
  "variables": {
    "event": {
      "md5": "{{ $md5 }}",
      "pixelId": 1,
      "domain": "example.com"
    }
  }
}
```

#### Key Notes:

- Replace `"yourAppId"` with your actual `appId`.
- Replace `"yourAppSecret"` with your actual `app secret`.
- The variable `$md5` will be dynamically injected based on previous steps in the workflow.

#### Zapier Setup:

1. **Action**: Add the **Webhooks by Zapier** app in the second step of your Zap.
2. **Method**: Choose **Custom Request**.
3. **Request Type**: Set the request type to **POST**.
4. **Data**: Paste the above raw JSON structure into the **Data** section.

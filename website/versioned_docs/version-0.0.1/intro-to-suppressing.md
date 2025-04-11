---
id: intro-to-suppressing
title: Manage Suppression Lists
description: desc
---

# What are Suppression Lists?

You already have customers that you know of. You may not want to be charged by HeroPixel for resolving these customers.

A suppression list gives you the ability to block us from resolving, and thus charging you for, customers you already know. Keep in mind that you must add these identites to your suppression list before we determine who they are.

**What if they optin to one of your forms, can you add them to the suppression list then?**

    - Yes, but most likely we will have already resolved their identity when they first hit the page. So by the time they optin you'll have already been charged for them.

### Managing Your Suppression Lists

The suppression list system helps you prevent identity resolution charges for contacts you already know about. By adding contacts to your suppression list before they interact with your pixel, you can effectively manage resolution costs while maintaining tracking capabilities.

:::info GraphQL API Available
For automated integrations, you can use our GraphQL API to programmatically manage your suppression lists. Check our [Suppression GraphQL Request](/docs/graphql/suppression-graphql-request) documentation for implementation details.
:::

#### How It Works

1. **Pre-emptive Suppression**

   - Add known contacts to your suppression list before pixel interaction
   - Prevents charges for identity resolution of known contacts
   - Works with email addresses

2. **Bulk Import Options**

   - Upload your existing customer list via CSV
   - System automatically handles email validation
   - Simple format with email and optional reason

3. **Important Timing Considerations**
   - Contacts must be added to suppression list **before** pixel interaction
   - Once a visitor's identity is resolved, the charge cannot be reversed
   - Regular updates of your suppression list are recommended

#### Using the Suppression List

You can manage your suppression list in two ways:

1. **Dashboard Interface**

   - Access through the [Leads page in your dashboard](https://app.heropixel.com/suppression)
   - Navigate to the Leads section and click on 'Suppression List'
   - View, add, or import suppressed contacts

2. **GraphQL API**

   - Programmatically manage suppressions
   - Bulk add contacts via API calls
   - Integrate with your existing systems

3. **CSV Import Format**
   Your file should include:

   - `email`: Email address
   - `reason` (optional): Why this contact is suppressed

4. **Best Practices**
   - Update your suppression list regularly
   - Import new customers before launching campaigns
   - Use bulk import for large customer lists
   - Keep your suppression list current

#### Common Questions

**Q: Can I add someone to the suppression list after they fill out a form?**
A: Yes, but if they've already interacted with your pixel, you may have already been charged for the identity resolution. For optimal cost management, add contacts to your suppression list before they interact with your pixel.

**Q: What happens if someone on my suppression list visits my site?**
A: If their email is in your suppression list before their visit, you won't be charged for their identity resolution. However, their visit will still be tracked for analytics purposes.

**Q: How often should I update my suppression list?**
A: We recommend updating your suppression list:

- Before launching new marketing campaigns
- After significant customer database updates
- On a regular schedule (e.g., weekly or monthly)

By effectively managing your suppression list, you can optimize your identity resolution costs while maintaining full visibility of your website traffic and conversions.

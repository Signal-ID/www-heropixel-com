---
id: start-create-a-pixel
title: Create a New Pixel
description: desc
---

# Guide to Creating a Pixel

## Purpose

Pixels will be installed on your website(s) to begin generating leads. Use multiple pixels if you're attempting to segment leads into different lists.

## FOLLOW THESE STEPS

### Step 1: Pixel Setup

1. **Pixel Name**

   - Pixel names are only used in your dashboard for personal reference.

2. **Authorized Domains**

   - Leads will only be generated from authorized domains.
   - If the pixel is installed on an unauthorized domain it will receive error `401 unauthorized` quietly and no leads will be generated from the unauthorized domain.
   - Do not enter subdomains or `http(s)://`, only the top-level-domain (e.g., example.com). All subdomains will automatically be authorized.
   - Separate multiple domains with commas (e.g., example.com, example.io).

3. **Description**

   - Optionally, provide a description for your own internal reference.

4. **Lead Cost**

   - What is your current Cost Per Lead? Enter that here.
   - We will calculate your savings on the dashboard.
   - This field is required.

5. **Tags**
   - Tags make it easier to generate reports and lead lists from within the dashboard.
   - Separate multiple tags with commas (e.g., facebook, instagram, website).

## Troubleshooting

- **Form Not Submitting?**

  - Ensure all required fields (marked with an asterisk \*) are filled in.

- **Issues with Authorized Domains?**

  - If the system is not accepting the domain you entered, it's most likely because you've added a subdomain or special characters.
  - Verify the domain format and ensure multiple domains are separated by commas.

- **Lead Cost Not Accepting Decimal Values?**
  - Ensure you are entering rounded dollar values only.

## Support

- If you encounter any issues or need further assistance, contact our support team at [support@heropixel.com](mailto:support@heropixel.com).

### Next Steps

You should be seeing the pixel snippet when you've finished the steps to create your pixel. We'll cover pixel installation in the [next section](/docs/start-pixel-installation).

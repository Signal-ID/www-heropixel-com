---
id: occupation-detail-property
title: Occupation Detail Property
description: Guide to using the detailed occupation property
---

# Occupation Detail Property

## Introduction

The `Occupation_Detail` property allows you to tailor your content based on the detailed occupation of your visitors. This guide provides an overview of how to use the `Occupation_Detail` property to create personalized experiences and includes a list of potential detailed occupation values.

## Usage

The `Occupation_Detail` property can be used to display content that resonates with the visitor's detailed occupation, making your communication more relevant and effective.

### Example

**Usage:**

```html
{{#if (eq Occupation_Detail "Accountant")}}
<p>
  Welcome, Accountant! Check out our latest financial management
  tools designed just for you.
</p>
<img src="/images/accountant_tools.jpg" alt="Accountant Tools" />
{{else if (eq Occupation_Detail "Teacher")}}
<p>
  Hi, Teacher! Discover our educational resources and tools to
  help you in the classroom.
</p>
<img
  src="/images/teacher_resources.jpg"
  alt="Teacher Resources" />
{{else if (eq Occupation_Detail "Software Developer")}}
<p>
  Hello, Software Developer! Explore our advanced coding and
  development tools.
</p>
<img src="/images/developer_tools.jpg" alt="Developer Tools" />
{{else}}
<p>
  Welcome! Explore our range of products and services tailored to
  various occupations.
</p>
<img src="/images/general_offers.jpg" alt="General Offers" />
{{/if}}
```

In this example, various personalized messages and offers are displayed based on the visitor's detailed occupation, providing fresh ideas to enhance user engagement and conversions.

## Potential Values

The following table lists a selection of the potential values for the `Occupation_Detail` property:

| Value                             | Description                                 |
| --------------------------------- | ------------------------------------------- |
| `Accounting/Biller/Billing Clerk` | Detailed occupation for accounting          |
| `Actor/Entertainer/Announcer`     | Detailed occupation for entertainment       |
| `Air Traffic Control`             | Detailed occupation for air traffic control |
| `Architect`                       | Detailed occupation for architects          |
| `Artist`                          | Detailed occupation for artists             |
| `Baker`                           | Detailed occupation for bakers              |
| `Banker/Loan Officer`             | Detailed occupation for loan officers       |
| `Barber/Hairstylist/Beautician`   | Detailed occupation for beauticians         |
| `Bartender`                       | Detailed occupation for bartenders          |
| `Bookkeeper`                      | Detailed occupation for bookkeepers         |
| `Broker/Stock/Trader`             | Detailed occupation for stock traders       |
| `Carpenter/Furniture/Woodworking` | Detailed occupation for carpenters          |
| `Chef/Butler`                     | Detailed occupation for chefs               |
| `Child Care/Day Care/Babysitter`  | Detailed occupation for childcare           |
| `Computer Programmer`             | Detailed occupation for programmers         |
| `Construction`                    | Detailed occupation for construction        |
| `Cosmetologist`                   | Detailed occupation for cosmetologists      |
| `Customer Service/Representative` | Detailed occupation for customer service    |
| `Data Entry/Key Punch`            | Detailed occupation for data entry          |
| `Dental Assistant`                | Detailed occupation for dental assistants   |
| `Designer`                        | Detailed occupation for designers           |
| `Doctor`                          | Detailed occupation for doctors             |
| `Driver/Truck Driver`             | Detailed occupation for truck drivers       |
| `Electrician`                     | Detailed occupation for electricians        |
| `Engineer`                        | Detailed occupation for engineers           |
| `Farmer/Dairyman`                 | Detailed occupation for farmers             |
| `Firefighter`                     | Detailed occupation for firefighters        |
| `Gardener/Landscaper`             | Detailed occupation for gardeners           |
| `Health Care`                     | Detailed occupation for healthcare workers  |
| `Homemaker`                       | Detailed occupation for homemakers          |
| `Janitor`                         | Detailed occupation for janitors            |
| `Journalist`                      | Detailed occupation for journalists         |
| `Laborer`                         | Detailed occupation for laborers            |
| `Lawyer`                          | Detailed occupation for lawyers             |
| `Librarian/Archivist`             | Detailed occupation for librarians          |
| `Machinist`                       | Detailed occupation for machinists          |
| `Manager`                         | Detailed occupation for managers            |
| `Mechanic`                        | Detailed occupation for mechanics           |
| `Nurse`                           | Detailed occupation for nurses              |
| `Painter`                         | Detailed occupation for painters            |
| `Pharmacist`                      | Detailed occupation for pharmacists         |
| `Photographer`                    | Detailed occupation for photographers       |
| `Pilot`                           | Detailed occupation for pilots              |
| `Plumber`                         | Detailed occupation for plumbers            |
| `Police/Trooper`                  | Detailed occupation for police              |
| `Real Estate/Realtor`             | Detailed occupation for real estate agents  |
| `Receptionist`                    | Detailed occupation for receptionists       |
| `Sales`                           | Detailed occupation for sales               |
| `Scientist`                       | Detailed occupation for scientists          |
| `Secretary`                       | Detailed occupation for secretaries         |
| `Software Developer`              | Detailed occupation for software developers |
| `Student`                         | Detailed occupation for students            |
| `Teacher`                         | Detailed occupation for teachers            |
| `Technician`                      | Detailed occupation for technicians         |
| `Truck Driver`                    | Detailed occupation for truck drivers       |
| `Waiter/Waitress`                 | Detailed occupation for waiters             |
| `Welder`                          | Detailed occupation for welders             |
| `Writer`                          | Detailed occupation for writers             |

## Conclusion

Using the `Occupation_Detail` property allows you to personalize your landing pages based on the visitor's detailed occupation. By leveraging this property, you can deliver content that resonates with different occupations, enhancing user engagement and effectiveness.

## Next Steps

Explore more features:

- [String and Number Functions](/docs/personalization/hero-string-number-functions)
- [Conditional Helpers](/docs/personalization/hero-conditional-helpers)
- [Advanced Templating Techniques](/docs/personalization/hero-advanced-techniques)

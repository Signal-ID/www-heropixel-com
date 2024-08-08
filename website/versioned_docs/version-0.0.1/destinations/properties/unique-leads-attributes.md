---
id: unique-leads-attributes
title: Consumer Attributes
description: The available Consumer Attributes for sync
---

# Consumer Attributes Available Via Sync

## Introduction

Here's a list of the data fields that are available through our integrations system. If you don't find the data you're looking for, please request it from support.

Not all destinations support receiving all of this data. It's all available to send, but the destination may not be capable of receiving it.

## Consumer Attributes

| Property                     | Values                                                                    | Value Type | Description                                                                           |
| ---------------------------- | ------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------- | ------------------------------ |
| `consumer_id`                | 0-99999999                                                                | number     | Unique ID assigned to this individual.                                                |
| `hem`                        | -                                                                         | string     | Hashed email that was provided by you to us at the time of engagement                 |
| `first_name`                 | -                                                                         | string     | Consumer's First Name                                                                 |
| `last_name`                  | -                                                                         | string     | Consumer's Last Name                                                                  |
| `email`                      | -                                                                         | string     | Consumer's Valid and Verified Email Address                                           |
| `phone`                      | -                                                                         | string     | Consumer's Valid and Verified Phone Number                                            |
| `address`                    | -                                                                         | string     | Consumer's Physical Address                                                           |
| `city`                       | -                                                                         | string     | Consumer's city                                                                       |
| `region_name`                | -                                                                         | string     | Name of the State                                                                     |
| `zip`                        | 99999                                                                     | string     | Consumer's ZIP code                                                                   |
| `country_code`               | `US`                                                                      | string     | Consumer's Country. Hero Pixel only returns US persons                                |
| `age`                        | 0-120                                                                     | number     | Consumer's age                                                                        |
| `amex_card`                  | `0`, `1`                                                                  | boolean    | Whether visitor owns an Amex card                                                     |
| `address_type`               | [see all](/docs/destinations/properties/address-type-property)            | string     | Type of Consumer's address                                                            |
| `bank_card`                  | `0`, `1`                                                                  | boolean    | Whether visitor owns a bank card                                                      |
| `birth_month_and_year`       | `1951-10-19`                                                              | string     | Consumer's birth date                                                                 |
| `birth_year`                 | YYYY                                                                      | number     | Consumer's birth year                                                                 |
| `blue_collar`                | `0`, `1`                                                                  | boolean    | Consumer's blue collar score                                                          |
| `cat_owner`                  | `0`, `1`                                                                  | boolean    | Consumer's blue collar score                                                          |
| `child_aged_0_3_hh`          | 0-9                                                                       | number     | How many children between 0 and 3 yrs of age within the HH                            |
| `child_aged_4_6_hh`          | 0-9                                                                       | number     | How many children between 4 and 6 yrs of age within the HH                            |
| `child_aged_10_12_hh`        | 0-9                                                                       | number     | How many children between 10 and 12 yrs of age within the HH                          |
| `child_aged_13_18_hh`        | 0-9                                                                       | number     | How many children between 13 and 18 yrs of age within the HH                          |
| `created_at`                 | -                                                                         | integer    | The 10 digit epoch timestamp of the first Engagement on your website                  |
| `credit_range`               | [see all](/docs/destinations/properties/credit-range-property)            | string     | Consumer's credit range                                                               |
| `credit_card`                | `0`, `1`                                                                  | number     | Number of credit cards owned by the visitor                                           |
| `credit_midpts`              | [see all](/docs/destinations/properties/credit-midpts-property)           | number     | Credit midpoints                                                                      |
| `custom_one`                 | -                                                                         | string     | The Custom parameter you tagged the lead with at the time of engagement               |
| `custom_two`                 | -                                                                         | string     | The Custom parameter you tagged the lead with at the time of engagement               |
| `custom_three`               | -                                                                         | string     | The Custom parameter you tagged the lead with at the time of engagement               |
| `custom_four`                | -                                                                         | string     | The Custom parameter you tagged the lead with at the time of engagement               |
| `custom_five`                | -                                                                         | string     | The Custom parameter you tagged the lead with at the time of engagement               |
| `dog_owner`                  | `0`, `1`                                                                  | boolean    | Whether visitor owns a Dog                                                            |
| `dwelling_type`              | [see all](/docs/destinations/properties/dwelling-type-property)           | string     | Type of dwelling                                                                      |
| `ethnic_group`               | [see all](/docs/destinations/properties/hero-ethnic-group-property)       | string     | Consumer's ethnic group                                                               |
| `education`                  | [see all](/docs/destinations/properties/education-property)               | string     | Consumer's education level                                                            |
| `education_ordinal`          | [see all](/docs/destinations/properties/education-ordinal-property)       | number     | Consumer's education ordinal                                                          |
| `ethnicity_detail`           | [see all](/docs/destinations/properties/ethnicity-detail-property)        | string     | Detailed ethnicity of the visitor                                                     |
| `ethnicity_white`            | `0`, `1`                                                                  | string     | White ethnicity                                                                       |
| `ethnicity_african_american` | `0`, `1`                                                                  | string     | African American ethnicity                                                            |
| `ethnicity_hispanic`         | `0`, `1`                                                                  | string     | Hispanic ethnicity                                                                    |
| `ethnicity_asian`            | `0`, `1`                                                                  | string     | Asian ethnicity                                                                       |
| `ethnicity_jewish`           | `0`, `1`                                                                  | string     | Jewish ethnicity                                                                      |
| `gender`                     | `Male`, `Female`                                                          | string     | Consumer's gender                                                                     |
| `generation`                 | [see all](/docs/destinations/properties/hero-generation-property)         | string     | Consumer's generation                                                                 |
| `generation_ordinal`         | [see all](/docs/destinations/properties/generation-ordinal-property)      | number     | Consumer's generation ordinal                                                         |
| `home_owner`                 | [see all](/docs/destinations/properties/home-owner-property)              | string     | Whether visitor is a homeowner                                                        |
| `home_owner_ordinal`         | [see all](/docs/destinations/properties/home-owner-ordinal-property)      | number     | Homeowner ordinal                                                                     |
| `home_heat_type`             | [see all](/docs/destinations/properties/home-heat-type-property)          | string     | Type of heating in the Consumer's home                                                |
| `home_improvement`           | `0`, `1`                                                                  | boolean    | Whether visitor is interested in home improvement                                     |
| `home_price`                 | 0-999999                                                                  | number     | Price of Consumer's home                                                              |
| `home_purchased_years_ago`   | 0-56                                                                      | number     | Years since visitor purchased home                                                    |
| `home_study`                 | `0`, `1`                                                                  | boolean    | Whether visitor has a home study                                                      |
| `home_value`                 | 0-999999999                                                               | number     | Value of Consumer's home                                                              |
| `income_hh`                  | [see all](/docs/destinations/properties/income-hh-property)               | string     | Household income                                                                      |
| `income_levels`              | [see all](/docs/destinations/properties/income-levels-property)           | string     | Levels of income                                                                      |
| `income_midpts_hh`           | [see all](/docs/destinations/properties/income-midpts-hh-property)        | number     | Midpoints of household income                                                         |
| `investment_type`            | `0`, `1`                                                                  | number     | Types of investments owned by the visitor                                             |
| `language`                   | `en-US`                                                                   | string     |                                                                                       | Browser language specification |
| `Language`                   | [see all](/docs/destinations/properties/hero-language-property)           | string     | Consumer's preferred language                                                         |
| `lat`                        | -                                                                         | string     |                                                                                       | The users Lattitude            |
| `lon`                        | -                                                                         | string     |                                                                                       | The users Longitude            |
| `likely_charitable_donor`    | `0`, `1`                                                                  | boolean    | Whether visitor is likely to be a charitable donor                                    |
| `length_of_residence`        | 0-99                                                                      | number     | Length of residence                                                                   |
| `marital_status`             | [see all](/docs/destinations/properties/marital-status-property)          | string     | Marital status of the visitor                                                         |
| `md5`                        | -                                                                         | string     | 32 Character MD5 encrypted hash of their email                                        |
| `median_home_value`          | 0-999999                                                                  | number     | Median value of homes in Consumer's area                                              |
| `median_income`              | 0-250000                                                                  | number     | Median income of Consumer's area                                                      |
| `mortgage_age`               | 0-34                                                                      | number     | Age of Consumer's mortgage                                                            |
| `mortgage_amount`            | 0-999999999                                                               | number     | Amount of Consumer's mortgage                                                         |
| `mortgage_loan_type`         | [see all](/docs/destinations/properties/mortgage-loan-type-property)      | string     | Type of mortgage loan                                                                 |
| `mortgage_refi_age`          | 0-24                                                                      | number     | Age of Consumer's mortgage refinance                                                  |
| `mortgage_refi_amount`       | 0-999999999                                                               | number     | Amount of Consumer's mortgage refinance                                               |
| `mortgage_refi_type`         | [see all](/docs/destinations/properties/mortgage-refi-type-property)      | string     | Type of mortgage refinance                                                            |
| `multilingual`               | `0`, `1`                                                                  | boolean    | Whether visitor is multilingual                                                       |
| `net_worth_hh`               | [see all](/docs/destinations/properties/net-worth-hh-property)            | number     | Household net worth                                                                   |
| `net_worth_midpt_hh`         | [see all](/docs/destinations/properties/net-worth-midpt-hh-property)      | number     | Midpoint of household net worth                                                       |
| `new_credit_offered_hh`      | `0`, `1`                                                                  | boolean    | Whether visitor has been offered new credit                                           |
| `num_adults_hh`              | 0-9                                                                       | number     | Number of adults in the household                                                     |
| `num_children_hh`            | 0-8                                                                       | number     | Number of children in the household                                                   |
| `num_generations_hh`         | 0-3                                                                       | number     | Number of generations in the household                                                |
| `num_persons_hh`             | 0-9                                                                       | number     | Number of persons in the household                                                    |
| `number_of_vehicles_in_hh`   | 0-10                                                                      | number     | Number of vehicles in the household                                                   |
| `occupation_detail`          | [see all](/docs/destinations/properties/occupation-detail-property)       | string     | Consumer's occupation details                                                         |
| `outdoors`                   | `0`, `1`                                                                  | boolean    | Whether visitor is interested in outdoor activities                                   |
| `owns_investments`           | `0`, `1`                                                                  | boolean    | Whether visitor owns investments                                                      |
| `owns_stocks_and_bonds`      | `0`, `1`                                                                  | boolean    | Whether visitor owns stocks and bonds                                                 |
| `owns_swimming_pool`         | `0`, `1`                                                                  | number     | Whether visitor owns a swimming pool                                                  |
| `pet_owner`                  | `0`, `1`                                                                  | boolean    | Whether visitor owns pets                                                             |
| `phone_activity`             | [see all](/docs/destinations/properties/phone-activity-property)          | string     | Phone activity                                                                        |
| `phone_can_receive_texts`    | `0`, `1`                                                                  | boolean    | Whether Consumer's phone can receive texts                                            |
| `phone_carrier`              | [see all](/docs/destinations/properties/phone-carrier-property)           | string     | Consumer's phone carrier                                                              |
| `phone_dialing_code`         | 0-9999                                                                    | number     | The 1 to 4 digit dialing code for this phone number or null if unknown.               |
| `phone_do_not_call`          | `0`, `1`                                                                  | boolean    | Whether Consumer's phone is on the do-not-call list                                   |
| `phone_formatted`            | `+18007132618`                                                            | string     | The phone number formatted in the international dialing code. N/A if not formattable. |
| `phone_is_callable`          | [see all](/docs/destinations/properties/phone-is-callable-property)       | boolean    | Whether Consumer's phone is callable                                                  |
| `phone_type`                 | [see all](/docs/destinations/properties/line-type-property)               | string     | Type of phone                                                                         |
| `phone_voip`                 | `0`, `1`                                                                  | boolean    | Whether Consumer's phone is a VoIP number                                             |
| `photography`                | `0`, `1`                                                                  | boolean    | Whether visitor is interested in photography                                          |
| `political_contributor`      | `0`, `1`                                                                  | boolean    | Whether visitor is a political contributor                                            |
| `political_party`            | [see all](/docs/destinations/properties/political-party-property)         | string     | Political party affiliation                                                           |
| `premium_amex_card`          | `0`, `1`                                                                  | boolean    | Whether visitor owns a premium Amex card                                              |
| `premium_card`               | `0`, `1`                                                                  | boolean    | Whether visitor owns a premium card                                                   |
| `premium_income_hh`          | [see all](/docs/destinations/properties/premium-income-hh-property)       | number     | Premium household income                                                              |
| `premium_income_midpt_hh`    | [see all](/docs/destinations/properties/premium-income-midpt-hh-property) | number     | Midpoint of premium household income                                                  |
| `religion`                   | [see all](/docs/destinations/properties/religion-property)                | string     | Consumer's religion                                                                   |
| `sha1`                       | -                                                                         | string     | The SHA1 encryption of the users email                                                |
| `sha2`                       | -                                                                         | string     | The SHA2 encryption of the users email (perfect for ads)                              |
| `single_family_dwelling`     | `0`, `1`                                                                  | boolean    | Single-family dwelling ordinal                                                        |
| `timestamp`                  | `2024-06-07 10:18:36.749000`                                              | string     | The full timestamp taken at the time of engagement                                    |
| `timezone`                   | `America/Los_Angeles`                                                     | string     | The full timestamp taken at the time of engagement                                    |
| `urbanicity`                 | [see all](/docs/destinations/properties/urbanicity-property)              | string     | Degree of urbanization                                                                |
| `veteran_hh`                 | `0`, `1`                                                                  | string     | Veteran status in the household                                                       |
| `white_collar`               | `0`, `1`                                                                  | number     | White-collar worker ordinal                                                           |

# Device Technology

| Property           | Values                        | Value Type | Description                                                |
| ------------------ | ----------------------------- | ---------- | ---------------------------------------------------------- |
| `browser`          | `Chrome 125.0.0.0` -          | string     | The browser they prefer to use.                            |
| `device_type`      | `desktop`, `mobile`           | string     | The type of device they prefer to use.                     |
| `inner_resolution` | `1000x900`                    | string     | The height and width of their inner screen                 |
| `is_eu`            | `0`, `1`                      | boolean    | Is the user in Europe right now?                           |
| `isp`              | -                             | string     | Their Internet Service Provider                            |
| `org`              | -                             | string     | The business that was identified at the time of engagement |
| `os`               | -                             | string     | Their preferred Operating System                           |
| `referrer`         | -                             | string     | The referring website the visitor came from (full url)     |
| `referring_domain` | -                             | string     | The referring website domain the visitor came from         |
| `resolution`       | `1000x900`                    | string     | The height and width of their screen                       |
| `user_agent`       | `Mozilla/5.0 (Windows NT ...` | string     | The user agent ID of the visitor's browser                 |
| `utm_campaign`     | -                             | string     | The utm_campaign parameter you set in your marketing       |
| `utm_content`      | -                             | string     | The utm_content parameter you set in your marketing        |
| `utm_medium`       | -                             | string     | The utm_medium parameter you set in your marketing         |
| `utm_source`       | -                             | string     | The utm_source parameter you set in your marketing         |
| `utm_term`         | -                             | string     | The utm_term parameter you set in your marketing           |
| `website_id`       | 0-9999                        | number     | The Pixel ID that identified the visitor                   |

# Consumer Affinities

"Affinity" refers to a natural liking, attraction, or inclination towards something or someone. It can also describe a similarity or resemblance between things. In different contexts, it can mean:

1. **Personal Affinity**: A natural liking or sympathy for someone or something. For example, "She has an affinity for classical music."

In general, it signifies a close relationship or a strong connection.

| Property                   | Values   | Value Type | Description                                     |
| -------------------------- | -------- | ---------- | ----------------------------------------------- |
| `auto_racing_affinity`     | `0`, `1` | boolean    | Does the consumer have an Auto Racing Affinity? |
| `gambling_affinity`        | `0`, `1` | boolean    | Consumer's affinity for gambling                |
| `golf_affinity`            | `0`, `1` | boolean    | Consumer's affinity for golf                    |
| `gourmet_affinity`         | `0`, `1` | boolean    | Consumer's affinity for gourmet food            |
| `home_decorating_affinity` | `0`, `1` | boolean    | Consumer's affinity for home decorating         |
| `motorcycles_affinity`     | `0`, `1` | boolean    | Consumer's affinity for motorcycles             |
| `pets_affinity`            | `0`, `1` | boolean    | Consumer's affinity for pets                    |
| `travel_cruise_affinity`   | `0`, `1` | boolean    | Consumer's affinity for cruise travel           |
| `trucks_affinity`          | `0`, `1` | boolean    | Consumer's affinity for trucks                  |
| `do_it_yourself_affinity`  | `0`, `1` | boolean    | Consumer's affinity for Do-It-Yourself          |
| `dog_affinity`             | `0`, `1` | boolean    | Consumer's affinity for Dogs                    |

# Interests

"Interests" refer to the subjects or activities that capture your attention, enthusiasm, and curiosity. They are the things you enjoy doing or learning about in your free time. Interests can vary widely from person to person and can include hobbies, sports, academic subjects, arts, and much more. Here are a few examples:

1. **Hobbies**: Activities like reading, painting, gardening, cooking, or playing musical instruments.
2. **Sports and Physical Activities**: Interests in activities like soccer, basketball, hiking, yoga, or swimming.
3. **Academic Subjects**: Areas of study such as mathematics, science, history, literature, or technology.
4. **Arts and Culture**: Appreciation for activities like attending theater performances, visiting museums, exploring different cultures, or watching movies.
5. **Personal Development**: Interests in self-improvement, learning new skills, or engaging in mindfulness practices.

Interests often reflect a person's personality, values, and lifestyle choices, and they can evolve over time as people discover new passions and experiences.

| Property                  | Values   | Value Type | Description                                                             |
| ------------------------- | -------- | ---------- | ----------------------------------------------------------------------- |
| `cars_interest`           | `0`, `1` | boolean    | Consumer's interest in Cars                                             |
| `charity_interest`        | `0`, `1` | boolean    | Consumer's interest in charities, either participating or contributing. |
| `healthy_living_interest` | `0`, `1` | boolean    | Consumer's interest in healthy living                                   |

# Categories

| Property                   | Values   | Value Type | Description                                                    |
| -------------------------- | -------- | ---------- | -------------------------------------------------------------- |
| `aerobics`                 | `0`, `1` | boolean    | Does the consumer like aerobics?                               |
| `antiques`                 | `0`, `1` | boolean    | Does the consumer like Antiques?                               |
| `arts_and_crafts`          | `0`, `1` | boolean    | Does the consumer like Arts and Crafts?                        |
| `baseball`                 | `0`, `1` | boolean    | Does the consumer like Baseball?                               |
| `basketball`               | `0`, `1` | boolean    | Does the consumer like Basketball?                             |
| `bird_watching`            | `0`, `1` | boolean    | Does the consumer like Bird watching?                          |
| `boating_sailing`          | `0`, `1` | boolean    | Does the consumer like Boating and Sailing?                    |
| `camping_hiking`           | `0`, `1` | boolean    | Does the consumer like Camping and Hiking?                     |
| `cigars`                   | `0`, `1` | boolean    | Does the consumer like Cigars?                                 |
| `coins`                    | `0`, `1` | boolean    | Does the consumer like Coins?                                  |
| `cooking`                  | `0`, `1` | boolean    | Does the consumer like Cooking?                                |
| `dieting`                  | `0`, `1` | boolean    | Does the consumer like Dieting?                                |
| `diy`                      | `0`, `1` | boolean    | Does the consumer like Do-it-yoursel?                          |
| `fishing`                  | `0`, `1` | boolean    | Whether visitor is interested in fishing                       |
| `fitness`                  | `0`, `1` | boolean    | Whether visitor is interested in fitness                       |
| `football`                 | `0`, `1` | boolean    | Whether visitor is interested in football                      |
| `gambling`                 | `0`, `1` | boolean    | Whether visitor is interested in gambling                      |
| `gardening`                | `0`, `1` | boolean    | Whether visitor is interested in gardening                     |
| `golf`                     | `0`, `1` | boolean    | Whether visitor is interested in golf                          |
| `healthy_living`           | `0`, `1` | boolean    | Whether visitor practices healthy living                       |
| `hockey`                   | `0`, `1` | boolean    | Whether visitor is interested in hockey                        |
| `hunting`                  | `0`, `1` | boolean    | Whether visitor is interested in hunting                       |
| `knitting_quilting_sewing` | `0`, `1` | boolean    | Whether visitor is interested in knitting, quilting, or sewing |
| `luxury_life`              | `0`, `1` | boolean    | Whether visitor lives a luxury lifestyle                       |
| `magazine_subscriber`      | `0`, `1` | boolean    | Whether visitor subscribes to magazines                        |
| `motor_racing`             | `0`, `1` | boolean    | Whether visitor is interested in motor racing                  |
| `motorcycles`              | `0`, `1` | boolean    | Whether visitor owns or is interested in motorcycles           |
| `movies`                   | `0`, `1` | boolean    | Whether visitor is interested in movies                        |
| `music`                    | `0`, `1` | boolean    | Whether visitor is interested in music                         |
| `nascar`                   | `0`, `1` | boolean    | Whether visitor is interested in NASCAR                        |
| `running`                  | `0`, `1` | boolean    | Whether visitor is interested in running                       |
| `rv`                       | `0`, `1` | boolean    | Whether visitor owns or is interested in RVs                   |
| `scuba`                    | `0`, `1` | boolean    | Whether visitor is interested in scuba diving                  |
| `self_improvement`         | `0`, `1` | boolean    | Whether visitor is interested in self-improvement              |
| `snow_skiing`              | `0`, `1` | boolean    | Whether visitor is interested in snow skiing                   |
| `soccer`                   | `0`, `1` | boolean    | Whether visitor is interested in soccer                        |
| `soho_business`            | `0`, `1` | boolean    | Whether visitor has a SOHO business                            |
| `stamps`                   | `0`, `1` | boolean    | Whether visitor is interested in stamp collecting              |
| `tennis`                   | `0`, `1` | boolean    | Whether visitor is interested in tennis                        |
| `travel_cruises`           | `0`, `1` | boolean    | Whether visitor is interested in cruises                       |
| `travel_foreign`           | `0`, `1` | boolean    | Whether visitor is interested in foreign travel                |
| `travel_vacation`          | `0`, `1` | boolean    | Whether visitor is interested in vacations                     |
| `truck_owner`              | `0`, `1` | boolean    | Whether visitor owns a truck                                   |
| `walking`                  | `0`, `1` | boolean    | Whether visitor is interested in walking                       |
| `woodworking`              | `0`, `1` | boolean    | Whether visitor is interested in woodworking                   |

# Collectors

If the consumer is a collector of certain items, meaning that they both have a strong affinity for and they purchase high end items in these categories.

| Property                       | Values   | Value Type | Description                                 |
| ------------------------------ | -------- | ---------- | ------------------------------------------- |
| `fine_arts_collector`          | `0`, `1` | boolean    | Whether visitor collects fine arts          |
| `sports_memoribilia_collector` | `0`, `1` | boolean    | Whether visitor collects sports memorabilia |

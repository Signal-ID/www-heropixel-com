---
id: visitor-attributes
title: Visitor Attributes
description: List of visitor attributes that can be used to personalize a page
---

# Visitor Attributes for Personalization

## Introduction

Personalizing your landing pages can significantly enhance user engagement and conversion rates by tailoring content to individual visitors based on their attributes. The following table lists the various visitor attributes you can use to personalize your content, along with their value types, possible operators, and descriptions.

## Visitor Attributes

| Property | Values    | Value Type | Operators  | Description   |
| ---- | --------- | -- | ---- | ----------- |
| `city` | -   | string | `==`, `!=`, `contains` | Visitor's city    |
| `age`  | -   | number | `==`, `!=`, `>=`, `<=`, `<`, `>` | Visitor's age   |
| `birth_month_and_year` | `1951-10-19`  | string | `==`, `!=` | Visitor's birth date    |
| `gender` | `Male`, `Female`  | string | `==`, `!=` | Visitor's gender    |
| `language` | [see all](/docs/personalization/hero-language-property) | string | `==`, `!=` | Visitor's preferred language    |
| `ethnic_group` | [see all](/docs/personalization/hero-ethnic-group-property) | string | `==`, `!=` | Visitor's ethnic group    |
| `generation` | [see all](/docs/personalization/hero-generation-property) | string | `==`, `!=` | Visitor's generation    |
| `education`  | [see all](/docs/personalization/education-property) | string | `==`, `!=` | Visitor's education level   |
| `education_ordinal`  | [see all](/docs/personalization/education-ordinal-property) | number | `==`, `!=`, `>=`, `<=`, `<`, `>` | Visitor's education ordinal   |
| `blue_collar`  | `0`, `1`    | number | `==`, `!=`, `>=`, `<=`, `<`, `>` | Visitor's blue collar score   |
| `birth_year` | YYYY    | number | `==`, `!=`, `>=`, `<=`, `<`, `>` | Visitor's birth year    |
| `generation_ordinal` | [see all](/docs/personalization/generation-ordinal-property)  | number | `==`, `!=`, `>=`, `<=`, `<`, `>` | Visitor's generation ordinal    |
| `ethnicity_detail` | [see all](/docs/personalization/ethnicity-detail-property)  | string | `==`, `!=` | Detailed ethnicity of the visitor   |
| `ethnicity_white`  | `0`, `1`    | string | `==`, `!=` | White ethnicity   |
| `ethnicity_african_american` | `0`, `1`    | string | `==`, `!=` | African American ethnicity    |
| `ethnicity_hispanic` | `0`, `1`    | string | `==`, `!=` | Hispanic ethnicity    |
| `ethnicity_asian`  | `0`, `1`    | string | `==`, `!=` | Asian ethnicity   |
| `ethnicity_jewish` | `0`, `1`    | string | `==`, `!=` | Jewish ethnicity    |
| `credit_range` | [see all](/docs/personalization/credit-range-property)  | string | `==`, `!=` | Visitor's credit range    |
| `amex_card`  | `0`, `1`    | boolean  | `==`, `!=` | Whether visitor owns an Amex card   |
| `bank_card`  | `0`, `1`    | boolean  | `==`, `!=` | Whether visitor owns a bank card  |
| `credit_card`  | `0`, `1`    | number | `==`, `!=`, `>=`, `<=`, `<`, `>` | Number of credit cards owned by the visitor   |
| `credit_midpts`  | [see all](/docs/personalization/credit-midpts-property) | number | `==`, `!=`, `>=`, `<=`, `<`, `>` | Credit midpoints    |
| `home_owner` | [see all](/docs/personalization/home-owner-property)  | string | `==`, `!=` | Whether visitor is a homeowner    |
| `address_type` | [see all](/docs/personalization/address-type-property)  | string | `==`, `!=` | Type of visitor's address   |
| `dwelling_type`  | [see all](/docs/personalization/dwelling-type-property) | string | `==`, `!=` | Type of dwelling    |
| `fine_arts_collector`  | `0`, `1`    | boolean  | `==`, `!=` | Whether visitor collects fine arts  |
| `fishing`  | `0`, `1`    | boolean  | `==`, `!=` | Whether visitor is interested in fishing  |
| `fitness`  | `0`, `1`    | boolean  | `==`, `!=` | Whether visitor is interested in fitness  |
| `football` | `0`, `1`    | boolean  | `==`, `!=` | Whether visitor is interested in football   |
| `gambling` | `0`, `1`    | boolean  | `==`, `!=` | Whether visitor is interested in gambling   |
| `gambling_affinity`  | `0`, `1`    | boolean  | `==`, `!=` | Visitor's affinity for gambling   |
| `gardening`  | `0`, `1`    | boolean  | `==`, `!=` | Whether visitor is interested in gardening  |
| `golf` | `0`, `1`    | boolean  | `==`, `!=` | Whether visitor is interested in golf   |
| `golf_affinity`  | `0`, `1`    | boolean  | `==`, `!=` | Visitor's affinity for golf   |
| `gourmet_affinity` | `0`, `1`    | boolean  | `==`, `!=` | Visitor's affinity for gourmet food   |
| `healthy_living` | `0`, `1`    | boolean  | `==`, `!=` | Whether visitor practices healthy living  |
| `healthy_living_interest`  | `0`, `1`    | boolean  | `==`, `!=` | Visitor's interest in healthy living  |
| `hockey` | `0`, `1`    | boolean  | `==`, `!=` | Whether visitor is interested in hockey   |
| `home_decorating_affinity` | `0`, `1`    | boolean  | `==`, `!=` | Visitor's affinity for home decorating  |
| `home_heat_type` | [see all](/docs/personalization/home-heat-type-property)  | string | `==`, `!=` | Type of heating in the visitor's home   |
| `home_improvement` | `0`, `1`    | boolean  | `==`, `!=` | Whether visitor is interested in home improvement   |
| `home_owner_ordinal` | [see all](/docs/personalization/home-owner-ordinal-property)  | number | `==`, `!=`, `>=`, `<=`, `<`, `>` | Homeowner ordinal   |
| `home_price` | 0-999999    | number | `==`, `!=`, `>=`, `<=`, `<`, `>` | Price of visitor's home   |
| `home_purchased_years_ago` | 0-56    | number | `==`, `!=`, `>=`, `<=`, `<`, `>` | Years since visitor purchased home  |
| `home_study` | `0`, `1`    | boolean  | `==`, `!=` | Whether visitor has a home study  |
| `home_value` | 0-999999999   | number | `==`, `!=`, `>=`, `<=`, `<`, `>` | Value of visitor's home   |
| `hunting`  | `0`, `1`    | boolean  | `==`, `!=` | Whether visitor is interested in hunting  |
| `income_hh`  | [see all](/docs/personalization/income-hh-property) | string | `==`, `!=` | Household income    |
| `income_levels`  | [see all](/docs/personalization/income-levels-property) | string | `==`, `!=` | Levels of income    |
| `income_midpts_hh` | [see all](/docs/personalization/income-midpts-hh-property)  | number | `==`, `!=`, `>=`, `<=`, `<`, `>` | Midpoints of household income   |
| `investment_type`  | `0`, `1`    | number | `==`, `!=`, `>=`, `<=`, `<`, `>` | Types of investments owned by the visitor   |
| `knitting_quilting_sewing` | `0`, `1`    | boolean  | `==`, `!=` | Whether visitor is interested in knitting, quilting, or sewing  |
| `length_of_residence`  | 0-99    | number | `==`, `!=`, `>=`, `<=`, `<`, `>` | Length of residence   |
| `likely_charitable_donor`  | `0`, `1`    | boolean  | `==`, `!=` | Whether visitor is likely to be a charitable donor  |
| `luxury_life`  | `0`, `1`    | boolean  | `==`, `!=` | Whether visitor lives a luxury lifestyle  |
| `magazine_subscriber`  | `0`, `1`    | boolean  | `==`, `!=` | Whether visitor subscribes to magazines   |
| `marital_status` | [see all](/docs/personalization/marital-status-property)  | string | `==`, `!=` | Marital status of the visitor   |
| `median_home_value`  | 0-999999    | number | `==`, `!=`, `>=`, `<=`, `<`, `>` | Median value of homes in visitor's area   |
| `median_income`  | 0-250000    | number | `==`, `!=`, `>=`, `<=`, `<`, `>` | Median income of visitor's area   |
| `mortgage_age` | 0-34    | number | `==`, `!=`, `>=`, `<=`, `<`, `>` | Age of visitor's mortgage   |
| `mortgage_amount`  | 0-999999999   | number | `==`, `!=`, `>=`, `<=`, `<`, `>` | Amount of visitor's mortgage    |
| `mortgage_loan_type` | [see all](/docs/personalization/mortgage-loan-type-property)  | string | `==`, `!=` | Type of mortgage loan   |
| `mortgage_refi_age`  | 0-24    | number | `==`, `!=`, `>=`, `<=`, `<`, `>` | Age of visitor's mortgage refinance   |
| `mortgage_refi_amount` | 0-999999999   | number | `==`, `!=`, `>=`, `<=`, `<`, `>` | Amount of visitor's mortgage refinance  |
| `mortgage_refi_type` | [see all](/docs/personalization/mortgage-refi-type-property)  | string | `==`, `!=` | Type of mortgage refinance    |
| `motor_racing` | `0`, `1`    | boolean  | `==`, `!=` | Whether visitor is interested in motor racing   |
| `motorcycles`  | `0`, `1`    | boolean  | `==`, `!=` | Whether visitor owns or is interested in motorcycles  |
| `motorcycles_affinity` | `0`, `1`    | boolean  | `==`, `!=` | Visitor's affinity for motorcycles  |
| `movies` | `0`, `1`    | boolean  | `==`, `!=` | Whether visitor is interested in movies   |
| `multilingual` | `0`, `1`    | boolean  | `==`, `!=` | Whether visitor is multilingual   |
| `music`  | `0`, `1`    | boolean  | `==`, `!=` | Whether visitor is interested in music  |
| `nascar` | `0`, `1`    | boolean  | `==`, `!=` | Whether visitor is interested in NASCAR   |
| `net_worth_hh` | [see all](/docs/personalization/net-worth-hh-property)  | number | `==`, `!=`, `>=`, `<=`, `<`, `>` | Household net worth   |
| `net_worth_midpt_hh` | [see all](/docs/personalization/net-worth-midpt-hh-property)  | number | `==`, `!=`, `>=`, `<=`, `<`, `>` | Midpoint of household net worth   |
| `new_credit_offered_hh`  | `0`, `1`    | boolean  | `==`, `!=` | Whether visitor has been offered new credit   |
| `num_adults_hh`  | 0-9   | number | `==`, `!=`, `>=`, `<=`, `<`, `>` | Number of adults in the household   |
| `num_children_hh`  | 0-8   | number | `==`, `!=`, `>=`, `<=`, `<`, `>` | Number of children in the household   |
| `num_generations_hh` | 0-3   | number | `==`, `!=`, `>=`, `<=`, `<`, `>` | Number of generations in the household  |
| `num_persons_hh` | 0-9   | number | `==`, `!=`, `>=`, `<=`, `<`, `>` | Number of persons in the household  |
| `number_of_vehicles_in_hh` | 0-10    | number | `==`, `!=`, `>=`, `<=`, `<`, `>` | Number of vehicles in the household   |
| `occupation_detail`  | [see all](/docs/personalization/occupation-detail-property) | string | `==`, `!=` | Visitor's occupation details    |
| `outdoors` | `0`, `1`    | boolean  | `==`, `!=` | Whether visitor is interested in outdoor activities   |
| `owns_investments` | `0`, `1`    | boolean  | `==`, `!=` | Whether visitor owns investments  |
| `owns_stocks_and_bonds`  | `0`, `1`    | boolean  | `==`, `!=` | Whether visitor owns stocks and bonds   |
| `owns_swimming_pool` | `0`, `1`    | number | `==`, `!=`, `>=`, `<=`, `<`, `>` | Whether visitor owns a swimming pool  |
| `pet_owner`  | `0`, `1`    | boolean  | `==`, `!=` | Whether visitor owns pets   |
| `pets_affinity`  | `0`, `1`    | boolean  | `==`, `!=` | Visitor's affinity for pets   |
| `phone_activity` | [see all](/docs/personalization/phone-activity-property)  | string | `==`, `!=` | Phone activity    |
| `phone_can_receive_texts`  | `0`, `1`    | boolean  | `==`, `!=` | Whether visitor's phone can receive texts   |
| `phone_carrier`  | [see all](/docs/personalization/phone-carrier-property) | string | `==`, `!=` | Visitor's phone carrier   |
| `phone_dialing_code` | 0-9999    | number | `==`, `!=`, `>=`, `<=`, `<`, `>` | The 1 to 4 digit dialing code for this phone number or null if unknown. |
| `phone_do_not_call`  | `0`, `1`    | boolean  | `==`, `!=` | Whether visitor's phone is on the do-not-call list  |
| `phone_formatted`  | `+18007132618`  | string | `==`, `!=` | The phone number formatted in the international dialing code. N/A if not formattable. |
| `phone_is_callable`  | [see all](/docs/personalization/phone-is-callable-property) | boolean  | `==`, `!=` | Whether visitor's phone is callable   |
| `phone_type` | [see all](/docs/personalization/line-type-property) | string | `==`, `!=` | Type of phone   |
| `phone_voip` | `0`, `1`    | boolean  | `==`, `!=` | Whether visitor's phone is a VoIP number  |
| `photography`  | `0`, `1`    | boolean  | `==`, `!=` | Whether visitor is interested in photography  |
| `political_contributor`  | `0`, `1`    | boolean  | `==`, `!=` | Whether visitor is a political contributor  |
| `political_party`  | [see all](/docs/personalization/political-party-property) | string | `==`, `!=` | Political party affiliation   |
| `premium_amex_card`  | `0`, `1`    | boolean  | `==`, `!=` | Whether visitor owns a premium Amex card  |
| `premium_card` | `0`, `1`    | boolean  | `==`, `!=` | Whether visitor owns a premium card   |
| `premium_income_hh`  | [see all](/docs/personalization/premium-income-hh-property) | number | `==`, `!=`, `>=`, `<=`, `<`, `>` | Premium household income    |
| `premium_income_midpt_hh`  | [see all](/docs/personalization/premium-income-midpt-hh-property) | number | `==`, `!=`, `>=`, `<=`, `<`, `>` | Midpoint of premium household income  |
| `region_name`  | -   | string | `==`, `!=` | Name of the State   |
| `religion` | [see all](/docs/personalization/religion-property)  | string | `==`, `!=` | Visitor's religion    |
| `running`  | `0`, `1`    | boolean  | `==`, `!=` | Whether visitor is interested in running  |
| `rv` | `0`, `1`    | boolean  | `==`, `!=` | Whether visitor owns or is interested in RVs  |
| `scuba`  | `0`, `1`    | boolean  | `==`, `!=` | Whether visitor is interested in scuba diving   |
| `self_improvement` | `0`, `1`    | boolean  | `==`, `!=` | Whether visitor is interested in self-improvement   |
| `single_family_dwelling` | `0`, `1`    | boolean  | `==`, `!=` | Single-family dwelling ordinal    |
| `snow_skiing`  | `0`, `1`    | boolean  | `==`, `!=` | Whether visitor is interested in snow skiing  |
| `soccer` | `0`, `1`    | boolean  | `==`, `!=` | Whether visitor is interested in soccer   |
| `soho_business`  | `0`, `1`    | boolean  | `==`, `!=` | Whether visitor has a SOHO business   |
| `sports_memoribilia_collector` | `0`, `1`    | boolean  | `==`, `!=` | Whether visitor collects sports memorabilia   |
| `stamps` | `0`, `1`    | boolean  | `==`, `!=` | Whether visitor is interested in stamp collecting   |
| `tennis` | `0`, `1`    | boolean  | `==`, `!=` | Whether visitor is interested in tennis   |
| `travel_cruise_affinity` | `0`, `1`    | boolean  | `==`, `!=` | Visitor's affinity for cruise travel  |
| `travel_cruises` | `0`, `1`    | boolean  | `==`, `!=` | Whether visitor is interested in cruises  |
| `travel_foreign` | `0`, `1`    | boolean  | `==`, `!=` | Whether visitor is interested in foreign travel   |
| `travel_vacation`  | `0`, `1`    | boolean  | `==`, `!=` | Whether visitor is interested in vacations  |
| `truck_owner`  | `0`, `1`    | boolean  | `==`, `!=` | Whether visitor owns a truck    |
| `trucks_affinity`  | `0`, `1`    | boolean  | `==`, `!=` | Visitor's affinity for trucks   |
| `urbanicity` | [see all](/docs/personalization/urbanicity-property)  | string | `==`, `!=` | Degree of urbanization    |
| `veteran_hh` | `0`, `1`    | string | `==`, `!=` | Veteran status in the household   |
| `walking`  | `0`, `1`    | boolean  | `==`, `!=` | Whether visitor is interested in walking  |
| `white_collar` | `0`, `1`    | number | `==`, `!=` | White-collar worker ordinal   |
| `woodworking`  | `0`, `1`    | boolean  | `==`, `!=` | Whether visitor is interested in woodworking  |
| `zip`  | 99999   | string | `==`, `!=` | Visitor's ZIP code    |

## Conclusion

You may use these properties throughout your Dynamic Text and when application you can use the operators given when using comparison operators to make logical decisions.

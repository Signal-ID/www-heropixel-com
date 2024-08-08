---
id: ethnicity-detail-property
title: Ethnicity Detail Property
description: Guide to using the ethnicity detail property
---

# Ethnicity Detail Property

## Introduction

The `ethnicity_detail` property allows you to tailor your content based on the detailed ethnic background of your visitors. This guide provides an overview of how to use the `ethnicity_detail` property to create personalized experiences and includes a list of potential values.

## Usage

The `ethnicity_detail` property can be used to display content that resonates with the visitor's specific ethnic background, ensuring a more relevant and engaging experience.

### Example

**Usage:**

```html
{{#if (eq ethnicity_detail "Hispanic")}}
<p>
  Bienvenido a nuestra comunidad! Explore contenido personalizado
  para usted.
</p>
<img
  src="/images/hispanic_community.jpg"
  alt="Hispanic Community" />
{{else if (eq ethnicity_detail "Japanese")}}
<p>
  日本のコミュニティへようこそ！特別なコンテンツをご覧ください。
</p>
<img
  src="/images/japanese_community.jpg"
  alt="Japanese Community" />
{{else if (eq ethnicity_detail "African American 1")}}
<p>
  Welcome to our African American community! Discover content
  crafted for you.
</p>
<img
  src="/images/african_american_community.jpg"
  alt="African American Community" />
{{else}}
<p>
  Welcome! We offer a wide range of content to suit various
  backgrounds.
</p>
<img src="/images/general_welcome.jpg" alt="General Welcome" />
{{/if}}
```

In this example, a message and image relevant to the visitor's detailed ethnic background are displayed, helping to create a more personalized and engaging experience.

## Potential Values

The following table lists the potential values for the `ethnicity_detail` property:

| Value                            | Description                    |
| -------------------------------- | ------------------------------ |
| `African American 1`             | African American               |
| `Afghani`                        | Afghani                        |
| `African American`               | African American               |
| `Albanian`                       | Albanian                       |
| `Aleut`                          | Aleut                          |
| `Algerian`                       | Algerian                       |
| `Amharic`                        | Amharic                        |
| `Angola`                         | Angolan                        |
| `Armenian`                       | Armenian                       |
| `Ashanti`                        | Ashanti                        |
| `Asian`                          | Asian                          |
| `Austrian`                       | Austrian                       |
| `Azerbejani`                     | Azerbaijani                    |
| `Bangladesh`                     | Bangladeshi                    |
| `Bantu`                          | Bantu                          |
| `Basque`                         | Basque                         |
| `Basotho`                        | Basotho                        |
| `Belgium`                        | Belgian                        |
| `Benin`                          | Beninese                       |
| `Bhutanese`                      | Bhutanese                      |
| `Black African`                  | Black African                  |
| `Bosnian Muslim`                 | Bosnian Muslim                 |
| `Botswana`                       | Botswanan                      |
| `Bulgarian`                      | Bulgarian                      |
| `Burkina Faso`                   | Burkinabe                      |
| `Burundi`                        | Burundian                      |
| `Byelorus`                       | Belarusian                     |
| `Cameroon`                       | Cameroonian                    |
| `Caribbean African American`     | Caribbean African American     |
| `Central African Republic`       | Central African                |
| `Chechnian`                      | Chechen                        |
| `Chad`                           | Chadian                        |
| `Chinese`                        | Chinese                        |
| `Congo`                          | Congolese                      |
| `Cook Islands`                   | Cook Islander                  |
| `Croatian`                       | Croatian                       |
| `Cuba`                           | Cuban                          |
| `Czech`                          | Czech                          |
| `Danish`                         | Danish                         |
| `Djibouti`                       | Djiboutian                     |
| `Dutch`                          | Dutch                          |
| `Dzongha`                        | Bhutanese                      |
| `Egyptian`                       | Egyptian                       |
| `English`                        | English                        |
| `Equatorial Guinea`              | Equatoguinean                  |
| `Estonian`                       | Estonian                       |
| `Ethiopian`                      | Ethiopian                      |
| `Filipino`                       | Filipino                       |
| `Finn`                           | Finnish                        |
| `French`                         | French                         |
| `Ga`                             | Ga                             |
| `Gabon`                          | Gabonese                       |
| `Gambian`                        | Gambian                        |
| `Georgian`                       | Georgian                       |
| `German`                         | German                         |
| `Ghana`                          | Ghanaian                       |
| `Greek`                          | Greek                          |
| `Guinea`                         | Guinean                        |
| `Guinea-Bissau`                  | Bissau-Guinean                 |
| `Guyana`                         | Guyanese                       |
| `Hausa`                          | Hausa                          |
| `Hawaii`                         | Hawaiian                       |
| `Hebrew`                         | Hebrew                         |
| `Hindi Specific Indian`          | Hindi                          |
| `Hispanic`                       | Hispanic                       |
| `Hungarian`                      | Hungarian                      |
| `Icelandic`                      | Icelandic                      |
| `Indian`                         | Indian                         |
| `Indonesian`                     | Indonesian                     |
| `Iranian`                        | Iranian                        |
| `Iraqi`                          | Iraqi                          |
| `Irish`                          | Irish                          |
| `Israeli`                        | Israeli                        |
| `Italian`                        | Italian                        |
| `Ivory Coast`                    | Ivorian                        |
| `Japanese`                       | Japanese                       |
| `Jewish`                         | Jewish                         |
| `Jewish - Hebrew Language Names` | Jewish - Hebrew Language Names |
| `Jordan`                         | Jordanian                      |
| `Kampuchea`                      | Cambodian                      |
| `Kazakh`                         | Kazakhstani                    |
| `Kenyan`                         | Kenyan                         |
| `Khazakstani`                    | Kazakhstani                    |
| `Khmer`                          | Cambodian                      |
| `Kirghizstan`                    | Kyrgyz                         |
| `Korean`                         | Korean                         |
| `Kurdish`                        | Kurdish                        |
| `Kuwaiti`                        | Kuwaiti                        |
| `Laotian`                        | Laotian                        |
| `Latvian`                        | Latvian                        |
| `Lebanese`                       | Lebanese                       |
| `Liberian`                       | Liberian                       |
| `Liechtenstein`                  | Liechtensteiner                |
| `Lithuanian`                     | Lithuanian                     |
| `Luxembourg`                     | Luxembourger                   |
| `Macedonian`                     | Macedonian                     |
| `Malay`                          | Malay                          |
| `Malawi`                         | Malawian                       |
| `Maldives`                       | Maldivian                      |
| `Mali`                           | Malian                         |
| `Malta`                          | Maltese                        |
| `Manx - Isle of Man`             | Manx                           |
| `Mauritania`                     | Mauritanian                    |
| `Mexican`                        | Mexican                        |
| `Misc. South African`            | South African                  |
| `Misc. South East Asian`         | South East Asian               |
| `Moldavian`                      | Moldovan                       |
| `Mongolian`                      | Mongolian                      |
| `Moroccan`                       | Moroccan                       |
| `Mozambique`                     | Mozambican                     |
| `Multi Ethnic`                   | Multi Ethnic                   |
| `Myanamar`                       | Burmese                        |
| `Namibian`                       | Namibian                       |
| `Nauru`                          | Nauruan                        |
| `Nepal`                          | Nepalese                       |
| `Niger`                          | Nigerien                       |
| `Nigerian`                       | Nigerian                       |
| `Norwegian`                      | Norwegian                      |
| `Other Asian`                    | Asian                          |
| `Overt European Jewish Names`    | European Jewish                |
| `Pakistani`                      | Pakistani                      |
| `Pakistan (Baluchistan)`         | Baloch                         |
| `Palau`                          | Palauan                        |
| `Palestine`                      | Palestinian                    |
| `Papau New Guinea`               | Papua New Guinean              |
| `Paraguay`                       | Paraguayan                     |
| `Persian`                        | Persian                        |
| `Peru`                           | Peruvian                       |
| `Philippine`                     | Filipino                       |
| `Polish`                         | Polish                         |
| `Polynesia`                      | Polynesian                     |
| `Portuguese`                     | Portuguese                     |
| `Puerto Rico`                    | Puerto Rican                   |
| `Qatar`                          | Qatari                         |
| `Romanian`                       | Romanian                       |
| `Rwandan`                        | Rwandan                        |
| `Saudi`                          | Saudi Arabian                  |
| `Scottish`                       | Scottish                       |
| `Senegalese`                     | Senegalese                     |
| `Serbian`                        | Serbian                        |
| `Seychelles`                     | Seychellois                    |
| `Sierra Leone`                   | Sierra Leonean                 |
| `Singaporean`                    | Singaporean                    |
| `Sinhalese`                      | Sinhalese                      |
| `Slovak`                         | Slovakian                      |
| `Slovenian`                      | Slovenian                      |
| `Somalian`                       | Somali                         |
| `South African`                  | South African                  |
| `Spanish`                        | Spanish                        |
| `Sri Lankan`                     | Sri Lankan                     |
| `Sudanese`                       | Sudanese                       |
| `Surinam`                        | Surinamese                     |
| `Swaziland`                      | Swazi                          |
| `Swedish`                        | Swedish                        |
| `Swiss`                          | Swiss                          |
| `Syrian`                         | Syrian                         |
| `Tagalog`                        | Filipino                       |
| `Taiwan`                         | Taiwanese                      |
| `Tajik`                          | Tajik                          |
| `Tanzania`                       | Tanzanian                      |
| `Telugu`                         | Telugu                         |
| `Thai`                           | Thai                           |
| `Tibetan`                        | Tibetan                        |
| `Togo`                           | Togolese                       |
| `Tonga`                          | Tongan                         |
| `Turkish`                        | Turkish                        |
| `Turkmeni`                       | Turkmen                        |
| `Ugandan`                        | Ugandan                        |
| `Ukrainian`                      | Ukrainian                      |
| `Uniquely African`               | African                        |
| `Urdu`                           | Urdu                           |
| `Uzbek`                          | Uzbek                          |
| `Vanuatu`                        | Ni-Vanuatu                     |
| `Vietnamese`                     | Vietnamese                     |
| `Welsh`                          | Welsh                          |
| `Western Somoa`                  | Samoan                         |
| `Xhosa`                          | Xhosa                          |
| `Yemeni`                         | Yemeni                         |
| `Zaire`                          | Congolese (Zaire)              |
| `Zambian`                        | Zambian                        |
| `Zimbabwe`                       | Zimbabwean                     |
| `Zulu`                           | Zulu                           |

## Conclusion

Using the `ethnicity_detail` property allows you to personalize your landing pages based on the visitor's specific ethnic background. By leveraging this property, you can deliver content that resonates with a diverse audience, enhancing user engagement and effectiveness.

## Next Steps

Explore more features:

- [String and Number Functions](/docs/personalization/hero-string-number-functions)
- [Conditional Helpers](/docs/personalization/hero-conditional-helpers)
- [Advanced Templating Techniques](/docs/personalization/hero-advanced-techniques)

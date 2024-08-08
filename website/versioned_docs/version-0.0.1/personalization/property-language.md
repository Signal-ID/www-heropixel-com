---
id: hero-language-property
title: Language Property
description: Guide to using the language property in Hero Dynamic Text
---

# Language Property

## Introduction

The `language` property in Hero Dynamic Text allows you to tailor your content to the preferred language of your visitors. This guide provides an overview of how to use the `language` property to create personalized experiences and includes a comprehensive list of potential language values.

## Usage

The `language` property can be used to display content in the visitor's preferred language, ensuring a more engaging and relevant experience.

### Example

**Usage:**

```html
{{#if (eq language "Spanish")}}
<p>Bienvenido a nuestro sitio web!</p>
{{else if (eq language "French")}}
<p>Bienvenue sur notre site Web!</p>
{{else}}
<p>Welcome to our website!</p>
{{/if}}
```

In this example, the message is displayed in Spanish if the visitor's language is Spanish, in French if the language is French, and in English for all other languages.

## Potential Values

The following table lists the potential values for the `language` property:

| Value                                            | Description                   |
| ------------------------------------------------ | ----------------------------- |
| Russian                                          | Русский                       |
| English                                          | English                       |
| Polish                                           | Polski                        |
| Italian                                          | Italiano                      |
| Spanish                                          | Español                       |
| Serbo-Croatian                                   | Srpskohrvatski                |
| Portuguese                                       | Português                     |
| Finnish                                          | Suomi                         |
| French                                           | Français                      |
| Chinese (Mandarin, Cantonese and other dialects) | 中文 (普通话, 粤语及其他方言) |
| Vietnamese                                       | Tiếng Việt                    |
| Japanese                                         | 日本語                        |
| Hindi                                            | हिन्दी                        |
| Korean                                           | 한국어                        |
| Farsi                                            | فارسی                         |
| Dzongkha                                         | རྫོང་ཁ                        |
| Swedish                                          | Svenska                       |
| Arabic                                           | العربية                       |
| Hebrew                                           | עברית                         |
| German                                           | Deutsch                       |
| Turkish                                          | Türkçe                        |
| Urdu                                             | اردو                          |
| Slovenian                                        | Slovenščina                   |
| Greek                                            | Ελληνικά                      |
| Romanian                                         | Română                        |
| Dutch                                            | Nederlands                    |
| Danish                                           | Dansk                         |
| Bulgarian                                        | Български                     |
| Armenian                                         | Հայերեն                       |
| Norwegian                                        | Norsk                         |
| Latvian                                          | Latviešu                      |
| Laotian (including Hmong)                        | ລາວ (ຮມົງ)                    |
| Sinhalese                                        | සිංහල                         |
| Czech                                            | Čeština                       |
| Hungarian                                        | Magyar                        |
| Kazakh                                           | Қазақ                         |
| Khmer                                            | ភាសាខ្មែរ                     |
| Tibetan                                          | བོད་སྐད་                      |
| Thai                                             | ภาษาไทย                       |
| Ga                                               | Ga                            |
| Lithuanian                                       | Lietuvių                      |
| Tagalog                                          | Tagalog                       |
| Burmese                                          | မြန်မာစာ                      |
| Indonesian                                       | Bahasa Indonesia              |
| Amharic                                          | አማርኛ                          |
| Albanian                                         | Shqip                         |
| Pashto                                           | پښتو                          |
| Slovakian                                        | Slovenčina                    |
| Swahili                                          | Kiswahili                     |
| Estonian                                         | Eesti keel                    |
| Azeri                                            | Azərbaycan                    |
| Oromo                                            | Oromoo                        |
| Ashanti                                          | Asante                        |
| Uzbeki                                           | Oʻzbekcha                     |
| Somali                                           | Soomaali                      |
| Georgian                                         | ქართული                       |
| Icelandic                                        | Íslenska                      |
| Nepali                                           | नेपाली                        |
| Tswana                                           | Setswana                      |
| Macedonian                                       | Македонски                    |
| Basque                                           | Euskara                       |
| Xhosa                                            | isiXhosa                      |
| Zulu                                             | isiZulu                       |
| Mongolian                                        | Монгол                        |
| Tongan                                           | Lea fakatonga                 |
| Tajik                                            | тоҷикӣ                        |
| Sotho                                            | Sesotho                       |
| Samoan                                           | Gagana fa'a Samoa             |
| Bantu                                            | Bantu languages               |
| Turkmeni                                         | Türkmençe                     |

## Conclusion

Using the `language` property in Hero Dynamic Text allows you to personalize your landing pages based on the visitor's preferred language. By leveraging this property, you can deliver a more engaging and relevant user experience.

## Next Steps

Explore more features of Hero Dynamic Text:

- [String and Number Functions](/docs/personalization/hero-string-number-functions)
- [Conditional Helpers](/docs/personalization/hero-conditional-helpers)
- [Advanced Templating Techniques](/docs/personalization/hero-advanced-techniques)

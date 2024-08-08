/*! For license information please see b2a6fb43.0c5b0b33.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [8341],
  {
    2192: (e, n, i) => {
      var r = i(3696),
        s = Symbol.for('react.element'),
        d = Symbol.for('react.fragment'),
        t = Object.prototype.hasOwnProperty,
        c =
          r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        o = {key: !0, ref: !0, __self: !0, __source: !0};
      function l(e, n, i) {
        var r,
          d = {},
          l = null,
          h = null;
        for (r in (void 0 !== i && (l = '' + i),
        void 0 !== n.key && (l = '' + n.key),
        void 0 !== n.ref && (h = n.ref),
        n))
          t.call(n, r) && !o.hasOwnProperty(r) && (d[r] = n[r]);
        if (e && e.defaultProps)
          for (r in (n = e.defaultProps)) void 0 === d[r] && (d[r] = n[r]);
        return {
          $$typeof: s,
          type: e,
          key: l,
          ref: h,
          props: d,
          _owner: c.current,
        };
      }
      (n.Fragment = d), (n.jsx = l), (n.jsxs = l);
    },
    2540: (e, n, i) => {
      e.exports = i(2192);
    },
    472: (e, n, i) => {
      i.r(n),
        i.d(n, {
          assets: () => o,
          contentTitle: () => t,
          default: () => x,
          frontMatter: () => d,
          metadata: () => c,
          toc: () => l,
        });
      var r = i(2540),
        s = i(3023);
      const d = {
          id: 'unique-leads-attributes',
          title: 'Unique Leads Stream',
          description:
            'The available Consumer Attributes for Unique Leads Stream',
        },
        t = 'Consumer Attributes Available Via Sync',
        c = {
          id: 'destinations/properties/unique-leads-attributes',
          title: 'Unique Leads Stream',
          description:
            'The available Consumer Attributes for Unique Leads Stream',
          source:
            '@site/versioned_docs/version-0.0.1/destinations/properties/unique-leads-attributes.md',
          sourceDirName: 'destinations/properties',
          slug: '/destinations/properties/unique-leads-attributes',
          permalink: '/docs/destinations/properties/unique-leads-attributes',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 172315228e4,
          frontMatter: {
            id: 'unique-leads-attributes',
            title: 'Unique Leads Stream',
            description:
              'The available Consumer Attributes for Unique Leads Stream',
          },
          sidebar: 'integrations',
          previous: {
            title: 'Overview of Destinations',
            permalink: '/docs/intro-to-integrations',
          },
          next: {title: 'Astra DB', permalink: '/docs/destinations/astra'},
        },
        o = {},
        l = [
          {value: 'Introduction', id: 'introduction', level: 2},
          {value: 'Consumer Attributes', id: 'consumer-attributes', level: 2},
          {value: 'Device Technology', id: 'device-technology', level: 2},
          {value: 'Consumer Affinities', id: 'consumer-affinities', level: 2},
          {value: 'Interests', id: 'interests', level: 2},
          {value: 'Categories', id: 'categories', level: 2},
          {value: 'Collectors', id: 'collectors', level: 2},
        ];
      function h(e) {
        const n = {
          a: 'a',
          code: 'code',
          h1: 'h1',
          h2: 'h2',
          li: 'li',
          ol: 'ol',
          p: 'p',
          strong: 'strong',
          table: 'table',
          tbody: 'tbody',
          td: 'td',
          th: 'th',
          thead: 'thead',
          tr: 'tr',
          ...(0, s.R)(),
          ...e.components,
        };
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(n.h1, {
              id: 'consumer-attributes-available-via-sync',
              children: 'Consumer Attributes Available Via Sync',
            }),
            '\n',
            (0, r.jsx)(n.h2, {id: 'introduction', children: 'Introduction'}),
            '\n',
            (0, r.jsx)(n.p, {
              children:
                'When choosing the stream type during integration config you\'ll see the "Unique Leads" option. When you choose that option we will send you one record of the lead ever. No matter how often they have visited your website. This integration stream is best for CRMs where you plan to contact the leads and store their information.',
            }),
            '\n',
            (0, r.jsx)(n.p, {
              children:
                "Here's a list of the data fields that are available through this stream. If you don't find the data you're looking for, please request it from support.",
            }),
            '\n',
            (0, r.jsx)(n.p, {
              children:
                "Not all destinations support receiving all of this data. It's all available to send, but the destination may not be capable of receiving it.",
            }),
            '\n',
            (0, r.jsx)(n.h2, {
              id: 'consumer-attributes',
              children: 'Consumer Attributes',
            }),
            '\n',
            (0, r.jsxs)(n.p, {
              children: [
                '| Property                     | Values                                                                    | Value Type | Description                                                                           |\n| ---------------------------- | ------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------- | ------------------------------ |\n| ',
                (0, r.jsx)(n.code, {children: 'consumer_id'}),
                '                | 0-99999999                                                                | number     | Unique ID assigned to this individual.                                                |\n| ',
                (0, r.jsx)(n.code, {children: 'hem'}),
                '                        | -                                                                         | string     | Hashed email that was provided by you to us at the time of engagement                 |\n| ',
                (0, r.jsx)(n.code, {children: 'first_name'}),
                "                 | -                                                                         | string     | Consumer's First Name                                                                 |\n| ",
                (0, r.jsx)(n.code, {children: 'last_name'}),
                "                  | -                                                                         | string     | Consumer's Last Name                                                                  |\n| ",
                (0, r.jsx)(n.code, {children: 'email'}),
                "                      | -                                                                         | string     | Consumer's Valid and Verified Email Address                                           |\n| ",
                (0, r.jsx)(n.code, {children: 'phone'}),
                "                      | -                                                                         | string     | Consumer's Valid and Verified Phone Number                                            |\n| ",
                (0, r.jsx)(n.code, {children: 'address'}),
                "                    | -                                                                         | string     | Consumer's Physical Address                                                           |\n| ",
                (0, r.jsx)(n.code, {children: 'city'}),
                "                       | -                                                                         | string     | Consumer's city                                                                       |\n| ",
                (0, r.jsx)(n.code, {children: 'region_name'}),
                '                | -                                                                         | string     | Name of the State                                                                     |\n| ',
                (0, r.jsx)(n.code, {children: 'zip'}),
                "                        | 99999                                                                     | string     | Consumer's ZIP code                                                                   |\n| ",
                (0, r.jsx)(n.code, {children: 'country_code'}),
                '               | ',
                (0, r.jsx)(n.code, {children: 'US'}),
                "                                                                      | string     | Consumer's Country. Hero Pixel only returns US persons                                |\n| ",
                (0, r.jsx)(n.code, {children: 'age'}),
                "                        | 0-120                                                                     | number     | Consumer's age                                                                        |\n| ",
                (0, r.jsx)(n.code, {children: 'amex_card'}),
                '                  | ',
                (0, r.jsx)(n.code, {children: '0'}),
                ', ',
                (0, r.jsx)(n.code, {children: '1'}),
                '                                                                  | boolean    | Whether visitor owns an Amex card                                                     |\n| ',
                (0, r.jsx)(n.code, {children: 'address_type'}),
                '               | ',
                (0, r.jsx)(n.a, {
                  href: '/docs/destinations/properties/address-type-property',
                  children: 'see all',
                }),
                "            | string     | Type of Consumer's address                                                            |\n| ",
                (0, r.jsx)(n.code, {children: 'bank_card'}),
                '                  | ',
                (0, r.jsx)(n.code, {children: '0'}),
                ', ',
                (0, r.jsx)(n.code, {children: '1'}),
                '                                                                  | boolean    | Whether visitor owns a bank card                                                      |\n| ',
                (0, r.jsx)(n.code, {children: 'birth_month_and_year'}),
                '       | ',
                (0, r.jsx)(n.code, {children: '1951-10-19'}),
                "                                                              | string     | Consumer's birth date                                                                 |\n| ",
                (0, r.jsx)(n.code, {children: 'birth_year'}),
                "                 | YYYY                                                                      | number     | Consumer's birth year                                                                 |\n| ",
                (0, r.jsx)(n.code, {children: 'blue_collar'}),
                '                | ',
                (0, r.jsx)(n.code, {children: '0'}),
                ', ',
                (0, r.jsx)(n.code, {children: '1'}),
                "                                                                  | boolean    | Consumer's blue collar score                                                          |\n| ",
                (0, r.jsx)(n.code, {children: 'cat_owner'}),
                '                  | ',
                (0, r.jsx)(n.code, {children: '0'}),
                ', ',
                (0, r.jsx)(n.code, {children: '1'}),
                "                                                                  | boolean    | Consumer's blue collar score                                                          |\n| ",
                (0, r.jsx)(n.code, {children: 'child_aged_0_3_hh'}),
                '          | 0-9                                                                       | number     | How many children between 0 and 3 yrs of age within the HH                            |\n| ',
                (0, r.jsx)(n.code, {children: 'child_aged_4_6_hh'}),
                '          | 0-9                                                                       | number     | How many children between 4 and 6 yrs of age within the HH                            |\n| ',
                (0, r.jsx)(n.code, {children: 'child_aged_10_12_hh'}),
                '        | 0-9                                                                       | number     | How many children between 10 and 12 yrs of age within the HH                          |\n| ',
                (0, r.jsx)(n.code, {children: 'child_aged_13_18_hh'}),
                '        | 0-9                                                                       | number     | How many children between 13 and 18 yrs of age within the HH                          |\n| ',
                (0, r.jsx)(n.code, {children: 'created_at'}),
                '                 | -                                                                         | integer    | The 10 digit epoch timestamp of the first Engagement on your website                  |\n| ',
                (0, r.jsx)(n.code, {children: 'credit_range'}),
                '               | ',
                (0, r.jsx)(n.a, {
                  href: '/docs/destinations/properties/credit-range-property',
                  children: 'see all',
                }),
                "            | string     | Consumer's credit range                                                               |\n| ",
                (0, r.jsx)(n.code, {children: 'credit_card'}),
                '                | ',
                (0, r.jsx)(n.code, {children: '0'}),
                ', ',
                (0, r.jsx)(n.code, {children: '1'}),
                '                                                                  | number     | Number of credit cards owned by the visitor                                           |\n| ',
                (0, r.jsx)(n.code, {children: 'credit_midpts'}),
                '              | ',
                (0, r.jsx)(n.a, {
                  href: '/docs/destinations/properties/credit-midpts-property',
                  children: 'see all',
                }),
                '           | number     | Credit midpoints                                                                      |\n| ',
                (0, r.jsx)(n.code, {children: 'custom_one'}),
                '                 | -                                                                         | string     | The Custom parameter you tagged the lead with at the time of engagement               |\n| ',
                (0, r.jsx)(n.code, {children: 'custom_two'}),
                '                 | -                                                                         | string     | The Custom parameter you tagged the lead with at the time of engagement               |\n| ',
                (0, r.jsx)(n.code, {children: 'custom_three'}),
                '               | -                                                                         | string     | The Custom parameter you tagged the lead with at the time of engagement               |\n| ',
                (0, r.jsx)(n.code, {children: 'custom_four'}),
                '                | -                                                                         | string     | The Custom parameter you tagged the lead with at the time of engagement               |\n| ',
                (0, r.jsx)(n.code, {children: 'custom_five'}),
                '                | -                                                                         | string     | The Custom parameter you tagged the lead with at the time of engagement               |\n| ',
                (0, r.jsx)(n.code, {children: 'dog_owner'}),
                '                  | ',
                (0, r.jsx)(n.code, {children: '0'}),
                ', ',
                (0, r.jsx)(n.code, {children: '1'}),
                '                                                                  | boolean    | Whether visitor owns a Dog                                                            |\n| ',
                (0, r.jsx)(n.code, {children: 'dwelling_type'}),
                '              | ',
                (0, r.jsx)(n.a, {
                  href: '/docs/destinations/properties/dwelling-type-property',
                  children: 'see all',
                }),
                '           | string     | Type of dwelling                                                                      |\n| ',
                (0, r.jsx)(n.code, {children: 'ethnic_group'}),
                '               | ',
                (0, r.jsx)(n.a, {
                  href: '/docs/destinations/properties/hero-ethnic-group-property',
                  children: 'see all',
                }),
                "       | string     | Consumer's ethnic group                                                               |\n| ",
                (0, r.jsx)(n.code, {children: 'education'}),
                '                  | ',
                (0, r.jsx)(n.a, {
                  href: '/docs/destinations/properties/education-property',
                  children: 'see all',
                }),
                "               | string     | Consumer's education level                                                            |\n| ",
                (0, r.jsx)(n.code, {children: 'education_ordinal'}),
                '          | ',
                (0, r.jsx)(n.a, {
                  href: '/docs/destinations/properties/education-ordinal-property',
                  children: 'see all',
                }),
                "       | number     | Consumer's education ordinal                                                          |\n| ",
                (0, r.jsx)(n.code, {children: 'ethnicity_detail'}),
                '           | ',
                (0, r.jsx)(n.a, {
                  href: '/docs/destinations/properties/ethnicity-detail-property',
                  children: 'see all',
                }),
                '        | string     | Detailed ethnicity of the visitor                                                     |\n| ',
                (0, r.jsx)(n.code, {children: 'ethnicity_white'}),
                '            | ',
                (0, r.jsx)(n.code, {children: '0'}),
                ', ',
                (0, r.jsx)(n.code, {children: '1'}),
                '                                                                  | string     | White ethnicity                                                                       |\n| ',
                (0, r.jsx)(n.code, {children: 'ethnicity_african_american'}),
                ' | ',
                (0, r.jsx)(n.code, {children: '0'}),
                ', ',
                (0, r.jsx)(n.code, {children: '1'}),
                '                                                                  | string     | African American ethnicity                                                            |\n| ',
                (0, r.jsx)(n.code, {children: 'ethnicity_hispanic'}),
                '         | ',
                (0, r.jsx)(n.code, {children: '0'}),
                ', ',
                (0, r.jsx)(n.code, {children: '1'}),
                '                                                                  | string     | Hispanic ethnicity                                                                    |\n| ',
                (0, r.jsx)(n.code, {children: 'ethnicity_asian'}),
                '            | ',
                (0, r.jsx)(n.code, {children: '0'}),
                ', ',
                (0, r.jsx)(n.code, {children: '1'}),
                '                                                                  | string     | Asian ethnicity                                                                       |\n| ',
                (0, r.jsx)(n.code, {children: 'ethnicity_jewish'}),
                '           | ',
                (0, r.jsx)(n.code, {children: '0'}),
                ', ',
                (0, r.jsx)(n.code, {children: '1'}),
                '                                                                  | string     | Jewish ethnicity                                                                      |\n| ',
                (0, r.jsx)(n.code, {children: 'gender'}),
                '                     | ',
                (0, r.jsx)(n.code, {children: 'Male'}),
                ', ',
                (0, r.jsx)(n.code, {children: 'Female'}),
                "                                                          | string     | Consumer's gender                                                                     |\n| ",
                (0, r.jsx)(n.code, {children: 'generation'}),
                '                 | ',
                (0, r.jsx)(n.a, {
                  href: '/docs/destinations/properties/hero-generation-property',
                  children: 'see all',
                }),
                "         | string     | Consumer's generation                                                                 |\n| ",
                (0, r.jsx)(n.code, {children: 'generation_ordinal'}),
                '         | ',
                (0, r.jsx)(n.a, {
                  href: '/docs/destinations/properties/generation-ordinal-property',
                  children: 'see all',
                }),
                "      | number     | Consumer's generation ordinal                                                         |\n| ",
                (0, r.jsx)(n.code, {children: 'home_owner'}),
                '                 | ',
                (0, r.jsx)(n.a, {
                  href: '/docs/destinations/properties/home-owner-property',
                  children: 'see all',
                }),
                '              | string     | Whether visitor is a homeowner                                                        |\n| ',
                (0, r.jsx)(n.code, {children: 'home_owner_ordinal'}),
                '         | ',
                (0, r.jsx)(n.a, {
                  href: '/docs/destinations/properties/home-owner-ordinal-property',
                  children: 'see all',
                }),
                '      | number     | Homeowner ordinal                                                                     |\n| ',
                (0, r.jsx)(n.code, {children: 'home_heat_type'}),
                '             | ',
                (0, r.jsx)(n.a, {
                  href: '/docs/destinations/properties/home-heat-type-property',
                  children: 'see all',
                }),
                "          | string     | Type of heating in the Consumer's home                                                |\n| ",
                (0, r.jsx)(n.code, {children: 'home_improvement'}),
                '           | ',
                (0, r.jsx)(n.code, {children: '0'}),
                ', ',
                (0, r.jsx)(n.code, {children: '1'}),
                '                                                                  | boolean    | Whether visitor is interested in home improvement                                     |\n| ',
                (0, r.jsx)(n.code, {children: 'home_price'}),
                "                 | 0-999999                                                                  | number     | Price of Consumer's home                                                              |\n| ",
                (0, r.jsx)(n.code, {children: 'home_purchased_years_ago'}),
                '   | 0-56                                                                      | number     | Years since visitor purchased home                                                    |\n| ',
                (0, r.jsx)(n.code, {children: 'home_study'}),
                '                 | ',
                (0, r.jsx)(n.code, {children: '0'}),
                ', ',
                (0, r.jsx)(n.code, {children: '1'}),
                '                                                                  | boolean    | Whether visitor has a home study                                                      |\n| ',
                (0, r.jsx)(n.code, {children: 'home_value'}),
                "                 | 0-999999999                                                               | number     | Value of Consumer's home                                                              |\n| ",
                (0, r.jsx)(n.code, {children: 'income_hh'}),
                '                  | ',
                (0, r.jsx)(n.a, {
                  href: '/docs/destinations/properties/income-hh-property',
                  children: 'see all',
                }),
                '               | string     | Household income                                                                      |\n| ',
                (0, r.jsx)(n.code, {children: 'income_levels'}),
                '              | ',
                (0, r.jsx)(n.a, {
                  href: '/docs/destinations/properties/income-levels-property',
                  children: 'see all',
                }),
                '           | string     | Levels of income                                                                      |\n| ',
                (0, r.jsx)(n.code, {children: 'income_midpts_hh'}),
                '           | ',
                (0, r.jsx)(n.a, {
                  href: '/docs/destinations/properties/income-midpts-hh-property',
                  children: 'see all',
                }),
                '        | number     | Midpoints of household income                                                         |\n| ',
                (0, r.jsx)(n.code, {children: 'investment_type'}),
                '            | ',
                (0, r.jsx)(n.code, {children: '0'}),
                ', ',
                (0, r.jsx)(n.code, {children: '1'}),
                '                                                                  | number     | Types of investments owned by the visitor                                             |\n| ',
                (0, r.jsx)(n.code, {children: 'language'}),
                '                   | ',
                (0, r.jsx)(n.code, {children: 'en-US'}),
                '                                                                   | string     |                                                                                       | Browser language specification |\n| ',
                (0, r.jsx)(n.code, {children: 'Language'}),
                '                   | ',
                (0, r.jsx)(n.a, {
                  href: '/docs/destinations/properties/hero-language-property',
                  children: 'see all',
                }),
                "           | string     | Consumer's preferred language                                                         |\n| ",
                (0, r.jsx)(n.code, {children: 'lat'}),
                '                        | -                                                                         | string     |                                                                                       | The users Lattitude            |\n| ',
                (0, r.jsx)(n.code, {children: 'lon'}),
                '                        | -                                                                         | string     |                                                                                       | The users Longitude            |\n| ',
                (0, r.jsx)(n.code, {children: 'likely_charitable_donor'}),
                '    | ',
                (0, r.jsx)(n.code, {children: '0'}),
                ', ',
                (0, r.jsx)(n.code, {children: '1'}),
                '                                                                  | boolean    | Whether visitor is likely to be a charitable donor                                    |\n| ',
                (0, r.jsx)(n.code, {children: 'length_of_residence'}),
                '        | 0-99                                                                      | number     | Length of residence                                                                   |\n| ',
                (0, r.jsx)(n.code, {children: 'marital_status'}),
                '             | ',
                (0, r.jsx)(n.a, {
                  href: '/docs/destinations/properties/marital-status-property',
                  children: 'see all',
                }),
                '          | string     | Marital status of the visitor                                                         |\n| ',
                (0, r.jsx)(n.code, {children: 'md5'}),
                '                        | -                                                                         | string     | 32 Character MD5 encrypted hash of their email                                        |\n| ',
                (0, r.jsx)(n.code, {children: 'median_home_value'}),
                "          | 0-999999                                                                  | number     | Median value of homes in Consumer's area                                              |\n| ",
                (0, r.jsx)(n.code, {children: 'median_income'}),
                "              | 0-250000                                                                  | number     | Median income of Consumer's area                                                      |\n| ",
                (0, r.jsx)(n.code, {children: 'mortgage_age'}),
                "               | 0-34                                                                      | number     | Age of Consumer's mortgage                                                            |\n| ",
                (0, r.jsx)(n.code, {children: 'mortgage_amount'}),
                "            | 0-999999999                                                               | number     | Amount of Consumer's mortgage                                                         |\n| ",
                (0, r.jsx)(n.code, {children: 'mortgage_loan_type'}),
                '         | ',
                (0, r.jsx)(n.a, {
                  href: '/docs/destinations/properties/mortgage-loan-type-property',
                  children: 'see all',
                }),
                '      | string     | Type of mortgage loan                                                                 |\n| ',
                (0, r.jsx)(n.code, {children: 'mortgage_refi_age'}),
                "          | 0-24                                                                      | number     | Age of Consumer's mortgage refinance                                                  |\n| ",
                (0, r.jsx)(n.code, {children: 'mortgage_refi_amount'}),
                "       | 0-999999999                                                               | number     | Amount of Consumer's mortgage refinance                                               |\n| ",
                (0, r.jsx)(n.code, {children: 'mortgage_refi_type'}),
                '         | ',
                (0, r.jsx)(n.a, {
                  href: '/docs/destinations/properties/mortgage-refi-type-property',
                  children: 'see all',
                }),
                '      | string     | Type of mortgage refinance                                                            |\n| ',
                (0, r.jsx)(n.code, {children: 'multilingual'}),
                '               | ',
                (0, r.jsx)(n.code, {children: '0'}),
                ', ',
                (0, r.jsx)(n.code, {children: '1'}),
                '                                                                  | boolean    | Whether visitor is multilingual                                                       |\n| ',
                (0, r.jsx)(n.code, {children: 'net_worth_hh'}),
                '               | ',
                (0, r.jsx)(n.a, {
                  href: '/docs/destinations/properties/net-worth-hh-property',
                  children: 'see all',
                }),
                '            | number     | Household net worth                                                                   |\n| ',
                (0, r.jsx)(n.code, {children: 'net_worth_midpt_hh'}),
                '         | ',
                (0, r.jsx)(n.a, {
                  href: '/docs/destinations/properties/net-worth-midpt-hh-property',
                  children: 'see all',
                }),
                '      | number     | Midpoint of household net worth                                                       |\n| ',
                (0, r.jsx)(n.code, {children: 'new_credit_offered_hh'}),
                '      | ',
                (0, r.jsx)(n.code, {children: '0'}),
                ', ',
                (0, r.jsx)(n.code, {children: '1'}),
                '                                                                  | boolean    | Whether visitor has been offered new credit                                           |\n| ',
                (0, r.jsx)(n.code, {children: 'num_adults_hh'}),
                '              | 0-9                                                                       | number     | Number of adults in the household                                                     |\n| ',
                (0, r.jsx)(n.code, {children: 'num_children_hh'}),
                '            | 0-8                                                                       | number     | Number of children in the household                                                   |\n| ',
                (0, r.jsx)(n.code, {children: 'num_generations_hh'}),
                '         | 0-3                                                                       | number     | Number of generations in the household                                                |\n| ',
                (0, r.jsx)(n.code, {children: 'num_persons_hh'}),
                '             | 0-9                                                                       | number     | Number of persons in the household                                                    |\n| ',
                (0, r.jsx)(n.code, {children: 'number_of_vehicles_in_hh'}),
                '   | 0-10                                                                      | number     | Number of vehicles in the household                                                   |\n| ',
                (0, r.jsx)(n.code, {children: 'occupation_detail'}),
                '          | ',
                (0, r.jsx)(n.a, {
                  href: '/docs/destinations/properties/occupation-detail-property',
                  children: 'see all',
                }),
                "       | string     | Consumer's occupation details                                                         |\n| ",
                (0, r.jsx)(n.code, {children: 'outdoors'}),
                '                   | ',
                (0, r.jsx)(n.code, {children: '0'}),
                ', ',
                (0, r.jsx)(n.code, {children: '1'}),
                '                                                                  | boolean    | Whether visitor is interested in outdoor activities                                   |\n| ',
                (0, r.jsx)(n.code, {children: 'owns_investments'}),
                '           | ',
                (0, r.jsx)(n.code, {children: '0'}),
                ', ',
                (0, r.jsx)(n.code, {children: '1'}),
                '                                                                  | boolean    | Whether visitor owns investments                                                      |\n| ',
                (0, r.jsx)(n.code, {children: 'owns_stocks_and_bonds'}),
                '      | ',
                (0, r.jsx)(n.code, {children: '0'}),
                ', ',
                (0, r.jsx)(n.code, {children: '1'}),
                '                                                                  | boolean    | Whether visitor owns stocks and bonds                                                 |\n| ',
                (0, r.jsx)(n.code, {children: 'owns_swimming_pool'}),
                '         | ',
                (0, r.jsx)(n.code, {children: '0'}),
                ', ',
                (0, r.jsx)(n.code, {children: '1'}),
                '                                                                  | number     | Whether visitor owns a swimming pool                                                  |\n| ',
                (0, r.jsx)(n.code, {children: 'pet_owner'}),
                '                  | ',
                (0, r.jsx)(n.code, {children: '0'}),
                ', ',
                (0, r.jsx)(n.code, {children: '1'}),
                '                                                                  | boolean    | Whether visitor owns pets                                                             |\n| ',
                (0, r.jsx)(n.code, {children: 'phone_activity'}),
                '             | ',
                (0, r.jsx)(n.a, {
                  href: '/docs/destinations/properties/phone-activity-property',
                  children: 'see all',
                }),
                '          | string     | Phone activity                                                                        |\n| ',
                (0, r.jsx)(n.code, {children: 'phone_can_receive_texts'}),
                '    | ',
                (0, r.jsx)(n.code, {children: '0'}),
                ', ',
                (0, r.jsx)(n.code, {children: '1'}),
                "                                                                  | boolean    | Whether Consumer's phone can receive texts                                            |\n| ",
                (0, r.jsx)(n.code, {children: 'phone_carrier'}),
                '              | ',
                (0, r.jsx)(n.a, {
                  href: '/docs/destinations/properties/phone-carrier-property',
                  children: 'see all',
                }),
                "           | string     | Consumer's phone carrier                                                              |\n| ",
                (0, r.jsx)(n.code, {children: 'phone_dialing_code'}),
                '         | 0-9999                                                                    | number     | The 1 to 4 digit dialing code for this phone number or null if unknown.               |\n| ',
                (0, r.jsx)(n.code, {children: 'phone_do_not_call'}),
                '          | ',
                (0, r.jsx)(n.code, {children: '0'}),
                ', ',
                (0, r.jsx)(n.code, {children: '1'}),
                "                                                                  | boolean    | Whether Consumer's phone is on the do-not-call list                                   |\n| ",
                (0, r.jsx)(n.code, {children: 'phone_formatted'}),
                '            | ',
                (0, r.jsx)(n.code, {children: '+18007132618'}),
                '                                                            | string     | The phone number formatted in the international dialing code. N/A if not formattable. |\n| ',
                (0, r.jsx)(n.code, {children: 'phone_is_callable'}),
                '          | ',
                (0, r.jsx)(n.a, {
                  href: '/docs/destinations/properties/phone-is-callable-property',
                  children: 'see all',
                }),
                "       | boolean    | Whether Consumer's phone is callable                                                  |\n| ",
                (0, r.jsx)(n.code, {children: 'phone_type'}),
                '                 | ',
                (0, r.jsx)(n.a, {
                  href: '/docs/destinations/properties/line-type-property',
                  children: 'see all',
                }),
                '               | string     | Type of phone                                                                         |\n| ',
                (0, r.jsx)(n.code, {children: 'phone_voip'}),
                '                 | ',
                (0, r.jsx)(n.code, {children: '0'}),
                ', ',
                (0, r.jsx)(n.code, {children: '1'}),
                "                                                                  | boolean    | Whether Consumer's phone is a VoIP number                                             |\n| ",
                (0, r.jsx)(n.code, {children: 'photography'}),
                '                | ',
                (0, r.jsx)(n.code, {children: '0'}),
                ', ',
                (0, r.jsx)(n.code, {children: '1'}),
                '                                                                  | boolean    | Whether visitor is interested in photography                                          |\n| ',
                (0, r.jsx)(n.code, {children: 'political_contributor'}),
                '      | ',
                (0, r.jsx)(n.code, {children: '0'}),
                ', ',
                (0, r.jsx)(n.code, {children: '1'}),
                '                                                                  | boolean    | Whether visitor is a political contributor                                            |\n| ',
                (0, r.jsx)(n.code, {children: 'political_party'}),
                '            | ',
                (0, r.jsx)(n.a, {
                  href: '/docs/destinations/properties/political-party-property',
                  children: 'see all',
                }),
                '         | string     | Political party affiliation                                                           |\n| ',
                (0, r.jsx)(n.code, {children: 'premium_amex_card'}),
                '          | ',
                (0, r.jsx)(n.code, {children: '0'}),
                ', ',
                (0, r.jsx)(n.code, {children: '1'}),
                '                                                                  | boolean    | Whether visitor owns a premium Amex card                                              |\n| ',
                (0, r.jsx)(n.code, {children: 'premium_card'}),
                '               | ',
                (0, r.jsx)(n.code, {children: '0'}),
                ', ',
                (0, r.jsx)(n.code, {children: '1'}),
                '                                                                  | boolean    | Whether visitor owns a premium card                                                   |\n| ',
                (0, r.jsx)(n.code, {children: 'premium_income_hh'}),
                '          | ',
                (0, r.jsx)(n.a, {
                  href: '/docs/destinations/properties/premium-income-hh-property',
                  children: 'see all',
                }),
                '       | number     | Premium household income                                                              |\n| ',
                (0, r.jsx)(n.code, {children: 'premium_income_midpt_hh'}),
                '    | ',
                (0, r.jsx)(n.a, {
                  href: '/docs/destinations/properties/premium-income-midpt-hh-property',
                  children: 'see all',
                }),
                ' | number     | Midpoint of premium household income                                                  |\n| ',
                (0, r.jsx)(n.code, {children: 'religion'}),
                '                   | ',
                (0, r.jsx)(n.a, {
                  href: '/docs/destinations/properties/religion-property',
                  children: 'see all',
                }),
                "                | string     | Consumer's religion                                                                   |\n| ",
                (0, r.jsx)(n.code, {children: 'sha1'}),
                '                       | -                                                                         | string     | The SHA1 encryption of the users email                                                |\n| ',
                (0, r.jsx)(n.code, {children: 'sha2'}),
                '                       | -                                                                         | string     | The SHA2 encryption of the users email (perfect for ads)                              |\n| ',
                (0, r.jsx)(n.code, {children: 'single_family_dwelling'}),
                '     | ',
                (0, r.jsx)(n.code, {children: '0'}),
                ', ',
                (0, r.jsx)(n.code, {children: '1'}),
                '                                                                  | boolean    | Single-family dwelling ordinal                                                        |\n| ',
                (0, r.jsx)(n.code, {children: 'timestamp'}),
                '                  | ',
                (0, r.jsx)(n.code, {children: '2024-06-07 10:18:36.749000'}),
                '                                              | string     | The full timestamp taken at the time of engagement                                    |\n| ',
                (0, r.jsx)(n.code, {children: 'timezone'}),
                '                   | ',
                (0, r.jsx)(n.code, {children: 'America/Los_Angeles'}),
                '                                                     | string     | The full timestamp taken at the time of engagement                                    |\n| ',
                (0, r.jsx)(n.code, {children: 'urbanicity'}),
                '                 | ',
                (0, r.jsx)(n.a, {
                  href: '/docs/destinations/properties/urbanicity-property',
                  children: 'see all',
                }),
                '              | string     | Degree of urbanization                                                                |\n| ',
                (0, r.jsx)(n.code, {children: 'veteran_hh'}),
                '                 | ',
                (0, r.jsx)(n.code, {children: '0'}),
                ', ',
                (0, r.jsx)(n.code, {children: '1'}),
                '                                                                  | string     | Veteran status in the household                                                       |\n| ',
                (0, r.jsx)(n.code, {children: 'white_collar'}),
                '               | ',
                (0, r.jsx)(n.code, {children: '0'}),
                ', ',
                (0, r.jsx)(n.code, {children: '1'}),
                '                                                                  | number     | White-collar worker ordinal                                                           |',
              ],
            }),
            '\n',
            (0, r.jsx)(n.h2, {
              id: 'device-technology',
              children: 'Device Technology',
            }),
            '\n',
            (0, r.jsxs)(n.table, {
              children: [
                (0, r.jsx)(n.thead, {
                  children: (0, r.jsxs)(n.tr, {
                    children: [
                      (0, r.jsx)(n.th, {children: 'Property'}),
                      (0, r.jsx)(n.th, {children: 'Values'}),
                      (0, r.jsx)(n.th, {children: 'Value Type'}),
                      (0, r.jsx)(n.th, {children: 'Description'}),
                    ],
                  }),
                }),
                (0, r.jsxs)(n.tbody, {
                  children: [
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'browser'}),
                        }),
                        (0, r.jsxs)(n.td, {
                          children: [
                            (0, r.jsx)(n.code, {children: 'Chrome 125.0.0.0'}),
                            ' -',
                          ],
                        }),
                        (0, r.jsx)(n.td, {children: 'string'}),
                        (0, r.jsx)(n.td, {
                          children: 'The browser they prefer to use.',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'device_type',
                          }),
                        }),
                        (0, r.jsxs)(n.td, {
                          children: [
                            (0, r.jsx)(n.code, {children: 'desktop'}),
                            ', ',
                            (0, r.jsx)(n.code, {children: 'mobile'}),
                          ],
                        }),
                        (0, r.jsx)(n.td, {children: 'string'}),
                        (0, r.jsx)(n.td, {
                          children: 'The type of device they prefer to use.',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'inner_resolution',
                          }),
                        }),
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: '1000x900'}),
                        }),
                        (0, r.jsx)(n.td, {children: 'string'}),
                        (0, r.jsx)(n.td, {
                          children:
                            'The height and width of their inner screen',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'is_eu'}),
                        }),
                        (0, r.jsxs)(n.td, {
                          children: [
                            (0, r.jsx)(n.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(n.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(n.td, {children: 'boolean'}),
                        (0, r.jsx)(n.td, {
                          children: 'Is the user in Europe right now?',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'isp'}),
                        }),
                        (0, r.jsx)(n.td, {children: '-'}),
                        (0, r.jsx)(n.td, {children: 'string'}),
                        (0, r.jsx)(n.td, {
                          children: 'Their Internet Service Provider',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'org'}),
                        }),
                        (0, r.jsx)(n.td, {children: '-'}),
                        (0, r.jsx)(n.td, {children: 'string'}),
                        (0, r.jsx)(n.td, {
                          children:
                            'The business that was identified at the time of engagement',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'os'}),
                        }),
                        (0, r.jsx)(n.td, {children: '-'}),
                        (0, r.jsx)(n.td, {children: 'string'}),
                        (0, r.jsx)(n.td, {
                          children: 'Their preferred Operating System',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'referrer'}),
                        }),
                        (0, r.jsx)(n.td, {children: '-'}),
                        (0, r.jsx)(n.td, {children: 'string'}),
                        (0, r.jsx)(n.td, {
                          children:
                            'The referring website the visitor came from (full url)',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'referring_domain',
                          }),
                        }),
                        (0, r.jsx)(n.td, {children: '-'}),
                        (0, r.jsx)(n.td, {children: 'string'}),
                        (0, r.jsx)(n.td, {
                          children:
                            'The referring website domain the visitor came from',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'resolution',
                          }),
                        }),
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: '1000x900'}),
                        }),
                        (0, r.jsx)(n.td, {children: 'string'}),
                        (0, r.jsx)(n.td, {
                          children: 'The height and width of their screen',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'user_agent',
                          }),
                        }),
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'Mozilla/5.0 (Windows NT ...',
                          }),
                        }),
                        (0, r.jsx)(n.td, {children: 'string'}),
                        (0, r.jsx)(n.td, {
                          children:
                            "The user agent ID of the visitor's browser",
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'utm_campaign',
                          }),
                        }),
                        (0, r.jsx)(n.td, {children: '-'}),
                        (0, r.jsx)(n.td, {children: 'string'}),
                        (0, r.jsx)(n.td, {
                          children:
                            'The utm_campaign parameter you set in your marketing',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'utm_content',
                          }),
                        }),
                        (0, r.jsx)(n.td, {children: '-'}),
                        (0, r.jsx)(n.td, {children: 'string'}),
                        (0, r.jsx)(n.td, {
                          children:
                            'The utm_content parameter you set in your marketing',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'utm_medium',
                          }),
                        }),
                        (0, r.jsx)(n.td, {children: '-'}),
                        (0, r.jsx)(n.td, {children: 'string'}),
                        (0, r.jsx)(n.td, {
                          children:
                            'The utm_medium parameter you set in your marketing',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'utm_source',
                          }),
                        }),
                        (0, r.jsx)(n.td, {children: '-'}),
                        (0, r.jsx)(n.td, {children: 'string'}),
                        (0, r.jsx)(n.td, {
                          children:
                            'The utm_source parameter you set in your marketing',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'utm_term'}),
                        }),
                        (0, r.jsx)(n.td, {children: '-'}),
                        (0, r.jsx)(n.td, {children: 'string'}),
                        (0, r.jsx)(n.td, {
                          children:
                            'The utm_term parameter you set in your marketing',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'website_id',
                          }),
                        }),
                        (0, r.jsx)(n.td, {children: '0-9999'}),
                        (0, r.jsx)(n.td, {children: 'number'}),
                        (0, r.jsx)(n.td, {
                          children: 'The Pixel ID that identified the visitor',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, r.jsx)(n.h2, {
              id: 'consumer-affinities',
              children: 'Consumer Affinities',
            }),
            '\n',
            (0, r.jsx)(n.p, {
              children:
                '"Affinity" refers to a natural liking, attraction, or inclination towards something or someone. It can also describe a similarity or resemblance between things. In different contexts, it can mean:',
            }),
            '\n',
            (0, r.jsxs)(n.ol, {
              children: [
                '\n',
                (0, r.jsxs)(n.li, {
                  children: [
                    (0, r.jsx)(n.strong, {children: 'Personal Affinity'}),
                    ': A natural liking or sympathy for someone or something. For example, "She has an affinity for classical music."',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsx)(n.p, {
              children:
                'In general, it signifies a close relationship or a strong connection.',
            }),
            '\n',
            (0, r.jsxs)(n.table, {
              children: [
                (0, r.jsx)(n.thead, {
                  children: (0, r.jsxs)(n.tr, {
                    children: [
                      (0, r.jsx)(n.th, {children: 'Property'}),
                      (0, r.jsx)(n.th, {children: 'Values'}),
                      (0, r.jsx)(n.th, {children: 'Value Type'}),
                      (0, r.jsx)(n.th, {children: 'Description'}),
                    ],
                  }),
                }),
                (0, r.jsxs)(n.tbody, {
                  children: [
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'auto_racing_affinity',
                          }),
                        }),
                        (0, r.jsxs)(n.td, {
                          children: [
                            (0, r.jsx)(n.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(n.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(n.td, {children: 'boolean'}),
                        (0, r.jsx)(n.td, {
                          children:
                            'Does the consumer have an Auto Racing Affinity?',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'gambling_affinity',
                          }),
                        }),
                        (0, r.jsxs)(n.td, {
                          children: [
                            (0, r.jsx)(n.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(n.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(n.td, {children: 'boolean'}),
                        (0, r.jsx)(n.td, {
                          children: "Consumer's affinity for gambling",
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'golf_affinity',
                          }),
                        }),
                        (0, r.jsxs)(n.td, {
                          children: [
                            (0, r.jsx)(n.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(n.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(n.td, {children: 'boolean'}),
                        (0, r.jsx)(n.td, {
                          children: "Consumer's affinity for golf",
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'gourmet_affinity',
                          }),
                        }),
                        (0, r.jsxs)(n.td, {
                          children: [
                            (0, r.jsx)(n.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(n.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(n.td, {children: 'boolean'}),
                        (0, r.jsx)(n.td, {
                          children: "Consumer's affinity for gourmet food",
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'home_decorating_affinity',
                          }),
                        }),
                        (0, r.jsxs)(n.td, {
                          children: [
                            (0, r.jsx)(n.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(n.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(n.td, {children: 'boolean'}),
                        (0, r.jsx)(n.td, {
                          children: "Consumer's affinity for home decorating",
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'motorcycles_affinity',
                          }),
                        }),
                        (0, r.jsxs)(n.td, {
                          children: [
                            (0, r.jsx)(n.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(n.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(n.td, {children: 'boolean'}),
                        (0, r.jsx)(n.td, {
                          children: "Consumer's affinity for motorcycles",
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'pets_affinity',
                          }),
                        }),
                        (0, r.jsxs)(n.td, {
                          children: [
                            (0, r.jsx)(n.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(n.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(n.td, {children: 'boolean'}),
                        (0, r.jsx)(n.td, {
                          children: "Consumer's affinity for pets",
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'travel_cruise_affinity',
                          }),
                        }),
                        (0, r.jsxs)(n.td, {
                          children: [
                            (0, r.jsx)(n.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(n.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(n.td, {children: 'boolean'}),
                        (0, r.jsx)(n.td, {
                          children: "Consumer's affinity for cruise travel",
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'trucks_affinity',
                          }),
                        }),
                        (0, r.jsxs)(n.td, {
                          children: [
                            (0, r.jsx)(n.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(n.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(n.td, {children: 'boolean'}),
                        (0, r.jsx)(n.td, {
                          children: "Consumer's affinity for trucks",
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'do_it_yourself_affinity',
                          }),
                        }),
                        (0, r.jsxs)(n.td, {
                          children: [
                            (0, r.jsx)(n.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(n.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(n.td, {children: 'boolean'}),
                        (0, r.jsx)(n.td, {
                          children: "Consumer's affinity for Do-It-Yourself",
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'dog_affinity',
                          }),
                        }),
                        (0, r.jsxs)(n.td, {
                          children: [
                            (0, r.jsx)(n.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(n.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(n.td, {children: 'boolean'}),
                        (0, r.jsx)(n.td, {
                          children: "Consumer's affinity for Dogs",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, r.jsx)(n.h2, {id: 'interests', children: 'Interests'}),
            '\n',
            (0, r.jsx)(n.p, {
              children:
                '"Interests" refer to the subjects or activities that capture your attention, enthusiasm, and curiosity. They are the things you enjoy doing or learning about in your free time. Interests can vary widely from person to person and can include hobbies, sports, academic subjects, arts, and much more. Here are a few examples:',
            }),
            '\n',
            (0, r.jsxs)(n.ol, {
              children: [
                '\n',
                (0, r.jsxs)(n.li, {
                  children: [
                    (0, r.jsx)(n.strong, {children: 'Hobbies'}),
                    ': Activities like reading, painting, gardening, cooking, or playing musical instruments.',
                  ],
                }),
                '\n',
                (0, r.jsxs)(n.li, {
                  children: [
                    (0, r.jsx)(n.strong, {
                      children: 'Sports and Physical Activities',
                    }),
                    ': Interests in activities like soccer, basketball, hiking, yoga, or swimming.',
                  ],
                }),
                '\n',
                (0, r.jsxs)(n.li, {
                  children: [
                    (0, r.jsx)(n.strong, {children: 'Academic Subjects'}),
                    ': Areas of study such as mathematics, science, history, literature, or technology.',
                  ],
                }),
                '\n',
                (0, r.jsxs)(n.li, {
                  children: [
                    (0, r.jsx)(n.strong, {children: 'Arts and Culture'}),
                    ': Appreciation for activities like attending theater performances, visiting museums, exploring different cultures, or watching movies.',
                  ],
                }),
                '\n',
                (0, r.jsxs)(n.li, {
                  children: [
                    (0, r.jsx)(n.strong, {children: 'Personal Development'}),
                    ': Interests in self-improvement, learning new skills, or engaging in mindfulness practices.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsx)(n.p, {
              children:
                "Interests often reflect a person's personality, values, and lifestyle choices, and they can evolve over time as people discover new passions and experiences.",
            }),
            '\n',
            (0, r.jsxs)(n.table, {
              children: [
                (0, r.jsx)(n.thead, {
                  children: (0, r.jsxs)(n.tr, {
                    children: [
                      (0, r.jsx)(n.th, {children: 'Property'}),
                      (0, r.jsx)(n.th, {children: 'Values'}),
                      (0, r.jsx)(n.th, {children: 'Value Type'}),
                      (0, r.jsx)(n.th, {children: 'Description'}),
                    ],
                  }),
                }),
                (0, r.jsxs)(n.tbody, {
                  children: [
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'cars_interest',
                          }),
                        }),
                        (0, r.jsxs)(n.td, {
                          children: [
                            (0, r.jsx)(n.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(n.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(n.td, {children: 'boolean'}),
                        (0, r.jsx)(n.td, {
                          children: "Consumer's interest in Cars",
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'charity_interest',
                          }),
                        }),
                        (0, r.jsxs)(n.td, {
                          children: [
                            (0, r.jsx)(n.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(n.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(n.td, {children: 'boolean'}),
                        (0, r.jsx)(n.td, {
                          children:
                            "Consumer's interest in charities, either participating or contributing.",
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'healthy_living_interest',
                          }),
                        }),
                        (0, r.jsxs)(n.td, {
                          children: [
                            (0, r.jsx)(n.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(n.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(n.td, {children: 'boolean'}),
                        (0, r.jsx)(n.td, {
                          children: "Consumer's interest in healthy living",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, r.jsx)(n.h2, {id: 'categories', children: 'Categories'}),
            '\n',
            (0, r.jsxs)(n.table, {
              children: [
                (0, r.jsx)(n.thead, {
                  children: (0, r.jsxs)(n.tr, {
                    children: [
                      (0, r.jsx)(n.th, {children: 'Property'}),
                      (0, r.jsx)(n.th, {children: 'Values'}),
                      (0, r.jsx)(n.th, {children: 'Value Type'}),
                      (0, r.jsx)(n.th, {children: 'Description'}),
                    ],
                  }),
                }),
                (0, r.jsxs)(n.tbody, {
                  children: [
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'aerobics'}),
                        }),
                        (0, r.jsxs)(n.td, {
                          children: [
                            (0, r.jsx)(n.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(n.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(n.td, {children: 'boolean'}),
                        (0, r.jsx)(n.td, {
                          children: 'Does the consumer like aerobics?',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'antiques'}),
                        }),
                        (0, r.jsxs)(n.td, {
                          children: [
                            (0, r.jsx)(n.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(n.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(n.td, {children: 'boolean'}),
                        (0, r.jsx)(n.td, {
                          children: 'Does the consumer like Antiques?',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'arts_and_crafts',
                          }),
                        }),
                        (0, r.jsxs)(n.td, {
                          children: [
                            (0, r.jsx)(n.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(n.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(n.td, {children: 'boolean'}),
                        (0, r.jsx)(n.td, {
                          children: 'Does the consumer like Arts and Crafts?',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'baseball'}),
                        }),
                        (0, r.jsxs)(n.td, {
                          children: [
                            (0, r.jsx)(n.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(n.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(n.td, {children: 'boolean'}),
                        (0, r.jsx)(n.td, {
                          children: 'Does the consumer like Baseball?',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'basketball',
                          }),
                        }),
                        (0, r.jsxs)(n.td, {
                          children: [
                            (0, r.jsx)(n.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(n.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(n.td, {children: 'boolean'}),
                        (0, r.jsx)(n.td, {
                          children: 'Does the consumer like Basketball?',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'bird_watching',
                          }),
                        }),
                        (0, r.jsxs)(n.td, {
                          children: [
                            (0, r.jsx)(n.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(n.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(n.td, {children: 'boolean'}),
                        (0, r.jsx)(n.td, {
                          children: 'Does the consumer like Bird watching?',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'boating_sailing',
                          }),
                        }),
                        (0, r.jsxs)(n.td, {
                          children: [
                            (0, r.jsx)(n.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(n.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(n.td, {children: 'boolean'}),
                        (0, r.jsx)(n.td, {
                          children:
                            'Does the consumer like Boating and Sailing?',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'camping_hiking',
                          }),
                        }),
                        (0, r.jsxs)(n.td, {
                          children: [
                            (0, r.jsx)(n.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(n.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(n.td, {children: 'boolean'}),
                        (0, r.jsx)(n.td, {
                          children:
                            'Does the consumer like Camping and Hiking?',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'cigars'}),
                        }),
                        (0, r.jsxs)(n.td, {
                          children: [
                            (0, r.jsx)(n.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(n.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(n.td, {children: 'boolean'}),
                        (0, r.jsx)(n.td, {
                          children: 'Does the consumer like Cigars?',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'coins'}),
                        }),
                        (0, r.jsxs)(n.td, {
                          children: [
                            (0, r.jsx)(n.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(n.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(n.td, {children: 'boolean'}),
                        (0, r.jsx)(n.td, {
                          children: 'Does the consumer like Coins?',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'cooking'}),
                        }),
                        (0, r.jsxs)(n.td, {
                          children: [
                            (0, r.jsx)(n.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(n.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(n.td, {children: 'boolean'}),
                        (0, r.jsx)(n.td, {
                          children: 'Does the consumer like Cooking?',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'dieting'}),
                        }),
                        (0, r.jsxs)(n.td, {
                          children: [
                            (0, r.jsx)(n.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(n.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(n.td, {children: 'boolean'}),
                        (0, r.jsx)(n.td, {
                          children: 'Does the consumer like Dieting?',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'diy'}),
                        }),
                        (0, r.jsxs)(n.td, {
                          children: [
                            (0, r.jsx)(n.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(n.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(n.td, {children: 'boolean'}),
                        (0, r.jsx)(n.td, {
                          children: 'Does the consumer like Do-it-yoursel?',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'fishing'}),
                        }),
                        (0, r.jsxs)(n.td, {
                          children: [
                            (0, r.jsx)(n.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(n.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(n.td, {children: 'boolean'}),
                        (0, r.jsx)(n.td, {
                          children: 'Whether visitor is interested in fishing',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'fitness'}),
                        }),
                        (0, r.jsxs)(n.td, {
                          children: [
                            (0, r.jsx)(n.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(n.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(n.td, {children: 'boolean'}),
                        (0, r.jsx)(n.td, {
                          children: 'Whether visitor is interested in fitness',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'football'}),
                        }),
                        (0, r.jsxs)(n.td, {
                          children: [
                            (0, r.jsx)(n.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(n.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(n.td, {children: 'boolean'}),
                        (0, r.jsx)(n.td, {
                          children: 'Whether visitor is interested in football',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'gambling'}),
                        }),
                        (0, r.jsxs)(n.td, {
                          children: [
                            (0, r.jsx)(n.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(n.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(n.td, {children: 'boolean'}),
                        (0, r.jsx)(n.td, {
                          children: 'Whether visitor is interested in gambling',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'gardening'}),
                        }),
                        (0, r.jsxs)(n.td, {
                          children: [
                            (0, r.jsx)(n.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(n.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(n.td, {children: 'boolean'}),
                        (0, r.jsx)(n.td, {
                          children:
                            'Whether visitor is interested in gardening',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'golf'}),
                        }),
                        (0, r.jsxs)(n.td, {
                          children: [
                            (0, r.jsx)(n.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(n.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(n.td, {children: 'boolean'}),
                        (0, r.jsx)(n.td, {
                          children: 'Whether visitor is interested in golf',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'healthy_living',
                          }),
                        }),
                        (0, r.jsxs)(n.td, {
                          children: [
                            (0, r.jsx)(n.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(n.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(n.td, {children: 'boolean'}),
                        (0, r.jsx)(n.td, {
                          children: 'Whether visitor practices healthy living',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'hockey'}),
                        }),
                        (0, r.jsxs)(n.td, {
                          children: [
                            (0, r.jsx)(n.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(n.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(n.td, {children: 'boolean'}),
                        (0, r.jsx)(n.td, {
                          children: 'Whether visitor is interested in hockey',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'hunting'}),
                        }),
                        (0, r.jsxs)(n.td, {
                          children: [
                            (0, r.jsx)(n.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(n.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(n.td, {children: 'boolean'}),
                        (0, r.jsx)(n.td, {
                          children: 'Whether visitor is interested in hunting',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'knitting_quilting_sewing',
                          }),
                        }),
                        (0, r.jsxs)(n.td, {
                          children: [
                            (0, r.jsx)(n.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(n.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(n.td, {children: 'boolean'}),
                        (0, r.jsx)(n.td, {
                          children:
                            'Whether visitor is interested in knitting, quilting, or sewing',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'luxury_life',
                          }),
                        }),
                        (0, r.jsxs)(n.td, {
                          children: [
                            (0, r.jsx)(n.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(n.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(n.td, {children: 'boolean'}),
                        (0, r.jsx)(n.td, {
                          children: 'Whether visitor lives a luxury lifestyle',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'magazine_subscriber',
                          }),
                        }),
                        (0, r.jsxs)(n.td, {
                          children: [
                            (0, r.jsx)(n.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(n.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(n.td, {children: 'boolean'}),
                        (0, r.jsx)(n.td, {
                          children: 'Whether visitor subscribes to magazines',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'motor_racing',
                          }),
                        }),
                        (0, r.jsxs)(n.td, {
                          children: [
                            (0, r.jsx)(n.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(n.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(n.td, {children: 'boolean'}),
                        (0, r.jsx)(n.td, {
                          children:
                            'Whether visitor is interested in motor racing',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'motorcycles',
                          }),
                        }),
                        (0, r.jsxs)(n.td, {
                          children: [
                            (0, r.jsx)(n.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(n.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(n.td, {children: 'boolean'}),
                        (0, r.jsx)(n.td, {
                          children:
                            'Whether visitor owns or is interested in motorcycles',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'movies'}),
                        }),
                        (0, r.jsxs)(n.td, {
                          children: [
                            (0, r.jsx)(n.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(n.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(n.td, {children: 'boolean'}),
                        (0, r.jsx)(n.td, {
                          children: 'Whether visitor is interested in movies',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'music'}),
                        }),
                        (0, r.jsxs)(n.td, {
                          children: [
                            (0, r.jsx)(n.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(n.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(n.td, {children: 'boolean'}),
                        (0, r.jsx)(n.td, {
                          children: 'Whether visitor is interested in music',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'nascar'}),
                        }),
                        (0, r.jsxs)(n.td, {
                          children: [
                            (0, r.jsx)(n.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(n.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(n.td, {children: 'boolean'}),
                        (0, r.jsx)(n.td, {
                          children: 'Whether visitor is interested in NASCAR',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'running'}),
                        }),
                        (0, r.jsxs)(n.td, {
                          children: [
                            (0, r.jsx)(n.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(n.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(n.td, {children: 'boolean'}),
                        (0, r.jsx)(n.td, {
                          children: 'Whether visitor is interested in running',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'rv'}),
                        }),
                        (0, r.jsxs)(n.td, {
                          children: [
                            (0, r.jsx)(n.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(n.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(n.td, {children: 'boolean'}),
                        (0, r.jsx)(n.td, {
                          children:
                            'Whether visitor owns or is interested in RVs',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'scuba'}),
                        }),
                        (0, r.jsxs)(n.td, {
                          children: [
                            (0, r.jsx)(n.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(n.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(n.td, {children: 'boolean'}),
                        (0, r.jsx)(n.td, {
                          children:
                            'Whether visitor is interested in scuba diving',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'self_improvement',
                          }),
                        }),
                        (0, r.jsxs)(n.td, {
                          children: [
                            (0, r.jsx)(n.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(n.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(n.td, {children: 'boolean'}),
                        (0, r.jsx)(n.td, {
                          children:
                            'Whether visitor is interested in self-improvement',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'snow_skiing',
                          }),
                        }),
                        (0, r.jsxs)(n.td, {
                          children: [
                            (0, r.jsx)(n.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(n.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(n.td, {children: 'boolean'}),
                        (0, r.jsx)(n.td, {
                          children:
                            'Whether visitor is interested in snow skiing',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'soccer'}),
                        }),
                        (0, r.jsxs)(n.td, {
                          children: [
                            (0, r.jsx)(n.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(n.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(n.td, {children: 'boolean'}),
                        (0, r.jsx)(n.td, {
                          children: 'Whether visitor is interested in soccer',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'soho_business',
                          }),
                        }),
                        (0, r.jsxs)(n.td, {
                          children: [
                            (0, r.jsx)(n.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(n.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(n.td, {children: 'boolean'}),
                        (0, r.jsx)(n.td, {
                          children: 'Whether visitor has a SOHO business',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'stamps'}),
                        }),
                        (0, r.jsxs)(n.td, {
                          children: [
                            (0, r.jsx)(n.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(n.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(n.td, {children: 'boolean'}),
                        (0, r.jsx)(n.td, {
                          children:
                            'Whether visitor is interested in stamp collecting',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'tennis'}),
                        }),
                        (0, r.jsxs)(n.td, {
                          children: [
                            (0, r.jsx)(n.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(n.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(n.td, {children: 'boolean'}),
                        (0, r.jsx)(n.td, {
                          children: 'Whether visitor is interested in tennis',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'travel_cruises',
                          }),
                        }),
                        (0, r.jsxs)(n.td, {
                          children: [
                            (0, r.jsx)(n.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(n.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(n.td, {children: 'boolean'}),
                        (0, r.jsx)(n.td, {
                          children: 'Whether visitor is interested in cruises',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'travel_foreign',
                          }),
                        }),
                        (0, r.jsxs)(n.td, {
                          children: [
                            (0, r.jsx)(n.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(n.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(n.td, {children: 'boolean'}),
                        (0, r.jsx)(n.td, {
                          children:
                            'Whether visitor is interested in foreign travel',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'travel_vacation',
                          }),
                        }),
                        (0, r.jsxs)(n.td, {
                          children: [
                            (0, r.jsx)(n.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(n.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(n.td, {children: 'boolean'}),
                        (0, r.jsx)(n.td, {
                          children:
                            'Whether visitor is interested in vacations',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'truck_owner',
                          }),
                        }),
                        (0, r.jsxs)(n.td, {
                          children: [
                            (0, r.jsx)(n.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(n.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(n.td, {children: 'boolean'}),
                        (0, r.jsx)(n.td, {
                          children: 'Whether visitor owns a truck',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'walking'}),
                        }),
                        (0, r.jsxs)(n.td, {
                          children: [
                            (0, r.jsx)(n.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(n.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(n.td, {children: 'boolean'}),
                        (0, r.jsx)(n.td, {
                          children: 'Whether visitor is interested in walking',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'woodworking',
                          }),
                        }),
                        (0, r.jsxs)(n.td, {
                          children: [
                            (0, r.jsx)(n.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(n.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(n.td, {children: 'boolean'}),
                        (0, r.jsx)(n.td, {
                          children:
                            'Whether visitor is interested in woodworking',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, r.jsx)(n.h2, {id: 'collectors', children: 'Collectors'}),
            '\n',
            (0, r.jsx)(n.p, {
              children:
                'If the consumer is a collector of certain items, meaning that they both have a strong affinity for and they purchase high end items in these categories.',
            }),
            '\n',
            (0, r.jsxs)(n.table, {
              children: [
                (0, r.jsx)(n.thead, {
                  children: (0, r.jsxs)(n.tr, {
                    children: [
                      (0, r.jsx)(n.th, {children: 'Property'}),
                      (0, r.jsx)(n.th, {children: 'Values'}),
                      (0, r.jsx)(n.th, {children: 'Value Type'}),
                      (0, r.jsx)(n.th, {children: 'Description'}),
                    ],
                  }),
                }),
                (0, r.jsxs)(n.tbody, {
                  children: [
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'fine_arts_collector',
                          }),
                        }),
                        (0, r.jsxs)(n.td, {
                          children: [
                            (0, r.jsx)(n.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(n.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(n.td, {children: 'boolean'}),
                        (0, r.jsx)(n.td, {
                          children: 'Whether visitor collects fine arts',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'sports_memoribilia_collector',
                          }),
                        }),
                        (0, r.jsxs)(n.td, {
                          children: [
                            (0, r.jsx)(n.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(n.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(n.td, {children: 'boolean'}),
                        (0, r.jsx)(n.td, {
                          children:
                            'Whether visitor collects sports memorabilia',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function x(e = {}) {
        const {wrapper: n} = {...(0, s.R)(), ...e.components};
        return n
          ? (0, r.jsx)(n, {...e, children: (0, r.jsx)(h, {...e})})
          : h(e);
      }
    },
    3023: (e, n, i) => {
      i.d(n, {R: () => t, x: () => c});
      var r = i(3696);
      const s = {},
        d = r.createContext(s);
      function t(e) {
        const n = r.useContext(d);
        return r.useMemo(
          function () {
            return 'function' == typeof e ? e(n) : {...n, ...e};
          },
          [n, e]
        );
      }
      function c(e) {
        let n;
        return (
          (n = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(s)
              : e.components || s
            : t(e.components)),
          r.createElement(d.Provider, {value: n}, e.children)
        );
      }
    },
  },
]);

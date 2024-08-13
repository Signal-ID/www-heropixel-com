/*! For license information please see b2a6fb43.ea427c39.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [8341],
  {
    2192: (e, d, s) => {
      var r = s(3696),
        i = Symbol.for('react.element'),
        n = Symbol.for('react.fragment'),
        t = Object.prototype.hasOwnProperty,
        c =
          r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        l = {key: !0, ref: !0, __self: !0, __source: !0};
      function h(e, d, s) {
        var r,
          n = {},
          h = null,
          o = null;
        for (r in (void 0 !== s && (h = '' + s),
        void 0 !== d.key && (h = '' + d.key),
        void 0 !== d.ref && (o = d.ref),
        d))
          t.call(d, r) && !l.hasOwnProperty(r) && (n[r] = d[r]);
        if (e && e.defaultProps)
          for (r in (d = e.defaultProps)) void 0 === n[r] && (n[r] = d[r]);
        return {
          $$typeof: i,
          type: e,
          key: h,
          ref: o,
          props: n,
          _owner: c.current,
        };
      }
      (d.Fragment = n), (d.jsx = h), (d.jsxs = h);
    },
    2540: (e, d, s) => {
      e.exports = s(2192);
    },
    472: (e, d, s) => {
      s.r(d),
        s.d(d, {
          assets: () => l,
          contentTitle: () => t,
          default: () => x,
          frontMatter: () => n,
          metadata: () => c,
          toc: () => h,
        });
      var r = s(2540),
        i = s(3023);
      const n = {
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
          lastUpdatedAt: 1723155911e3,
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
        l = {},
        h = [
          {value: 'Introduction', id: 'introduction', level: 2},
          {value: 'Consumer Attributes', id: 'consumer-attributes', level: 2},
          {value: 'Device Technology', id: 'device-technology', level: 2},
          {value: 'Consumer Affinities', id: 'consumer-affinities', level: 2},
          {value: 'Interests', id: 'interests', level: 2},
          {value: 'Categories', id: 'categories', level: 2},
          {value: 'Collectors', id: 'collectors', level: 2},
        ];
      function o(e) {
        const d = {
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
          ...(0, i.R)(),
          ...e.components,
        };
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(d.h1, {
              id: 'consumer-attributes-available-via-sync',
              children: 'Consumer Attributes Available Via Sync',
            }),
            '\n',
            (0, r.jsx)(d.h2, {id: 'introduction', children: 'Introduction'}),
            '\n',
            (0, r.jsx)(d.p, {
              children:
                'When choosing the stream type during integration config you\'ll see the "Unique Leads" option. When you choose that option we will send you one record of the lead ever. No matter how often they have visited your website. This integration stream is best for CRMs where you plan to contact the leads and store their information.',
            }),
            '\n',
            (0, r.jsx)(d.p, {
              children:
                "Here's a list of the data fields that are available through this stream. If you don't find the data you're looking for, please request it from support.",
            }),
            '\n',
            (0, r.jsx)(d.p, {
              children:
                "Not all destinations support receiving all of this data. It's all available to send, but the destination may not be capable of receiving it.",
            }),
            '\n',
            (0, r.jsx)(d.h2, {
              id: 'consumer-attributes',
              children: 'Consumer Attributes',
            }),
            '\n',
            (0, r.jsxs)(d.table, {
              children: [
                (0, r.jsx)(d.thead, {
                  children: (0, r.jsxs)(d.tr, {
                    children: [
                      (0, r.jsx)(d.th, {children: 'Property'}),
                      (0, r.jsx)(d.th, {children: 'Values'}),
                      (0, r.jsx)(d.th, {children: 'Value Type'}),
                      (0, r.jsx)(d.th, {children: 'Description'}),
                    ],
                  }),
                }),
                (0, r.jsxs)(d.tbody, {
                  children: [
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'consumer_id',
                          }),
                        }),
                        (0, r.jsx)(d.td, {children: '0-99999999'}),
                        (0, r.jsx)(d.td, {children: 'number'}),
                        (0, r.jsx)(d.td, {
                          children: 'Unique ID assigned to this individual.',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {children: 'hem'}),
                        }),
                        (0, r.jsx)(d.td, {children: '-'}),
                        (0, r.jsx)(d.td, {children: 'string'}),
                        (0, r.jsx)(d.td, {
                          children:
                            'Hashed email that was provided by you to us at the time of engagement',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'first_name',
                          }),
                        }),
                        (0, r.jsx)(d.td, {children: '-'}),
                        (0, r.jsx)(d.td, {children: 'string'}),
                        (0, r.jsx)(d.td, {children: "Consumer's First Name"}),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {children: 'last_name'}),
                        }),
                        (0, r.jsx)(d.td, {children: '-'}),
                        (0, r.jsx)(d.td, {children: 'string'}),
                        (0, r.jsx)(d.td, {children: "Consumer's Last Name"}),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {children: 'email'}),
                        }),
                        (0, r.jsx)(d.td, {children: '-'}),
                        (0, r.jsx)(d.td, {children: 'string'}),
                        (0, r.jsx)(d.td, {
                          children:
                            "Consumer's Valid and Verified Email Address",
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {children: 'phone'}),
                        }),
                        (0, r.jsx)(d.td, {children: '-'}),
                        (0, r.jsx)(d.td, {children: 'string'}),
                        (0, r.jsx)(d.td, {
                          children:
                            "Consumer's Valid and Verified Phone Number",
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {children: 'address'}),
                        }),
                        (0, r.jsx)(d.td, {children: '-'}),
                        (0, r.jsx)(d.td, {children: 'string'}),
                        (0, r.jsx)(d.td, {
                          children: "Consumer's Physical Address",
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {children: 'city'}),
                        }),
                        (0, r.jsx)(d.td, {children: '-'}),
                        (0, r.jsx)(d.td, {children: 'string'}),
                        (0, r.jsx)(d.td, {children: "Consumer's city"}),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'region_name',
                          }),
                        }),
                        (0, r.jsx)(d.td, {children: '-'}),
                        (0, r.jsx)(d.td, {children: 'string'}),
                        (0, r.jsx)(d.td, {children: 'Name of the State'}),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {children: 'zip'}),
                        }),
                        (0, r.jsx)(d.td, {children: '99999'}),
                        (0, r.jsx)(d.td, {children: 'string'}),
                        (0, r.jsx)(d.td, {children: "Consumer's ZIP code"}),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'country_code',
                          }),
                        }),
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {children: 'US'}),
                        }),
                        (0, r.jsx)(d.td, {children: 'string'}),
                        (0, r.jsx)(d.td, {
                          children:
                            "Consumer's Country. Hero Pixel only returns US persons",
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {children: 'age'}),
                        }),
                        (0, r.jsx)(d.td, {children: '0-120'}),
                        (0, r.jsx)(d.td, {children: 'number'}),
                        (0, r.jsx)(d.td, {children: "Consumer's age"}),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {children: 'amex_card'}),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
                          children: 'Whether visitor owns an Amex card',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'address_type',
                          }),
                        }),
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.a, {
                            href: '/docs/destinations/properties/address-type-property',
                            children: 'see all',
                          }),
                        }),
                        (0, r.jsx)(d.td, {children: 'string'}),
                        (0, r.jsx)(d.td, {
                          children: "Type of Consumer's address",
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {children: 'bank_card'}),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
                          children: 'Whether visitor owns a bank card',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'birth_month_and_year',
                          }),
                        }),
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: '1951-10-19',
                          }),
                        }),
                        (0, r.jsx)(d.td, {children: 'string'}),
                        (0, r.jsx)(d.td, {children: "Consumer's birth date"}),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'birth_year',
                          }),
                        }),
                        (0, r.jsx)(d.td, {children: 'YYYY'}),
                        (0, r.jsx)(d.td, {children: 'number'}),
                        (0, r.jsx)(d.td, {children: "Consumer's birth year"}),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'blue_collar',
                          }),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
                          children: "Consumer's blue collar score",
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {children: 'cat_owner'}),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
                          children: "Consumer's blue collar score",
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'child_aged_0_3_hh',
                          }),
                        }),
                        (0, r.jsx)(d.td, {children: '0-9'}),
                        (0, r.jsx)(d.td, {children: 'number'}),
                        (0, r.jsx)(d.td, {
                          children:
                            'How many children between 0 and 3 yrs of age within the HH',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'child_aged_4_6_hh',
                          }),
                        }),
                        (0, r.jsx)(d.td, {children: '0-9'}),
                        (0, r.jsx)(d.td, {children: 'number'}),
                        (0, r.jsx)(d.td, {
                          children:
                            'How many children between 4 and 6 yrs of age within the HH',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'child_aged_10_12_hh',
                          }),
                        }),
                        (0, r.jsx)(d.td, {children: '0-9'}),
                        (0, r.jsx)(d.td, {children: 'number'}),
                        (0, r.jsx)(d.td, {
                          children:
                            'How many children between 10 and 12 yrs of age within the HH',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'child_aged_13_18_hh',
                          }),
                        }),
                        (0, r.jsx)(d.td, {children: '0-9'}),
                        (0, r.jsx)(d.td, {children: 'number'}),
                        (0, r.jsx)(d.td, {
                          children:
                            'How many children between 13 and 18 yrs of age within the HH',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'created_at',
                          }),
                        }),
                        (0, r.jsx)(d.td, {children: '-'}),
                        (0, r.jsx)(d.td, {children: 'integer'}),
                        (0, r.jsx)(d.td, {
                          children:
                            'The 10 digit epoch timestamp of the first Engagement on your website',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'credit_range',
                          }),
                        }),
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.a, {
                            href: '/docs/destinations/properties/credit-range-property',
                            children: 'see all',
                          }),
                        }),
                        (0, r.jsx)(d.td, {children: 'string'}),
                        (0, r.jsx)(d.td, {children: "Consumer's credit range"}),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'credit_card',
                          }),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'number'}),
                        (0, r.jsx)(d.td, {
                          children:
                            'Number of credit cards owned by the visitor',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'credit_midpts',
                          }),
                        }),
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.a, {
                            href: '/docs/destinations/properties/credit-midpts-property',
                            children: 'see all',
                          }),
                        }),
                        (0, r.jsx)(d.td, {children: 'number'}),
                        (0, r.jsx)(d.td, {children: 'Credit midpoints'}),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'custom_one',
                          }),
                        }),
                        (0, r.jsx)(d.td, {children: '-'}),
                        (0, r.jsx)(d.td, {children: 'string'}),
                        (0, r.jsx)(d.td, {
                          children:
                            'The Custom parameter you tagged the lead with at the time of engagement',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'custom_two',
                          }),
                        }),
                        (0, r.jsx)(d.td, {children: '-'}),
                        (0, r.jsx)(d.td, {children: 'string'}),
                        (0, r.jsx)(d.td, {
                          children:
                            'The Custom parameter you tagged the lead with at the time of engagement',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'custom_three',
                          }),
                        }),
                        (0, r.jsx)(d.td, {children: '-'}),
                        (0, r.jsx)(d.td, {children: 'string'}),
                        (0, r.jsx)(d.td, {
                          children:
                            'The Custom parameter you tagged the lead with at the time of engagement',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'custom_four',
                          }),
                        }),
                        (0, r.jsx)(d.td, {children: '-'}),
                        (0, r.jsx)(d.td, {children: 'string'}),
                        (0, r.jsx)(d.td, {
                          children:
                            'The Custom parameter you tagged the lead with at the time of engagement',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'custom_five',
                          }),
                        }),
                        (0, r.jsx)(d.td, {children: '-'}),
                        (0, r.jsx)(d.td, {children: 'string'}),
                        (0, r.jsx)(d.td, {
                          children:
                            'The Custom parameter you tagged the lead with at the time of engagement',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {children: 'dog_owner'}),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
                          children: 'Whether visitor owns a Dog',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'dwelling_type',
                          }),
                        }),
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.a, {
                            href: '/docs/destinations/properties/dwelling-type-property',
                            children: 'see all',
                          }),
                        }),
                        (0, r.jsx)(d.td, {children: 'string'}),
                        (0, r.jsx)(d.td, {children: 'Type of dwelling'}),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'ethnic_group',
                          }),
                        }),
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.a, {
                            href: '/docs/destinations/properties/hero-ethnic-group-property',
                            children: 'see all',
                          }),
                        }),
                        (0, r.jsx)(d.td, {children: 'string'}),
                        (0, r.jsx)(d.td, {children: "Consumer's ethnic group"}),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {children: 'education'}),
                        }),
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.a, {
                            href: '/docs/destinations/properties/education-property',
                            children: 'see all',
                          }),
                        }),
                        (0, r.jsx)(d.td, {children: 'string'}),
                        (0, r.jsx)(d.td, {
                          children: "Consumer's education level",
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'education_ordinal',
                          }),
                        }),
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.a, {
                            href: '/docs/destinations/properties/education-ordinal-property',
                            children: 'see all',
                          }),
                        }),
                        (0, r.jsx)(d.td, {children: 'number'}),
                        (0, r.jsx)(d.td, {
                          children: "Consumer's education ordinal",
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'ethnicity_detail',
                          }),
                        }),
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.a, {
                            href: '/docs/destinations/properties/ethnicity-detail-property',
                            children: 'see all',
                          }),
                        }),
                        (0, r.jsx)(d.td, {children: 'string'}),
                        (0, r.jsx)(d.td, {
                          children: 'Detailed ethnicity of the visitor',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'ethnicity_white',
                          }),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'string'}),
                        (0, r.jsx)(d.td, {children: 'White ethnicity'}),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'ethnicity_african_american',
                          }),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'string'}),
                        (0, r.jsx)(d.td, {
                          children: 'African American ethnicity',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'ethnicity_hispanic',
                          }),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'string'}),
                        (0, r.jsx)(d.td, {children: 'Hispanic ethnicity'}),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'ethnicity_asian',
                          }),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'string'}),
                        (0, r.jsx)(d.td, {children: 'Asian ethnicity'}),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'ethnicity_jewish',
                          }),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'string'}),
                        (0, r.jsx)(d.td, {children: 'Jewish ethnicity'}),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {children: 'gender'}),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: 'Male'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: 'Female'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'string'}),
                        (0, r.jsx)(d.td, {children: "Consumer's gender"}),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'generation',
                          }),
                        }),
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.a, {
                            href: '/docs/destinations/properties/hero-generation-property',
                            children: 'see all',
                          }),
                        }),
                        (0, r.jsx)(d.td, {children: 'string'}),
                        (0, r.jsx)(d.td, {children: "Consumer's generation"}),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'generation_ordinal',
                          }),
                        }),
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.a, {
                            href: '/docs/destinations/properties/generation-ordinal-property',
                            children: 'see all',
                          }),
                        }),
                        (0, r.jsx)(d.td, {children: 'number'}),
                        (0, r.jsx)(d.td, {
                          children: "Consumer's generation ordinal",
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'home_owner',
                          }),
                        }),
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.a, {
                            href: '/docs/destinations/properties/home-owner-property',
                            children: 'see all',
                          }),
                        }),
                        (0, r.jsx)(d.td, {children: 'string'}),
                        (0, r.jsx)(d.td, {
                          children: 'Whether visitor is a homeowner',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'home_owner_ordinal',
                          }),
                        }),
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.a, {
                            href: '/docs/destinations/properties/home-owner-ordinal-property',
                            children: 'see all',
                          }),
                        }),
                        (0, r.jsx)(d.td, {children: 'number'}),
                        (0, r.jsx)(d.td, {children: 'Homeowner ordinal'}),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'home_heat_type',
                          }),
                        }),
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.a, {
                            href: '/docs/destinations/properties/home-heat-type-property',
                            children: 'see all',
                          }),
                        }),
                        (0, r.jsx)(d.td, {children: 'string'}),
                        (0, r.jsx)(d.td, {
                          children: "Type of heating in the Consumer's home",
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'home_improvement',
                          }),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
                          children:
                            'Whether visitor is interested in home improvement',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'home_price',
                          }),
                        }),
                        (0, r.jsx)(d.td, {children: '0-999999'}),
                        (0, r.jsx)(d.td, {children: 'number'}),
                        (0, r.jsx)(d.td, {
                          children: "Price of Consumer's home",
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'home_purchased_years_ago',
                          }),
                        }),
                        (0, r.jsx)(d.td, {children: '0-56'}),
                        (0, r.jsx)(d.td, {children: 'number'}),
                        (0, r.jsx)(d.td, {
                          children: 'Years since visitor purchased home',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'home_study',
                          }),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
                          children: 'Whether visitor has a home study',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'home_value',
                          }),
                        }),
                        (0, r.jsx)(d.td, {children: '0-999999999'}),
                        (0, r.jsx)(d.td, {children: 'number'}),
                        (0, r.jsx)(d.td, {
                          children: "Value of Consumer's home",
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {children: 'income_hh'}),
                        }),
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.a, {
                            href: '/docs/destinations/properties/income-hh-property',
                            children: 'see all',
                          }),
                        }),
                        (0, r.jsx)(d.td, {children: 'string'}),
                        (0, r.jsx)(d.td, {children: 'Household income'}),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'income_levels',
                          }),
                        }),
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.a, {
                            href: '/docs/destinations/properties/income-levels-property',
                            children: 'see all',
                          }),
                        }),
                        (0, r.jsx)(d.td, {children: 'string'}),
                        (0, r.jsx)(d.td, {children: 'Levels of income'}),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'income_midpts_hh',
                          }),
                        }),
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.a, {
                            href: '/docs/destinations/properties/income-midpts-hh-property',
                            children: 'see all',
                          }),
                        }),
                        (0, r.jsx)(d.td, {children: 'number'}),
                        (0, r.jsx)(d.td, {
                          children: 'Midpoints of household income',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'investment_type',
                          }),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'number'}),
                        (0, r.jsx)(d.td, {
                          children: 'Types of investments owned by the visitor',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {children: 'language'}),
                        }),
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {children: 'en-US'}),
                        }),
                        (0, r.jsx)(d.td, {children: 'string'}),
                        (0, r.jsx)(d.td, {}),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {children: 'Language'}),
                        }),
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.a, {
                            href: '/docs/destinations/properties/hero-language-property',
                            children: 'see all',
                          }),
                        }),
                        (0, r.jsx)(d.td, {children: 'string'}),
                        (0, r.jsx)(d.td, {
                          children: "Consumer's preferred language",
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {children: 'lat'}),
                        }),
                        (0, r.jsx)(d.td, {children: '-'}),
                        (0, r.jsx)(d.td, {children: 'string'}),
                        (0, r.jsx)(d.td, {}),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {children: 'lon'}),
                        }),
                        (0, r.jsx)(d.td, {children: '-'}),
                        (0, r.jsx)(d.td, {children: 'string'}),
                        (0, r.jsx)(d.td, {}),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'likely_charitable_donor',
                          }),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
                          children:
                            'Whether visitor is likely to be a charitable donor',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'length_of_residence',
                          }),
                        }),
                        (0, r.jsx)(d.td, {children: '0-99'}),
                        (0, r.jsx)(d.td, {children: 'number'}),
                        (0, r.jsx)(d.td, {children: 'Length of residence'}),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'marital_status',
                          }),
                        }),
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.a, {
                            href: '/docs/destinations/properties/marital-status-property',
                            children: 'see all',
                          }),
                        }),
                        (0, r.jsx)(d.td, {children: 'string'}),
                        (0, r.jsx)(d.td, {
                          children: 'Marital status of the visitor',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {children: 'md5'}),
                        }),
                        (0, r.jsx)(d.td, {children: '-'}),
                        (0, r.jsx)(d.td, {children: 'string'}),
                        (0, r.jsx)(d.td, {
                          children:
                            '32 Character MD5 encrypted hash of their email',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'median_home_value',
                          }),
                        }),
                        (0, r.jsx)(d.td, {children: '0-999999'}),
                        (0, r.jsx)(d.td, {children: 'number'}),
                        (0, r.jsx)(d.td, {
                          children: "Median value of homes in Consumer's area",
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'median_income',
                          }),
                        }),
                        (0, r.jsx)(d.td, {children: '0-250000'}),
                        (0, r.jsx)(d.td, {children: 'number'}),
                        (0, r.jsx)(d.td, {
                          children: "Median income of Consumer's area",
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'mortgage_age',
                          }),
                        }),
                        (0, r.jsx)(d.td, {children: '0-34'}),
                        (0, r.jsx)(d.td, {children: 'number'}),
                        (0, r.jsx)(d.td, {
                          children: "Age of Consumer's mortgage",
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'mortgage_amount',
                          }),
                        }),
                        (0, r.jsx)(d.td, {children: '0-999999999'}),
                        (0, r.jsx)(d.td, {children: 'number'}),
                        (0, r.jsx)(d.td, {
                          children: "Amount of Consumer's mortgage",
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'mortgage_loan_type',
                          }),
                        }),
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.a, {
                            href: '/docs/destinations/properties/mortgage-loan-type-property',
                            children: 'see all',
                          }),
                        }),
                        (0, r.jsx)(d.td, {children: 'string'}),
                        (0, r.jsx)(d.td, {children: 'Type of mortgage loan'}),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'mortgage_refi_age',
                          }),
                        }),
                        (0, r.jsx)(d.td, {children: '0-24'}),
                        (0, r.jsx)(d.td, {children: 'number'}),
                        (0, r.jsx)(d.td, {
                          children: "Age of Consumer's mortgage refinance",
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'mortgage_refi_amount',
                          }),
                        }),
                        (0, r.jsx)(d.td, {children: '0-999999999'}),
                        (0, r.jsx)(d.td, {children: 'number'}),
                        (0, r.jsx)(d.td, {
                          children: "Amount of Consumer's mortgage refinance",
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'mortgage_refi_type',
                          }),
                        }),
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.a, {
                            href: '/docs/destinations/properties/mortgage-refi-type-property',
                            children: 'see all',
                          }),
                        }),
                        (0, r.jsx)(d.td, {children: 'string'}),
                        (0, r.jsx)(d.td, {
                          children: 'Type of mortgage refinance',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'multilingual',
                          }),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
                          children: 'Whether visitor is multilingual',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'net_worth_hh',
                          }),
                        }),
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.a, {
                            href: '/docs/destinations/properties/net-worth-hh-property',
                            children: 'see all',
                          }),
                        }),
                        (0, r.jsx)(d.td, {children: 'number'}),
                        (0, r.jsx)(d.td, {children: 'Household net worth'}),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'net_worth_midpt_hh',
                          }),
                        }),
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.a, {
                            href: '/docs/destinations/properties/net-worth-midpt-hh-property',
                            children: 'see all',
                          }),
                        }),
                        (0, r.jsx)(d.td, {children: 'number'}),
                        (0, r.jsx)(d.td, {
                          children: 'Midpoint of household net worth',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'new_credit_offered_hh',
                          }),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
                          children:
                            'Whether visitor has been offered new credit',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'num_adults_hh',
                          }),
                        }),
                        (0, r.jsx)(d.td, {children: '0-9'}),
                        (0, r.jsx)(d.td, {children: 'number'}),
                        (0, r.jsx)(d.td, {
                          children: 'Number of adults in the household',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'num_children_hh',
                          }),
                        }),
                        (0, r.jsx)(d.td, {children: '0-8'}),
                        (0, r.jsx)(d.td, {children: 'number'}),
                        (0, r.jsx)(d.td, {
                          children: 'Number of children in the household',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'num_generations_hh',
                          }),
                        }),
                        (0, r.jsx)(d.td, {children: '0-3'}),
                        (0, r.jsx)(d.td, {children: 'number'}),
                        (0, r.jsx)(d.td, {
                          children: 'Number of generations in the household',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'num_persons_hh',
                          }),
                        }),
                        (0, r.jsx)(d.td, {children: '0-9'}),
                        (0, r.jsx)(d.td, {children: 'number'}),
                        (0, r.jsx)(d.td, {
                          children: 'Number of persons in the household',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'number_of_vehicles_in_hh',
                          }),
                        }),
                        (0, r.jsx)(d.td, {children: '0-10'}),
                        (0, r.jsx)(d.td, {children: 'number'}),
                        (0, r.jsx)(d.td, {
                          children: 'Number of vehicles in the household',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'occupation_detail',
                          }),
                        }),
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.a, {
                            href: '/docs/destinations/properties/occupation-detail-property',
                            children: 'see all',
                          }),
                        }),
                        (0, r.jsx)(d.td, {children: 'string'}),
                        (0, r.jsx)(d.td, {
                          children: "Consumer's occupation details",
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {children: 'outdoors'}),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
                          children:
                            'Whether visitor is interested in outdoor activities',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'owns_investments',
                          }),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
                          children: 'Whether visitor owns investments',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'owns_stocks_and_bonds',
                          }),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
                          children: 'Whether visitor owns stocks and bonds',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'owns_swimming_pool',
                          }),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'number'}),
                        (0, r.jsx)(d.td, {
                          children: 'Whether visitor owns a swimming pool',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {children: 'pet_owner'}),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
                          children: 'Whether visitor owns pets',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'phone_activity',
                          }),
                        }),
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.a, {
                            href: '/docs/destinations/properties/phone-activity-property',
                            children: 'see all',
                          }),
                        }),
                        (0, r.jsx)(d.td, {children: 'string'}),
                        (0, r.jsx)(d.td, {children: 'Phone activity'}),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'phone_can_receive_texts',
                          }),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
                          children:
                            "Whether Consumer's phone can receive texts",
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'phone_carrier',
                          }),
                        }),
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.a, {
                            href: '/docs/destinations/properties/phone-carrier-property',
                            children: 'see all',
                          }),
                        }),
                        (0, r.jsx)(d.td, {children: 'string'}),
                        (0, r.jsx)(d.td, {
                          children: "Consumer's phone carrier",
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'phone_dialing_code',
                          }),
                        }),
                        (0, r.jsx)(d.td, {children: '0-9999'}),
                        (0, r.jsx)(d.td, {children: 'number'}),
                        (0, r.jsx)(d.td, {
                          children:
                            'The 1 to 4 digit dialing code for this phone number or null if unknown.',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'phone_do_not_call',
                          }),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
                          children:
                            "Whether Consumer's phone is on the do-not-call list",
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'phone_formatted',
                          }),
                        }),
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: '+18007132618',
                          }),
                        }),
                        (0, r.jsx)(d.td, {children: 'string'}),
                        (0, r.jsx)(d.td, {
                          children:
                            'The phone number formatted in the international dialing code. N/A if not formattable.',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'phone_is_callable',
                          }),
                        }),
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.a, {
                            href: '/docs/destinations/properties/phone-is-callable-property',
                            children: 'see all',
                          }),
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
                          children: "Whether Consumer's phone is callable",
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'phone_type',
                          }),
                        }),
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.a, {
                            href: '/docs/destinations/properties/line-type-property',
                            children: 'see all',
                          }),
                        }),
                        (0, r.jsx)(d.td, {children: 'string'}),
                        (0, r.jsx)(d.td, {children: 'Type of phone'}),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'phone_voip',
                          }),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
                          children: "Whether Consumer's phone is a VoIP number",
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'photography',
                          }),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
                          children:
                            'Whether visitor is interested in photography',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'political_contributor',
                          }),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
                          children:
                            'Whether visitor is a political contributor',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'political_party',
                          }),
                        }),
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.a, {
                            href: '/docs/destinations/properties/political-party-property',
                            children: 'see all',
                          }),
                        }),
                        (0, r.jsx)(d.td, {children: 'string'}),
                        (0, r.jsx)(d.td, {
                          children: 'Political party affiliation',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'premium_amex_card',
                          }),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
                          children: 'Whether visitor owns a premium Amex card',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'premium_card',
                          }),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
                          children: 'Whether visitor owns a premium card',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'premium_income_hh',
                          }),
                        }),
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.a, {
                            href: '/docs/destinations/properties/premium-income-hh-property',
                            children: 'see all',
                          }),
                        }),
                        (0, r.jsx)(d.td, {children: 'number'}),
                        (0, r.jsx)(d.td, {
                          children: 'Premium household income',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'premium_income_midpt_hh',
                          }),
                        }),
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.a, {
                            href: '/docs/destinations/properties/premium-income-midpt-hh-property',
                            children: 'see all',
                          }),
                        }),
                        (0, r.jsx)(d.td, {children: 'number'}),
                        (0, r.jsx)(d.td, {
                          children: 'Midpoint of premium household income',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {children: 'religion'}),
                        }),
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.a, {
                            href: '/docs/destinations/properties/religion-property',
                            children: 'see all',
                          }),
                        }),
                        (0, r.jsx)(d.td, {children: 'string'}),
                        (0, r.jsx)(d.td, {children: "Consumer's religion"}),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {children: 'sha1'}),
                        }),
                        (0, r.jsx)(d.td, {children: '-'}),
                        (0, r.jsx)(d.td, {children: 'string'}),
                        (0, r.jsx)(d.td, {
                          children: 'The SHA1 encryption of the users email',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {children: 'sha2'}),
                        }),
                        (0, r.jsx)(d.td, {children: '-'}),
                        (0, r.jsx)(d.td, {children: 'string'}),
                        (0, r.jsx)(d.td, {
                          children:
                            'The SHA2 encryption of the users email (perfect for ads)',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'single_family_dwelling',
                          }),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
                          children: 'Single-family dwelling ordinal',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {children: 'timestamp'}),
                        }),
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: '2024-06-07 10:18:36.749000',
                          }),
                        }),
                        (0, r.jsx)(d.td, {children: 'string'}),
                        (0, r.jsx)(d.td, {
                          children:
                            'The full timestamp taken at the time of engagement',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {children: 'timezone'}),
                        }),
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'America/Los_Angeles',
                          }),
                        }),
                        (0, r.jsx)(d.td, {children: 'string'}),
                        (0, r.jsx)(d.td, {
                          children:
                            'The full timestamp taken at the time of engagement',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'urbanicity',
                          }),
                        }),
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.a, {
                            href: '/docs/destinations/properties/urbanicity-property',
                            children: 'see all',
                          }),
                        }),
                        (0, r.jsx)(d.td, {children: 'string'}),
                        (0, r.jsx)(d.td, {children: 'Degree of urbanization'}),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'veteran_hh',
                          }),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'string'}),
                        (0, r.jsx)(d.td, {
                          children: 'Veteran status in the household',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'white_collar',
                          }),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'number'}),
                        (0, r.jsx)(d.td, {
                          children: 'White-collar worker ordinal',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, r.jsx)(d.h2, {
              id: 'device-technology',
              children: 'Device Technology',
            }),
            '\n',
            (0, r.jsxs)(d.table, {
              children: [
                (0, r.jsx)(d.thead, {
                  children: (0, r.jsxs)(d.tr, {
                    children: [
                      (0, r.jsx)(d.th, {children: 'Property'}),
                      (0, r.jsx)(d.th, {children: 'Values'}),
                      (0, r.jsx)(d.th, {children: 'Value Type'}),
                      (0, r.jsx)(d.th, {children: 'Description'}),
                    ],
                  }),
                }),
                (0, r.jsxs)(d.tbody, {
                  children: [
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {children: 'browser'}),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: 'Chrome 125.0.0.0'}),
                            ' -',
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'string'}),
                        (0, r.jsx)(d.td, {
                          children: 'The browser they prefer to use.',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'device_type',
                          }),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: 'desktop'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: 'mobile'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'string'}),
                        (0, r.jsx)(d.td, {
                          children: 'The type of device they prefer to use.',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'inner_resolution',
                          }),
                        }),
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {children: '1000x900'}),
                        }),
                        (0, r.jsx)(d.td, {children: 'string'}),
                        (0, r.jsx)(d.td, {
                          children:
                            'The height and width of their inner screen',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {children: 'is_eu'}),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
                          children: 'Is the user in Europe right now?',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {children: 'isp'}),
                        }),
                        (0, r.jsx)(d.td, {children: '-'}),
                        (0, r.jsx)(d.td, {children: 'string'}),
                        (0, r.jsx)(d.td, {
                          children: 'Their Internet Service Provider',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {children: 'org'}),
                        }),
                        (0, r.jsx)(d.td, {children: '-'}),
                        (0, r.jsx)(d.td, {children: 'string'}),
                        (0, r.jsx)(d.td, {
                          children:
                            'The business that was identified at the time of engagement',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {children: 'os'}),
                        }),
                        (0, r.jsx)(d.td, {children: '-'}),
                        (0, r.jsx)(d.td, {children: 'string'}),
                        (0, r.jsx)(d.td, {
                          children: 'Their preferred Operating System',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {children: 'referrer'}),
                        }),
                        (0, r.jsx)(d.td, {children: '-'}),
                        (0, r.jsx)(d.td, {children: 'string'}),
                        (0, r.jsx)(d.td, {
                          children:
                            'The referring website the visitor came from (full url)',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'referring_domain',
                          }),
                        }),
                        (0, r.jsx)(d.td, {children: '-'}),
                        (0, r.jsx)(d.td, {children: 'string'}),
                        (0, r.jsx)(d.td, {
                          children:
                            'The referring website domain the visitor came from',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'resolution',
                          }),
                        }),
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {children: '1000x900'}),
                        }),
                        (0, r.jsx)(d.td, {children: 'string'}),
                        (0, r.jsx)(d.td, {
                          children: 'The height and width of their screen',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'user_agent',
                          }),
                        }),
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'Mozilla/5.0 (Windows NT ...',
                          }),
                        }),
                        (0, r.jsx)(d.td, {children: 'string'}),
                        (0, r.jsx)(d.td, {
                          children:
                            "The user agent ID of the visitor's browser",
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'utm_campaign',
                          }),
                        }),
                        (0, r.jsx)(d.td, {children: '-'}),
                        (0, r.jsx)(d.td, {children: 'string'}),
                        (0, r.jsx)(d.td, {
                          children:
                            'The utm_campaign parameter you set in your marketing',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'utm_content',
                          }),
                        }),
                        (0, r.jsx)(d.td, {children: '-'}),
                        (0, r.jsx)(d.td, {children: 'string'}),
                        (0, r.jsx)(d.td, {
                          children:
                            'The utm_content parameter you set in your marketing',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'utm_medium',
                          }),
                        }),
                        (0, r.jsx)(d.td, {children: '-'}),
                        (0, r.jsx)(d.td, {children: 'string'}),
                        (0, r.jsx)(d.td, {
                          children:
                            'The utm_medium parameter you set in your marketing',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'utm_source',
                          }),
                        }),
                        (0, r.jsx)(d.td, {children: '-'}),
                        (0, r.jsx)(d.td, {children: 'string'}),
                        (0, r.jsx)(d.td, {
                          children:
                            'The utm_source parameter you set in your marketing',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {children: 'utm_term'}),
                        }),
                        (0, r.jsx)(d.td, {children: '-'}),
                        (0, r.jsx)(d.td, {children: 'string'}),
                        (0, r.jsx)(d.td, {
                          children:
                            'The utm_term parameter you set in your marketing',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'website_id',
                          }),
                        }),
                        (0, r.jsx)(d.td, {children: '0-9999'}),
                        (0, r.jsx)(d.td, {children: 'number'}),
                        (0, r.jsx)(d.td, {
                          children: 'The Pixel ID that identified the visitor',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, r.jsx)(d.h2, {
              id: 'consumer-affinities',
              children: 'Consumer Affinities',
            }),
            '\n',
            (0, r.jsx)(d.p, {
              children:
                '"Affinity" refers to a natural liking, attraction, or inclination towards something or someone. It can also describe a similarity or resemblance between things. In different contexts, it can mean:',
            }),
            '\n',
            (0, r.jsxs)(d.ol, {
              children: [
                '\n',
                (0, r.jsxs)(d.li, {
                  children: [
                    (0, r.jsx)(d.strong, {children: 'Personal Affinity'}),
                    ': A natural liking or sympathy for someone or something. For example, "She has an affinity for classical music."',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsx)(d.p, {
              children:
                'In general, it signifies a close relationship or a strong connection.',
            }),
            '\n',
            (0, r.jsxs)(d.table, {
              children: [
                (0, r.jsx)(d.thead, {
                  children: (0, r.jsxs)(d.tr, {
                    children: [
                      (0, r.jsx)(d.th, {children: 'Property'}),
                      (0, r.jsx)(d.th, {children: 'Values'}),
                      (0, r.jsx)(d.th, {children: 'Value Type'}),
                      (0, r.jsx)(d.th, {children: 'Description'}),
                    ],
                  }),
                }),
                (0, r.jsxs)(d.tbody, {
                  children: [
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'auto_racing_affinity',
                          }),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
                          children:
                            'Does the consumer have an Auto Racing Affinity?',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'gambling_affinity',
                          }),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
                          children: "Consumer's affinity for gambling",
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'golf_affinity',
                          }),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
                          children: "Consumer's affinity for golf",
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'gourmet_affinity',
                          }),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
                          children: "Consumer's affinity for gourmet food",
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'home_decorating_affinity',
                          }),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
                          children: "Consumer's affinity for home decorating",
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'motorcycles_affinity',
                          }),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
                          children: "Consumer's affinity for motorcycles",
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'pets_affinity',
                          }),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
                          children: "Consumer's affinity for pets",
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'travel_cruise_affinity',
                          }),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
                          children: "Consumer's affinity for cruise travel",
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'trucks_affinity',
                          }),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
                          children: "Consumer's affinity for trucks",
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'do_it_yourself_affinity',
                          }),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
                          children: "Consumer's affinity for Do-It-Yourself",
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'dog_affinity',
                          }),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
                          children: "Consumer's affinity for Dogs",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, r.jsx)(d.h2, {id: 'interests', children: 'Interests'}),
            '\n',
            (0, r.jsx)(d.p, {
              children:
                '"Interests" refer to the subjects or activities that capture your attention, enthusiasm, and curiosity. They are the things you enjoy doing or learning about in your free time. Interests can vary widely from person to person and can include hobbies, sports, academic subjects, arts, and much more. Here are a few examples:',
            }),
            '\n',
            (0, r.jsxs)(d.ol, {
              children: [
                '\n',
                (0, r.jsxs)(d.li, {
                  children: [
                    (0, r.jsx)(d.strong, {children: 'Hobbies'}),
                    ': Activities like reading, painting, gardening, cooking, or playing musical instruments.',
                  ],
                }),
                '\n',
                (0, r.jsxs)(d.li, {
                  children: [
                    (0, r.jsx)(d.strong, {
                      children: 'Sports and Physical Activities',
                    }),
                    ': Interests in activities like soccer, basketball, hiking, yoga, or swimming.',
                  ],
                }),
                '\n',
                (0, r.jsxs)(d.li, {
                  children: [
                    (0, r.jsx)(d.strong, {children: 'Academic Subjects'}),
                    ': Areas of study such as mathematics, science, history, literature, or technology.',
                  ],
                }),
                '\n',
                (0, r.jsxs)(d.li, {
                  children: [
                    (0, r.jsx)(d.strong, {children: 'Arts and Culture'}),
                    ': Appreciation for activities like attending theater performances, visiting museums, exploring different cultures, or watching movies.',
                  ],
                }),
                '\n',
                (0, r.jsxs)(d.li, {
                  children: [
                    (0, r.jsx)(d.strong, {children: 'Personal Development'}),
                    ': Interests in self-improvement, learning new skills, or engaging in mindfulness practices.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsx)(d.p, {
              children:
                "Interests often reflect a person's personality, values, and lifestyle choices, and they can evolve over time as people discover new passions and experiences.",
            }),
            '\n',
            (0, r.jsxs)(d.table, {
              children: [
                (0, r.jsx)(d.thead, {
                  children: (0, r.jsxs)(d.tr, {
                    children: [
                      (0, r.jsx)(d.th, {children: 'Property'}),
                      (0, r.jsx)(d.th, {children: 'Values'}),
                      (0, r.jsx)(d.th, {children: 'Value Type'}),
                      (0, r.jsx)(d.th, {children: 'Description'}),
                    ],
                  }),
                }),
                (0, r.jsxs)(d.tbody, {
                  children: [
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'cars_interest',
                          }),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
                          children: "Consumer's interest in Cars",
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'charity_interest',
                          }),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
                          children:
                            "Consumer's interest in charities, either participating or contributing.",
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'healthy_living_interest',
                          }),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
                          children: "Consumer's interest in healthy living",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, r.jsx)(d.h2, {id: 'categories', children: 'Categories'}),
            '\n',
            (0, r.jsxs)(d.table, {
              children: [
                (0, r.jsx)(d.thead, {
                  children: (0, r.jsxs)(d.tr, {
                    children: [
                      (0, r.jsx)(d.th, {children: 'Property'}),
                      (0, r.jsx)(d.th, {children: 'Values'}),
                      (0, r.jsx)(d.th, {children: 'Value Type'}),
                      (0, r.jsx)(d.th, {children: 'Description'}),
                    ],
                  }),
                }),
                (0, r.jsxs)(d.tbody, {
                  children: [
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {children: 'aerobics'}),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
                          children: 'Does the consumer like aerobics?',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {children: 'antiques'}),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
                          children: 'Does the consumer like Antiques?',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'arts_and_crafts',
                          }),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
                          children: 'Does the consumer like Arts and Crafts?',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {children: 'baseball'}),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
                          children: 'Does the consumer like Baseball?',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'basketball',
                          }),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
                          children: 'Does the consumer like Basketball?',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'bird_watching',
                          }),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
                          children: 'Does the consumer like Bird watching?',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'boating_sailing',
                          }),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
                          children:
                            'Does the consumer like Boating and Sailing?',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'camping_hiking',
                          }),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
                          children:
                            'Does the consumer like Camping and Hiking?',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {children: 'cigars'}),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
                          children: 'Does the consumer like Cigars?',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {children: 'coins'}),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
                          children: 'Does the consumer like Coins?',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {children: 'cooking'}),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
                          children: 'Does the consumer like Cooking?',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {children: 'dieting'}),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
                          children: 'Does the consumer like Dieting?',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {children: 'diy'}),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
                          children: 'Does the consumer like Do-it-yoursel?',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {children: 'fishing'}),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
                          children: 'Whether visitor is interested in fishing',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {children: 'fitness'}),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
                          children: 'Whether visitor is interested in fitness',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {children: 'football'}),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
                          children: 'Whether visitor is interested in football',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {children: 'gambling'}),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
                          children: 'Whether visitor is interested in gambling',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {children: 'gardening'}),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
                          children:
                            'Whether visitor is interested in gardening',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {children: 'golf'}),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
                          children: 'Whether visitor is interested in golf',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'healthy_living',
                          }),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
                          children: 'Whether visitor practices healthy living',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {children: 'hockey'}),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
                          children: 'Whether visitor is interested in hockey',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {children: 'hunting'}),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
                          children: 'Whether visitor is interested in hunting',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'knitting_quilting_sewing',
                          }),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
                          children:
                            'Whether visitor is interested in knitting, quilting, or sewing',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'luxury_life',
                          }),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
                          children: 'Whether visitor lives a luxury lifestyle',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'magazine_subscriber',
                          }),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
                          children: 'Whether visitor subscribes to magazines',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'motor_racing',
                          }),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
                          children:
                            'Whether visitor is interested in motor racing',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'motorcycles',
                          }),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
                          children:
                            'Whether visitor owns or is interested in motorcycles',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {children: 'movies'}),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
                          children: 'Whether visitor is interested in movies',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {children: 'music'}),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
                          children: 'Whether visitor is interested in music',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {children: 'nascar'}),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
                          children: 'Whether visitor is interested in NASCAR',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {children: 'running'}),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
                          children: 'Whether visitor is interested in running',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {children: 'rv'}),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
                          children:
                            'Whether visitor owns or is interested in RVs',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {children: 'scuba'}),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
                          children:
                            'Whether visitor is interested in scuba diving',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'self_improvement',
                          }),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
                          children:
                            'Whether visitor is interested in self-improvement',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'snow_skiing',
                          }),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
                          children:
                            'Whether visitor is interested in snow skiing',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {children: 'soccer'}),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
                          children: 'Whether visitor is interested in soccer',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'soho_business',
                          }),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
                          children: 'Whether visitor has a SOHO business',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {children: 'stamps'}),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
                          children:
                            'Whether visitor is interested in stamp collecting',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {children: 'tennis'}),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
                          children: 'Whether visitor is interested in tennis',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'travel_cruises',
                          }),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
                          children: 'Whether visitor is interested in cruises',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'travel_foreign',
                          }),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
                          children:
                            'Whether visitor is interested in foreign travel',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'travel_vacation',
                          }),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
                          children:
                            'Whether visitor is interested in vacations',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'truck_owner',
                          }),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
                          children: 'Whether visitor owns a truck',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {children: 'walking'}),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
                          children: 'Whether visitor is interested in walking',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'woodworking',
                          }),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
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
            (0, r.jsx)(d.h2, {id: 'collectors', children: 'Collectors'}),
            '\n',
            (0, r.jsx)(d.p, {
              children:
                'If the consumer is a collector of certain items, meaning that they both have a strong affinity for and they purchase high end items in these categories.',
            }),
            '\n',
            (0, r.jsxs)(d.table, {
              children: [
                (0, r.jsx)(d.thead, {
                  children: (0, r.jsxs)(d.tr, {
                    children: [
                      (0, r.jsx)(d.th, {children: 'Property'}),
                      (0, r.jsx)(d.th, {children: 'Values'}),
                      (0, r.jsx)(d.th, {children: 'Value Type'}),
                      (0, r.jsx)(d.th, {children: 'Description'}),
                    ],
                  }),
                }),
                (0, r.jsxs)(d.tbody, {
                  children: [
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'fine_arts_collector',
                          }),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
                          children: 'Whether visitor collects fine arts',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.tr, {
                      children: [
                        (0, r.jsx)(d.td, {
                          children: (0, r.jsx)(d.code, {
                            children: 'sports_memoribilia_collector',
                          }),
                        }),
                        (0, r.jsxs)(d.td, {
                          children: [
                            (0, r.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, r.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, r.jsx)(d.td, {children: 'boolean'}),
                        (0, r.jsx)(d.td, {
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
        const {wrapper: d} = {...(0, i.R)(), ...e.components};
        return d
          ? (0, r.jsx)(d, {...e, children: (0, r.jsx)(o, {...e})})
          : o(e);
      }
    },
    3023: (e, d, s) => {
      s.d(d, {R: () => t, x: () => c});
      var r = s(3696);
      const i = {},
        n = r.createContext(i);
      function t(e) {
        const d = r.useContext(n);
        return r.useMemo(
          function () {
            return 'function' == typeof e ? e(d) : {...d, ...e};
          },
          [d, e]
        );
      }
      function c(e) {
        let d;
        return (
          (d = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(i)
              : e.components || i
            : t(e.components)),
          r.createElement(n.Provider, {value: d}, e.children)
        );
      }
    },
  },
]);

/*! For license information please see 309a84c7.f41fde34.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [9358],
  {
    2192: (e, r, t) => {
      var i = t(3696),
        n = Symbol.for('react.element'),
        c = Symbol.for('react.fragment'),
        d = Object.prototype.hasOwnProperty,
        s =
          i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        o = {key: !0, ref: !0, __self: !0, __source: !0};
      function l(e, r, t) {
        var i,
          c = {},
          l = null,
          a = null;
        for (i in (void 0 !== t && (l = '' + t),
        void 0 !== r.key && (l = '' + r.key),
        void 0 !== r.ref && (a = r.ref),
        r))
          d.call(r, i) && !o.hasOwnProperty(i) && (c[i] = r[i]);
        if (e && e.defaultProps)
          for (i in (r = e.defaultProps)) void 0 === c[i] && (c[i] = r[i]);
        return {
          $$typeof: n,
          type: e,
          key: l,
          ref: a,
          props: c,
          _owner: s.current,
        };
      }
      (r.Fragment = c), (r.jsx = l), (r.jsxs = l);
    },
    2540: (e, r, t) => {
      e.exports = t(2192);
    },
    9050: (e, r, t) => {
      t.r(r),
        t.d(r, {
          assets: () => o,
          contentTitle: () => d,
          default: () => h,
          frontMatter: () => c,
          metadata: () => s,
          toc: () => l,
        });
      var i = t(2540),
        n = t(3023);
      const c = {
          id: 'occupation-detail-property',
          title: 'Occupation Detail Property',
          description: 'Guide to using the detailed occupation property',
        },
        d = 'Occupation Detail Property',
        s = {
          id: 'personalization/occupation-detail-property',
          title: 'Occupation Detail Property',
          description: 'Guide to using the detailed occupation property',
          source:
            '@site/versioned_docs/version-0.0.1/personalization/hero-occupation-detail-property.md',
          sourceDirName: 'personalization',
          slug: '/personalization/occupation-detail-property',
          permalink: '/docs/personalization/occupation-detail-property',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1723080994e3,
          frontMatter: {
            id: 'occupation-detail-property',
            title: 'Occupation Detail Property',
            description: 'Guide to using the detailed occupation property',
          },
          sidebar: 'personalization',
          previous: {
            title: 'Net Worth Midpoints HH Property',
            permalink: '/docs/personalization/net-worth-midpt-hh-property',
          },
          next: {
            title: 'Phone Activity Property',
            permalink: '/docs/personalization/phone-activity-property',
          },
        },
        o = {},
        l = [
          {value: 'Introduction', id: 'introduction', level: 2},
          {value: 'Usage', id: 'usage', level: 2},
          {value: 'Example', id: 'example', level: 3},
          {value: 'Potential Values', id: 'potential-values', level: 2},
          {value: 'Conclusion', id: 'conclusion', level: 2},
          {value: 'Next Steps', id: 'next-steps', level: 2},
        ];
      function a(e) {
        const r = {
          a: 'a',
          code: 'code',
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          li: 'li',
          p: 'p',
          pre: 'pre',
          strong: 'strong',
          table: 'table',
          tbody: 'tbody',
          td: 'td',
          th: 'th',
          thead: 'thead',
          tr: 'tr',
          ul: 'ul',
          ...(0, n.R)(),
          ...e.components,
        };
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(r.h1, {
              id: 'occupation-detail-property',
              children: 'Occupation Detail Property',
            }),
            '\n',
            (0, i.jsx)(r.h2, {id: 'introduction', children: 'Introduction'}),
            '\n',
            (0, i.jsxs)(r.p, {
              children: [
                'The ',
                (0, i.jsx)(r.code, {children: 'Occupation_Detail'}),
                ' property allows you to tailor your content based on the detailed occupation of your visitors. This guide provides an overview of how to use the ',
                (0, i.jsx)(r.code, {children: 'Occupation_Detail'}),
                ' property to create personalized experiences and includes a list of potential detailed occupation values.',
              ],
            }),
            '\n',
            (0, i.jsx)(r.h2, {id: 'usage', children: 'Usage'}),
            '\n',
            (0, i.jsxs)(r.p, {
              children: [
                'The ',
                (0, i.jsx)(r.code, {children: 'Occupation_Detail'}),
                " property can be used to display content that resonates with the visitor's detailed occupation, making your communication more relevant and effective.",
              ],
            }),
            '\n',
            (0, i.jsx)(r.h3, {id: 'example', children: 'Example'}),
            '\n',
            (0, i.jsx)(r.p, {
              children: (0, i.jsx)(r.strong, {children: 'Usage:'}),
            }),
            '\n',
            (0, i.jsx)(r.pre, {
              children: (0, i.jsx)(r.code, {
                className: 'language-html',
                children:
                  '{{#if (eq Occupation_Detail "Accountant")}}\n<p>\n  Welcome, Accountant! Check out our latest financial management\n  tools designed just for you.\n</p>\n<img src="/images/accountant_tools.jpg" alt="Accountant Tools" />\n{{else if (eq Occupation_Detail "Teacher")}}\n<p>\n  Hi, Teacher! Discover our educational resources and tools to\n  help you in the classroom.\n</p>\n<img\n  src="/images/teacher_resources.jpg"\n  alt="Teacher Resources" />\n{{else if (eq Occupation_Detail "Software Developer")}}\n<p>\n  Hello, Software Developer! Explore our advanced coding and\n  development tools.\n</p>\n<img src="/images/developer_tools.jpg" alt="Developer Tools" />\n{{else}}\n<p>\n  Welcome! Explore our range of products and services tailored to\n  various occupations.\n</p>\n<img src="/images/general_offers.jpg" alt="General Offers" />\n{{/if}}\n',
              }),
            }),
            '\n',
            (0, i.jsx)(r.p, {
              children:
                "In this example, various personalized messages and offers are displayed based on the visitor's detailed occupation, providing fresh ideas to enhance user engagement and conversions.",
            }),
            '\n',
            (0, i.jsx)(r.h2, {
              id: 'potential-values',
              children: 'Potential Values',
            }),
            '\n',
            (0, i.jsxs)(r.p, {
              children: [
                'The following table lists a selection of the potential values for the ',
                (0, i.jsx)(r.code, {children: 'Occupation_Detail'}),
                ' property:',
              ],
            }),
            '\n',
            (0, i.jsxs)(r.table, {
              children: [
                (0, i.jsx)(r.thead, {
                  children: (0, i.jsxs)(r.tr, {
                    children: [
                      (0, i.jsx)(r.th, {children: 'Value'}),
                      (0, i.jsx)(r.th, {children: 'Description'}),
                    ],
                  }),
                }),
                (0, i.jsxs)(r.tbody, {
                  children: [
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {
                            children: 'Accounting/Biller/Billing Clerk',
                          }),
                        }),
                        (0, i.jsx)(r.td, {
                          children: 'Detailed occupation for accounting',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {
                            children: 'Actor/Entertainer/Announcer',
                          }),
                        }),
                        (0, i.jsx)(r.td, {
                          children: 'Detailed occupation for entertainment',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {
                            children: 'Air Traffic Control',
                          }),
                        }),
                        (0, i.jsx)(r.td, {
                          children:
                            'Detailed occupation for air traffic control',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {children: 'Architect'}),
                        }),
                        (0, i.jsx)(r.td, {
                          children: 'Detailed occupation for architects',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {children: 'Artist'}),
                        }),
                        (0, i.jsx)(r.td, {
                          children: 'Detailed occupation for artists',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {children: 'Baker'}),
                        }),
                        (0, i.jsx)(r.td, {
                          children: 'Detailed occupation for bakers',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {
                            children: 'Banker/Loan Officer',
                          }),
                        }),
                        (0, i.jsx)(r.td, {
                          children: 'Detailed occupation for loan officers',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {
                            children: 'Barber/Hairstylist/Beautician',
                          }),
                        }),
                        (0, i.jsx)(r.td, {
                          children: 'Detailed occupation for beauticians',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {children: 'Bartender'}),
                        }),
                        (0, i.jsx)(r.td, {
                          children: 'Detailed occupation for bartenders',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {
                            children: 'Bookkeeper',
                          }),
                        }),
                        (0, i.jsx)(r.td, {
                          children: 'Detailed occupation for bookkeepers',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {
                            children: 'Broker/Stock/Trader',
                          }),
                        }),
                        (0, i.jsx)(r.td, {
                          children: 'Detailed occupation for stock traders',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {
                            children: 'Carpenter/Furniture/Woodworking',
                          }),
                        }),
                        (0, i.jsx)(r.td, {
                          children: 'Detailed occupation for carpenters',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {
                            children: 'Chef/Butler',
                          }),
                        }),
                        (0, i.jsx)(r.td, {
                          children: 'Detailed occupation for chefs',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {
                            children: 'Child Care/Day Care/Babysitter',
                          }),
                        }),
                        (0, i.jsx)(r.td, {
                          children: 'Detailed occupation for childcare',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {
                            children: 'Computer Programmer',
                          }),
                        }),
                        (0, i.jsx)(r.td, {
                          children: 'Detailed occupation for programmers',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {
                            children: 'Construction',
                          }),
                        }),
                        (0, i.jsx)(r.td, {
                          children: 'Detailed occupation for construction',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {
                            children: 'Cosmetologist',
                          }),
                        }),
                        (0, i.jsx)(r.td, {
                          children: 'Detailed occupation for cosmetologists',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {
                            children: 'Customer Service/Representative',
                          }),
                        }),
                        (0, i.jsx)(r.td, {
                          children: 'Detailed occupation for customer service',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {
                            children: 'Data Entry/Key Punch',
                          }),
                        }),
                        (0, i.jsx)(r.td, {
                          children: 'Detailed occupation for data entry',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {
                            children: 'Dental Assistant',
                          }),
                        }),
                        (0, i.jsx)(r.td, {
                          children: 'Detailed occupation for dental assistants',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {children: 'Designer'}),
                        }),
                        (0, i.jsx)(r.td, {
                          children: 'Detailed occupation for designers',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {children: 'Doctor'}),
                        }),
                        (0, i.jsx)(r.td, {
                          children: 'Detailed occupation for doctors',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {
                            children: 'Driver/Truck Driver',
                          }),
                        }),
                        (0, i.jsx)(r.td, {
                          children: 'Detailed occupation for truck drivers',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {
                            children: 'Electrician',
                          }),
                        }),
                        (0, i.jsx)(r.td, {
                          children: 'Detailed occupation for electricians',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {children: 'Engineer'}),
                        }),
                        (0, i.jsx)(r.td, {
                          children: 'Detailed occupation for engineers',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {
                            children: 'Farmer/Dairyman',
                          }),
                        }),
                        (0, i.jsx)(r.td, {
                          children: 'Detailed occupation for farmers',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {
                            children: 'Firefighter',
                          }),
                        }),
                        (0, i.jsx)(r.td, {
                          children: 'Detailed occupation for firefighters',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {
                            children: 'Gardener/Landscaper',
                          }),
                        }),
                        (0, i.jsx)(r.td, {
                          children: 'Detailed occupation for gardeners',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {
                            children: 'Health Care',
                          }),
                        }),
                        (0, i.jsx)(r.td, {
                          children:
                            'Detailed occupation for healthcare workers',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {children: 'Homemaker'}),
                        }),
                        (0, i.jsx)(r.td, {
                          children: 'Detailed occupation for homemakers',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {children: 'Janitor'}),
                        }),
                        (0, i.jsx)(r.td, {
                          children: 'Detailed occupation for janitors',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {
                            children: 'Journalist',
                          }),
                        }),
                        (0, i.jsx)(r.td, {
                          children: 'Detailed occupation for journalists',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {children: 'Laborer'}),
                        }),
                        (0, i.jsx)(r.td, {
                          children: 'Detailed occupation for laborers',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {children: 'Lawyer'}),
                        }),
                        (0, i.jsx)(r.td, {
                          children: 'Detailed occupation for lawyers',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {
                            children: 'Librarian/Archivist',
                          }),
                        }),
                        (0, i.jsx)(r.td, {
                          children: 'Detailed occupation for librarians',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {children: 'Machinist'}),
                        }),
                        (0, i.jsx)(r.td, {
                          children: 'Detailed occupation for machinists',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {children: 'Manager'}),
                        }),
                        (0, i.jsx)(r.td, {
                          children: 'Detailed occupation for managers',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {children: 'Mechanic'}),
                        }),
                        (0, i.jsx)(r.td, {
                          children: 'Detailed occupation for mechanics',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {children: 'Nurse'}),
                        }),
                        (0, i.jsx)(r.td, {
                          children: 'Detailed occupation for nurses',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {children: 'Painter'}),
                        }),
                        (0, i.jsx)(r.td, {
                          children: 'Detailed occupation for painters',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {
                            children: 'Pharmacist',
                          }),
                        }),
                        (0, i.jsx)(r.td, {
                          children: 'Detailed occupation for pharmacists',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {
                            children: 'Photographer',
                          }),
                        }),
                        (0, i.jsx)(r.td, {
                          children: 'Detailed occupation for photographers',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {children: 'Pilot'}),
                        }),
                        (0, i.jsx)(r.td, {
                          children: 'Detailed occupation for pilots',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {children: 'Plumber'}),
                        }),
                        (0, i.jsx)(r.td, {
                          children: 'Detailed occupation for plumbers',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {
                            children: 'Police/Trooper',
                          }),
                        }),
                        (0, i.jsx)(r.td, {
                          children: 'Detailed occupation for police',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {
                            children: 'Real Estate/Realtor',
                          }),
                        }),
                        (0, i.jsx)(r.td, {
                          children:
                            'Detailed occupation for real estate agents',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {
                            children: 'Receptionist',
                          }),
                        }),
                        (0, i.jsx)(r.td, {
                          children: 'Detailed occupation for receptionists',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {children: 'Sales'}),
                        }),
                        (0, i.jsx)(r.td, {
                          children: 'Detailed occupation for sales',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {children: 'Scientist'}),
                        }),
                        (0, i.jsx)(r.td, {
                          children: 'Detailed occupation for scientists',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {children: 'Secretary'}),
                        }),
                        (0, i.jsx)(r.td, {
                          children: 'Detailed occupation for secretaries',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {
                            children: 'Software Developer',
                          }),
                        }),
                        (0, i.jsx)(r.td, {
                          children:
                            'Detailed occupation for software developers',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {children: 'Student'}),
                        }),
                        (0, i.jsx)(r.td, {
                          children: 'Detailed occupation for students',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {children: 'Teacher'}),
                        }),
                        (0, i.jsx)(r.td, {
                          children: 'Detailed occupation for teachers',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {
                            children: 'Technician',
                          }),
                        }),
                        (0, i.jsx)(r.td, {
                          children: 'Detailed occupation for technicians',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {
                            children: 'Truck Driver',
                          }),
                        }),
                        (0, i.jsx)(r.td, {
                          children: 'Detailed occupation for truck drivers',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {
                            children: 'Waiter/Waitress',
                          }),
                        }),
                        (0, i.jsx)(r.td, {
                          children: 'Detailed occupation for waiters',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {children: 'Welder'}),
                        }),
                        (0, i.jsx)(r.td, {
                          children: 'Detailed occupation for welders',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {children: 'Writer'}),
                        }),
                        (0, i.jsx)(r.td, {
                          children: 'Detailed occupation for writers',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, i.jsx)(r.h2, {id: 'conclusion', children: 'Conclusion'}),
            '\n',
            (0, i.jsxs)(r.p, {
              children: [
                'Using the ',
                (0, i.jsx)(r.code, {children: 'Occupation_Detail'}),
                " property allows you to personalize your landing pages based on the visitor's detailed occupation. By leveraging this property, you can deliver content that resonates with different occupations, enhancing user engagement and effectiveness.",
              ],
            }),
            '\n',
            (0, i.jsx)(r.h2, {id: 'next-steps', children: 'Next Steps'}),
            '\n',
            (0, i.jsx)(r.p, {children: 'Explore more features:'}),
            '\n',
            (0, i.jsxs)(r.ul, {
              children: [
                '\n',
                (0, i.jsx)(r.li, {
                  children: (0, i.jsx)(r.a, {
                    href: '/docs/personalization/hero-string-number-functions',
                    children: 'String and Number Functions',
                  }),
                }),
                '\n',
                (0, i.jsx)(r.li, {
                  children: (0, i.jsx)(r.a, {
                    href: '/docs/personalization/hero-conditional-helpers',
                    children: 'Conditional Helpers',
                  }),
                }),
                '\n',
                (0, i.jsx)(r.li, {
                  children: (0, i.jsx)(r.a, {
                    href: '/docs/personalization/hero-advanced-techniques',
                    children: 'Advanced Templating Techniques',
                  }),
                }),
                '\n',
              ],
            }),
          ],
        });
      }
      function h(e = {}) {
        const {wrapper: r} = {...(0, n.R)(), ...e.components};
        return r
          ? (0, i.jsx)(r, {...e, children: (0, i.jsx)(a, {...e})})
          : a(e);
      }
    },
    3023: (e, r, t) => {
      t.d(r, {R: () => d, x: () => s});
      var i = t(3696);
      const n = {},
        c = i.createContext(n);
      function d(e) {
        const r = i.useContext(c);
        return i.useMemo(
          function () {
            return 'function' == typeof e ? e(r) : {...r, ...e};
          },
          [r, e]
        );
      }
      function s(e) {
        let r;
        return (
          (r = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(n)
              : e.components || n
            : d(e.components)),
          i.createElement(c.Provider, {value: r}, e.children)
        );
      }
    },
  },
]);

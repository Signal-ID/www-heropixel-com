/*! For license information please see 8b6f54a6.99fa3166.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [8411],
  {
    2192: (e, n, t) => {
      var i = t(3696),
        r = Symbol.for('react.element'),
        o = Symbol.for('react.fragment'),
        s = Object.prototype.hasOwnProperty,
        l =
          i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        a = {key: !0, ref: !0, __self: !0, __source: !0};
      function c(e, n, t) {
        var i,
          o = {},
          c = null,
          d = null;
        for (i in (void 0 !== t && (c = '' + t),
        void 0 !== n.key && (c = '' + n.key),
        void 0 !== n.ref && (d = n.ref),
        n))
          s.call(n, i) && !a.hasOwnProperty(i) && (o[i] = n[i]);
        if (e && e.defaultProps)
          for (i in (n = e.defaultProps)) void 0 === o[i] && (o[i] = n[i]);
        return {
          $$typeof: r,
          type: e,
          key: c,
          ref: d,
          props: o,
          _owner: l.current,
        };
      }
      (n.Fragment = o), (n.jsx = c), (n.jsxs = c);
    },
    2540: (e, n, t) => {
      e.exports = t(2192);
    },
    6182: (e, n, t) => {
      t.r(n),
        t.d(n, {
          assets: () => a,
          contentTitle: () => s,
          default: () => p,
          frontMatter: () => o,
          metadata: () => l,
          toc: () => c,
        });
      var i = t(2540),
        r = t(3023);
      const o = {
          id: 'optin-forms',
          title: 'Intelligent Optin Forms',
          description:
            'How our optin forms increase conversion rates through data enrichment.',
        },
        s = 'Intelligent Optin Forms',
        l = {
          id: 'leadcapture/optin-forms',
          title: 'Intelligent Optin Forms',
          description:
            'How our optin forms increase conversion rates through data enrichment.',
          source:
            '@site/versioned_docs/version-0.0.1/leadcapture/optin-forms.md',
          sourceDirName: 'leadcapture',
          slug: '/leadcapture/optin-forms',
          permalink: '/docs/leadcapture/optin-forms',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1727314913e3,
          frontMatter: {
            id: 'optin-forms',
            title: 'Intelligent Optin Forms',
            description:
              'How our optin forms increase conversion rates through data enrichment.',
          },
          sidebar: 'leadcapture',
          previous: {
            title: 'Enrichment Overview',
            permalink: '/docs/leadcapture/overview',
          },
          next: {
            title: 'Sales Qualifying Optin Form',
            permalink: '/docs/leadcapture/sales-qualifying-optin',
          },
        },
        a = {},
        c = [
          {
            value:
              'Maximizing Conversions with Prefilled, Enriched Optin Forms',
            id: 'maximizing-conversions-with-prefilled-enriched-optin-forms',
            level: 2,
          },
          {value: 'Key Benefits:', id: 'key-benefits', level: 3},
          {value: 'How to Install', id: 'how-to-install', level: 3},
        ];
      function d(e) {
        const n = {
          code: 'code',
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          li: 'li',
          ol: 'ol',
          p: 'p',
          pre: 'pre',
          strong: 'strong',
          ul: 'ul',
          ...(0, r.R)(),
          ...e.components,
        };
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(n.h1, {
              id: 'intelligent-optin-forms',
              children: 'Intelligent Optin Forms',
            }),
            '\n',
            (0, i.jsx)(n.h2, {
              id: 'maximizing-conversions-with-prefilled-enriched-optin-forms',
              children:
                'Maximizing Conversions with Prefilled, Enriched Optin Forms',
            }),
            '\n',
            (0, i.jsx)(n.p, {
              children:
                'Our standard optin forms, similar to Clearbit forms, are designed to prefill enriched data for users, increasing optin rates and simplifying the user experience. This approach allows you to gather more information while lowering the barriers for users, as they do not need to complete the entire form for us to collect additional data and enrich the lead profile.',
            }),
            '\n',
            (0, i.jsx)(n.h3, {id: 'key-benefits', children: 'Key Benefits:'}),
            '\n',
            (0, i.jsxs)(n.ul, {
              children: [
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    (0, i.jsx)(n.strong, {
                      children: 'Increased Conversion Rates',
                    }),
                    ': Case studies have shown a significant increase in conversion rates when forms are prefilled with enriched data. Users are more likely to opt-in when the effort required is minimized.',
                  ],
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    (0, i.jsx)(n.strong, {
                      children: 'Personalized User Experience',
                    }),
                    ': By pre-enriching the form fields, users are presented with a personalized experience, making them more inclined to engage with your brand.',
                  ],
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    (0, i.jsx)(n.strong, {children: 'No Completion Required'}),
                    ": Even if a user doesn't complete the form, our system can still collect and enrich the necessary data, ensuring you never miss out on valuable leads.",
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(n.h3, {
              id: 'how-to-install',
              children: 'How to Install',
            }),
            '\n',
            (0, i.jsx)(n.p, {
              children:
                'Installing our optin form is a simple process that requires minimal setup. Once implemented on your page, it will automatically begin collecting enriched optins, providing you with more detailed lead profiles right from the start. Get started today and see how easy it is to boost your conversion rates with personalized, enriched optin forms.',
            }),
            '\n',
            (0, i.jsx)(n.p, {
              children:
                'To install our intelligent optin form on your website, follow these simple steps:',
            }),
            '\n',
            (0, i.jsxs)(n.ol, {
              children: [
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, i.jsxs)(n.p, {
                      children: [
                        (0, i.jsx)(n.strong, {
                          children:
                            'Include the following script in the header of your page',
                        }),
                        ':',
                      ],
                    }),
                    '\n',
                    (0, i.jsx)(n.pre, {
                      children: (0, i.jsx)(n.code, {
                        className: 'language-html',
                        children:
                          "<script>\n  (function () {\n    var d = document,\n      g = d.createElement('script'),\n      s = d.getElementsByTagName('script')[0];\n    g.async = true;\n    g.src = 'https://app.heropixel.com/' + 'pixel/script.js';\n    s.parentNode.insertBefore(g, s);\n  })();\n</script>\n",
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, i.jsxs)(n.p, {
                      children: [
                        (0, i.jsx)(n.strong, {
                          children:
                            'Place this custom element anywhere you want the optin form to display',
                        }),
                        ':',
                      ],
                    }),
                    '\n',
                    (0, i.jsx)(n.pre, {
                      children: (0, i.jsx)(n.code, {
                        className: 'language-html',
                        children:
                          '<opt-in-form\n  headline="You Qualify for Access to a Free LIVE Training! Submit your mobile # to get access to it..."\n  tcpa-text="I consent to receive SMS alerts and marketing. Msg freq varies. Msg & data rates may apply. Reply STOP to opt-out. By providing your number, you agree to our Privacy Policy."\n  website-id="{{ your pixel id }}">\n</opt-in-form>\n<script src="https://app.heropixel.com/forms/optin.js"></script>\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(n.p, {
              children:
                'Customize the headline and tcpa notice to your business, or exclude the headline to manage it outside of the optin form.',
            }),
          ],
        });
      }
      function p(e = {}) {
        const {wrapper: n} = {...(0, r.R)(), ...e.components};
        return n
          ? (0, i.jsx)(n, {...e, children: (0, i.jsx)(d, {...e})})
          : d(e);
      }
    },
    3023: (e, n, t) => {
      t.d(n, {R: () => s, x: () => l});
      var i = t(3696);
      const r = {},
        o = i.createContext(r);
      function s(e) {
        const n = i.useContext(o);
        return i.useMemo(
          function () {
            return 'function' == typeof e ? e(n) : {...n, ...e};
          },
          [n, e]
        );
      }
      function l(e) {
        let n;
        return (
          (n = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(r)
              : e.components || r
            : s(e.components)),
          i.createElement(o.Provider, {value: n}, e.children)
        );
      }
    },
  },
]);
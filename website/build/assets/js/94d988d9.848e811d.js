/*! For license information please see 94d988d9.848e811d.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [5072],
  {
    2192: (e, n, i) => {
      var t = i(3696),
        a = Symbol.for('react.element'),
        o = Symbol.for('react.fragment'),
        s = Object.prototype.hasOwnProperty,
        r =
          t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        l = {key: !0, ref: !0, __self: !0, __source: !0};
      function c(e, n, i) {
        var t,
          o = {},
          c = null,
          d = null;
        for (t in (void 0 !== i && (c = '' + i),
        void 0 !== n.key && (c = '' + n.key),
        void 0 !== n.ref && (d = n.ref),
        n))
          s.call(n, t) && !l.hasOwnProperty(t) && (o[t] = n[t]);
        if (e && e.defaultProps)
          for (t in (n = e.defaultProps)) void 0 === o[t] && (o[t] = n[t]);
        return {
          $$typeof: a,
          type: e,
          key: c,
          ref: d,
          props: o,
          _owner: r.current,
        };
      }
      (n.Fragment = o), (n.jsx = c), (n.jsxs = c);
    },
    2540: (e, n, i) => {
      e.exports = i(2192);
    },
    1956: (e, n, i) => {
      i.r(n),
        i.d(n, {
          assets: () => l,
          contentTitle: () => s,
          default: () => p,
          frontMatter: () => o,
          metadata: () => r,
          toc: () => c,
        });
      var t = i(2540),
        a = i(3023);
      const o = {
          id: 'activate-personalization',
          title: 'Activate Personalization',
          description: 'How to enable personalization on your landing pages',
        },
        s = 'Activating Personalization on Your Landing Pages',
        r = {
          id: 'personalization/activate-personalization',
          title: 'Activate Personalization',
          description: 'How to enable personalization on your landing pages',
          source:
            '@site/versioned_docs/version-0.0.1/personalization/activation.md',
          sourceDirName: 'personalization',
          slug: '/personalization/activate-personalization',
          permalink: '/docs/personalization/activate-personalization',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1723080994e3,
          frontMatter: {
            id: 'activate-personalization',
            title: 'Activate Personalization',
            description: 'How to enable personalization on your landing pages',
          },
          sidebar: 'personalization',
          previous: {
            title: 'Personalize Your Landing Pages',
            permalink: '/docs/personalization/personalized-landing-pages',
          },
          next: {
            title: 'Visitor Attributes',
            permalink: '/docs/personalization/visitor-attributes',
          },
        },
        l = {},
        c = [
          {value: 'Introduction', id: 'introduction', level: 2},
          {value: 'Prerequisites', id: 'prerequisites', level: 2},
          {
            value: 'Steps to Activate Personalization',
            id: 'steps-to-activate-personalization',
            level: 2,
          },
          {
            value: 'Step 1: Modify the Tracking Code',
            id: 'step-1-modify-the-tracking-code',
            level: 3,
          },
          {
            value: 'Step 2: Use Dynamic Text in Your Sales Copy',
            id: 'step-2-use-dynamic-text-in-your-sales-copy',
            level: 3,
          },
          {
            value: 'Step 3: Add Fallback Values',
            id: 'step-3-add-fallback-values',
            level: 3,
          },
          {value: 'How It Works', id: 'how-it-works', level: 2},
          {value: 'Next Steps', id: 'next-steps', level: 2},
        ];
      function d(e) {
        const n = {
          a: 'a',
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
          ...(0, a.R)(),
          ...e.components,
        };
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(n.h1, {
              id: 'activating-personalization-on-your-landing-pages',
              children: 'Activating Personalization on Your Landing Pages',
            }),
            '\n',
            (0, t.jsx)(n.h2, {id: 'introduction', children: 'Introduction'}),
            '\n',
            (0, t.jsx)(n.p, {
              children:
                'This guide will help you activate personalization on your pixel and show you how to display custom visitor information.',
            }),
            '\n',
            (0, t.jsx)(n.h2, {id: 'prerequisites', children: 'Prerequisites'}),
            '\n',
            (0, t.jsx)(n.p, {
              children:
                'Ensure you have already placed the analytics tracking code on your website. Here\u2019s the basic tracking code:',
            }),
            '\n',
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, {
                className: 'language-html',
                children:
                  "\x3c!-- Analytics Tracker --\x3e\n<script>\n  (function () {\n    var d = document,\n      g = d.createElement('script'),\n      s = d.getElementsByTagName('script')[0];\n    g.async = true;\n    g.src = '{!! $baseUrl !!}' + '{!! $scriptPath !!}';\n    s.parentNode.insertBefore(g, s);\n  })();\n</script>\n<script>\n  window.analyticsLayer = window.analyticsLayer || [];\n  window.analyticsLayer.push({\n    event: 'pageview',\n    websiteId: '$siteId',\n  });\n</script>\n\x3c!-- End Analytics Tracker Code --\x3e\n",
              }),
            }),
            '\n',
            (0, t.jsx)(n.h2, {
              id: 'steps-to-activate-personalization',
              children: 'Steps to Activate Personalization',
            }),
            '\n',
            (0, t.jsx)(n.p, {
              children:
                'To enable personalization, you only need to add one line to your existing tracking code.',
            }),
            '\n',
            (0, t.jsx)(n.h3, {
              id: 'step-1-modify-the-tracking-code',
              children: 'Step 1: Modify the Tracking Code',
            }),
            '\n',
            (0, t.jsxs)(n.p, {
              children: [
                'Add the ',
                (0, t.jsx)(n.code, {children: 'personalize: true'}),
                ' line to your ',
                (0, t.jsx)(n.code, {children: 'analyticsLayer'}),
                ' push command. Here\u2019s the updated tracking code: ',
                (0, t.jsx)(n.code, {children: 'personalize: true'}),
                ". Here's how you would activate personalization:",
              ],
            }),
            '\n',
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, {
                className: 'language-html',
                children:
                  "\x3c!-- Analytics Tracker --\x3e\n<script>\n  (function () {\n    var d = document,\n      g = d.createElement('script'),\n      s = d.getElementsByTagName('script')[0];\n    g.async = true;\n    g.src = '{!! $baseUrl !!}' + '{!! $scriptPath !!}';\n    s.parentNode.insertBefore(g, s);\n  })();\n</script>\n<script>\n  window.analyticsLayer = window.analyticsLayer || [];\n  window.analyticsLayer.push({\n    event: 'pageview',\n    websiteId: '$siteId',\n    personalize: true,\n  });\n</script>\n\x3c!-- End Analytics Tracker Code --\x3e\n",
              }),
            }),
            '\n',
            (0, t.jsx)(n.p, {
              children:
                "Now you won't see anything change on your website if you don't already have Dynamic Text in place.",
            }),
            '\n',
            (0, t.jsx)(n.h3, {
              id: 'step-2-use-dynamic-text-in-your-sales-copy',
              children: 'Step 2: Use Dynamic Text in Your Sales Copy',
            }),
            '\n',
            (0, t.jsx)(n.p, {
              children:
                'To begin personalization, you will use Dynamic Text placeholders in your sales copy. For example:',
            }),
            '\n',
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, {
                className: 'language-html',
                children:
                  '<p>Welcome to our website! Your city is {{city}}.</p>\n',
              }),
            }),
            '\n',
            (0, t.jsx)(n.h3, {
              id: 'step-3-add-fallback-values',
              children: 'Step 3: Add Fallback Values',
            }),
            '\n',
            (0, t.jsxs)(n.p, {
              children: [
                'If the visitor\u2019s city is not available, you can specify a default value using the ',
                (0, t.jsx)(n.code, {children: 'default'}),
                ' helper:',
              ],
            }),
            '\n',
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, {
                className: 'language-html',
                children:
                  '<p>\n  Welcome to our website! Your city is {{default city "Orlando"}}.\n</p>\n',
              }),
            }),
            '\n',
            (0, t.jsx)(n.p, {
              children:
                "In case we don't know the variable you're wanting to use we will fallback to Orlando in this case. This helps provide a consistent experience for visitors who we don't identify.",
            }),
            '\n',
            (0, t.jsx)(n.h2, {id: 'how-it-works', children: 'How It Works'}),
            '\n',
            (0, t.jsxs)(n.ol, {
              children: [
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, {children: 'Initial Setup'}),
                    ': The tracking code with ',
                    (0, t.jsx)(n.code, {children: 'personalize: true'}),
                    ' is added to your website. This enables the personalization feature.',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, {children: 'Waiting for Enrichment'}),
                    ": A listener is set up to wait for the visitor's information to be enriched. During this time, any dynamic text placeholders will fallback to the default values you have specified.",
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, {children: 'Dynamic Text Update'}),
                    ': Within seconds of the visitor arriving on the page, the pixel will receive their information and update the dynamic text accordingly.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, t.jsx)(n.h2, {id: 'next-steps', children: 'Next Steps'}),
            '\n',
            (0, t.jsx)(n.p, {
              children:
                'Explore more about dynamic text and personalization features:',
            }),
            '\n',
            (0, t.jsxs)(n.ul, {
              children: [
                '\n',
                (0, t.jsx)(n.li, {
                  children: (0, t.jsx)(n.a, {
                    href: '/docs/personalization/visitor-attributes',
                    children:
                      'View all of the data you can use in your personalization',
                  }),
                }),
                '\n',
              ],
            }),
          ],
        });
      }
      function p(e = {}) {
        const {wrapper: n} = {...(0, a.R)(), ...e.components};
        return n
          ? (0, t.jsx)(n, {...e, children: (0, t.jsx)(d, {...e})})
          : d(e);
      }
    },
    3023: (e, n, i) => {
      i.d(n, {R: () => s, x: () => r});
      var t = i(3696);
      const a = {},
        o = t.createContext(a);
      function s(e) {
        const n = t.useContext(o);
        return t.useMemo(
          function () {
            return 'function' == typeof e ? e(n) : {...n, ...e};
          },
          [n, e]
        );
      }
      function r(e) {
        let n;
        return (
          (n = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(a)
              : e.components || a
            : s(e.components)),
          t.createElement(o.Provider, {value: n}, e.children)
        );
      }
    },
  },
]);

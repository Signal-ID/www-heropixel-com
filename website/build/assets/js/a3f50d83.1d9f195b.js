/*! For license information please see a3f50d83.1d9f195b.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [9171],
  {
    2192: (e, n, s) => {
      var i = s(3696),
        l = Symbol.for('react.element'),
        r = Symbol.for('react.fragment'),
        o = Object.prototype.hasOwnProperty,
        c =
          i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        d = {key: !0, ref: !0, __self: !0, __source: !0};
      function t(e, n, s) {
        var i,
          r = {},
          t = null,
          a = null;
        for (i in (void 0 !== s && (t = '' + s),
        void 0 !== n.key && (t = '' + n.key),
        void 0 !== n.ref && (a = n.ref),
        n))
          o.call(n, i) && !d.hasOwnProperty(i) && (r[i] = n[i]);
        if (e && e.defaultProps)
          for (i in (n = e.defaultProps)) void 0 === r[i] && (r[i] = n[i]);
        return {
          $$typeof: l,
          type: e,
          key: t,
          ref: a,
          props: r,
          _owner: c.current,
        };
      }
      (n.Fragment = r), (n.jsx = t), (n.jsxs = t);
    },
    2540: (e, n, s) => {
      e.exports = s(2192);
    },
    6728: (e, n, s) => {
      s.r(n),
        s.d(n, {
          assets: () => d,
          contentTitle: () => o,
          default: () => h,
          frontMatter: () => r,
          metadata: () => c,
          toc: () => t,
        });
      var i = s(2540),
        l = s(3023);
      const r = {
          id: 'hero-conditional-helpers',
          title: 'Conditional Helpers',
          description:
            'Guide to using conditional helpers in Hero Dynamic Text',
        },
        o = 'Conditional Helpers',
        c = {
          id: 'destinations/properties/hero-conditional-helpers',
          title: 'Conditional Helpers',
          description:
            'Guide to using conditional helpers in Hero Dynamic Text',
          source:
            '@site/versioned_docs/version-0.0.1/destinations/properties/hero-conditional-helpers.md',
          sourceDirName: 'destinations/properties',
          slug: '/destinations/properties/hero-conditional-helpers',
          permalink: '/docs/destinations/properties/hero-conditional-helpers',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          frontMatter: {
            id: 'hero-conditional-helpers',
            title: 'Conditional Helpers',
            description:
              'Guide to using conditional helpers in Hero Dynamic Text',
          },
        },
        d = {},
        t = [
          {value: 'Introduction', id: 'introduction', level: 2},
          {value: 'Conditional Helpers', id: 'conditional-helpers-1', level: 2},
          {value: '<code>if</code>', id: 'if', level: 3},
          {value: '<code>unless</code>', id: 'unless', level: 3},
          {value: '<code>else</code>', id: 'else', level: 3},
          {value: '<code>with</code>', id: 'with', level: 3},
          {value: '<code>each</code>', id: 'each', level: 3},
          {
            value: '<code>#if</code> with Comparisons',
            id: 'if-with-comparisons',
            level: 3,
          },
          {value: '<code>eq</code> (equal)', id: 'eq-equal', level: 4},
          {value: '<code>ne</code> (not equal)', id: 'ne-not-equal', level: 4},
          {
            value: '<code>gt</code> (greater than)',
            id: 'gt-greater-than',
            level: 4,
          },
          {value: '<code>lt</code> (less than)', id: 'lt-less-than', level: 4},
          {
            value: '<code>gte</code> (greater than or equal to)',
            id: 'gte-greater-than-or-equal-to',
            level: 4,
          },
          {
            value: '<code>lte</code> (less than or equal to)',
            id: 'lte-less-than-or-equal-to',
            level: 4,
          },
          {value: 'Conclusion', id: 'conclusion', level: 2},
          {value: 'Next Steps', id: 'next-steps', level: 2},
        ];
      function a(e) {
        const n = {
          a: 'a',
          code: 'code',
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          h4: 'h4',
          li: 'li',
          p: 'p',
          pre: 'pre',
          strong: 'strong',
          ul: 'ul',
          ...(0, l.R)(),
          ...e.components,
        };
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(n.h1, {
              id: 'conditional-helpers',
              children: 'Conditional Helpers',
            }),
            '\n',
            (0, i.jsx)(n.h2, {id: 'introduction', children: 'Introduction'}),
            '\n',
            (0, i.jsx)(n.p, {
              children:
                'Hero Dynamic Text provides a range of helpers to manage conditional logic within your templates. This guide covers the most commonly used conditional helpers to help you create dynamic and personalized content.',
            }),
            '\n',
            (0, i.jsx)(n.h2, {
              id: 'conditional-helpers-1',
              children: 'Conditional Helpers',
            }),
            '\n',
            (0, i.jsx)(n.h3, {
              id: 'if',
              children: (0, i.jsx)(n.code, {children: 'if'}),
            }),
            '\n',
            (0, i.jsxs)(n.p, {
              children: [
                'The ',
                (0, i.jsx)(n.code, {children: 'if'}),
                ' helper evaluates a condition and renders a block of code if the condition is true.',
              ],
            }),
            '\n',
            (0, i.jsx)(n.p, {
              children: (0, i.jsx)(n.strong, {children: 'Usage:'}),
            }),
            '\n',
            (0, i.jsx)(n.pre, {
              children: (0, i.jsx)(n.code, {
                className: 'language-html',
                children:
                  '{{#if condition}}\n\x3c!-- Content to display if condition is true --\x3e\n{{/if}}\n',
              }),
            }),
            '\n',
            (0, i.jsx)(n.p, {
              children: (0, i.jsx)(n.strong, {children: 'Example:'}),
            }),
            '\n',
            (0, i.jsx)(n.pre, {
              children: (0, i.jsx)(n.code, {
                className: 'language-html',
                children:
                  '{{#if amex_card}}\n<p>Exclusive offer for American Express cardholders!</p>\n{{/if}}\n',
              }),
            }),
            '\n',
            (0, i.jsxs)(n.p, {
              children: [
                'If ',
                (0, i.jsx)(n.code, {children: 'amex_card'}),
                ' is true, the message "Exclusive offer for American Express cardholders!" will be displayed.',
              ],
            }),
            '\n',
            (0, i.jsx)(n.h3, {
              id: 'unless',
              children: (0, i.jsx)(n.code, {children: 'unless'}),
            }),
            '\n',
            (0, i.jsxs)(n.p, {
              children: [
                'The ',
                (0, i.jsx)(n.code, {children: 'unless'}),
                ' helper is the inverse of ',
                (0, i.jsx)(n.code, {children: 'if'}),
                '. It renders a block of code if the condition is false.',
              ],
            }),
            '\n',
            (0, i.jsx)(n.p, {
              children: (0, i.jsx)(n.strong, {children: 'Usage:'}),
            }),
            '\n',
            (0, i.jsx)(n.pre, {
              children: (0, i.jsx)(n.code, {
                className: 'language-html',
                children:
                  '{{#unless home_owner}}\n<p>Check out our great deals for renters!</p>\n{{/unless}}\n',
              }),
            }),
            '\n',
            (0, i.jsxs)(n.p, {
              children: [
                'If ',
                (0, i.jsx)(n.code, {children: 'home_owner'}),
                ' is false, the message "Check out our great deals for renters!" will be displayed.',
              ],
            }),
            '\n',
            (0, i.jsx)(n.h3, {
              id: 'else',
              children: (0, i.jsx)(n.code, {children: 'else'}),
            }),
            '\n',
            (0, i.jsxs)(n.p, {
              children: [
                'The ',
                (0, i.jsx)(n.code, {children: 'else'}),
                ' helper is used in conjunction with ',
                (0, i.jsx)(n.code, {children: 'if'}),
                ' and ',
                (0, i.jsx)(n.code, {children: 'unless'}),
                ' to define an alternative block of code to render when the condition is false.',
              ],
            }),
            '\n',
            (0, i.jsx)(n.p, {
              children: (0, i.jsx)(n.strong, {children: 'Usage:'}),
            }),
            '\n',
            (0, i.jsx)(n.pre, {
              children: (0, i.jsx)(n.code, {
                className: 'language-html',
                children:
                  '{{#if condition}}\n\x3c!-- Content to display if condition is true --\x3e\n{{else}}\n\x3c!-- Content to display if condition is false --\x3e\n{{/if}}\n',
              }),
            }),
            '\n',
            (0, i.jsx)(n.p, {
              children: (0, i.jsx)(n.strong, {children: 'Example:'}),
            }),
            '\n',
            (0, i.jsx)(n.pre, {
              children: (0, i.jsx)(n.code, {
                className: 'language-html',
                children:
                  '{{#if home_owner}}\n<p>Thank you for being a homeowner! Enjoy exclusive benefits.</p>\n{{else}}\n<p>Check out our great deals for renters!</p>\n{{/if}}\n',
              }),
            }),
            '\n',
            (0, i.jsxs)(n.p, {
              children: [
                'If ',
                (0, i.jsx)(n.code, {children: 'home_owner'}),
                ' is true, the message "Thank you for being a homeowner! Enjoy exclusive benefits." will be displayed. Otherwise, "Check out our great deals for renters!" will be shown.',
              ],
            }),
            '\n',
            (0, i.jsx)(n.h3, {
              id: 'with',
              children: (0, i.jsx)(n.code, {children: 'with'}),
            }),
            '\n',
            (0, i.jsxs)(n.p, {
              children: [
                'The ',
                (0, i.jsx)(n.code, {children: 'with'}),
                ' helper changes the context within a block of code to a specified object.',
              ],
            }),
            '\n',
            (0, i.jsx)(n.p, {
              children: (0, i.jsx)(n.strong, {children: 'Usage:'}),
            }),
            '\n',
            (0, i.jsx)(n.pre, {
              children: (0, i.jsx)(n.code, {
                className: 'language-html',
                children:
                  '{{#with object}}\n\x3c!-- Content to display with object as the context --\x3e\n{{/with}}\n',
              }),
            }),
            '\n',
            (0, i.jsx)(n.p, {
              children: (0, i.jsx)(n.strong, {children: 'Example:'}),
            }),
            '\n',
            (0, i.jsx)(n.pre, {
              children: (0, i.jsx)(n.code, {
                className: 'language-html',
                children:
                  '{{#with address}}\n<p>Street: {{street}}</p>\n<p>City: {{city}}</p>\n<p>ZIP: {{zip}}</p>\n{{/with}}\n',
              }),
            }),
            '\n',
            (0, i.jsxs)(n.p, {
              children: [
                'Assuming ',
                (0, i.jsx)(n.code, {children: 'address'}),
                ' is an object with properties ',
                (0, i.jsx)(n.code, {children: 'street'}),
                ', ',
                (0, i.jsx)(n.code, {children: 'city'}),
                ', and ',
                (0, i.jsx)(n.code, {children: 'zip'}),
                ', this will display the address details.',
              ],
            }),
            '\n',
            (0, i.jsx)(n.h3, {
              id: 'each',
              children: (0, i.jsx)(n.code, {children: 'each'}),
            }),
            '\n',
            (0, i.jsxs)(n.p, {
              children: [
                'The ',
                (0, i.jsx)(n.code, {children: 'each'}),
                ' helper iterates over a list or array, rendering a block of code for each item.',
              ],
            }),
            '\n',
            (0, i.jsx)(n.p, {
              children: (0, i.jsx)(n.strong, {children: 'Usage:'}),
            }),
            '\n',
            (0, i.jsx)(n.pre, {
              children: (0, i.jsx)(n.code, {
                className: 'language-html',
                children:
                  '{{#each array}}\n\x3c!-- Content to display for each item in the array --\x3e\n{{/each}}\n',
              }),
            }),
            '\n',
            (0, i.jsx)(n.p, {
              children: (0, i.jsx)(n.strong, {children: 'Example:'}),
            }),
            '\n',
            (0, i.jsx)(n.pre, {
              children: (0, i.jsx)(n.code, {
                className: 'language-html',
                children:
                  '<ul>\n  {{#each hobbies}}\n  <li>{{this}}</li>\n  {{/each}}\n</ul>\n',
              }),
            }),
            '\n',
            (0, i.jsxs)(n.p, {
              children: [
                'If ',
                (0, i.jsx)(n.code, {children: 'hobbies'}),
                ' is an array of values, this will render each hobby as a list element.',
              ],
            }),
            '\n',
            (0, i.jsxs)(n.h3, {
              id: 'if-with-comparisons',
              children: [
                (0, i.jsx)(n.code, {children: '#if'}),
                ' with Comparisons',
              ],
            }),
            '\n',
            (0, i.jsxs)(n.p, {
              children: [
                'Hero Dynamic Text supports comparisons directly within the ',
                (0, i.jsx)(n.code, {children: 'if'}),
                ' helper. You can use custom comparison helpers for greater flexibility.',
              ],
            }),
            '\n',
            (0, i.jsxs)(n.h4, {
              id: 'eq-equal',
              children: [(0, i.jsx)(n.code, {children: 'eq'}), ' (equal)'],
            }),
            '\n',
            (0, i.jsx)(n.p, {
              children: (0, i.jsx)(n.strong, {children: 'Usage:'}),
            }),
            '\n',
            (0, i.jsx)(n.pre, {
              children: (0, i.jsx)(n.code, {
                className: 'language-html',
                children:
                  '{{#if (eq value1 value2)}}\n\x3c!-- Content to display if value1 equals value2 --\x3e\n{{/if}}\n',
              }),
            }),
            '\n',
            (0, i.jsx)(n.p, {
              children: (0, i.jsx)(n.strong, {children: 'Example:'}),
            }),
            '\n',
            (0, i.jsx)(n.pre, {
              children: (0, i.jsx)(n.code, {
                className: 'language-html',
                children:
                  '{{#if (eq gender "m")}}\n<p>Welcome, sir!</p>\n{{/if}}\n',
              }),
            }),
            '\n',
            (0, i.jsxs)(n.p, {
              children: [
                'If ',
                (0, i.jsx)(n.code, {children: 'gender'}),
                ' is "m", the message "Welcome, sir!" will be displayed.',
              ],
            }),
            '\n',
            (0, i.jsxs)(n.h4, {
              id: 'ne-not-equal',
              children: [(0, i.jsx)(n.code, {children: 'ne'}), ' (not equal)'],
            }),
            '\n',
            (0, i.jsx)(n.p, {
              children: (0, i.jsx)(n.strong, {children: 'Usage:'}),
            }),
            '\n',
            (0, i.jsx)(n.pre, {
              children: (0, i.jsx)(n.code, {
                className: 'language-html',
                children:
                  '{{#if (ne value1 value2)}}\n\x3c!-- Content to display if value1 does not equal value2 --\x3e\n{{/if}}\n',
              }),
            }),
            '\n',
            (0, i.jsx)(n.p, {
              children: (0, i.jsx)(n.strong, {children: 'Example:'}),
            }),
            '\n',
            (0, i.jsx)(n.pre, {
              children: (0, i.jsx)(n.code, {
                className: 'language-html',
                children:
                  '{{#if (ne marital_status "single")}}\n<p>Discover family-friendly offers!</p>\n{{/if}}\n',
              }),
            }),
            '\n',
            (0, i.jsxs)(n.p, {
              children: [
                'If ',
                (0, i.jsx)(n.code, {children: 'marital_status'}),
                ' is not "single", the message "Discover family-friendly offers!" will be displayed.',
              ],
            }),
            '\n',
            (0, i.jsxs)(n.h4, {
              id: 'gt-greater-than',
              children: [
                (0, i.jsx)(n.code, {children: 'gt'}),
                ' (greater than)',
              ],
            }),
            '\n',
            (0, i.jsx)(n.p, {
              children: (0, i.jsx)(n.strong, {children: 'Usage:'}),
            }),
            '\n',
            (0, i.jsx)(n.pre, {
              children: (0, i.jsx)(n.code, {
                className: 'language-html',
                children:
                  '{{#if (gt income_hh 100000)}}\n<p>Exclusive luxury products for high-income households!</p>\n{{/if}}\n',
              }),
            }),
            '\n',
            (0, i.jsx)(n.p, {
              children: (0, i.jsx)(n.strong, {children: 'Example:'}),
            }),
            '\n',
            (0, i.jsx)(n.pre, {
              children: (0, i.jsx)(n.code, {
                className: 'language-html',
                children:
                  '{{#if (gt income_hh 100000)}}\n<p>Exclusive luxury products for high-income households!</p>\n{{/if}}\n',
              }),
            }),
            '\n',
            (0, i.jsxs)(n.p, {
              children: [
                'If ',
                (0, i.jsx)(n.code, {children: 'income_hh'}),
                ' is greater than 100,000, the message "Exclusive luxury products for high-income households!" will be displayed.',
              ],
            }),
            '\n',
            (0, i.jsxs)(n.h4, {
              id: 'lt-less-than',
              children: [(0, i.jsx)(n.code, {children: 'lt'}), ' (less than)'],
            }),
            '\n',
            (0, i.jsx)(n.p, {
              children: (0, i.jsx)(n.strong, {children: 'Usage:'}),
            }),
            '\n',
            (0, i.jsx)(n.pre, {
              children: (0, i.jsx)(n.code, {
                className: 'language-html',
                children:
                  '{{#if (lt income_hh 50000)}}\n<p>Special discounts for budget-conscious shoppers!</p>\n{{/if}}\n',
              }),
            }),
            '\n',
            (0, i.jsx)(n.p, {
              children: (0, i.jsx)(n.strong, {children: 'Example:'}),
            }),
            '\n',
            (0, i.jsx)(n.pre, {
              children: (0, i.jsx)(n.code, {
                className: 'language-html',
                children:
                  '{{#if (lt income_hh 50000)}}\n<p>Special discounts for budget-conscious shoppers!</p>\n{{/if}}\n',
              }),
            }),
            '\n',
            (0, i.jsxs)(n.p, {
              children: [
                'If ',
                (0, i.jsx)(n.code, {children: 'income_hh'}),
                ' is less than 50,000, the message "Special discounts for budget-conscious shoppers!" will be displayed.',
              ],
            }),
            '\n',
            (0, i.jsxs)(n.h4, {
              id: 'gte-greater-than-or-equal-to',
              children: [
                (0, i.jsx)(n.code, {children: 'gte'}),
                ' (greater than or equal to)',
              ],
            }),
            '\n',
            (0, i.jsx)(n.p, {
              children: (0, i.jsx)(n.strong, {children: 'Usage:'}),
            }),
            '\n',
            (0, i.jsx)(n.pre, {
              children: (0, i.jsx)(n.code, {
                className: 'language-html',
                children:
                  '{{#if (gte age 18)}}\n<p>Explore our range of products for adults.</p>\n{{/if}}\n',
              }),
            }),
            '\n',
            (0, i.jsx)(n.p, {
              children: (0, i.jsx)(n.strong, {children: 'Example:'}),
            }),
            '\n',
            (0, i.jsx)(n.pre, {
              children: (0, i.jsx)(n.code, {
                className: 'language-html',
                children:
                  '{{#if (gte age 18)}}\n<p>Explore our range of products for adults.</p>\n{{/if}}\n',
              }),
            }),
            '\n',
            (0, i.jsxs)(n.p, {
              children: [
                'If ',
                (0, i.jsx)(n.code, {children: 'age'}),
                ' is 18 or older, the message "Explore our range of products for adults." will be displayed.',
              ],
            }),
            '\n',
            (0, i.jsxs)(n.h4, {
              id: 'lte-less-than-or-equal-to',
              children: [
                (0, i.jsx)(n.code, {children: 'lte'}),
                ' (less than or equal to)',
              ],
            }),
            '\n',
            (0, i.jsx)(n.p, {
              children: (0, i.jsx)(n.strong, {children: 'Usage:'}),
            }),
            '\n',
            (0, i.jsx)(n.pre, {
              children: (0, i.jsx)(n.code, {
                className: 'language-html',
                children:
                  "{{#if (lte age 12)}}\n<p>Check out our kids' collection!</p>\n{{/if}}\n",
              }),
            }),
            '\n',
            (0, i.jsx)(n.p, {
              children: (0, i.jsx)(n.strong, {children: 'Example:'}),
            }),
            '\n',
            (0, i.jsx)(n.pre, {
              children: (0, i.jsx)(n.code, {
                className: 'language-html',
                children:
                  "{{#if (lte age 12)}}\n<p>Check out our kids' collection!</p>\n{{/if}}\n",
              }),
            }),
            '\n',
            (0, i.jsxs)(n.p, {
              children: [
                'If ',
                (0, i.jsx)(n.code, {children: 'age'}),
                ' is 12 or younger, the message "Check out our kids\' collection!" will be displayed.',
              ],
            }),
            '\n',
            (0, i.jsx)(n.h2, {id: 'conclusion', children: 'Conclusion'}),
            '\n',
            (0, i.jsx)(n.p, {
              children:
                'These conditional helpers in Hero Dynamic Text allow you to create dynamic and personalized content by evaluating various conditions within your templates. By leveraging these helpers, you can enhance user engagement and deliver more relevant experiences.',
            }),
            '\n',
            (0, i.jsx)(n.h2, {id: 'next-steps', children: 'Next Steps'}),
            '\n',
            (0, i.jsx)(n.p, {
              children: 'Explore more features of Hero Dynamic Text:',
            }),
            '\n',
            (0, i.jsxs)(n.ul, {
              children: [
                '\n',
                (0, i.jsx)(n.li, {
                  children: (0, i.jsx)(n.a, {
                    href: '/docs/personalization/hero-string-number-functions',
                    children: 'String and Number Functions',
                  }),
                }),
                '\n',
                (0, i.jsx)(n.li, {
                  children: (0, i.jsx)(n.a, {
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
        const {wrapper: n} = {...(0, l.R)(), ...e.components};
        return n
          ? (0, i.jsx)(n, {...e, children: (0, i.jsx)(a, {...e})})
          : a(e);
      }
    },
    3023: (e, n, s) => {
      s.d(n, {R: () => o, x: () => c});
      var i = s(3696);
      const l = {},
        r = i.createContext(l);
      function o(e) {
        const n = i.useContext(r);
        return i.useMemo(
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
              ? e.components(l)
              : e.components || l
            : o(e.components)),
          i.createElement(r.Provider, {value: n}, e.children)
        );
      }
    },
  },
]);
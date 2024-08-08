/*! For license information please see c71e159c.b53ee088.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [2965],
  {
    2192: (e, n, i) => {
      var r = i(3696),
        t = Symbol.for('react.element'),
        s = Symbol.for('react.fragment'),
        o = Object.prototype.hasOwnProperty,
        a =
          r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        l = {key: !0, ref: !0, __self: !0, __source: !0};
      function c(e, n, i) {
        var r,
          s = {},
          c = null,
          d = null;
        for (r in (void 0 !== i && (c = '' + i),
        void 0 !== n.key && (c = '' + n.key),
        void 0 !== n.ref && (d = n.ref),
        n))
          o.call(n, r) && !l.hasOwnProperty(r) && (s[r] = n[r]);
        if (e && e.defaultProps)
          for (r in (n = e.defaultProps)) void 0 === s[r] && (s[r] = n[r]);
        return {
          $$typeof: t,
          type: e,
          key: c,
          ref: d,
          props: s,
          _owner: a.current,
        };
      }
      (n.Fragment = s), (n.jsx = c), (n.jsxs = c);
    },
    2540: (e, n, i) => {
      e.exports = i(2192);
    },
    8987: (e, n, i) => {
      i.r(n),
        i.d(n, {
          assets: () => l,
          contentTitle: () => o,
          default: () => p,
          frontMatter: () => s,
          metadata: () => a,
          toc: () => c,
        });
      var r = i(2540),
        t = i(3023);
      const s = {
          id: 'hero-advanced-techniques',
          title: 'Advanced Templating Techniques',
          description:
            'Guide to advanced templating techniques in Hero Dynamic Text',
        },
        o = 'Advanced Templating Techniques',
        a = {
          id: 'personalization/hero-advanced-techniques',
          title: 'Advanced Templating Techniques',
          description:
            'Guide to advanced templating techniques in Hero Dynamic Text',
          source:
            '@site/versioned_docs/version-0.0.1/personalization/hero-advanced-techniques.md',
          sourceDirName: 'personalization',
          slug: '/personalization/hero-advanced-techniques',
          permalink: '/docs/personalization/hero-advanced-techniques',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          frontMatter: {
            id: 'hero-advanced-techniques',
            title: 'Advanced Templating Techniques',
            description:
              'Guide to advanced templating techniques in Hero Dynamic Text',
          },
          sidebar: 'personalization',
          previous: {
            title: 'Conditional Helpers',
            permalink: '/docs/personalization/hero-conditional-helpers',
          },
          next: {
            title: 'Language Property',
            permalink: '/docs/personalization/hero-language-property',
          },
        },
        l = {},
        c = [
          {value: 'Introduction', id: 'introduction', level: 2},
          {value: 'Nested Helpers', id: 'nested-helpers', level: 2},
          {
            value: 'Iterating with <code>each</code>',
            id: 'iterating-with-each',
            level: 2,
          },
          {value: 'Block Parameters', id: 'block-parameters', level: 2},
          {
            value: 'Conditional Comparisons',
            id: 'conditional-comparisons',
            level: 2,
          },
          {value: 'Inline Helpers', id: 'inline-helpers', level: 2},
          {value: 'Combining Helpers', id: 'combining-helpers', level: 2},
          {value: 'Conclusion', id: 'conclusion', level: 2},
          {value: 'Next Steps', id: 'next-steps', level: 2},
        ];
      function d(e) {
        const n = {
          a: 'a',
          code: 'code',
          h1: 'h1',
          h2: 'h2',
          li: 'li',
          p: 'p',
          pre: 'pre',
          strong: 'strong',
          ul: 'ul',
          ...(0, t.R)(),
          ...e.components,
        };
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(n.h1, {
              id: 'advanced-templating-techniques',
              children: 'Advanced Templating Techniques',
            }),
            '\n',
            (0, r.jsx)(n.h2, {id: 'introduction', children: 'Introduction'}),
            '\n',
            (0, r.jsx)(n.p, {
              children:
                'Hero Dynamic Text provides powerful templating capabilities that allow you to create highly dynamic and personalized content. This guide covers advanced techniques to help you take full advantage of these capabilities and enhance your landing pages.',
            }),
            '\n',
            (0, r.jsx)(n.h2, {
              id: 'nested-helpers',
              children: 'Nested Helpers',
            }),
            '\n',
            (0, r.jsx)(n.p, {
              children:
                'You can nest helpers within each other to create more complex conditions and logic.',
            }),
            '\n',
            (0, r.jsx)(n.p, {
              children: (0, r.jsx)(n.strong, {children: 'Example:'}),
            }),
            '\n',
            (0, r.jsx)(n.pre, {
              children: (0, r.jsx)(n.code, {
                className: 'language-html',
                children:
                  '{{#if (eq country "USA")}}\n  {{#if (gt age 21)}}\n    <p>Enjoy our premium products available in the USA for adults over 21.</p>\n  {{/if}}\n{{/if}}\n',
              }),
            }),
            '\n',
            (0, r.jsxs)(n.p, {
              children: [
                'This example checks if the ',
                (0, r.jsx)(n.code, {children: 'country'}),
                ' is "USA" and if the ',
                (0, r.jsx)(n.code, {children: 'age'}),
                ' is greater than 21 before displaying the message.',
              ],
            }),
            '\n',
            (0, r.jsxs)(n.h2, {
              id: 'iterating-with-each',
              children: [
                'Iterating with ',
                (0, r.jsx)(n.code, {children: 'each'}),
              ],
            }),
            '\n',
            (0, r.jsxs)(n.p, {
              children: [
                'The ',
                (0, r.jsx)(n.code, {children: 'each'}),
                ' helper is useful for iterating over lists or arrays, rendering a block of code for each item.',
              ],
            }),
            '\n',
            (0, r.jsx)(n.p, {
              children: (0, r.jsx)(n.strong, {children: 'Example:'}),
            }),
            '\n',
            (0, r.jsx)(n.pre, {
              children: (0, r.jsx)(n.code, {
                className: 'language-html',
                children:
                  '<ul>\n  {{#each products}}\n    <li>{{name}} - ${{price}}</li>\n  {{/each}}\n</ul>\n',
              }),
            }),
            '\n',
            (0, r.jsxs)(n.p, {
              children: [
                'If ',
                (0, r.jsx)(n.code, {children: 'products'}),
                ' is an array of product objects, this example renders a list of product names and prices.',
              ],
            }),
            '\n',
            (0, r.jsx)(n.h2, {
              id: 'block-parameters',
              children: 'Block Parameters',
            }),
            '\n',
            (0, r.jsxs)(n.p, {
              children: [
                'Block parameters allow you to give alias names to each iteration of the ',
                (0, r.jsx)(n.code, {children: 'each'}),
                ' helper, making the template more readable.',
              ],
            }),
            '\n',
            (0, r.jsx)(n.p, {
              children: (0, r.jsx)(n.strong, {children: 'Example:'}),
            }),
            '\n',
            (0, r.jsx)(n.pre, {
              children: (0, r.jsx)(n.code, {
                className: 'language-html',
                children:
                  '<ul>\n  {{#each products as |product|}}\n    <li>{{product.name}} - ${{product.price}}</li>\n  {{/each}}\n</ul>\n',
              }),
            }),
            '\n',
            (0, r.jsxs)(n.p, {
              children: [
                'In this example, ',
                (0, r.jsx)(n.code, {children: 'product'}),
                ' is used as an alias for each item in the ',
                (0, r.jsx)(n.code, {children: 'products'}),
                ' array, making the code more readable.',
              ],
            }),
            '\n',
            (0, r.jsx)(n.h2, {
              id: 'conditional-comparisons',
              children: 'Conditional Comparisons',
            }),
            '\n',
            (0, r.jsxs)(n.p, {
              children: [
                'Hero Dynamic Text supports comparisons directly within the ',
                (0, r.jsx)(n.code, {children: 'if'}),
                ' helper, allowing for more complex conditional logic.',
              ],
            }),
            '\n',
            (0, r.jsx)(n.p, {
              children: (0, r.jsx)(n.strong, {children: 'Example:'}),
            }),
            '\n',
            (0, r.jsx)(n.pre, {
              children: (0, r.jsx)(n.code, {
                className: 'language-html',
                children:
                  '{{#if (eq subscription "premium")}}\n  <p>Welcome, premium member!</p>\n{{else if (eq subscription "basic")}}\n  <p>Welcome, basic member!</p>\n{{else}}\n  <p>Welcome, guest!</p>\n{{/if}}\n',
              }),
            }),
            '\n',
            (0, r.jsxs)(n.p, {
              children: [
                'This example displays different messages based on the value of the ',
                (0, r.jsx)(n.code, {children: 'subscription'}),
                ' property.',
              ],
            }),
            '\n',
            (0, r.jsx)(n.h2, {
              id: 'inline-helpers',
              children: 'Inline Helpers',
            }),
            '\n',
            (0, r.jsx)(n.p, {
              children:
                'Inline helpers can be used to perform operations or transformations directly within the template.',
            }),
            '\n',
            (0, r.jsx)(n.p, {
              children: (0, r.jsx)(n.strong, {children: 'Example:'}),
            }),
            '\n',
            (0, r.jsx)(n.pre, {
              children: (0, r.jsx)(n.code, {
                className: 'language-html',
                children: '<p>Welcome, {{toUpperCase firstName}}!</p>\n',
              }),
            }),
            '\n',
            (0, r.jsxs)(n.p, {
              children: [
                'If ',
                (0, r.jsx)(n.code, {children: 'firstName'}),
                ' is "john", this example converts it to "JOHN" and displays "Welcome, JOHN!".',
              ],
            }),
            '\n',
            (0, r.jsx)(n.h2, {
              id: 'combining-helpers',
              children: 'Combining Helpers',
            }),
            '\n',
            (0, r.jsx)(n.p, {
              children:
                'You can combine multiple helpers to achieve more complex functionality within your templates.',
            }),
            '\n',
            (0, r.jsx)(n.p, {
              children: (0, r.jsx)(n.strong, {children: 'Example:'}),
            }),
            '\n',
            (0, r.jsx)(n.pre, {
              children: (0, r.jsx)(n.code, {
                className: 'language-html',
                children:
                  '<p>Shipping to: {{toUpperCase city}}, {{state}}</p>\n{{#if (and (eq country "USA") (gt age 18))}}\n  <p>You are eligible for free shipping within the USA.</p>\n{{/if}}\n',
              }),
            }),
            '\n',
            (0, r.jsxs)(n.p, {
              children: [
                'This example combines the ',
                (0, r.jsx)(n.code, {children: 'toUpperCase'}),
                ' helper with conditional logic to display a message based on multiple conditions.',
              ],
            }),
            '\n',
            (0, r.jsx)(n.h2, {id: 'conclusion', children: 'Conclusion'}),
            '\n',
            (0, r.jsx)(n.p, {
              children:
                'By leveraging these advanced templating techniques, you can create highly dynamic and personalized content with Hero Dynamic Text. These techniques allow you to build complex templates that can adapt to various user attributes and behaviors, enhancing the overall user experience.',
            }),
            '\n',
            (0, r.jsx)(n.h2, {id: 'next-steps', children: 'Next Steps'}),
            '\n',
            (0, r.jsx)(n.p, {
              children: 'Explore more features of Hero Dynamic Text:',
            }),
            '\n',
            (0, r.jsxs)(n.ul, {
              children: [
                '\n',
                (0, r.jsx)(n.li, {
                  children: (0, r.jsx)(n.a, {
                    href: '/docs/personalization/hero-string-number-functions',
                    children: 'String and Number Functions',
                  }),
                }),
                '\n',
                (0, r.jsx)(n.li, {
                  children: (0, r.jsx)(n.a, {
                    href: '/docs/personalization/hero-conditional-helpers',
                    children: 'Conditional Helpers',
                  }),
                }),
                '\n',
              ],
            }),
          ],
        });
      }
      function p(e = {}) {
        const {wrapper: n} = {...(0, t.R)(), ...e.components};
        return n
          ? (0, r.jsx)(n, {...e, children: (0, r.jsx)(d, {...e})})
          : d(e);
      }
    },
    3023: (e, n, i) => {
      i.d(n, {R: () => o, x: () => a});
      var r = i(3696);
      const t = {},
        s = r.createContext(t);
      function o(e) {
        const n = r.useContext(s);
        return r.useMemo(
          function () {
            return 'function' == typeof e ? e(n) : {...n, ...e};
          },
          [n, e]
        );
      }
      function a(e) {
        let n;
        return (
          (n = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(t)
              : e.components || t
            : o(e.components)),
          r.createElement(s.Provider, {value: n}, e.children)
        );
      }
    },
  },
]);

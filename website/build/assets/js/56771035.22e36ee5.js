/*! For license information please see 56771035.22e36ee5.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [155],
  {
    2192: (e, n, r) => {
      var s = r(3696),
        i = Symbol.for('react.element'),
        l = Symbol.for('react.fragment'),
        c = Object.prototype.hasOwnProperty,
        t =
          s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        d = {key: !0, ref: !0, __self: !0, __source: !0};
      function o(e, n, r) {
        var s,
          l = {},
          o = null,
          a = null;
        for (s in (void 0 !== r && (o = '' + r),
        void 0 !== n.key && (o = '' + n.key),
        void 0 !== n.ref && (a = n.ref),
        n))
          c.call(n, s) && !d.hasOwnProperty(s) && (l[s] = n[s]);
        if (e && e.defaultProps)
          for (s in (n = e.defaultProps)) void 0 === l[s] && (l[s] = n[s]);
        return {
          $$typeof: i,
          type: e,
          key: o,
          ref: a,
          props: l,
          _owner: t.current,
        };
      }
      (n.Fragment = l), (n.jsx = o), (n.jsxs = o);
    },
    2540: (e, n, r) => {
      e.exports = r(2192);
    },
    4684: (e, n, r) => {
      r.r(n),
        r.d(n, {
          assets: () => d,
          contentTitle: () => c,
          default: () => h,
          frontMatter: () => l,
          metadata: () => t,
          toc: () => o,
        });
      var s = r(2540),
        i = r(3023);
      const l = {
          id: 'hero-string-number-functions',
          title: 'String and Number Functions',
          description:
            'List of Handlebars string and number functions for displaying property values',
        },
        c = 'String and Number Functions',
        t = {
          id: 'personalization/hero-string-number-functions',
          title: 'String and Number Functions',
          description:
            'List of Handlebars string and number functions for displaying property values',
          source:
            '@site/versioned_docs/version-0.0.1/personalization/hero-string-number-functions.md',
          sourceDirName: 'personalization',
          slug: '/personalization/hero-string-number-functions',
          permalink: '/docs/personalization/hero-string-number-functions',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1723080994e3,
          frontMatter: {
            id: 'hero-string-number-functions',
            title: 'String and Number Functions',
            description:
              'List of Handlebars string and number functions for displaying property values',
          },
          sidebar: 'personalization',
          previous: {
            title: 'Visitor Attributes',
            permalink: '/docs/personalization/visitor-attributes',
          },
          next: {
            title: 'Conditional Helpers',
            permalink: '/docs/personalization/hero-conditional-helpers',
          },
        },
        d = {},
        o = [
          {value: 'Introduction', id: 'introduction', level: 2},
          {value: 'String Functions', id: 'string-functions', level: 2},
          {value: '<code>toUpperCase</code>', id: 'touppercase', level: 3},
          {value: '<code>toLowerCase</code>', id: 'tolowercase', level: 3},
          {value: '<code>capitalize</code>', id: 'capitalize', level: 3},
          {value: '<code>trim</code>', id: 'trim', level: 3},
          {value: '<code>substring</code>', id: 'substring', level: 3},
          {value: 'Number Functions', id: 'number-functions', level: 2},
          {value: '<code>add</code>', id: 'add', level: 3},
          {value: '<code>subtract</code>', id: 'subtract', level: 3},
          {value: '<code>multiply</code>', id: 'multiply', level: 3},
          {value: '<code>divide</code>', id: 'divide', level: 3},
          {value: '<code>mod</code>', id: 'mod', level: 3},
          {value: '<code>ceil</code>', id: 'ceil', level: 3},
          {value: '<code>floor</code>', id: 'floor', level: 3},
          {value: '<code>round</code>', id: 'round', level: 3},
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
          li: 'li',
          p: 'p',
          pre: 'pre',
          strong: 'strong',
          ul: 'ul',
          ...(0, i.R)(),
          ...e.components,
        };
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(n.h1, {
              id: 'string-and-number-functions',
              children: 'String and Number Functions',
            }),
            '\n',
            (0, s.jsx)(n.h2, {id: 'introduction', children: 'Introduction'}),
            '\n',
            (0, s.jsx)(n.p, {
              children:
                'Hero Dynamic Text provides a range of helpers and functions to manipulate strings and numbers within your templates. This guide covers the most commonly used string and number functions to help you display and format property values effectively.',
            }),
            '\n',
            (0, s.jsx)(n.h2, {
              id: 'string-functions',
              children: 'String Functions',
            }),
            '\n',
            (0, s.jsx)(n.h3, {
              id: 'touppercase',
              children: (0, s.jsx)(n.code, {children: 'toUpperCase'}),
            }),
            '\n',
            (0, s.jsx)(n.p, {children: 'Converts a string to uppercase.'}),
            '\n',
            (0, s.jsx)(n.p, {
              children: (0, s.jsx)(n.strong, {children: 'Usage:'}),
            }),
            '\n',
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: 'language-html',
                children: '{{toUpperCase propertyName}}\n',
              }),
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children: (0, s.jsx)(n.strong, {children: 'Example:'}),
            }),
            '\n',
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: 'language-html',
                children: '{{toUpperCase religion}}\n',
              }),
            }),
            '\n',
            (0, s.jsxs)(n.p, {
              children: [
                'If ',
                (0, s.jsx)(n.code, {children: 'religion'}),
                ' is "Catholic", the output will be "CATHOLIC".',
              ],
            }),
            '\n',
            (0, s.jsx)(n.h3, {
              id: 'tolowercase',
              children: (0, s.jsx)(n.code, {children: 'toLowerCase'}),
            }),
            '\n',
            (0, s.jsx)(n.p, {children: 'Converts a string to lowercase.'}),
            '\n',
            (0, s.jsx)(n.p, {
              children: (0, s.jsx)(n.strong, {children: 'Usage:'}),
            }),
            '\n',
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: 'language-html',
                children: '{{toLowerCase propertyName}}\n',
              }),
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children: (0, s.jsx)(n.strong, {children: 'Example:'}),
            }),
            '\n',
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: 'language-html',
                children: '{{toLowerCase religion}}\n',
              }),
            }),
            '\n',
            (0, s.jsxs)(n.p, {
              children: [
                'If ',
                (0, s.jsx)(n.code, {children: 'politicalParty'}),
                ' is "Conservative", the output will be "conservative".',
              ],
            }),
            '\n',
            (0, s.jsx)(n.h3, {
              id: 'capitalize',
              children: (0, s.jsx)(n.code, {children: 'capitalize'}),
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children: 'Capitalizes the first letter of a string.',
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children: (0, s.jsx)(n.strong, {children: 'Usage:'}),
            }),
            '\n',
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: 'language-html',
                children: '{{capitalize propertyName}}\n',
              }),
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children: (0, s.jsx)(n.strong, {children: 'Example:'}),
            }),
            '\n',
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: 'language-html',
                children: '{{capitalize city}}\n',
              }),
            }),
            '\n',
            (0, s.jsxs)(n.p, {
              children: [
                'If ',
                (0, s.jsx)(n.code, {children: 'city'}),
                ' is "new york", the output will be "New york".',
              ],
            }),
            '\n',
            (0, s.jsx)(n.h3, {
              id: 'trim',
              children: (0, s.jsx)(n.code, {children: 'trim'}),
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children: 'Removes whitespace from both ends of a string.',
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children: (0, s.jsx)(n.strong, {children: 'Usage:'}),
            }),
            '\n',
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: 'language-html',
                children: '{{trim propertyName}}\n',
              }),
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children: (0, s.jsx)(n.strong, {children: 'Example:'}),
            }),
            '\n',
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: 'language-html',
                children: '{{trim regionName}}\n',
              }),
            }),
            '\n',
            (0, s.jsxs)(n.p, {
              children: [
                'If ',
                (0, s.jsx)(n.code, {children: 'regionName'}),
                ' is " Texas ", the output will be "Texas".',
              ],
            }),
            '\n',
            (0, s.jsx)(n.h3, {
              id: 'substring',
              children: (0, s.jsx)(n.code, {children: 'substring'}),
            }),
            '\n',
            (0, s.jsx)(n.p, {children: 'Extracts a substring from a string.'}),
            '\n',
            (0, s.jsx)(n.p, {
              children: (0, s.jsx)(n.strong, {children: 'Usage:'}),
            }),
            '\n',
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: 'language-html',
                children: '{{substring propertyName start end}}\n',
              }),
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children: (0, s.jsx)(n.strong, {children: 'Example:'}),
            }),
            '\n',
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: 'language-html',
                children: '{{substring zip 0 3}}\n',
              }),
            }),
            '\n',
            (0, s.jsxs)(n.p, {
              children: [
                'If ',
                (0, s.jsx)(n.code, {children: 'zip'}),
                ' is "83714", the output will be "837".',
              ],
            }),
            '\n',
            (0, s.jsx)(n.h2, {
              id: 'number-functions',
              children: 'Number Functions',
            }),
            '\n',
            (0, s.jsx)(n.h3, {
              id: 'add',
              children: (0, s.jsx)(n.code, {children: 'add'}),
            }),
            '\n',
            (0, s.jsx)(n.p, {children: 'Adds two numbers.'}),
            '\n',
            (0, s.jsx)(n.p, {
              children: (0, s.jsx)(n.strong, {children: 'Usage:'}),
            }),
            '\n',
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: 'language-html',
                children: '{{add number1 number2}}\n',
              }),
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children: (0, s.jsx)(n.strong, {children: 'Example:'}),
            }),
            '\n',
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: 'language-html',
                children: '{{add homePurchasedYearsAgo 5}}\n',
              }),
            }),
            '\n',
            (0, s.jsxs)(n.p, {
              children: [
                'If ',
                (0, s.jsx)(n.code, {children: 'homePurchasedYearsAgo'}),
                ' is 25, the output will be 30.',
              ],
            }),
            '\n',
            (0, s.jsx)(n.h3, {
              id: 'subtract',
              children: (0, s.jsx)(n.code, {children: 'subtract'}),
            }),
            '\n',
            (0, s.jsx)(n.p, {children: 'Subtracts one number from another.'}),
            '\n',
            (0, s.jsx)(n.p, {
              children: (0, s.jsx)(n.strong, {children: 'Usage:'}),
            }),
            '\n',
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: 'language-html',
                children: '{{subtract number1 number2}}\n',
              }),
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children: (0, s.jsx)(n.strong, {children: 'Example:'}),
            }),
            '\n',
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: 'language-html',
                children: '{{subtract age 5}}\n',
              }),
            }),
            '\n',
            (0, s.jsxs)(n.p, {
              children: [
                'If ',
                (0, s.jsx)(n.code, {children: 'age'}),
                ' is 25, the output will be 20.',
              ],
            }),
            '\n',
            (0, s.jsx)(n.h3, {
              id: 'multiply',
              children: (0, s.jsx)(n.code, {children: 'multiply'}),
            }),
            '\n',
            (0, s.jsx)(n.p, {children: 'Multiplies two numbers.'}),
            '\n',
            (0, s.jsx)(n.p, {
              children: (0, s.jsx)(n.strong, {children: 'Usage:'}),
            }),
            '\n',
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: 'language-html',
                children: '{{multiply number1 number2}}\n',
              }),
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children: (0, s.jsx)(n.strong, {children: 'Example:'}),
            }),
            '\n',
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: 'language-html',
                children: '{{multiply age 2}}\n',
              }),
            }),
            '\n',
            (0, s.jsxs)(n.p, {
              children: [
                'If ',
                (0, s.jsx)(n.code, {children: 'age'}),
                ' is 20, the output will be 40.',
              ],
            }),
            '\n',
            (0, s.jsx)(n.h3, {
              id: 'divide',
              children: (0, s.jsx)(n.code, {children: 'divide'}),
            }),
            '\n',
            (0, s.jsx)(n.p, {children: 'Divides one number by another.'}),
            '\n',
            (0, s.jsx)(n.p, {
              children: (0, s.jsx)(n.strong, {children: 'Usage:'}),
            }),
            '\n',
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: 'language-html',
                children: '{{divide number1 number2}}\n',
              }),
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children: (0, s.jsx)(n.strong, {children: 'Example:'}),
            }),
            '\n',
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: 'language-html',
                children: '{{divide total 2}}\n',
              }),
            }),
            '\n',
            (0, s.jsxs)(n.p, {
              children: [
                'If ',
                (0, s.jsx)(n.code, {children: 'total'}),
                ' is 100, the output will be 50.',
              ],
            }),
            '\n',
            (0, s.jsx)(n.h3, {
              id: 'mod',
              children: (0, s.jsx)(n.code, {children: 'mod'}),
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children:
                'Calculates the remainder of the division of one number by another.',
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children: (0, s.jsx)(n.strong, {children: 'Usage:'}),
            }),
            '\n',
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: 'language-html',
                children: '{{mod number1 number2}}\n',
              }),
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children: (0, s.jsx)(n.strong, {children: 'Example:'}),
            }),
            '\n',
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: 'language-html',
                children: '{{mod total 3}}\n',
              }),
            }),
            '\n',
            (0, s.jsxs)(n.p, {
              children: [
                'If ',
                (0, s.jsx)(n.code, {children: 'total'}),
                ' is 10, the output will be 1.',
              ],
            }),
            '\n',
            (0, s.jsx)(n.h3, {
              id: 'ceil',
              children: (0, s.jsx)(n.code, {children: 'ceil'}),
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children: 'Rounds a number up to the nearest integer.',
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children: (0, s.jsx)(n.strong, {children: 'Usage:'}),
            }),
            '\n',
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: 'language-html',
                children: '{{ceil number}}\n',
              }),
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children: (0, s.jsx)(n.strong, {children: 'Example:'}),
            }),
            '\n',
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: 'language-html',
                children: '{{ceil price}}\n',
              }),
            }),
            '\n',
            (0, s.jsxs)(n.p, {
              children: [
                'If ',
                (0, s.jsx)(n.code, {children: 'price'}),
                ' is 19.99, the output will be 20.',
              ],
            }),
            '\n',
            (0, s.jsx)(n.h3, {
              id: 'floor',
              children: (0, s.jsx)(n.code, {children: 'floor'}),
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children: 'Rounds a number down to the nearest integer.',
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children: (0, s.jsx)(n.strong, {children: 'Usage:'}),
            }),
            '\n',
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: 'language-html',
                children: '{{floor number}}\n',
              }),
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children: (0, s.jsx)(n.strong, {children: 'Example:'}),
            }),
            '\n',
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: 'language-html',
                children: '{{floor price}}\n',
              }),
            }),
            '\n',
            (0, s.jsxs)(n.p, {
              children: [
                'If ',
                (0, s.jsx)(n.code, {children: 'price'}),
                ' is 19.99, the output will be 19.',
              ],
            }),
            '\n',
            (0, s.jsx)(n.h3, {
              id: 'round',
              children: (0, s.jsx)(n.code, {children: 'round'}),
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children: 'Rounds a number to the nearest integer.',
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children: (0, s.jsx)(n.strong, {children: 'Usage:'}),
            }),
            '\n',
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: 'language-html',
                children: '{{round number}}\n',
              }),
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children: (0, s.jsx)(n.strong, {children: 'Example:'}),
            }),
            '\n',
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: 'language-html',
                children: '{{round price}}\n',
              }),
            }),
            '\n',
            (0, s.jsxs)(n.p, {
              children: [
                'If ',
                (0, s.jsx)(n.code, {children: 'price'}),
                ' is 19.5, the output will be 20. If ',
                (0, s.jsx)(n.code, {children: 'price'}),
                ' is 19.4, the output will be 19.',
              ],
            }),
            '\n',
            (0, s.jsx)(n.h2, {id: 'conclusion', children: 'Conclusion'}),
            '\n',
            (0, s.jsx)(n.p, {
              children:
                'These string and number functions provided by Hero Dynamic Text allow you to manipulate and display property values effectively within your templates. By leveraging these functions, you can ensure your content is formatted correctly and meets your specific requirements.',
            }),
            '\n',
            (0, s.jsx)(n.h2, {id: 'next-steps', children: 'Next Steps'}),
            '\n',
            (0, s.jsx)(n.p, {
              children: 'Explore more advanced Handlebars features:',
            }),
            '\n',
            (0, s.jsxs)(n.ul, {
              children: [
                '\n',
                (0, s.jsx)(n.li, {
                  children: (0, s.jsx)(n.a, {
                    href: '/docs/personalization/hero-conditional-helpers',
                    children: 'Conditional Helpers',
                  }),
                }),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children:
                'By mastering these functions, you can create dynamic and engaging templates that enhance the user experience on your landing pages.',
            }),
          ],
        });
      }
      function h(e = {}) {
        const {wrapper: n} = {...(0, i.R)(), ...e.components};
        return n
          ? (0, s.jsx)(n, {...e, children: (0, s.jsx)(a, {...e})})
          : a(e);
      }
    },
    3023: (e, n, r) => {
      r.d(n, {R: () => c, x: () => t});
      var s = r(3696);
      const i = {},
        l = s.createContext(i);
      function c(e) {
        const n = s.useContext(l);
        return s.useMemo(
          function () {
            return 'function' == typeof e ? e(n) : {...n, ...e};
          },
          [n, e]
        );
      }
      function t(e) {
        let n;
        return (
          (n = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(i)
              : e.components || i
            : c(e.components)),
          s.createElement(l.Provider, {value: n}, e.children)
        );
      }
    },
  },
]);

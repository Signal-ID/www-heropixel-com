/*! For license information please see 0077c686.241a3e6a.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [6080],
  {
    2192: (e, n, r) => {
      var t = r(3696),
        i = Symbol.for('react.element'),
        o = Symbol.for('react.fragment'),
        s = Object.prototype.hasOwnProperty,
        c =
          t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        l = {key: !0, ref: !0, __self: !0, __source: !0};
      function a(e, n, r) {
        var t,
          o = {},
          a = null,
          d = null;
        for (t in (void 0 !== r && (a = '' + r),
        void 0 !== n.key && (a = '' + n.key),
        void 0 !== n.ref && (d = n.ref),
        n))
          s.call(n, t) && !l.hasOwnProperty(t) && (o[t] = n[t]);
        if (e && e.defaultProps)
          for (t in (n = e.defaultProps)) void 0 === o[t] && (o[t] = n[t]);
        return {
          $$typeof: i,
          type: e,
          key: a,
          ref: d,
          props: o,
          _owner: c.current,
        };
      }
      (n.Fragment = o), (n.jsx = a), (n.jsxs = a);
    },
    2540: (e, n, r) => {
      e.exports = r(2192);
    },
    3414: (e, n, r) => {
      r.r(n),
        r.d(n, {
          assets: () => l,
          contentTitle: () => s,
          default: () => u,
          frontMatter: () => o,
          metadata: () => c,
          toc: () => a,
        });
      var t = r(2540),
        i = r(3023);
      const o = {id: 'billing', title: 'Billing Overview', description: 'desc'},
        s = 'How does billing work?',
        c = {
          id: 'billing',
          title: 'Billing Overview',
          description: 'desc',
          source: '@site/versioned_docs/version-0.0.1/billing.md',
          sourceDirName: '.',
          slug: '/billing',
          permalink: '/docs/billing',
          draft: !1,
          unlisted: !1,
          editUrl:
            'https://github.com/facebook/react-native-website/blob/main/website/../docs/billing.md',
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1718839459e3,
          frontMatter: {
            id: 'billing',
            title: 'Billing Overview',
            description: 'desc',
          },
          sidebar: 'docs',
          previous: {
            title: 'Changing organization ownership',
            permalink: '/docs/changing-ownership',
          },
          next: {
            title: 'Add Your Bank Account',
            permalink: '/docs/add-bank-account',
          },
        },
        l = {},
        a = [];
      function d(e) {
        const n = {
          a: 'a',
          h1: 'h1',
          p: 'p',
          strong: 'strong',
          ...(0, i.R)(),
          ...e.components,
        };
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(n.h1, {
              id: 'how-does-billing-work',
              children: 'How does billing work?',
            }),
            '\n',
            (0, t.jsxs)(n.p, {
              children: [
                'We manage a ledger, which you can access under the ',
                (0, t.jsx)(n.a, {
                  href: 'https://app.heropixel.com/settings/credits',
                  children: 'Credits',
                }),
                ' section of your Organization Settings.',
              ],
            }),
            '\n',
            (0, t.jsx)(n.p, {
              children: (0, t.jsx)(n.strong, {
                children: 'Decreasing your ledger balance',
              }),
            }),
            '\n',
            (0, t.jsx)(n.p, {
              children:
                'The ledger will account for every identity that is unique to one of your pixels by decreasing your ledger balance by one credit.',
            }),
            '\n',
            (0, t.jsx)(n.p, {
              children: (0, t.jsx)(n.strong, {
                children: 'Increasing your ledger balance',
              }),
            }),
            '\n',
            (0, t.jsx)(n.p, {
              children:
                'When you pay an invoice, or add credits to your account (an invoice will be created) and your ledger balance will increase by the number of credits you acquired. Credits are merely a way for us to track your balance accurately. We do not sell credits, we sell a license to our data.',
            }),
            '\n',
            (0, t.jsx)(n.p, {
              children: (0, t.jsx)(n.strong, {children: 'Invoicing'}),
            }),
            '\n',
            (0, t.jsx)(n.p, {
              children:
                'You will receive invoices from time to time when services have been received.',
            }),
          ],
        });
      }
      function u(e = {}) {
        const {wrapper: n} = {...(0, i.R)(), ...e.components};
        return n
          ? (0, t.jsx)(n, {...e, children: (0, t.jsx)(d, {...e})})
          : d(e);
      }
    },
    3023: (e, n, r) => {
      r.d(n, {R: () => s, x: () => c});
      var t = r(3696);
      const i = {},
        o = t.createContext(i);
      function s(e) {
        const n = t.useContext(o);
        return t.useMemo(
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
              ? e.components(i)
              : e.components || i
            : s(e.components)),
          t.createElement(o.Provider, {value: n}, e.children)
        );
      }
    },
  },
]);

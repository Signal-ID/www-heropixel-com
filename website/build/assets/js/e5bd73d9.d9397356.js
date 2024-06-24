/*! For license information please see e5bd73d9.d9397356.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [9060],
  {
    2192: (e, t, i) => {
      var n = i(3696),
        o = Symbol.for('react.element'),
        r = Symbol.for('react.fragment'),
        s = Object.prototype.hasOwnProperty,
        a =
          n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        c = {key: !0, ref: !0, __self: !0, __source: !0};
      function l(e, t, i) {
        var n,
          r = {},
          l = null,
          m = null;
        for (n in (void 0 !== i && (l = '' + i),
        void 0 !== t.key && (l = '' + t.key),
        void 0 !== t.ref && (m = t.ref),
        t))
          s.call(t, n) && !c.hasOwnProperty(n) && (r[n] = t[n]);
        if (e && e.defaultProps)
          for (n in (t = e.defaultProps)) void 0 === r[n] && (r[n] = t[n]);
        return {
          $$typeof: o,
          type: e,
          key: l,
          ref: m,
          props: r,
          _owner: a.current,
        };
      }
      (t.Fragment = r), (t.jsx = l), (t.jsxs = l);
    },
    2540: (e, t, i) => {
      e.exports = i(2192);
    },
    1057: (e, t, i) => {
      i.r(t),
        i.d(t, {
          assets: () => c,
          contentTitle: () => s,
          default: () => p,
          frontMatter: () => r,
          metadata: () => a,
          toc: () => l,
        });
      var n = i(2540),
        o = i(3023);
      const r = {id: 'mailchimp', title: 'Mailchimp', description: 'mailchimp'},
        s = void 0,
        a = {
          id: 'destinations/mailchimp',
          title: 'Mailchimp',
          description: 'mailchimp',
          source:
            '@site/versioned_docs/version-0.0.1/destinations/mailchimp.md',
          sourceDirName: 'destinations',
          slug: '/destinations/mailchimp',
          permalink: '/docs/destinations/mailchimp',
          draft: !1,
          unlisted: !1,
          editUrl:
            'https://github.com/Signal-ID/www-heropixel-com/blob/main/website/../docs/destinations/mailchimp.md',
          tags: [],
          version: '0.0.1',
          frontMatter: {
            id: 'mailchimp',
            title: 'Mailchimp',
            description: 'mailchimp',
          },
          sidebar: 'integrations',
          previous: {title: 'Klaviyo', permalink: '/docs/destinations/klaviyo'},
          next: {title: 'Milvus', permalink: '/docs/destinations/milvus'},
        },
        c = {},
        l = [];
      function m(e) {
        return (0, n.jsx)(n.Fragment, {});
      }
      function p(e = {}) {
        const {wrapper: t} = {...(0, o.R)(), ...e.components};
        return t ? (0, n.jsx)(t, {...e, children: (0, n.jsx)(m, {...e})}) : m();
      }
    },
    3023: (e, t, i) => {
      i.d(t, {R: () => s, x: () => a});
      var n = i(3696);
      const o = {},
        r = n.createContext(o);
      function s(e) {
        const t = n.useContext(r);
        return n.useMemo(
          function () {
            return 'function' == typeof e ? e(t) : {...t, ...e};
          },
          [t, e]
        );
      }
      function a(e) {
        let t;
        return (
          (t = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(o)
              : e.components || o
            : s(e.components)),
          n.createElement(r.Provider, {value: t}, e.children)
        );
      }
    },
  },
]);

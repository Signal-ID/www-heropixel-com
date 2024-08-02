/*! For license information please see fca129b3.37509deb.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [6378],
  {
    2192: (e, n, t) => {
      var r = t(3696),
        o = Symbol.for('react.element'),
        i = Symbol.for('react.fragment'),
        s = Object.prototype.hasOwnProperty,
        a =
          r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        c = {key: !0, ref: !0, __self: !0, __source: !0};
      function p(e, n, t) {
        var r,
          i = {},
          p = null,
          l = null;
        for (r in (void 0 !== t && (p = '' + t),
        void 0 !== n.key && (p = '' + n.key),
        void 0 !== n.ref && (l = n.ref),
        n))
          s.call(n, r) && !c.hasOwnProperty(r) && (i[r] = n[r]);
        if (e && e.defaultProps)
          for (r in (n = e.defaultProps)) void 0 === i[r] && (i[r] = n[r]);
        return {
          $$typeof: o,
          type: e,
          key: p,
          ref: l,
          props: i,
          _owner: a.current,
        };
      }
      (n.Fragment = i), (n.jsx = p), (n.jsxs = p);
    },
    2540: (e, n, t) => {
      e.exports = t(2192);
    },
    9994: (e, n, t) => {
      t.r(n),
        t.d(n, {
          assets: () => c,
          contentTitle: () => s,
          default: () => d,
          frontMatter: () => i,
          metadata: () => a,
          toc: () => p,
        });
      var r = t(2540),
        o = t(3023);
      const i = {
          id: 'changing-ownership',
          title: 'Changing organization ownership',
          description: 'desc',
        },
        s = void 0,
        a = {
          id: 'changing-ownership',
          title: 'Changing organization ownership',
          description: 'desc',
          source: '@site/versioned_docs/version-0.0.1/changing-ownership.md',
          sourceDirName: '.',
          slug: '/changing-ownership',
          permalink: '/docs/changing-ownership',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1718839459e3,
          frontMatter: {
            id: 'changing-ownership',
            title: 'Changing organization ownership',
            description: 'desc',
          },
          sidebar: 'docs',
          previous: {
            title: 'Removing a member',
            permalink: '/docs/removing-a-member',
          },
          next: {title: 'Billing Overview', permalink: '/docs/billing'},
        },
        c = {},
        p = [];
      function l(e) {
        return (0, r.jsx)(r.Fragment, {});
      }
      function d(e = {}) {
        const {wrapper: n} = {...(0, o.R)(), ...e.components};
        return n ? (0, r.jsx)(n, {...e, children: (0, r.jsx)(l, {...e})}) : l();
      }
    },
    3023: (e, n, t) => {
      t.d(n, {R: () => s, x: () => a});
      var r = t(3696);
      const o = {},
        i = r.createContext(o);
      function s(e) {
        const n = r.useContext(i);
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
              ? e.components(o)
              : e.components || o
            : s(e.components)),
          r.createElement(i.Provider, {value: n}, e.children)
        );
      }
    },
  },
]);

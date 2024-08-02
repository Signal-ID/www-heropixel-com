/*! For license information please see 37a94953.0da55967.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [6942],
  {
    2192: (e, n, t) => {
      var r = t(3696),
        o = Symbol.for('react.element'),
        s = Symbol.for('react.fragment'),
        i = Object.prototype.hasOwnProperty,
        a =
          r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        c = {key: !0, ref: !0, __self: !0, __source: !0};
      function m(e, n, t) {
        var r,
          s = {},
          m = null,
          l = null;
        for (r in (void 0 !== t && (m = '' + t),
        void 0 !== n.key && (m = '' + n.key),
        void 0 !== n.ref && (l = n.ref),
        n))
          i.call(n, r) && !c.hasOwnProperty(r) && (s[r] = n[r]);
        if (e && e.defaultProps)
          for (r in (n = e.defaultProps)) void 0 === s[r] && (s[r] = n[r]);
        return {
          $$typeof: o,
          type: e,
          key: m,
          ref: l,
          props: s,
          _owner: a.current,
        };
      }
      (n.Fragment = s), (n.jsx = m), (n.jsxs = m);
    },
    2540: (e, n, t) => {
      e.exports = t(2192);
    },
    7961: (e, n, t) => {
      t.r(n),
        t.d(n, {
          assets: () => c,
          contentTitle: () => i,
          default: () => d,
          frontMatter: () => s,
          metadata: () => a,
          toc: () => m,
        });
      var r = t(2540),
        o = t(3023);
      const s = {
          id: 'changing-member-roles',
          title: 'Changing a members role',
          description: 'desc',
        },
        i = void 0,
        a = {
          id: 'changing-member-roles',
          title: 'Changing a members role',
          description: 'desc',
          source: '@site/versioned_docs/version-0.0.1/changing-member-roles.md',
          sourceDirName: '.',
          slug: '/changing-member-roles',
          permalink: '/docs/changing-member-roles',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1718839459e3,
          frontMatter: {
            id: 'changing-member-roles',
            title: 'Changing a members role',
            description: 'desc',
          },
          sidebar: 'docs',
          previous: {
            title: 'Inviting new team members',
            permalink: '/docs/inviting',
          },
          next: {
            title: 'Removing a member',
            permalink: '/docs/removing-a-member',
          },
        },
        c = {},
        m = [];
      function l(e) {
        return (0, r.jsx)(r.Fragment, {});
      }
      function d(e = {}) {
        const {wrapper: n} = {...(0, o.R)(), ...e.components};
        return n ? (0, r.jsx)(n, {...e, children: (0, r.jsx)(l, {...e})}) : l();
      }
    },
    3023: (e, n, t) => {
      t.d(n, {R: () => i, x: () => a});
      var r = t(3696);
      const o = {},
        s = r.createContext(o);
      function i(e) {
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
              ? e.components(o)
              : e.components || o
            : i(e.components)),
          r.createElement(s.Provider, {value: n}, e.children)
        );
      }
    },
  },
]);

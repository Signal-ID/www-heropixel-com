/*! For license information please see 37a94953.0be94efc.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [6942],
  {
    2192: (e, t, n) => {
      var r = n(3696),
        o = Symbol.for('react.element'),
        i = Symbol.for('react.fragment'),
        s = Object.prototype.hasOwnProperty,
        a =
          r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        c = {key: !0, ref: !0, __self: !0, __source: !0};
      function m(e, t, n) {
        var r,
          i = {},
          m = null,
          l = null;
        for (r in (void 0 !== n && (m = '' + n),
        void 0 !== t.key && (m = '' + t.key),
        void 0 !== t.ref && (l = t.ref),
        t))
          s.call(t, r) && !c.hasOwnProperty(r) && (i[r] = t[r]);
        if (e && e.defaultProps)
          for (r in (t = e.defaultProps)) void 0 === i[r] && (i[r] = t[r]);
        return {
          $$typeof: o,
          type: e,
          key: m,
          ref: l,
          props: i,
          _owner: a.current,
        };
      }
      (t.Fragment = i), (t.jsx = m), (t.jsxs = m);
    },
    2540: (e, t, n) => {
      e.exports = n(2192);
    },
    7961: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => c,
          contentTitle: () => s,
          default: () => d,
          frontMatter: () => i,
          metadata: () => a,
          toc: () => m,
        });
      var r = n(2540),
        o = n(3023);
      const i = {
          id: 'changing-member-roles',
          title: 'Changing a members role',
          description: 'desc',
        },
        s = void 0,
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
          editUrl:
            'https://github.com/Signal-ID/www-heropixel-com/blob/main/website/../docs/changing-member-roles.md',
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
        const {wrapper: t} = {...(0, o.R)(), ...e.components};
        return t ? (0, r.jsx)(t, {...e, children: (0, r.jsx)(l, {...e})}) : l();
      }
    },
    3023: (e, t, n) => {
      n.d(t, {R: () => s, x: () => a});
      var r = n(3696);
      const o = {},
        i = r.createContext(o);
      function s(e) {
        const t = r.useContext(i);
        return r.useMemo(
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
          r.createElement(i.Provider, {value: t}, e.children)
        );
      }
    },
  },
]);

/*! For license information please see af1261ab.91fc1cf5.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [8249],
  {
    2192: (e, t, n) => {
      var r = n(3696),
        i = Symbol.for('react.element'),
        o = Symbol.for('react.fragment'),
        s = Object.prototype.hasOwnProperty,
        a =
          r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        c = {key: !0, ref: !0, __self: !0, __source: !0};
      function l(e, t, n) {
        var r,
          o = {},
          l = null,
          d = null;
        for (r in (void 0 !== n && (l = '' + n),
        void 0 !== t.key && (l = '' + t.key),
        void 0 !== t.ref && (d = t.ref),
        t))
          s.call(t, r) && !c.hasOwnProperty(r) && (o[r] = t[r]);
        if (e && e.defaultProps)
          for (r in (t = e.defaultProps)) void 0 === o[r] && (o[r] = t[r]);
        return {
          $$typeof: i,
          type: e,
          key: l,
          ref: d,
          props: o,
          _owner: a.current,
        };
      }
      (t.Fragment = o), (t.jsx = l), (t.jsxs = l);
    },
    2540: (e, t, n) => {
      e.exports = n(2192);
    },
    9275: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => c,
          contentTitle: () => s,
          default: () => m,
          frontMatter: () => o,
          metadata: () => a,
          toc: () => l,
        });
      var r = n(2540),
        i = n(3023);
      const o = {
          id: 'inviting',
          title: 'Inviting new team members',
          description: 'desc',
        },
        s = void 0,
        a = {
          id: 'inviting',
          title: 'Inviting new team members',
          description: 'desc',
          source: '@site/versioned_docs/version-0.0.1/inviting.md',
          sourceDirName: '.',
          slug: '/inviting',
          permalink: '/docs/inviting',
          draft: !1,
          unlisted: !1,
          editUrl:
            'https://github.com/Signal-ID/www-heropixel-com/blob/main/website/../docs/inviting.md',
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1718839459e3,
          frontMatter: {
            id: 'inviting',
            title: 'Inviting new team members',
            description: 'desc',
          },
          sidebar: 'docs',
          previous: {title: 'Team Member Roles', permalink: '/docs/teams'},
          next: {
            title: 'Changing a members role',
            permalink: '/docs/changing-member-roles',
          },
        },
        c = {},
        l = [];
      function d(e) {
        return (0, r.jsx)(r.Fragment, {});
      }
      function m(e = {}) {
        const {wrapper: t} = {...(0, i.R)(), ...e.components};
        return t ? (0, r.jsx)(t, {...e, children: (0, r.jsx)(d, {...e})}) : d();
      }
    },
    3023: (e, t, n) => {
      n.d(t, {R: () => s, x: () => a});
      var r = n(3696);
      const i = {},
        o = r.createContext(i);
      function s(e) {
        const t = r.useContext(o);
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
              ? e.components(i)
              : e.components || i
            : s(e.components)),
          r.createElement(o.Provider, {value: t}, e.children)
        );
      }
    },
  },
]);

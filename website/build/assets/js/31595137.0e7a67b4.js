/*! For license information please see 31595137.0e7a67b4.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [7469],
  {
    2192: (e, t, r) => {
      var n = r(3696),
        o = Symbol.for('react.element'),
        i = Symbol.for('react.fragment'),
        s = Object.prototype.hasOwnProperty,
        a =
          n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        m = {key: !0, ref: !0, __self: !0, __source: !0};
      function c(e, t, r) {
        var n,
          i = {},
          c = null,
          d = null;
        for (n in (void 0 !== r && (c = '' + r),
        void 0 !== t.key && (c = '' + t.key),
        void 0 !== t.ref && (d = t.ref),
        t))
          s.call(t, n) && !m.hasOwnProperty(n) && (i[n] = t[n]);
        if (e && e.defaultProps)
          for (n in (t = e.defaultProps)) void 0 === i[n] && (i[n] = t[n]);
        return {
          $$typeof: o,
          type: e,
          key: c,
          ref: d,
          props: i,
          _owner: a.current,
        };
      }
      (t.Fragment = i), (t.jsx = c), (t.jsxs = c);
    },
    2540: (e, t, r) => {
      e.exports = r(2192);
    },
    1759: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => m,
          contentTitle: () => s,
          default: () => l,
          frontMatter: () => i,
          metadata: () => a,
          toc: () => c,
        });
      var n = r(2540),
        o = r(3023);
      const i = {
          id: 'removing-a-member',
          title: 'Removing a member',
          description: 'desc',
        },
        s = void 0,
        a = {
          id: 'removing-a-member',
          title: 'Removing a member',
          description: 'desc',
          source: '@site/versioned_docs/version-0.0.1/removing-a-member.md',
          sourceDirName: '.',
          slug: '/removing-a-member',
          permalink: '/docs/removing-a-member',
          draft: !1,
          unlisted: !1,
          editUrl:
            'https://github.com/Signal-ID/www-heropixel-com/blob/main/website/../docs/removing-a-member.md',
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1718839459e3,
          frontMatter: {
            id: 'removing-a-member',
            title: 'Removing a member',
            description: 'desc',
          },
          sidebar: 'docs',
          previous: {
            title: 'Changing a members role',
            permalink: '/docs/changing-member-roles',
          },
          next: {
            title: 'Changing organization ownership',
            permalink: '/docs/changing-ownership',
          },
        },
        m = {},
        c = [];
      function d(e) {
        return (0, n.jsx)(n.Fragment, {});
      }
      function l(e = {}) {
        const {wrapper: t} = {...(0, o.R)(), ...e.components};
        return t ? (0, n.jsx)(t, {...e, children: (0, n.jsx)(d, {...e})}) : d();
      }
    },
    3023: (e, t, r) => {
      r.d(t, {R: () => s, x: () => a});
      var n = r(3696);
      const o = {},
        i = n.createContext(o);
      function s(e) {
        const t = n.useContext(i);
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
          n.createElement(i.Provider, {value: t}, e.children)
        );
      }
    },
  },
]);

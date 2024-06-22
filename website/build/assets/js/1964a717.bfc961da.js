/*! For license information please see 1964a717.bfc961da.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [4151],
  {
    2192: (e, t, n) => {
      var o = n(3696),
        i = Symbol.for('react.element'),
        a = Symbol.for('react.fragment'),
        r = Object.prototype.hasOwnProperty,
        s =
          o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        c = {key: !0, ref: !0, __self: !0, __source: !0};
      function l(e, t, n) {
        var o,
          a = {},
          l = null,
          d = null;
        for (o in (void 0 !== n && (l = '' + n),
        void 0 !== t.key && (l = '' + t.key),
        void 0 !== t.ref && (d = t.ref),
        t))
          r.call(t, o) && !c.hasOwnProperty(o) && (a[o] = t[o]);
        if (e && e.defaultProps)
          for (o in (t = e.defaultProps)) void 0 === a[o] && (a[o] = t[o]);
        return {
          $$typeof: i,
          type: e,
          key: l,
          ref: d,
          props: a,
          _owner: s.current,
        };
      }
      (t.Fragment = a), (t.jsx = l), (t.jsxs = l);
    },
    2540: (e, t, n) => {
      e.exports = n(2192);
    },
    9965: (e, t, n) => {
      n.d(t, {A: () => o});
      const o =
        n.p +
        'assets/images/organization-menu-6d7c7f1dd4b05dfe5cc3fe97b5517d0d.png';
    },
    6721: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => c,
          contentTitle: () => r,
          default: () => g,
          frontMatter: () => a,
          metadata: () => s,
          toc: () => l,
        });
      var o = n(2540),
        i = n(3023);
      const a = {
          id: 'organizations',
          title: 'Organization Overview',
          description: 'desc',
        },
        r = 'Organization and Teams Overview',
        s = {
          id: 'organizations',
          title: 'Organization Overview',
          description: 'desc',
          source: '@site/versioned_docs/version-0.0.1/organizations.md',
          sourceDirName: '.',
          slug: '/organizations',
          permalink: '/docs/organizations',
          draft: !1,
          unlisted: !1,
          editUrl:
            'https://github.com/Signal-ID/www-heropixel-com/blob/main/website/../docs/organizations.md',
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1718839459e3,
          frontMatter: {
            id: 'organizations',
            title: 'Organization Overview',
            description: 'desc',
          },
          sidebar: 'docs',
          previous: {
            title: 'Filtering the Dashboard',
            permalink: '/docs/dashboard',
          },
          next: {title: 'Team Member Roles', permalink: '/docs/teams'},
        },
        c = {},
        l = [];
      function d(e) {
        const t = {
          h1: 'h1',
          img: 'img',
          p: 'p',
          strong: 'strong',
          ...(0, i.R)(),
          ...e.components,
        };
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(t.h1, {
              id: 'organization-and-teams-overview',
              children: 'Organization and Teams Overview',
            }),
            '\n',
            (0, o.jsxs)(t.p, {
              children: [
                (0, o.jsx)(t.img, {
                  src: n(9965).A + '',
                  width: '1112',
                  height: '2248',
                }),
                '\nThe organization is the pinnacle of the dashboard. All Pixels, Leads, User accounts and billing are associated with an organization. Upon invite or registration your base organization was already created. You can see the currently selected org at the top of the left menu. This is to remind you that all menu items you choose are associated with the selected organization.',
              ],
            }),
            '\n',
            (0, o.jsx)(t.p, {
              children:
                "When clicking on the organization dropdown you will see the Org Menu, example shown to the right. It's here that you can get a quick view into your orgs credit usage, or choose any of the settings options to enter into the Organization Settings area.",
            }),
            '\n',
            (0, o.jsx)(t.p, {
              children: (0, o.jsx)(t.strong, {
                children: 'Changing your Organization',
              }),
            }),
            '\n',
            (0, o.jsx)(t.p, {
              children:
                "To change your organization, simply select another org from the list at the bottom of the organization menu. You can create as many organizations as you'd like. Orgs are a way of keeping separate lead lists and being able to associate specific pixels with different billable accounts.",
            }),
            '\n',
            (0, o.jsx)(t.p, {
              children: (0, o.jsx)(t.strong, {
                children: 'Managing your Team Members',
              }),
            }),
            '\n',
            (0, o.jsx)(t.p, {
              children:
                "You are the owner of any organization you create, which will give you the privileges of inviting new team members to join you in the organization. If you're invited to an organization, you'll most likely start out as a member and not a manager of that org. For this reason you may see different options available to you based on which organization you've currently selected.",
            }),
          ],
        });
      }
      function g(e = {}) {
        const {wrapper: t} = {...(0, i.R)(), ...e.components};
        return t
          ? (0, o.jsx)(t, {...e, children: (0, o.jsx)(d, {...e})})
          : d(e);
      }
    },
    3023: (e, t, n) => {
      n.d(t, {R: () => r, x: () => s});
      var o = n(3696);
      const i = {},
        a = o.createContext(i);
      function r(e) {
        const t = o.useContext(a);
        return o.useMemo(
          function () {
            return 'function' == typeof e ? e(t) : {...t, ...e};
          },
          [t, e]
        );
      }
      function s(e) {
        let t;
        return (
          (t = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(i)
              : e.components || i
            : r(e.components)),
          o.createElement(a.Provider, {value: t}, e.children)
        );
      }
    },
  },
]);

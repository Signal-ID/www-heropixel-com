/*! For license information please see b1f5fc95.42271d88.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [6116],
  {
    2192: (e, n, t) => {
      var r = t(3696),
        s = Symbol.for('react.element'),
        o = Symbol.for('react.fragment'),
        i = Object.prototype.hasOwnProperty,
        a =
          r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        l = {key: !0, ref: !0, __self: !0, __source: !0};
      function c(e, n, t) {
        var r,
          o = {},
          c = null,
          d = null;
        for (r in (void 0 !== t && (c = '' + t),
        void 0 !== n.key && (c = '' + n.key),
        void 0 !== n.ref && (d = n.ref),
        n))
          i.call(n, r) && !l.hasOwnProperty(r) && (o[r] = n[r]);
        if (e && e.defaultProps)
          for (r in (n = e.defaultProps)) void 0 === o[r] && (o[r] = n[r]);
        return {
          $$typeof: s,
          type: e,
          key: c,
          ref: d,
          props: o,
          _owner: a.current,
        };
      }
      (n.Fragment = o), (n.jsx = c), (n.jsxs = c);
    },
    2540: (e, n, t) => {
      e.exports = t(2192);
    },
    2271: (e, n, t) => {
      t.r(n),
        t.d(n, {
          assets: () => l,
          contentTitle: () => i,
          default: () => m,
          frontMatter: () => o,
          metadata: () => a,
          toc: () => c,
        });
      var r = t(2540),
        s = t(3023);
      const o = {id: 'teams', title: 'Team Member Roles', description: 'desc'},
        i = 'Team Member Roles',
        a = {
          id: 'teams',
          title: 'Team Member Roles',
          description: 'desc',
          source: '@site/versioned_docs/version-0.0.1/teams.md',
          sourceDirName: '.',
          slug: '/teams',
          permalink: '/docs/teams',
          draft: !1,
          unlisted: !1,
          editUrl:
            'https://github.com/facebook/react-native-website/blob/main/website/../docs/teams.md',
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1718839459e3,
          frontMatter: {
            id: 'teams',
            title: 'Team Member Roles',
            description: 'desc',
          },
          sidebar: 'docs',
          previous: {
            title: 'Organization Overview',
            permalink: '/docs/organizations',
          },
          next: {
            title: 'Inviting new team members',
            permalink: '/docs/inviting',
          },
        },
        l = {},
        c = [
          {value: 'The Owners Role', id: 'the-owners-role', level: 2},
          {value: 'The Members Role', id: 'the-members-role', level: 2},
        ];
      function d(e) {
        const n = {
          h1: 'h1',
          h2: 'h2',
          li: 'li',
          p: 'p',
          strong: 'strong',
          ul: 'ul',
          ...(0, s.R)(),
          ...e.components,
        };
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(n.h1, {
              id: 'team-member-roles',
              children: 'Team Member Roles',
            }),
            '\n',
            (0, r.jsx)(n.p, {
              children:
                "Organizations can have as many members as you'd like and as many owners as you'd like. Once you begin adding multiple members to the organization we suggest you enable Two-Factor Authentication across the organization.",
            }),
            '\n',
            (0, r.jsx)(n.h2, {
              id: 'the-owners-role',
              children: 'The Owners Role',
            }),
            '\n',
            (0, r.jsx)(n.p, {
              children:
                'Owners have equal authority across the organization. Be careful when giving someone ownership capabilities over the organization, as they can then remove you and delete the organization if they choose.',
            }),
            '\n',
            (0, r.jsx)(n.p, {
              children: (0, r.jsx)(n.strong, {
                children: 'Important permissions to remember',
              }),
            }),
            '\n',
            (0, r.jsxs)(n.ul, {
              children: [
                '\n',
                (0, r.jsx)(n.li, {
                  children:
                    'Owners can promote and demote, invite and eject all other owners and members from the organization.',
                }),
                '\n',
                (0, r.jsx)(n.li, {
                  children: 'All owners can see and manage billing.',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsx)(n.h2, {
              id: 'the-members-role',
              children: 'The Members Role',
            }),
            '\n',
            (0, r.jsx)(n.p, {
              children:
                'Members do not share the same permissions that an owner does.',
            }),
            '\n',
            (0, r.jsx)(n.p, {
              children: (0, r.jsx)(n.strong, {children: 'Members Can'}),
            }),
            '\n',
            (0, r.jsxs)(n.ul, {
              children: [
                '\n',
                (0, r.jsx)(n.li, {children: 'Create and edit pixels'}),
                '\n',
                (0, r.jsx)(n.li, {children: 'Download Lead information'}),
                '\n',
                (0, r.jsx)(n.li, {
                  children: 'Create Integrations for managing Leads',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsx)(n.p, {
              children: (0, r.jsx)(n.strong, {children: 'Members Cannot'}),
            }),
            '\n',
            (0, r.jsxs)(n.ul, {
              children: [
                '\n',
                (0, r.jsx)(n.li, {children: 'Invite other members'}),
                '\n',
                (0, r.jsx)(n.li, {
                  children: 'See invoices, or payment methods',
                }),
                '\n',
                (0, r.jsx)(n.li, {children: 'Delete the organization'}),
                '\n',
              ],
            }),
          ],
        });
      }
      function m(e = {}) {
        const {wrapper: n} = {...(0, s.R)(), ...e.components};
        return n
          ? (0, r.jsx)(n, {...e, children: (0, r.jsx)(d, {...e})})
          : d(e);
      }
    },
    3023: (e, n, t) => {
      t.d(n, {R: () => i, x: () => a});
      var r = t(3696);
      const s = {},
        o = r.createContext(s);
      function i(e) {
        const n = r.useContext(o);
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
              ? e.components(s)
              : e.components || s
            : i(e.components)),
          r.createElement(o.Provider, {value: n}, e.children)
        );
      }
    },
  },
]);

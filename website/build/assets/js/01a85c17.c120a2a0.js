'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [8209],
  {
    5168: (e, t, a) => {
      a.d(t, {A: () => v});
      var r = a(3696),
        l = a(1750),
        n = a(9848),
        i = a(3212),
        s = a(9816),
        c = a(7466);
      function m({sidebar: e}) {
        const t = (0, i.l)();
        return (null == e ? void 0 : e.items.length)
          ? 'mobile' === t
            ? r.createElement(c.A, {sidebar: e})
            : r.createElement(s.A, {sidebar: e})
          : null;
      }
      var o = Object.defineProperty,
        b = Object.getOwnPropertySymbols,
        u = Object.prototype.hasOwnProperty,
        d = Object.prototype.propertyIsEnumerable,
        g = (e, t, a) =>
          t in e
            ? o(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        p = (e, t) => {
          for (var a in t || (t = {})) u.call(t, a) && g(e, a, t[a]);
          if (b) for (var a of b(t)) d.call(t, a) && g(e, a, t[a]);
          return e;
        },
        E = (e, t) => {
          var a = {};
          for (var r in e) u.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
          if (null != e && b)
            for (var r of b(e))
              t.indexOf(r) < 0 && d.call(e, r) && (a[r] = e[r]);
          return a;
        };
      function v(e) {
        const t = e,
          {sidebar: a, toc: i, children: s} = t,
          c = E(t, ['sidebar', 'toc', 'children']),
          o = a && a.items.length > 0;
        return r.createElement(
          n.A,
          p({}, c),
          r.createElement(
            'div',
            {className: 'container margin-vert--lg'},
            r.createElement(
              'div',
              {className: 'row'},
              r.createElement(m, {sidebar: a}),
              r.createElement(
                'main',
                {
                  className: (0, l.A)('col', {
                    'col--7': o,
                    'col--9 col--offset-1': !o,
                  }),
                },
                s
              ),
              i && r.createElement('div', {className: 'col col--2'}, i)
            )
          )
        );
      }
    },
    4973: (e, t, a) => {
      a.r(t), a.d(t, {default: () => A});
      var r = a(3696),
        l = a(1750),
        n = a(5830);
      const i = () =>
        (0, n.T)({
          id: 'theme.tags.tagsPageTitle',
          message: 'Tags',
          description: 'The title of the tag list page',
        });
      var s = a(3101),
        c = a(4850),
        m = a(5168),
        o = a(8532),
        b = a(702);
      const u = {tag: 'tag_Nnez'};
      var d = Object.defineProperty,
        g = Object.getOwnPropertySymbols,
        p = Object.prototype.hasOwnProperty,
        E = Object.prototype.propertyIsEnumerable,
        v = (e, t, a) =>
          t in e
            ? d(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        f = (e, t) => {
          for (var a in t || (t = {})) p.call(t, a) && v(e, a, t[a]);
          if (g) for (var a of g(t)) E.call(t, a) && v(e, a, t[a]);
          return e;
        };
      function h({letterEntry: e}) {
        return r.createElement(
          'article',
          null,
          r.createElement(b.A, {as: 'h2', id: e.letter}, e.letter),
          r.createElement(
            'ul',
            {className: 'padding--none'},
            e.tags.map(e =>
              r.createElement(
                'li',
                {key: e.permalink, className: u.tag},
                r.createElement(o.A, f({}, e))
              )
            )
          ),
          r.createElement('hr', null)
        );
      }
      function _({tags: e}) {
        const t = (function (e) {
          const t = {};
          return (
            Object.values(e).forEach(e => {
              const a = (function (e) {
                return e[0].toUpperCase();
              })(e.label);
              null != t[a] || (t[a] = []), t[a].push(e);
            }),
            Object.entries(t)
              .sort(([e], [t]) => e.localeCompare(t))
              .map(([e, t]) => ({
                letter: e,
                tags: t.sort((e, t) => e.label.localeCompare(t.label)),
              }))
          );
        })(e);
        return r.createElement(
          'section',
          {className: 'margin-vert--lg'},
          t.map(e => r.createElement(h, {key: e.letter, letterEntry: e}))
        );
      }
      var k = a(126);
      function A({tags: e, sidebar: t}) {
        const a = i();
        return r.createElement(
          s.e3,
          {
            className: (0, l.A)(
              c.G.wrapper.blogPages,
              c.G.page.blogTagsListPage
            ),
          },
          r.createElement(s.be, {title: a}),
          r.createElement(k.A, {tag: 'blog_tags_list'}),
          r.createElement(
            m.A,
            {sidebar: t},
            r.createElement(b.A, {as: 'h1'}, a),
            r.createElement(_, {tags: e})
          )
        );
      }
    },
    8532: (e, t, a) => {
      a.d(t, {A: () => s});
      var r = a(3696),
        l = a(1750),
        n = a(2915);
      const i = {
        tag: 'tag_zVej',
        tagRegular: 'tagRegular_sFm0',
        tagWithCount: 'tagWithCount_h2kH',
      };
      function s({permalink: e, label: t, count: a}) {
        return r.createElement(
          n.A,
          {
            href: e,
            className: (0, l.A)(i.tag, a ? i.tagWithCount : i.tagRegular),
          },
          t,
          a && r.createElement('span', null, a)
        );
      }
    },
    9816: (e, t, a) => {
      a.d(t, {A: () => c});
      var r = a(3696),
        l = a(1750),
        n = a(2915),
        i = a(5830);
      const s = {
        sidebar: 'sidebar_brwN',
        sidebarHeader: 'sidebarHeader_yTb0',
        sidebarItemTitle: 'sidebarItemTitle_r4Q1',
        sidebarItemList: 'sidebarItemList_QwSx',
        sidebarItem: 'sidebarItem_lnhn',
        sidebarItemLink: 'sidebarItemLink_yNGZ',
        sidebarItemLinkActive: 'sidebarItemLinkActive_oSRm',
      };
      function c({sidebar: e}) {
        let t = null;
        return r.createElement(
          'aside',
          {className: 'col col--3'},
          r.createElement(
            'nav',
            {
              className: (0, l.A)(s.sidebar, 'thin-scrollbar'),
              'aria-label': (0, i.T)({
                id: 'theme.blog.sidebar.navAriaLabel',
                message: 'Blog recent posts navigation',
                description:
                  'The ARIA label for recent posts in the blog sidebar',
              }),
            },
            r.createElement(
              'div',
              {className: (0, l.A)(s.sidebarHeader, 'margin-bottom--md')},
              e.title
            ),
            r.createElement(
              'ul',
              {className: (0, l.A)(s.sidebarItemList, 'clean-list')},
              e.items.map(e => {
                const a = e.permalink.split('/')[2],
                  l =
                    t !== a &&
                    r.createElement('h5', {className: s.sidebarItemTitle}, a);
                return (
                  (t = a),
                  r.createElement(
                    r.Fragment,
                    null,
                    l,
                    r.createElement(
                      'li',
                      {key: e.permalink, className: s.sidebarItem},
                      r.createElement(
                        n.A,
                        {
                          isNavLink: !0,
                          to: e.permalink,
                          className: s.sidebarItemLink,
                          activeClassName: s.sidebarItemLinkActive,
                        },
                        e.title
                      )
                    )
                  )
                );
              })
            )
          )
        );
      }
    },
    7466: (e, t, a) => {
      a.d(t, {A: () => c});
      var r = a(3696),
        l = a(2915),
        n = a(9639);
      const i = {sidebarItemTitle: 'sidebarItemTitle_z3uL'};
      function s({sidebar: e}) {
        let t = null;
        return r.createElement(
          'ul',
          {className: 'menu__list blog-menu__list'},
          e.items.map(e => {
            const a = e.permalink.split('/')[2],
              n =
                t !== a &&
                r.createElement('h5', {className: i.sidebarItemTitle}, a);
            return (
              (t = a),
              r.createElement(
                r.Fragment,
                null,
                n,
                r.createElement(
                  'li',
                  {key: e.permalink, className: 'menu__list-item'},
                  r.createElement(
                    l.A,
                    {
                      isNavLink: !0,
                      to: e.permalink,
                      className: 'menu__link',
                      activeClassName: 'menu__link--active',
                    },
                    e.title
                  )
                )
              )
            );
          })
        );
      }
      function c(e) {
        return r.createElement(n.GX, {component: s, props: e});
      }
    },
  },
]);

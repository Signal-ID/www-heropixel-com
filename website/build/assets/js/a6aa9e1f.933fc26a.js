'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [7643],
  {
    1824: (e, t, r) => {
      r.r(t), r.d(t, {default: () => O});
      var a = r(3696),
        n = r(1750),
        i = r(5067),
        l = r(3101),
        o = r(4850),
        s = r(5168),
        c = r(9882),
        m = r(126),
        d = r(2311),
        u = r(2201),
        p = r(2602);
      function b(e) {
        const t = (0, p.k)(e);
        return a.createElement(
          u.A,
          null,
          a.createElement(
            'script',
            {type: 'application/ld+json'},
            JSON.stringify(t)
          )
        );
      }
      var g = Object.defineProperty,
        f = Object.getOwnPropertySymbols,
        h = Object.prototype.hasOwnProperty,
        E = Object.prototype.propertyIsEnumerable,
        y = (e, t, r) =>
          t in e
            ? g(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        v = (e, t) => {
          for (var r in t || (t = {})) h.call(t, r) && y(e, r, t[r]);
          if (f) for (var r of f(t)) E.call(t, r) && y(e, r, t[r]);
          return e;
        };
      function k(e) {
        const {metadata: t} = e,
          {
            siteConfig: {title: r},
          } = (0, i.A)(),
          {blogDescription: n, blogTitle: o, permalink: s} = t,
          c = '/' === s ? r : o;
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(l.be, {title: c, description: n}),
          a.createElement(m.A, {tag: 'blog_posts_list'})
        );
      }
      function A(e) {
        const {metadata: t, items: r, sidebar: n} = e;
        return a.createElement(
          s.A,
          {sidebar: n},
          a.createElement(d.A, {items: r}),
          a.createElement(c.A, {metadata: t})
        );
      }
      function O(e) {
        return a.createElement(
          l.e3,
          {className: (0, n.A)(o.G.wrapper.blogPages, o.G.page.blogListPage)},
          a.createElement(k, v({}, e)),
          a.createElement(b, v({}, e)),
          a.createElement(A, v({}, e))
        );
      }
    },
    9882: (e, t, r) => {
      r.d(t, {A: () => l});
      var a = r(3696),
        n = r(5830),
        i = r(8455);
      function l(e) {
        const {metadata: t} = e,
          {previousPage: r, nextPage: l} = t;
        return a.createElement(
          'nav',
          {
            className: 'pagination-nav',
            'aria-label': (0, n.T)({
              id: 'theme.blog.paginator.navAriaLabel',
              message: 'Blog list page navigation',
              description: 'The ARIA label for the blog pagination',
            }),
          },
          r &&
            a.createElement(i.A, {
              permalink: r,
              title: a.createElement(
                n.A,
                {
                  id: 'theme.blog.paginator.newerEntries',
                  description:
                    'The label used to navigate to the newer blog posts page (previous page)',
                },
                'Newer Entries'
              ),
            }),
          l &&
            a.createElement(i.A, {
              permalink: l,
              title: a.createElement(
                n.A,
                {
                  id: 'theme.blog.paginator.olderEntries',
                  description:
                    'The label used to navigate to the older blog posts page (next page)',
                },
                'Older Entries'
              ),
              isNext: !0,
            })
        );
      }
    },
    2311: (e, t, r) => {
      r.d(t, {A: () => l});
      var a = r(3696),
        n = r(5718),
        i = r(2587);
      function l({items: e, component: t = i.A}) {
        return a.createElement(
          a.Fragment,
          null,
          e.map(({content: e}) =>
            a.createElement(
              n.i,
              {key: e.metadata.permalink, content: e},
              a.createElement(t, null, a.createElement(e, null))
            )
          )
        );
      }
    },
    2602: (e, t, r) => {
      r.d(t, {k: () => y, J: () => v});
      var a = r(9568),
        n = r(5067),
        i = r(5532);
      var l = r(5718),
        o = Object.defineProperty,
        s = Object.defineProperties,
        c = Object.getOwnPropertyDescriptors,
        m = Object.getOwnPropertySymbols,
        d = Object.prototype.hasOwnProperty,
        u = Object.prototype.propertyIsEnumerable,
        p = (e, t, r) =>
          t in e
            ? o(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        b = (e, t) => {
          for (var r in t || (t = {})) d.call(t, r) && p(e, r, t[r]);
          if (m) for (var r of m(t)) u.call(t, r) && p(e, r, t[r]);
          return e;
        },
        g = (e, t) => s(e, c(t));
      const f = e => new Date(e).toISOString();
      function h(e) {
        const t = e.map(k);
        return {author: 1 === t.length ? t[0] : t};
      }
      function E(e, t, r) {
        return e
          ? {
              image: A({
                imageUrl: t(e, {absolute: !0}),
                caption: `title image for the blog post: ${r}`,
              }),
            }
          : {};
      }
      function y(e) {
        const {siteConfig: t} = (0, n.A)(),
          {withBaseUrl: r} = (0, a.h)(),
          {
            metadata: {blogDescription: i, blogTitle: l, permalink: o},
          } = e,
          s = `${t.url}${o}`;
        return {
          '@context': 'https://schema.org',
          '@type': 'Blog',
          '@id': s,
          mainEntityOfPage: s,
          headline: l,
          description: i,
          blogPost: e.items.map(e =>
            (function (e, t, r) {
              var a, n;
              const {assets: i, frontMatter: l, metadata: o} = e,
                {date: s, title: c, description: m, lastUpdatedAt: d} = o,
                u = null != (a = i.image) ? a : l.image,
                p = null != (n = l.keywords) ? n : [],
                g = `${t.url}${o.permalink}`,
                y = d ? f(d) : void 0;
              return b(
                b(
                  b(
                    b(
                      {
                        '@type': 'BlogPosting',
                        '@id': g,
                        mainEntityOfPage: g,
                        url: g,
                        headline: c,
                        name: c,
                        description: m,
                        datePublished: s,
                      },
                      y ? {dateModified: y} : {}
                    ),
                    h(o.authors)
                  ),
                  E(u, r, c)
                ),
                p ? {keywords: p} : {}
              );
            })(e.content, t, r)
          ),
        };
      }
      function v() {
        var e, t;
        const r = (function () {
            var e;
            const t = (0, i.A)(),
              r =
                null == (e = null == t ? void 0 : t.data)
                  ? void 0
                  : e.blogMetadata;
            if (!r)
              throw new Error(
                "useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context"
              );
            return r;
          })(),
          {assets: o, metadata: s} = (0, l.e)(),
          {siteConfig: c} = (0, n.A)(),
          {withBaseUrl: m} = (0, a.h)(),
          {
            date: d,
            title: u,
            description: p,
            frontMatter: y,
            lastUpdatedAt: v,
          } = s,
          k = null != (e = o.image) ? e : y.image,
          A = null != (t = y.keywords) ? t : [],
          O = v ? f(v) : void 0,
          w = `${c.url}${s.permalink}`;
        return g(
          b(
            b(
              b(
                b(
                  {
                    '@context': 'https://schema.org',
                    '@type': 'BlogPosting',
                    '@id': w,
                    mainEntityOfPage: w,
                    url: w,
                    headline: u,
                    name: u,
                    description: p,
                    datePublished: d,
                  },
                  O ? {dateModified: O} : {}
                ),
                h(s.authors)
              ),
              E(k, m, u)
            ),
            A ? {keywords: A} : {}
          ),
          {
            isPartOf: {
              '@type': 'Blog',
              '@id': `${c.url}${r.blogBasePath}`,
              name: r.blogTitle,
            },
          }
        );
      }
      function k(e) {
        return b(
          b(
            b(
              b(
                b({'@type': 'Person'}, e.name ? {name: e.name} : {}),
                e.title ? {description: e.title} : {}
              ),
              e.url ? {url: e.url} : {}
            ),
            e.email ? {email: e.email} : {}
          ),
          e.imageURL ? {image: e.imageURL} : {}
        );
      }
      function A({imageUrl: e, caption: t}) {
        return {
          '@type': 'ImageObject',
          '@id': e,
          url: e,
          contentUrl: e,
          caption: t,
        };
      }
    },
    9816: (e, t, r) => {
      r.d(t, {A: () => s});
      var a = r(3696),
        n = r(1750),
        i = r(2915),
        l = r(5830);
      const o = {
        sidebar: 'sidebar_brwN',
        sidebarHeader: 'sidebarHeader_yTb0',
        sidebarItemTitle: 'sidebarItemTitle_r4Q1',
        sidebarItemList: 'sidebarItemList_QwSx',
        sidebarItem: 'sidebarItem_lnhn',
        sidebarItemLink: 'sidebarItemLink_yNGZ',
        sidebarItemLinkActive: 'sidebarItemLinkActive_oSRm',
      };
      function s({sidebar: e}) {
        let t = null;
        return a.createElement(
          'aside',
          {className: 'col col--3'},
          a.createElement(
            'nav',
            {
              className: (0, n.A)(o.sidebar, 'thin-scrollbar'),
              'aria-label': (0, l.T)({
                id: 'theme.blog.sidebar.navAriaLabel',
                message: 'Blog recent posts navigation',
                description:
                  'The ARIA label for recent posts in the blog sidebar',
              }),
            },
            a.createElement(
              'div',
              {className: (0, n.A)(o.sidebarHeader, 'margin-bottom--md')},
              e.title
            ),
            a.createElement(
              'ul',
              {className: (0, n.A)(o.sidebarItemList, 'clean-list')},
              e.items.map(e => {
                const r = e.permalink.split('/')[2],
                  n =
                    t !== r &&
                    a.createElement('h5', {className: o.sidebarItemTitle}, r);
                return (
                  (t = r),
                  a.createElement(
                    a.Fragment,
                    null,
                    n,
                    a.createElement(
                      'li',
                      {key: e.permalink, className: o.sidebarItem},
                      a.createElement(
                        i.A,
                        {
                          isNavLink: !0,
                          to: e.permalink,
                          className: o.sidebarItemLink,
                          activeClassName: o.sidebarItemLinkActive,
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
    7466: (e, t, r) => {
      r.d(t, {A: () => s});
      var a = r(3696),
        n = r(2915),
        i = r(9639);
      const l = {sidebarItemTitle: 'sidebarItemTitle_z3uL'};
      function o({sidebar: e}) {
        let t = null;
        return a.createElement(
          'ul',
          {className: 'menu__list blog-menu__list'},
          e.items.map(e => {
            const r = e.permalink.split('/')[2],
              i =
                t !== r &&
                a.createElement('h5', {className: l.sidebarItemTitle}, r);
            return (
              (t = r),
              a.createElement(
                a.Fragment,
                null,
                i,
                a.createElement(
                  'li',
                  {key: e.permalink, className: 'menu__list-item'},
                  a.createElement(
                    n.A,
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
      function s(e) {
        return a.createElement(i.GX, {component: o, props: e});
      }
    },
    3151: (e, t, r) => {
      r.d(t, {A: () => w});
      var a = r(3696),
        n = r(3429),
        i = r(2915),
        l = Object.defineProperty,
        o = Object.defineProperties,
        s = Object.getOwnPropertyDescriptors,
        c = Object.getOwnPropertySymbols,
        m = Object.prototype.hasOwnProperty,
        d = Object.prototype.propertyIsEnumerable,
        u = (e, t, r) =>
          t in e
            ? l(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        p = (e, t) => {
          for (var r in t || (t = {})) m.call(t, r) && u(e, r, t[r]);
          if (c) for (var r of c(t)) d.call(t, r) && u(e, r, t[r]);
          return e;
        },
        b = (e, t) => o(e, s(t));
      const g = 'md ';
      function f(e) {
        return 'string' == typeof e.children && e.children.startsWith(g)
          ? a.createElement(
              h,
              b(p({}, e), {children: e.children.slice(g.length)})
            )
          : a.createElement('code', p({}, e));
      }
      const h = a.memo(function (e) {
        const t = (function (e) {
          const t = new RegExp(
              '(?<link>\\[(?<text>[^\\]]+)?\\]\\((?<url>[^)]+)\\))',
              'g'
            ),
            r = /\[[^\]]+?\]\([^)]+\)/g,
            n = [];
          let l;
          for (; null !== (l = t.exec(e)); ) {
            const e = l.groups.link,
              t = l.groups.text,
              r = l.groups.url;
            if (r.endsWith('.md') || r.endsWith('.mdx'))
              throw new Error(
                "Markdown links inside code blocks can't link using a filename extensions. Problematic link: " +
                  e
              );
            n.push({link: e, text: t, url: r});
          }
          return e
            .split(r)
            .map((e, t) =>
              a.createElement(
                a.Fragment,
                {key: t},
                e,
                n[t] ? a.createElement(i.A, {to: n[t].url}, n[t].text) : null
              )
            );
        })(e.children);
        return a.createElement('code', b(p({}, e), {children: t}));
      });
      var E = Object.defineProperty,
        y = Object.getOwnPropertySymbols,
        v = Object.prototype.hasOwnProperty,
        k = Object.prototype.propertyIsEnumerable,
        A = (e, t, r) =>
          t in e
            ? E(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        O = (e, t) => {
          for (var r in t || (t = {})) v.call(t, r) && A(e, r, t[r]);
          if (y) for (var r of y(t)) k.call(t, r) && A(e, r, t[r]);
          return e;
        };
      function w(e) {
        return a.Children.toArray(e.children).every(
          e => 'string' == typeof e && !e.includes('\n')
        )
          ? a.createElement(f, O({}, e))
          : a.createElement(n.A, O({}, e));
      }
    },
  },
]);

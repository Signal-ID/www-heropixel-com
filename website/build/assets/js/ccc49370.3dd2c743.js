'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [3249],
  {
    8032: (e, t, n) => {
      n.r(t), n.d(t, {default: () => x});
      var r = n(3696),
        a = n(1750),
        l = n(3101),
        i = n(4850),
        o = n(5718),
        c = n(5168),
        s = n(2587),
        m = n(5830),
        u = n(8455),
        d = Object.defineProperty,
        p = Object.defineProperties,
        b = Object.getOwnPropertyDescriptors,
        f = Object.getOwnPropertySymbols,
        g = Object.prototype.hasOwnProperty,
        v = Object.prototype.propertyIsEnumerable,
        h = (e, t, n) =>
          t in e
            ? d(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        y = (e, t) => {
          for (var n in t || (t = {})) g.call(t, n) && h(e, n, t[n]);
          if (f) for (var n of f(t)) v.call(t, n) && h(e, n, t[n]);
          return e;
        },
        O = (e, t) => p(e, b(t));
      function E(e) {
        const {nextItem: t, prevItem: n} = e;
        return r.createElement(
          'nav',
          {
            className: 'pagination-nav docusaurus-mt-lg',
            'aria-label': (0, m.T)({
              id: 'theme.blog.post.paginator.navAriaLabel',
              message: 'Blog post page navigation',
              description: 'The ARIA label for the blog posts pagination',
            }),
          },
          n &&
            r.createElement(
              u.A,
              O(y({}, n), {
                subLabel: r.createElement(
                  m.A,
                  {
                    id: 'theme.blog.post.paginator.newerPost',
                    description:
                      'The blog post button label to navigate to the newer/previous post',
                  },
                  'Newer Post'
                ),
              })
            ),
          t &&
            r.createElement(
              u.A,
              O(y({}, t), {
                subLabel: r.createElement(
                  m.A,
                  {
                    id: 'theme.blog.post.paginator.olderPost',
                    description:
                      'The blog post button label to navigate to the older/next post',
                  },
                  'Older Post'
                ),
                isNext: !0,
              })
            )
        );
      }
      function k() {
        var e;
        const {assets: t, metadata: n} = (0, o.e)(),
          {
            title: a,
            description: i,
            date: c,
            tags: s,
            authors: m,
            frontMatter: u,
          } = n,
          {keywords: d} = u,
          p = null != (e = t.image) ? e : u.image;
        return r.createElement(
          l.be,
          {title: a, description: i, keywords: d, image: p},
          r.createElement('meta', {property: 'og:type', content: 'article'}),
          r.createElement('meta', {
            property: 'article:published_time',
            content: c,
          }),
          m.some(e => e.url) &&
            r.createElement('meta', {
              property: 'article:author',
              content: m
                .map(e => e.url)
                .filter(Boolean)
                .join(','),
            }),
          s.length > 0 &&
            r.createElement('meta', {
              property: 'article:tag',
              content: s.map(e => e.label).join(','),
            })
        );
      }
      var w = n(2201),
        P = n(2602);
      function A() {
        const e = (0, P.J)();
        return r.createElement(
          w.A,
          null,
          r.createElement(
            'script',
            {type: 'application/ld+json'},
            JSON.stringify(e)
          )
        );
      }
      var L = n(3854),
        N = n(326);
      function j({sidebar: e, children: t}) {
        const {metadata: n, toc: a} = (0, o.e)(),
          {nextItem: l, prevItem: i, frontMatter: m, unlisted: u} = n,
          {
            hide_table_of_contents: d,
            toc_min_heading_level: p,
            toc_max_heading_level: b,
          } = m;
        return r.createElement(
          c.A,
          {
            sidebar: e,
            toc:
              !d && a.length > 0
                ? r.createElement(L.A, {
                    toc: a,
                    minHeadingLevel: p,
                    maxHeadingLevel: b,
                  })
                : void 0,
          },
          u && r.createElement(N.A, null),
          r.createElement(s.A, null, t),
          (l || i) && r.createElement(E, {nextItem: l, prevItem: i})
        );
      }
      function x(e) {
        const t = e.content;
        return r.createElement(
          o.i,
          {content: e.content, isBlogPostPage: !0},
          r.createElement(
            l.e3,
            {className: (0, a.A)(i.G.wrapper.blogPages, i.G.page.blogPostPage)},
            r.createElement(k, null),
            r.createElement(A, null),
            r.createElement(j, {sidebar: e.sidebar}, r.createElement(t, null))
          )
        );
      }
    },
    3854: (e, t, n) => {
      n.d(t, {A: () => y});
      var r = n(3696),
        a = n(1750),
        l = n(4493);
      const i = {
        tableOfContents: 'tableOfContents_bqdL',
        docItemContainer: 'docItemContainer_F8PC',
      };
      var o = Object.defineProperty,
        c = Object.defineProperties,
        s = Object.getOwnPropertyDescriptors,
        m = Object.getOwnPropertySymbols,
        u = Object.prototype.hasOwnProperty,
        d = Object.prototype.propertyIsEnumerable,
        p = (e, t, n) =>
          t in e
            ? o(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        b = (e, t) => {
          for (var n in t || (t = {})) u.call(t, n) && p(e, n, t[n]);
          if (m) for (var n of m(t)) d.call(t, n) && p(e, n, t[n]);
          return e;
        },
        f = (e, t) => c(e, s(t)),
        g = (e, t) => {
          var n = {};
          for (var r in e) u.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
          if (null != e && m)
            for (var r of m(e))
              t.indexOf(r) < 0 && d.call(e, r) && (n[r] = e[r]);
          return n;
        };
      const v = 'table-of-contents__link toc-highlight',
        h = 'table-of-contents__link--active';
      function y(e) {
        var t = e,
          {className: n} = t,
          o = g(t, ['className']);
        return r.createElement(
          'div',
          {className: (0, a.A)(i.tableOfContents, 'thin-scrollbar', n)},
          r.createElement(
            l.A,
            f(b({}, o), {linkClassName: v, linkActiveClassName: h})
          )
        );
      }
    },
    4493: (e, t, n) => {
      n.d(t, {A: () => I});
      var r = n(3696),
        a = n(17),
        l = Object.defineProperty,
        i = Object.defineProperties,
        o = Object.getOwnPropertyDescriptors,
        c = Object.getOwnPropertySymbols,
        s = Object.prototype.hasOwnProperty,
        m = Object.prototype.propertyIsEnumerable,
        u = (e, t, n) =>
          t in e
            ? l(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        d = (e, t) => {
          for (var n in t || (t = {})) s.call(t, n) && u(e, n, t[n]);
          if (c) for (var n of c(t)) m.call(t, n) && u(e, n, t[n]);
          return e;
        },
        p = (e, t) => i(e, o(t)),
        b = (e, t) => {
          var n = {};
          for (var r in e) s.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
          if (null != e && c)
            for (var r of c(e))
              t.indexOf(r) < 0 && m.call(e, r) && (n[r] = e[r]);
          return n;
        };
      function f(e) {
        const t = e.map(e => p(d({}, e), {parentIndex: -1, children: []})),
          n = Array(7).fill(-1);
        t.forEach((e, t) => {
          const r = n.slice(2, e.level);
          (e.parentIndex = Math.max(...r)), (n[e.level] = t);
        });
        const r = [];
        return (
          t.forEach(e => {
            const n = e,
              {parentIndex: a} = n,
              l = b(n, ['parentIndex']);
            a >= 0 ? t[a].children.push(l) : r.push(l);
          }),
          r
        );
      }
      function g({toc: e, minHeadingLevel: t, maxHeadingLevel: n}) {
        return e.flatMap(e => {
          const r = g({
            toc: e.children,
            minHeadingLevel: t,
            maxHeadingLevel: n,
          });
          return (function (e) {
            return e.level >= t && e.level <= n;
          })(e)
            ? [p(d({}, e), {children: r})]
            : r;
        });
      }
      function v(e) {
        const t = e.getBoundingClientRect();
        return t.top === t.bottom ? v(e.parentNode) : t;
      }
      function h(e, {anchorTopOffset: t}) {
        var n, r;
        const a = e.find(e => v(e).top >= t);
        if (a) {
          return (function (e) {
            return e.top > 0 && e.bottom < window.innerHeight / 2;
          })(v(a))
            ? a
            : null != (n = e[e.indexOf(a) - 1])
            ? n
            : null;
        }
        return null != (r = e[e.length - 1]) ? r : null;
      }
      function y() {
        const e = (0, r.useRef)(0),
          {
            navbar: {hideOnScroll: t},
          } = (0, a.p)();
        return (
          (0, r.useEffect)(() => {
            e.current = t ? 0 : document.querySelector('.navbar').clientHeight;
          }, [t]),
          e
        );
      }
      function O(e) {
        const t = (0, r.useRef)(void 0),
          n = y();
        (0, r.useEffect)(() => {
          if (!e) return () => {};
          const {
            linkClassName: r,
            linkActiveClassName: a,
            minHeadingLevel: l,
            maxHeadingLevel: i,
          } = e;
          function o() {
            const e = (function (e) {
                return Array.from(document.getElementsByClassName(e));
              })(r),
              o = (function ({minHeadingLevel: e, maxHeadingLevel: t}) {
                const n = [];
                for (let r = e; r <= t; r += 1) n.push(`h${r}.anchor`);
                return Array.from(document.querySelectorAll(n.join()));
              })({minHeadingLevel: l, maxHeadingLevel: i}),
              c = h(o, {anchorTopOffset: n.current}),
              s = e.find(
                e =>
                  c &&
                  c.id ===
                    (function (e) {
                      return decodeURIComponent(
                        e.href.substring(e.href.indexOf('#') + 1)
                      );
                    })(e)
              );
            e.forEach(e => {
              !(function (e, n) {
                n
                  ? (t.current &&
                      t.current !== e &&
                      t.current.classList.remove(a),
                    e.classList.add(a),
                    (t.current = e))
                  : e.classList.remove(a);
              })(e, e === s);
            });
          }
          return (
            document.addEventListener('scroll', o),
            document.addEventListener('resize', o),
            o(),
            () => {
              document.removeEventListener('scroll', o),
                document.removeEventListener('resize', o);
            }
          );
        }, [e, n]);
      }
      var E = n(2915);
      const k = r.memo(function e({
        toc: t,
        className: n,
        linkClassName: a,
        isChild: l,
      }) {
        return t.length
          ? r.createElement(
              'ul',
              {className: l ? void 0 : n},
              t.map(t =>
                r.createElement(
                  'li',
                  {key: t.id},
                  r.createElement(E.A, {
                    to: `#${t.id}`,
                    className: null != a ? a : void 0,
                    dangerouslySetInnerHTML: {__html: t.value},
                  }),
                  r.createElement(e, {
                    isChild: !0,
                    toc: t.children,
                    className: n,
                    linkClassName: a,
                  })
                )
              )
            )
          : null;
      });
      var w = Object.defineProperty,
        P = Object.getOwnPropertySymbols,
        A = Object.prototype.hasOwnProperty,
        L = Object.prototype.propertyIsEnumerable,
        N = (e, t, n) =>
          t in e
            ? w(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        j = (e, t) => {
          for (var n in t || (t = {})) A.call(t, n) && N(e, n, t[n]);
          if (P) for (var n of P(t)) L.call(t, n) && N(e, n, t[n]);
          return e;
        },
        x = (e, t) => {
          var n = {};
          for (var r in e) A.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
          if (null != e && P)
            for (var r of P(e))
              t.indexOf(r) < 0 && L.call(e, r) && (n[r] = e[r]);
          return n;
        };
      function I(e) {
        var t = e,
          {
            toc: n,
            className: l = 'table-of-contents table-of-contents__left-border',
            linkClassName: i = 'table-of-contents__link',
            linkActiveClassName: o,
            minHeadingLevel: c,
            maxHeadingLevel: s,
          } = t,
          m = x(t, [
            'toc',
            'className',
            'linkClassName',
            'linkActiveClassName',
            'minHeadingLevel',
            'maxHeadingLevel',
          ]);
        const u = (0, a.p)(),
          d = null != c ? c : u.tableOfContents.minHeadingLevel,
          p = null != s ? s : u.tableOfContents.maxHeadingLevel,
          b = (function ({toc: e, minHeadingLevel: t, maxHeadingLevel: n}) {
            return (0, r.useMemo)(
              () => g({toc: f(e), minHeadingLevel: t, maxHeadingLevel: n}),
              [e, t, n]
            );
          })({toc: n, minHeadingLevel: d, maxHeadingLevel: p});
        return (
          O(
            (0, r.useMemo)(() => {
              if (i && o)
                return {
                  linkClassName: i,
                  linkActiveClassName: o,
                  minHeadingLevel: d,
                  maxHeadingLevel: p,
                };
            }, [i, o, d, p])
          ),
          r.createElement(k, j({toc: b, className: l, linkClassName: i}, m))
        );
      }
    },
    326: (e, t, n) => {
      n.d(t, {A: () => y});
      var r = n(3696),
        a = n(1750),
        l = n(5830),
        i = n(2201);
      function o() {
        return r.createElement(
          l.A,
          {
            id: 'theme.unlistedContent.title',
            description: 'The unlisted content banner title',
          },
          'Unlisted page'
        );
      }
      function c() {
        return r.createElement(
          l.A,
          {
            id: 'theme.unlistedContent.message',
            description: 'The unlisted content banner message',
          },
          'This page is unlisted. Search engines will not index it, and only users having a direct link can access it.'
        );
      }
      function s() {
        return r.createElement(
          i.A,
          null,
          r.createElement('meta', {
            name: 'robots',
            content: 'noindex, nofollow',
          })
        );
      }
      var m = n(4850),
        u = n(8670),
        d = Object.defineProperty,
        p = Object.getOwnPropertySymbols,
        b = Object.prototype.hasOwnProperty,
        f = Object.prototype.propertyIsEnumerable,
        g = (e, t, n) =>
          t in e
            ? d(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        v = (e, t) => {
          for (var n in t || (t = {})) b.call(t, n) && g(e, n, t[n]);
          if (p) for (var n of p(t)) f.call(t, n) && g(e, n, t[n]);
          return e;
        };
      function h({className: e}) {
        return r.createElement(
          u.A,
          {
            type: 'caution',
            title: r.createElement(o, null),
            className: (0, a.A)(e, m.G.common.unlistedBanner),
          },
          r.createElement(c, null)
        );
      }
      function y(e) {
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(s, null),
          r.createElement(h, v({}, e))
        );
      }
    },
    2602: (e, t, n) => {
      n.d(t, {k: () => y, J: () => O});
      var r = n(9568),
        a = n(5067),
        l = n(5532);
      var i = n(5718),
        o = Object.defineProperty,
        c = Object.defineProperties,
        s = Object.getOwnPropertyDescriptors,
        m = Object.getOwnPropertySymbols,
        u = Object.prototype.hasOwnProperty,
        d = Object.prototype.propertyIsEnumerable,
        p = (e, t, n) =>
          t in e
            ? o(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        b = (e, t) => {
          for (var n in t || (t = {})) u.call(t, n) && p(e, n, t[n]);
          if (m) for (var n of m(t)) d.call(t, n) && p(e, n, t[n]);
          return e;
        },
        f = (e, t) => c(e, s(t));
      const g = e => new Date(e).toISOString();
      function v(e) {
        const t = e.map(E);
        return {author: 1 === t.length ? t[0] : t};
      }
      function h(e, t, n) {
        return e
          ? {
              image: k({
                imageUrl: t(e, {absolute: !0}),
                caption: `title image for the blog post: ${n}`,
              }),
            }
          : {};
      }
      function y(e) {
        const {siteConfig: t} = (0, a.A)(),
          {withBaseUrl: n} = (0, r.h)(),
          {
            metadata: {blogDescription: l, blogTitle: i, permalink: o},
          } = e,
          c = `${t.url}${o}`;
        return {
          '@context': 'https://schema.org',
          '@type': 'Blog',
          '@id': c,
          mainEntityOfPage: c,
          headline: i,
          description: l,
          blogPost: e.items.map(e =>
            (function (e, t, n) {
              var r, a;
              const {assets: l, frontMatter: i, metadata: o} = e,
                {date: c, title: s, description: m, lastUpdatedAt: u} = o,
                d = null != (r = l.image) ? r : i.image,
                p = null != (a = i.keywords) ? a : [],
                f = `${t.url}${o.permalink}`,
                y = u ? g(u) : void 0;
              return b(
                b(
                  b(
                    b(
                      {
                        '@type': 'BlogPosting',
                        '@id': f,
                        mainEntityOfPage: f,
                        url: f,
                        headline: s,
                        name: s,
                        description: m,
                        datePublished: c,
                      },
                      y ? {dateModified: y} : {}
                    ),
                    v(o.authors)
                  ),
                  h(d, n, s)
                ),
                p ? {keywords: p} : {}
              );
            })(e.content, t, n)
          ),
        };
      }
      function O() {
        var e, t;
        const n = (function () {
            var e;
            const t = (0, l.A)(),
              n =
                null == (e = null == t ? void 0 : t.data)
                  ? void 0
                  : e.blogMetadata;
            if (!n)
              throw new Error(
                "useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context"
              );
            return n;
          })(),
          {assets: o, metadata: c} = (0, i.e)(),
          {siteConfig: s} = (0, a.A)(),
          {withBaseUrl: m} = (0, r.h)(),
          {
            date: u,
            title: d,
            description: p,
            frontMatter: y,
            lastUpdatedAt: O,
          } = c,
          E = null != (e = o.image) ? e : y.image,
          k = null != (t = y.keywords) ? t : [],
          w = O ? g(O) : void 0,
          P = `${s.url}${c.permalink}`;
        return f(
          b(
            b(
              b(
                b(
                  {
                    '@context': 'https://schema.org',
                    '@type': 'BlogPosting',
                    '@id': P,
                    mainEntityOfPage: P,
                    url: P,
                    headline: d,
                    name: d,
                    description: p,
                    datePublished: u,
                  },
                  w ? {dateModified: w} : {}
                ),
                v(c.authors)
              ),
              h(E, m, d)
            ),
            k ? {keywords: k} : {}
          ),
          {
            isPartOf: {
              '@type': 'Blog',
              '@id': `${s.url}${n.blogBasePath}`,
              name: n.blogTitle,
            },
          }
        );
      }
      function E(e) {
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
      function k({imageUrl: e, caption: t}) {
        return {
          '@type': 'ImageObject',
          '@id': e,
          url: e,
          contentUrl: e,
          caption: t,
        };
      }
    },
    9816: (e, t, n) => {
      n.d(t, {A: () => c});
      var r = n(3696),
        a = n(1750),
        l = n(2915),
        i = n(5830);
      const o = {
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
              className: (0, a.A)(o.sidebar, 'thin-scrollbar'),
              'aria-label': (0, i.T)({
                id: 'theme.blog.sidebar.navAriaLabel',
                message: 'Blog recent posts navigation',
                description:
                  'The ARIA label for recent posts in the blog sidebar',
              }),
            },
            r.createElement(
              'div',
              {className: (0, a.A)(o.sidebarHeader, 'margin-bottom--md')},
              e.title
            ),
            r.createElement(
              'ul',
              {className: (0, a.A)(o.sidebarItemList, 'clean-list')},
              e.items.map(e => {
                const n = e.permalink.split('/')[2],
                  a =
                    t !== n &&
                    r.createElement('h5', {className: o.sidebarItemTitle}, n);
                return (
                  (t = n),
                  r.createElement(
                    r.Fragment,
                    null,
                    a,
                    r.createElement(
                      'li',
                      {key: e.permalink, className: o.sidebarItem},
                      r.createElement(
                        l.A,
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
    7466: (e, t, n) => {
      n.d(t, {A: () => c});
      var r = n(3696),
        a = n(2915),
        l = n(9639);
      const i = {sidebarItemTitle: 'sidebarItemTitle_z3uL'};
      function o({sidebar: e}) {
        let t = null;
        return r.createElement(
          'ul',
          {className: 'menu__list blog-menu__list'},
          e.items.map(e => {
            const n = e.permalink.split('/')[2],
              l =
                t !== n &&
                r.createElement('h5', {className: i.sidebarItemTitle}, n);
            return (
              (t = n),
              r.createElement(
                r.Fragment,
                null,
                l,
                r.createElement(
                  'li',
                  {key: e.permalink, className: 'menu__list-item'},
                  r.createElement(
                    a.A,
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
        return r.createElement(l.GX, {component: o, props: e});
      }
    },
    3151: (e, t, n) => {
      n.d(t, {A: () => P});
      var r = n(3696),
        a = n(3429),
        l = n(2915),
        i = Object.defineProperty,
        o = Object.defineProperties,
        c = Object.getOwnPropertyDescriptors,
        s = Object.getOwnPropertySymbols,
        m = Object.prototype.hasOwnProperty,
        u = Object.prototype.propertyIsEnumerable,
        d = (e, t, n) =>
          t in e
            ? i(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        p = (e, t) => {
          for (var n in t || (t = {})) m.call(t, n) && d(e, n, t[n]);
          if (s) for (var n of s(t)) u.call(t, n) && d(e, n, t[n]);
          return e;
        },
        b = (e, t) => o(e, c(t));
      const f = 'md ';
      function g(e) {
        return 'string' == typeof e.children && e.children.startsWith(f)
          ? r.createElement(
              v,
              b(p({}, e), {children: e.children.slice(f.length)})
            )
          : r.createElement('code', p({}, e));
      }
      const v = r.memo(function (e) {
        const t = (function (e) {
          const t = new RegExp(
              '(?<link>\\[(?<text>[^\\]]+)?\\]\\((?<url>[^)]+)\\))',
              'g'
            ),
            n = /\[[^\]]+?\]\([^)]+\)/g,
            a = [];
          let i;
          for (; null !== (i = t.exec(e)); ) {
            const e = i.groups.link,
              t = i.groups.text,
              n = i.groups.url;
            if (n.endsWith('.md') || n.endsWith('.mdx'))
              throw new Error(
                "Markdown links inside code blocks can't link using a filename extensions. Problematic link: " +
                  e
              );
            a.push({link: e, text: t, url: n});
          }
          return e
            .split(n)
            .map((e, t) =>
              r.createElement(
                r.Fragment,
                {key: t},
                e,
                a[t] ? r.createElement(l.A, {to: a[t].url}, a[t].text) : null
              )
            );
        })(e.children);
        return r.createElement('code', b(p({}, e), {children: t}));
      });
      var h = Object.defineProperty,
        y = Object.getOwnPropertySymbols,
        O = Object.prototype.hasOwnProperty,
        E = Object.prototype.propertyIsEnumerable,
        k = (e, t, n) =>
          t in e
            ? h(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        w = (e, t) => {
          for (var n in t || (t = {})) O.call(t, n) && k(e, n, t[n]);
          if (y) for (var n of y(t)) E.call(t, n) && k(e, n, t[n]);
          return e;
        };
      function P(e) {
        return r.Children.toArray(e.children).every(
          e => 'string' == typeof e && !e.includes('\n')
        )
          ? r.createElement(g, w({}, e))
          : r.createElement(a.A, w({}, e));
      }
    },
  },
]);

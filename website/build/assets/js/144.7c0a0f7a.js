'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [144],
  {
    5168: (e, t, a) => {
      a.d(t, {A: () => E});
      var r = a(3696),
        l = a(1750),
        n = a(9848),
        o = a(3212),
        c = a(9816),
        s = a(7466);
      function i({sidebar: e}) {
        const t = (0, o.l)();
        return (null == e ? void 0 : e.items.length)
          ? 'mobile' === t
            ? r.createElement(s.A, {sidebar: e})
            : r.createElement(c.A, {sidebar: e})
          : null;
      }
      var m = Object.defineProperty,
        u = Object.getOwnPropertySymbols,
        d = Object.prototype.hasOwnProperty,
        g = Object.prototype.propertyIsEnumerable,
        f = (e, t, a) =>
          t in e
            ? m(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        p = (e, t) => {
          for (var a in t || (t = {})) d.call(t, a) && f(e, a, t[a]);
          if (u) for (var a of u(t)) g.call(t, a) && f(e, a, t[a]);
          return e;
        },
        b = (e, t) => {
          var a = {};
          for (var r in e) d.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
          if (null != e && u)
            for (var r of u(e))
              t.indexOf(r) < 0 && g.call(e, r) && (a[r] = e[r]);
          return a;
        };
      function E(e) {
        const t = e,
          {sidebar: a, toc: o, children: c} = t,
          s = b(t, ['sidebar', 'toc', 'children']),
          m = a && a.items.length > 0;
        return r.createElement(
          n.A,
          p({}, s),
          r.createElement(
            'div',
            {className: 'container margin-vert--lg'},
            r.createElement(
              'div',
              {className: 'row'},
              r.createElement(i, {sidebar: a}),
              r.createElement(
                'main',
                {
                  className: (0, l.A)('col', {
                    'col--7': m,
                    'col--9 col--offset-1': !m,
                  }),
                },
                c
              ),
              o && r.createElement('div', {className: 'col col--2'}, o)
            )
          )
        );
      }
    },
    2587: (e, t, a) => {
      a.d(t, {A: () => re});
      var r = a(3696),
        l = a(1750),
        n = a(5718);
      function o({children: e, className: t}) {
        return r.createElement('article', {className: t}, e);
      }
      var c = a(2915);
      const s = {title: 'title_f1Hy'};
      function i({className: e}) {
        const {metadata: t, isBlogPostPage: a} = (0, n.e)(),
          {permalink: o, title: i} = t,
          m = a ? 'h1' : 'h2';
        return r.createElement(
          m,
          {className: (0, l.A)(s.title, e)},
          a ? i : r.createElement(c.A, {to: o}, i)
        );
      }
      var m = a(5830),
        u = a(5324),
        d = a(6355);
      const g = {container: 'container_mt6G'};
      function f({readingTime: e}) {
        const t = (function () {
          const {selectMessage: e} = (0, u.W)();
          return t => {
            const a = Math.ceil(t);
            return e(
              a,
              (0, m.T)(
                {
                  id: 'theme.blog.post.readingTime.plurals',
                  description:
                    'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',
                  message: 'One min read|{readingTime} min read',
                },
                {readingTime: a}
              )
            );
          };
        })();
        return r.createElement(r.Fragment, null, t(e));
      }
      function p({date: e, formattedDate: t}) {
        return r.createElement('time', {dateTime: e}, t);
      }
      function b() {
        return r.createElement(r.Fragment, null, ' \xb7 ');
      }
      function E({className: e}) {
        const {metadata: t} = (0, n.e)(),
          {date: a, readingTime: o} = t,
          c = (0, d.i)({
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            timeZone: 'UTC',
          });
        return r.createElement(
          'div',
          {className: (0, l.A)(g.container, 'margin-vert--md', e)},
          r.createElement(p, {
            date: a,
            formattedDate: ((s = a), c.format(new Date(s))),
          }),
          void 0 !== o &&
            r.createElement(
              r.Fragment,
              null,
              r.createElement(b, null),
              r.createElement(f, {readingTime: o})
            )
        );
        var s;
      }
      var v = Object.defineProperty,
        h = Object.getOwnPropertySymbols,
        y = Object.prototype.hasOwnProperty,
        A = Object.prototype.propertyIsEnumerable,
        O = (e, t, a) =>
          t in e
            ? v(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        P = (e, t) => {
          for (var a in t || (t = {})) y.call(t, a) && O(e, a, t[a]);
          if (h) for (var a of h(t)) A.call(t, a) && O(e, a, t[a]);
          return e;
        };
      function w(e) {
        return e.href
          ? r.createElement(c.A, P({}, e))
          : r.createElement(r.Fragment, null, e.children);
      }
      function N({author: e, className: t}) {
        const {name: a, title: n, url: o, imageURL: c, email: s} = e,
          i = o || (s && `mailto:${s}`) || void 0;
        return r.createElement(
          'div',
          {className: (0, l.A)('avatar margin-bottom--sm', t)},
          c &&
            r.createElement(
              w,
              {href: i, className: 'avatar__photo-link'},
              r.createElement('img', {
                className: 'avatar__photo',
                src: c,
                alt: a,
              })
            ),
          a &&
            r.createElement(
              'div',
              {className: 'avatar__intro'},
              r.createElement(
                'div',
                {className: 'avatar__name'},
                r.createElement(w, {href: i}, r.createElement('span', null, a))
              ),
              n && r.createElement('small', {className: 'avatar__subtitle'}, n)
            )
        );
      }
      const _ = {
        authorCol: 'authorCol_Hf19',
        imageOnlyAuthorRow: 'imageOnlyAuthorRow_pa_O',
        imageOnlyAuthorCol: 'imageOnlyAuthorCol_G86a',
      };
      var U = Object.defineProperty,
        j = Object.defineProperties,
        T = Object.getOwnPropertyDescriptors,
        k = Object.getOwnPropertySymbols,
        x = Object.prototype.hasOwnProperty,
        F = Object.prototype.propertyIsEnumerable,
        M = (e, t, a) =>
          t in e
            ? U(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        B = (e, t) => {
          for (var a in t || (t = {})) x.call(t, a) && M(e, a, t[a]);
          if (k) for (var a of k(t)) F.call(t, a) && M(e, a, t[a]);
          return e;
        },
        C = (e, t) => j(e, T(t));
      function R({className: e}) {
        const {
          metadata: {authors: t},
          assets: a,
        } = (0, n.e)();
        if (0 === t.length) return null;
        const o = t.every(({name: e}) => !e);
        return r.createElement(
          'div',
          {
            className: (0, l.A)(
              'margin-top--md margin-bottom--sm',
              o ? _.imageOnlyAuthorRow : 'row',
              e
            ),
          },
          t.map((e, t) => {
            var n;
            return r.createElement(
              'div',
              {
                className: (0, l.A)(
                  !o && 'col col--6',
                  o ? _.imageOnlyAuthorCol : _.authorCol
                ),
                key: t,
              },
              r.createElement(N, {
                author: C(B({}, e), {
                  imageURL:
                    null != (n = a.authorsImageUrls[t]) ? n : e.imageURL,
                }),
              })
            );
          })
        );
      }
      function I() {
        return r.createElement(
          'header',
          null,
          r.createElement(i, null),
          r.createElement(E, null),
          r.createElement(R, null)
        );
      }
      var $ = a(717),
        D = a(7043);
      function L({children: e, className: t}) {
        const {isBlogPostPage: a} = (0, n.e)();
        return r.createElement(
          'div',
          {
            id: a ? $.blogPostContainerID : void 0,
            className: (0, l.A)('markdown', t),
          },
          r.createElement(D.A, null, e)
        );
      }
      var G = a(4850),
        S = a(1374),
        z = a(562);
      const H = {lastUpdated: 'lastUpdated_JAkA'};
      function W({
        className: e,
        editUrl: t,
        lastUpdatedAt: a,
        lastUpdatedBy: n,
      }) {
        return r.createElement(
          'div',
          {className: (0, l.A)('row', e)},
          r.createElement(
            'div',
            {className: 'col'},
            t && r.createElement(S.A, {editUrl: t})
          ),
          r.createElement(
            'div',
            {className: (0, l.A)('col', H.lastUpdated)},
            (a || n) &&
              r.createElement(z.A, {lastUpdatedAt: a, lastUpdatedBy: n})
          )
        );
      }
      var J = a(9014),
        V = Object.defineProperty,
        Z = Object.getOwnPropertySymbols,
        q = Object.prototype.hasOwnProperty,
        K = Object.prototype.propertyIsEnumerable,
        Q = (e, t, a) =>
          t in e
            ? V(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        X = (e, t) => {
          for (var a in t || (t = {})) q.call(t, a) && Q(e, a, t[a]);
          if (Z) for (var a of Z(t)) K.call(t, a) && Q(e, a, t[a]);
          return e;
        },
        Y = (e, t) => {
          var a = {};
          for (var r in e) q.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
          if (null != e && Z)
            for (var r of Z(e))
              t.indexOf(r) < 0 && K.call(e, r) && (a[r] = e[r]);
          return a;
        };
      function ee() {
        return r.createElement(
          'b',
          null,
          r.createElement(
            m.A,
            {
              id: 'theme.blog.post.readMore',
              description:
                'The label used in blog post item excerpts to link to full blog posts',
            },
            'Read More'
          )
        );
      }
      function te(e) {
        const t = e,
          {blogPostTitle: a} = t,
          l = Y(t, ['blogPostTitle']);
        return r.createElement(
          c.A,
          X(
            {
              'aria-label': (0, m.T)(
                {
                  message: 'Read more about {title}',
                  id: 'theme.blog.post.readMoreLabel',
                  description:
                    'The ARIA label for the link to full blog posts from excerpts',
                },
                {title: a}
              ),
            },
            l
          ),
          r.createElement(ee, null)
        );
      }
      function ae() {
        const {metadata: e, isBlogPostPage: t} = (0, n.e)(),
          {
            tags: a,
            title: o,
            editUrl: c,
            hasTruncateMarker: s,
            lastUpdatedBy: i,
            lastUpdatedAt: m,
          } = e,
          u = !t && s,
          d = a.length > 0;
        if (!(d || u || c)) return null;
        if (t) {
          const e = !!(c || m || i);
          return r.createElement(
            'footer',
            {className: 'docusaurus-mt-lg'},
            d &&
              r.createElement(
                'div',
                {
                  className: (0, l.A)(
                    'row',
                    'margin-top--sm',
                    G.G.blog.blogFooterEditMetaRow
                  ),
                },
                r.createElement(
                  'div',
                  {className: 'col'},
                  r.createElement(J.A, {tags: a})
                )
              ),
            e &&
              r.createElement(W, {
                className: (0, l.A)(
                  'margin-top--sm',
                  G.G.blog.blogFooterEditMetaRow
                ),
                editUrl: c,
                lastUpdatedAt: m,
                lastUpdatedBy: i,
              })
          );
        }
        return r.createElement(
          'footer',
          {className: 'row docusaurus-mt-lg'},
          d &&
            r.createElement(
              'div',
              {className: (0, l.A)('col', {'col--9': u})},
              r.createElement(J.A, {tags: a})
            ),
          u &&
            r.createElement(
              'div',
              {className: (0, l.A)('col text--right', {'col--3': d})},
              r.createElement(te, {blogPostTitle: o, to: e.permalink})
            )
        );
      }
      function re({children: e, className: t}) {
        const a = (function () {
          const {isBlogPostPage: e} = (0, n.e)();
          return e ? void 0 : 'margin-bottom--xl';
        })();
        return r.createElement(
          o,
          {className: (0, l.A)(a, t)},
          r.createElement(I, null),
          r.createElement(L, null, e),
          r.createElement(ae, null)
        );
      }
    },
    5718: (e, t, a) => {
      a.d(t, {e: () => c, i: () => o});
      var r = a(3696),
        l = a(8939);
      const n = r.createContext(null);
      function o({children: e, content: t, isBlogPostPage: a = !1}) {
        const l = (function ({content: e, isBlogPostPage: t}) {
          return (0, r.useMemo)(
            () => ({
              metadata: e.metadata,
              frontMatter: e.frontMatter,
              assets: e.assets,
              toc: e.toc,
              isBlogPostPage: t,
            }),
            [e, t]
          );
        })({content: t, isBlogPostPage: a});
        return r.createElement(n.Provider, {value: l}, e);
      }
      function c() {
        const e = (0, r.useContext)(n);
        if (null === e) throw new l.dV('BlogPostProvider');
        return e;
      }
    },
    5324: (e, t, a) => {
      a.d(t, {W: () => i});
      var r = a(3696),
        l = a(5067);
      const n = ['zero', 'one', 'two', 'few', 'many', 'other'];
      function o(e) {
        return n.filter(t => e.includes(t));
      }
      const c = {
        locale: 'en',
        pluralForms: o(['one', 'other']),
        select: e => (1 === e ? 'one' : 'other'),
      };
      function s() {
        const {
          i18n: {currentLocale: e},
        } = (0, l.A)();
        return (0, r.useMemo)(() => {
          try {
            return (function (e) {
              const t = new Intl.PluralRules(e);
              return {
                locale: e,
                pluralForms: o(t.resolvedOptions().pluralCategories),
                select: e => t.select(e),
              };
            })(e);
          } catch (t) {
            return (
              console.error(
                `Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`
              ),
              c
            );
          }
        }, [e]);
      }
      function i() {
        const e = s();
        return {
          selectMessage: (t, a) =>
            (function (e, t, a) {
              const r = e.split('|');
              if (1 === r.length) return r[0];
              r.length > a.pluralForms.length &&
                console.error(
                  `For locale=${a.locale}, a maximum of ${
                    a.pluralForms.length
                  } plural forms are expected (${a.pluralForms.join(
                    ','
                  )}), but the message contains ${r.length}: ${e}`
                );
              const l = a.select(t),
                n = a.pluralForms.indexOf(l);
              return r[Math.min(n, r.length - 1)];
            })(a, t, e),
        };
      }
    },
  },
]);
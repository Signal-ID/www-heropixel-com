/*! For license information please see c70f4716.5faae276.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [9845],
  {
    2192: (e, r, t) => {
      var i = t(3696),
        n = Symbol.for('react.element'),
        a = Symbol.for('react.fragment'),
        s = Object.prototype.hasOwnProperty,
        l =
          i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        o = {key: !0, ref: !0, __self: !0, __source: !0};
      function c(e, r, t) {
        var i,
          a = {},
          c = null,
          h = null;
        for (i in (void 0 !== t && (c = '' + t),
        void 0 !== r.key && (c = '' + r.key),
        void 0 !== r.ref && (h = r.ref),
        r))
          s.call(r, i) && !o.hasOwnProperty(i) && (a[i] = r[i]);
        if (e && e.defaultProps)
          for (i in (r = e.defaultProps)) void 0 === a[i] && (a[i] = r[i]);
        return {
          $$typeof: n,
          type: e,
          key: c,
          ref: h,
          props: a,
          _owner: l.current,
        };
      }
      (r.Fragment = a), (r.jsx = c), (r.jsxs = c);
    },
    2540: (e, r, t) => {
      e.exports = t(2192);
    },
    8087: (e, r, t) => {
      t.r(r),
        t.d(r, {
          assets: () => o,
          contentTitle: () => s,
          default: () => g,
          frontMatter: () => a,
          metadata: () => l,
          toc: () => c,
        });
      var i = t(2540),
        n = t(3023);
      const a = {
          title: 'HeroPixel0.0.1 - Rolling Out With Real-Time Processing',
          authors: ['jbyrdziak'],
          tags: ['announcement', 'release', 'debugging'],
          date: new Date('2024-06-18T00:00:00.000Z'),
        },
        s = void 0,
        l = {
          permalink: '/blog/2024/06/18/0.73-real-time-processing-release',
          source: '@site/blog/2024-06-18-0.73-real-time-processing-release.md',
          title: 'HeroPixel0.0.1 - Rolling Out With Real-Time Processing',
          description:
            "This month we're releasing HeroPixel0.0.1! This release has been three years in the making and comes after four complete rebuilds. HHeroPixel remarketing pixel processes leads in real-time, with the most efficient infrastructure to date. Capable of processing a Billion pageviews per minute with 97% accuracy!",
          date: '2024-06-18T00:00:00.000Z',
          tags: [
            {label: 'announcement', permalink: '/blog/tags/announcement'},
            {label: 'release', permalink: '/blog/tags/release'},
            {label: 'debugging', permalink: '/blog/tags/debugging'},
          ],
          readingTime: 1.165,
          hasTruncateMarker: !0,
          authors: [
            {
              name: 'Jonathon Byrdziak',
              title: 'CEO & Co-Founder',
              url: 'https://twitter.com/byrdziakmedia',
              imageURL: 'https://github.com/jonathonbyrdziak.png',
              key: 'jbyrdziak',
            },
          ],
          frontMatter: {
            title: 'HeroPixel0.0.1 - Rolling Out With Real-Time Processing',
            authors: ['jbyrdziak'],
            tags: ['announcement', 'release', 'debugging'],
            date: '2024-06-18T00:00:00.000Z',
          },
          unlisted: !1,
        },
        o = {authorsImageUrls: [void 0]},
        c = [{value: 'Highlights', id: 'highlights', level: 3}];
      function h(e) {
        const r = {
          a: 'a',
          h3: 'h3',
          li: 'li',
          p: 'p',
          ul: 'ul',
          ...(0, n.R)(),
          ...e.components,
        };
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(r.p, {
              children:
                "This month we're releasing HeroPixel0.0.1! This release has been three years in the making and comes after four complete rebuilds. HHeroPixel remarketing pixel processes leads in real-time, with the most efficient infrastructure to date. Capable of processing a Billion pageviews per minute with 97% accuracy!",
            }),
            '\n',
            (0, i.jsx)(r.h3, {id: 'highlights', children: 'Highlights'}),
            '\n',
            (0, i.jsxs)(r.ul, {
              children: [
                '\n',
                (0, i.jsx)(r.li, {
                  children: (0, i.jsx)(r.a, {
                    href: '/blog/2024/06/18/0.73-real-time-processing-release#every-email-is-verified',
                    children: 'Every Email is Verified',
                  }),
                }),
                '\n',
                (0, i.jsx)(r.li, {
                  children: (0, i.jsx)(r.a, {
                    href: '/blog/2024/06/18/0.73-real-time-processing-release#sub-second-page-loads',
                    children: 'Sub-Second Page Loads',
                  }),
                }),
                '\n',
                (0, i.jsx)(r.li, {
                  children: (0, i.jsx)(r.a, {
                    href: '/blog/2024/06/18/0.73-real-time-processing-release#optionally-hipaa-compliant',
                    children: 'Optionally HIPAA Compliant',
                  }),
                }),
                '\n',
                (0, i.jsx)(r.li, {
                  children: (0, i.jsx)(r.a, {
                    href: '/blog/2024/06/18/0.73-real-time-processing-release#easily-integrate-with-your-cdp',
                    children: 'Easily Integrate with your CDP',
                  }),
                }),
                '\n',
                (0, i.jsx)(r.li, {
                  children: (0, i.jsx)(r.a, {
                    href: '/blog/2024/06/18/0.73-real-time-processing-release#more-than-100-integrations-available',
                    children: 'More than 100 Integrations Available',
                  }),
                }),
                '\n',
              ],
            }),
          ],
        });
      }
      function g(e = {}) {
        const {wrapper: r} = {...(0, n.R)(), ...e.components};
        return r
          ? (0, i.jsx)(r, {...e, children: (0, i.jsx)(h, {...e})})
          : h(e);
      }
    },
    3023: (e, r, t) => {
      t.d(r, {R: () => s, x: () => l});
      var i = t(3696);
      const n = {},
        a = i.createContext(n);
      function s(e) {
        const r = i.useContext(a);
        return i.useMemo(
          function () {
            return 'function' == typeof e ? e(r) : {...r, ...e};
          },
          [r, e]
        );
      }
      function l(e) {
        let r;
        return (
          (r = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(n)
              : e.components || n
            : s(e.components)),
          i.createElement(a.Provider, {value: r}, e.children)
        );
      }
    },
  },
]);

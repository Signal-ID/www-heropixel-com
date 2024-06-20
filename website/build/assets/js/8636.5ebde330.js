(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [8636],
  {
    8670: (e, t, r) => {
      'use strict';
      r.d(t, {A: () => ft});
      var n = r(3696),
        a = Object.defineProperty,
        o = Object.defineProperties,
        l = Object.getOwnPropertyDescriptors,
        c = Object.getOwnPropertySymbols,
        i = Object.prototype.hasOwnProperty,
        s = Object.prototype.propertyIsEnumerable,
        u = (e, t, r) =>
          t in e
            ? a(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        p = (e, t) => {
          for (var r in t || (t = {})) i.call(t, r) && u(e, r, t[r]);
          if (c) for (var r of c(t)) s.call(t, r) && u(e, r, t[r]);
          return e;
        },
        m = (e, t) => o(e, l(t));
      function d(e) {
        var t;
        const {mdxAdmonitionTitle: r, rest: a} = (function (e) {
            const t = n.Children.toArray(e),
              r = t.find(
                e => n.isValidElement(e) && 'mdxAdmonitionTitle' === e.type
              ),
              a = t.filter(e => e !== r);
            return {
              mdxAdmonitionTitle: null == r ? void 0 : r.props.children,
              rest: a.length > 0 ? n.createElement(n.Fragment, null, a) : null,
            };
          })(e.children),
          o = null != (t = e.title) ? t : r;
        return m(p(p({}, e), o && {title: o}), {children: a});
      }
      var b = r(1750),
        f = r(5830),
        y = r(4850);
      const v = {
        admonition: 'admonition_xJq3',
        admonitionHeading: 'admonitionHeading_Gvgb',
        admonitionIcon: 'admonitionIcon_Rf37',
        admonitionContent: 'admonitionContent_BuS1',
      };
      function O({type: e, className: t, children: r}) {
        return n.createElement(
          'div',
          {
            className: (0, b.A)(
              y.G.common.admonition,
              y.G.common.admonitionType(e),
              v.admonition,
              t
            ),
          },
          r
        );
      }
      function g({icon: e, title: t}) {
        return n.createElement(
          'div',
          {className: v.admonitionHeading},
          n.createElement('span', {className: v.admonitionIcon}, e),
          t
        );
      }
      function h({children: e}) {
        return e
          ? n.createElement('div', {className: v.admonitionContent}, e)
          : null;
      }
      function E(e) {
        const {type: t, icon: r, title: a, children: o, className: l} = e;
        return n.createElement(
          O,
          {type: t, className: l},
          n.createElement(g, {title: a, icon: r}),
          n.createElement(h, null, o)
        );
      }
      var j = Object.defineProperty,
        w = Object.getOwnPropertySymbols,
        P = Object.prototype.hasOwnProperty,
        N = Object.prototype.propertyIsEnumerable,
        k = (e, t, r) =>
          t in e
            ? j(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r);
      function A(e) {
        return n.createElement(
          'svg',
          ((e, t) => {
            for (var r in t || (t = {})) P.call(t, r) && k(e, r, t[r]);
            if (w) for (var r of w(t)) N.call(t, r) && k(e, r, t[r]);
            return e;
          })({viewBox: '0 0 14 16'}, e),
          n.createElement('path', {
            fillRule: 'evenodd',
            d: 'M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z',
          })
        );
      }
      var B = Object.defineProperty,
        C = Object.defineProperties,
        S = Object.getOwnPropertyDescriptors,
        I = Object.getOwnPropertySymbols,
        x = Object.prototype.hasOwnProperty,
        _ = Object.prototype.propertyIsEnumerable,
        L = (e, t, r) =>
          t in e
            ? B(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        T = (e, t) => {
          for (var r in t || (t = {})) x.call(t, r) && L(e, r, t[r]);
          if (I) for (var r of I(t)) _.call(t, r) && L(e, r, t[r]);
          return e;
        };
      const D = {
        icon: n.createElement(A, null),
        title: n.createElement(
          f.A,
          {
            id: 'theme.admonition.note',
            description:
              'The default label used for the Note admonition (:::note)',
          },
          'note'
        ),
      };
      function M(e) {
        return n.createElement(
          E,
          ((t = T(T({}, D), e)),
          (r = {className: (0, b.A)('alert alert--secondary', e.className)}),
          C(t, S(r))),
          e.children
        );
        var t, r;
      }
      var z = Object.defineProperty,
        R = Object.getOwnPropertySymbols,
        H = Object.prototype.hasOwnProperty,
        U = Object.prototype.propertyIsEnumerable,
        V = (e, t, r) =>
          t in e
            ? z(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r);
      function W(e) {
        return n.createElement(
          'svg',
          ((e, t) => {
            for (var r in t || (t = {})) H.call(t, r) && V(e, r, t[r]);
            if (R) for (var r of R(t)) U.call(t, r) && V(e, r, t[r]);
            return e;
          })({viewBox: '0 0 12 16'}, e),
          n.createElement('path', {
            fillRule: 'evenodd',
            d: 'M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z',
          })
        );
      }
      var $ = Object.defineProperty,
        G = Object.defineProperties,
        q = Object.getOwnPropertyDescriptors,
        F = Object.getOwnPropertySymbols,
        Z = Object.prototype.hasOwnProperty,
        J = Object.prototype.propertyIsEnumerable,
        Y = (e, t, r) =>
          t in e
            ? $(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        K = (e, t) => {
          for (var r in t || (t = {})) Z.call(t, r) && Y(e, r, t[r]);
          if (F) for (var r of F(t)) J.call(t, r) && Y(e, r, t[r]);
          return e;
        };
      const Q = {
        icon: n.createElement(W, null),
        title: n.createElement(
          f.A,
          {
            id: 'theme.admonition.tip',
            description:
              'The default label used for the Tip admonition (:::tip)',
          },
          'tip'
        ),
      };
      function X(e) {
        return n.createElement(
          E,
          ((t = K(K({}, Q), e)),
          (r = {className: (0, b.A)('alert alert--success', e.className)}),
          G(t, q(r))),
          e.children
        );
        var t, r;
      }
      var ee = Object.defineProperty,
        te = Object.getOwnPropertySymbols,
        re = Object.prototype.hasOwnProperty,
        ne = Object.prototype.propertyIsEnumerable,
        ae = (e, t, r) =>
          t in e
            ? ee(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r);
      function oe(e) {
        return n.createElement(
          'svg',
          ((e, t) => {
            for (var r in t || (t = {})) re.call(t, r) && ae(e, r, t[r]);
            if (te) for (var r of te(t)) ne.call(t, r) && ae(e, r, t[r]);
            return e;
          })({viewBox: '0 0 14 16'}, e),
          n.createElement('path', {
            fillRule: 'evenodd',
            d: 'M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z',
          })
        );
      }
      var le = Object.defineProperty,
        ce = Object.defineProperties,
        ie = Object.getOwnPropertyDescriptors,
        se = Object.getOwnPropertySymbols,
        ue = Object.prototype.hasOwnProperty,
        pe = Object.prototype.propertyIsEnumerable,
        me = (e, t, r) =>
          t in e
            ? le(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        de = (e, t) => {
          for (var r in t || (t = {})) ue.call(t, r) && me(e, r, t[r]);
          if (se) for (var r of se(t)) pe.call(t, r) && me(e, r, t[r]);
          return e;
        };
      const be = {
        icon: n.createElement(oe, null),
        title: n.createElement(
          f.A,
          {
            id: 'theme.admonition.info',
            description:
              'The default label used for the Info admonition (:::info)',
          },
          'info'
        ),
      };
      function fe(e) {
        return n.createElement(
          E,
          ((t = de(de({}, be), e)),
          (r = {className: (0, b.A)('alert alert--info', e.className)}),
          ce(t, ie(r))),
          e.children
        );
        var t, r;
      }
      var ye = Object.defineProperty,
        ve = Object.getOwnPropertySymbols,
        Oe = Object.prototype.hasOwnProperty,
        ge = Object.prototype.propertyIsEnumerable,
        he = (e, t, r) =>
          t in e
            ? ye(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r);
      function Ee(e) {
        return n.createElement(
          'svg',
          ((e, t) => {
            for (var r in t || (t = {})) Oe.call(t, r) && he(e, r, t[r]);
            if (ve) for (var r of ve(t)) ge.call(t, r) && he(e, r, t[r]);
            return e;
          })({viewBox: '0 0 16 16'}, e),
          n.createElement('path', {
            fillRule: 'evenodd',
            d: 'M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z',
          })
        );
      }
      var je = Object.defineProperty,
        we = Object.defineProperties,
        Pe = Object.getOwnPropertyDescriptors,
        Ne = Object.getOwnPropertySymbols,
        ke = Object.prototype.hasOwnProperty,
        Ae = Object.prototype.propertyIsEnumerable,
        Be = (e, t, r) =>
          t in e
            ? je(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        Ce = (e, t) => {
          for (var r in t || (t = {})) ke.call(t, r) && Be(e, r, t[r]);
          if (Ne) for (var r of Ne(t)) Ae.call(t, r) && Be(e, r, t[r]);
          return e;
        };
      const Se = {
        icon: n.createElement(Ee, null),
        title: n.createElement(
          f.A,
          {
            id: 'theme.admonition.warning',
            description:
              'The default label used for the Warning admonition (:::warning)',
          },
          'warning'
        ),
      };
      var Ie = Object.defineProperty,
        xe = Object.getOwnPropertySymbols,
        _e = Object.prototype.hasOwnProperty,
        Le = Object.prototype.propertyIsEnumerable,
        Te = (e, t, r) =>
          t in e
            ? Ie(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r);
      function De(e) {
        return n.createElement(
          'svg',
          ((e, t) => {
            for (var r in t || (t = {})) _e.call(t, r) && Te(e, r, t[r]);
            if (xe) for (var r of xe(t)) Le.call(t, r) && Te(e, r, t[r]);
            return e;
          })({viewBox: '0 0 12 16'}, e),
          n.createElement('path', {
            fillRule: 'evenodd',
            d: 'M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z',
          })
        );
      }
      var Me = Object.defineProperty,
        ze = Object.defineProperties,
        Re = Object.getOwnPropertyDescriptors,
        He = Object.getOwnPropertySymbols,
        Ue = Object.prototype.hasOwnProperty,
        Ve = Object.prototype.propertyIsEnumerable,
        We = (e, t, r) =>
          t in e
            ? Me(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        $e = (e, t) => {
          for (var r in t || (t = {})) Ue.call(t, r) && We(e, r, t[r]);
          if (He) for (var r of He(t)) Ve.call(t, r) && We(e, r, t[r]);
          return e;
        };
      const Ge = {
        icon: n.createElement(De, null),
        title: n.createElement(
          f.A,
          {
            id: 'theme.admonition.danger',
            description:
              'The default label used for the Danger admonition (:::danger)',
          },
          'danger'
        ),
      };
      var qe = Object.defineProperty,
        Fe = Object.defineProperties,
        Ze = Object.getOwnPropertyDescriptors,
        Je = Object.getOwnPropertySymbols,
        Ye = Object.prototype.hasOwnProperty,
        Ke = Object.prototype.propertyIsEnumerable,
        Qe = (e, t, r) =>
          t in e
            ? qe(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        Xe = (e, t) => {
          for (var r in t || (t = {})) Ye.call(t, r) && Qe(e, r, t[r]);
          if (Je) for (var r of Je(t)) Ke.call(t, r) && Qe(e, r, t[r]);
          return e;
        };
      const et = {
        icon: n.createElement(Ee, null),
        title: n.createElement(
          f.A,
          {
            id: 'theme.admonition.caution',
            description:
              'The default label used for the Caution admonition (:::caution)',
          },
          'caution'
        ),
      };
      var tt = Object.defineProperty,
        rt = Object.getOwnPropertySymbols,
        nt = Object.prototype.hasOwnProperty,
        at = Object.prototype.propertyIsEnumerable,
        ot = (e, t, r) =>
          t in e
            ? tt(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        lt = (e, t) => {
          for (var r in t || (t = {})) nt.call(t, r) && ot(e, r, t[r]);
          if (rt) for (var r of rt(t)) at.call(t, r) && ot(e, r, t[r]);
          return e;
        };
      const ct = {
          secondary: e => n.createElement(M, lt({title: 'secondary'}, e)),
          important: e => n.createElement(fe, lt({title: 'important'}, e)),
          success: e => n.createElement(X, lt({title: 'success'}, e)),
          caution: function (e) {
            return n.createElement(
              E,
              ((t = Xe(Xe({}, et), e)),
              (r = {className: (0, b.A)('alert alert--warning', e.className)}),
              Fe(t, Ze(r))),
              e.children
            );
            var t, r;
          },
        },
        it = lt(
          lt(
            {},
            {
              note: M,
              tip: X,
              info: fe,
              warning: function (e) {
                return n.createElement(
                  E,
                  ((t = Ce(Ce({}, Se), e)),
                  (r = {
                    className: (0, b.A)('alert alert--warning', e.className),
                  }),
                  we(t, Pe(r))),
                  e.children
                );
                var t, r;
              },
              danger: function (e) {
                return n.createElement(
                  E,
                  ((t = $e($e({}, Ge), e)),
                  (r = {
                    className: (0, b.A)('alert alert--danger', e.className),
                  }),
                  ze(t, Re(r))),
                  e.children
                );
                var t, r;
              },
            }
          ),
          ct
        );
      var st = Object.defineProperty,
        ut = Object.getOwnPropertySymbols,
        pt = Object.prototype.hasOwnProperty,
        mt = Object.prototype.propertyIsEnumerable,
        dt = (e, t, r) =>
          t in e
            ? st(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        bt = (e, t) => {
          for (var r in t || (t = {})) pt.call(t, r) && dt(e, r, t[r]);
          if (ut) for (var r of ut(t)) mt.call(t, r) && dt(e, r, t[r]);
          return e;
        };
      function ft(e) {
        const t = d(e),
          r =
            ((a = t.type),
            it[a] ||
              (console.warn(
                `No admonition component found for admonition type "${a}". Using Info as fallback.`
              ),
              it.info));
        var a;
        return n.createElement(r, bt({}, t));
      }
    },
    3429: (e, t, r) => {
      'use strict';
      r.d(t, {A: () => _e});
      var n = r(3696),
        a = r(9266),
        o = r(1750),
        l = r(426),
        c = r(17);
      function i() {
        const {prism: e} = (0, c.p)(),
          {colorMode: t} = (0, l.G)(),
          r = e.theme,
          n = e.darkTheme || r;
        return 'dark' === t ? n : r;
      }
      var s = r(4850),
        u = r(9934),
        p = r.n(u),
        m = Object.defineProperty,
        d = Object.defineProperties,
        b = Object.getOwnPropertyDescriptors,
        f = Object.getOwnPropertySymbols,
        y = Object.prototype.hasOwnProperty,
        v = Object.prototype.propertyIsEnumerable,
        O = (e, t, r) =>
          t in e
            ? m(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r);
      const g = new RegExp('title=(?<quote>["\'])(?<title>.*?)\\1'),
        h = new RegExp('\\{(?<range>[\\d,-]+)\\}'),
        E = {
          js: {start: '\\/\\/', end: ''},
          jsBlock: {start: '\\/\\*', end: '\\*\\/'},
          jsx: {start: '\\{\\s*\\/\\*', end: '\\*\\/\\s*\\}'},
          bash: {start: '#', end: ''},
          html: {start: '\x3c!--', end: '--\x3e'},
        },
        j =
          ((w = ((e, t) => {
            for (var r in t || (t = {})) y.call(t, r) && O(e, r, t[r]);
            if (f) for (var r of f(t)) v.call(t, r) && O(e, r, t[r]);
            return e;
          })({}, E)),
          d(
            w,
            b({
              lua: {start: '--', end: ''},
              wasm: {start: '\\;\\;', end: ''},
              tex: {start: '%', end: ''},
              vb: {start: "['\u2018\u2019]", end: ''},
              vbnet: {start: "(?:_\\s*)?['\u2018\u2019]", end: ''},
              rem: {start: '[Rr][Ee][Mm]\\b', end: ''},
              f90: {start: '!', end: ''},
              ml: {start: '\\(\\*', end: '\\*\\)'},
              cobol: {start: '\\*>', end: ''},
            })
          ));
      var w;
      const P = Object.keys(E);
      function N(e, t) {
        const r = e
          .map(e => {
            const {start: r, end: n} = j[e];
            return `(?:${r}\\s*(${t
              .flatMap(e => {
                var t, r;
                return [
                  e.line,
                  null == (t = e.block) ? void 0 : t.start,
                  null == (r = e.block) ? void 0 : r.end,
                ].filter(Boolean);
              })
              .join('|')})\\s*${n})`;
          })
          .join('|');
        return new RegExp(`^\\s*(?:${r})\\s*$`);
      }
      function k(e, t) {
        let r = e.replace(/\n$/, '');
        const {language: n, magicComments: a, metastring: o} = t;
        if (o && h.test(o)) {
          const e = o.match(h).groups.range;
          if (0 === a.length)
            throw new Error(
              `A highlight range has been given in code block's metastring (\`\`\` ${o}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`
            );
          const t = a[0].className,
            n = p()(e)
              .filter(e => e > 0)
              .map(e => [e - 1, [t]]);
          return {lineClassNames: Object.fromEntries(n), code: r};
        }
        if (void 0 === n) return {lineClassNames: {}, code: r};
        const l = (function (e, t) {
            switch (e) {
              case 'js':
              case 'javascript':
              case 'ts':
              case 'typescript':
                return N(['js', 'jsBlock'], t);
              case 'jsx':
              case 'tsx':
                return N(['js', 'jsBlock', 'jsx'], t);
              case 'html':
                return N(['js', 'jsBlock', 'html'], t);
              case 'python':
              case 'py':
              case 'bash':
                return N(['bash'], t);
              case 'markdown':
              case 'md':
                return N(['html', 'jsx', 'bash'], t);
              case 'tex':
              case 'latex':
              case 'matlab':
                return N(['tex'], t);
              case 'lua':
              case 'haskell':
              case 'sql':
                return N(['lua'], t);
              case 'wasm':
                return N(['wasm'], t);
              case 'vb':
              case 'vba':
              case 'visual-basic':
                return N(['vb', 'rem'], t);
              case 'vbnet':
                return N(['vbnet', 'rem'], t);
              case 'batch':
                return N(['rem'], t);
              case 'basic':
                return N(['rem', 'f90'], t);
              case 'fsharp':
                return N(['js', 'ml'], t);
              case 'ocaml':
              case 'sml':
                return N(['ml'], t);
              case 'fortran':
                return N(['f90'], t);
              case 'cobol':
                return N(['cobol'], t);
              default:
                return N(P, t);
            }
          })(n, a),
          c = r.split('\n'),
          i = Object.fromEntries(
            a.map(e => [e.className, {start: 0, range: ''}])
          ),
          s = Object.fromEntries(
            a.filter(e => e.line).map(({className: e, line: t}) => [t, e])
          ),
          u = Object.fromEntries(
            a
              .filter(e => e.block)
              .map(({className: e, block: t}) => [t.start, e])
          ),
          m = Object.fromEntries(
            a.filter(e => e.block).map(({className: e, block: t}) => [t.end, e])
          );
        for (let p = 0; p < c.length; ) {
          const e = c[p].match(l);
          if (!e) {
            p += 1;
            continue;
          }
          const t = e.slice(1).find(e => void 0 !== e);
          s[t]
            ? (i[s[t]].range += `${p},`)
            : u[t]
            ? (i[u[t]].start = p)
            : m[t] && (i[m[t]].range += `${i[m[t]].start}-${p - 1},`),
            c.splice(p, 1);
        }
        r = c.join('\n');
        const d = {};
        return (
          Object.entries(i).forEach(([e, {range: t}]) => {
            p()(t).forEach(t => {
              null != d[t] || (d[t] = []), d[t].push(e);
            });
          }),
          {lineClassNames: d, code: r}
        );
      }
      const A = {codeBlockContainer: 'codeBlockContainer_Ckt0'};
      var B = Object.defineProperty,
        C = Object.defineProperties,
        S = Object.getOwnPropertyDescriptors,
        I = Object.getOwnPropertySymbols,
        x = Object.prototype.hasOwnProperty,
        _ = Object.prototype.propertyIsEnumerable,
        L = (e, t, r) =>
          t in e
            ? B(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        T = (e, t) => {
          for (var r in t || (t = {})) x.call(t, r) && L(e, r, t[r]);
          if (I) for (var r of I(t)) _.call(t, r) && L(e, r, t[r]);
          return e;
        },
        D = (e, t) => C(e, S(t)),
        M = (e, t) => {
          var r = {};
          for (var n in e) x.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
          if (null != e && I)
            for (var n of I(e))
              t.indexOf(n) < 0 && _.call(e, n) && (r[n] = e[n]);
          return r;
        };
      function z(e) {
        var t = e,
          {as: r} = t,
          a = M(t, ['as']);
        const l = (function (e) {
          const t = {
              color: '--prism-color',
              backgroundColor: '--prism-background-color',
            },
            r = {};
          return (
            Object.entries(e.plain).forEach(([e, n]) => {
              const a = t[e];
              a && 'string' == typeof n && (r[a] = n);
            }),
            r
          );
        })(i());
        return n.createElement(
          r,
          D(T({}, a), {
            style: l,
            className: (0, o.A)(
              a.className,
              A.codeBlockContainer,
              s.G.common.codeBlock
            ),
          })
        );
      }
      const R = {
        codeBlockContent: 'codeBlockContent_biex',
        codeBlockTitle: 'codeBlockTitle_Ktv7',
        codeBlock: 'codeBlock_bY9V',
        codeBlockStandalone: 'codeBlockStandalone_MEMb',
        codeBlockLines: 'codeBlockLines_e6Vv',
        codeBlockLinesWithNumbering: 'codeBlockLinesWithNumbering_o6Pm',
        buttonGroup: 'buttonGroup__atx',
      };
      function H({children: e, className: t}) {
        return n.createElement(
          z,
          {
            as: 'pre',
            tabIndex: 0,
            className: (0, o.A)(R.codeBlockStandalone, 'thin-scrollbar', t),
          },
          n.createElement('code', {className: R.codeBlockLines}, e)
        );
      }
      var U = r(8939);
      const V = {attributes: !0, characterData: !0, childList: !0, subtree: !0};
      function W(e, t) {
        const [r, a] = (0, n.useState)(),
          o = (0, n.useCallback)(() => {
            var t;
            a(
              null == (t = e.current)
                ? void 0
                : t.closest('[role=tabpanel][hidden]')
            );
          }, [e, a]);
        (0, n.useEffect)(() => {
          o();
        }, [o]),
          (function (e, t, r = V) {
            const a = (0, U._q)(t),
              o = (0, U.Be)(r);
            (0, n.useEffect)(() => {
              const t = new MutationObserver(a);
              return e && t.observe(e, o), () => t.disconnect();
            }, [e, a, o]);
          })(
            r,
            e => {
              e.forEach(e => {
                'attributes' === e.type &&
                  'hidden' === e.attributeName &&
                  (t(), o());
              });
            },
            {attributes: !0, characterData: !1, childList: !1, subtree: !1}
          );
      }
      var $ = r(7663);
      const G = {
        codeLine: 'codeLine_lJS_',
        codeLineNumber: 'codeLineNumber_Tfdd',
        codeLineContent: 'codeLineContent_feaV',
      };
      var q = Object.defineProperty,
        F = Object.getOwnPropertySymbols,
        Z = Object.prototype.hasOwnProperty,
        J = Object.prototype.propertyIsEnumerable,
        Y = (e, t, r) =>
          t in e
            ? q(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        K = (e, t) => {
          for (var r in t || (t = {})) Z.call(t, r) && Y(e, r, t[r]);
          if (F) for (var r of F(t)) J.call(t, r) && Y(e, r, t[r]);
          return e;
        };
      function Q({
        line: e,
        classNames: t,
        showLineNumbers: r,
        getLineProps: a,
        getTokenProps: l,
      }) {
        1 === e.length && '\n' === e[0].content && (e[0].content = '');
        const c = a({line: e, className: (0, o.A)(t, r && G.codeLine)}),
          i = e.map((e, t) =>
            n.createElement('span', K({key: t}, l({token: e, key: t})))
          );
        return n.createElement(
          'span',
          K({}, c),
          r
            ? n.createElement(
                n.Fragment,
                null,
                n.createElement('span', {className: G.codeLineNumber}),
                n.createElement('span', {className: G.codeLineContent}, i)
              )
            : i,
          n.createElement('br', null)
        );
      }
      var X = r(5830),
        ee = Object.defineProperty,
        te = Object.getOwnPropertySymbols,
        re = Object.prototype.hasOwnProperty,
        ne = Object.prototype.propertyIsEnumerable,
        ae = (e, t, r) =>
          t in e
            ? ee(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        oe = (e, t) => {
          for (var r in t || (t = {})) re.call(t, r) && ae(e, r, t[r]);
          if (te) for (var r of te(t)) ne.call(t, r) && ae(e, r, t[r]);
          return e;
        };
      function le(e) {
        return n.createElement(
          'svg',
          oe({viewBox: '0 0 24 24'}, e),
          n.createElement('path', {
            fill: 'currentColor',
            d: 'M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z',
          })
        );
      }
      var ce = Object.defineProperty,
        ie = Object.getOwnPropertySymbols,
        se = Object.prototype.hasOwnProperty,
        ue = Object.prototype.propertyIsEnumerable,
        pe = (e, t, r) =>
          t in e
            ? ce(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        me = (e, t) => {
          for (var r in t || (t = {})) se.call(t, r) && pe(e, r, t[r]);
          if (ie) for (var r of ie(t)) ue.call(t, r) && pe(e, r, t[r]);
          return e;
        };
      function de(e) {
        return n.createElement(
          'svg',
          me({viewBox: '0 0 24 24'}, e),
          n.createElement('path', {
            fill: 'currentColor',
            d: 'M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z',
          })
        );
      }
      const be = {
        copyButtonCopied: 'copyButtonCopied_obH4',
        copyButtonIcons: 'copyButtonIcons_eSgA',
        copyButtonIcon: 'copyButtonIcon_y97N',
        copyButtonSuccessIcon: 'copyButtonSuccessIcon_LjdS',
      };
      function fe({code: e, className: t}) {
        const [r, a] = (0, n.useState)(!1),
          l = (0, n.useRef)(void 0),
          c = (0, n.useCallback)(() => {
            !(function (e, {target: t = document.body} = {}) {
              if ('string' != typeof e)
                throw new TypeError(
                  `Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`
                );
              const r = document.createElement('textarea'),
                n = document.activeElement;
              (r.value = e),
                r.setAttribute('readonly', ''),
                (r.style.contain = 'strict'),
                (r.style.position = 'absolute'),
                (r.style.left = '-9999px'),
                (r.style.fontSize = '12pt');
              const a = document.getSelection(),
                o = a.rangeCount > 0 && a.getRangeAt(0);
              t.append(r),
                r.select(),
                (r.selectionStart = 0),
                (r.selectionEnd = e.length);
              let l = !1;
              try {
                l = document.execCommand('copy');
              } catch (c) {}
              r.remove(),
                o && (a.removeAllRanges(), a.addRange(o)),
                n && n.focus();
            })(e),
              a(!0),
              (l.current = window.setTimeout(() => {
                a(!1);
              }, 1e3));
          }, [e]);
        return (
          (0, n.useEffect)(() => () => window.clearTimeout(l.current), []),
          n.createElement(
            'button',
            {
              type: 'button',
              'aria-label': r
                ? (0, X.T)({
                    id: 'theme.CodeBlock.copied',
                    message: 'Copied',
                    description: 'The copied button label on code blocks',
                  })
                : (0, X.T)({
                    id: 'theme.CodeBlock.copyButtonAriaLabel',
                    message: 'Copy code to clipboard',
                    description: 'The ARIA label for copy code blocks button',
                  }),
              title: (0, X.T)({
                id: 'theme.CodeBlock.copy',
                message: 'Copy',
                description: 'The copy button label on code blocks',
              }),
              className: (0, o.A)(
                'clean-btn',
                t,
                be.copyButton,
                r && be.copyButtonCopied
              ),
              onClick: c,
            },
            n.createElement(
              'span',
              {className: be.copyButtonIcons, 'aria-hidden': 'true'},
              n.createElement(le, {className: be.copyButtonIcon}),
              n.createElement(de, {className: be.copyButtonSuccessIcon})
            )
          )
        );
      }
      var ye = Object.defineProperty,
        ve = Object.getOwnPropertySymbols,
        Oe = Object.prototype.hasOwnProperty,
        ge = Object.prototype.propertyIsEnumerable,
        he = (e, t, r) =>
          t in e
            ? ye(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        Ee = (e, t) => {
          for (var r in t || (t = {})) Oe.call(t, r) && he(e, r, t[r]);
          if (ve) for (var r of ve(t)) ge.call(t, r) && he(e, r, t[r]);
          return e;
        };
      function je(e) {
        return n.createElement(
          'svg',
          Ee({viewBox: '0 0 24 24'}, e),
          n.createElement('path', {
            fill: 'currentColor',
            d: 'M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z',
          })
        );
      }
      const we = {
        wordWrapButtonIcon: 'wordWrapButtonIcon_Bwma',
        wordWrapButtonEnabled: 'wordWrapButtonEnabled_EoeP',
      };
      function Pe({className: e, onClick: t, isEnabled: r}) {
        const a = (0, X.T)({
          id: 'theme.CodeBlock.wordWrapToggle',
          message: 'Toggle word wrap',
          description:
            'The title attribute for toggle word wrapping button of code block lines',
        });
        return n.createElement(
          'button',
          {
            type: 'button',
            onClick: t,
            className: (0, o.A)('clean-btn', e, r && we.wordWrapButtonEnabled),
            'aria-label': a,
            title: a,
          },
          n.createElement(je, {
            className: we.wordWrapButtonIcon,
            'aria-hidden': 'true',
          })
        );
      }
      function Ne({
        children: e,
        className: t = '',
        metastring: r,
        title: a,
        showLineNumbers: l,
        language: s,
      }) {
        var u;
        const {
            prism: {defaultLanguage: p, magicComments: m},
          } = (0, c.p)(),
          d = (function (e) {
            return null == e ? void 0 : e.toLowerCase();
          })(
            null !=
              (u =
                null != s
                  ? s
                  : (function (e) {
                      const t = e
                        .split(' ')
                        .find(e => e.startsWith('language-'));
                      return null == t ? void 0 : t.replace(/language-/, '');
                    })(t))
              ? u
              : p
          ),
          b = i(),
          f = (function () {
            const [e, t] = (0, n.useState)(!1),
              [r, a] = (0, n.useState)(!1),
              o = (0, n.useRef)(null),
              l = (0, n.useCallback)(() => {
                const r = o.current.querySelector('code');
                e
                  ? r.removeAttribute('style')
                  : ((r.style.whiteSpace = 'pre-wrap'),
                    (r.style.overflowWrap = 'anywhere')),
                  t(e => !e);
              }, [o, e]),
              c = (0, n.useCallback)(() => {
                const {scrollWidth: e, clientWidth: t} = o.current,
                  r =
                    e > t ||
                    o.current.querySelector('code').hasAttribute('style');
                a(r);
              }, [o]);
            return (
              W(o, c),
              (0, n.useEffect)(() => {
                c();
              }, [e, c]),
              (0, n.useEffect)(
                () => (
                  window.addEventListener('resize', c, {passive: !0}),
                  () => {
                    window.removeEventListener('resize', c);
                  }
                ),
                [c]
              ),
              {codeBlockRef: o, isEnabled: e, isCodeScrollable: r, toggle: l}
            );
          })(),
          y =
            (function (e) {
              var t, r;
              return null !=
                (r =
                  null == (t = null == e ? void 0 : e.match(g))
                    ? void 0
                    : t.groups.title)
                ? r
                : '';
            })(r) || a,
          {lineClassNames: v, code: O} = k(e, {
            metastring: r,
            language: d,
            magicComments: m,
          }),
          h =
            null != l
              ? l
              : (function (e) {
                  return Boolean(
                    null == e ? void 0 : e.includes('showLineNumbers')
                  );
                })(r);
        return n.createElement(
          z,
          {
            as: 'div',
            className: (0, o.A)(
              t,
              d && !t.includes(`language-${d}`) && `language-${d}`
            ),
          },
          y && n.createElement('div', {className: R.codeBlockTitle}, y),
          n.createElement(
            'div',
            {className: R.codeBlockContent},
            n.createElement(
              $.f4,
              {theme: b, code: O, language: null != d ? d : 'text'},
              ({
                className: e,
                style: t,
                tokens: r,
                getLineProps: a,
                getTokenProps: l,
              }) =>
                n.createElement(
                  'pre',
                  {
                    tabIndex: 0,
                    ref: f.codeBlockRef,
                    className: (0, o.A)(e, R.codeBlock, 'thin-scrollbar'),
                    style: t,
                  },
                  n.createElement(
                    'code',
                    {
                      className: (0, o.A)(
                        R.codeBlockLines,
                        h && R.codeBlockLinesWithNumbering
                      ),
                    },
                    r.map((e, t) =>
                      n.createElement(Q, {
                        key: t,
                        line: e,
                        getLineProps: a,
                        getTokenProps: l,
                        classNames: v[t],
                        showLineNumbers: h,
                      })
                    )
                  )
                )
            ),
            n.createElement(
              'div',
              {className: R.buttonGroup},
              (f.isEnabled || f.isCodeScrollable) &&
                n.createElement(Pe, {
                  className: R.codeButton,
                  onClick: () => f.toggle(),
                  isEnabled: f.isEnabled,
                }),
              n.createElement(fe, {className: R.codeButton, code: O})
            )
          )
        );
      }
      var ke = Object.defineProperty,
        Ae = Object.getOwnPropertySymbols,
        Be = Object.prototype.hasOwnProperty,
        Ce = Object.prototype.propertyIsEnumerable,
        Se = (e, t, r) =>
          t in e
            ? ke(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        Ie = (e, t) => {
          for (var r in t || (t = {})) Be.call(t, r) && Se(e, r, t[r]);
          if (Ae) for (var r of Ae(t)) Ce.call(t, r) && Se(e, r, t[r]);
          return e;
        },
        xe = (e, t) => {
          var r = {};
          for (var n in e) Be.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
          if (null != e && Ae)
            for (var n of Ae(e))
              t.indexOf(n) < 0 && Ce.call(e, n) && (r[n] = e[n]);
          return r;
        };
      function _e(e) {
        var t = e,
          {children: r} = t,
          o = xe(t, ['children']);
        const l = (0, a.A)(),
          c = (function (e) {
            return n.Children.toArray(e).some(e => (0, n.isValidElement)(e))
              ? e
              : Array.isArray(e)
              ? e.join('')
              : e;
          })(r),
          i = 'string' == typeof c ? Ne : H;
        return n.createElement(i, Ie({key: String(l)}, o), c);
      }
    },
    1374: (e, t, r) => {
      'use strict';
      r.d(t, {A: () => v});
      var n = r(3696),
        a = r(5830),
        o = r(4850),
        l = r(2915),
        c = r(1750);
      const i = {iconEdit: 'iconEdit_Z9Sw'};
      var s = Object.defineProperty,
        u = Object.getOwnPropertySymbols,
        p = Object.prototype.hasOwnProperty,
        m = Object.prototype.propertyIsEnumerable,
        d = (e, t, r) =>
          t in e
            ? s(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        b = (e, t) => {
          for (var r in t || (t = {})) p.call(t, r) && d(e, r, t[r]);
          if (u) for (var r of u(t)) m.call(t, r) && d(e, r, t[r]);
          return e;
        },
        f = (e, t) => {
          var r = {};
          for (var n in e) p.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
          if (null != e && u)
            for (var n of u(e))
              t.indexOf(n) < 0 && m.call(e, n) && (r[n] = e[n]);
          return r;
        };
      function y(e) {
        var t = e,
          {className: r} = t,
          a = f(t, ['className']);
        return n.createElement(
          'svg',
          b(
            {
              fill: 'currentColor',
              height: '20',
              width: '20',
              viewBox: '0 0 40 40',
              className: (0, c.A)(i.iconEdit, r),
              'aria-hidden': 'true',
            },
            a
          ),
          n.createElement(
            'g',
            null,
            n.createElement('path', {
              d: 'm34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z',
            })
          )
        );
      }
      function v({editUrl: e}) {
        return n.createElement(
          l.A,
          {to: e, className: o.G.common.editThisPage},
          n.createElement(y, null),
          n.createElement(
            a.A,
            {
              id: 'theme.common.editThisPage',
              description: 'The link label to edit the current page',
            },
            'Edit this page'
          )
        );
      }
    },
    562: (e, t, r) => {
      'use strict';
      r.d(t, {A: () => s});
      var n = r(3696),
        a = r(5830),
        o = r(4850),
        l = r(6355);
      function c({lastUpdatedAt: e}) {
        const t = new Date(e),
          r = (0, l.i)({
            day: 'numeric',
            month: 'short',
            year: 'numeric',
            timeZone: 'UTC',
          }).format(t);
        return n.createElement(
          a.A,
          {
            id: 'theme.lastUpdated.atDate',
            description:
              'The words used to describe on which date a page has been last updated',
            values: {
              date: n.createElement(
                'b',
                null,
                n.createElement(
                  'time',
                  {dateTime: t.toISOString(), itemProp: 'dateModified'},
                  r
                )
              ),
            },
          },
          ' on {date}'
        );
      }
      function i({lastUpdatedBy: e}) {
        return n.createElement(
          a.A,
          {
            id: 'theme.lastUpdated.byUser',
            description:
              'The words used to describe by who the page has been last updated',
            values: {user: n.createElement('b', null, e)},
          },
          ' by {user}'
        );
      }
      function s({lastUpdatedAt: e, lastUpdatedBy: t}) {
        return n.createElement(
          'span',
          {className: o.G.common.lastUpdated},
          n.createElement(
            a.A,
            {
              id: 'theme.lastUpdated.lastUpdatedAtBy',
              description:
                'The sentence used to display when a page has been last updated, and by who',
              values: {
                atDate: e ? n.createElement(c, {lastUpdatedAt: e}) : '',
                byUser: t ? n.createElement(i, {lastUpdatedBy: t}) : '',
              },
            },
            'Last updated{atDate}{byUser}'
          ),
          !1
        );
      }
    },
    7043: (e, t, r) => {
      'use strict';
      r.d(t, {A: () => Te});
      var n = r(3696),
        a = r(3023),
        o = r(2201),
        l = r(3151),
        c = r(2915),
        i = Object.defineProperty,
        s = Object.getOwnPropertySymbols,
        u = Object.prototype.hasOwnProperty,
        p = Object.prototype.propertyIsEnumerable,
        m = (e, t, r) =>
          t in e
            ? i(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r);
      var d = r(1750),
        b = r(1800),
        f = r(9266),
        y = r(9393);
      const v = {
        details: 'details_lb9f',
        isBrowser: 'isBrowser_bmU9',
        collapsibleContent: 'collapsibleContent_i85q',
      };
      var O = Object.defineProperty,
        g = Object.defineProperties,
        h = Object.getOwnPropertyDescriptors,
        E = Object.getOwnPropertySymbols,
        j = Object.prototype.hasOwnProperty,
        w = Object.prototype.propertyIsEnumerable,
        P = (e, t, r) =>
          t in e
            ? O(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        N = (e, t) => {
          for (var r in t || (t = {})) j.call(t, r) && P(e, r, t[r]);
          if (E) for (var r of E(t)) w.call(t, r) && P(e, r, t[r]);
          return e;
        },
        k = (e, t) => g(e, h(t)),
        A = (e, t) => {
          var r = {};
          for (var n in e) j.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
          if (null != e && E)
            for (var n of E(e))
              t.indexOf(n) < 0 && w.call(e, n) && (r[n] = e[n]);
          return r;
        };
      function B(e) {
        return !!e && ('SUMMARY' === e.tagName || B(e.parentElement));
      }
      function C(e, t) {
        return !!e && (e === t || C(e.parentElement, t));
      }
      function S(e) {
        var t = e,
          {summary: r, children: a} = t,
          o = A(t, ['summary', 'children']);
        (0, b.A)().collectAnchor(o.id);
        const l = (0, f.A)(),
          c = (0, n.useRef)(null),
          {collapsed: i, setCollapsed: s} = (0, y.u)({initialState: !o.open}),
          [u, p] = (0, n.useState)(o.open),
          m = n.isValidElement(r)
            ? r
            : n.createElement('summary', null, null != r ? r : 'Details');
        return n.createElement(
          'details',
          k(N({}, o), {
            ref: c,
            open: u,
            'data-collapsed': i,
            className: (0, d.A)(v.details, l && v.isBrowser, o.className),
            onMouseDown: e => {
              B(e.target) && e.detail > 1 && e.preventDefault();
            },
            onClick: e => {
              e.stopPropagation();
              const t = e.target;
              B(t) &&
                C(t, c.current) &&
                (e.preventDefault(), i ? (s(!1), p(!0)) : s(!0));
            },
          }),
          m,
          n.createElement(
            y.N,
            {
              lazy: !1,
              collapsed: i,
              disableSSRStyle: !0,
              onCollapseTransitionEnd: e => {
                s(e), p(!e);
              },
            },
            n.createElement('div', {className: v.collapsibleContent}, a)
          )
        );
      }
      const I = {details: 'details_b_Ee'};
      var x = Object.defineProperty,
        _ = Object.defineProperties,
        L = Object.getOwnPropertyDescriptors,
        T = Object.getOwnPropertySymbols,
        D = Object.prototype.hasOwnProperty,
        M = Object.prototype.propertyIsEnumerable,
        z = (e, t, r) =>
          t in e
            ? x(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        R = (e, t) => {
          for (var r in t || (t = {})) D.call(t, r) && z(e, r, t[r]);
          if (T) for (var r of T(t)) M.call(t, r) && z(e, r, t[r]);
          return e;
        },
        H = (e, t) => _(e, L(t)),
        U = (e, t) => {
          var r = {};
          for (var n in e) D.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
          if (null != e && T)
            for (var n of T(e))
              t.indexOf(n) < 0 && M.call(e, n) && (r[n] = e[n]);
          return r;
        };
      const V = 'alert alert--info';
      function W(e) {
        var t = U(e, []);
        return n.createElement(
          S,
          H(R({}, t), {className: (0, d.A)(V, I.details, t.className)})
        );
      }
      var $ = Object.defineProperty,
        G = Object.defineProperties,
        q = Object.getOwnPropertyDescriptors,
        F = Object.getOwnPropertySymbols,
        Z = Object.prototype.hasOwnProperty,
        J = Object.prototype.propertyIsEnumerable,
        Y = (e, t, r) =>
          t in e
            ? $(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r);
      function K(e) {
        const t = n.Children.toArray(e.children),
          r = t.find(e => n.isValidElement(e) && 'summary' === e.type),
          a = n.createElement(
            n.Fragment,
            null,
            t.filter(e => e !== r)
          );
        return n.createElement(
          W,
          ((o = ((e, t) => {
            for (var r in t || (t = {})) Z.call(t, r) && Y(e, r, t[r]);
            if (F) for (var r of F(t)) J.call(t, r) && Y(e, r, t[r]);
            return e;
          })({}, e)),
          G(o, q({summary: r}))),
          a
        );
        var o;
      }
      var Q = r(702),
        X = Object.defineProperty,
        ee = Object.getOwnPropertySymbols,
        te = Object.prototype.hasOwnProperty,
        re = Object.prototype.propertyIsEnumerable,
        ne = (e, t, r) =>
          t in e
            ? X(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r);
      function ae(e) {
        return n.createElement(
          Q.A,
          ((e, t) => {
            for (var r in t || (t = {})) te.call(t, r) && ne(e, r, t[r]);
            if (ee) for (var r of ee(t)) re.call(t, r) && ne(e, r, t[r]);
            return e;
          })({}, e)
        );
      }
      const oe = {containsTaskList: 'containsTaskList_mC6p'};
      var le = Object.defineProperty,
        ce = Object.defineProperties,
        ie = Object.getOwnPropertyDescriptors,
        se = Object.getOwnPropertySymbols,
        ue = Object.prototype.hasOwnProperty,
        pe = Object.prototype.propertyIsEnumerable,
        me = (e, t, r) =>
          t in e
            ? le(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r);
      function de(e) {
        if (void 0 !== e)
          return (0, d.A)(
            e,
            (null == e ? void 0 : e.includes('contains-task-list')) &&
              oe.containsTaskList
          );
      }
      var be = Object.defineProperty,
        fe = Object.getOwnPropertySymbols,
        ye = Object.prototype.hasOwnProperty,
        ve = Object.prototype.propertyIsEnumerable,
        Oe = (e, t, r) =>
          t in e
            ? be(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r);
      const ge = {img: 'img_ev3q'};
      var he = Object.defineProperty,
        Ee = Object.defineProperties,
        je = Object.getOwnPropertyDescriptors,
        we = Object.getOwnPropertySymbols,
        Pe = Object.prototype.hasOwnProperty,
        Ne = Object.prototype.propertyIsEnumerable,
        ke = (e, t, r) =>
          t in e
            ? he(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r);
      var Ae = r(8670);
      var Be = Object.defineProperty,
        Ce = Object.getOwnPropertySymbols,
        Se = Object.prototype.hasOwnProperty,
        Ie = Object.prototype.propertyIsEnumerable,
        xe = (e, t, r) =>
          t in e
            ? Be(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        _e = (e, t) => {
          for (var r in t || (t = {})) Se.call(t, r) && xe(e, r, t[r]);
          if (Ce) for (var r of Ce(t)) Ie.call(t, r) && xe(e, r, t[r]);
          return e;
        };
      const Le = {
        Head: o.A,
        details: K,
        Details: K,
        code: l.A,
        a: function (e) {
          return n.createElement(
            c.A,
            ((e, t) => {
              for (var r in t || (t = {})) u.call(t, r) && m(e, r, t[r]);
              if (s) for (var r of s(t)) p.call(t, r) && m(e, r, t[r]);
              return e;
            })({}, e)
          );
        },
        pre: function (e) {
          return n.createElement(n.Fragment, null, e.children);
        },
        ul: function (e) {
          return n.createElement(
            'ul',
            ((t = ((e, t) => {
              for (var r in t || (t = {})) ue.call(t, r) && me(e, r, t[r]);
              if (se) for (var r of se(t)) pe.call(t, r) && me(e, r, t[r]);
              return e;
            })({}, e)),
            (r = {className: de(e.className)}),
            ce(t, ie(r)))
          );
          var t, r;
        },
        li: function (e) {
          return (
            (0, b.A)().collectAnchor(e.id),
            n.createElement(
              'li',
              ((e, t) => {
                for (var r in t || (t = {})) ye.call(t, r) && Oe(e, r, t[r]);
                if (fe) for (var r of fe(t)) ve.call(t, r) && Oe(e, r, t[r]);
                return e;
              })({}, e)
            )
          );
        },
        img: function (e) {
          return n.createElement(
            'img',
            ((t = ((e, t) => {
              for (var r in t || (t = {})) Pe.call(t, r) && ke(e, r, t[r]);
              if (we) for (var r of we(t)) Ne.call(t, r) && ke(e, r, t[r]);
              return e;
            })({decoding: 'async', loading: 'lazy'}, e)),
            (r = {className: ((a = e.className), (0, d.A)(a, ge.img))}),
            Ee(t, je(r)))
          );
          var t, r, a;
        },
        h1: e => n.createElement(ae, _e({as: 'h1'}, e)),
        h2: e => n.createElement(ae, _e({as: 'h2'}, e)),
        h3: e => n.createElement(ae, _e({as: 'h3'}, e)),
        h4: e => n.createElement(ae, _e({as: 'h4'}, e)),
        h5: e => n.createElement(ae, _e({as: 'h5'}, e)),
        h6: e => n.createElement(ae, _e({as: 'h6'}, e)),
        admonition: Ae.A,
        mermaid: () => null,
      };
      function Te({children: e}) {
        return n.createElement(a.x, {components: Le}, e);
      }
    },
    8455: (e, t, r) => {
      'use strict';
      r.d(t, {A: () => l});
      var n = r(3696),
        a = r(1750),
        o = r(2915);
      function l(e) {
        const {permalink: t, title: r, subLabel: l, isNext: c} = e;
        return n.createElement(
          o.A,
          {
            className: (0, a.A)(
              'pagination-nav__link',
              c ? 'pagination-nav__link--next' : 'pagination-nav__link--prev'
            ),
            to: t,
          },
          l &&
            n.createElement('div', {className: 'pagination-nav__sublabel'}, l),
          n.createElement('div', {className: 'pagination-nav__label'}, r)
        );
      }
    },
    8532: (e, t, r) => {
      'use strict';
      r.d(t, {A: () => c});
      var n = r(3696),
        a = r(1750),
        o = r(2915);
      const l = {
        tag: 'tag_zVej',
        tagRegular: 'tagRegular_sFm0',
        tagWithCount: 'tagWithCount_h2kH',
      };
      function c({permalink: e, label: t, count: r}) {
        return n.createElement(
          o.A,
          {
            href: e,
            className: (0, a.A)(l.tag, r ? l.tagWithCount : l.tagRegular),
          },
          t,
          r && n.createElement('span', null, r)
        );
      }
    },
    9014: (e, t, r) => {
      'use strict';
      r.d(t, {A: () => i});
      var n = r(3696),
        a = r(1750),
        o = r(5830),
        l = r(8532);
      const c = {tags: 'tags_jXut', tag: 'tag_QGVx'};
      function i({tags: e}) {
        return n.createElement(
          n.Fragment,
          null,
          n.createElement(
            'b',
            null,
            n.createElement(
              o.A,
              {
                id: 'theme.tags.tagsListLabel',
                description: 'The label alongside a tag list',
              },
              'Tags:'
            )
          ),
          n.createElement(
            'ul',
            {className: (0, a.A)(c.tags, 'padding--none', 'margin-left--sm')},
            e.map(({label: e, permalink: t}) =>
              n.createElement(
                'li',
                {key: t, className: c.tag},
                n.createElement(l.A, {label: e, permalink: t})
              )
            )
          )
        );
      }
    },
    6355: (e, t, r) => {
      'use strict';
      r.d(t, {i: () => u});
      var n = r(5067),
        a = Object.defineProperty,
        o = Object.getOwnPropertySymbols,
        l = Object.prototype.hasOwnProperty,
        c = Object.prototype.propertyIsEnumerable,
        i = (e, t, r) =>
          t in e
            ? a(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        s = (e, t) => {
          for (var r in t || (t = {})) l.call(t, r) && i(e, r, t[r]);
          if (o) for (var r of o(t)) c.call(t, r) && i(e, r, t[r]);
          return e;
        };
      function u(e = {}) {
        const {
            i18n: {currentLocale: t},
          } = (0, n.A)(),
          r = (function () {
            const {
              i18n: {currentLocale: e, localeConfigs: t},
            } = (0, n.A)();
            return t[e].calendar;
          })();
        return new Intl.DateTimeFormat(t, s({calendar: r}, e));
      }
    },
    9934: (e, t) => {
      function r(e) {
        let t,
          r = [];
        for (let n of e.split(',').map(e => e.trim()))
          if (/^-?\d+$/.test(n)) r.push(parseInt(n, 10));
          else if (
            (t = n.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/))
          ) {
            let [e, n, a, o] = t;
            if (n && o) {
              (n = parseInt(n)), (o = parseInt(o));
              const e = n < o ? 1 : -1;
              ('-' !== a && '..' !== a && '\u2025' !== a) || (o += e);
              for (let t = n; t !== o; t += e) r.push(t);
            }
          }
        return r;
      }
      (t.default = r), (e.exports = r);
    },
    3023: (e, t, r) => {
      'use strict';
      r.d(t, {R: () => l, x: () => c});
      var n = r(3696);
      const a = {},
        o = n.createContext(a);
      function l(e) {
        const t = n.useContext(o);
        return n.useMemo(
          function () {
            return 'function' == typeof e ? e(t) : {...t, ...e};
          },
          [t, e]
        );
      }
      function c(e) {
        let t;
        return (
          (t = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(a)
              : e.components || a
            : l(e.components)),
          n.createElement(o.Provider, {value: t}, e.children)
        );
      }
    },
  },
]);

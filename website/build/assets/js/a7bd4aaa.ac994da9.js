'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [7098],
  {
    8989: (e, t, n) => {
      n.r(t), n.d(t, {default: () => w});
      var r = n(3696),
        a = n(3101),
        o = n(8950),
        l = n(5503),
        c = n(3971),
        s = n(126),
        i = Object.defineProperty,
        u = Object.getOwnPropertySymbols,
        m = Object.prototype.hasOwnProperty,
        b = Object.prototype.propertyIsEnumerable,
        f = (e, t, n) =>
          t in e
            ? i(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        p = (e, t) => {
          for (var n in t || (t = {})) m.call(t, n) && f(e, n, t[n]);
          if (u) for (var n of u(t)) b.call(t, n) && f(e, n, t[n]);
          return e;
        };
      function v(e) {
        const {version: t} = e;
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(s.A, {
            version: t.version,
            tag: (0, o.tU)(t.pluginId, t.version),
          }),
          r.createElement(
            a.be,
            null,
            t.noIndex &&
              r.createElement('meta', {
                name: 'robots',
                content: 'noindex, nofollow',
              })
          )
        );
      }
      function E(e) {
        const {version: t, route: n} = e;
        return r.createElement(
          a.e3,
          {className: t.className},
          r.createElement(l.n, {version: t}, (0, c.v)(n.routes))
        );
      }
      function w(e) {
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(v, p({}, e)),
          r.createElement(E, p({}, e))
        );
      }
    },
  },
]);
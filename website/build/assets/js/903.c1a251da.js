'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [903],
  {
    903: (e, t, r) => {
      r.r(t), r.d(t, {renderReloadPopup: () => f});
      var n = r(3696),
        a = r(8325),
        o = Object.defineProperty,
        c = Object.getOwnPropertySymbols,
        l = Object.prototype.hasOwnProperty,
        p = Object.prototype.propertyIsEnumerable,
        u = (e, t, r) =>
          t in e
            ? o(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        i = (e, t) => {
          for (var r in t || (t = {})) l.call(t, r) && u(e, r, t[r]);
          if (c) for (var r of c(t)) p.call(t, r) && u(e, r, t[r]);
          return e;
        };
      const d = 'pwa-popup-container',
        b = () => document.getElementById(d),
        s = () => {
          const e = document.createElement('div');
          return (e.id = d), document.body.appendChild(e), e;
        };
      function f(e) {
        var t;
        const o = null != (t = b()) ? t : s();
        return Promise.all([r.e(1869), r.e(3475)])
          .then(r.bind(r, 3475))
          .then(({default: t}) => {
            a.render(n.createElement(t, i({}, e)), o);
          });
      }
    },
  },
]);
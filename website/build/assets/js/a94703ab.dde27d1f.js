'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [9048],
  {
    5377: (e, t, a) => {
      a.r(t), a.d(t, {default: () => ze});
      var n = a(3696),
        r = a(1750),
        o = a(3101),
        l = a(4850),
        i = a(5513),
        c = a(9319),
        s = a(5830),
        d = a(3649),
        m = a(1087);
      const u = {
        backToTopButton: 'backToTopButton_sjWU',
        backToTopButtonShow: 'backToTopButtonShow_xfvO',
      };
      function b() {
        const {shown: e, scrollToTop: t} = (function ({threshold: e}) {
          const [t, a] = (0, n.useState)(!1),
            r = (0, n.useRef)(!1),
            {startScroll: o, cancelScroll: l} = (0, d.gk)();
          return (
            (0, d.Mq)(({scrollY: t}, n) => {
              const o = null == n ? void 0 : n.scrollY;
              o &&
                (r.current
                  ? (r.current = !1)
                  : t >= o
                  ? (l(), a(!1))
                  : t < e
                  ? a(!1)
                  : t + window.innerHeight <
                      document.documentElement.scrollHeight && a(!0));
            }),
            (0, m.$)(e => {
              e.location.hash && ((r.current = !0), a(!1));
            }),
            {shown: t, scrollToTop: () => o(0)}
          );
        })({threshold: 300});
        return n.createElement('button', {
          'aria-label': (0, s.T)({
            id: 'theme.BackToTopButton.buttonAriaLabel',
            message: 'Scroll back to top',
            description: 'The ARIA label for the back to top button',
          }),
          className: (0, r.A)(
            'clean-btn',
            l.G.common.backToTopButton,
            u.backToTopButton,
            e && u.backToTopButtonShow
          ),
          type: 'button',
          onClick: t,
        });
      }
      var p = a(450),
        f = a(9519),
        h = a(3212),
        v = a(17),
        E = a(9528),
        y = Object.defineProperty,
        g = Object.getOwnPropertySymbols,
        _ = Object.prototype.hasOwnProperty,
        k = Object.prototype.propertyIsEnumerable,
        S = (e, t, a) =>
          t in e
            ? y(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        A = (e, t) => {
          for (var a in t || (t = {})) _.call(t, a) && S(e, a, t[a]);
          if (g) for (var a of g(t)) k.call(t, a) && S(e, a, t[a]);
          return e;
        };
      function C(e) {
        return n.createElement(
          'svg',
          A({width: '20', height: '20', 'aria-hidden': 'true'}, e),
          n.createElement(
            'g',
            {fill: '#7a7a7a'},
            n.createElement('path', {
              d: 'M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0',
            }),
            n.createElement('path', {
              d: 'M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0',
            })
          )
        );
      }
      const I = {
        collapseSidebarButton: 'collapseSidebarButton_PEFL',
        collapseSidebarButtonIcon: 'collapseSidebarButtonIcon_kv0_',
      };
      function x({onClick: e}) {
        return n.createElement(
          'button',
          {
            type: 'button',
            title: (0, s.T)({
              id: 'theme.docs.sidebar.collapseButtonTitle',
              message: 'Collapse sidebar',
              description:
                'The title attribute for collapse button of doc sidebar',
            }),
            'aria-label': (0, s.T)({
              id: 'theme.docs.sidebar.collapseButtonAriaLabel',
              message: 'Collapse sidebar',
              description:
                'The title attribute for collapse button of doc sidebar',
            }),
            className: (0, r.A)(
              'button button--secondary button--outline',
              I.collapseSidebarButton
            ),
            onClick: e,
          },
          n.createElement(C, {className: I.collapseSidebarButtonIcon})
        );
      }
      var O = a(5302),
        w = a(8939);
      const T = Symbol('EmptyContext'),
        N = n.createContext(T);
      function B({children: e}) {
        const [t, a] = (0, n.useState)(null),
          r = (0, n.useMemo)(
            () => ({expandedItem: t, setExpandedItem: a}),
            [t]
          );
        return n.createElement(N.Provider, {value: r}, e);
      }
      var P = a(9393),
        j = a(4504),
        L = a(2915),
        M = a(9266),
        H = Object.defineProperty,
        G = Object.getOwnPropertySymbols,
        W = Object.prototype.hasOwnProperty,
        R = Object.prototype.propertyIsEnumerable,
        D = (e, t, a) =>
          t in e
            ? H(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        F = (e, t) => {
          for (var a in t || (t = {})) W.call(t, a) && D(e, a, t[a]);
          if (G) for (var a of G(t)) R.call(t, a) && D(e, a, t[a]);
          return e;
        },
        U = (e, t) => {
          var a = {};
          for (var n in e) W.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n]);
          if (null != e && G)
            for (var n of G(e))
              t.indexOf(n) < 0 && R.call(e, n) && (a[n] = e[n]);
          return a;
        };
      function V({collapsed: e, categoryLabel: t, onClick: a}) {
        return n.createElement('button', {
          'aria-label': e
            ? (0, s.T)(
                {
                  id: 'theme.DocSidebarItem.expandCategoryAriaLabel',
                  message: "Expand sidebar category '{label}'",
                  description: 'The ARIA label to expand the sidebar category',
                },
                {label: t}
              )
            : (0, s.T)(
                {
                  id: 'theme.DocSidebarItem.collapseCategoryAriaLabel',
                  message: "Collapse sidebar category '{label}'",
                  description:
                    'The ARIA label to collapse the sidebar category',
                },
                {label: t}
              ),
          'aria-expanded': !e,
          type: 'button',
          className: 'clean-btn menu__caret',
          onClick: a,
        });
      }
      function Y(e) {
        var t = e,
          {item: a, onItemClick: o, activePath: c, level: s, index: d} = t,
          m = U(t, ['item', 'onItemClick', 'activePath', 'level', 'index']);
        const {items: u, label: b, collapsible: p, className: f, href: h} = a,
          {
            docs: {
              sidebar: {autoCollapseCategories: E},
            },
          } = (0, v.p)(),
          y = (function (e) {
            const t = (0, M.A)();
            return (0, n.useMemo)(
              () =>
                e.href && !e.linkUnlisted
                  ? e.href
                  : !t && e.collapsible
                  ? (0, i.Nr)(e)
                  : void 0,
              [e, t]
            );
          })(a),
          g = (0, i.w8)(a, c),
          _ = (0, j.ys)(h, c),
          {collapsed: k, setCollapsed: S} = (0, P.u)({
            initialState: () => !!p && !g && a.collapsed,
          }),
          {expandedItem: A, setExpandedItem: C} = (function () {
            const e = (0, n.useContext)(N);
            if (e === T) throw new w.dV('DocSidebarItemsExpandedStateProvider');
            return e;
          })(),
          I = (e = !k) => {
            C(e ? null : d), S(e);
          };
        return (
          (function ({isActive: e, collapsed: t, updateCollapsed: a}) {
            const r = (0, w.ZC)(e);
            (0, n.useEffect)(() => {
              e && !r && t && a(!1);
            }, [e, r, t, a]);
          })({isActive: g, collapsed: k, updateCollapsed: I}),
          (0, n.useEffect)(() => {
            p && null != A && A !== d && E && S(!0);
          }, [p, A, d, S, E]),
          n.createElement(
            'li',
            {
              className: (0, r.A)(
                l.G.docs.docSidebarItemCategory,
                l.G.docs.docSidebarItemCategoryLevel(s),
                'menu__list-item',
                {'menu__list-item--collapsed': k},
                f
              ),
            },
            n.createElement(
              'div',
              {
                className: (0, r.A)('menu__list-item-collapsible', {
                  'menu__list-item-collapsible--active': _,
                }),
              },
              n.createElement(
                L.A,
                F(
                  {
                    className: (0, r.A)('menu__link', {
                      'menu__link--sublist': p,
                      'menu__link--sublist-caret': !h && p,
                      'menu__link--active': g,
                    }),
                    onClick: p
                      ? e => {
                          null == o || o(a),
                            h ? I(!1) : (e.preventDefault(), I());
                        }
                      : () => {
                          null == o || o(a);
                        },
                    'aria-current': _ ? 'page' : void 0,
                    role: p && !h ? 'button' : void 0,
                    'aria-expanded': p && !h ? !k : void 0,
                    href: p ? (null != y ? y : '#') : y,
                  },
                  m
                ),
                b
              ),
              h &&
                p &&
                n.createElement(V, {
                  collapsed: k,
                  categoryLabel: b,
                  onClick: e => {
                    e.preventDefault(), I();
                  },
                })
            ),
            n.createElement(
              P.N,
              {lazy: !0, as: 'ul', className: 'menu__list', collapsed: k},
              n.createElement(Ee, {
                items: u,
                tabIndex: k ? -1 : 0,
                onItemClick: o,
                activePath: c,
                level: s + 1,
              })
            )
          )
        );
      }
      var K = a(6145),
        z = a(5878);
      const q = {menuExternalLink: 'menuExternalLink_NmtK'};
      var J = Object.defineProperty,
        Q = Object.getOwnPropertySymbols,
        X = Object.prototype.hasOwnProperty,
        Z = Object.prototype.propertyIsEnumerable,
        $ = (e, t, a) =>
          t in e
            ? J(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        ee = (e, t) => {
          for (var a in t || (t = {})) X.call(t, a) && $(e, a, t[a]);
          if (Q) for (var a of Q(t)) Z.call(t, a) && $(e, a, t[a]);
          return e;
        },
        te = (e, t) => {
          var a = {};
          for (var n in e) X.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n]);
          if (null != e && Q)
            for (var n of Q(e))
              t.indexOf(n) < 0 && Z.call(e, n) && (a[n] = e[n]);
          return a;
        };
      function ae(e) {
        var t = e,
          {item: a, onItemClick: o, activePath: c, level: s, index: d} = t,
          m = te(t, ['item', 'onItemClick', 'activePath', 'level', 'index']);
        const {href: u, label: b, className: p, autoAddBaseUrl: f} = a,
          h = (0, i.w8)(a, c),
          v = (0, K.A)(u);
        return n.createElement(
          'li',
          {
            className: (0, r.A)(
              l.G.docs.docSidebarItemLink,
              l.G.docs.docSidebarItemLinkLevel(s),
              'menu__list-item',
              p
            ),
            key: b,
          },
          n.createElement(
            L.A,
            ee(
              ee(
                {
                  className: (0, r.A)('menu__link', !v && q.menuExternalLink, {
                    'menu__link--active': h,
                  }),
                  autoAddBaseUrl: f,
                  'aria-current': h ? 'page' : void 0,
                  to: u,
                },
                v && {onClick: o ? () => o(a) : void 0}
              ),
              m
            ),
            b,
            !v && n.createElement(z.A, null)
          )
        );
      }
      const ne = {menuHtmlItem: 'menuHtmlItem_M9Kj'};
      function re({item: e, level: t, index: a}) {
        const {value: o, defaultStyle: i, className: c} = e;
        return n.createElement('li', {
          className: (0, r.A)(
            l.G.docs.docSidebarItemLink,
            l.G.docs.docSidebarItemLinkLevel(t),
            i && [ne.menuHtmlItem, 'menu__list-item'],
            c
          ),
          key: a,
          dangerouslySetInnerHTML: {__html: o},
        });
      }
      var oe = Object.defineProperty,
        le = Object.getOwnPropertySymbols,
        ie = Object.prototype.hasOwnProperty,
        ce = Object.prototype.propertyIsEnumerable,
        se = (e, t, a) =>
          t in e
            ? oe(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        de = (e, t) => {
          for (var a in t || (t = {})) ie.call(t, a) && se(e, a, t[a]);
          if (le) for (var a of le(t)) ce.call(t, a) && se(e, a, t[a]);
          return e;
        },
        me = (e, t) => {
          var a = {};
          for (var n in e) ie.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n]);
          if (null != e && le)
            for (var n of le(e))
              t.indexOf(n) < 0 && ce.call(e, n) && (a[n] = e[n]);
          return a;
        };
      function ue(e) {
        var t = e,
          {item: a} = t,
          r = me(t, ['item']);
        switch (a.type) {
          case 'category':
            return n.createElement(Y, de({item: a}, r));
          case 'html':
            return n.createElement(re, de({item: a}, r));
          default:
            return n.createElement(ae, de({item: a}, r));
        }
      }
      var be = Object.defineProperty,
        pe = Object.getOwnPropertySymbols,
        fe = Object.prototype.hasOwnProperty,
        he = Object.prototype.propertyIsEnumerable,
        ve = (e, t, a) =>
          t in e
            ? be(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const Ee = (0, n.memo)(function (e) {
          var t = e,
            {items: a} = t,
            r = ((e, t) => {
              var a = {};
              for (var n in e)
                fe.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n]);
              if (null != e && pe)
                for (var n of pe(e))
                  t.indexOf(n) < 0 && he.call(e, n) && (a[n] = e[n]);
              return a;
            })(t, ['items']);
          const o = (0, i.Y)(a, r.activePath);
          return n.createElement(
            B,
            null,
            o.map((e, t) =>
              n.createElement(
                ue,
                ((e, t) => {
                  for (var a in t || (t = {})) fe.call(t, a) && ve(e, a, t[a]);
                  if (pe) for (var a of pe(t)) he.call(t, a) && ve(e, a, t[a]);
                  return e;
                })({key: t, item: e, index: t}, r)
              )
            )
          );
        }),
        ye = {
          menu: 'menu_SIkG',
          menuWithAnnouncementBar: 'menuWithAnnouncementBar_GW3s',
        };
      function ge({path: e, sidebar: t, className: a}) {
        const o = (function () {
          const {isActive: e} = (0, O.Mj)(),
            [t, a] = (0, n.useState)(e);
          return (
            (0, d.Mq)(
              ({scrollY: t}) => {
                e && a(0 === t);
              },
              [e]
            ),
            e && t
          );
        })();
        return n.createElement(
          'nav',
          {
            'aria-label': (0, s.T)({
              id: 'theme.docs.sidebar.navAriaLabel',
              message: 'Docs sidebar',
              description: 'The ARIA label for the sidebar navigation',
            }),
            className: (0, r.A)(
              'menu thin-scrollbar',
              ye.menu,
              o && ye.menuWithAnnouncementBar,
              a
            ),
          },
          n.createElement(
            'ul',
            {className: (0, r.A)(l.G.docs.docSidebarMenu, 'menu__list')},
            n.createElement(Ee, {items: t, activePath: e, level: 1})
          )
        );
      }
      const _e = 'sidebar_njMd',
        ke = 'sidebarWithHideableNavbar_wUlq',
        Se = 'sidebarHidden_VK0M',
        Ae = 'sidebarLogo_isFc';
      const Ce = n.memo(function ({
        path: e,
        sidebar: t,
        onCollapse: a,
        isHidden: o,
      }) {
        const {
          navbar: {hideOnScroll: l},
          docs: {
            sidebar: {hideable: i},
          },
        } = (0, v.p)();
        return n.createElement(
          'div',
          {className: (0, r.A)(_e, l && ke, o && Se)},
          l && n.createElement(E.A, {tabIndex: -1, className: Ae}),
          n.createElement(ge, {path: e, sidebar: t}),
          i && n.createElement(x, {onClick: a})
        );
      });
      var Ie = a(9639),
        xe = a(9814);
      const Oe = ({sidebar: e, path: t}) => {
        const a = (0, xe.M)();
        return n.createElement(
          'ul',
          {className: (0, r.A)(l.G.docs.docSidebarMenu, 'menu__list')},
          n.createElement(Ee, {
            items: e,
            activePath: t,
            onItemClick: e => {
              'category' === e.type && e.href && a.toggle(),
                'link' === e.type && a.toggle();
            },
            level: 1,
          })
        );
      };
      const we = n.memo(function (e) {
        return n.createElement(Ie.GX, {component: Oe, props: e});
      });
      var Te = Object.defineProperty,
        Ne = Object.getOwnPropertySymbols,
        Be = Object.prototype.hasOwnProperty,
        Pe = Object.prototype.propertyIsEnumerable,
        je = (e, t, a) =>
          t in e
            ? Te(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        Le = (e, t) => {
          for (var a in t || (t = {})) Be.call(t, a) && je(e, a, t[a]);
          if (Ne) for (var a of Ne(t)) Pe.call(t, a) && je(e, a, t[a]);
          return e;
        };
      function Me(e) {
        const t = (0, h.l)(),
          a = 'desktop' === t || 'ssr' === t,
          r = 'mobile' === t;
        return n.createElement(
          n.Fragment,
          null,
          a && n.createElement(Ce, Le({}, e)),
          r && n.createElement(we, Le({}, e))
        );
      }
      const He = {
        expandButton: 'expandButton_TmdG',
        expandButtonIcon: 'expandButtonIcon_i1dp',
      };
      function Ge({toggleSidebar: e}) {
        return n.createElement(
          'div',
          {
            className: He.expandButton,
            title: (0, s.T)({
              id: 'theme.docs.sidebar.expandButtonTitle',
              message: 'Expand sidebar',
              description:
                'The ARIA label and title attribute for expand button of doc sidebar',
            }),
            'aria-label': (0, s.T)({
              id: 'theme.docs.sidebar.expandButtonAriaLabel',
              message: 'Expand sidebar',
              description:
                'The ARIA label and title attribute for expand button of doc sidebar',
            }),
            tabIndex: 0,
            role: 'button',
            onKeyDown: e,
            onClick: e,
          },
          n.createElement(C, {className: He.expandButtonIcon})
        );
      }
      const We = {
        docSidebarContainer: 'docSidebarContainer_YfHR',
        docSidebarContainerHidden: 'docSidebarContainerHidden_DPk8',
        sidebarViewport: 'sidebarViewport_aRkj',
      };
      function Re({children: e}) {
        var t;
        const a = (0, c.t)();
        return n.createElement(
          n.Fragment,
          {key: null != (t = null == a ? void 0 : a.name) ? t : 'noSidebar'},
          e
        );
      }
      function De({
        sidebar: e,
        hiddenSidebarContainer: t,
        setHiddenSidebarContainer: a,
      }) {
        const {pathname: o} = (0, f.zy)(),
          [i, c] = (0, n.useState)(!1),
          s = (0, n.useCallback)(() => {
            i && c(!1), !i && (0, p.O)() && c(!0), a(e => !e);
          }, [a, i]);
        return n.createElement(
          'aside',
          {
            className: (0, r.A)(
              l.G.docs.docSidebarContainer,
              We.docSidebarContainer,
              t && We.docSidebarContainerHidden
            ),
            onTransitionEnd: e => {
              e.currentTarget.classList.contains(We.docSidebarContainer) &&
                t &&
                c(!0);
            },
          },
          n.createElement(
            Re,
            null,
            n.createElement(
              'div',
              {
                className: (0, r.A)(
                  We.sidebarViewport,
                  i && We.sidebarViewportHidden
                ),
              },
              n.createElement(Me, {
                sidebar: e,
                path: o,
                onCollapse: s,
                isHidden: i,
              }),
              i && n.createElement(Ge, {toggleSidebar: s})
            )
          )
        );
      }
      const Fe = {
        docMainContainer: 'docMainContainer_TBSr',
        docMainContainerEnhanced: 'docMainContainerEnhanced_lQrH',
        docItemWrapperEnhanced: 'docItemWrapperEnhanced_JWYK',
      };
      function Ue({hiddenSidebarContainer: e, children: t}) {
        const a = (0, c.t)();
        return n.createElement(
          'main',
          {
            className: (0, r.A)(
              Fe.docMainContainer,
              (e || !a) && Fe.docMainContainerEnhanced
            ),
          },
          n.createElement(
            'div',
            {
              className: (0, r.A)(
                'container padding-top--md padding-bottom--lg',
                Fe.docItemWrapper,
                e && Fe.docItemWrapperEnhanced
              ),
            },
            t
          )
        );
      }
      const Ve = {docRoot: 'docRoot_UBD9', docsWrapper: 'docsWrapper_hBAB'};
      function Ye({children: e}) {
        const t = (0, c.t)(),
          [a, r] = (0, n.useState)(!1);
        return n.createElement(
          'div',
          {className: Ve.docsWrapper},
          n.createElement(b, null),
          n.createElement(
            'div',
            {className: Ve.docRoot},
            t &&
              n.createElement(De, {
                sidebar: t.items,
                hiddenSidebarContainer: a,
                setHiddenSidebarContainer: r,
              }),
            n.createElement(Ue, {hiddenSidebarContainer: a}, e)
          )
        );
      }
      var Ke = a(4946);
      function ze(e) {
        const t = (0, i.B5)(e);
        if (!t) return n.createElement(Ke.A, null);
        const {docElement: a, sidebarName: s, sidebarItems: d} = t;
        return n.createElement(
          o.e3,
          {className: (0, r.A)(l.G.page.docsDocPage)},
          n.createElement(
            c.V,
            {name: s, items: d},
            n.createElement(Ye, null, a)
          )
        );
      }
    },
    4946: (e, t, a) => {
      a.d(t, {A: () => i});
      var n = a(3696),
        r = a(1750),
        o = a(5830),
        l = a(702);
      function i({className: e}) {
        return n.createElement(
          'main',
          {className: (0, r.A)('container margin-vert--xl', e)},
          n.createElement(
            'div',
            {className: 'row'},
            n.createElement(
              'div',
              {className: 'col col--6 col--offset-3'},
              n.createElement(
                l.A,
                {as: 'h1', className: 'hero__title'},
                n.createElement(
                  o.A,
                  {
                    id: 'theme.NotFound.title',
                    description: 'The title of the 404 page',
                  },
                  'Page Not Found'
                )
              ),
              n.createElement(
                'p',
                null,
                n.createElement(
                  o.A,
                  {
                    id: 'theme.NotFound.p1',
                    description: 'The first paragraph of the 404 page',
                  },
                  'We could not find what you were looking for.'
                )
              ),
              n.createElement(
                'p',
                null,
                n.createElement(
                  o.A,
                  {
                    id: 'theme.NotFound.p2',
                    description: 'The 2nd paragraph of the 404 page',
                  },
                  'Please contact the owner of the site that linked you to the original URL and let them know their link is broken.'
                )
              )
            )
          )
        );
      }
    },
  },
]);
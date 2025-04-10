/*! For license information please see 227c0f05.40ad3f7c.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [294],
  {
    2192: (e, n, s) => {
      var r = s(3696),
        t = Symbol.for('react.element'),
        i = Symbol.for('react.fragment'),
        o = Object.prototype.hasOwnProperty,
        l =
          r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        a = {key: !0, ref: !0, __self: !0, __source: !0};
      function d(e, n, s) {
        var r,
          i = {},
          d = null,
          h = null;
        for (r in (void 0 !== s && (d = '' + s),
        void 0 !== n.key && (d = '' + n.key),
        void 0 !== n.ref && (h = n.ref),
        n))
          o.call(n, r) && !a.hasOwnProperty(r) && (i[r] = n[r]);
        if (e && e.defaultProps)
          for (r in (n = e.defaultProps)) void 0 === i[r] && (i[r] = n[r]);
        return {
          $$typeof: t,
          type: e,
          key: d,
          ref: h,
          props: i,
          _owner: l.current,
        };
      }
      (n.Fragment = i), (n.jsx = d), (n.jsxs = d);
    },
    2540: (e, n, s) => {
      e.exports = s(2192);
    },
    7785: (e, n, s) => {
      s.r(n),
        s.d(n, {
          assets: () => a,
          contentTitle: () => o,
          default: () => c,
          frontMatter: () => i,
          metadata: () => l,
          toc: () => d,
        });
      var r = s(2540),
        t = s(3023);
      const i = {
          id: 'dashboard',
          title: 'Filtering the Dashboard',
          description: 'desc',
        },
        o = 'How to use your dashboard',
        l = {
          id: 'dashboard',
          title: 'Filtering the Dashboard',
          description: 'desc',
          source: '@site/versioned_docs/version-0.0.1/dashboard.md',
          sourceDirName: '.',
          slug: '/dashboard',
          permalink: '/docs/dashboard',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1718828485e3,
          frontMatter: {
            id: 'dashboard',
            title: 'Filtering the Dashboard',
            description: 'desc',
          },
          sidebar: 'docs',
          previous: {
            title: 'Manage Suppression Lists',
            permalink: '/docs/intro-to-suppressing',
          },
          next: {
            title: 'Organization Overview',
            permalink: '/docs/organizations',
          },
        },
        a = {},
        d = [
          {value: 'Purpose', id: 'purpose', level: 2},
          {
            value: 'Overview of the Dashboard',
            id: 'overview-of-the-dashboard',
            level: 2,
          },
          {
            value: 'Generating PDF Reports',
            id: 'generating-pdf-reports',
            level: 2,
          },
          {value: 'Troubleshooting', id: 'troubleshooting', level: 2},
        ];
      function h(e) {
        const n = {
          h1: 'h1',
          h2: 'h2',
          li: 'li',
          ol: 'ol',
          p: 'p',
          strong: 'strong',
          ul: 'ul',
          ...(0, t.R)(),
          ...e.components,
        };
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(n.h1, {
              id: 'how-to-use-your-dashboard',
              children: 'How to use your dashboard',
            }),
            '\n',
            (0, r.jsx)(n.p, {
              children:
                "The dashboard is where you'll find the analytics and demographic data from your pixels. All pixel data will be agreggated together for an organization, unless you choose to filter it down.",
            }),
            '\n',
            (0, r.jsx)(n.h1, {
              id: 'dashboard-usage-guide',
              children: 'Dashboard Usage Guide',
            }),
            '\n',
            (0, r.jsx)(n.h2, {id: 'purpose', children: 'Purpose'}),
            '\n',
            (0, r.jsx)(n.p, {
              children:
                'This guide will help you navigate and use the dashboard to investigate the demographics visiting your website and generate PDF reports.',
            }),
            '\n',
            (0, r.jsx)(n.h2, {
              id: 'overview-of-the-dashboard',
              children: 'Overview of the Dashboard',
            }),
            '\n',
            (0, r.jsxs)(n.ol, {
              children: [
                '\n',
                (0, r.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, r.jsx)(n.p, {
                      children: (0, r.jsx)(n.strong, {children: 'Search Bar'}),
                    }),
                    '\n',
                    (0, r.jsxs)(n.ul, {
                      children: [
                        '\n',
                        (0, r.jsx)(n.li, {
                          children: 'Located at the top left.',
                        }),
                        '\n',
                        (0, r.jsx)(n.li, {
                          children: 'Use it to search for specific pixels.',
                        }),
                        '\n',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, r.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, r.jsx)(n.p, {
                      children: (0, r.jsx)(n.strong, {children: 'Key Metrics'}),
                    }),
                    '\n',
                    (0, r.jsxs)(n.ul, {
                      children: [
                        '\n',
                        (0, r.jsxs)(n.li, {
                          children: [
                            (0, r.jsx)(n.strong, {children: 'Total Leads'}),
                            ': Shows the total number of leads.',
                          ],
                        }),
                        '\n',
                        (0, r.jsxs)(n.li, {
                          children: [
                            (0, r.jsx)(n.strong, {children: 'Total % Leads'}),
                            ': Displays the percentage of total leads.',
                          ],
                        }),
                        '\n',
                        (0, r.jsxs)(n.li, {
                          children: [
                            (0, r.jsx)(n.strong, {children: 'Total Savings'}),
                            ': Indicates the total savings.',
                          ],
                        }),
                        '\n',
                        (0, r.jsx)(n.li, {
                          children:
                            'Each metric includes a percentage change indicator to show growth or decline.',
                        }),
                        '\n',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, r.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, r.jsx)(n.p, {
                      children: (0, r.jsx)(n.strong, {
                        children: 'Lead Location',
                      }),
                    }),
                    '\n',
                    (0, r.jsxs)(n.ul, {
                      children: [
                        '\n',
                        (0, r.jsx)(n.li, {
                          children:
                            'Displays a map showing the home residents of those in your audience.',
                        }),
                        '\n',
                        (0, r.jsx)(n.li, {
                          children:
                            'DOES NOT show their exact location when they visited your website.',
                        }),
                        '\n',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, r.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, r.jsx)(n.p, {
                      children: (0, r.jsx)(n.strong, {
                        children: "Filter Menu (Under 'All Data' Button)",
                      }),
                    }),
                    '\n',
                    (0, r.jsxs)(n.ul, {
                      children: [
                        '\n',
                        (0, r.jsxs)(n.li, {
                          children: [
                            (0, r.jsx)(n.strong, {children: 'Pixels'}),
                            ': Filter data by specific pixels.',
                          ],
                        }),
                        '\n',
                        (0, r.jsxs)(n.li, {
                          children: [
                            (0, r.jsx)(n.strong, {children: 'Tags'}),
                            ': Filter data using tags.',
                          ],
                        }),
                        '\n',
                        (0, r.jsxs)(n.li, {
                          children: [
                            (0, r.jsx)(n.strong, {children: 'Date Range'}),
                            ': Select a specific date range to filter data.',
                          ],
                        }),
                        '\n',
                        (0, r.jsxs)(n.li, {
                          children: [
                            (0, r.jsx)(n.strong, {children: 'Other Filters'}),
                            ': Additional options may be available depending on your setup.',
                          ],
                        }),
                        '\n',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsx)(n.h2, {
              id: 'generating-pdf-reports',
              children: 'Generating PDF Reports',
            }),
            '\n',
            (0, r.jsxs)(n.ol, {
              children: [
                '\n',
                (0, r.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, r.jsx)(n.p, {
                      children: (0, r.jsx)(n.strong, {
                        children: 'Apply Filters',
                      }),
                    }),
                    '\n',
                    (0, r.jsxs)(n.ul, {
                      children: [
                        '\n',
                        (0, r.jsx)(n.li, {
                          children:
                            'Before generating a report, use the filter menu to select the specific data you want to include.',
                        }),
                        '\n',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, r.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, r.jsx)(n.p, {
                      children: (0, r.jsx)(n.strong, {children: 'Export PDF'}),
                    }),
                    '\n',
                    (0, r.jsxs)(n.ul, {
                      children: [
                        '\n',
                        (0, r.jsx)(n.li, {
                          children:
                            'Click the "Export PDF" button located at the top right of the dashboard.',
                        }),
                        '\n',
                        (0, r.jsx)(n.li, {
                          children:
                            'A PDF report containing the filtered data and visualizations will be generated and downloaded.',
                        }),
                        '\n',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsx)(n.h2, {
              id: 'troubleshooting',
              children: 'Troubleshooting',
            }),
            '\n',
            (0, r.jsxs)(n.ul, {
              children: [
                '\n',
                (0, r.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, r.jsx)(n.p, {
                      children: (0, r.jsx)(n.strong, {
                        children: 'Filters Not Applying?',
                      }),
                    }),
                    '\n',
                    (0, r.jsxs)(n.ul, {
                      children: [
                        '\n',
                        (0, r.jsx)(n.li, {
                          children:
                            'Ensure you have selected at least one option from each filter category.',
                        }),
                        '\n',
                        (0, r.jsx)(n.li, {
                          children:
                            'You must click on the "apply" button to see the filters take effect.',
                        }),
                        '\n',
                        (0, r.jsx)(n.li, {
                          children:
                            'Refresh the page and try applying the filters again.',
                        }),
                        '\n',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, r.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, r.jsx)(n.p, {
                      children: (0, r.jsx)(n.strong, {
                        children: 'PDF Not Downloading?',
                      }),
                    }),
                    '\n',
                    (0, r.jsxs)(n.ul, {
                      children: [
                        '\n',
                        (0, r.jsx)(n.li, {
                          children: "Check your browser's download settings.",
                        }),
                        '\n',
                        (0, r.jsx)(n.li, {
                          children: 'Ensure pop-ups are allowed for the site.',
                        }),
                        '\n',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
          ],
        });
      }
      function c(e = {}) {
        const {wrapper: n} = {...(0, t.R)(), ...e.components};
        return n
          ? (0, r.jsx)(n, {...e, children: (0, r.jsx)(h, {...e})})
          : h(e);
      }
    },
    3023: (e, n, s) => {
      s.d(n, {R: () => o, x: () => l});
      var r = s(3696);
      const t = {},
        i = r.createContext(t);
      function o(e) {
        const n = r.useContext(i);
        return r.useMemo(
          function () {
            return 'function' == typeof e ? e(n) : {...n, ...e};
          },
          [n, e]
        );
      }
      function l(e) {
        let n;
        return (
          (n = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(t)
              : e.components || t
            : o(e.components)),
          r.createElement(i.Provider, {value: n}, e.children)
        );
      }
    },
  },
]);

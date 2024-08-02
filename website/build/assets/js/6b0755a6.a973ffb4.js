/*! For license information please see 6b0755a6.a973ffb4.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [7087],
  {
    2192: (e, n, t) => {
      var r = t(3696),
        i = Symbol.for('react.element'),
        s = Symbol.for('react.fragment'),
        o = Object.prototype.hasOwnProperty,
        c =
          r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        d = {key: !0, ref: !0, __self: !0, __source: !0};
      function l(e, n, t) {
        var r,
          s = {},
          l = null,
          a = null;
        for (r in (void 0 !== t && (l = '' + t),
        void 0 !== n.key && (l = '' + n.key),
        void 0 !== n.ref && (a = n.ref),
        n))
          o.call(n, r) && !d.hasOwnProperty(r) && (s[r] = n[r]);
        if (e && e.defaultProps)
          for (r in (n = e.defaultProps)) void 0 === s[r] && (s[r] = n[r]);
        return {
          $$typeof: i,
          type: e,
          key: l,
          ref: a,
          props: s,
          _owner: c.current,
        };
      }
      (n.Fragment = s), (n.jsx = l), (n.jsxs = l);
    },
    2540: (e, n, t) => {
      e.exports = t(2192);
    },
    9645: (e, n, t) => {
      t.r(n),
        t.d(n, {
          assets: () => d,
          contentTitle: () => o,
          default: () => h,
          frontMatter: () => s,
          metadata: () => c,
          toc: () => l,
        });
      var r = t(2540),
        i = t(3023);
      const s = {
          id: 'event-add-to-cart',
          title: 'Add to Cart Event',
          description: 'desc',
        },
        o = 'Customizing and Installing the addToCart Event for Your Pixel',
        c = {
          id: 'event-add-to-cart',
          title: 'Add to Cart Event',
          description: 'desc',
          source: '@site/../docs/event-add-to-cart.md',
          sourceDirName: '.',
          slug: '/event-add-to-cart',
          permalink: '/docs/next/event-add-to-cart',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: 'current',
          lastUpdatedAt: 1718828485e3,
          frontMatter: {
            id: 'event-add-to-cart',
            title: 'Add to Cart Event',
            description: 'desc',
          },
        },
        d = {},
        l = [
          {value: 'Purpose', id: 'purpose', level: 2},
          {value: 'Event Code', id: 'event-code', level: 2},
          {
            value: 'Steps to Customize the Event',
            id: 'steps-to-customize-the-event',
            level: 2,
          },
          {value: 'Installing the Event', id: 'installing-the-event', level: 2},
          {value: 'Troubleshooting', id: 'troubleshooting', level: 2},
          {
            value: 'Attaching the Event to a Button Click',
            id: 'attaching-the-event-to-a-button-click',
            level: 2,
          },
          {value: 'Troubleshooting', id: 'troubleshooting-1', level: 2},
        ];
      function a(e) {
        const n = {
          code: 'code',
          h1: 'h1',
          h2: 'h2',
          li: 'li',
          ol: 'ol',
          p: 'p',
          pre: 'pre',
          strong: 'strong',
          ul: 'ul',
          ...(0, i.R)(),
          ...e.components,
        };
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsxs)(n.h1, {
              id: 'customizing-and-installing-the-addtocart-event-for-your-pixel',
              children: [
                'Customizing and Installing the ',
                (0, r.jsx)(n.code, {children: 'addToCart'}),
                ' Event for Your Pixel',
              ],
            }),
            '\n',
            (0, r.jsx)(n.h2, {id: 'purpose', children: 'Purpose'}),
            '\n',
            (0, r.jsxs)(n.p, {
              children: [
                'This guide will help you customize and install the ',
                (0, r.jsx)(n.code, {children: 'addToCart'}),
                ' event for your pixel. The purpose of this event is to help the pixel learn who your ideal customers are so that it can predict which leads are most likely to convert.',
              ],
            }),
            '\n',
            (0, r.jsx)(n.h2, {id: 'event-code', children: 'Event Code'}),
            '\n',
            (0, r.jsxs)(n.p, {
              children: [
                'Here is the code snippet for the ',
                (0, r.jsx)(n.code, {children: 'addToCart'}),
                ' event:',
              ],
            }),
            '\n',
            (0, r.jsx)(n.pre, {
              children: (0, r.jsx)(n.code, {
                className: 'language-html',
                children:
                  "\x3c!-- Trigger the 'addToCart' event --\x3e\n<script>\n  window.analyticsLayer = window.analyticsLayer || [];\n  window.analyticsLayer.push({\n    event: 'addToCart',\n    productId: 'example_product_id',\n    productName: 'example_product_name',\n    quantity: 1,\n    value: '0.00',\n    currency: 'USD',\n    // ... other properties\n  });\n</script>\n",
              }),
            }),
            '\n',
            (0, r.jsx)(n.h2, {
              id: 'steps-to-customize-the-event',
              children: 'Steps to Customize the Event',
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
                        children: "Open Your Website's Code",
                      }),
                    }),
                    '\n',
                    (0, r.jsxs)(n.ul, {
                      children: [
                        '\n',
                        (0, r.jsxs)(n.li, {
                          children: [
                            'Access the HTML file where you want to add the ',
                            (0, r.jsx)(n.code, {children: 'addToCart'}),
                            ' event.',
                          ],
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
                        children: 'Customize the Event Properties',
                      }),
                    }),
                    '\n',
                    (0, r.jsxs)(n.ul, {
                      children: [
                        '\n',
                        (0, r.jsxs)(n.li, {
                          children: [
                            'Replace ',
                            (0, r.jsx)(n.code, {
                              children: 'example_product_id',
                            }),
                            ' with the actual product ID.',
                          ],
                        }),
                        '\n',
                        (0, r.jsxs)(n.li, {
                          children: [
                            'Replace ',
                            (0, r.jsx)(n.code, {
                              children: 'example_product_name',
                            }),
                            ' with the actual product name.',
                          ],
                        }),
                        '\n',
                        (0, r.jsxs)(n.li, {
                          children: [
                            'Adjust the ',
                            (0, r.jsx)(n.code, {children: 'quantity'}),
                            ' value to reflect the number of items added to the cart.',
                          ],
                        }),
                        '\n',
                        (0, r.jsxs)(n.li, {
                          children: [
                            'Set the ',
                            (0, r.jsx)(n.code, {children: 'value'}),
                            ' to the total price of the items added to the cart.',
                          ],
                        }),
                        '\n',
                        (0, r.jsxs)(n.li, {
                          children: [
                            'Ensure the ',
                            (0, r.jsx)(n.code, {children: 'currency'}),
                            " reflects the correct currency code (e.g., 'USD').",
                          ],
                        }),
                        '\n',
                      ],
                    }),
                    '\n',
                    (0, r.jsx)(n.p, {children: 'Example:'}),
                    '\n',
                    (0, r.jsx)(n.pre, {
                      children: (0, r.jsx)(n.code, {
                        className: 'language-html',
                        children:
                          "\x3c!-- Trigger the 'addToCart' event --\x3e\n<script>\n  window.analyticsLayer = window.analyticsLayer || [];\n  window.analyticsLayer.push({\n    event: 'addToCart',\n    productId: '12345',\n    productName: 'Super Widget',\n    quantity: 2,\n    value: '39.98',\n    currency: 'USD',\n    // ... other properties\n  });\n</script>\n",
                      }),
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
                        children: 'Add Additional Properties (Optional)',
                      }),
                    }),
                    '\n',
                    (0, r.jsxs)(n.ul, {
                      children: [
                        '\n',
                        (0, r.jsxs)(n.li, {
                          children: [
                            'You can add other relevant properties to the event, such as ',
                            (0, r.jsx)(n.code, {children: 'category'}),
                            ', ',
                            (0, r.jsx)(n.code, {children: 'variant'}),
                            ', ',
                            (0, r.jsx)(n.code, {children: 'discount'}),
                            ', etc.',
                          ],
                        }),
                        '\n',
                      ],
                    }),
                    '\n',
                    (0, r.jsx)(n.p, {children: 'Example:'}),
                    '\n',
                    (0, r.jsx)(n.pre, {
                      children: (0, r.jsx)(n.code, {
                        className: 'language-html',
                        children:
                          "\x3c!-- Trigger the 'addToCart' event --\x3e\n<script>\n  window.analyticsLayer = window.analyticsLayer || [];\n  window.analyticsLayer.push({\n    event: 'addToCart',\n    productId: '12345',\n    productName: 'Super Widget',\n    quantity: 2,\n    value: '39.98',\n    currency: 'USD',\n    category: 'Widgets',\n    variant: 'Blue',\n    discount: '10%',\n    // ... other properties\n  });\n</script>\n",
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsx)(n.h2, {
              id: 'installing-the-event',
              children: 'Installing the Event',
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
                        children: 'Locate the Right Place to Add the Event',
                      }),
                    }),
                    '\n',
                    (0, r.jsxs)(n.ul, {
                      children: [
                        '\n',
                        (0, r.jsxs)(n.li, {
                          children: [
                            'Identify where the ',
                            (0, r.jsx)(n.code, {children: 'addToCart'}),
                            ' action occurs on your website (e.g., the "Add to Cart" button).',
                          ],
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
                        children: 'Insert the Script',
                      }),
                    }),
                    '\n',
                    (0, r.jsxs)(n.ul, {
                      children: [
                        '\n',
                        (0, r.jsxs)(n.li, {
                          children: [
                            'Add the customized script to the HTML code at the appropriate location, ensuring it is triggered when the ',
                            (0, r.jsx)(n.code, {children: 'addToCart'}),
                            ' action occurs.',
                          ],
                        }),
                        '\n',
                      ],
                    }),
                    '\n',
                    (0, r.jsx)(n.p, {children: 'Example:'}),
                    '\n',
                    (0, r.jsx)(n.pre, {
                      children: (0, r.jsx)(n.code, {
                        className: 'language-html',
                        children:
                          "<button onclick=\"addToCartFunction()\">Add to Cart</button>\n\n<script>\n  function addToCartFunction() {\n    // Your existing add to cart logic here\n\n    // Trigger the 'addToCart' event\n    window.analyticsLayer = window.analyticsLayer || [];\n    window.analyticsLayer.push({\n      event: 'addToCart',\n      productId: '12345',\n      productName: 'Super Widget',\n      quantity: 2,\n      value: '39.98',\n      currency: 'USD',\n      category: 'Widgets',\n      variant: 'Blue',\n      discount: '10%',\n      // ... other properties\n    });\n  }\n</script>\n",
                      }),
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
                        children: 'Event Not Firing?',
                      }),
                    }),
                    '\n',
                    (0, r.jsxs)(n.ul, {
                      children: [
                        '\n',
                        (0, r.jsxs)(n.li, {
                          children: [
                            'Ensure the script is placed correctly in the HTML and that it is being triggered by the ',
                            (0, r.jsx)(n.code, {children: 'addToCart'}),
                            ' action.',
                          ],
                        }),
                        '\n',
                        (0, r.jsx)(n.li, {
                          children:
                            'Verify that there are no JavaScript errors in the console.',
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
                        children: 'Incorrect Data in Event?',
                      }),
                    }),
                    '\n',
                    (0, r.jsxs)(n.ul, {
                      children: [
                        '\n',
                        (0, r.jsxs)(n.li, {
                          children: [
                            'Double-check the values and properties being pushed to the ',
                            (0, r.jsx)(n.code, {children: 'analyticsLayer'}),
                            '.',
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
              id: 'attaching-the-event-to-a-button-click',
              children: 'Attaching the Event to a Button Click',
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
                        children: 'Locate the Button Elements',
                      }),
                    }),
                    '\n',
                    (0, r.jsxs)(n.ul, {
                      children: [
                        '\n',
                        (0, r.jsxs)(n.li, {
                          children: [
                            'Identify the buttons that trigger the ',
                            (0, r.jsx)(n.code, {children: 'addToCart'}),
                            ' action on your website.',
                          ],
                        }),
                        '\n',
                        (0, r.jsx)(n.li, {
                          children:
                            "Copy the class of the button (IF IT'S UNIQUE). If it's not unique you'll need to place a unique class on the element.",
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
                        children: 'Attach Event Listener to Buttons',
                      }),
                    }),
                    '\n',
                    (0, r.jsxs)(n.ul, {
                      children: [
                        '\n',
                        (0, r.jsxs)(n.li, {
                          children: [
                            'Add the following script to attach the ',
                            (0, r.jsx)(n.code, {children: 'addToCart'}),
                            ' event to each button click.',
                          ],
                        }),
                        '\n',
                        (0, r.jsx)(n.li, {
                          children:
                            'This must be placed AFTER the clickable button element. So place it at the bottom of your website.',
                        }),
                        '\n',
                      ],
                    }),
                    '\n',
                    (0, r.jsx)(n.pre, {
                      children: (0, r.jsx)(n.code, {
                        className: 'language-html',
                        children:
                          "<script>\n  // Event wrapped in function so it doesn't fire before a button is clicked\n  function HeroAddToCartEvent() {\n    window.analyticsLayer = window.analyticsLayer || [];\n    window.analyticsLayer.push({\n      event: 'addToCart',\n      productId: '_productId_placeholder_',\n      productName: 'Super Widget',\n      quantity: 2,\n      value: '39.98',\n      currency: 'USD',\n      category: 'Widgets',\n      variant: 'Blue',\n      discount: '10%',\n    });\n  } // end HeroAddToCartEvent\n\n  // Selects all elements with class \"add-to-cart-button\"\n  var buttons = document.querySelectorAll(\n    '.add-to-cart-button',\n  );\n\n  // Attaches an event listener to every clickable element.\n  // When those buttons are clicked the function with event HeroAddToCartEvent will fire\n  for (var i = 0; i < buttons.length; i++) {\n    buttons[i].addEventListener(\n      'click',\n      HeroAddToCartEvent,\n      false,\n    );\n  }\n</script>\n",
                      }),
                    }),
                    '\n',
                    (0, r.jsxs)(n.ul, {
                      children: [
                        '\n',
                        (0, r.jsxs)(n.li, {
                          children: [
                            'Ensure the button elements have the class ',
                            (0, r.jsx)(n.code, {
                              children: 'add-to-cart-button',
                            }),
                            ' or update the query selector accordingly.',
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
              id: 'troubleshooting-1',
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
                        children: 'Event Not Firing?',
                      }),
                    }),
                    '\n',
                    (0, r.jsxs)(n.ul, {
                      children: [
                        '\n',
                        (0, r.jsxs)(n.li, {
                          children: [
                            'Ensure the script is placed correctly in the HTML and that it is being triggered by the ',
                            (0, r.jsx)(n.code, {children: 'addToCart'}),
                            ' action.',
                          ],
                        }),
                        '\n',
                        (0, r.jsx)(n.li, {
                          children:
                            'Verify that there are no JavaScript errors in the developer tools > console.',
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
                        children: 'Incorrect Data in Event?',
                      }),
                    }),
                    '\n',
                    (0, r.jsxs)(n.ul, {
                      children: [
                        '\n',
                        (0, r.jsxs)(n.li, {
                          children: [
                            'Double-check the values and properties being pushed to the ',
                            (0, r.jsx)(n.code, {children: 'analyticsLayer'}),
                            '.',
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
          ],
        });
      }
      function h(e = {}) {
        const {wrapper: n} = {...(0, i.R)(), ...e.components};
        return n
          ? (0, r.jsx)(n, {...e, children: (0, r.jsx)(a, {...e})})
          : a(e);
      }
    },
    3023: (e, n, t) => {
      t.d(n, {R: () => o, x: () => c});
      var r = t(3696);
      const i = {},
        s = r.createContext(i);
      function o(e) {
        const n = r.useContext(s);
        return r.useMemo(
          function () {
            return 'function' == typeof e ? e(n) : {...n, ...e};
          },
          [n, e]
        );
      }
      function c(e) {
        let n;
        return (
          (n = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(i)
              : e.components || i
            : o(e.components)),
          r.createElement(s.Provider, {value: n}, e.children)
        );
      }
    },
  },
]);

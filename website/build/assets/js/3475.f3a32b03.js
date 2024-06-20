'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [3475],
  {
    3475: (e, t, a) => {
      a.r(t), a.d(t, {default: () => p});
      var o = a(3696),
        n = a(1750),
        l = a(5830);
      const r = {popup: 'popup_wph0', buttonContainer: 'buttonContainer_ox5C'};
      function p({onReload: e}) {
        const [t, a] = (0, o.useState)(!0);
        return (
          t &&
          o.createElement(
            'div',
            {className: (0, n.A)('alert', 'alert--secondary', r.popup)},
            o.createElement(
              'p',
              null,
              o.createElement(
                l.A,
                {
                  id: 'theme.PwaReloadPopup.info',
                  description: 'The text for PWA reload popup',
                },
                'New version available'
              )
            ),
            o.createElement(
              'div',
              {className: r.buttonContainer},
              o.createElement(
                'button',
                {
                  className: 'button button--link',
                  type: 'button',
                  onClick: () => {
                    a(!1), e();
                  },
                },
                o.createElement(
                  l.A,
                  {
                    id: 'theme.PwaReloadPopup.refreshButtonText',
                    description: 'The text for PWA reload button',
                  },
                  'Refresh'
                )
              ),
              o.createElement(
                'button',
                {
                  'aria-label': (0, l.T)({
                    id: 'theme.PwaReloadPopup.closeButtonAriaLabel',
                    message: 'Close',
                    description:
                      'The ARIA label for close button of PWA reload popup',
                  }),
                  className: 'close',
                  type: 'button',
                  onClick: () => a(!1),
                },
                o.createElement('span', {'aria-hidden': 'true'}, '\xd7')
              )
            )
          )
        );
      }
    },
  },
]);

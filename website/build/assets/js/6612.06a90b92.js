'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [6612],
  {
    4946: (e, t, a) => {
      a.d(t, {A: () => i});
      var n = a(3696),
        l = a(1750),
        r = a(5830),
        o = a(702);
      function i({className: e}) {
        return n.createElement(
          'main',
          {className: (0, l.A)('container margin-vert--xl', e)},
          n.createElement(
            'div',
            {className: 'row'},
            n.createElement(
              'div',
              {className: 'col col--6 col--offset-3'},
              n.createElement(
                o.A,
                {as: 'h1', className: 'hero__title'},
                n.createElement(
                  r.A,
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
                  r.A,
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
                  r.A,
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
    6612: (e, t, a) => {
      a.r(t), a.d(t, {default: () => c});
      var n = a(3696),
        l = a(5830),
        r = a(3101),
        o = a(9848),
        i = a(4946);
      function c() {
        const e = (0, l.T)({
          id: 'theme.NotFound.title',
          message: 'Page Not Found',
        });
        return n.createElement(
          n.Fragment,
          null,
          n.createElement(r.be, {title: e}),
          n.createElement(o.A, null, n.createElement(i.A, null))
        );
      }
    },
  },
]);

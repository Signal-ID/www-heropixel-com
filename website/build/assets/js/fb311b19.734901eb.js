'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [3720, 5238, 8295, 298],
  {
    1202: (e, t, a) => {
      a.r(t), a.d(t, {default: () => p});
      var r = a(3696),
        n = a(4869),
        s = a(1996),
        c = a(2946);
      const l = 'cardContainer_tegO',
        i = 'card_Tkjh',
        o = 'cardContent_xnyT',
        m = 'cardTitle_h_Zi',
        d = 'cardDescription_pTLX',
        u = 'cardImage_md0c';
      const p = function () {
        return r.createElement(
          s.default,
          null,
          r.createElement(c.default, {
            title: 'Get a head start with a framework',
            description: r.createElement(
              r.Fragment,
              null,
              'React Native brings the React programming paradigm to platforms like Android and iOS. It doesn\u2019t prescribe how to do routing, or how to access each of the numerous platform APIs. To build a new app with React Native, we recommend a framework like',
              ' ',
              r.createElement('a', {href: 'https://expo.dev'}, 'Expo'),
              '.'
            ),
          }),
          r.createElement(
            'div',
            {className: l},
            r.createElement(
              'div',
              {className: i},
              r.createElement(n.default, {
                lightSrc: '/img/homepage/file-based-routing.png',
                darkSrc: '/img/homepage/file-based-routing-dark.png',
                className: u,
                alt: 'File system with folders and files representing screens and navigation',
              }),
              r.createElement(
                'div',
                {className: o},
                r.createElement('h4', {className: m}, 'File-based routing'),
                r.createElement(
                  'p',
                  {className: d},
                  'Create stack, modal, drawer, and tab screens with minimal boilerplate using your filesystem.'
                )
              )
            ),
            r.createElement(
              'div',
              {className: i},
              r.createElement(n.default, {
                lightSrc: '/img/homepage/libraries.png',
                darkSrc: '/img/homepage/libraries-dark.png',
                className: u,
                alt: 'Grid of icons representing libraries, SDKs, and native code',
              }),
              r.createElement(
                'div',
                {className: o},
                r.createElement(
                  'h4',
                  {className: m},
                  'Use any library, SDK, or native code'
                ),
                r.createElement(
                  'p',
                  {className: d},
                  'Generate native changes or write your own native code. Use over 50 modules to create your app.'
                )
              )
            ),
            r.createElement(
              'div',
              {className: i},
              r.createElement(n.default, {
                lightSrc: '/img/homepage/tools.png',
                darkSrc: '/img/homepage/tools-dark.png',
                className: u,
                alt: 'List of developer tool toggles for debugging, performance, and more',
              }),
              r.createElement(
                'div',
                {className: o},
                r.createElement('h4', {className: m}, 'Developer tools'),
                r.createElement(
                  'p',
                  {className: d},
                  'Get started quickly with Expo Go, then continue with expo-dev-client: a module that adds Expo\u2019s tools to apps that require native changes.'
                )
              )
            )
          )
        );
      };
    },
    1996: (e, t, a) => {
      a.r(t), a.d(t, {default: () => c});
      var r = a(3696);
      const n = 'wrapper_jEoM',
        s = 'container_mrKL';
      const c = function ({children: e}) {
        return r.createElement(
          'div',
          {className: n},
          r.createElement('div', {className: s}, e)
        );
      };
    },
    2946: (e, t, a) => {
      a.r(t), a.d(t, {default: () => l});
      var r = a(3696);
      const n = 'container_ajOU',
        s = 'title_J9N3',
        c = 'description_mE5Q';
      const l = function ({title: e, description: t}) {
        return r.createElement(
          'div',
          {className: n},
          r.createElement('h1', {className: s}, e),
          r.createElement('h3', {className: c}, t)
        );
      };
    },
    4869: (e, t, a) => {
      a.r(t), a.d(t, {default: () => n});
      var r = a(3696);
      const n = function ({lightSrc: e, darkSrc: t, className: a, alt: n}) {
        const [s, c] = (0, r.useState)('light');
        return (
          (0, r.useEffect)(() => {
            const e = new MutationObserver(e => {
                e.forEach(e => {
                  'attributes' === e.type &&
                    'data-theme' === e.attributeName &&
                    c(e.target.getAttribute('data-theme'));
                });
              }),
              t = document.documentElement;
            return e.observe(t, {attributes: !0}), () => e.disconnect();
          }, []),
          r.createElement('img', {
            src: 'dark' === s ? t : e,
            alt: n,
            className: a,
          })
        );
      };
    },
  },
]);

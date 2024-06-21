'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [8491, 3953, 1664],
  {
    6702: (e, t, a) => {
      a.r(t), a.d(t, {default: () => i});
      var n = a(3696);
      const r = 'wrapper_O4qR',
        c = 'container_jPHy';
      const i = function ({children: e}) {
        return n.createElement(
          'div',
          {className: r},
          n.createElement('div', {className: c}, e)
        );
      };
    },
    9664: (e, t, a) => {
      a.r(t), a.d(t, {default: () => s});
      var n = a(3696);
      const r = 'container_TgzH',
        c = 'title_QmeC',
        i = 'description_uhBg';
      const s = function ({title: e, description: t}) {
        return n.createElement(
          'div',
          {className: r},
          n.createElement('h1', {className: c}, e),
          n.createElement('h3', {className: i}, t)
        );
      };
    },
    6843: (e, t, a) => {
      a.r(t), a.d(t, {default: () => o});
      var n = a(3696),
        r = a(9568),
        c = a(5067),
        i = a(6702),
        s = a(9664);
      const l = 'featureContainer_JCYB';
      const o = function () {
        const {siteConfig: e} = (0, c.A)(),
          t = Object.values(e.customFields.users)
            .flat()
            .filter(e => e.pinned);
        return n.createElement(
          i.default,
          null,
          n.createElement(s.default, {
            title: 'Prospects Streamed Into Your Ecosystem',
          }),
          n.createElement(
            'div',
            {className: l},
            n.createElement(
              'div',
              null,
              n.createElement(
                'p',
                null,
                'Meta released React Native in 2015 and has been maintaining it ever since.'
              ),
              n.createElement(
                'p',
                null,
                'In 2018, React Native had the',
                ' ',
                n.createElement(
                  'a',
                  {
                    href: 'https://octoverse.github.com/2018/projects#repositories',
                  },
                  '2nd highest'
                ),
                ' ',
                'number of contributors for any repository in GitHub. Today, React Native is supported by contributions from individuals and companies around the world including',
                ' ',
                n.createElement(
                  'span',
                  null,
                  n.createElement(
                    'a',
                    {href: 'https://callstack.com/'},
                    'Callstack'
                  )
                ),
                ',',
                ' ',
                n.createElement(
                  'span',
                  null,
                  n.createElement('a', {href: 'https://expo.io/'}, 'Expo')
                ),
                ', ',
                n.createElement(
                  'a',
                  {href: 'https://infinite.red/'},
                  'Infinite Red'
                ),
                ',',
                ' ',
                n.createElement(
                  'a',
                  {href: 'https://www.microsoft.com/'},
                  'Microsoft'
                ),
                ' and',
                ' ',
                n.createElement(
                  'a',
                  {href: 'https://swmansion.com/'},
                  'Software Mansion'
                ),
                '.'
              ),
              n.createElement(
                'p',
                null,
                'Our community is always shipping exciting new projects and exploring platforms beyond Android and iOS with repos like',
                ' ',
                n.createElement(
                  'span',
                  null,
                  n.createElement(
                    'a',
                    {
                      href: 'https://github.com/microsoft/react-native-windows#readme',
                    },
                    'React Native Windows'
                  )
                ),
                ',',
                ' ',
                n.createElement(
                  'a',
                  {
                    href: 'https://github.com/microsoft/react-native-macos#readme',
                  },
                  'React Native macOS'
                ),
                ' ',
                'and',
                ' ',
                n.createElement(
                  'a',
                  {href: 'https://github.com/necolas/react-native-web#readme'},
                  'React Native Web'
                ),
                '.'
              )
            ),
            n.createElement(
              'div',
              null,
              n.createElement(
                'ul',
                {className: 'AppList'},
                t.map((e, t) => {
                  const a = e.icon.startsWith('http')
                    ? e.icon
                    : (0, r.A)('img/showcase/' + e.icon);
                  return n.createElement(
                    'li',
                    {key: t, className: 'item'},
                    e.infoLink
                      ? n.createElement(
                          'a',
                          {href: e.infoLink},
                          n.createElement('img', {src: a, alt: e.name})
                        )
                      : n.createElement('img', {src: a, alt: e.name})
                  );
                })
              ),
              n.createElement(
                'p',
                null,
                'and ',
                n.createElement('a', {href: (0, r.A)('showcase')}, 'many more'),
                '.'
              )
            )
          )
        );
      };
    },
  },
]);

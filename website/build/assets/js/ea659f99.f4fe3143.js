/*! For license information please see ea659f99.f4fe3143.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [7697],
  {
    2192: (e, n, i) => {
      var r = i(3696),
        t = Symbol.for('react.element'),
        s = Symbol.for('react.fragment'),
        a = Object.prototype.hasOwnProperty,
        o =
          r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        l = {key: !0, ref: !0, __self: !0, __source: !0};
      function d(e, n, i) {
        var r,
          s = {},
          d = null,
          c = null;
        for (r in (void 0 !== i && (d = '' + i),
        void 0 !== n.key && (d = '' + n.key),
        void 0 !== n.ref && (c = n.ref),
        n))
          a.call(n, r) && !l.hasOwnProperty(r) && (s[r] = n[r]);
        if (e && e.defaultProps)
          for (r in (n = e.defaultProps)) void 0 === s[r] && (s[r] = n[r]);
        return {
          $$typeof: t,
          type: e,
          key: d,
          ref: c,
          props: s,
          _owner: o.current,
        };
      }
      (n.Fragment = s), (n.jsx = d), (n.jsxs = d);
    },
    2540: (e, n, i) => {
      e.exports = i(2192);
    },
    3237: (e, n, i) => {
      i.r(n),
        i.d(n, {
          assets: () => l,
          contentTitle: () => a,
          default: () => h,
          frontMatter: () => s,
          metadata: () => o,
          toc: () => d,
        });
      var r = i(2540),
        t = i(3023);
      const s = {id: 'glossary', title: 'Glossary', description: 'desc'},
        a = 'Glossary of Important Terms',
        o = {
          id: 'glossary',
          title: 'Glossary',
          description: 'desc',
          source: '@site/versioned_docs/version-0.0.1/glossary.md',
          sourceDirName: '.',
          slug: '/glossary',
          permalink: '/docs/glossary',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1718839459e3,
          frontMatter: {id: 'glossary', title: 'Glossary', description: 'desc'},
          sidebar: 'docs',
          previous: {
            title: 'Frequently Asked Questions',
            permalink: '/docs/faq',
          },
        },
        l = {},
        d = [
          {value: 'Cookies', id: 'cookies', level: 3},
          {value: 'Identity Graph', id: 'identity-graph', level: 3},
          {value: 'IP Address', id: 'ip-address', level: 3},
          {value: 'HEM', id: 'hem', level: 3},
          {value: 'Profiling', id: 'profiling', level: 3},
          {value: 'Data Subject', id: 'data-subject', level: 3},
          {value: 'Personal Information', id: 'personal-information', level: 3},
          {
            value: 'Non-Personal Information',
            id: 'non-personal-information',
            level: 3,
          },
          {value: 'Anonymization', id: 'anonymization', level: 3},
          {value: 'Pseudonymization', id: 'pseudonymization', level: 3},
          {value: 'Service Provider', id: 'service-provider', level: 3},
          {value: 'Third Party', id: 'third-party', level: 3},
          {value: 'User', id: 'user', level: 3},
          {value: 'Retargeting', id: 'retargeting', level: 3},
          {value: 'Opt-Out', id: 'opt-out', level: 3},
          {value: 'Encryption', id: 'encryption', level: 3},
          {value: 'Data Controller', id: 'data-controller', level: 3},
          {value: 'Data Processor', id: 'data-processor', level: 3},
          {value: 'Consent', id: 'consent', level: 3},
          {value: 'Disclosure', id: 'disclosure', level: 3},
          {value: 'Data Breach', id: 'data-breach', level: 3},
          {value: 'Direct Marketing', id: 'direct-marketing', level: 3},
          {value: 'Affiliates', id: 'affiliates', level: 3},
          {
            value: 'Automated Decision-Making',
            id: 'automated-decision-making',
            level: 3,
          },
          {value: 'Content', id: 'content', level: 3},
          {
            value: 'COPPA (Children&#39;s Online Privacy Protection Act)',
            id: 'coppa-childrens-online-privacy-protection-act',
            level: 3,
          },
          {
            value: 'CCPA (California Consumer Privacy Act)',
            id: 'ccpa-california-consumer-privacy-act',
            level: 3,
          },
          {
            value: 'GDPR (General Data Protection Regulation)',
            id: 'gdpr-general-data-protection-regulation',
            level: 3,
          },
          {
            value: 'SSL (Secure Sockets Layer)',
            id: 'ssl-secure-sockets-layer',
            level: 3,
          },
        ];
      function c(e) {
        const n = {
          h1: 'h1',
          h3: 'h3',
          li: 'li',
          ul: 'ul',
          ...(0, t.R)(),
          ...e.components,
        };
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(n.h1, {
              id: 'glossary-of-important-terms',
              children: 'Glossary of Important Terms',
            }),
            '\n',
            (0, r.jsx)(n.h3, {id: 'cookies', children: 'Cookies'}),
            '\n',
            (0, r.jsxs)(n.ul, {
              children: [
                '\n',
                (0, r.jsx)(n.li, {
                  children:
                    "Small data files stored on a user's device that help websites remember information about the user.",
                }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsx)(n.h3, {
              id: 'identity-graph',
              children: 'Identity Graph',
            }),
            '\n',
            (0, r.jsxs)(n.ul, {
              children: [
                '\n',
                (0, r.jsx)(n.li, {
                  children:
                    'A comprehensive collection of consumer identifiers such as email, phone, and address that help in linking user interactions across different devices and platforms.',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsx)(n.h3, {id: 'ip-address', children: 'IP Address'}),
            '\n',
            (0, r.jsxs)(n.ul, {
              children: [
                '\n',
                (0, r.jsx)(n.li, {
                  children:
                    'A unique string of numbers separated by periods that identifies each computer using the Internet Protocol to communicate over a network.',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsx)(n.h3, {id: 'hem', children: 'HEM'}),
            '\n',
            (0, r.jsxs)(n.ul, {
              children: [
                '\n',
                (0, r.jsx)(n.li, {
                  children:
                    'An acronym for Hashed E-Mail, which is an email address that has been encrypted using MD5, SHA1 or SHA256.',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsx)(n.h3, {id: 'profiling', children: 'Profiling'}),
            '\n',
            (0, r.jsxs)(n.ul, {
              children: [
                '\n',
                (0, r.jsx)(n.li, {
                  children:
                    'Any form of automated processing of personal data to evaluate certain personal aspects relating to a natural person.',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsx)(n.h3, {id: 'data-subject', children: 'Data Subject'}),
            '\n',
            (0, r.jsxs)(n.ul, {
              children: [
                '\n',
                (0, r.jsx)(n.li, {
                  children:
                    'The person whose personal data is being collected, held, or processed.',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsx)(n.h3, {
              id: 'personal-information',
              children: 'Personal Information',
            }),
            '\n',
            (0, r.jsxs)(n.ul, {
              children: [
                '\n',
                (0, r.jsx)(n.li, {
                  children:
                    'Any information that can be used to identify an individual, such as name, address, email address, phone number, etc.',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsx)(n.h3, {
              id: 'non-personal-information',
              children: 'Non-Personal Information',
            }),
            '\n',
            (0, r.jsxs)(n.ul, {
              children: [
                '\n',
                (0, r.jsx)(n.li, {
                  children:
                    'Information that cannot be used to identify a specific individual, such as aggregated data about website traffic patterns.',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsx)(n.h3, {id: 'anonymization', children: 'Anonymization'}),
            '\n',
            (0, r.jsxs)(n.ul, {
              children: [
                '\n',
                (0, r.jsx)(n.li, {
                  children:
                    'The process of removing personal identifiers from data so that the individuals whom the data describe remain unidentifiable.',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsx)(n.h3, {
              id: 'pseudonymization',
              children: 'Pseudonymization',
            }),
            '\n',
            (0, r.jsxs)(n.ul, {
              children: [
                '\n',
                (0, r.jsx)(n.li, {
                  children:
                    'The process of replacing private identifiers with fake identifiers or pseudonyms.',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsx)(n.h3, {
              id: 'service-provider',
              children: 'Service Provider',
            }),
            '\n',
            (0, r.jsxs)(n.ul, {
              children: [
                '\n',
                (0, r.jsx)(n.li, {
                  children:
                    'A third-party company that provides services to another company, often involving the processing of data.',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsx)(n.h3, {id: 'third-party', children: 'Third Party'}),
            '\n',
            (0, r.jsxs)(n.ul, {
              children: [
                '\n',
                (0, r.jsx)(n.li, {
                  children:
                    'Any entity other than the user or the company collecting the data.',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsx)(n.h3, {id: 'user', children: 'User'}),
            '\n',
            (0, r.jsxs)(n.ul, {
              children: [
                '\n',
                (0, r.jsx)(n.li, {
                  children: 'Any individual who uses a website or service.',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsx)(n.h3, {id: 'retargeting', children: 'Retargeting'}),
            '\n',
            (0, r.jsxs)(n.ul, {
              children: [
                '\n',
                (0, r.jsx)(n.li, {
                  children:
                    'Online advertising that is targeted to consumers based on their previous actions on the internet.',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsx)(n.h3, {id: 'opt-out', children: 'Opt-Out'}),
            '\n',
            (0, r.jsxs)(n.ul, {
              children: [
                '\n',
                (0, r.jsx)(n.li, {
                  children:
                    'The action of choosing not to participate in something, such as receiving marketing communications.',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsx)(n.h3, {id: 'encryption', children: 'Encryption'}),
            '\n',
            (0, r.jsxs)(n.ul, {
              children: [
                '\n',
                (0, r.jsx)(n.li, {
                  children:
                    'The process of converting information or data into a code, especially to prevent unauthorized access.',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsx)(n.h3, {
              id: 'data-controller',
              children: 'Data Controller',
            }),
            '\n',
            (0, r.jsxs)(n.ul, {
              children: [
                '\n',
                (0, r.jsx)(n.li, {
                  children:
                    'An entity that determines the purposes, conditions, and means of processing personal data.',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsx)(n.h3, {
              id: 'data-processor',
              children: 'Data Processor',
            }),
            '\n',
            (0, r.jsxs)(n.ul, {
              children: [
                '\n',
                (0, r.jsx)(n.li, {
                  children:
                    'An entity that processes data on behalf of the data controller.',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsx)(n.h3, {id: 'consent', children: 'Consent'}),
            '\n',
            (0, r.jsxs)(n.ul, {
              children: [
                '\n',
                (0, r.jsx)(n.li, {
                  children:
                    'Permission for something to happen or agreement to do something.',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsx)(n.h3, {id: 'disclosure', children: 'Disclosure'}),
            '\n',
            (0, r.jsxs)(n.ul, {
              children: [
                '\n',
                (0, r.jsx)(n.li, {
                  children:
                    'The action of making new or secret information known.',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsx)(n.h3, {id: 'data-breach', children: 'Data Breach'}),
            '\n',
            (0, r.jsxs)(n.ul, {
              children: [
                '\n',
                (0, r.jsx)(n.li, {
                  children:
                    "An incident where information is stolen or taken from a system without the knowledge or authorization of the system's owner.",
                }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsx)(n.h3, {
              id: 'direct-marketing',
              children: 'Direct Marketing',
            }),
            '\n',
            (0, r.jsxs)(n.ul, {
              children: [
                '\n',
                (0, r.jsx)(n.li, {
                  children:
                    'A form of advertising where companies provide physical marketing materials to consumers to communicate information about a product or service.',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsx)(n.h3, {id: 'affiliates', children: 'Affiliates'}),
            '\n',
            (0, r.jsxs)(n.ul, {
              children: [
                '\n',
                (0, r.jsx)(n.li, {
                  children:
                    'Companies related by common ownership or control. They can be financial and non-financial companies.',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsx)(n.h3, {
              id: 'automated-decision-making',
              children: 'Automated Decision-Making',
            }),
            '\n',
            (0, r.jsxs)(n.ul, {
              children: [
                '\n',
                (0, r.jsx)(n.li, {
                  children:
                    'Decisions made by automated means without any human involvement.',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsx)(n.h3, {id: 'content', children: 'Content'}),
            '\n',
            (0, r.jsxs)(n.ul, {
              children: [
                '\n',
                (0, r.jsx)(n.li, {
                  children:
                    'Any text, images, videos, or other multimedia that are part of a website or service.',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsx)(n.h3, {
              id: 'coppa-childrens-online-privacy-protection-act',
              children: "COPPA (Children's Online Privacy Protection Act)",
            }),
            '\n',
            (0, r.jsxs)(n.ul, {
              children: [
                '\n',
                (0, r.jsx)(n.li, {
                  children:
                    'A U.S. federal law designed to protect the privacy of children under 13 years of age.',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsx)(n.h3, {
              id: 'ccpa-california-consumer-privacy-act',
              children: 'CCPA (California Consumer Privacy Act)',
            }),
            '\n',
            (0, r.jsxs)(n.ul, {
              children: [
                '\n',
                (0, r.jsx)(n.li, {
                  children:
                    'A state statute intended to enhance privacy rights and consumer protection for residents of California.',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsx)(n.h3, {
              id: 'gdpr-general-data-protection-regulation',
              children: 'GDPR (General Data Protection Regulation)',
            }),
            '\n',
            (0, r.jsxs)(n.ul, {
              children: [
                '\n',
                (0, r.jsx)(n.li, {
                  children:
                    'A regulation in EU law on data protection and privacy for all individuals within the European Union and the European Economic Area.',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsx)(n.h3, {
              id: 'ssl-secure-sockets-layer',
              children: 'SSL (Secure Sockets Layer)',
            }),
            '\n',
            (0, r.jsxs)(n.ul, {
              children: [
                '\n',
                (0, r.jsx)(n.li, {
                  children:
                    'A standard security technology for establishing an encrypted link between a server and a client.',
                }),
                '\n',
              ],
            }),
          ],
        });
      }
      function h(e = {}) {
        const {wrapper: n} = {...(0, t.R)(), ...e.components};
        return n
          ? (0, r.jsx)(n, {...e, children: (0, r.jsx)(c, {...e})})
          : c(e);
      }
    },
    3023: (e, n, i) => {
      i.d(n, {R: () => a, x: () => o});
      var r = i(3696);
      const t = {},
        s = r.createContext(t);
      function a(e) {
        const n = r.useContext(s);
        return r.useMemo(
          function () {
            return 'function' == typeof e ? e(n) : {...n, ...e};
          },
          [n, e]
        );
      }
      function o(e) {
        let n;
        return (
          (n = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(t)
              : e.components || t
            : a(e.components)),
          r.createElement(s.Provider, {value: n}, e.children)
        );
      }
    },
  },
]);

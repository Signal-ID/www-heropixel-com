/*! For license information please see 99a43cbf.396acf8d.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [6592],
  {
    2192: (e, o, i) => {
      var n = i(3696),
        r = Symbol.for('react.element'),
        t = Symbol.for('react.fragment'),
        a = Object.prototype.hasOwnProperty,
        s =
          n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        l = {key: !0, ref: !0, __self: !0, __source: !0};
      function c(e, o, i) {
        var n,
          t = {},
          c = null,
          d = null;
        for (n in (void 0 !== i && (c = '' + i),
        void 0 !== o.key && (c = '' + o.key),
        void 0 !== o.ref && (d = o.ref),
        o))
          a.call(o, n) && !l.hasOwnProperty(n) && (t[n] = o[n]);
        if (e && e.defaultProps)
          for (n in (o = e.defaultProps)) void 0 === t[n] && (t[n] = o[n]);
        return {
          $$typeof: r,
          type: e,
          key: c,
          ref: d,
          props: t,
          _owner: s.current,
        };
      }
      (o.Fragment = t), (o.jsx = c), (o.jsxs = c);
    },
    2540: (e, o, i) => {
      e.exports = i(2192);
    },
    1253: (e, o, i) => {
      i.r(o),
        i.d(o, {
          assets: () => l,
          contentTitle: () => a,
          default: () => h,
          frontMatter: () => t,
          metadata: () => s,
          toc: () => c,
        });
      var n = i(2540),
        r = i(3023);
      const t = {
          id: 'faq',
          title: 'Frequently Asked Questions',
          description: 'desc',
        },
        a = 'Frequently Asked Questions (FAQs)',
        s = {
          id: 'faq',
          title: 'Frequently Asked Questions',
          description: 'desc',
          source: '@site/versioned_docs/version-0.0.1/faq.md',
          sourceDirName: '.',
          slug: '/faq',
          permalink: '/docs/faq',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1724811989e3,
          frontMatter: {
            id: 'faq',
            title: 'Frequently Asked Questions',
            description: 'desc',
          },
          sidebar: 'docs',
          previous: {
            title: 'Add Your Bank Account',
            permalink: '/docs/add-bank-account',
          },
          next: {title: 'Glossary', permalink: '/docs/glossary'},
        },
        l = {},
        c = [
          {value: 'General Information', id: 'general-information', level: 2},
          {
            value: 'What services does your company provide?',
            id: 'what-services-does-your-company-provide',
            level: 3,
          },
          {
            value: 'How can I contact customer support?',
            id: 'how-can-i-contact-customer-support',
            level: 3,
          },
          {
            value: 'Data Collection and Usage',
            id: 'data-collection-and-usage',
            level: 2,
          },
          {
            value: 'What types of personal information do you collect?',
            id: 'what-types-of-personal-information-do-you-collect',
            level: 3,
          },
          {
            value: 'How do you use my personal information?',
            id: 'how-do-you-use-my-personal-information',
            level: 3,
          },
          {
            value: 'Do you share my personal information with third parties?',
            id: 'do-you-share-my-personal-information-with-third-parties',
            level: 3,
          },
          {
            value: 'What is a remarketing pixel?',
            id: 'what-is-a-remarketing-pixel',
            level: 3,
          },
          {
            value: 'How does the HeroPixelwork?',
            id: 'how-does-the-heropixelwork',
            level: 3,
          },
          {
            value: 'How do I install the HeroPixelon my website?',
            id: 'how-do-i-install-the-heropixelon-my-website',
            level: 3,
          },
          {
            value: 'What kind of data does the HeroPixelcollect?',
            id: 'what-kind-of-data-does-the-heropixelcollect',
            level: 3,
          },
          {
            value: 'Can I use the HeroPixelfor email marketing?',
            id: 'can-i-use-the-heropixelfor-email-marketing',
            level: 3,
          },
          {
            value: 'Is the data accurate?',
            id: 'is-the-data-accurate',
            level: 3,
          },
          {
            value: 'Are the emails you provide valid?',
            id: 'are-the-emails-you-provide-valid',
            level: 3,
          },
          {
            value:
              'What is the difference between the HeroPixeland other remarketing pixels?',
            id: 'what-is-the-difference-between-the-heropixeland-other-remarketing-pixels',
            level: 3,
          },
          {value: 'Privacy and Security', id: 'privacy-and-security', level: 2},
          {
            value: 'What are cookies and how do you use them?',
            id: 'what-are-cookies-and-how-do-you-use-them',
            level: 3,
          },
          {value: 'Account and Services', id: 'account-and-services', level: 2},
          {
            value: 'How do I create an account?',
            id: 'how-do-i-create-an-account',
            level: 3,
          },
          {
            value: 'I forgot my password. How can I reset it?',
            id: 'i-forgot-my-password-how-can-i-reset-it',
            level: 3,
          },
          {
            value: 'How can I delete my account?',
            id: 'how-can-i-delete-my-account',
            level: 3,
          },
          {
            value:
              'What should I do if I notice suspicious activity on my account?',
            id: 'what-should-i-do-if-i-notice-suspicious-activity-on-my-account',
            level: 3,
          },
          {value: 'Technical Support', id: 'technical-support', level: 2},
          {
            value:
              'What should I do if I experience technical issues with your website?',
            id: 'what-should-i-do-if-i-experience-technical-issues-with-your-website',
            level: 3,
          },
          {
            value: 'Do you offer API access for developers?',
            id: 'do-you-offer-api-access-for-developers',
            level: 3,
          },
          {value: 'Miscellaneous', id: 'miscellaneous', level: 2},
          {
            value: 'What is your refund policy?',
            id: 'what-is-your-refund-policy',
            level: 3,
          },
          {
            value: 'How can I stay updated on changes to your policies?',
            id: 'how-can-i-stay-updated-on-changes-to-your-policies',
            level: 3,
          },
          {
            value: 'Analysis and Reporting',
            id: 'analysis-and-reporting',
            level: 2,
          },
          {
            value: 'How do I analyze the data collected by the HeroPixel',
            id: 'how-do-i-analyze-the-data-collected-by-the-heropixel',
            level: 3,
          },
          {
            value: 'How do I generate reports using the dashboard?',
            id: 'how-do-i-generate-reports-using-the-dashboard',
            level: 3,
          },
        ];
      function d(e) {
        const o = {
          a: 'a',
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          li: 'li',
          ul: 'ul',
          ...(0, r.R)(),
          ...e.components,
        };
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(o.h1, {
              id: 'frequently-asked-questions-faqs',
              children: 'Frequently Asked Questions (FAQs)',
            }),
            '\n',
            (0, n.jsx)(o.h2, {
              id: 'general-information',
              children: 'General Information',
            }),
            '\n',
            (0, n.jsx)(o.h3, {
              id: 'what-services-does-your-company-provide',
              children: 'What services does your company provide?',
            }),
            '\n',
            (0, n.jsxs)(o.ul, {
              children: [
                '\n',
                (0, n.jsx)(o.li, {
                  children:
                    'We offer lead generation services using our remarketing pixel, and lead generation through targeted advertising.',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, n.jsx)(o.h3, {
              id: 'how-can-i-contact-customer-support',
              children: 'How can I contact customer support?',
            }),
            '\n',
            (0, n.jsxs)(o.ul, {
              children: [
                '\n',
                (0, n.jsxs)(o.li, {
                  children: [
                    'You can reach our customer support team via email at [',
                    (0, n.jsx)(o.a, {
                      href: 'mailto:support@heropixel.com',
                      children: 'support@heropixel.com',
                    }),
                    '] or by phone at +1 877-655-9072. Our support hours are Monday through Friday from 9am to 5pm CST.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, n.jsx)(o.h2, {
              id: 'data-collection-and-usage',
              children: 'Data Collection and Usage',
            }),
            '\n',
            (0, n.jsx)(o.h3, {
              id: 'what-types-of-personal-information-do-you-collect',
              children: 'What types of personal information do you collect?',
            }),
            '\n',
            (0, n.jsxs)(o.ul, {
              children: [
                '\n',
                (0, n.jsxs)(o.li, {
                  children: [
                    'We collect various types of personal information, including names, email addresses, IP addresses, browsing behavior, and transaction histories. For a detailed list, please refer to our ',
                    (0, n.jsx)(o.a, {
                      href: '/privacy-policy',
                      children: 'Privacy Policy',
                    }),
                    '.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, n.jsx)(o.h3, {
              id: 'how-do-you-use-my-personal-information',
              children: 'How do you use my personal information?',
            }),
            '\n',
            (0, n.jsxs)(o.ul, {
              children: [
                '\n',
                (0, n.jsxs)(o.li, {
                  children: [
                    'We use your personal information to provide and improve our services, personalize your experience, conduct data analysis, and for marketing purposes. Detailed information can be found in our ',
                    (0, n.jsx)(o.a, {
                      href: '/privacy-policy',
                      children: 'Privacy Policy',
                    }),
                    '.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, n.jsx)(o.h3, {
              id: 'do-you-share-my-personal-information-with-third-parties',
              children:
                'Do you share my personal information with third parties?',
            }),
            '\n',
            (0, n.jsxs)(o.ul, {
              children: [
                '\n',
                (0, n.jsx)(o.li, {
                  children:
                    'Yes, we may share your personal information with trusted third-party service providers, partners, and affiliates who assist us in providing our services. We do not sell your personal information to third parties for their own marketing purposes.',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, n.jsx)(o.h3, {
              id: 'what-is-a-remarketing-pixel',
              children: 'What is a remarketing pixel?',
            }),
            '\n',
            (0, n.jsxs)(o.ul, {
              children: [
                '\n',
                (0, n.jsx)(o.li, {
                  children:
                    'A remarketing pixel is a small piece of code that you add to your website. It helps you track visitors and build audiences for your marketing and advertising campaigns based on their behavior on your site.',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, n.jsx)(o.h3, {
              id: 'how-does-the-heropixelwork',
              children: 'How does the HeroPixelwork?',
            }),
            '\n',
            (0, n.jsxs)(o.ul, {
              children: [
                '\n',
                (0, n.jsx)(o.li, {
                  children:
                    'The HeroPixeltracks visitors to your website and collects their contact information. This data allows you to create detailed audience lists and reach out to your audience directly through personalized messages.',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, n.jsx)(o.h3, {
              id: 'how-do-i-install-the-heropixelon-my-website',
              children: 'How do I install the HeroPixelon my website?',
            }),
            '\n',
            (0, n.jsxs)(o.ul, {
              children: [
                '\n',
                (0, n.jsxs)(o.li, {
                  children: [
                    'To install the HeroPixel add the provided pixel code to the HTML of your website. Detailed instructions for installation can be found in our ',
                    (0, n.jsx)(o.a, {
                      href: '/docs/start-registration',
                      children: 'Getting Started Guide',
                    }),
                    '.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, n.jsx)(o.h3, {
              id: 'what-kind-of-data-does-the-heropixelcollect',
              children: 'What kind of data does the HeroPixelcollect?',
            }),
            '\n',
            (0, n.jsxs)(o.ul, {
              children: [
                '\n',
                (0, n.jsx)(o.li, {
                  children:
                    'The HeroPixelcollects data such as contact information, pageview information, browser information, browsing behavior, and custom data fields that you define. This data helps you build a detailed profile of your audience.',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, n.jsx)(o.h3, {
              id: 'can-i-use-the-heropixelfor-email-marketing',
              children: 'Can I use the HeroPixelfor email marketing?',
            }),
            '\n',
            (0, n.jsxs)(o.ul, {
              children: [
                '\n',
                (0, n.jsx)(o.li, {
                  children:
                    'Yes, the HeroPixelcollects contact details that you can use to initiate personal conversations and email marketing campaigns with your audience.',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, n.jsx)(o.h3, {
              id: 'is-the-data-accurate',
              children: 'Is the data accurate?',
            }),
            '\n',
            (0, n.jsxs)(o.ul, {
              children: [
                '\n',
                (0, n.jsx)(o.li, {
                  children:
                    'Yes, our data is 97% accurate when analyzed by third party vendors.',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, n.jsx)(o.h3, {
              id: 'are-the-emails-you-provide-valid',
              children: 'Are the emails you provide valid?',
            }),
            '\n',
            (0, n.jsxs)(o.ul, {
              children: [
                '\n',
                (0, n.jsx)(o.li, {
                  children:
                    "Yes, every email we return to you has been vetted through a series of checks to determine that it's not only a valid email address, but one that has been used by a human. All emails go through a 20 point check to ensure accuracy.",
                }),
                '\n',
              ],
            }),
            '\n',
            (0, n.jsx)(o.h3, {
              id: 'what-is-the-difference-between-the-heropixeland-other-remarketing-pixels',
              children:
                'What is the difference between the HeroPixeland other remarketing pixels?',
            }),
            '\n',
            (0, n.jsxs)(o.ul, {
              children: [
                '\n',
                (0, n.jsx)(o.li, {
                  children:
                    'The HeroPixelallows you to own your audience by providing you with their contact details, unlike other remarketing pixels that rely solely on displaying ads through their ad networks.',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, n.jsx)(o.h2, {
              id: 'privacy-and-security',
              children: 'Privacy and Security',
            }),
            '\n',
            (0, n.jsx)(o.h3, {
              id: 'what-are-cookies-and-how-do-you-use-them',
              children: 'What are cookies and how do you use them?',
            }),
            '\n',
            (0, n.jsxs)(o.ul, {
              children: [
                '\n',
                (0, n.jsxs)(o.li, {
                  children: [
                    'Cookies are small data files stored on your device that help us remember your preferences and understand how you interact with our website. We use cookies to improve your experience and for analytical purposes. For more details, please refer to our ',
                    (0, n.jsx)(o.a, {
                      href: '/privacy-policy',
                      children: 'Cookies Policy',
                    }),
                    '.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, n.jsx)(o.h2, {
              id: 'account-and-services',
              children: 'Account and Services',
            }),
            '\n',
            (0, n.jsx)(o.h3, {
              id: 'how-do-i-create-an-account',
              children: 'How do I create an account?',
            }),
            '\n',
            (0, n.jsxs)(o.ul, {
              children: [
                '\n',
                (0, n.jsxs)(o.li, {
                  children: [
                    'All account registrations are currently locked. Or system is invite only. You can join our ',
                    (0, n.jsx)(o.a, {
                      href: 'https://go.heropixel.com/waitlist',
                      children: 'waiting list',
                    }),
                    '.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, n.jsx)(o.h3, {
              id: 'i-forgot-my-password-how-can-i-reset-it',
              children: 'I forgot my password. How can I reset it?',
            }),
            '\n',
            (0, n.jsxs)(o.ul, {
              children: [
                '\n',
                (0, n.jsx)(o.li, {
                  children:
                    'You can reset your password by clicking the "Forgot Password" link on the login page and following the instructions. If you encounter any issues, please contact our customer support team.',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, n.jsx)(o.h3, {
              id: 'how-can-i-delete-my-account',
              children: 'How can I delete my account?',
            }),
            '\n',
            (0, n.jsxs)(o.ul, {
              children: [
                '\n',
                (0, n.jsx)(o.li, {
                  children:
                    'Please note that deleting your account may result in the loss of data associated with your account. To delete your account, please access your account profile and choose the "delete profile" option.',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, n.jsx)(o.h3, {
              id: 'what-should-i-do-if-i-notice-suspicious-activity-on-my-account',
              children:
                'What should I do if I notice suspicious activity on my account?',
            }),
            '\n',
            (0, n.jsxs)(o.ul, {
              children: [
                '\n',
                (0, n.jsxs)(o.li, {
                  children: [
                    'If you notice any suspicious activity on your account, please change your password immediately and contact our customer support team at [',
                    (0, n.jsx)(o.a, {
                      href: 'mailto:support@heropixel.com',
                      children: 'support@heropixel.com',
                    }),
                    '] for further assistance.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, n.jsx)(o.h2, {
              id: 'technical-support',
              children: 'Technical Support',
            }),
            '\n',
            (0, n.jsx)(o.h3, {
              id: 'what-should-i-do-if-i-experience-technical-issues-with-your-website',
              children:
                'What should I do if I experience technical issues with your website?',
            }),
            '\n',
            (0, n.jsxs)(o.ul, {
              children: [
                '\n',
                (0, n.jsxs)(o.li, {
                  children: [
                    'If you experience technical issues with our website, please try clearing your browser cache and cookies, or using a different browser. If the issue persists, contact our technical support team at [',
                    (0, n.jsx)(o.a, {
                      href: 'mailto:support@heropixel.com',
                      children: 'support@heropixel.com',
                    }),
                    '].',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, n.jsx)(o.h3, {
              id: 'do-you-offer-api-access-for-developers',
              children: 'Do you offer API access for developers?',
            }),
            '\n',
            (0, n.jsxs)(o.ul, {
              children: [
                '\n',
                (0, n.jsxs)(o.li, {
                  children: [
                    'Yes, we offer API access for developers to integrate our services with their applications. For more information, please visit our ',
                    (0, n.jsx)(o.a, {
                      href: '/docs/intro-to-graphql',
                      children: 'API documentation',
                    }),
                    ' or contact our support team.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, n.jsx)(o.h2, {id: 'miscellaneous', children: 'Miscellaneous'}),
            '\n',
            (0, n.jsx)(o.h3, {
              id: 'what-is-your-refund-policy',
              children: 'What is your refund policy?',
            }),
            '\n',
            (0, n.jsxs)(o.ul, {
              children: [
                '\n',
                (0, n.jsxs)(o.li, {
                  children: [
                    'Our refund policy is outlined in our ',
                    (0, n.jsx)(o.a, {
                      href: '/terms-and-conditions',
                      children: 'Terms of Service',
                    }),
                    '. Generally, we do not offer refunds for services rendered. However, if you have any concerns, please contact our customer support team.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, n.jsx)(o.h3, {
              id: 'how-can-i-stay-updated-on-changes-to-your-policies',
              children: 'How can I stay updated on changes to your policies?',
            }),
            '\n',
            (0, n.jsxs)(o.ul, {
              children: [
                '\n',
                (0, n.jsxs)(o.li, {
                  children: [
                    'We will notify you of any significant changes to our policies via email or by posting a notice on our website. We encourage you to review our ',
                    (0, n.jsx)(o.a, {
                      href: '/privacy-policy',
                      children: 'Privacy Policy',
                    }),
                    ' and ',
                    (0, n.jsx)(o.a, {
                      href: '/terms-and-conditions',
                      children: 'Terms of Service',
                    }),
                    ' periodically.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, n.jsx)(o.h2, {
              id: 'analysis-and-reporting',
              children: 'Analysis and Reporting',
            }),
            '\n',
            (0, n.jsx)(o.h3, {
              id: 'how-do-i-analyze-the-data-collected-by-the-heropixel',
              children: 'How do I analyze the data collected by the HeroPixel',
            }),
            '\n',
            (0, n.jsxs)(o.ul, {
              children: [
                '\n',
                (0, n.jsx)(o.li, {
                  children:
                    "Our dashboard provides tools for analyzing the data collected by the HeroPixel You can monitor key metrics, track performance, and gain insights into your audience's behavior.",
                }),
                '\n',
              ],
            }),
            '\n',
            (0, n.jsx)(o.h3, {
              id: 'how-do-i-generate-reports-using-the-dashboard',
              children: 'How do I generate reports using the dashboard?',
            }),
            '\n',
            (0, n.jsxs)(o.ul, {
              children: [
                '\n',
                (0, n.jsx)(o.li, {
                  children:
                    'You can generate reports by applying filters on the dashboard and using the "Export PDF" feature to download the report. Refer to our user guide for step-by-step instructions.',
                }),
                '\n',
              ],
            }),
          ],
        });
      }
      function h(e = {}) {
        const {wrapper: o} = {...(0, r.R)(), ...e.components};
        return o
          ? (0, n.jsx)(o, {...e, children: (0, n.jsx)(d, {...e})})
          : d(e);
      }
    },
    3023: (e, o, i) => {
      i.d(o, {R: () => a, x: () => s});
      var n = i(3696);
      const r = {},
        t = n.createContext(r);
      function a(e) {
        const o = n.useContext(t);
        return n.useMemo(
          function () {
            return 'function' == typeof e ? e(o) : {...o, ...e};
          },
          [o, e]
        );
      }
      function s(e) {
        let o;
        return (
          (o = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(r)
              : e.components || r
            : a(e.components)),
          n.createElement(t.Provider, {value: o}, e.children)
        );
      }
    },
  },
]);

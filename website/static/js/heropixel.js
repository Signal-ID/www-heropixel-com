/**
 * Loading the ConsentGuard Cookie Banner
 *
 *
 */
window.cookieConsentOptions = window.cookieConsentOptions || [];
window.cookieConsentOptions = {
  writeKey: 'lvJUuKS8hJaTTitB3BaaW1cBcnIXpWvl:W9IvcK1dAudBNzp34dnpoR9Gexg7qRSQ',
  jitsuUrl: 'https://clz8wa08900003b762fap3gap.d.jitsu.com/p.js',
  privacyPolicyLink: 'https://heropixel.com/privacy-policy',
};

(function () {
  var d = document,
    g = d.createElement('script'),
    s = d.getElementsByTagName('script')[0];
  g.async = true;
  g.src = 'https://app.heropixel.com/cookie_consent_banner/index.js';
  s.parentNode.insertBefore(g, s);
})();

/**
 * Loading the Core
 *
 *
 */
(function () {
  var d = document,
    g = d.createElement('script'),
    s = d.getElementsByTagName('script')[0];
  g.async = true;
  g.src = 'https://app.heropixel.com/pixel/script.js';
  s.parentNode.insertBefore(g, s);
})();

window.analyticsLayer = window.analyticsLayer || [];
window.analyticsLayer.push({
  event: 'pageview',
  websiteId: '18',
});

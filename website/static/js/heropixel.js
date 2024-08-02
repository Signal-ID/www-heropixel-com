(function () {
  var d = document,
    g = d.createElement('script'),
    s = d.getElementsByTagName('script')[0];
  g.async = true;
  g.src = 'https://app.heropixel.com/' + 'pixel/script.js';
  s.parentNode.insertBefore(g, s);
})();

window.analyticsLayer = window.analyticsLayer || [];
window.analyticsLayer.push({
  event: 'pageview',
  websiteId: '18',
  // ... other properties
  // ,custom_one: '1'
  // ,custom_two: '2'
  // ,custom_three: '3'
  // ,custom_four: '4'
  // ,custom_five: '5'
});

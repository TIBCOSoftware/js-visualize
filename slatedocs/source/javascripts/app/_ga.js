function loadScript(url) {
  var script = document.createElement('script');
  script.async = true;
  script.src = url;
  document.head.appendChild(script);
}

function loadGoogleAnalytics() {
  window.dataLayer = window.dataLayer || [];

  function gtag() {
    dataLayer.push(arguments);
  }

  gtag('js', new Date());
  gtag('config', 'UA-112380144-1');

  <!-- Google Tag Manager -->
  (function (w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({
      'gtm.start':
        new Date().getTime(), event: 'gtm.js'
    });
    var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
    j.async = true;
    j.src =
      'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
    f.parentNode.insertBefore(j, f);
  })(window, document, 'script', 'dataLayer', 'GTM-5BNWTHP');
  <!-- End Google Tag Manager -->
}

loadScript('https://www.googletagmanager.com/gtag/js?id=UA-112380144-1');
loadGoogleAnalytics();

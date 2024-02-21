/* global GA_ID, ga */

export default ({ router }) => {
// Google analytics integration
  if (process.env.NODE_ENV === 'production' && GA_ID && typeof window !== 'undefined') {
    // (function (i, s, o, g, r, a, m) {
    //   i['GoogleAnalyticsObject'] = r
    //   i[r] = i[r] || function () {
    //     (i[r].q = i[r].q || []).push(arguments)
    //   }
    //   i[r].l = 1 * new Date()
    //   a = s.createElement(o)
    //   m = s.getElementsByTagName(o)[0]
    //   a.async = 1
    //   a.src = g
    //   m.parentNode.insertBefore(a, m)
    // })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga')

    // ga('create', GA_ID, 'auto')
    // ga('set', 'anonymizeIp', true)

    // router.afterEach(function (to) {
    //   ga('set', 'page', router.app.$withBase(to.fullPath))
    //   ga('send', 'pageview')
    // })

    {
      const script = document.createElement('script')
      script.type = "text/javascript"
      script.src = 'https://www.googletagmanager.com/gtag/js?id=G-Y289NM5K6X';
      script.async = true
      document.body.appendChild(script);
    }

    {
      const code = `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-Y289NM5K6X');`
      const script = document.createElement("script");
      script.type = "text/javascript";
      try {
        script.appendChild(document.createTextNode(code));
      } catch (ex) {
        script.text(code);
      }
      document.body.appendChild(script);
    }

  }
}

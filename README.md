[![Build Status](https://travis-ci.com/Alheimsins/webquality.svg?branch=master)](https://travis-ci.com/Alheimsins/webquality)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# webquality

Check your site using [Lighthouse](https://developers.google.com/web/tools/lighthouse/) and [Security Headers](https://securityheaders.com/)

This will measure performance, accessibility, best practices, SEO and security.

If your score is 90+ in all categories you probably have happy users. If not: do better :-)

## Usage

Supply the url to a webpage and wait for results.

Depending on your site tests typically will run for 10 - 20 seconds.

```JavaScript
(async () => {
  const wq = require('@alheimsins/webquality')
  const results = await wq('https://www.google.com')
  console.log(results)
})()
```

returns

```JavaScript
[
  {
    "id": "performance",
    "title": "Performance",
    "score": 100
  },
  {
    "id": "accessibility",
    "title": "Accessibility",
    "description": "These checks highlight opportunities to [improve the accessibility of your web app](https://developers.google.com/web/fundamentals/accessibility). Only a subset of accessibility issues can be automatically detected so manual testing is also encouraged.",
    "score": 60,
    "manualDescription": "These items address areas which an automated testing tool cannot cover. Learn more in our guide on [conducting an accessibility review](https://developers.google.com/web/fundamentals/accessibility/how-to-review)."
  },
  {
    "id": "best-practices",
    "title": "Best Practices",
    "score": 92
  },
  {
    "id": "seo",
    "title": "SEO",
    "description": "These checks ensure that your page is optimized for search engine results ranking. There are additional factors Lighthouse does not check that may affect your search ranking. [Learn more](https://support.google.com/webmasters/answer/35769).",
    "score": 90,
    "manualDescription": "Run these additional validators on your site to check additional SEO best practices."
  },
  {
    "id": "securityheaders",
    "title": "Security",
    "score": 0,
    "grade": "F",
    "description": "Security Headers https://securityheaders.com is created by Scott Helme https://scotthelme.co.uk/ to drive up the usage of security based headers across the web."
  }
]
```

Throws error if any of the tests fails.

## Development

If you need to see the logs you can add `debug` to your environment.

```JavaScript
(async () => {
  process.env.debug = true
  const wq = require('@alheimsins/webquality')
  const results = await wq('https://www.google.com')
  console.log(results)
})()
```

# License

[MIT](LICENSE)
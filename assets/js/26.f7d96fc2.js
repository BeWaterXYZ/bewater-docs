(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{340:function(e,t,a){"use strict";a.r(t);var s=a(6),r=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"asset-handling"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#asset-handling"}},[e._v("#")]),e._v(" Asset Handling")]),e._v(" "),t("h2",{attrs:{id:"relative-urls"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#relative-urls"}},[e._v("#")]),e._v(" Relative URLs")]),e._v(" "),t("p",[e._v("All Markdown files are compiled into Vue components and processed by "),t("a",{attrs:{href:"http://webpack.js.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("webpack"),t("OutboundLink")],1),e._v(". You can, "),t("strong",[e._v("and should")]),e._v(", reference any assets using relative URLs:")]),e._v(" "),t("div",{staticClass:"language-md extra-class"},[t("pre",{pre:!0,attrs:{class:"language-md"}},[t("code",[t("span",{pre:!0,attrs:{class:"token url"}},[t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v("["),t("span",{pre:!0,attrs:{class:"token content"}},[e._v("An image")]),e._v("]("),t("span",{pre:!0,attrs:{class:"token url"}},[e._v("./image.png")]),e._v(")")]),e._v("\n")])])]),t("p",[e._v("This would work the same way as in "),t("code",[e._v("*.vue")]),e._v(" file templates. The image will be processed with "),t("code",[e._v("url-loader")]),e._v(" and "),t("code",[e._v("file-loader")]),e._v(", and copied to appropriate locations in the generated static build.")]),e._v(" "),t("p",[e._v("You can also use the "),t("code",[e._v("~")]),e._v(" prefix to explicitly specify this is a webpack module request, allowing you to reference files with webpack aliases or from npm dependencies:")]),e._v(" "),t("div",{staticClass:"language-md extra-class"},[t("pre",{pre:!0,attrs:{class:"language-md"}},[t("code",[t("span",{pre:!0,attrs:{class:"token url"}},[t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v("["),t("span",{pre:!0,attrs:{class:"token content"}},[e._v("Image from alias")]),e._v("]("),t("span",{pre:!0,attrs:{class:"token url"}},[e._v("~@alias/image.png")]),e._v(")")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token url"}},[t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v("["),t("span",{pre:!0,attrs:{class:"token content"}},[e._v("Image from dependency")]),e._v("]("),t("span",{pre:!0,attrs:{class:"token url"}},[e._v("~some-dependency/image.png")]),e._v(")")]),e._v("\n")])])]),t("p",[e._v("One alias that is added by default is "),t("code",[e._v("@source")]),e._v(", if you follow the recommended "),t("RouterLink",{attrs:{to:"/guide/directory-structure.html"}},[e._v("Directory Structure")]),e._v(" this is the "),t("code",[e._v("docs")]),e._v(" folder.")],1),e._v(" "),t("div",{staticClass:"language-md extra-class"},[t("pre",{pre:!0,attrs:{class:"language-md"}},[t("code",[t("span",{pre:!0,attrs:{class:"token url"}},[t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v("["),t("span",{pre:!0,attrs:{class:"token content"}},[e._v("Image from images folder")]),e._v("]("),t("span",{pre:!0,attrs:{class:"token url"}},[e._v("~@source/images/image.png")]),e._v(")")]),e._v("\n")])])]),t("p",[e._v("Webpack aliases can be configured via "),t("RouterLink",{attrs:{to:"/config/#configurewebpack"}},[e._v("configureWebpack")]),e._v(" in "),t("code",[e._v(".vuepress/config.js")]),e._v(". Example:")],1),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[e._v("module"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("exports "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("configureWebpack")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("resolve")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("alias")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[e._v("'@alias'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'path/to/some/dir'")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("h2",{attrs:{id:"public-files"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#public-files"}},[e._v("#")]),e._v(" Public Files")]),e._v(" "),t("p",[e._v("Sometimes you may need to provide static assets that are not directly referenced in any of your Markdown or theme components (for example, favicons and PWA icons). In such cases, you can put them inside "),t("code",[e._v(".vuepress/public")]),e._v(" and they will be copied to the root of the generated directory.")]),e._v(" "),t("h2",{attrs:{id:"base-url"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#base-url"}},[e._v("#")]),e._v(" Base URL")]),e._v(" "),t("p",[e._v("If your site is deployed to a non-root URL, you will need to set the "),t("code",[e._v("base")]),e._v(" option in "),t("code",[e._v(".vuepress/config.js")]),e._v(". For example, if you plan to deploy your site to "),t("code",[e._v("https://foo.github.io/bar/")]),e._v(", then "),t("code",[e._v("base")]),e._v(" should be set to "),t("code",[e._v('"/bar/"')]),e._v(" (it should always start and end with a slash).")]),e._v(" "),t("p",[e._v("With a base URL, to reference an image in "),t("code",[e._v(".vuepress/public")]),e._v(", you’d have to use URLs like "),t("code",[e._v("/bar/image.png")]),e._v(". But this is brittle if you ever decide to change the "),t("code",[e._v("base")]),e._v(". To help with that, VuePress provides a built-in helper "),t("code",[e._v("$withBase")]),e._v(" (injected onto Vue’s prototype) that generates the correct path:")]),e._v(" "),t("div",{staticClass:"language-vue extra-class"},[t("pre",{pre:!0,attrs:{class:"language-vue"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("img")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v(":src")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("$withBase('/foo.png')"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),e._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("alt")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("foo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n")])])]),t("p",[e._v("Note you can use the above syntax not only in theme components, but in your Markdown files as well.")]),e._v(" "),t("p",[e._v("Also, if a "),t("code",[e._v("base")]),e._v(" is set, it’s automatically prepended to all asset URLs in "),t("code",[e._v(".vuepress/config.js")]),e._v(" options.")])])}),[],!1,null,null,null);t.default=r.exports}}]);
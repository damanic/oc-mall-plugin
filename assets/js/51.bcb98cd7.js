(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{367:function(e,t,a){"use strict";a.r(t);var s=a(42),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"payments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#payments"}},[e._v("#")]),e._v(" Payments")]),e._v(" "),a("h2",{attrs:{id:"payment-gateways"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#payment-gateways"}},[e._v("#")]),e._v(" Payment gateways")]),e._v(" "),a("p",[a("code",[e._v("Payment gateways")]),e._v(" are of technical nature and won't be visible to the user. You can\nuse the payment gateway settings page to configure your API keys and other settings for\neach gateway.")]),e._v(" "),a("p",[e._v("Each gateway can be used by one or many payment methods.")]),e._v(" "),a("p",[e._v("You can add custom gateways by implementing and registering a\n"),a("RouterLink",{attrs:{to:"/development/payment-providers.html"}},[e._v("Payment provider class")]),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"payment-methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#payment-methods"}},[e._v("#")]),e._v(" Payment methods")]),e._v(" "),a("p",[a("code",[e._v("Payment methods")]),e._v(" are presented to a customer during checkout. They abstract\naway the technical nature of a "),a("code",[e._v("Payment gateway")]),e._v(". You can define a\nname, a description and a logo for each payment method.")]),e._v(" "),a("p",[e._v("You can also specify special payment instructions (see below) or fees\nthat will be added to the user's cart during checkout.")]),e._v(" "),a("p",[e._v("Payment methods use a single "),a("code",[e._v("Payment gateway")]),e._v(" to process a payment.")]),e._v(" "),a("h3",{attrs:{id:"fees"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fees"}},[e._v("#")]),e._v(" Fees")]),e._v(" "),a("p",[e._v("You can define fixed and variable fees that will be added to the user's cart\nduring checkout.")]),e._v(" "),a("p",[e._v("If, for example, you want to forward your Stripe fees to the customer, you can\nadd "),a("code",[e._v("0.30 USD")]),e._v(" as fixed fee and "),a("code",[e._v("2.9 %")]),e._v(" as percentage fee.")]),e._v(" "),a("h3",{attrs:{id:"payment-instructions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#payment-instructions"}},[e._v("#")]),e._v(" Payment instructions")]),e._v(" "),a("p",[e._v("You can specify special payment instructions using Twig syntax in the "),a("code",[e._v("Instructions")]),e._v(" field of\nany payment method.")]),e._v(" "),a("p",[e._v("By default, these instructions will be displayed when using the\n"),a("RouterLink",{attrs:{to:"/components/payment-method-selector.html"}},[e._v("Payment method selector")]),e._v(" or\n"),a("RouterLink",{attrs:{to:"/components/orders-list.html"}},[e._v("Orders list")]),e._v(" components.")],1),e._v(" "),a("p",[e._v("You can access a "),a("code",[e._v("order")]),e._v(" variable (if available) to display additional information. During the checkout\nprocess you have access to the "),a("code",[e._v("cart")]),e._v(" model since no order was created yet.")]),e._v(" "),a("p",[e._v('Sample instructions for a "Payment in advance" method could be:')]),e._v(" "),a("div",{staticClass:"language-twig line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-twig"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("{# \n    Check if the order has been created yet.\n    During checkout this might not be the case\n#}")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{%")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")])]),e._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v("order")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("%}")])])]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token other"}},[e._v("Send your payment to:\n    *Bank information*\n    \n    Payment id:")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{{")])]),e._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v("order")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[e._v("payment_hash")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}}")])])]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{%")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("endif")])]),e._v(" "),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("%}")])])]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br")])]),a("h2",{attrs:{id:"pdf-invoices"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pdf-invoices"}},[e._v("#")]),e._v(" PDF invoices")]),e._v(" "),a("p",[e._v("If you wish to send a PDF invoice to your customers during checkout you can\ndo so starting from version 1.8.0.")]),e._v(" "),a("p",[e._v("When updating a payment method via the backend, you can select a PDF partial\nfrom the select box.")]),e._v(" "),a("p",[e._v("PDF partials need to be placed in your theme's partial folder at\n"),a("code",[e._v("partials/mallPDF/<custom-name>/default.htm")]),e._v(".")]),e._v(" "),a("p",[e._v("As soon as you have created this partial, it will be selectable in the payment\nmethod form.")]),e._v(" "),a("div",{pre:!0},[a("p",[e._v("Your invoice has to be a complete HTML document. You have access to all order\ndata using the "),a("code",[e._v("{{ order }}")]),e._v(" variable.")])]),a("p",[e._v("Take a look at the demo theme for an example implementation:\n"),a("a",{attrs:{href:"https://github.com/OFFLINE-GmbH/oc-mall-theme/tree/master/partials/mallPDF/order",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/OFFLINE-GmbH/oc-mall-theme/tree/master/partials/mallPDF/order"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("Read more about the PDF support "),a("RouterLink",{attrs:{to:"/development/pdf.html"}},[e._v("on the PDF page")]),e._v(".")],1)])}),[],!1,null,null,null);t.default=n.exports}}]);
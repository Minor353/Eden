!function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o(1)(),o(2)(),o(3)(),o(4)(),o(5)(),o(6)(),o(7)()},function(e,t,o){"use strict";e.exports=function(){$(".reviews_content").slick({dots:!0,infinite:!0,arrows:!1,centerMode:!0,centerPadding:"0px",speed:800,slidesToShow:3,slidesToScroll:3,autoplay:!0,autoplaySpeed:3e3,responsive:[{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:2,centerPadding:"5px",infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:1,centerPadding:"0px",slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]})}},function(e,t,o){"use strict";e.exports=function(){$(".main-product_gallery-main").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,fade:!0,asNavFor:".main-product_gallery-nav"}),$(".main-product_gallery-nav").slick({slidesToShow:3,slidesToScroll:0,centerPadding:0,vertical:!0,asNavFor:".main-product_gallery-main",dots:!1,centerMode:!0,focusOnSelect:!0})}},function(e,t,o){"use strict";e.exports=function(){var e=document.querySelector(".main-product_tabs"),t=document.querySelectorAll(".main-product_tabs-list-item"),o=document.querySelectorAll(".main-product_tabs-description-text");if(e){t[0].classList.add("main-product_tabs-list-item--active"),o[0].classList.add("main-product_tabs-description-text--active");for(var r=function(e){t[e].addEventListener("click",function(r){r.preventDefault();for(var n=0;n<t.length;n++)t[n].classList.remove("main-product_tabs-list-item--active"),o[n].classList.remove("main-product_tabs-description-text--active");t[e].classList.add("main-product_tabs-list-item--active"),o[e].classList.add("main-product_tabs-description-text--active")})},n=0;n<t.length;n++)r(n)}}},function(e,t,o){"use strict";e.exports=function(){var e=document.querySelector(".answers_list"),t=document.querySelectorAll(".answers_item"),o=document.querySelectorAll(".answers_item-title");if(e){t[0].classList.add("answers_item-active");for(var r=function(e){o[e].addEventListener("click",function(){for(var o=0;o<t.length;o++)t[o].classList.remove("answers_item-active");t[e].classList.add("answers_item-active")})},n=0;n<t.length;n++)r(n)}}},function(e,t,o){"use strict";e.exports=function(){}},function(e,t,o){"use strict";e.exports=function(){$("#navToggle").click(function(){$(this).toggleClass("active"),$(".overlay").toggleClass("open"),$("body").toggleClass("locked")})}},function(e,t,o){"use strict";e.exports=function(){var e=document.querySelector(".main-product_order-btn"),t=document.querySelector(".main-product_preorder-btn"),o=document.querySelector(".product-form_title"),r=document.querySelector(".main-product_description-title").textContent,n=document.querySelector(".product-form_product-name"),i=document.querySelector(".product-form_type"),c=document.querySelector(".product-form"),s=document.querySelector(".product-form_cross");e&&(e.addEventListener("click",function(e){e.preventDefault(),o.innerHTML="Оформить заказ",c.classList.add("product-form--active"),n.value=r,i.value=o.textContent}),t.addEventListener("click",function(e){e.preventDefault(),o.innerHTML="Оформить рассрочку",c.classList.add("product-form--active"),n.value=r,i.value=o.textContent}),s.addEventListener("click",function(){c.classList.remove("product-form--active")}))}}]);
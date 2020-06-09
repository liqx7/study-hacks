// ==UserScript==
// @name         zhihuView
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  浏览知乎简洁模式
// @author       You
// @match        https://www.zhihu.com/
// @grant        none
// ==/UserScript==

(function () {
  "use strict";
  window.onload = function () {
    document.getElementsByClassName("AppHeader")[0].style.display = "none";
    var ads = document.getElementsByClassName("Pc-feedAd-container") || [];
    var imgs = document.getElementsByClassName("RichContent-cover") || [];
    for (let i = 0; i < ads.length; i++) {
      ads[i].style.display = "none";
    }
    for (let i = 0; i < imgs.length; i++) {
      imgs[i].style.display = "none";
    }
    var mm = document.getElementsByTagName("img");
    for (let i = 0; i < mm.length; i++) {
      mm[i].style.display = "none";
    }
    ("none");
  };
  // Your code here...
})();

var e=require;
var t=module;
var o=exports;
"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.LanguageFun=void 0;var n=e("AppCommon"),i=e("GConfig"),a=e("LanguageData"),e=(r.init=function(e){console.log("[languageFun][init]语言包初始化"),n.default.LANGUAGE=0<=cc.sys.languageCode.indexOf("zh")?"zh":"en",n.default.LANGUAGE=i.cf.LANGUAGE,e()},r.check=function(e){return"zh"!=n.default.LANGUAGE&&a.LanguageData[e]||e},r);function r(){}o.LanguageFun=e
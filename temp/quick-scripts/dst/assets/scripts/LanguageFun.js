
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/LanguageFun.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a8e97sqdy9CyJMOjssDWYna', 'LanguageFun');
// scripts/LanguageFun.js

"use strict";

var e = require;
var t = module;
var o = exports;
"use strict";

Object.defineProperty(o, "__esModule", {
  value: !0
}), o.LanguageFun = void 0;
var n = e("AppCommon"),
    i = e("GConfig"),
    a = e("LanguageData"),
    e = (r.init = function (e) {
  console.log("[languageFun][init]语言包初始化"), n["default"].LANGUAGE = 0 <= cc.sys.languageCode.indexOf("zh") ? "zh" : "en", n["default"].LANGUAGE = i.cf.LANGUAGE, e();
}, r.check = function (e) {
  return "zh" != n["default"].LANGUAGE && a.LanguageData[e] || e;
}, r);

function r() {}

o.LanguageFun = e;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTGFuZ3VhZ2VGdW4uanMiXSwibmFtZXMiOlsiZSIsInJlcXVpcmUiLCJ0IiwibW9kdWxlIiwibyIsImV4cG9ydHMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiTGFuZ3VhZ2VGdW4iLCJuIiwiaSIsImEiLCJyIiwiaW5pdCIsImNvbnNvbGUiLCJsb2ciLCJMQU5HVUFHRSIsImNjIiwic3lzIiwibGFuZ3VhZ2VDb2RlIiwiaW5kZXhPZiIsImNmIiwiY2hlY2siLCJMYW5ndWFnZURhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBQyxHQUFDQyxPQUFOO0FBQ0EsSUFBSUMsQ0FBQyxHQUFDQyxNQUFOO0FBQ0EsSUFBSUMsQ0FBQyxHQUFDQyxPQUFOO0FBQ0E7O0FBQWFDLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkgsQ0FBdEIsRUFBd0IsWUFBeEIsRUFBcUM7QUFBQ0ksRUFBQUEsS0FBSyxFQUFDLENBQUM7QUFBUixDQUFyQyxHQUFpREosQ0FBQyxDQUFDSyxXQUFGLEdBQWMsS0FBSyxDQUFwRTtBQUFzRSxJQUFJQyxDQUFDLEdBQUNWLENBQUMsQ0FBQyxXQUFELENBQVA7QUFBQSxJQUFxQlcsQ0FBQyxHQUFDWCxDQUFDLENBQUMsU0FBRCxDQUF4QjtBQUFBLElBQW9DWSxDQUFDLEdBQUNaLENBQUMsQ0FBQyxjQUFELENBQXZDO0FBQUEsSUFBd0RBLENBQUMsSUFBRWEsQ0FBQyxDQUFDQyxJQUFGLEdBQU8sVUFBU2QsQ0FBVCxFQUFXO0FBQUNlLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDJCQUFaLEdBQXlDTixDQUFDLFdBQUQsQ0FBVU8sUUFBVixHQUFtQixLQUFHQyxFQUFFLENBQUNDLEdBQUgsQ0FBT0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsSUFBNUIsQ0FBSCxHQUFxQyxJQUFyQyxHQUEwQyxJQUF0RyxFQUEyR1gsQ0FBQyxXQUFELENBQVVPLFFBQVYsR0FBbUJOLENBQUMsQ0FBQ1csRUFBRixDQUFLTCxRQUFuSSxFQUE0SWpCLENBQUMsRUFBN0k7QUFBZ0osQ0FBbkssRUFBb0thLENBQUMsQ0FBQ1UsS0FBRixHQUFRLFVBQVN2QixDQUFULEVBQVc7QUFBQyxTQUFNLFFBQU1VLENBQUMsV0FBRCxDQUFVTyxRQUFoQixJQUEwQkwsQ0FBQyxDQUFDWSxZQUFGLENBQWV4QixDQUFmLENBQTFCLElBQTZDQSxDQUFuRDtBQUFxRCxDQUE3TyxFQUE4T2EsQ0FBaFAsQ0FBekQ7O0FBQTRTLFNBQVNBLENBQVQsR0FBWSxDQUFFOztBQUFBVCxDQUFDLENBQUNLLFdBQUYsR0FBY1QsQ0FBZCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGU9cmVxdWlyZTtcbnZhciB0PW1vZHVsZTtcbnZhciBvPWV4cG9ydHM7XG5cInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkobyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxvLkxhbmd1YWdlRnVuPXZvaWQgMDt2YXIgbj1lKFwiQXBwQ29tbW9uXCIpLGk9ZShcIkdDb25maWdcIiksYT1lKFwiTGFuZ3VhZ2VEYXRhXCIpLGU9KHIuaW5pdD1mdW5jdGlvbihlKXtjb25zb2xlLmxvZyhcIltsYW5ndWFnZUZ1bl1baW5pdF3or63oqIDljIXliJ3lp4vljJZcIiksbi5kZWZhdWx0LkxBTkdVQUdFPTA8PWNjLnN5cy5sYW5ndWFnZUNvZGUuaW5kZXhPZihcInpoXCIpP1wiemhcIjpcImVuXCIsbi5kZWZhdWx0LkxBTkdVQUdFPWkuY2YuTEFOR1VBR0UsZSgpfSxyLmNoZWNrPWZ1bmN0aW9uKGUpe3JldHVyblwiemhcIiE9bi5kZWZhdWx0LkxBTkdVQUdFJiZhLkxhbmd1YWdlRGF0YVtlXXx8ZX0scik7ZnVuY3Rpb24gcigpe31vLkxhbmd1YWdlRnVuPWUiXX0=
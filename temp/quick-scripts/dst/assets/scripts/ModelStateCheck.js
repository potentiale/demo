
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ModelStateCheck.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c8a5aQ63bJP46f/59pGcVTe', 'ModelStateCheck');
// scripts/ModelStateCheck.js

"use strict";

var e = require;
var t = module;
var o = exports;
"use strict";

var _n,
    i = void 0 && (void 0).__extends || (_n = function n(e, t) {
  return (_n = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (e, t) {
    e.__proto__ = t;
  } || function (e, t) {
    for (var o in t) {
      Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
  })(e, t);
}, function (e, t) {
  function o() {
    this.constructor = e;
  }

  _n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}),
    a = void 0 && (void 0).__decorate || function (e, t, o, n) {
  var i,
      a = arguments.length,
      r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
  if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n);else for (var s = e.length - 1; 0 <= s; s--) {
    (i = e[s]) && (r = (a < 3 ? i(r) : 3 < a ? i(t, o, r) : i(t, o)) || r);
  }
  return 3 < a && r && Object.defineProperty(t, o, r), r;
};

Object.defineProperty(o, "__esModule", {
  value: !0
});
var r = e("UserVo"),
    s = e("ModelManage"),
    c = cc._decorator,
    t = c.ccclass,
    e = c.menu,
    c = c.property;
cc.Enum(s.GAME_MODEL);
var l,
    e = (l = cc.Component, i(p, l), p.prototype.onLoad = function () {}, p.prototype.onEnable = function () {
  this.updateDesc();
}, p.prototype.updateDesc = function () {
  var e = r.UserVo.getModelStateInfo(this.model - 1);
  this.modelInfoNode.active = e && 0 < e.lockNum;
  var t = this.modelInfoNode.children[2].getComponent(cc.Label);
  this.modelInfoNode.active && t ? t.string = cc.js.formatStr("游玩%d次永久解锁", e.lockNum) : ((e = this.modelInfoNode.parent.getChildByName("New Label").getComponent(cc.Label)).node.setPosition(0, 1.615), e.fontSize = 45);
}, p.prototype.getIsUnlockByModel = function () {
  return r.UserVo.getModelStateInfo(this.model - 1).lockNum <= 0;
}, p.prototype.reduceLockNum = function () {
  r.UserVo.setModelStateInfo(this.model - 1, -1), this.updateDesc();
}, p.prototype.start = function () {}, a([c({
  type: s.GAME_MODEL
})], p.prototype, "model", void 0), a([c(cc.Node)], p.prototype, "modelInfoNode", void 0), a([t, e("UI/ModelStateCheck")], p));

function p() {
  var e = null !== l && l.apply(this, arguments) || this;
  return e.model = s.GAME_MODEL.Not, e.modelInfoNode = null, e;
}

o["default"] = e;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTW9kZWxTdGF0ZUNoZWNrLmpzIl0sIm5hbWVzIjpbImUiLCJyZXF1aXJlIiwidCIsIm1vZHVsZSIsIm8iLCJleHBvcnRzIiwibiIsImkiLCJfX2V4dGVuZHMiLCJPYmplY3QiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsIkFycmF5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiY29uc3RydWN0b3IiLCJjcmVhdGUiLCJhIiwiX19kZWNvcmF0ZSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInIiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJSZWZsZWN0IiwiZGVjb3JhdGUiLCJzIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImMiLCJjYyIsIl9kZWNvcmF0b3IiLCJjY2NsYXNzIiwibWVudSIsInByb3BlcnR5IiwiRW51bSIsIkdBTUVfTU9ERUwiLCJsIiwiQ29tcG9uZW50IiwicCIsIm9uTG9hZCIsIm9uRW5hYmxlIiwidXBkYXRlRGVzYyIsIlVzZXJWbyIsImdldE1vZGVsU3RhdGVJbmZvIiwibW9kZWwiLCJtb2RlbEluZm9Ob2RlIiwiYWN0aXZlIiwibG9ja051bSIsImNoaWxkcmVuIiwiZ2V0Q29tcG9uZW50IiwiTGFiZWwiLCJzdHJpbmciLCJqcyIsImZvcm1hdFN0ciIsInBhcmVudCIsImdldENoaWxkQnlOYW1lIiwibm9kZSIsInNldFBvc2l0aW9uIiwiZm9udFNpemUiLCJnZXRJc1VubG9ja0J5TW9kZWwiLCJyZWR1Y2VMb2NrTnVtIiwic2V0TW9kZWxTdGF0ZUluZm8iLCJzdGFydCIsInR5cGUiLCJOb2RlIiwiYXBwbHkiLCJOb3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBQyxHQUFDQyxPQUFOO0FBQ0EsSUFBSUMsQ0FBQyxHQUFDQyxNQUFOO0FBQ0EsSUFBSUMsQ0FBQyxHQUFDQyxPQUFOO0FBQ0E7O0FBQWEsSUFBSUMsRUFBSjtBQUFB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Q0FBQyxDQUFDQyxFQUFFLENBQUNtQyxJQUFKLENBQUYsQ0FBRCxFQUFjMUIsQ0FBQyxDQUFDMUIsU0FBaEIsRUFBMEIsZUFBMUIsRUFBMEMsS0FBSyxDQUEvQyxDQUF6d0IsRUFBMnpCSyxDQUFDLENBQUMsQ0FBQ2hCLENBQUQsRUFBR0YsQ0FBQyxDQUFDLG9CQUFELENBQUosQ0FBRCxFQUE2QnVDLENBQTdCLENBQTl6QixDQUFQOztBQUFzMkIsU0FBU0EsQ0FBVCxHQUFZO0FBQUMsTUFBSXZDLENBQUMsR0FBQyxTQUFPcUMsQ0FBUCxJQUFVQSxDQUFDLENBQUM2QixLQUFGLENBQVEsSUFBUixFQUFhOUMsU0FBYixDQUFWLElBQW1DLElBQXpDO0FBQThDLFNBQU9wQixDQUFDLENBQUM2QyxLQUFGLEdBQVFuQixDQUFDLENBQUNVLFVBQUYsQ0FBYStCLEdBQXJCLEVBQXlCbkUsQ0FBQyxDQUFDOEMsYUFBRixHQUFnQixJQUF6QyxFQUE4QzlDLENBQXJEO0FBQXVEOztBQUFBSSxDQUFDLFdBQUQsR0FBVUosQ0FBViIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGU9cmVxdWlyZTtcbnZhciB0PW1vZHVsZTtcbnZhciBvPWV4cG9ydHM7XG5cInVzZSBzdHJpY3RcIjt2YXIgbixpPXRoaXMmJnRoaXMuX19leHRlbmRzfHwobj1mdW5jdGlvbihlLHQpe3JldHVybihuPU9iamVjdC5zZXRQcm90b3R5cGVPZnx8e19fcHJvdG9fXzpbXX1pbnN0YW5jZW9mIEFycmF5JiZmdW5jdGlvbihlLHQpe2UuX19wcm90b19fPXR9fHxmdW5jdGlvbihlLHQpe2Zvcih2YXIgbyBpbiB0KU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LG8pJiYoZVtvXT10W29dKX0pKGUsdCl9LGZ1bmN0aW9uKGUsdCl7ZnVuY3Rpb24gbygpe3RoaXMuY29uc3RydWN0b3I9ZX1uKGUsdCksZS5wcm90b3R5cGU9bnVsbD09PXQ/T2JqZWN0LmNyZWF0ZSh0KTooby5wcm90b3R5cGU9dC5wcm90b3R5cGUsbmV3IG8pfSksYT10aGlzJiZ0aGlzLl9fZGVjb3JhdGV8fGZ1bmN0aW9uKGUsdCxvLG4pe3ZhciBpLGE9YXJndW1lbnRzLmxlbmd0aCxyPWE8Mz90Om51bGw9PT1uP249T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0LG8pOm47aWYoXCJvYmplY3RcIj09dHlwZW9mIFJlZmxlY3QmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUpcj1SZWZsZWN0LmRlY29yYXRlKGUsdCxvLG4pO2Vsc2UgZm9yKHZhciBzPWUubGVuZ3RoLTE7MDw9cztzLS0pKGk9ZVtzXSkmJihyPShhPDM/aShyKTozPGE/aSh0LG8scik6aSh0LG8pKXx8cik7cmV0dXJuIDM8YSYmciYmT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsbyxyKSxyfTtPYmplY3QuZGVmaW5lUHJvcGVydHkobyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgcj1lKFwiVXNlclZvXCIpLHM9ZShcIk1vZGVsTWFuYWdlXCIpLGM9Y2MuX2RlY29yYXRvcix0PWMuY2NjbGFzcyxlPWMubWVudSxjPWMucHJvcGVydHk7Y2MuRW51bShzLkdBTUVfTU9ERUwpO3ZhciBsLGU9KGw9Y2MuQ29tcG9uZW50LGkocCxsKSxwLnByb3RvdHlwZS5vbkxvYWQ9ZnVuY3Rpb24oKXt9LHAucHJvdG90eXBlLm9uRW5hYmxlPWZ1bmN0aW9uKCl7dGhpcy51cGRhdGVEZXNjKCl9LHAucHJvdG90eXBlLnVwZGF0ZURlc2M9ZnVuY3Rpb24oKXt2YXIgZT1yLlVzZXJWby5nZXRNb2RlbFN0YXRlSW5mbyh0aGlzLm1vZGVsLTEpO3RoaXMubW9kZWxJbmZvTm9kZS5hY3RpdmU9ZSYmMDxlLmxvY2tOdW07dmFyIHQ9dGhpcy5tb2RlbEluZm9Ob2RlLmNoaWxkcmVuWzJdLmdldENvbXBvbmVudChjYy5MYWJlbCk7dGhpcy5tb2RlbEluZm9Ob2RlLmFjdGl2ZSYmdD90LnN0cmluZz1jYy5qcy5mb3JtYXRTdHIoXCLmuLjnjqklZOasoeawuOS5heino+mUgVwiLGUubG9ja051bSk6KChlPXRoaXMubW9kZWxJbmZvTm9kZS5wYXJlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJOZXcgTGFiZWxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKSkubm9kZS5zZXRQb3NpdGlvbigwLDEuNjE1KSxlLmZvbnRTaXplPTQ1KX0scC5wcm90b3R5cGUuZ2V0SXNVbmxvY2tCeU1vZGVsPWZ1bmN0aW9uKCl7cmV0dXJuIHIuVXNlclZvLmdldE1vZGVsU3RhdGVJbmZvKHRoaXMubW9kZWwtMSkubG9ja051bTw9MH0scC5wcm90b3R5cGUucmVkdWNlTG9ja051bT1mdW5jdGlvbigpe3IuVXNlclZvLnNldE1vZGVsU3RhdGVJbmZvKHRoaXMubW9kZWwtMSwtMSksdGhpcy51cGRhdGVEZXNjKCl9LHAucHJvdG90eXBlLnN0YXJ0PWZ1bmN0aW9uKCl7fSxhKFtjKHt0eXBlOnMuR0FNRV9NT0RFTH0pXSxwLnByb3RvdHlwZSxcIm1vZGVsXCIsdm9pZCAwKSxhKFtjKGNjLk5vZGUpXSxwLnByb3RvdHlwZSxcIm1vZGVsSW5mb05vZGVcIix2b2lkIDApLGEoW3QsZShcIlVJL01vZGVsU3RhdGVDaGVja1wiKV0scCkpO2Z1bmN0aW9uIHAoKXt2YXIgZT1udWxsIT09bCYmbC5hcHBseSh0aGlzLGFyZ3VtZW50cyl8fHRoaXM7cmV0dXJuIGUubW9kZWw9cy5HQU1FX01PREVMLk5vdCxlLm1vZGVsSW5mb05vZGU9bnVsbCxlfW8uZGVmYXVsdD1lIl19
"use strict";
cc._RF.push(module, '74890IWv8BBvYfl0MsUU8R0', 'NotifyListener');
// scripts/NotifyListener.js

"use strict";

var e = require;
var t = module;
var o = exports;
"use strict";

var a = void 0 && (void 0).__spreadArrays || function () {
  for (var e = 0, t = 0, o = arguments.length; t < o; t++) {
    e += arguments[t].length;
  }

  for (var n = Array(e), i = 0, t = 0; t < o; t++) {
    for (var a = arguments[t], r = 0, s = a.length; r < s; r++, i++) {
      n[i] = a[r];
    }
  }

  return n;
};

Object.defineProperty(o, "__esModule", {
  value: !0
}), o.NotifyListener = void 0;
var r = e("ListenID"),
    s = e("NotifyID"),
    c = (Object.defineProperty(p.prototype, "context", {
  get: function get() {
    return this._context;
  },
  enumerable: !1,
  configurable: !0
}), Object.defineProperty(p.prototype, "callback", {
  get: function get() {
    return this._callback;
  },
  enumerable: !1,
  configurable: !0
}), Object.defineProperty(p.prototype, "prior", {
  get: function get() {
    return this._prior;
  },
  enumerable: !1,
  configurable: !0
}), p),
    l = (i.prototype.toString = function () {
  return "<ListenerManager id:%{m_id}, times:%{m_sendTimes}>";
}, i.prototype.IsExistHandler = function (e, t) {
  var o = this._handlers.length;
  if (0 < o) for (var n = o - 1; 0 <= n; n--) {
    var i = this._handlers[n];
    if (i.callback === e && i.context == t) return !0;
  }
  return !1;
}, i.prototype.RegisterHandler = function (e, t, o) {
  var n = new c(e, t, o),
      o = this._handlers.length;

  if (0 < o) {
    for (var i = !1, a = o - 1; 0 <= a; a--) {
      if (n.prior >= this._handlers[a].prior) {
        this._handlers.splice(a + 1, 0, n), i = !0;
        break;
      }
    }

    i || this._handlers.unshift(n);
  } else this._handlers.push(n);

  return !0;
}, i.prototype.RemoveHandler = function (e, t) {
  var o = -1,
      n = this._handlers.length;
  if (0 < n) for (var i = n - 1; 0 <= i; i--) {
    var a = this._handlers[i];

    if (a.callback === e && a.context == t) {
      o = i;
      break;
    }
  }
  return -1 != o && (this._handlers.splice(o, 1), !0);
}, i.prototype.Send = function () {
  for (var e, t = [], o = 0; o < arguments.length; o++) {
    t[o] = arguments[o];
  }

  for (var n = this._handlers.length - 1; 0 <= n; n--) {
    var i = this._handlers[n];
    (e = i.callback).call.apply(e, a([i.context], t));
  }
}, i),
    e = (n.prototype.GetCellStackString = function () {
  for (var e = "[", t = 0, o = this._callStacks; t < o.length; t++) {
    e += o[t] + ",";
  }

  return e + "]";
}, n.prototype.CheckAndPushCallStack = function (e) {
  var t = this._callStacks.length;
  return 15 <= t ? (cc.error("[NotifyListener].Send out call stack:" + this.GetCellStackString() + " msg:" + e), !1) : 10 <= t ? (cc.warn("[NotifyListener].Send warning call stack:" + this.GetCellStackString() + " msg:" + e), !1) : (this._callStacks.push(e), !0);
}, n.prototype.PopCallStack = function () {
  this._callStacks.pop();
}, n.prototype.Register = function (e, t, o, n) {
  if (null != t) {
    var i = this._managers[e];
    if (null == i) i = new l(e), this._managers[e] = i;else if (i.IsExistHandler(t, o)) return void cc.error("[NotifyListener].Register:" + (r.ListenID[e] || s.NotifyID[e]) + " callback repeat, skip " + o);
    i.RegisterHandler(t, o, n);
  } else cc.error("[NotifyListener].Register:" + e + " callback null");
}, n.prototype.Unregister = function (e, t, o) {
  var n = this._managers[e];
  null != n ? n.RemoveHandler(t, o) || cc.warn("[NotifyListener].Unregister:" + e + " can't find callback:" + t) : cc.warn("[NotifyListener].Unregister can't find ListenerManager:" + e + " callback:" + t);
}, n.prototype.Send = function (e) {
  for (var t = [], o = 1; o < arguments.length; o++) {
    t[o - 1] = arguments[o];
  }

  var n = this._managers[e];
  null != n ? this.CheckAndPushCallStack(e) && (n.Send.apply(n, t), this.PopCallStack()) : cc.warn("[NotifyListener].Send can't find ListenerManager:" + e);
}, n.prototype.IsExist = function (e) {
  return null != this._managers[e];
}, n);

function n() {
  this._managers = {}, this._callStacks = [];
}

function i(e) {
  this._sendTimes = 0, this._listenId = 0, this._listenId = e, this._handlers = new Array();
}

function p(e, t, o) {
  this._prior = 0, this._sendTimes = 0, this._callback = e, this._context = t, this._prior = o;
}

o.NotifyListener = e;

cc._RF.pop();
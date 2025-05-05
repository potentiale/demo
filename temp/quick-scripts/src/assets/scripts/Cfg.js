"use strict";
cc._RF.push(module, 'f1030+2W3FBlpzTWkQVccDx', 'Cfg');
// scripts/Cfg.js

"use strict";

var e = require;
var t = module;
var o = exports;
"use strict";

var n = void 0 && (void 0).__awaiter || function (e, r, s, c) {
  return new (s = s || Promise)(function (o, t) {
    function n(e) {
      try {
        a(c.next(e));
      } catch (e) {
        t(e);
      }
    }

    function i(e) {
      try {
        a(c["throw"](e));
      } catch (e) {
        t(e);
      }
    }

    function a(e) {
      var t;
      e.done ? o(e.value) : ((t = e.value) instanceof s ? t : new s(function (e) {
        e(t);
      })).then(n, i);
    }

    a((c = c.apply(e, r || [])).next());
  });
},
    c = void 0 && (void 0).__generator || function (o, n) {
  var i,
      a,
      r,
      s = {
    label: 0,
    sent: function sent() {
      if (1 & r[0]) throw r[1];
      return r[1];
    },
    trys: [],
    ops: []
  },
      e = {
    next: t(0),
    "throw": t(1),
    "return": t(2)
  };
  return "function" == typeof Symbol && (e[Symbol.iterator] = function () {
    return this;
  }), e;

  function t(t) {
    return function (e) {
      return function (t) {
        if (i) throw new TypeError("Generator is already executing.");

        for (; s;) {
          try {
            if (i = 1, a && (r = 2 & t[0] ? a["return"] : t[0] ? a["throw"] || ((r = a["return"]) && r.call(a), 0) : a.next) && !(r = r.call(a, t[1])).done) return r;

            switch (a = 0, (t = r ? [2 & t[0], r.value] : t)[0]) {
              case 0:
              case 1:
                r = t;
                break;

              case 4:
                return s.label++, {
                  value: t[1],
                  done: !1
                };

              case 5:
                s.label++, a = t[1], t = [0];
                continue;

              case 7:
                t = s.ops.pop(), s.trys.pop();
                continue;

              default:
                if (!(r = 0 < (r = s.trys).length && r[r.length - 1]) && (6 === t[0] || 2 === t[0])) {
                  s = 0;
                  continue;
                }

                if (3 === t[0] && (!r || t[1] > r[0] && t[1] < r[3])) {
                  s.label = t[1];
                  break;
                }

                if (6 === t[0] && s.label < r[1]) {
                  s.label = r[1], r = t;
                  break;
                }

                if (r && s.label < r[2]) {
                  s.label = r[2], s.ops.push(t);
                  break;
                }

                r[2] && s.ops.pop(), s.trys.pop();
                continue;
            }

            t = n.call(o, s);
          } catch (e) {
            t = [6, e], a = 0;
          } finally {
            i = r = 0;
          }
        }

        if (5 & t[0]) throw t[1];
        return {
          value: t[0] ? t[1] : void 0,
          done: !0
        };
      }([t, e]);
    };
  }
};

Object.defineProperty(o, "__esModule", {
  value: !0
}), o.Cfg = void 0;

var i = e("ManCfg"),
    a = e("GhostCfg"),
    r = e("CostantCfg"),
    s = e("DialogCfg"),
    l = e("Ghost1Cfg"),
    p = e("ListCfg"),
    d = e("Building1Cfg"),
    u = e("Building999Cfg"),
    f = e("RandomNameCfg"),
    h = e("RoleManCfg"),
    m = e("RoleGhostCfg"),
    y = e("RuleCfg"),
    g = e("ShopCfg"),
    _ = e("SkillManCfg"),
    v = e("SkillGhostCfg"),
    C = e("SkinCfg"),
    S = e("TaskCfg"),
    b = e("lzstring"),
    e = (Object.defineProperty(T.prototype, "Man", {
  get: function get() {
    return this._Man;
  },
  enumerable: !1,
  configurable: !0
}), Object.defineProperty(T.prototype, "Ghost", {
  get: function get() {
    return this._Ghost;
  },
  enumerable: !1,
  configurable: !0
}), Object.defineProperty(T.prototype, "Costant", {
  get: function get() {
    return this._Costant;
  },
  enumerable: !1,
  configurable: !0
}), Object.defineProperty(T.prototype, "Dialog", {
  get: function get() {
    return this._Dialog;
  },
  enumerable: !1,
  configurable: !0
}), Object.defineProperty(T.prototype, "Ghost1", {
  get: function get() {
    return this._Ghost1;
  },
  enumerable: !1,
  configurable: !0
}), Object.defineProperty(T.prototype, "List", {
  get: function get() {
    return this._List;
  },
  enumerable: !1,
  configurable: !0
}), Object.defineProperty(T.prototype, "Building1", {
  get: function get() {
    return this._Building1;
  },
  enumerable: !1,
  configurable: !0
}), Object.defineProperty(T.prototype, "Building999", {
  get: function get() {
    return this._Building999;
  },
  enumerable: !1,
  configurable: !0
}), Object.defineProperty(T.prototype, "RandomName", {
  get: function get() {
    return this._RandomName;
  },
  enumerable: !1,
  configurable: !0
}), Object.defineProperty(T.prototype, "RoleMan", {
  get: function get() {
    return this._RoleMan;
  },
  enumerable: !1,
  configurable: !0
}), Object.defineProperty(T.prototype, "RoleGhost", {
  get: function get() {
    return this._RoleGhost;
  },
  enumerable: !1,
  configurable: !0
}), Object.defineProperty(T.prototype, "Rule", {
  get: function get() {
    return this._Rule;
  },
  enumerable: !1,
  configurable: !0
}), Object.defineProperty(T.prototype, "Shop", {
  get: function get() {
    return this._Shop;
  },
  enumerable: !1,
  configurable: !0
}), Object.defineProperty(T.prototype, "SkillMan", {
  get: function get() {
    return this._SkillMan;
  },
  enumerable: !1,
  configurable: !0
}), Object.defineProperty(T.prototype, "SkillGhost", {
  get: function get() {
    return this._SkillGhost;
  },
  enumerable: !1,
  configurable: !0
}), Object.defineProperty(T.prototype, "Skin", {
  get: function get() {
    return this._Skin;
  },
  enumerable: !1,
  configurable: !0
}), Object.defineProperty(T.prototype, "Task", {
  get: function get() {
    return this._Task;
  },
  enumerable: !1,
  configurable: !0
}), T.prototype.initBySingleJson = function () {
  return n(this, void 0, void 0, function () {
    var e = this;
    return c(this, function () {
      return [2, new Promise(function (a, r) {
        cc.resources.loadDir("config", function (e, t) {
          if (e) return cc.error("Cfg.initBySingleJson error", e), void r();

          for (var o = 0; o < t.length; o++) {
            var n = t[o],
                i = n.name;
            this.hasOwnProperty("_" + i) ? this["_" + i].initByMap(n.json) : cc.warn("Cfg.initBySingleJson null, " + i);
          }

          a(null);
        }.bind(e));
      })];
    });
  });
}, T.prototype.initRemoteJson = function (o, r, s) {
  return n(this, void 0, void 0, function () {
    var i, e, t, a;
    return c(this, function () {
      return i = this, e = o + ".json", t = o.split("/"), a = t[t.length - 1], [2, new Promise(function (o, n) {
        var t = new XMLHttpRequest();
        t.open("GET", e, !0), t.responseType = "text", t.onreadystatechange = function () {
          var e;
          4 == t.readyState && (200 == t.status ? (e = JSON.parse(t.responseText), i.hasOwnProperty("_" + a) || (cc.warn("Cfg.initRemoteJson null, " + a), n("err")), i["_" + a].initByMap(e), T.cfgLoadNum += 1, r && (r.string = (10 < T.cfgLoadNum ? 10 : T.cfgLoadNum) + "%"), s && (s.progress = (10 < T.cfgLoadNum ? 10 : T.cfgLoadNum) / 100), o(null)) : cc.resources.load("config/" + a, cc.JsonAsset, function (e, t) {
            e && o("err");
            e = t.name;
            i.hasOwnProperty("_" + e) || (cc.warn("Cfg.initRemoteJson null, " + e), n("err")), i["_" + e].initByMap(t.json), T.cfgLoadNum += 1, r && (r.string = (10 < T.cfgLoadNum ? 10 : T.cfgLoadNum) + "%"), s && (s.progress = (10 < T.cfgLoadNum ? 10 : T.cfgLoadNum) / 100), o(null);
          }));
        }, t.setRequestHeader("content-type", "application/json"), t.timeout = 5e3, t.ontimeout = function () {
          cc.resources.load("config/" + a, cc.JsonAsset, function (e, t) {
            e && o("err");
            e = t.name;
            i.hasOwnProperty("_" + e) || (cc.warn("Cfg.initRemoteJson null, " + e), n("err")), i["_" + e].initByMap(t.json), T.cfgLoadNum += 1, r && (r.string = (10 < T.cfgLoadNum ? 10 : T.cfgLoadNum) + "%"), s && (s.progress = (10 < T.cfgLoadNum ? 10 : T.cfgLoadNum) / 100), o(null);
          });
        }, t.send();
      })];
    });
  });
}, T.prototype.initLocalJson = function (e, a, r) {
  return n(this, void 0, void 0, function () {
    var i;
    return c(this, function () {
      return i = this, [2, new Promise(function (o, n) {
        cc.resources.load("config/" + e, cc.JsonAsset, function (e, t) {
          e && n("err");
          e = t.name;
          i.hasOwnProperty("_" + e) || (cc.warn("Cfg.initRemoteJson null, " + e), n("err")), i["_" + e].initByMap(t.json), T.cfgLoadNum += 1, a && (a.string = (10 < T.cfgLoadNum ? 10 : T.cfgLoadNum) + "%"), r && (r.progress = (10 < T.cfgLoadNum ? 10 : T.cfgLoadNum) / 100), o(null);
        });
      })];
    });
  });
}, T.prototype.initRemoteConfig = function (o, r, s) {
  return n(this, void 0, void 0, function () {
    var i, e, t, a;
    return c(this, function () {
      return i = this, e = o + ".config", t = o.split("/"), a = t[t.length - 1], [2, new Promise(function (o, n) {
        var t = new XMLHttpRequest();
        t.open("GET", e, !0), t.responseType = "text", t.onreadystatechange = function () {
          var e;
          4 == t.readyState && (200 == t.status ? (e = JSON.parse(b.decompressFromBase64(t.responseText)), i.hasOwnProperty("_" + a) || (cc.warn("Cfg.initRemoteJson null, " + a), n("err")), i["_" + a].initByMap(e), T.cfgLoadNum += 1, r && (r.string = (10 < T.cfgLoadNum ? 10 : T.cfgLoadNum) + "%"), s && (s.progress = (10 < T.cfgLoadNum ? 10 : T.cfgLoadNum) / 100), o(null)) : cc.resources.load("config/" + a, cc.Asset, function (e, t) {
            e && n(e);
            e = a, t = JSON.parse(b.decompressFromBase64(t._nativeAsset));
            i.hasOwnProperty("_" + e) || (cc.warn("Cfg.initRemoteConfig null, " + e), n("err")), i["_" + e].initByMap(t), T.cfgLoadNum += 1, r && (r.string = (10 < T.cfgLoadNum ? 10 : T.cfgLoadNum) + "%"), s && (s.progress = (10 < T.cfgLoadNum ? 10 : T.cfgLoadNum) / 100), o(null);
          }));
        }, t.setRequestHeader("content-type", "text/plain"), t.timeout = 5e3, t.ontimeout = function () {
          cc.resources.load("config/" + a, cc.Asset, function (e, t) {
            e && n(e);
            e = a, t = JSON.parse(b.decompressFromBase64(t._nativeAsset));
            cc.log(t), i.hasOwnProperty("_" + e) || (cc.warn("Cfg.initRemoteConfig null, " + e), n("err")), i["_" + e].initByMap(t), T.cfgLoadNum += 1, r && (r.string = (10 < T.cfgLoadNum ? 10 : T.cfgLoadNum) + "%"), s && (s.progress = (10 < T.cfgLoadNum ? 10 : T.cfgLoadNum) / 100), o(null);
          });
        }, t.send();
      })];
    });
  });
}, T.prototype.HasTag = function (e, t) {
  return null != e.tags && 0 <= e.tags.indexOf(t);
}, T.prototype.selectArray = function (e, t, o, n) {
  t = e[t];
  return null != t && t[o] || n;
}, T.cfgLoadNum = 0, T);

function T() {
  this._Man = new i.ManCfgReader(), this._Ghost = new a.GhostCfgReader(), this._Costant = new r.CostantCfgReader(), this._Dialog = new s.DialogCfgReader(), this._Ghost1 = new l.Ghost1CfgReader(), this._List = new p.ListCfgReader(), this._Building1 = new d.Building1CfgReader(), this._Building999 = new u.Building999CfgReader(), this._RandomName = new f.RandomNameCfgReader(), this._RoleMan = new h.RoleManCfgReader(), this._RoleGhost = new m.RoleGhostCfgReader(), this._Rule = new y.RuleCfgReader(), this._Shop = new g.ShopCfgReader(), this._SkillMan = new _.SkillManCfgReader(), this._SkillGhost = new v.SkillGhostCfgReader(), this._Skin = new C.SkinCfgReader(), this._Task = new S.TaskCfgReader(), this.keyjs = {};
}

o.Cfg = new e();

cc._RF.pop();
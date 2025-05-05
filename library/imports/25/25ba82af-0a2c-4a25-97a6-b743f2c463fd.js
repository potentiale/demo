"use strict";
cc._RF.push(module, '25ba8KvCixKJZemt0PyxGP9', 'SkinCtrl');
// scripts/SkinCtrl.js

"use strict";

var e = require;
var t = module;
var o = exports;
"use strict";

Object.defineProperty(o, "__esModule", {
  value: !0
}), o.TypeToName = o.RoleSkinType = o.SkinType = void 0;
var i,
    l,
    a = e("AppCommon"),
    r = e("UserVo"),
    p = e("Cfg"),
    d = e("SkinCfg");
(e = i = o.SkinType || (o.SkinType = {}))[e.HAT = 1] = "HAT", e[e.CLOTHES = 2] = "CLOTHES", e[e.WING = 3] = "WING", (e = l = o.RoleSkinType || (o.RoleSkinType = {}))[e.ROLE = 1] = "ROLE", e[e.BOSS = 2] = "BOSS", o.TypeToName = {
  1: "useHat",
  2: "useClothes",
  3: "useWing"
};
n.prototype.updateSkinCfgList = function () {
  if (a["default"].CONFIG_INFO.hideSkin && 0 < a["default"].CONFIG_INFO.hideSkin.length) {
    for (var e in this.roleSkinDataCfg) {
      for (var t = (n = this.roleSkinDataCfg[e]).length - 1; 0 <= t; t--) {
        var o = n[t].id;
        -1 != a["default"].CONFIG_INFO.hideSkin.indexOf(o) && n.splice(t, 1);
      }
    }

    for (var e in this.bossSkinDataCfg) {
      for (var n, t = (n = this.bossSkinDataCfg[e]).length - 1; 0 <= t; t--) {
        o = n[t].id, -1 != a["default"].CONFIG_INFO.hideSkin.indexOf(o) && n.splice(t, 1);
      }
    }
  }
}, n.prototype.getIsUnlockBySkinId = function (e) {
  return r.UserVo.data.skinStateInfo[e] && r.UserVo.data.skinStateInfo[e].isunlock;
}, n.prototype.setUnlockBySkinId = function (e) {
  r.UserVo.setUnlockBySkinId(e);
}, n.prototype.wearSkin = function (e) {
  var t = p.Cfg.Skin.get(e),
      e = o.TypeToName[t.SkinType];
  t.RoleType === l.ROLE ? r.UserVo.data.useSkinData[0][e] = t.id : r.UserVo.data.useSkinData[1][e] = t.id, r.UserVo.SaveData();
}, n.prototype.setRoleSkin = function (e, t, o, n) {
  var i = r.UserVo.data.useSkinData[0];
  (n = void 0 === n ? !1 : n) && (i = this.getSkinDataRandom(e)), this.setRoleClothes(e, t, o, i.useClothes), this.setRoleHat(e, t, i.useHat), this.setRoleWing(e, t, i.useWing), this.setRoleHead(e, t, o);
}, n.prototype.setRoleClothes = function (e, t, o, n) {
  var i;
  n || (l.ROLE, n = d.SkinDefine.RoleDefaultClothes);
  n = p.Cfg.Skin.get(n);
  (i = n.SkinSocket && "null" !== n.SkinSocket[0] ? n.SkinSocket[0] : (e == l.ROLE ? p.Cfg.RoleMan : p.Cfg.RoleGhost).get(o).skinName) && t.setSkin(i);
}, n.prototype.setRoleHead = function (e, t, o) {
  var n = (e == l.ROLE ? p.Cfg.RoleMan : p.Cfg.RoleGhost).get(o);
  if (n.headDefault, n.headDefault) for (var i = 0, a = n.headDefault.length / 2; i < a; i++) {
    var r = n.headDefault[2 * i],
        s = n.headDefault[2 * i + 1],
        c = t.findSlot(r);
    s && "null" != s ? (t.setAttachment(r, s), c.color.a = 1) : c.color.a = 0;
  }
}, n.prototype.setRoleHat = function (e, t, o) {
  o || (l.ROLE, o = d.SkinDefine.RoleDefaultHat);
  var n = p.Cfg.Skin.get(o);
  if (n.SkinSocket) for (var i = 0, a = n.SkinSocket.length / 2; i < a; i++) {
    var r = n.SkinSocket[2 * i],
        s = n.SkinSocket[2 * i + 1],
        c = t.findSlot(r);
    s && "null" != s ? (t.setAttachment(r, s), c.color.a = 1) : c.color.a = 0;
  }
}, n.prototype.setRoleWing = function (e, t, o) {
  o || (l.ROLE, o = d.SkinDefine.RoleDefaultWing);
  var n = p.Cfg.Skin.get(o);
  if (n.SkinSocket) for (var i = 0, a = n.SkinSocket.length / 2; i < a; i++) {
    var r = n.SkinSocket[2 * i],
        s = n.SkinSocket[2 * i + 1],
        c = t.findSlot(r);
    s && "null" != s ? (t.setAttachment(r, s), c.color.a = 1) : c.color.a = 0;
  }
}, n.prototype.getSkinDataRandom = function (e) {
  var t = e == l.BOSS ? this.bossSkinDataCfg : this.roleSkinDataCfg,
      o = a["default"].GetRandomNum(0, t[i.HAT].length - 1),
      n = t[i.HAT][o].id,
      o = a["default"].GetRandomNum(0, t[i.CLOTHES].length - 1),
      e = t[i.CLOTHES][o].id;
  return o = a["default"].GetRandomNum(0, t[i.WING].length - 1), {
    useHat: n,
    useClothes: e,
    useWing: t[i.WING][o].id
  };
}, e = n;

function n() {
  for (var e in this.roleSkinDataCfg = [], this.bossSkinDataCfg = [], this.selectTypeId = i.HAT, this.selectSkinId = 0, this.BigList = [{
    id: i.HAT,
    icon: "img/skinicon/hat"
  }, {
    id: i.CLOTHES,
    icon: "img/skinicon/close"
  }, {
    id: i.WING,
    icon: "img/skinicon/wing"
  }], i) {
    var t;
    "number" == typeof i[e] && (t = Number(i[e]), (e = p.Cfg.Skin.filter({
      RoleType: 1,
      SkinType: t
    })).sort(function (e, t) {
      return e.sequence - t.sequence;
    }), this.roleSkinDataCfg[t] = e, (e = p.Cfg.Skin.filter({
      RoleType: 2,
      SkinType: t
    })).sort(function (e, t) {
      return e.sequence - t.sequence;
    }), this.bossSkinDataCfg[t] = e);
  }

  p.Cfg.Skin.forEach(function (e) {
    0 == e.unlockType && (r.UserVo.data.skinStateInfo[e.id] ? r.UserVo.data.skinStateInfo[e.id].isunlock = 1 : r.UserVo.data.skinStateInfo[e.id] = {
      isunlock: 1
    });
  });
}

o["default"] = e;

cc._RF.pop();
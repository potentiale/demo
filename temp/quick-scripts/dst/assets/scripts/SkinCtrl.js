
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/SkinCtrl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU2tpbkN0cmwuanMiXSwibmFtZXMiOlsiZSIsInJlcXVpcmUiLCJ0IiwibW9kdWxlIiwibyIsImV4cG9ydHMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiVHlwZVRvTmFtZSIsIlJvbGVTa2luVHlwZSIsIlNraW5UeXBlIiwiaSIsImwiLCJhIiwiciIsInAiLCJkIiwiSEFUIiwiQ0xPVEhFUyIsIldJTkciLCJST0xFIiwiQk9TUyIsIm4iLCJwcm90b3R5cGUiLCJ1cGRhdGVTa2luQ2ZnTGlzdCIsIkNPTkZJR19JTkZPIiwiaGlkZVNraW4iLCJsZW5ndGgiLCJyb2xlU2tpbkRhdGFDZmciLCJpZCIsImluZGV4T2YiLCJzcGxpY2UiLCJib3NzU2tpbkRhdGFDZmciLCJnZXRJc1VubG9ja0J5U2tpbklkIiwiVXNlclZvIiwiZGF0YSIsInNraW5TdGF0ZUluZm8iLCJpc3VubG9jayIsInNldFVubG9ja0J5U2tpbklkIiwid2VhclNraW4iLCJDZmciLCJTa2luIiwiZ2V0IiwiUm9sZVR5cGUiLCJ1c2VTa2luRGF0YSIsIlNhdmVEYXRhIiwic2V0Um9sZVNraW4iLCJnZXRTa2luRGF0YVJhbmRvbSIsInNldFJvbGVDbG90aGVzIiwidXNlQ2xvdGhlcyIsInNldFJvbGVIYXQiLCJ1c2VIYXQiLCJzZXRSb2xlV2luZyIsInVzZVdpbmciLCJzZXRSb2xlSGVhZCIsIlNraW5EZWZpbmUiLCJSb2xlRGVmYXVsdENsb3RoZXMiLCJTa2luU29ja2V0IiwiUm9sZU1hbiIsIlJvbGVHaG9zdCIsInNraW5OYW1lIiwic2V0U2tpbiIsImhlYWREZWZhdWx0IiwicyIsImMiLCJmaW5kU2xvdCIsInNldEF0dGFjaG1lbnQiLCJjb2xvciIsIlJvbGVEZWZhdWx0SGF0IiwiUm9sZURlZmF1bHRXaW5nIiwiR2V0UmFuZG9tTnVtIiwic2VsZWN0VHlwZUlkIiwic2VsZWN0U2tpbklkIiwiQmlnTGlzdCIsImljb24iLCJOdW1iZXIiLCJm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Q0FBQyxDQUFDOEIsRUFBOUIsSUFBa0M7QUFBQ1EsTUFBQUEsUUFBUSxFQUFDO0FBQVYsS0FBbkk7QUFBaUosR0FBaEw7QUFBa0w7O0FBQUFsQyxDQUFDLFdBQUQsR0FBVUosQ0FBViIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGU9cmVxdWlyZTtcbnZhciB0PW1vZHVsZTtcbnZhciBvPWV4cG9ydHM7XG5cInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkobyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxvLlR5cGVUb05hbWU9by5Sb2xlU2tpblR5cGU9by5Ta2luVHlwZT12b2lkIDA7dmFyIGksbCxhPWUoXCJBcHBDb21tb25cIikscj1lKFwiVXNlclZvXCIpLHA9ZShcIkNmZ1wiKSxkPWUoXCJTa2luQ2ZnXCIpOyhlPWk9by5Ta2luVHlwZXx8KG8uU2tpblR5cGU9e30pKVtlLkhBVD0xXT1cIkhBVFwiLGVbZS5DTE9USEVTPTJdPVwiQ0xPVEhFU1wiLGVbZS5XSU5HPTNdPVwiV0lOR1wiLChlPWw9by5Sb2xlU2tpblR5cGV8fChvLlJvbGVTa2luVHlwZT17fSkpW2UuUk9MRT0xXT1cIlJPTEVcIixlW2UuQk9TUz0yXT1cIkJPU1NcIixvLlR5cGVUb05hbWU9ezE6XCJ1c2VIYXRcIiwyOlwidXNlQ2xvdGhlc1wiLDM6XCJ1c2VXaW5nXCJ9O24ucHJvdG90eXBlLnVwZGF0ZVNraW5DZmdMaXN0PWZ1bmN0aW9uKCl7aWYoYS5kZWZhdWx0LkNPTkZJR19JTkZPLmhpZGVTa2luJiYwPGEuZGVmYXVsdC5DT05GSUdfSU5GTy5oaWRlU2tpbi5sZW5ndGgpe2Zvcih2YXIgZSBpbiB0aGlzLnJvbGVTa2luRGF0YUNmZylmb3IodmFyIHQ9KG49dGhpcy5yb2xlU2tpbkRhdGFDZmdbZV0pLmxlbmd0aC0xOzA8PXQ7dC0tKXt2YXIgbz1uW3RdLmlkOy0xIT1hLmRlZmF1bHQuQ09ORklHX0lORk8uaGlkZVNraW4uaW5kZXhPZihvKSYmbi5zcGxpY2UodCwxKX1mb3IodmFyIGUgaW4gdGhpcy5ib3NzU2tpbkRhdGFDZmcpZm9yKHZhciBuLHQ9KG49dGhpcy5ib3NzU2tpbkRhdGFDZmdbZV0pLmxlbmd0aC0xOzA8PXQ7dC0tKW89blt0XS5pZCwtMSE9YS5kZWZhdWx0LkNPTkZJR19JTkZPLmhpZGVTa2luLmluZGV4T2YobykmJm4uc3BsaWNlKHQsMSl9fSxuLnByb3RvdHlwZS5nZXRJc1VubG9ja0J5U2tpbklkPWZ1bmN0aW9uKGUpe3JldHVybiByLlVzZXJWby5kYXRhLnNraW5TdGF0ZUluZm9bZV0mJnIuVXNlclZvLmRhdGEuc2tpblN0YXRlSW5mb1tlXS5pc3VubG9ja30sbi5wcm90b3R5cGUuc2V0VW5sb2NrQnlTa2luSWQ9ZnVuY3Rpb24oZSl7ci5Vc2VyVm8uc2V0VW5sb2NrQnlTa2luSWQoZSl9LG4ucHJvdG90eXBlLndlYXJTa2luPWZ1bmN0aW9uKGUpe3ZhciB0PXAuQ2ZnLlNraW4uZ2V0KGUpLGU9by5UeXBlVG9OYW1lW3QuU2tpblR5cGVdO3QuUm9sZVR5cGU9PT1sLlJPTEU/ci5Vc2VyVm8uZGF0YS51c2VTa2luRGF0YVswXVtlXT10LmlkOnIuVXNlclZvLmRhdGEudXNlU2tpbkRhdGFbMV1bZV09dC5pZCxyLlVzZXJWby5TYXZlRGF0YSgpfSxuLnByb3RvdHlwZS5zZXRSb2xlU2tpbj1mdW5jdGlvbihlLHQsbyxuKXt2YXIgaT1yLlVzZXJWby5kYXRhLnVzZVNraW5EYXRhWzBdOyhuPXZvaWQgMD09PW4/ITE6bikmJihpPXRoaXMuZ2V0U2tpbkRhdGFSYW5kb20oZSkpLHRoaXMuc2V0Um9sZUNsb3RoZXMoZSx0LG8saS51c2VDbG90aGVzKSx0aGlzLnNldFJvbGVIYXQoZSx0LGkudXNlSGF0KSx0aGlzLnNldFJvbGVXaW5nKGUsdCxpLnVzZVdpbmcpLHRoaXMuc2V0Um9sZUhlYWQoZSx0LG8pfSxuLnByb3RvdHlwZS5zZXRSb2xlQ2xvdGhlcz1mdW5jdGlvbihlLHQsbyxuKXt2YXIgaTtufHwobC5ST0xFLG49ZC5Ta2luRGVmaW5lLlJvbGVEZWZhdWx0Q2xvdGhlcyk7bj1wLkNmZy5Ta2luLmdldChuKTsoaT1uLlNraW5Tb2NrZXQmJlwibnVsbFwiIT09bi5Ta2luU29ja2V0WzBdP24uU2tpblNvY2tldFswXTooZT09bC5ST0xFP3AuQ2ZnLlJvbGVNYW46cC5DZmcuUm9sZUdob3N0KS5nZXQobykuc2tpbk5hbWUpJiZ0LnNldFNraW4oaSl9LG4ucHJvdG90eXBlLnNldFJvbGVIZWFkPWZ1bmN0aW9uKGUsdCxvKXt2YXIgbj0oZT09bC5ST0xFP3AuQ2ZnLlJvbGVNYW46cC5DZmcuUm9sZUdob3N0KS5nZXQobyk7aWYobi5oZWFkRGVmYXVsdCxuLmhlYWREZWZhdWx0KWZvcih2YXIgaT0wLGE9bi5oZWFkRGVmYXVsdC5sZW5ndGgvMjtpPGE7aSsrKXt2YXIgcj1uLmhlYWREZWZhdWx0WzIqaV0scz1uLmhlYWREZWZhdWx0WzIqaSsxXSxjPXQuZmluZFNsb3Qocik7cyYmXCJudWxsXCIhPXM/KHQuc2V0QXR0YWNobWVudChyLHMpLGMuY29sb3IuYT0xKTpjLmNvbG9yLmE9MH19LG4ucHJvdG90eXBlLnNldFJvbGVIYXQ9ZnVuY3Rpb24oZSx0LG8pe298fChsLlJPTEUsbz1kLlNraW5EZWZpbmUuUm9sZURlZmF1bHRIYXQpO3ZhciBuPXAuQ2ZnLlNraW4uZ2V0KG8pO2lmKG4uU2tpblNvY2tldClmb3IodmFyIGk9MCxhPW4uU2tpblNvY2tldC5sZW5ndGgvMjtpPGE7aSsrKXt2YXIgcj1uLlNraW5Tb2NrZXRbMippXSxzPW4uU2tpblNvY2tldFsyKmkrMV0sYz10LmZpbmRTbG90KHIpO3MmJlwibnVsbFwiIT1zPyh0LnNldEF0dGFjaG1lbnQocixzKSxjLmNvbG9yLmE9MSk6Yy5jb2xvci5hPTB9fSxuLnByb3RvdHlwZS5zZXRSb2xlV2luZz1mdW5jdGlvbihlLHQsbyl7b3x8KGwuUk9MRSxvPWQuU2tpbkRlZmluZS5Sb2xlRGVmYXVsdFdpbmcpO3ZhciBuPXAuQ2ZnLlNraW4uZ2V0KG8pO2lmKG4uU2tpblNvY2tldClmb3IodmFyIGk9MCxhPW4uU2tpblNvY2tldC5sZW5ndGgvMjtpPGE7aSsrKXt2YXIgcj1uLlNraW5Tb2NrZXRbMippXSxzPW4uU2tpblNvY2tldFsyKmkrMV0sYz10LmZpbmRTbG90KHIpO3MmJlwibnVsbFwiIT1zPyh0LnNldEF0dGFjaG1lbnQocixzKSxjLmNvbG9yLmE9MSk6Yy5jb2xvci5hPTB9fSxuLnByb3RvdHlwZS5nZXRTa2luRGF0YVJhbmRvbT1mdW5jdGlvbihlKXt2YXIgdD1lPT1sLkJPU1M/dGhpcy5ib3NzU2tpbkRhdGFDZmc6dGhpcy5yb2xlU2tpbkRhdGFDZmcsbz1hLmRlZmF1bHQuR2V0UmFuZG9tTnVtKDAsdFtpLkhBVF0ubGVuZ3RoLTEpLG49dFtpLkhBVF1bb10uaWQsbz1hLmRlZmF1bHQuR2V0UmFuZG9tTnVtKDAsdFtpLkNMT1RIRVNdLmxlbmd0aC0xKSxlPXRbaS5DTE9USEVTXVtvXS5pZDtyZXR1cm4gbz1hLmRlZmF1bHQuR2V0UmFuZG9tTnVtKDAsdFtpLldJTkddLmxlbmd0aC0xKSx7dXNlSGF0Om4sdXNlQ2xvdGhlczplLHVzZVdpbmc6dFtpLldJTkddW29dLmlkfX0sZT1uO2Z1bmN0aW9uIG4oKXtmb3IodmFyIGUgaW4gdGhpcy5yb2xlU2tpbkRhdGFDZmc9W10sdGhpcy5ib3NzU2tpbkRhdGFDZmc9W10sdGhpcy5zZWxlY3RUeXBlSWQ9aS5IQVQsdGhpcy5zZWxlY3RTa2luSWQ9MCx0aGlzLkJpZ0xpc3Q9W3tpZDppLkhBVCxpY29uOlwiaW1nL3NraW5pY29uL2hhdFwifSx7aWQ6aS5DTE9USEVTLGljb246XCJpbWcvc2tpbmljb24vY2xvc2VcIn0se2lkOmkuV0lORyxpY29uOlwiaW1nL3NraW5pY29uL3dpbmdcIn1dLGkpe3ZhciB0O1wibnVtYmVyXCI9PXR5cGVvZiBpW2VdJiYodD1OdW1iZXIoaVtlXSksKGU9cC5DZmcuU2tpbi5maWx0ZXIoe1JvbGVUeXBlOjEsU2tpblR5cGU6dH0pKS5zb3J0KGZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUuc2VxdWVuY2UtdC5zZXF1ZW5jZX0pLHRoaXMucm9sZVNraW5EYXRhQ2ZnW3RdPWUsKGU9cC5DZmcuU2tpbi5maWx0ZXIoe1JvbGVUeXBlOjIsU2tpblR5cGU6dH0pKS5zb3J0KGZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUuc2VxdWVuY2UtdC5zZXF1ZW5jZX0pLHRoaXMuYm9zc1NraW5EYXRhQ2ZnW3RdPWUpfXAuQ2ZnLlNraW4uZm9yRWFjaChmdW5jdGlvbihlKXswPT1lLnVubG9ja1R5cGUmJihyLlVzZXJWby5kYXRhLnNraW5TdGF0ZUluZm9bZS5pZF0/ci5Vc2VyVm8uZGF0YS5za2luU3RhdGVJbmZvW2UuaWRdLmlzdW5sb2NrPTE6ci5Vc2VyVm8uZGF0YS5za2luU3RhdGVJbmZvW2UuaWRdPXtpc3VubG9jazoxfSl9KX1vLmRlZmF1bHQ9ZSJdfQ==
"use strict";
cc._RF.push(module, '5651axb609Ck5jHO/Q8zTHu', 'GameTool');
// scripts/GameTool.js

"use strict";

var e = require;
var t = module;
var o = exports;
"use strict";

Object.defineProperty(o, "__esModule", {
  value: !0
}), o.GameTool = o.EquipmentType = void 0;
var a = e("AppCommon"),
    r = e("CCTool");
(e = o.EquipmentType || (o.EquipmentType = {}))[e.Arms = 1] = "Arms", e[e.Helmet = 2] = "Helmet", e[e.Skin = 3] = "Skin", e[e.Ornaments = 4] = "Ornaments", function (n) {
  var e = (t.GetCoin = function () {
    return this.cLabel && (this.cLabel.string = (9999 < this.num ? Math.floor(this.num / 1e3) + "K" : this.num) + ""), this.num;
  }, t.SetCoin = function (e) {
    void 0 === e && (e = 0);
    e = Math.floor(Math.max(+this.num + e, 0));
    return this.num = a["default"].setlocal("coin", e), this.cLabel && (this.cLabel.string = (9999 < this.num ? Math.floor(this.num / 1e3) + "K" : this.num) + "", this.cTween && this.cTween.stop(), this.cTween = cc.tween(this.cLabel.node.parent).to(.1, {
      scale: 1.2
    }).to(.1, {
      scale: .9
    }).to(.1, {
      scale: 1
    }).start()), this.num;
  }, t.num = 0, t);

  function t() {}

  n.Coin = e;
  o.get = function () {
    return this.passNum = a["default"].getlocal("passNum", []), this.num = this.passNum.length, this.nextNum = this.num + 1, this.nextNum;
  }, o.set = function (e) {
    return this.passNum.indexOf(e) < 0 && (this.passNum.push(e), a["default"].setlocal("passNum", this.passNum)), this.num = this.passNum.length, this.nextNum = this.num + 1, this.nextNum;
  }, o.num = 0, o.nextNum = 1, e = o;

  function o() {}

  n.Pass = e;
  i.SetEnergy = function (e, t) {
    void 0 === e && (e = 0), void 0 === t && (t = !0);
    var o = a["default"].gettimestamp();
    return a["default"].data.energyEtimestamp = 0 != e ? a["default"].setlocal("energyEtimestamp", o) : a["default"].getlocal("energyEtimestamp"), a["default"].data.energy = a["default"].getlocal("energy", this.FREELIMT), a["default"].data.energy += e, a["default"].data.energy = Math.min(a["default"].data.energy, 99), a["default"].data.energy = Math.max(a["default"].data.energy, 0), a["default"].setlocal("energy", a["default"].data.energy), a["default"].data.energy >= this.FREELIMT && (a["default"].data.energyEtimestamp = a["default"].setlocal("energyEtimestamp", o)), this.InitEnergyTimer(), 0 < e && t && r.CCTool.UI.ShowToast("获得体力+" + e), cc.log("[SetEnergy]", e), a["default"].data.energy;
  }, i.EnergyConsume = function (e, t, o) {
    a["default"].data.energy + e < 0 ? o && o() : (this.SetEnergy(e), t(!0));
  }, i.InitEnergyTimer = function () {
    this.energyTimerIsOpen || a["default"].data.energy < this.FREELIMT && (this.energyTimerIsOpen = !0, a["default"].MainView.schedule(n.Energy.EnergyTimer, 1));
  }, i.EnergyTimer = function () {
    function e() {
      n.Energy.energyTimerIsOpen = !1, a["default"].MainView.unschedule(n.Energy.EnergyTimer), a["default"].data.EnergyTimeStr = "00:00";
    }

    var t = a["default"].gettimestamp() - (a["default"].data.energyEtimestamp || 0),
        o = Math.floor(t / n.Energy.TIMELIMT);
    a["default"].data.energy >= n.Energy.FREELIMT ? e() : 1 <= o ? (e(), (o = o) + a["default"].data.energy > n.Energy.FREELIMT && (o = n.Energy.FREELIMT - a["default"].data.energy), n.Energy.SetEnergy(o, !1)) : (t = n.Energy.TIMELIMT - t, t = a["default"].formatSeconds(t), a["default"].data.EnergyTimeStr = t.m + ":" + t.s);
  }, i.FREELIMT = 10, i.TIMELIMT = 10, i.VIDEOENERGY = 2, i.energyTimerIsOpen = !1, e = i;

  function i() {}

  n.Energy = e;
}(o.GameTool || (o.GameTool = {}));

cc._RF.pop();
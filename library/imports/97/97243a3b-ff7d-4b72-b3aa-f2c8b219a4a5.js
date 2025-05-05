"use strict";
cc._RF.push(module, '97243o7/31LcrOq8siyGaSl', 'BuildingContentItem');
// scripts/BuildingContentItem.js

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
var r,
    s = e("AppCommon"),
    c = e("CCTool"),
    l = e("PlatformFun"),
    p = e("UserVo"),
    d = e("Cfg"),
    t = cc._decorator,
    e = t.ccclass,
    t = t.property,
    e = (r = cc.Component, i(u, r), u.prototype.init = function (e, t) {
  var o,
      n = this;

  switch (void 0 === t && (t = !1), this.bData = e, this._isNeedNumLimit = t, this.labelArr[0].string = this.bData.name, this._frontDoorInfo = null, this._frontGenerator = null, this._costCoin = this.bData.costCoin, this._costPower = this.bData.costPower, s["default"].GScene.player && (a = s["default"].GScene.player.reduceRationList.get(this.bData.buildingType), this._costCoin *= a || 1, this._costPower *= a || 1, this._costCoin = Math.round(this._costCoin), this._costPower = Math.round(this._costPower)), this.bData.buildingType) {
    case 1:
      this.descText.string = s["default"].strReplace(this.bData.introduction, this.bData.outputCoin);
      break;

    case 2:
      this.descText.string = s["default"].strReplace(this.bData.introduction, this.bData.atk, (this.bData.atkRadius / 100).toFixed(1));
      break;

    case 3:
      this.descText.string = s["default"].strReplace(this.bData.introduction, this.bData.hp);
      break;

    case 4:
      this.descText.string = s["default"].strReplace(this.bData.introduction, this.bData.outputPower);
      break;

    case 5:
      this.descText.string = s["default"].strReplace(this.bData.introduction, this.bData.outputCoin);
      break;

    case 17:
    case 18:
    case 19:
      var i = d.Cfg.Ghost1.get(this.bData.parameter[0]);
      this.descText.string = s["default"].strReplace(this.bData.introduction, i.atk, this.bData.frequency);
      break;

    default:
      this.descText.string = this.bData.introduction;
  }

  for (o in this.bData.frontDoor && (this._frontDoorInfo = d.Cfg.Building1.get(this.bData.frontDoor), this.descText.string = cc.js.formatStr("%s<br/>前置:%s", this.descText.string, this._frontDoorInfo.name)), this.bData.frontGenerator && (this._frontGenerator = d.Cfg.Building1.get(this.bData.frontGenerator), this.descText.string = cc.js.formatStr("%s<br/>前置:%s", this.descText.string, this._frontGenerator.name)), this._updateCount(), this._updateBuildCount(), cc.resources.load("img/gameIcon/" + this.bData.id, cc.SpriteFrame, function (e, t) {
    n.node && (n.SpriteArr[0].spriteFrame = t);
  }), this.nodeArr[0].children) {
    this.nodeArr[0].children[o].active = !1;
  }

  this.setBuy();
  var a = "Create" == this.type ? "buildingGet" : "buildingLevelup";
  l.PlatformFun.SendEvent(s["default"].GScene.getModeStr() + a + "_show_" + this.bData.buildingType);
}, u.prototype._updateCount = function () {
  this.labelArr[2].node.parent.active = this._isNeedNumLimit, this._haveNum = p.UserVo.getBuildingNumById(this.bData.id), this.labelArr[2].string = "" + this._haveNum;
}, u.prototype._isCountEnough = function () {
  return !this._isNeedNumLimit || 0 < this._haveNum;
}, u.prototype._reduceCount = function () {
  this._isNeedNumLimit && (p.UserVo.addBuildingNumById(this.bData.id, -1), this._updateCount());
}, u.prototype._addCount = function () {
  p.UserVo.addBuildingNumById(this.bData.id, 1), this._updateCount();
}, u.prototype.setBuy = function () {
  var e = this.nodeArr[0].children[0];
  e.children[0].children[0].active = !!this._costCoin, e.children[0].children[0].children[1].getComponent(cc.Label).string = this._costCoin + "", e.children[0].children[1].active = !!this._costPower, e.children[0].children[1].children[1].getComponent(cc.Label).string = this._costPower + "", e.active = !0, "Create" == this.type && (this.nodeArr[0].children[1].active = !1, this.bData.maximum && this.curBuildNum >= this.bData.maximum || this._isCountEnough() || (e.active = !1, this.setVideo()));
}, Object.defineProperty(u.prototype, "curBuildNum", {
  get: function get() {
    return s["default"].GScene.player.myBuildNum[this.bData.buildingType] || 0;
  },
  enumerable: !1,
  configurable: !0
}), u.prototype._updateBuildCount = function () {
  this.labelArr[3].node.active = !!this.bData.maximum && "Create" == this.type, this.labelArr[3].node.active && (this.labelArr[3].string = cc.js.formatStr("可建造:%d/%d", this.curBuildNum, this.bData.maximum));
}, u.prototype.setVideo = function () {
  this.nodeArr[0].children[1].active = !0, "UPlv" == this.type && (this.descText.string = cc.js.formatStr("%s<br/>%s", this.descText.string, "提示：每个建筑只有1次升级机会哦！"));
}, u.prototype.setDelete = function () {
  var o = this,
      e = this.nodeArr[0].children[2];
  e.children[0].children[0].active = !!this.bData.returnCoin, e.children[0].children[0].children[1].getComponent(cc.Label).string = this.bData.returnCoin + "", e.children[0].children[1].active = !!this.bData.returnPower, e.children[0].children[1].children[1].getComponent(cc.Label).string = this.bData.returnPower + "", e.active = !0, this.descText.string = "拆除当前建筑，并且返回一定的资源", cc.resources.load("img/gameIcon/lajitong", cc.SpriteFrame, function (e, t) {
    o.SpriteArr[0].spriteFrame = t;
  }), this.labelArr[0].string = "拆除";
}, u.prototype.onBuilding = function () {}, u.prototype.onButton = function (e, t) {
  var o = this;

  switch (t) {
    case "Buy":
      if (!this.checkBuild()) return;
      var n = s["default"].GScene.player.wallet;
      if ("Create" == this.type && this.bData.maximum && this.curBuildNum >= this.bData.maximum) return c.CCTool.UI.ShowToast("超过上限");
      if (this._frontDoorInfo && s["default"].GScene.player.myBuildTopId[this._frontDoorInfo.buildingType] && (!(i = s["default"].GScene.player.myBuildTopId[this._frontDoorInfo.buildingType]) || i < this._frontDoorInfo.id)) return c.CCTool.UI.ShowToast(cc.js.formatStr("须先建造%s", this._frontDoorInfo.name));
      if (this._frontGenerator && s["default"].GScene.player.myBuildTopId[this._frontGenerator.buildingType] && (!(i = s["default"].GScene.player.myBuildTopId[this._frontGenerator.buildingType]) || i < this._frontGenerator.id)) return c.CCTool.UI.ShowToast(cc.js.formatStr("须先建造%s", this._frontGenerator.name));
      if (this._costCoin && this._costCoin > n.coin) return c.CCTool.UI.ShowToast("金币不足");
      if (this._costPower && this._costPower > n.power) return c.CCTool.UI.ShowToast("水滴不足");
      this._costCoin && s["default"].GScene.player.setCoin(-this._costCoin), this._costPower && s["default"].GScene.player.setPower(-this._costPower), this.onBuilding(this.bData, t), this._reduceCount();
      break;

    case "VideoBuy":
      if (!this.checkBuild()) return;
      if ("Create" == this.type && this.bData.maximum && this.curBuildNum >= this.bData.maximum) return c.CCTool.UI.ShowToast("超过上限");
      if (this._frontDoorInfo && s["default"].GScene.player.myBuildTopId[this._frontDoorInfo.buildingType] && (!(i = s["default"].GScene.player.myBuildTopId[this._frontDoorInfo.buildingType]) || i < this._frontDoorInfo.id)) return c.CCTool.UI.ShowToast(cc.js.formatStr("须先建造%s", this._frontDoorInfo.name));
      if (this._frontGenerator && s["default"].GScene.player.myBuildTopId[this._frontGenerator.buildingType] && (!(i = s["default"].GScene.player.myBuildTopId[this._frontGenerator.buildingType]) || i < this._frontGenerator.id)) return c.CCTool.UI.ShowToast(cc.js.formatStr("须先建造%s", this._frontGenerator.name));
      s["default"].GScene.setPause(), l.PlatformFun.loadRewardedVideoAd({
        onVideoSuccess: function onVideoSuccess() {
          o._isNeedNumLimit ? (o._addCount(), o.setBuy(), c.CCTool.UI.ShowToast(cc.js.formatStr("%s库存+1", o.bData.name))) : o.onBuilding(o.bData, t);
        },
        loadSuccess: function loadSuccess() {}
      });
      var i = "Create" == this.type ? "buildingGet" : "buildingLevelup";
      l.PlatformFun.SendEvent(s["default"].GScene.getModeStr() + i + "_click_" + this.bData.buildingType);
      break;

    case "Delete":
      this.onBuilding(this.bData, t);
  }
}, u.prototype.checkBuild = function () {
  return "Create" == this.type || !(!this.myArc || !this.myArc._isActive) || (c.CCTool.UI.ShowToast("你的建筑被炸了，无法升级"), this.ower.close(), !1);
}, a([t([cc.Node])], u.prototype, "nodeArr", void 0), a([t([cc.Label])], u.prototype, "labelArr", void 0), a([t([cc.Sprite])], u.prototype, "SpriteArr", void 0), a([t(cc.RichText)], u.prototype, "descText", void 0), a([e], u));

function u() {
  var e = null !== r && r.apply(this, arguments) || this;
  return e.nodeArr = [], e.labelArr = [], e.SpriteArr = [], e.descText = null, e.type = "Create", e._isNeedNumLimit = !1, e._haveNum = 0, e._frontDoorInfo = null, e._frontGenerator = null, e._costCoin = 0, e._costPower = 0, e;
}

o["default"] = e;

cc._RF.pop();
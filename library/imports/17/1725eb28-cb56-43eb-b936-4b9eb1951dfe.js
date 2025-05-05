"use strict";
cc._RF.push(module, '1725esoy1ZD67k2S56xlR3+', 'MainView');
// scripts/MainView.js

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
    l = e("BaseSdk"),
    p = e("PlatformFun"),
    d = e("UserVo"),
    u = e("ListenID"),
    f = e("Notifier"),
    h = e("ModelStateCheck"),
    m = e("ShowOffController"),
    y = e("GameScene"),
    g = e("SkinCtrl"),
    _ = e("TaskCtrl"),
    t = cc._decorator,
    e = t.ccclass,
    t = t.property,
    e = (r = cc.Component, i(v, r), v.prototype.onLoad = function () {
  var t = this;
  s["default"].MainView = this, d.UserVo.InitData(), s["default"].TaskCtrl = new _["default"](), s["default"].SkinCtrl = new g["default"](), s["default"].data.is_AudioOpen = s["default"].getlocal("is_AudioOpen", 1), s["default"].data.is_BgmOpen = s["default"].getlocal("is_BgmOpen", 1), s["default"].data.is_ShockOpen = s["default"].getlocal("is_ShockOpen", 1), this.node.on(u.ListenID.CONFIG_INFO, function () {
    for (var e in s["default"].CONFIG_INFO.GM && c.CCTool.UI.OpenPop("prefab/pop/TestBox", null, t.node), d.UserVo.autoFriendsTips && s["default"].PF != l.GAMEPF.WEB && (c.CCTool.UI.OpenPop("prefab/pop/pop_FriendsTipPanel", {}, t.node), d.UserVo.autoFriendsTips = !1), l.GAMEPF.WX == s["default"].PF && c.CCTool.UI.OpenPop("prefab/pop/pop_WxNativeAd", null, t.node), t.shareDesc.node.parent.parent.getComponent(m["default"]).onNewState(), t.GameBut.children) {
      t.GameBut.children[e].active = !s["default"].CONFIG_INFO.IscheckModel || s["default"].CONFIG_INFO.IscheckModel.indexOf(+e + 1) < 0;
    }

    p.PlatformFun.sdkManage && p.PlatformFun.sdkManage.getNatId(), s["default"].PF == l.GAMEPF.ADR_XM && p.PlatformFun.showBannerAd(), t.GameBut.getComponent(cc.Layout).enabled = !1, t.GameBut.children[t.GameBut.childrenCount - 1].x = 0, s["default"].SkinCtrl.updateSkinCfgList();
  }), p.PlatformFun.platformSeting(), this.updateShare();
}, v.prototype.updateShare = function () {
  this.shareDesc.string = cc.js.formatStr("(今日已获得%d/3)", d.UserVo.shareRewardTimes), 3 <= d.UserVo.shareRewardTimes && (this.shareDesc.node.parent.active = !1);
}, v.prototype.start = function () {
  s["default"].GScene.setGameStart(y.GAME_STATE.Index), p.PlatformFun.SendEvent("my_enter");
}, v.prototype.gameMsg = function (e) {
  c.CCTool.UI.ShowToast(e, 40, !1, 2, cc.winSize.height / 2 * .6, cc.Color.WHITE, s["default"].MainView.PopBox, !1);
}, v.prototype.getIndex = function () {
  this.IndexPage.active = !0, this.IndexPage.opacity = 255, this.GamePage.active = !1, f.Notifier.send(u.ListenID.Ad_WXNativeShow, !0), s["default"].PF == l.GAMEPF.ADR_XM && s["default"].CONFIG_INFO.DownDT && p.PlatformFun.showBannerAd();
}, v.prototype.openGame = function () {
  this.IndexPage.active = !1, this.GamePage.active = !0, f.Notifier.send(u.ListenID.Ad_WXNativeShow, !1), p.PlatformFun.hideBannerAd();
}, v.prototype.onButton = function (e, t) {
  switch (cc.log(t), e && c.CCTool.Audio.Player("Click"), t) {
    case "pop_Equipment":
    case "pop_Setting":
    case "pop_ShopPanel":
    case "pop_NoticePanel":
    case "pop_RulePanel":
    case "pop_SkinShop":
    case "pop_UIHelpdevelopment":
    case "pop_UIModelVote":
    case "pop_UIKuaiDiGui":
    case "pop_SkinPanel":
      c.CCTool.UI.OpenPop("prefab/pop/" + t);
      break;

    case "StartGameModel_1":
    case "StartGameModel_2":
    case "StartGameModel_3":
    case "StartGameModel_4":
      p.PlatformFun.destroyInterstitialAd();
      var o = e.currentTarget,
          n = +t.split("_")[1],
          i = o.getComponent(h["default"]);
      !i || i.getIsUnlockByModel() ? s["default"].GScene.setGameStart(y.GAME_STATE.Matching, n) : p.PlatformFun.loadRewardedVideoAd({
        onVideoSuccess: function onVideoSuccess() {
          p.PlatformFun.SendEvent("m" + Number(n) + "_play_video"), i.reduceLockNum(), s["default"].GScene.setGameStart(y.GAME_STATE.Matching, n);
        }
      });
      break;

    case "WXShare":
      this.wxShare();
      break;

    case "AgeAppropriate":
      c.CCTool.UI.OpenPop("prefab/pop/pop_FriendsTipPanel", {}, this.PopBox, function (e) {
        e.labelArr[1].string = "适龄提示", e.labelArr[0].string = "（1）本游戏是一款休闲类游戏，适用于年满16周岁及以上的用户，建议未成年人在家长监护下使用游戏。\n （2）本游戏基于架空幻想故事背景，围绕简单的日常行为剧情展开，游戏玩法基于一定难度的肢体操作和一定难度的思维判断，鼓励玩家通过思考和训练达成目标，游戏内没有基于文字和语音的陌生人社交系统。 \n（3）本游戏中有用户实名认证系统，未实名认证的账户无法进入游戏，认证为未成年人的用户将接受以下管理：游戏中无收费内容，不提供任何的收费服务，游戏仅在每周五、周六、周日和法定节假日的20时至21时向未成年用户提供1小时游戏服务。游戏中没有情侣/恋爱/婚恋系统，该系统对未成年用户不开放。\n（4）本游戏以休闲益智为主题，提升用户思维判断能力和反应能力。", e.labelArr[0].font = e.labelArr[1].font = null;
      });
      break;

    case "ShowPrivacy":
      p.PlatformFun.sdkManage && p.PlatformFun.sdkManage.ShowPrivacy();
  }
}, v.prototype.wxShare = function () {
  var e = this;
  p.PlatformFun.shareAppMessage({
    onShareSuccess: function onShareSuccess() {
      d.UserVo.shareRewardTimes < 3 && (d.UserVo.shareRewardTimes = d.UserVo.shareRewardTimes + 1, d.UserVo.SetFish(200), c.CCTool.UI.showCurrencyTips("fish", 200), e.updateShare());
    },
    onShareFail: function onShareFail() {
      p.PlatformFun.showWxModel("提示", "分享失败!", "继续分享", "一会再来", function () {
        e.wxShare();
      });
    }
  });
}, a([t(cc.Node)], v.prototype, "IndexPage", void 0), a([t(cc.Node)], v.prototype, "GamePage", void 0), a([t(cc.Node)], v.prototype, "PopBox", void 0), a([t(cc.Label)], v.prototype, "shareDesc", void 0), a([t(cc.Node)], v.prototype, "GameBut", void 0), a([e], v));

function v() {
  var e = null !== r && r.apply(this, arguments) || this;
  return e.IndexPage = null, e.GamePage = null, e.PopBox = null, e.shareDesc = null, e.GameBut = null, e;
}

o["default"] = e;

cc._RF.pop();
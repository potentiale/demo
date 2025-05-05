"use strict";
cc._RF.push(module, 'f1172ssedVPuLont3teg1BQ', 'pop_GameDie');
// scripts/pop_GameDie.js

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
    d = e("TTGame"),
    u = e("UserVo"),
    f = e("Cfg"),
    h = e("GameScene"),
    m = e("ModelManage"),
    y = e("pop"),
    t = cc._decorator,
    e = t.ccclass,
    t = t.property,
    e = (r = y["default"], i(g, r), g.prototype.start = function () {}, g.prototype.onButton = function (e, t) {
  switch (cc.log(t), e && c.CCTool.Audio.Player("Click"), t) {
    case "Close":
    case "close":
      this.close();
      break;

    case "GetIndex":
      s["default"].GScene.setGameStart(h.GAME_STATE.Index), p.PlatformFun.SendEvent(s["default"].GScene.getModeStr() + "exit_2"), this.close();
      break;

    case "Get":
      c.CCTool.UI.ShowToast("获得摸鱼币" + s["default"].data.getCoin), u.UserVo.SetFish(s["default"].data.getCoin), s["default"].GScene.setGameStart(h.GAME_STATE.Index), this.close();
      break;

    case "VideoGet":
      var o = s["default"].data.getCoin,
          n = this;
      p.PlatformFun.loadRewardedVideoAd({
        onVideoSuccess: function onVideoSuccess() {
          c.CCTool.UI.ShowToast("获得摸鱼币" + 3 * o), u.UserVo.SetFish(3 * o), s["default"].GScene.setGameStart(h.GAME_STATE.Index), n.close();
        },
        loadSuccess: function loadSuccess() {
          p.PlatformFun.SendEvent(s["default"].GScene.getModeStr() + "show_vedio_reward");
        }
      }), p.PlatformFun.SendEvent(s["default"].GScene.getModeStr() + "click_vedio_reward");
      break;

    case "TTShare":
      d["default"].ShareVideoUrl({
        onShareSuccess: function onShareSuccess() {
          e.target.active = !1;
        }
      }), p.PlatformFun.SendEvent(s["default"].GScene.getModeStr() + "share");
      break;

    case "Again":
      p.PlatformFun.destroyInterstitialAd(), s["default"].GScene.setGameStart(h.GAME_STATE.Index);
      var i = s["default"].GScene._GameModel;
      0 == u.UserVo.getModelStateInfo(i - 1).lockNum ? (s["default"].GScene.setGameStart(h.GAME_STATE.Matching, i), p.PlatformFun.SendEvent(s["default"].GScene.getModeStr() + "replay")) : p.PlatformFun.loadRewardedVideoAd({
        onVideoSuccess: function onVideoSuccess() {
          p.PlatformFun.SendEvent("m" + Number(i) + "_play_video"), u.UserVo.setModelStateInfo(i - 1, -1), s["default"].GScene.setGameStart(h.GAME_STATE.Matching, i);
        }
      }), this.close();
      break;

    case "WXShare":
    case "ShareUser":
      s["default"].PF == l.GAMEPF.TT ? d["default"].ShareVideoUrl({
        onShareSuccess: function onShareSuccess() {}
      }, "invite") : p.PlatformFun.shareAppMessage(), p.PlatformFun.SendEvent(s["default"].GScene.getModeStr() + "battle");
      break;

    default:
      s["default"].MainView.onButton(null, t);
  }
}, g.prototype.close = function () {
  p.PlatformFun.SendEvent(s["default"].GScene.getModeStr() + "show_interstitial_reward"), p.PlatformFun.showInterstitialAd(), r.prototype.close.call(this);
}, g.prototype.onSwitchReward = function () {
  this.nodeArr[0].active = this.toggle.isChecked, this.nodeArr[1].active = !this.toggle.isChecked;
}, a([t(cc.Toggle)], g.prototype, "toggle", void 0), a([t(cc.RichText)], g.prototype, "rText", void 0), a([e], g));

function g() {
  var n = null !== r && r.apply(this, arguments) || this;
  return n.toggle = null, n.rText = null, n.initFun = {
    "default": function _default() {
      if (n.labelArr[0].string = s["default"].data.getCoin + "", p.PlatformFun.SendEvent(s["default"].GScene.getModeStr() + "level_defeat"), s["default"].PF == l.GAMEPF.WX) {
        var e = n.nodeArr[0].parent.getComponent(cc.Layout);
        e.type = cc.Layout.Type.HORIZONTAL, e.spacingX = 39;

        for (var t = e.spacingY = 0; t < e.node.childrenCount; t++) {
          e.node.children[t].y = -46.5;
        }

        var o = s["default"].GetProbability(s["default"].CONFIG_INFO.RewardProbability || 0);
        n.toggle.isChecked = o, n.onSwitchReward();
      } else n.toggle.node.active = !1;

      s["default"].PF == l.GAMEPF.ADR_XM && p.PlatformFun.showBannerAd();
    },
    pop_GameDie_M4: function pop_GameDie_M4() {
      c.CCTool.Audio.Player("m4_finish");
      var e = s["default"].MapClr.modelManage.myModel.SettlementData,
          t = f.Cfg.Building999.find({
        level: e.maxLv
      });
      cc.resources.load("img/model_4/" + t.parameter[1], cc.SpriteFrame, function (e, t) {
        n.nodeArr[0].getComponent(cc.Sprite).spriteFrame = t;
      }), n.labelArr[0].string = t.name, n.rText.string = "击败：<color=#ffdb5c>" + e.kill + "</c>  最高：<color=#ffdb5c>" + u.UserVo.data.m4_killNumMax + "</c>", n.nodeArr[1].active = 0 != u.UserVo.getModelStateInfo(m.GAME_MODEL.FISH_MODEL - 1).lockNum;
    }
  }, n;
}

o["default"] = e;

cc._RF.pop();
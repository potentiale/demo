
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/pop_GameGiftBag.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cfedahlW+hPZIxpA5Z1VGO2', 'pop_GameGiftBag');
// scripts/pop_GameGiftBag.js

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
    h = e("Cfg"),
    m = e("AIState"),
    y = e("ModelManage"),
    g = e("WarChessManage"),
    _ = e("pop"),
    v = cc._decorator,
    t = v.ccclass,
    e = v.property,
    v = v.menu,
    v = (r = _["default"], i(C, r), C.prototype.onButton = function (e, t) {
  var a = this;

  switch (e && c.CCTool.Audio.Player("Click"), t) {
    case "Close":
      s["default"].GScene.setPause(-1), this.pdata.call && this.pdata.call(), this.close();
      break;

    case "VideoGet":
      this.openVideo(function () {
        a.videoGetFun();
      });
      break;

    case "BackOutRevive":
      s["default"].MapClr.modelManage.myModel.GameEnd(), this.close();
      break;

    case "VideoRevive":
      s["default"].GScene._GameModel == y.GAME_MODEL.FISH_MODEL ? p.PlatformFun.SendEvent(s["default"].GScene.getModeStr() + "survive_click") : p.PlatformFun.SendEvent(s["default"].GScene.getModeStr() + "cilck_rebuilddoor"), this.openVideo(function () {
        s["default"].GScene._GameModel == y.GAME_MODEL.FISH_MODEL ? s["default"].MapClr.modelManage.myModel.GameRevive() : (s["default"].GScene.player.myDoor.setLife(1e6), s["default"].GScene.player.myDoor.upAttribute()), a.close();
      }, function () {});
      break;

    case "VideoKuaiDi":
      this.openVideo(function () {
        s["default"].GScene.player.setCoin(1e3), c.CCTool.UI.showCurrencyTips("Fish coin", 1e3), s["default"].GScene.player.setPower(500), s["default"].MapClr.scheduleOnce(function () {
          c.CCTool.UI.showCurrencyTips("energy", 500);
        }, .5), a.pdata.call && a.pdata.call(!0), a.close();
      }), p.PlatformFun.SendEvent(s["default"].GScene.getModeStr() + "express_get");
      break;

    case "SyncQRCode":
      if (s["default"].MapClr.modelManage.myModel.data.isSyncQRCode) return this.nodeArr[2].parent.active = !1, c.CCTool.UI.ShowToast("做人不能太贪心！");
      this.nodeArr[1].active = !1, this.nodeArr[0].active = !0, cc.tween(this.nodeArr[0].children[0]).to(.5, {
        x: 58
      }).to(.5, {
        x: -58
      }).call(function () {
        a.nodeArr[2].parent.active = !1;
        var e = s["default"].GetRandomNum(15, 25);
        s["default"].GScene.player.setCoin(e), c.CCTool.UI.ShowToast(cc.js.formatStr("你知道得太多了，给你%d金币吧", e)), s["default"].MapClr.modelManage.myModel.data.isSyncQRCode = !0;
      }).start();
      break;

    case "VideoHelpdevelopment":
      this.openVideo(function () {
        d.UserVo.SetFish(300), c.CCTool.UI.showCurrencyTips("fish", 300), d.UserVo.data.dailyData.HelpdevelopmentNum++, d.UserVo.SaveData();
        var e = d.UserVo.data.dailyData.HelpdevelopmentNum,
            t = a.nodeArr[0].getComponent(sp.Skeleton);
        t.setAnimation(0, "0" + 2 * e, !1), a.unscheduleAllCallbacks(), a.scheduleOnce(function () {
          t.setAnimation(0, "0" + (2 * e + 1), !0);
        }, 0 <= [2, 4].indexOf(2 * e) ? 4.5 : 6.6), a.nodeArr[1].active = d.UserVo.data.dailyData.HelpdevelopmentNum < 3, a.labelArr[0].string = "（" + e + "/3）", p.PlatformFun.SendEvent("assist_" + e);
      });
      break;

    case "VideoGiveBossHongBao":
      var n = s["default"].MapClr.monsterList[0];
      p.PlatformFun.loadRewardedVideoAd({
        onVideoSuccess: function onVideoSuccess() {
          if (n._isActive) {
            var e, t;

            for (t in s["default"].MapClr.roleList) {
              var o = s["default"].MapClr.roleList[t];
              o.isAi && 0 < o._life && (e = o.roleID);
              break;
            }

            n.myFSM.setAIState(m.StateType.Idle), n._isActive = !1, n.scheduleOnce(function () {
              n._isActive = !0, n.myFSM.attackRoleById(e);
            }, 1.2), s["default"].MapClr.newDialogue(n.node, cc.v2(20, 150), "悟性不错！有钱途！", 3), s["default"].data.isInvisible = !0, s["default"].MapClr.myMap.scheduleOnce(function () {
              s["default"].data.isInvisible = !1;
            }, 30);
          }

          s["default"].GScene.setPause(-1), a.close();
        },
        onShowClose: function onShowClose() {
          s["default"].MapClr.newDialogue(n.node, cc.v2(20, 150), "呆头呆脑还敢摸鱼！", 3), n.skillManage.useSkill(n.skillManage.getType(1)), a.close();
        }
      }), p.PlatformFun.SendEvent(s["default"].GScene.getModeStr() + "redpacket_click");
      break;

    case "GetUIKuaiDiGui":
      !function () {
        var e = +a.labelArr[0].string,
            t = s["default"].CONFIG_INFO.expresskey.indexOf(e);
        if (t < 0) return p.PlatformFun.SendEvent("egg_express_fail_click"), c.CCTool.UI.ShowToast("取件码错误");
        if (0 <= d.UserVo.data.KuaiDiGui_Get.indexOf(e)) return c.CCTool.UI.ShowToast("做人不能太贪心！");
        d.UserVo.data.KuaiDiGui_Get.push(e), d.UserVo.SaveData();
        var o,
            n = s["default"].CONFIG_INFO.expresspackage[t].split("-");

        for (o in n) {
          var i = n[o].split(",");
          !function (e, t, o) {
            switch (cc.log(e, t, o), e) {
              case "Building1":
                var n = h.Cfg[e].get(t);
                d.UserVo.addBuildingNumById(n.id, o), c.CCTool.UI.ShowToast("取件成功！获得" + n.name + "x" + o);
                break;

              case "RoleMan":
                n = h.Cfg[e].get(t);
                d.UserVo.setSkin(n.id), d.UserVo.useSkin = n.id, c.CCTool.UI.ShowToast("取件成功！获得" + n.name);
            }
          }(i[0], +i[1], +i[2]);
        }

        p.PlatformFun.SendEvent("egg_express_succeed_click");
      }();
      break;

    case "VideoUIKuaiDiGuiTips":
      !function () {
        var o;
        p.PlatformFun.SendEvent("egg_express_forgetkey_click");
        var e,
            n = [];

        for (e in s["default"].CONFIG_INFO.expresskey) {
          var t = s["default"].CONFIG_INFO.expresskey[e];

          if (n.push(t), d.UserVo.data.KuaiDiGui_Tips.indexOf(t) < 0) {
            o = t;
            break;
          }
        }

        o && a.openVideo(function () {
          a.nodeArr[2].active = !0, d.UserVo.data.KuaiDiGui_Tips.push(o), d.UserVo.SaveData();
          var e,
              t = "";

          for (e in n) {
            t += n[e] + "       ";
          }

          a.labelArr[1].string = t;
        });
      }();
      break;

    case "VideoGetYunNanBGM":
      p.PlatformFun.SendEvent("egg_changebgm"), this.openVideo(function () {
        s["default"].data.YunNanBGM = !0, a.close();
      });
      break;

    case "VideoGiveBossHand":
      this.openVideo(function () {
        f.Notifier.send(u.ListenID.Fight_GetHandSuccess, a.pdata), a.close();
      });
      break;

    case "VideoGetHighFish":
      p.PlatformFun.SendEvent(s["default"].GScene.getModeStr() + "superfish_click"), this.openVideo(function () {
        c.CCTool.Audio.Player("m4_finish"), a.nodeArr[1].active = !1;
        var o = s["default"].MapClr.modelManage.myModel.WCManage;
        s["default"].MapClr.modelManage.myModel.getHighFish(function (t) {
          cc.resources.load("img/model_4/" + t.parameter[1], cc.SpriteFrame, function (e, t) {
            a.nodeArr[0].getComponent(cc.Sprite).spriteFrame = t;
          }), cc.tween(a.node).call(function () {
            a.am.play("HighFish_open");
          }).delay(.6).call(function () {
            a.am.play("HighFish_openIdle");
          }).delay(1).call(function () {
            var e = o.getEmptyTag(g.POINT_TYPE.BATTLEFIELD);
            s["default"].MapClr.modelManage.myModel.WCManage.getBattery(t, e.arr[0], cc.v2(0, 100));
          }).to(.1, {
            opacity: 0
          }).call(function () {
            a.close();
          }).start();
        });
      });
  }
}, C.prototype.openVideo = function (e, t) {
  p.PlatformFun.loadRewardedVideoAd({
    onVideoSuccess: function onVideoSuccess() {
      e(), s["default"].GScene.setPause(-1);
    },
    loadSuccess: function loadSuccess() {
      t && t();
    }
  });
}, C.prototype.longTapEvent = function () {
  p.PlatformFun.showInterstitialAd(), this.nodeArr[2].children[0].active = !0, this.nodeArr[1].active = !0;
}, C.prototype.registerLongTouch = function (e) {
  var t = this;
  e.on(cc.Node.EventType.TOUCH_START, function () {
    t._isPress = !0, t._pressTime = 0;
  }, this), e.on(cc.Node.EventType.TOUCH_END, function () {
    t._isPress = !1, t._pressTime = 0;
  }, this), e.on(cc.Node.EventType.TOUCH_CANCEL, function () {
    t._isPress = !1, t._pressTime = 0;
  }, this);
}, C.prototype.update = function (e) {
  this._isPress && (this._pressTime += e, 3 <= this._pressTime && (this._isPress = !1, this.longTapEvent(), this._pressTime = 0));
}, a([e(cc.Animation)], C.prototype, "am", void 0), a([t, v("pop/pop_GameGiftBag")], C));

function C() {
  var a = null !== r && r.apply(this, arguments) || this;
  return a.am = null, a._isPackage = !1, a.initFun = {
    pop_GameRevive_M2: function pop_GameRevive_M2() {
      a._isPackage = !1, s["default"].GScene.setPause(), p.PlatformFun.SendEvent(s["default"].GScene.getModeStr() + "show_rebuilddoor"), p.PlatformFun.vibrate(1);
    },
    pop_GameKuaidi: function pop_GameKuaidi() {
      p.PlatformFun.SendEvent(s["default"].GScene.getModeStr() + "express_show"), s["default"].GScene.setPause(), a._isPackage = !0, a.nodeArr[0].active = !1, a.nodeArr[1].active = !1, a.nodeArr[2].children[0].active = !1, a.registerLongTouch(a.nodeArr[2].parent.children[0]), s["default"].PF == l.GAMEPF.ADR_XM && p.PlatformFun.showBannerAd();
    },
    pop_UIHelpdevelopment: function pop_UIHelpdevelopment() {
      p.PlatformFun.SendEvent("assist_show");
      var e = d.UserVo.data.dailyData.HelpdevelopmentNum;
      a.nodeArr[0].getComponent(sp.Skeleton).setAnimation(0, "0" + (2 * e + 1), !0), a.nodeArr[1].active = d.UserVo.data.dailyData.HelpdevelopmentNum < 3, a.labelArr[0].string = "（" + e + "/3）";
    },
    pop_GiveBossHongBao: function pop_GiveBossHongBao() {
      p.PlatformFun.SendEvent(s["default"].GScene.getModeStr() + "redpacket_show"), s["default"].GScene.setPause();
    },
    pop_UIModelVote: function pop_UIModelVote() {
      d.UserVo.data.dailyData.ModelVote || (d.UserVo.data.dailyData.ModelVote = [], d.UserVo.SaveData());
      var n = 0;
      p.PlatformFun.SendEvent("vote_show");

      var i = function i() {
        for (var e in a.nodeArr[0].children) {
          !function (e) {
            var t = +e,
                o = a.nodeArr[0].children[e].children[1],
                e = 0 <= d.UserVo.data.dailyData.ModelVote.indexOf(t);
            cc.log(e), o.children[0].active = e, o.children[1].active = !e, e || 0 != n || o.children[1].on(cc.Node.EventType.TOUCH_END, function () {
              a.openVideo(function () {
                d.UserVo.SetFish(100), c.CCTool.UI.showCurrencyTips("fish", 100), d.UserVo.data.dailyData.ModelVote.push(t), d.UserVo.SaveData(), i(), p.PlatformFun.SendEvent("vote_click_" + (1 + t));
              });
            }, a);
          }(e);
        }

        n++;
      };

      i();
    },
    pop_UIKuaiDiGui: function pop_UIKuaiDiGui() {
      p.PlatformFun.SendEvent("egg_express_show"), a.pdata.codeArr = [], a.labelArr[0].string = "", a.nodeArr[0].on(cc.Node.EventType.TOUCH_END, function () {
        c.CCTool.Audio.Player("Click"), cc.tween(a.nodeArr[0]).to(.1, {
          scale: 1.1
        }).to(.1, {
          scale: 1
        }).start(), a.labelArr[0].string = "";
      }, a);

      for (var e = 0; e < 9; e++) {
        a.nodeArr[1].children[e] || cc.instantiate(a.nodeArr[1].children[0]).setParent(a.nodeArr[1]);
      }

      for (e = 0; e < 9; e++) {
        !function (e) {
          var t = a.nodeArr[1].children[e],
              o = e + 1;
          t.children[0].getComponent(cc.Label).string = o + "", t.on(cc.Node.EventType.TOUCH_END, function () {
            c.CCTool.Audio.Player("Click"), cc.tween(t).to(.1, {
              scale: 1.1
            }).to(.1, {
              scale: 1
            }).start(), 6 <= a.labelArr[0].string.length || (a.labelArr[0].string += "" + o);
          }, a);
        }(e);
      }

      var t = [];

      for (e in s["default"].CONFIG_INFO.expresskey) {
        var o = s["default"].CONFIG_INFO.expresskey[e];
        0 <= d.UserVo.data.KuaiDiGui_Tips.indexOf(o) && t.push(o);
      }

      if (a.nodeArr[2].active = 0 < t.length, 0 < t.length) {
        var n = "";

        for (e in t) {
          n += t[e] + "       ";
        }

        a.labelArr[1].string = n;
      }
    },
    pop_M4_HighFish: function pop_M4_HighFish() {
      p.PlatformFun.SendEvent(s["default"].GScene.getModeStr() + "superfish_show");
    },
    pop_GameRevive_M4: function pop_GameRevive_M4() {
      p.PlatformFun.SendEvent(s["default"].GScene.getModeStr() + "survive_show");
    },
    pop_M4_ConcealFish: function pop_M4_ConcealFish() {
      p.PlatformFun.SendEvent(s["default"].GScene.getModeStr() + "hidenfish_show");
      var e,
          t = a.pdata;

      for (e in a.nodeArr) {
        !function (o) {
          cc.resources.load("img/model_4/" + t.parameter[1], cc.SpriteFrame, function (e, t) {
            a.nodeArr[o].children[1].getComponent(cc.Sprite).spriteFrame = t;
          });
        }(e);
      }
    },
    pop_M4_UnlockChoppingBlock: function pop_M4_UnlockChoppingBlock() {
      p.PlatformFun.SendEvent(s["default"].GScene.getModeStr() + "moreboard_show"), a.videoGetFun = function () {
        var e = s["default"].MapClr.modelManage.myModel;
        p.PlatformFun.SendEvent(s["default"].GScene.getModeStr() + "moreboard_click_" + (e.myChoppingBlockNum + 2)), e.setChoppingBlock(e.myChoppingBlockNum + 2), a.close();
      };
    },
    pop_M4_GlodChoppingBlock: function pop_M4_GlodChoppingBlock() {
      p.PlatformFun.SendEvent(s["default"].GScene.getModeStr() + "goldboard_show"), a.videoGetFun = function () {
        p.PlatformFun.SendEvent(s["default"].GScene.getModeStr() + "goldboard_click"), s["default"].MapClr.modelManage.myModel.setGlodChoppingBlock(), a.close();
      };
    }
  }, a.videoGetFun = function () {}, a.closeFun = {
    pop_GiveBossHongBao: function pop_GiveBossHongBao() {
      var e = s["default"].MapClr.monsterList[0];
      s["default"].MapClr.newDialogue(e.node, cc.v2(20, 150), "呆头呆脑还敢摸鱼！", 3), e.skillManage.useSkill(e.skillManage.getType(1));
    }
  }, a._isPress = !1, a._pressTime = 0, a;
}

o["default"] = v;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccG9wX0dhbWVHaWZ0QmFnLmpzIl0sIm5hbWVzIjpbImUiLCJyZXF1aXJlIiwidCIsIm1vZHVsZSIsIm8iLCJleHBvcnRzIiwibiIsImkiLCJfX2V4dGVuZHMiLCJPYmplY3QiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsIkFycmF5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiY29uc3RydWN0b3IiLCJjcmVhdGUiLCJhIiwiX19kZWNvcmF0ZSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInIiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJSZWZsZWN0IiwiZGVjb3JhdGUiLCJzIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImMiLCJsIiwicCIsImQiLCJ1IiwiZiIsImgiLCJtIiwieSIsImciLCJfIiwidiIsImNjIiwiX2RlY29yYXRvciIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIm1lbnUiLCJDIiwib25CdXR0b24iLCJDQ1Rvb2wiLCJBdWRpbyIsIlBsYXllciIsIkdTY2VuZSIsInNldFBhdXNlIiwicGRhdGEiLCJjbG9zZSIsIm9wZW5WaWRlbyIsInZpZGVvR2V0RnVuIiwiTWFwQ2xyIiwibW9kZWxNYW5hZ2UiLCJteU1vZGVsIiwiR2FtZUVuZCIsIl9HYW1lTW9kZWwiLCJHQU1FX01PREVMIiwiRklTSF9NT0RFTCIsIlBsYXRmb3JtRnVuIiwiU2VuZEV2ZW50IiwiZ2V0TW9kZVN0ciIsIkdhbWVSZXZpdmUiLCJwbGF5ZXIiLCJteURvb3IiLCJzZXRMaWZlIiwidXBBdHRyaWJ1dGUiLCJzZXRDb2luIiwiVUkiLCJzaG93Q3VycmVuY3lUaXBzIiwic2V0UG93ZXIiLCJzY2hlZHVsZU9uY2UiLCJkYXRhIiwiaXNTeW5jUVJDb2RlIiwibm9kZUFyciIsInBhcmVudCIsImFjdGl2ZSIsIlNob3dUb2FzdCIsInR3ZWVuIiwiY2hpbGRyZW4iLCJ0byIsIngiLCJHZXRSYW5kb21OdW0iLCJqcyIsImZvcm1hdFN0ciIsInN0YXJ0IiwiVXNlclZvIiwiU2V0RmlzaCIsImRhaWx5RGF0YSIsIkhlbHBkZXZlbG9wbWVudE51bSIsIlNhdmVEYXRhIiwiZ2V0Q29tcG9uZW50Iiwic3AiLCJTa2VsZXRvbiIsInNldEFuaW1hdGlvbiIsInVuc2NoZWR1bGVBbGxDYWxsYmFja3MiLCJpbmRleE9mIiwibGFiZWxBcnIiLCJzdHJpbmciLCJtb25zdGVyTGlzdCIsImxvYWRSZXdhcmRlZFZpZGVvQWQiLCJvblZpZGVvU3VjY2VzcyIsIl9pc0FjdGl2ZSIsInJvbGVMaXN0IiwiaXNBaSIsIl9saWZlIiwicm9sZUlEIiwibXlGU00iLCJzZXRBSVN0YXRlIiwiU3RhdGVUeXBlIiwiSWRsZSIsImF0dGFja1JvbGVCeUlkIiwibmV3RGlhbG9ndWUiLCJub2RlIiwidjIiLCJpc0ludmlzaWJsZSIsIm15TWFwIiwib25TaG93Q2xvc2UiLCJza2lsbE1hbmFnZSIsInVzZVNraWxsIiwiZ2V0VHlwZSIsIkNPTkZJR19JTkZPIiwiZXhwcmVzc2tleSIsIkt1YWlEaUd1aV9HZXQiLCJwdXNoIiwiZXhwcmVzc3BhY2thZ2UiLCJzcGxpdCIsImxvZyIsIkNmZyIsImdldCIsImFkZEJ1aWxkaW5nTnVtQnlJZCIsImlkIiwibmFtZSIsInNldFNraW4iLCJ1c2VTa2luIiwiS3VhaURpR3VpX1RpcHMiLCJZdW5OYW5CR00iLCJOb3RpZmllciIsInNlbmQiLCJMaXN0ZW5JRCIsIkZpZ2h0X0dldEhhbmRTdWNjZXNzIiwiV0NNYW5hZ2UiLCJnZXRIaWdoRmlzaCIsInJlc291cmNlcyIsImxvYWQiLCJwYXJhbWV0ZXIiLCJTcHJpdGVGcmFtZSIsIlNwcml0ZSIsInNwcml0ZUZyYW1lIiwiYW0iLCJwbGF5IiwiZGVsYXkiLCJnZXRFbXB0eVRhZyIsIlBPSU5UX1RZUEUiLCJCQVRUTEVGSUVMRCIsImdldEJhdHRlcnkiLCJhcnIiLCJvcGFjaXR5IiwibG9hZFN1Y2Nlc3MiLCJsb25nVGFwRXZlbnQiLCJzaG93SW50ZXJzdGl0aWFsQWQiLCJyZWdpc3RlckxvbmdUb3VjaCIsIm9uIiwiTm9kZSIsIkV2ZW50VHlwZSIsIlRPVUNIX1NUQVJUIiwiX2lzUHJlc3MiLCJfcHJlc3NUaW1lIiwiVE9VQ0hfRU5EIiwiVE9VQ0hfQ0FOQ0VMIiwidXBkYXRlIiwiQW5pbWF0aW9uIiwiYXBwbHkiLCJfaXNQYWNrYWdlIiwiaW5pdEZ1biIsInBvcF9HYW1lUmV2aXZlX00yIiwidmlicmF0ZSIsInBvcF9HYW1lS3VhaWRpIiwiUEYiLCJHQU1FUEYiLCJBRFJfWE0iLCJzaG93QmFubmVyQWQiLCJwb3BfVUlIZWxwZGV2ZWxvcG1lbnQiLCJwb3BfR2l2ZUJvc3NIb25nQmFvIiwicG9wX1VJTW9kZWxWb3RlIiwiTW9kZWxWb3RlIiwicG9wX1VJS3VhaURpR3VpIiwiY29kZUFyciIsInNjYWxlIiwiaW5zdGFudGlhdGUiLCJzZXRQYXJlbnQiLCJMYWJlbCIsInBvcF9NNF9IaWdoRmlzaCIsInBvcF9HYW1lUmV2aXZlX000IiwicG9wX000X0NvbmNlYWxGaXNoIiwicG9wX000X1VubG9ja0Nob3BwaW5nQmxvY2siLCJteUNob3BwaW5nQmxvY2tOdW0iLCJzZXRDaG9wcGluZ0Jsb2NrIiwicG9wX000X0dsb2RDaG9wcGluZ0Jsb2NrIiwic2V0R2xvZENob3BwaW5nQmxvY2siLCJjbG9zZUZ1biJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFDLEdBQUNDLE9BQU47QUFDQSxJQUFJQyxDQUFDLEdBQUNDLE1BQU47QUFDQSxJQUFJQyxDQUFDLEdBQUNDLE9BQU47QUFDQTs7QUFBYSxJQUFJQyxFQUFKO0FBQUEsSUFBTUMsQ0FBQyxHQUFDLFVBQU0sU0FBS0MsU0FBWCxLQUF1QkYsRUFBQyxHQUFDLFdBQVNOLENBQVQsRUFBV0UsQ0FBWCxFQUFhO0FBQUMsU0FBTSxDQUFDSSxFQUFDLEdBQUNHLE1BQU0sQ0FBQ0MsY0FBUCxJQUF1QjtBQUFDQyxJQUFBQSxTQUFTLEVBQUM7QUFBWCxlQUF5QkMsS0FBekIsSUFBZ0MsVUFBU1osQ0FBVCxF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LE1BQVYsQ0FBaUIrQyxXQUFqQixDQUE2QixDQUE3QixDQUFOO0FBQXNDOUUsTUFBQUEsQ0FBQyxXQUFELENBQVUrQixNQUFWLENBQWlCNEQsV0FBakIsQ0FBNkJySCxDQUFDLENBQUNzSCxJQUEvQixFQUFvQzdFLEVBQUUsQ0FBQzhFLEVBQUgsQ0FBTSxFQUFOLEVBQVMsR0FBVCxDQUFwQyxFQUFrRCxXQUFsRCxFQUE4RCxDQUE5RCxHQUFpRXZILENBQUMsQ0FBQzJILFdBQUYsQ0FBY0MsUUFBZCxDQUF1QjVILENBQUMsQ0FBQzJILFdBQUYsQ0FBY0UsT0FBZCxDQUFzQixDQUF0QixDQUF2QixDQUFqRTtBQUFrSDtBQUF4TCxHQUEvcUgsRUFBeTJIM0csQ0FBQyxDQUFDeUosUUFBRixHQUFXLENBQUMsQ0FBcjNILEVBQXUzSHpKLENBQUMsQ0FBQzBKLFVBQUYsR0FBYSxDQUFwNEgsRUFBczRIMUosQ0FBNzRIO0FBQSs0SDs7QUFBQWQsQ0FBQyxXQUFELEdBQVVvQyxDQUFWIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZT1yZXF1aXJlO1xudmFyIHQ9bW9kdWxlO1xudmFyIG89ZXhwb3J0cztcblwidXNlIHN0cmljdFwiO3ZhciBuLGk9dGhpcyYmdGhpcy5fX2V4dGVuZHN8fChuPWZ1bmN0aW9uKGUsdCl7cmV0dXJuKG49T2JqZWN0LnNldFByb3RvdHlwZU9mfHx7X19wcm90b19fOltdfWluc3RhbmNlb2YgQXJyYXkmJmZ1bmN0aW9uKGUsdCl7ZS5fX3Byb3RvX189dH18fGZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBvIGluIHQpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsbykmJihlW29dPXRbb10pfSkoZSx0KX0sZnVuY3Rpb24oZSx0KXtmdW5jdGlvbiBvKCl7dGhpcy5jb25zdHJ1Y3Rvcj1lfW4oZSx0KSxlLnByb3RvdHlwZT1udWxsPT09dD9PYmplY3QuY3JlYXRlKHQpOihvLnByb3RvdHlwZT10LnByb3RvdHlwZSxuZXcgbyl9KSxhPXRoaXMmJnRoaXMuX19kZWNvcmF0ZXx8ZnVuY3Rpb24oZSx0LG8sbil7dmFyIGksYT1hcmd1bWVudHMubGVuZ3RoLHI9YTwzP3Q6bnVsbD09PW4/bj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHQsbyk6bjtpZihcIm9iamVjdFwiPT10eXBlb2YgUmVmbGVjdCYmXCJmdW5jdGlvblwiPT10eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSlyPVJlZmxlY3QuZGVjb3JhdGUoZSx0LG8sbik7ZWxzZSBmb3IodmFyIHM9ZS5sZW5ndGgtMTswPD1zO3MtLSkoaT1lW3NdKSYmKHI9KGE8Mz9pKHIpOjM8YT9pKHQsbyxyKTppKHQsbykpfHxyKTtyZXR1cm4gMzxhJiZyJiZPYmplY3QuZGVmaW5lUHJvcGVydHkodCxvLHIpLHJ9O09iamVjdC5kZWZpbmVQcm9wZXJ0eShvLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciByLHM9ZShcIkFwcENvbW1vblwiKSxjPWUoXCJDQ1Rvb2xcIiksbD1lKFwiQmFzZVNka1wiKSxwPWUoXCJQbGF0Zm9ybUZ1blwiKSxkPWUoXCJVc2VyVm9cIiksdT1lKFwiTGlzdGVuSURcIiksZj1lKFwiTm90aWZpZXJcIiksaD1lKFwiQ2ZnXCIpLG09ZShcIkFJU3RhdGVcIikseT1lKFwiTW9kZWxNYW5hZ2VcIiksZz1lKFwiV2FyQ2hlc3NNYW5hZ2VcIiksXz1lKFwicG9wXCIpLHY9Y2MuX2RlY29yYXRvcix0PXYuY2NjbGFzcyxlPXYucHJvcGVydHksdj12Lm1lbnUsdj0ocj1fLmRlZmF1bHQsaShDLHIpLEMucHJvdG90eXBlLm9uQnV0dG9uPWZ1bmN0aW9uKGUsdCl7dmFyIGE9dGhpcztzd2l0Y2goZSYmYy5DQ1Rvb2wuQXVkaW8uUGxheWVyKFwiQ2xpY2tcIiksdCl7Y2FzZVwiQ2xvc2VcIjpzLmRlZmF1bHQuR1NjZW5lLnNldFBhdXNlKC0xKSx0aGlzLnBkYXRhLmNhbGwmJnRoaXMucGRhdGEuY2FsbCgpLHRoaXMuY2xvc2UoKTticmVhaztjYXNlXCJWaWRlb0dldFwiOnRoaXMub3BlblZpZGVvKGZ1bmN0aW9uKCl7YS52aWRlb0dldEZ1bigpfSk7YnJlYWs7Y2FzZVwiQmFja091dFJldml2ZVwiOnMuZGVmYXVsdC5NYXBDbHIubW9kZWxNYW5hZ2UubXlNb2RlbC5HYW1lRW5kKCksdGhpcy5jbG9zZSgpO2JyZWFrO2Nhc2VcIlZpZGVvUmV2aXZlXCI6cy5kZWZhdWx0LkdTY2VuZS5fR2FtZU1vZGVsPT15LkdBTUVfTU9ERUwuRklTSF9NT0RFTD9wLlBsYXRmb3JtRnVuLlNlbmRFdmVudChzLmRlZmF1bHQuR1NjZW5lLmdldE1vZGVTdHIoKStcInN1cnZpdmVfY2xpY2tcIik6cC5QbGF0Zm9ybUZ1bi5TZW5kRXZlbnQocy5kZWZhdWx0LkdTY2VuZS5nZXRNb2RlU3RyKCkrXCJjaWxja19yZWJ1aWxkZG9vclwiKSx0aGlzLm9wZW5WaWRlbyhmdW5jdGlvbigpe3MuZGVmYXVsdC5HU2NlbmUuX0dhbWVNb2RlbD09eS5HQU1FX01PREVMLkZJU0hfTU9ERUw/cy5kZWZhdWx0Lk1hcENsci5tb2RlbE1hbmFnZS5teU1vZGVsLkdhbWVSZXZpdmUoKToocy5kZWZhdWx0LkdTY2VuZS5wbGF5ZXIubXlEb29yLnNldExpZmUoMWU2KSxzLmRlZmF1bHQuR1NjZW5lLnBsYXllci5teURvb3IudXBBdHRyaWJ1dGUoKSksYS5jbG9zZSgpfSxmdW5jdGlvbigpe30pO2JyZWFrO2Nhc2VcIlZpZGVvS3VhaURpXCI6dGhpcy5vcGVuVmlkZW8oZnVuY3Rpb24oKXtzLmRlZmF1bHQuR1NjZW5lLnBsYXllci5zZXRDb2luKDFlMyksYy5DQ1Rvb2wuVUkuc2hvd0N1cnJlbmN5VGlwcyhcIkZpc2ggY29pblwiLDFlMykscy5kZWZhdWx0LkdTY2VuZS5wbGF5ZXIuc2V0UG93ZXIoNTAwKSxzLmRlZmF1bHQuTWFwQ2xyLnNjaGVkdWxlT25jZShmdW5jdGlvbigpe2MuQ0NUb29sLlVJLnNob3dDdXJyZW5jeVRpcHMoXCJlbmVyZ3lcIiw1MDApfSwuNSksYS5wZGF0YS5jYWxsJiZhLnBkYXRhLmNhbGwoITApLGEuY2xvc2UoKX0pLHAuUGxhdGZvcm1GdW4uU2VuZEV2ZW50KHMuZGVmYXVsdC5HU2NlbmUuZ2V0TW9kZVN0cigpK1wiZXhwcmVzc19nZXRcIik7YnJlYWs7Y2FzZVwiU3luY1FSQ29kZVwiOmlmKHMuZGVmYXVsdC5NYXBDbHIubW9kZWxNYW5hZ2UubXlNb2RlbC5kYXRhLmlzU3luY1FSQ29kZSlyZXR1cm4gdGhpcy5ub2RlQXJyWzJdLnBhcmVudC5hY3RpdmU9ITEsYy5DQ1Rvb2wuVUkuU2hvd1RvYXN0KFwi5YGa5Lq65LiN6IO95aSq6LSq5b+D77yBXCIpO3RoaXMubm9kZUFyclsxXS5hY3RpdmU9ITEsdGhpcy5ub2RlQXJyWzBdLmFjdGl2ZT0hMCxjYy50d2Vlbih0aGlzLm5vZGVBcnJbMF0uY2hpbGRyZW5bMF0pLnRvKC41LHt4OjU4fSkudG8oLjUse3g6LTU4fSkuY2FsbChmdW5jdGlvbigpe2Eubm9kZUFyclsyXS5wYXJlbnQuYWN0aXZlPSExO3ZhciBlPXMuZGVmYXVsdC5HZXRSYW5kb21OdW0oMTUsMjUpO3MuZGVmYXVsdC5HU2NlbmUucGxheWVyLnNldENvaW4oZSksYy5DQ1Rvb2wuVUkuU2hvd1RvYXN0KGNjLmpzLmZvcm1hdFN0cihcIuS9oOefpemBk+W+l+WkquWkmuS6hu+8jOe7meS9oCVk6YeR5biB5ZCnXCIsZSkpLHMuZGVmYXVsdC5NYXBDbHIubW9kZWxNYW5hZ2UubXlNb2RlbC5kYXRhLmlzU3luY1FSQ29kZT0hMH0pLnN0YXJ0KCk7YnJlYWs7Y2FzZVwiVmlkZW9IZWxwZGV2ZWxvcG1lbnRcIjp0aGlzLm9wZW5WaWRlbyhmdW5jdGlvbigpe2QuVXNlclZvLlNldEZpc2goMzAwKSxjLkNDVG9vbC5VSS5zaG93Q3VycmVuY3lUaXBzKFwiZmlzaFwiLDMwMCksZC5Vc2VyVm8uZGF0YS5kYWlseURhdGEuSGVscGRldmVsb3BtZW50TnVtKyssZC5Vc2VyVm8uU2F2ZURhdGEoKTt2YXIgZT1kLlVzZXJWby5kYXRhLmRhaWx5RGF0YS5IZWxwZGV2ZWxvcG1lbnROdW0sdD1hLm5vZGVBcnJbMF0uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTt0LnNldEFuaW1hdGlvbigwLFwiMFwiKzIqZSwhMSksYS51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCksYS5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKXt0LnNldEFuaW1hdGlvbigwLFwiMFwiKygyKmUrMSksITApfSwwPD1bMiw0XS5pbmRleE9mKDIqZSk/NC41OjYuNiksYS5ub2RlQXJyWzFdLmFjdGl2ZT1kLlVzZXJWby5kYXRhLmRhaWx5RGF0YS5IZWxwZGV2ZWxvcG1lbnROdW08MyxhLmxhYmVsQXJyWzBdLnN0cmluZz1cIu+8iFwiK2UrXCIvM++8iVwiLHAuUGxhdGZvcm1GdW4uU2VuZEV2ZW50KFwiYXNzaXN0X1wiK2UpfSk7YnJlYWs7Y2FzZVwiVmlkZW9HaXZlQm9zc0hvbmdCYW9cIjp2YXIgbj1zLmRlZmF1bHQuTWFwQ2xyLm1vbnN0ZXJMaXN0WzBdO3AuUGxhdGZvcm1GdW4ubG9hZFJld2FyZGVkVmlkZW9BZCh7b25WaWRlb1N1Y2Nlc3M6ZnVuY3Rpb24oKXtpZihuLl9pc0FjdGl2ZSl7dmFyIGUsdDtmb3IodCBpbiBzLmRlZmF1bHQuTWFwQ2xyLnJvbGVMaXN0KXt2YXIgbz1zLmRlZmF1bHQuTWFwQ2xyLnJvbGVMaXN0W3RdO28uaXNBaSYmMDxvLl9saWZlJiYoZT1vLnJvbGVJRCk7YnJlYWt9bi5teUZTTS5zZXRBSVN0YXRlKG0uU3RhdGVUeXBlLklkbGUpLG4uX2lzQWN0aXZlPSExLG4uc2NoZWR1bGVPbmNlKGZ1bmN0aW9uKCl7bi5faXNBY3RpdmU9ITAsbi5teUZTTS5hdHRhY2tSb2xlQnlJZChlKX0sMS4yKSxzLmRlZmF1bHQuTWFwQ2xyLm5ld0RpYWxvZ3VlKG4ubm9kZSxjYy52MigyMCwxNTApLFwi5oKf5oCn5LiN6ZSZ77yB5pyJ6ZKx6YCU77yBXCIsMykscy5kZWZhdWx0LmRhdGEuaXNJbnZpc2libGU9ITAscy5kZWZhdWx0Lk1hcENsci5teU1hcC5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKXtzLmRlZmF1bHQuZGF0YS5pc0ludmlzaWJsZT0hMX0sMzApfXMuZGVmYXVsdC5HU2NlbmUuc2V0UGF1c2UoLTEpLGEuY2xvc2UoKX0sb25TaG93Q2xvc2U6ZnVuY3Rpb24oKXtzLmRlZmF1bHQuTWFwQ2xyLm5ld0RpYWxvZ3VlKG4ubm9kZSxjYy52MigyMCwxNTApLFwi5ZGG5aS05ZGG6ISR6L+Y5pWi5pG46bG877yBXCIsMyksbi5za2lsbE1hbmFnZS51c2VTa2lsbChuLnNraWxsTWFuYWdlLmdldFR5cGUoMSkpLGEuY2xvc2UoKX19KSxwLlBsYXRmb3JtRnVuLlNlbmRFdmVudChzLmRlZmF1bHQuR1NjZW5lLmdldE1vZGVTdHIoKStcInJlZHBhY2tldF9jbGlja1wiKTticmVhaztjYXNlXCJHZXRVSUt1YWlEaUd1aVwiOiFmdW5jdGlvbigpe3ZhciBlPSthLmxhYmVsQXJyWzBdLnN0cmluZyx0PXMuZGVmYXVsdC5DT05GSUdfSU5GTy5leHByZXNza2V5LmluZGV4T2YoZSk7aWYodDwwKXJldHVybiBwLlBsYXRmb3JtRnVuLlNlbmRFdmVudChcImVnZ19leHByZXNzX2ZhaWxfY2xpY2tcIiksYy5DQ1Rvb2wuVUkuU2hvd1RvYXN0KFwi5Y+W5Lu256CB6ZSZ6K+vXCIpO2lmKDA8PWQuVXNlclZvLmRhdGEuS3VhaURpR3VpX0dldC5pbmRleE9mKGUpKXJldHVybiBjLkNDVG9vbC5VSS5TaG93VG9hc3QoXCLlgZrkurrkuI3og73lpKrotKrlv4PvvIFcIik7ZC5Vc2VyVm8uZGF0YS5LdWFpRGlHdWlfR2V0LnB1c2goZSksZC5Vc2VyVm8uU2F2ZURhdGEoKTt2YXIgbyxuPXMuZGVmYXVsdC5DT05GSUdfSU5GTy5leHByZXNzcGFja2FnZVt0XS5zcGxpdChcIi1cIik7Zm9yKG8gaW4gbil7dmFyIGk9bltvXS5zcGxpdChcIixcIik7IWZ1bmN0aW9uKGUsdCxvKXtzd2l0Y2goY2MubG9nKGUsdCxvKSxlKXtjYXNlXCJCdWlsZGluZzFcIjp2YXIgbj1oLkNmZ1tlXS5nZXQodCk7ZC5Vc2VyVm8uYWRkQnVpbGRpbmdOdW1CeUlkKG4uaWQsbyksYy5DQ1Rvb2wuVUkuU2hvd1RvYXN0KFwi5Y+W5Lu25oiQ5Yqf77yB6I635b6XXCIrbi5uYW1lK1wieFwiK28pO2JyZWFrO2Nhc2VcIlJvbGVNYW5cIjpuPWguQ2ZnW2VdLmdldCh0KTtkLlVzZXJWby5zZXRTa2luKG4uaWQpLGQuVXNlclZvLnVzZVNraW49bi5pZCxjLkNDVG9vbC5VSS5TaG93VG9hc3QoXCLlj5bku7bmiJDlip/vvIHojrflvpdcIituLm5hbWUpfX0oaVswXSwraVsxXSwraVsyXSl9cC5QbGF0Zm9ybUZ1bi5TZW5kRXZlbnQoXCJlZ2dfZXhwcmVzc19zdWNjZWVkX2NsaWNrXCIpfSgpO2JyZWFrO2Nhc2VcIlZpZGVvVUlLdWFpRGlHdWlUaXBzXCI6IWZ1bmN0aW9uKCl7dmFyIG87cC5QbGF0Zm9ybUZ1bi5TZW5kRXZlbnQoXCJlZ2dfZXhwcmVzc19mb3JnZXRrZXlfY2xpY2tcIik7dmFyIGUsbj1bXTtmb3IoZSBpbiBzLmRlZmF1bHQuQ09ORklHX0lORk8uZXhwcmVzc2tleSl7dmFyIHQ9cy5kZWZhdWx0LkNPTkZJR19JTkZPLmV4cHJlc3NrZXlbZV07aWYobi5wdXNoKHQpLGQuVXNlclZvLmRhdGEuS3VhaURpR3VpX1RpcHMuaW5kZXhPZih0KTwwKXtvPXQ7YnJlYWt9fW8mJmEub3BlblZpZGVvKGZ1bmN0aW9uKCl7YS5ub2RlQXJyWzJdLmFjdGl2ZT0hMCxkLlVzZXJWby5kYXRhLkt1YWlEaUd1aV9UaXBzLnB1c2gobyksZC5Vc2VyVm8uU2F2ZURhdGEoKTt2YXIgZSx0PVwiXCI7Zm9yKGUgaW4gbil0Kz1uW2VdK1wiICAgICAgIFwiO2EubGFiZWxBcnJbMV0uc3RyaW5nPXR9KX0oKTticmVhaztjYXNlXCJWaWRlb0dldFl1bk5hbkJHTVwiOnAuUGxhdGZvcm1GdW4uU2VuZEV2ZW50KFwiZWdnX2NoYW5nZWJnbVwiKSx0aGlzLm9wZW5WaWRlbyhmdW5jdGlvbigpe3MuZGVmYXVsdC5kYXRhLll1bk5hbkJHTT0hMCxhLmNsb3NlKCl9KTticmVhaztjYXNlXCJWaWRlb0dpdmVCb3NzSGFuZFwiOnRoaXMub3BlblZpZGVvKGZ1bmN0aW9uKCl7Zi5Ob3RpZmllci5zZW5kKHUuTGlzdGVuSUQuRmlnaHRfR2V0SGFuZFN1Y2Nlc3MsYS5wZGF0YSksYS5jbG9zZSgpfSk7YnJlYWs7Y2FzZVwiVmlkZW9HZXRIaWdoRmlzaFwiOnAuUGxhdGZvcm1GdW4uU2VuZEV2ZW50KHMuZGVmYXVsdC5HU2NlbmUuZ2V0TW9kZVN0cigpK1wic3VwZXJmaXNoX2NsaWNrXCIpLHRoaXMub3BlblZpZGVvKGZ1bmN0aW9uKCl7Yy5DQ1Rvb2wuQXVkaW8uUGxheWVyKFwibTRfZmluaXNoXCIpLGEubm9kZUFyclsxXS5hY3RpdmU9ITE7dmFyIG89cy5kZWZhdWx0Lk1hcENsci5tb2RlbE1hbmFnZS5teU1vZGVsLldDTWFuYWdlO3MuZGVmYXVsdC5NYXBDbHIubW9kZWxNYW5hZ2UubXlNb2RlbC5nZXRIaWdoRmlzaChmdW5jdGlvbih0KXtjYy5yZXNvdXJjZXMubG9hZChcImltZy9tb2RlbF80L1wiK3QucGFyYW1ldGVyWzFdLGNjLlNwcml0ZUZyYW1lLGZ1bmN0aW9uKGUsdCl7YS5ub2RlQXJyWzBdLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lPXR9KSxjYy50d2VlbihhLm5vZGUpLmNhbGwoZnVuY3Rpb24oKXthLmFtLnBsYXkoXCJIaWdoRmlzaF9vcGVuXCIpfSkuZGVsYXkoLjYpLmNhbGwoZnVuY3Rpb24oKXthLmFtLnBsYXkoXCJIaWdoRmlzaF9vcGVuSWRsZVwiKX0pLmRlbGF5KDEpLmNhbGwoZnVuY3Rpb24oKXt2YXIgZT1vLmdldEVtcHR5VGFnKGcuUE9JTlRfVFlQRS5CQVRUTEVGSUVMRCk7cy5kZWZhdWx0Lk1hcENsci5tb2RlbE1hbmFnZS5teU1vZGVsLldDTWFuYWdlLmdldEJhdHRlcnkodCxlLmFyclswXSxjYy52MigwLDEwMCkpfSkudG8oLjEse29wYWNpdHk6MH0pLmNhbGwoZnVuY3Rpb24oKXthLmNsb3NlKCl9KS5zdGFydCgpfSl9KX19LEMucHJvdG90eXBlLm9wZW5WaWRlbz1mdW5jdGlvbihlLHQpe3AuUGxhdGZvcm1GdW4ubG9hZFJld2FyZGVkVmlkZW9BZCh7b25WaWRlb1N1Y2Nlc3M6ZnVuY3Rpb24oKXtlKCkscy5kZWZhdWx0LkdTY2VuZS5zZXRQYXVzZSgtMSl9LGxvYWRTdWNjZXNzOmZ1bmN0aW9uKCl7dCYmdCgpfX0pfSxDLnByb3RvdHlwZS5sb25nVGFwRXZlbnQ9ZnVuY3Rpb24oKXtwLlBsYXRmb3JtRnVuLnNob3dJbnRlcnN0aXRpYWxBZCgpLHRoaXMubm9kZUFyclsyXS5jaGlsZHJlblswXS5hY3RpdmU9ITAsdGhpcy5ub2RlQXJyWzFdLmFjdGl2ZT0hMH0sQy5wcm90b3R5cGUucmVnaXN0ZXJMb25nVG91Y2g9ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcztlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULGZ1bmN0aW9uKCl7dC5faXNQcmVzcz0hMCx0Ll9wcmVzc1RpbWU9MH0sdGhpcyksZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsZnVuY3Rpb24oKXt0Ll9pc1ByZXNzPSExLHQuX3ByZXNzVGltZT0wfSx0aGlzKSxlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCxmdW5jdGlvbigpe3QuX2lzUHJlc3M9ITEsdC5fcHJlc3NUaW1lPTB9LHRoaXMpfSxDLnByb3RvdHlwZS51cGRhdGU9ZnVuY3Rpb24oZSl7dGhpcy5faXNQcmVzcyYmKHRoaXMuX3ByZXNzVGltZSs9ZSwzPD10aGlzLl9wcmVzc1RpbWUmJih0aGlzLl9pc1ByZXNzPSExLHRoaXMubG9uZ1RhcEV2ZW50KCksdGhpcy5fcHJlc3NUaW1lPTApKX0sYShbZShjYy5BbmltYXRpb24pXSxDLnByb3RvdHlwZSxcImFtXCIsdm9pZCAwKSxhKFt0LHYoXCJwb3AvcG9wX0dhbWVHaWZ0QmFnXCIpXSxDKSk7ZnVuY3Rpb24gQygpe3ZhciBhPW51bGwhPT1yJiZyLmFwcGx5KHRoaXMsYXJndW1lbnRzKXx8dGhpcztyZXR1cm4gYS5hbT1udWxsLGEuX2lzUGFja2FnZT0hMSxhLmluaXRGdW49e3BvcF9HYW1lUmV2aXZlX00yOmZ1bmN0aW9uKCl7YS5faXNQYWNrYWdlPSExLHMuZGVmYXVsdC5HU2NlbmUuc2V0UGF1c2UoKSxwLlBsYXRmb3JtRnVuLlNlbmRFdmVudChzLmRlZmF1bHQuR1NjZW5lLmdldE1vZGVTdHIoKStcInNob3dfcmVidWlsZGRvb3JcIikscC5QbGF0Zm9ybUZ1bi52aWJyYXRlKDEpfSxwb3BfR2FtZUt1YWlkaTpmdW5jdGlvbigpe3AuUGxhdGZvcm1GdW4uU2VuZEV2ZW50KHMuZGVmYXVsdC5HU2NlbmUuZ2V0TW9kZVN0cigpK1wiZXhwcmVzc19zaG93XCIpLHMuZGVmYXVsdC5HU2NlbmUuc2V0UGF1c2UoKSxhLl9pc1BhY2thZ2U9ITAsYS5ub2RlQXJyWzBdLmFjdGl2ZT0hMSxhLm5vZGVBcnJbMV0uYWN0aXZlPSExLGEubm9kZUFyclsyXS5jaGlsZHJlblswXS5hY3RpdmU9ITEsYS5yZWdpc3RlckxvbmdUb3VjaChhLm5vZGVBcnJbMl0ucGFyZW50LmNoaWxkcmVuWzBdKSxzLmRlZmF1bHQuUEY9PWwuR0FNRVBGLkFEUl9YTSYmcC5QbGF0Zm9ybUZ1bi5zaG93QmFubmVyQWQoKX0scG9wX1VJSGVscGRldmVsb3BtZW50OmZ1bmN0aW9uKCl7cC5QbGF0Zm9ybUZ1bi5TZW5kRXZlbnQoXCJhc3Npc3Rfc2hvd1wiKTt2YXIgZT1kLlVzZXJWby5kYXRhLmRhaWx5RGF0YS5IZWxwZGV2ZWxvcG1lbnROdW07YS5ub2RlQXJyWzBdLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsXCIwXCIrKDIqZSsxKSwhMCksYS5ub2RlQXJyWzFdLmFjdGl2ZT1kLlVzZXJWby5kYXRhLmRhaWx5RGF0YS5IZWxwZGV2ZWxvcG1lbnROdW08MyxhLmxhYmVsQXJyWzBdLnN0cmluZz1cIu+8iFwiK2UrXCIvM++8iVwifSxwb3BfR2l2ZUJvc3NIb25nQmFvOmZ1bmN0aW9uKCl7cC5QbGF0Zm9ybUZ1bi5TZW5kRXZlbnQocy5kZWZhdWx0LkdTY2VuZS5nZXRNb2RlU3RyKCkrXCJyZWRwYWNrZXRfc2hvd1wiKSxzLmRlZmF1bHQuR1NjZW5lLnNldFBhdXNlKCl9LHBvcF9VSU1vZGVsVm90ZTpmdW5jdGlvbigpe2QuVXNlclZvLmRhdGEuZGFpbHlEYXRhLk1vZGVsVm90ZXx8KGQuVXNlclZvLmRhdGEuZGFpbHlEYXRhLk1vZGVsVm90ZT1bXSxkLlVzZXJWby5TYXZlRGF0YSgpKTt2YXIgbj0wO3AuUGxhdGZvcm1GdW4uU2VuZEV2ZW50KFwidm90ZV9zaG93XCIpO3ZhciBpPWZ1bmN0aW9uKCl7Zm9yKHZhciBlIGluIGEubm9kZUFyclswXS5jaGlsZHJlbikhZnVuY3Rpb24oZSl7dmFyIHQ9K2Usbz1hLm5vZGVBcnJbMF0uY2hpbGRyZW5bZV0uY2hpbGRyZW5bMV0sZT0wPD1kLlVzZXJWby5kYXRhLmRhaWx5RGF0YS5Nb2RlbFZvdGUuaW5kZXhPZih0KTtjYy5sb2coZSksby5jaGlsZHJlblswXS5hY3RpdmU9ZSxvLmNoaWxkcmVuWzFdLmFjdGl2ZT0hZSxlfHwwIT1ufHxvLmNoaWxkcmVuWzFdLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCxmdW5jdGlvbigpe2Eub3BlblZpZGVvKGZ1bmN0aW9uKCl7ZC5Vc2VyVm8uU2V0RmlzaCgxMDApLGMuQ0NUb29sLlVJLnNob3dDdXJyZW5jeVRpcHMoXCJmaXNoXCIsMTAwKSxkLlVzZXJWby5kYXRhLmRhaWx5RGF0YS5Nb2RlbFZvdGUucHVzaCh0KSxkLlVzZXJWby5TYXZlRGF0YSgpLGkoKSxwLlBsYXRmb3JtRnVuLlNlbmRFdmVudChcInZvdGVfY2xpY2tfXCIrKDErdCkpfSl9LGEpfShlKTtuKyt9O2koKX0scG9wX1VJS3VhaURpR3VpOmZ1bmN0aW9uKCl7cC5QbGF0Zm9ybUZ1bi5TZW5kRXZlbnQoXCJlZ2dfZXhwcmVzc19zaG93XCIpLGEucGRhdGEuY29kZUFycj1bXSxhLmxhYmVsQXJyWzBdLnN0cmluZz1cIlwiLGEubm9kZUFyclswXS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsZnVuY3Rpb24oKXtjLkNDVG9vbC5BdWRpby5QbGF5ZXIoXCJDbGlja1wiKSxjYy50d2VlbihhLm5vZGVBcnJbMF0pLnRvKC4xLHtzY2FsZToxLjF9KS50byguMSx7c2NhbGU6MX0pLnN0YXJ0KCksYS5sYWJlbEFyclswXS5zdHJpbmc9XCJcIn0sYSk7Zm9yKHZhciBlPTA7ZTw5O2UrKylhLm5vZGVBcnJbMV0uY2hpbGRyZW5bZV18fGNjLmluc3RhbnRpYXRlKGEubm9kZUFyclsxXS5jaGlsZHJlblswXSkuc2V0UGFyZW50KGEubm9kZUFyclsxXSk7Zm9yKGU9MDtlPDk7ZSsrKSFmdW5jdGlvbihlKXt2YXIgdD1hLm5vZGVBcnJbMV0uY2hpbGRyZW5bZV0sbz1lKzE7dC5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz1vK1wiXCIsdC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsZnVuY3Rpb24oKXtjLkNDVG9vbC5BdWRpby5QbGF5ZXIoXCJDbGlja1wiKSxjYy50d2Vlbih0KS50byguMSx7c2NhbGU6MS4xfSkudG8oLjEse3NjYWxlOjF9KS5zdGFydCgpLDY8PWEubGFiZWxBcnJbMF0uc3RyaW5nLmxlbmd0aHx8KGEubGFiZWxBcnJbMF0uc3RyaW5nKz1cIlwiK28pfSxhKX0oZSk7dmFyIHQ9W107Zm9yKGUgaW4gcy5kZWZhdWx0LkNPTkZJR19JTkZPLmV4cHJlc3NrZXkpe3ZhciBvPXMuZGVmYXVsdC5DT05GSUdfSU5GTy5leHByZXNza2V5W2VdOzA8PWQuVXNlclZvLmRhdGEuS3VhaURpR3VpX1RpcHMuaW5kZXhPZihvKSYmdC5wdXNoKG8pfWlmKGEubm9kZUFyclsyXS5hY3RpdmU9MDx0Lmxlbmd0aCwwPHQubGVuZ3RoKXt2YXIgbj1cIlwiO2ZvcihlIGluIHQpbis9dFtlXStcIiAgICAgICBcIjthLmxhYmVsQXJyWzFdLnN0cmluZz1ufX0scG9wX000X0hpZ2hGaXNoOmZ1bmN0aW9uKCl7cC5QbGF0Zm9ybUZ1bi5TZW5kRXZlbnQocy5kZWZhdWx0LkdTY2VuZS5nZXRNb2RlU3RyKCkrXCJzdXBlcmZpc2hfc2hvd1wiKX0scG9wX0dhbWVSZXZpdmVfTTQ6ZnVuY3Rpb24oKXtwLlBsYXRmb3JtRnVuLlNlbmRFdmVudChzLmRlZmF1bHQuR1NjZW5lLmdldE1vZGVTdHIoKStcInN1cnZpdmVfc2hvd1wiKX0scG9wX000X0NvbmNlYWxGaXNoOmZ1bmN0aW9uKCl7cC5QbGF0Zm9ybUZ1bi5TZW5kRXZlbnQocy5kZWZhdWx0LkdTY2VuZS5nZXRNb2RlU3RyKCkrXCJoaWRlbmZpc2hfc2hvd1wiKTt2YXIgZSx0PWEucGRhdGE7Zm9yKGUgaW4gYS5ub2RlQXJyKSFmdW5jdGlvbihvKXtjYy5yZXNvdXJjZXMubG9hZChcImltZy9tb2RlbF80L1wiK3QucGFyYW1ldGVyWzFdLGNjLlNwcml0ZUZyYW1lLGZ1bmN0aW9uKGUsdCl7YS5ub2RlQXJyW29dLmNoaWxkcmVuWzFdLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lPXR9KX0oZSl9LHBvcF9NNF9VbmxvY2tDaG9wcGluZ0Jsb2NrOmZ1bmN0aW9uKCl7cC5QbGF0Zm9ybUZ1bi5TZW5kRXZlbnQocy5kZWZhdWx0LkdTY2VuZS5nZXRNb2RlU3RyKCkrXCJtb3JlYm9hcmRfc2hvd1wiKSxhLnZpZGVvR2V0RnVuPWZ1bmN0aW9uKCl7dmFyIGU9cy5kZWZhdWx0Lk1hcENsci5tb2RlbE1hbmFnZS5teU1vZGVsO3AuUGxhdGZvcm1GdW4uU2VuZEV2ZW50KHMuZGVmYXVsdC5HU2NlbmUuZ2V0TW9kZVN0cigpK1wibW9yZWJvYXJkX2NsaWNrX1wiKyhlLm15Q2hvcHBpbmdCbG9ja051bSsyKSksZS5zZXRDaG9wcGluZ0Jsb2NrKGUubXlDaG9wcGluZ0Jsb2NrTnVtKzIpLGEuY2xvc2UoKX19LHBvcF9NNF9HbG9kQ2hvcHBpbmdCbG9jazpmdW5jdGlvbigpe3AuUGxhdGZvcm1GdW4uU2VuZEV2ZW50KHMuZGVmYXVsdC5HU2NlbmUuZ2V0TW9kZVN0cigpK1wiZ29sZGJvYXJkX3Nob3dcIiksYS52aWRlb0dldEZ1bj1mdW5jdGlvbigpe3AuUGxhdGZvcm1GdW4uU2VuZEV2ZW50KHMuZGVmYXVsdC5HU2NlbmUuZ2V0TW9kZVN0cigpK1wiZ29sZGJvYXJkX2NsaWNrXCIpLHMuZGVmYXVsdC5NYXBDbHIubW9kZWxNYW5hZ2UubXlNb2RlbC5zZXRHbG9kQ2hvcHBpbmdCbG9jaygpLGEuY2xvc2UoKX19fSxhLnZpZGVvR2V0RnVuPWZ1bmN0aW9uKCl7fSxhLmNsb3NlRnVuPXtwb3BfR2l2ZUJvc3NIb25nQmFvOmZ1bmN0aW9uKCl7dmFyIGU9cy5kZWZhdWx0Lk1hcENsci5tb25zdGVyTGlzdFswXTtzLmRlZmF1bHQuTWFwQ2xyLm5ld0RpYWxvZ3VlKGUubm9kZSxjYy52MigyMCwxNTApLFwi5ZGG5aS05ZGG6ISR6L+Y5pWi5pG46bG877yBXCIsMyksZS5za2lsbE1hbmFnZS51c2VTa2lsbChlLnNraWxsTWFuYWdlLmdldFR5cGUoMSkpfX0sYS5faXNQcmVzcz0hMSxhLl9wcmVzc1RpbWU9MCxhfW8uZGVmYXVsdD12Il19
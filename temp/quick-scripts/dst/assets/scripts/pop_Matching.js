
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/pop_Matching.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6346bemS3JHqJ0CoayswfE/', 'pop_Matching');
// scripts/pop_Matching.js

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
    l = e("AppCommon"),
    s = e("CCTool"),
    c = e("BaseSdk"),
    p = e("PlatformFun"),
    d = e("UserVo"),
    u = e("Cfg"),
    f = e("GameScene"),
    h = e("ModelManage"),
    m = e("pop"),
    t = cc._decorator,
    e = t.ccclass,
    e = (t.property, r = m["default"], i(y, r), y.prototype.start = function () {
  l["default"].PF == c.GAMEPF.ADR_XM && p.PlatformFun.showBannerAd();
}, y.prototype.initBoss = function () {
  this._bossInfo = this.getAiBoss();
  var o = this.nodeArr[0].parent.getChildByName("vs_tx"),
      e = u.Cfg.Ghost1.get(this._bossInfo.attributes);
  e && cc.resources.load("img/viewUi/role" + e.icon, cc.SpriteFrame, function (e, t) {
    o && (o.children[0].getComponent(cc.Sprite).spriteFrame = t);
  });
}, y.prototype.getAiList = function () {
  l["default"].data.RandomNameLen || (l["default"].data.RandomNameLen = Object.keys(u.Cfg.RandomName.getAll()).length);
  var e,
      t = u.Cfg.Man.getAll(),
      o = [];

  for (e in t) {
    0 <= t[e].model.indexOf(l["default"].GScene._GameModel) && o.push(t[e].id);
  }

  return o;
}, y.prototype.getAiBoss = function () {
  var t = [];
  return u.Cfg.Ghost.forEach(function (e) {
    0 <= e.model.indexOf(l["default"].GScene._GameModel) && t.push({
      v: e,
      w: e.born
    });
  }), l["default"].weightGetValue(t).v;
}, y.prototype.startMatching = function () {
  var s = this;
  this.labelArr[0].string = l["default"].strReplace(this.matchingData.title, 0);
  var c = 10;
  cc.resources.load("prefab/pop/MatchingItem", cc.Prefab, function (e, r) {
    for (var t = 0; t < s.matchingData.playerNum; t++) {
      !function (e) {
        var t = cc.instantiate(r);
        t.setParent(l["default"].GScene._GameModel === h.GAME_MODEL.BOSS_MODEL && 0 == e ? s.nodeArr[1] : s.nodeArr[0]);
        var o = l["default"].getRandomSDiff(1, l["default"].data.RandomNameLen, s.matchingData.playerNum),
            n = s.playerIndex == e,
            i = n ? s._skinId : l["default"].GetArrTarge(u.Cfg.RoleMan.keys),
            a = {
          index: e,
          skinID: n ? s._skinId : i,
          img: "role" + i,
          name: n ? "我" : u.Cfg.RandomName.get(o[e]).name,
          isPlayer: n,
          isReady: !1,
          aiData: n || 0 == c ? null : u.Cfg.Man.get(l["default"].data.SetAI || l["default"].GetArrTarge(s.matchingData.aiSetTingList))
        };
        s.list.push(a), s.itemList.push(t), a.isPlayer ? s.joinRoom(a) : (c--, cc.tween(t).delay(l["default"].GetRandomNum(0, 200, !1) / 100).delay(l["default"].GetRandomNum(1, 20) / 10).call(function () {
          s.joinRoom(a);
        }).delay(l["default"].GetRandomNum(1, 20) / 10).call(function () {
          a.isReady = !0, s.setReady(a);
        }).start());
      }(t);
    }
  });
}, y.prototype.joinRoom = function (e) {
  var o = this.itemList[e.index];
  o.children[0].getComponent(cc.Label).string = e.name, cc.resources.load("img/viewUi/" + e.img, cc.SpriteFrame, function (e, t) {
    o.children[1].getComponent(cc.Sprite).spriteFrame = t, o.children[1].active = !0;
  }), e.isPlayer && (l["default"].GScene._GameModel === h.GAME_MODEL.BOSS_MODEL && (o.width = 129, o.height = 120), cc.resources.load("img/viewUi/hyzb_tx _zj", cc.SpriteFrame, function (e, t) {
    o.getComponent(cc.Sprite).spriteFrame = t;
  }));
}, y.prototype.setReady = function (e) {
  this.itemList[e.index].children[2].active = !0, this.checkReady();
}, y.prototype.checkReady = function () {
  for (var e = this, t = 0, o = 0; o < this.list.length; o++) {
    this.list[o].isReady && (t += 1);
  }

  for (var n = 0, o = 0; o < this.list.length; o++) {
    this.list[o].isReady && (this.list[o].isPlayer && l["default"].GScene._GameModel === h.GAME_MODEL.BOSS_MODEL || n++);
  }

  this.labelArr[0].string = l["default"].strReplace(this.matchingData.title, n), t == this.list.length && (this.isReady || (this.isReady = !0, l["default"].MapClr.MatchRoleData = this.list, l["default"].GScene.startGame(), cc.tween(this.node).to(.5, {
    opacity: 0
  }).call(function () {
    e.close();
  }).start()));
}, y.prototype.onButton = function (e, t) {
  switch (e && s.CCTool.Audio.Player("Click"), t) {
    case "Close":
      l["default"].GScene.setGameStart(f.GAME_STATE.Index), this.close();
      break;

    case "Join":
      e.target.active = !1, this.list[this.playerIndex].isReady = !0, this.setReady(this.list[this.playerIndex]), p.PlatformFun.SendEvent(l["default"].GScene.getModeStr() + "level_start");
  }
}, a([e], y));

function y() {
  var n = null !== r && r.apply(this, arguments) || this;
  return n.isReady = !1, n.list = [], n.itemList = [], n._skinId = 0, n._bossInfo = null, n.initFun = {
    pop_Matching: function pop_Matching() {
      n.matchingData = {
        title: "会议准备中（%d/6）",
        playerNum: 6,
        aiSetTingList: n.getAiList()
      }, n.playerIndex = l["default"].GetRandomNum(0, 5), n.initBoss(), n.startMatching(), n._skinId = d.UserVo.useSkin, l["default"].MapClr.AiBossData = n._bossInfo;
    },
    pop_Matching_M2: function pop_Matching_M2() {
      n.matchingData = {
        title: "加班申请（%d/2）",
        playerNum: 2,
        aiSetTingList: n.getAiList()
      };

      for (var e = n.playerIndex = 0; e < n.matchingData.playerNum; e++) {
        var t = n.playerIndex == e,
            o = t ? d.UserVo.useSkin : l["default"].GetArrTarge(u.Cfg.RoleMan.keys),
            t = {
          index: e,
          skinID: o,
          img: "role" + o,
          name: t ? "我" : u.Cfg.RandomName.get(l["default"].GetRandomNum(1, l["default"].data.RandomNameLen)).name,
          isPlayer: t,
          isReady: !1,
          aiData: t ? null : u.Cfg.Man.get(l["default"].data.SetAI || l["default"].GetArrTarge(n.matchingData.aiSetTingList))
        };
        n.list.push(t);
      }

      l["default"].MapClr.MatchRoleData = n.list, s.CCTool.UI.OpenPop("prefab/pop/pop_MatcAM_1v1", {
        call: function call() {
          l["default"].GScene.startGame(), cc.tween(l["default"].MainView.IndexPage).delay(.5).to(.5, {
            opacity: 0
          }).start();
        }
      }, l["default"].MainView.PopBox), n.close();
    },
    pop_Matching_M3: function pop_Matching_M3() {
      n.matchingData = {
        title: "会议准备中（%d/6）",
        playerNum: 7,
        aiSetTingList: n.getAiList()
      }, n.playerIndex = 0, n._skinId = d.UserVo.useBossSkin, n.startMatching();
    }
  }, n;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccG9wX01hdGNoaW5nLmpzIl0sIm5hbWVzIjpbImUiLCJyZXF1aXJlIiwidCIsIm1vZHVsZSIsIm8iLCJleHBvcnRzIiwibiIsImkiLCJfX2V4dGVuZHMiLCJPYmplY3QiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsIkFycmF5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiY29uc3RydWN0b3IiLCJjcmVhdGUiLCJhIiwiX19kZWNvcmF0ZSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInIiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJSZWZsZWN0IiwiZGVjb3JhdGUiLCJzIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImwiLCJjIiwicCIsImQiLCJ1IiwiZiIsImgiLCJtIiwiY2MiLCJfZGVjb3JhdG9yIiwiY2NjbGFzcyIsInByb3BlcnR5IiwieSIsInN0YXJ0IiwiUEYiLCJHQU1FUEYiLCJBRFJfWE0iLCJQbGF0Zm9ybUZ1biIsInNob3dCYW5uZXJBZCIsImluaXRCb3NzIiwiX2Jvc3NJbmZvIiwiZ2V0QWlCb3NzIiwibm9kZUFyciIsInBhcmVudCIsImdldENoaWxkQnlOYW1lIiwiQ2ZnIiwiR2hvc3QxIiwiZ2V0IiwiYXR0cmlidXRlcyIsInJlc291cmNlcyIsImxvYWQiLCJpY29uIiwiU3ByaXRlRnJhbWUiLCJjaGlsZHJlbiIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsInNwcml0ZUZyYW1lIiwiZ2V0QWlMaXN0IiwiZGF0YSIsIlJhbmRvbU5hbWVMZW4iLCJrZXlzIiwiUmFuZG9tTmFtZSIsImdldEFsbCIsIk1hbiIsIm1vZGVsIiwiaW5kZXhPZiIsIkdTY2VuZSIsIl9HYW1lTW9kZWwiLCJwdXNoIiwiaWQiLCJHaG9zdCIsImZvckVhY2giLCJ2IiwidyIsImJvcm4iLCJ3ZWlnaHRHZXRWYWx1ZSIsInN0YXJ0TWF0Y2hpbmciLCJsYWJlbEFyciIsInN0cmluZyIsInN0clJlcGxhY2UiLCJtYXRjaGluZ0RhdGEiLCJ0aXRsZSIsIlByZWZhYiIsInBsYXllck51bSIsImluc3RhbnRpYXRlIiwic2V0UGFyZW50IiwiR0FNRV9NT0RFTCIsIkJPU1NfTU9ERUwiLCJnZXRSYW5kb21TRGlmZiIsInBsYXllckluZGV4IiwiX3NraW5JZCIsIkdldEFyclRhcmdlIiwiUm9sZU1hbiIsImluZGV4Iiwic2tpbklEIiwiaW1nIiwibmFtZSIsImlzUGxheWVyIiwiaXNSZWFkeSIsImFpRGF0YSIsIlNldEFJIiwiYWlTZXRUaW5nTGlzdCIsImxpc3QiLCJpdGVtTGlzdCIsImpvaW5Sb29tIiwidHdlZW4iLCJkZWxheSIsIkdldFJhbmRvbU51bSIsInNldFJlYWR5IiwiTGFiZWwiLCJhY3RpdmUiLCJ3aWR0aCIsImhlaWdodCIsImNoZWNrUmVhZHkiLCJNYXBDbHIiLCJNYXRjaFJvbGVEYXRhIiwic3RhcnRHYW1lIiwibm9kZSIsInRvIiwib3BhY2l0eSIsImNsb3NlIiwib25CdXR0b24iLCJDQ1Rvb2wiLCJBdWRpbyIsIlBsYXllciIsInNldEdhbWVTdGFydCIsIkdBTUVfU1RBVEUiLCJJbmRleCIsInRhcmdldCIsIlNlbmRFdmVudCIsImdldE1vZGVTdHIiLCJhcHBseSIsImluaXRGdW4iLCJwb3BfTWF0Y2hpbmciLCJVc2VyVm8iLCJ1c2VTa2luIiwiQWlCb3NzRGF0YSIsInBvcF9NYXRjaGluZ19NMiIsIlVJIiwiT3BlblBvcCIsIk1haW5WaWV3IiwiSW5kZXhQYWdlIiwiUG9wQm94IiwicG9wX01hdGNoaW5nX00zIiwidXNlQm9zc1NraW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBQyxHQUFDQyxPQUFOO0FBQ0EsSUFBSUMsQ0FBQyxHQUFDQyxNQUFOO0FBQ0EsSUFBSUMsQ0FBQyxHQUFDQyxPQUFOO0FBQ0E7O0FBQWEsSUFBSUMsRUFBSjtBQUFBLElBQU1DLENBQUMsR0FBQyxVQUFNLFNBQUtDLFNBQVgsS0FBdUJGLEVBQUMsR0FBQyxXQUFTTixDQUFULEVBQVdFLENBQVgsRUFBYTtBQUFDLFNBQU0sQ0FBQ0ksRUFBQyxHQUFDRyxNQUFNLENBQUNDLGNBQVAsSUFBdUI7QUFBQ0MsSUFBQUEsU0FBUyxFQUFDO0FBQVgsZUFBeUJDLEtBQXpCLElBQWdDLFVBQVNaLENBQVQsRUFBV0UsQ0FBWCxFQUFhO0FBQUNGLElBQUFBLENBQUMsQ0FBQ1csU0FBRixHQUFZVCxDQUFaO0FBQWMsR0FBbkYsSUFBcUYsVUFBU0YsQ0FBVCxFQUFXRSxDQUFYLEVBQWE7QUFBQyxTQUFJLElBQUlFLENBQVIsSUFBYUYsQ0FBYjtBQUFlTyxNQUFBQSxNQUFNLENBQUNJLFNBQVAsQ0FBaUJDLGNBQWpCLENBQWdDQyxJQUFoQyxDQUFxQ2IsQ0FBckMsRUFBdUNFLENBQXZDLE1BQTRDSixDQUFDLENBQUNJLENBQUQsQ0FBRCxHQUFLRixDQUFDLENBQUNFLENBQUQsQ0FBbEQ7QUFBZjtBQUFzRSxHQUE1SyxFQUE4S0osQ0FBOUssRUFBZ0xFLENBQWhMLENBQU47QUFBeUwsQ0FBek0sRUFBME0sVUFBU0YsQ0FBVCxFQUFXRSxDQUFYLEVBQWE7QUFBQyxXQUFTRSxDQUFULEdBQVk7QUFBQyxTQUFLWSxXQUFMLEdBQWlCaEIsQ0FBakI7QUFBbUI7O0FBQUFNLEVBQUFBLEVBQUMsQ0FBQ04sQ0FBRCxFQUFHRSxDQUFILENBQUQsRUFBT0YsQ0FBQyxDQUFDYSxTQUFGLEdBQVksU0FBT1gsQ0FBUCxHQUFTTyxNQUFNLENBQUNRLE1BQVAsQ0FBY2YsQ0FBZCxDQUFULElBQTJCRSxDQUFDLENBQUNTLFNBQUYsR0FBWVgsQ0FBQyxDQUFDVyxTQUFkLEVBQXdCLElBQUlULENBQUosRUFBbkQsQ0FBbkI7QUFBNkUsQ0FBNVYsQ0FBUjtBQUFBLElBQXNXYyxDQUFDLEdBQUMsVUFBTSxTQUFLQyxVQUFYLElBQXVCLFVBQVNuQixDQUFULEVBQVdFLENBQVgsRUFBYUUsQ0FBYixFQUFlRSxDQUFmLEVBQWlCO0FBQUMsTUFBSUMsQ0FBSjtBQUFBLE1BQU1XLENBQUMsR0FBQ0UsU0FBUyxDQUFDQyxNQUFsQjtBQUFBLE1BQXlCQyxDQUFDLEdBQUNKLENBQUMsR0FBQyxDQUFGLEdBQUloQixDQUFKLEdBQU0sU0FBT0ksQ0FBUCxHQUFTQSxDQUFDLEdBQUNHLE1BQU0sQ0FBQ2Msd0JBQVAsQ0FBZ0NyQixDQUFoQyxFQUFrQ0UsQ0FBbEMsQ0FBWCxHQUFnREUsQ0FBakY7QUFBbUYsTUFBRyxZQUFVLE9BQU9rQixPQUFqQixJQUEwQixjQUFZLE9BQU9BLE9BQU8sQ0FBQ0MsUUFBeEQsRUFBaUVILENBQUMsR0FBQ0UsT0FBTyxDQUFDQyxRQUFSLENBQWlCekIsQ0FBakIsRUFBbUJFLENBQW5CLEVBQXFCRSxDQUFyQixFQUF1QkUsQ0FBdkIsQ0FBRixDQUFqRSxLQUFrRyxLQUFJLElBQUlvQixDQUFDLEdBQUMxQixDQUFDLENBQUNxQixNQUFGLEdBQVMsQ0FBbkIsRUFBcUIsS0FBR0ssQ0FBeEIsRUFBMEJBLENBQUMsRUFBM0I7QUFBOEIsS0FBQ25CLENBQUMsR0FBQ1AsQ0FBQyxDQUFDMEIsQ0FBRCxDQUFKLE1BQVdKLENBQUMsR0FBQyxDQUFDSixDQUFDLEdBQUMsQ0FBRixHQUFJWCxDQUFDLENBQUNlLENBQUQsQ0FBTCxHQUFTLElBQUVKLENBQUYsR0FBSVgsQ0FBQyxDQUFDTCxDQUFELEVBQUdFLENBQUgsRUFBS2tCLENBQUwsQ0FBTCxHQUFhZixDQUFDLENBQUNMLENBQUQsRUFBR0UsQ0FBSCxDQUF4QixLQUFnQ2tCLENBQTdDO0FBQTlCO0FBQThFLFNBQU8sSUFBRUosQ0FBRixJQUFLSSxDQUFMLElBQVFiLE1BQU0sQ0FBQ2tCLGNBQVAsQ0FBc0J6QixDQUF0QixFQUF3QkUsQ0FBeEIsRUFBMEJrQixDQUExQixDQUFSLEVBQXFDQSxDQUE1QztBQUE4QyxDQUFsc0I7O0FBQW1zQmIsTUFBTSxDQUFDa0IsY0FBUCxDQUFzQnZCLENBQXRCLEVBQXdCLFlBQXhCLEVBQXFDO0FBQUN3QixFQUFBQSxLQUFLLEVBQUMsQ0FBQztBQUFSLENBQXJDO0FBQWlELElBQUlOLENBQUo7QUFBQSxJQUFNTyxDQUFDLEdBQUM3QixDQUFDLENBQUMsV0FBRCxDQUFUO0FBQUEsSUFBdUIwQixDQUFDLEdBQUMxQixDQUFDLENBQUMsUUFBRCxDQUExQjtBQUFBLElBQXFDOEIsQ0FBQyxHQUFDOUIsQ0FBQyxDQUFDLFNBQUQsQ0FBeEM7QUFBQSxJQUFvRCtCLENBQUMsR0FBQy9CLENBQUMsQ0FBQyxhQUFELENBQXZEO0FBQUEsSUFBdUVnQyxDQUFDLEdBQUNoQyxDQUFDLENBQUMsUUFBRCxDQUExRTtBQUFBLElBQXFGaUMsQ0FBQyxHQUFDakMsQ0FBQyxDQUFDLEtBQUQsQ0FBeEY7QUFBQSxJQUFnR2tDLENBQUMsR0FBQ2xDLENBQUMsQ0FBQyxXQUFELENBQW5HO0FBQUEsSUFBaUhtQyxDQUFDLEdBQUNuQyxDQUFDLENBQUMsYUFBRCxDQUFwSDtBQUFBLElBQW9Jb0MsQ0FBQyxHQUFDcEMsQ0FBQyxDQUFDLEtBQUQsQ0FBdkk7QUFBQSxJQUErSUUsQ0FBQyxHQUFDbUMsRUFBRSxDQUFDQyxVQUFwSjtBQUFBLElBQStKdEMsQ0FBQyxHQUFDRSxDQUFDLENBQUNxQyxPQUFuSztBQUFBLElBQTJLdkMsQ0FBQyxJQUFFRSxDQUFDLENBQUNzQyxRQUFGLEVBQVdsQixDQUFDLEdBQUNjLENBQUMsV0FBZCxFQUF1QjdCLENBQUMsQ0FBQ2tDLENBQUQsRUFBR25CLENBQUgsQ0FBeEIsRUFBOEJtQixDQUFDLENBQUM1QixTQUFGLENBQVk2QixLQUFaLEdBQWtCLFlBQVU7QUFBQ2IsRUFBQUEsQ0FBQyxXQUFELENBQVVjLEVBQVYsSUFBY2IsQ0FBQyxDQUFDYyxNQUFGLENBQVNDLE1BQXZCLElBQStCZCxDQUFDLENBQUNlLFdBQUYsQ0FBY0MsWUFBZCxFQUEvQjtBQUE0RCxDQUF2SCxFQUF3SE4sQ0FBQyxDQUFDNUIsU0FBRixDQUFZbUMsUUFBWixHQUFxQixZQUFVO0FBQUMsT0FBS0MsU0FBTCxHQUFlLEtBQUtDLFNBQUwsRUFBZjtBQUFnQyxNQUFJOUMsQ0FBQyxHQUFDLEtBQUsrQyxPQUFMLENBQWEsQ0FBYixFQUFnQkMsTUFBaEIsQ0FBdUJDLGNBQXZCLENBQXNDLE9BQXRDLENBQU47QUFBQSxNQUFxRHJELENBQUMsR0FBQ2lDLENBQUMsQ0FBQ3FCLEdBQUYsQ0FBTUMsTUFBTixDQUFhQyxHQUFiLENBQWlCLEtBQUtQLFNBQUwsQ0FBZVEsVUFBaEMsQ0FBdkQ7QUFBbUd6RCxFQUFBQSxDQUFDLElBQUVxQyxFQUFFLENBQUNxQixTQUFILENBQWFDLElBQWIsQ0FBa0Isb0JBQWtCM0QsQ0FBQyxDQUFDNEQsSUFBdEMsRUFBMkN2QixFQUFFLENBQUN3QixXQUE5QyxFQUEwRCxVQUFTN0QsQ0FBVCxFQUFXRSxDQUFYLEVBQWE7QUFBQ0UsSUFBQUEsQ0FBQyxLQUFHQSxDQUFDLENBQUMwRCxRQUFGLENBQVcsQ0FBWCxFQUFjQyxZQUFkLENBQTJCMUIsRUFBRSxDQUFDMkIsTUFBOUIsRUFBc0NDLFdBQXRDLEdBQWtEL0QsQ0FBckQsQ0FBRDtBQUF5RCxHQUFqSSxDQUFIO0FBQXNJLENBQWphLEVBQWthdUMsQ0FBQyxDQUFDNUIsU0FBRixDQUFZcUQsU0FBWixHQUFzQixZQUFVO0FBQUNyQyxFQUFBQSxDQUFDLFdBQUQsQ0FBVXNDLElBQVYsQ0FBZUMsYUFBZixLQUErQnZDLENBQUMsV0FBRCxDQUFVc0MsSUFBVixDQUFlQyxhQUFmLEdBQTZCM0QsTUFBTSxDQUFDNEQsSUFBUCxDQUFZcEMsQ0FBQyxDQUFDcUIsR0FBRixDQUFNZ0IsVUFBTixDQUFpQkMsTUFBakIsRUFBWixFQUF1Q2xELE1BQW5HO0FBQTJHLE1BQUlyQixDQUFKO0FBQUEsTUFBTUUsQ0FBQyxHQUFDK0IsQ0FBQyxDQUFDcUIsR0FBRixDQUFNa0IsR0FBTixDQUFVRCxNQUFWLEVBQVI7QUFBQSxNQUEyQm5FLENBQUMsR0FBQyxFQUE3Qjs7QUFBZ0MsT0FBSUosQ0FBSixJQUFTRSxDQUFUO0FBQVcsU0FBR0EsQ0FBQyxDQUFDRixDQUFELENBQUQsQ0FBS3lFLEtBQUwsQ0FBV0MsT0FBWCxDQUFtQjdDLENBQUMsV0FBRCxDQUFVOEMsTUFBVixDQUFpQkMsVUFBcEMsQ0FBSCxJQUFvRHhFLENBQUMsQ0FBQ3lFLElBQUYsQ0FBTzNFLENBQUMsQ0FBQ0YsQ0FBRCxDQUFELENBQUs4RSxFQUFaLENBQXBEO0FBQVg7O0FBQStFLFNBQU8xRSxDQUFQO0FBQVMsQ0FBdHFCLEVBQXVxQnFDLENBQUMsQ0FBQzVCLFNBQUYsQ0FBWXFDLFNBQVosR0FBc0IsWUFBVTtBQUFDLE1BQUloRCxDQUFDLEdBQUMsRUFBTjtBQUFTLFNBQU8rQixDQUFDLENBQUNxQixHQUFGLENBQU15QixLQUFOLENBQVlDLE9BQVosQ0FBb0IsVUFBU2hGLENBQVQsRUFBVztBQUFDLFNBQUdBLENBQUMsQ0FBQ3lFLEtBQUYsQ0FBUUMsT0FBUixDQUFnQjdDLENBQUMsV0FBRCxDQUFVOEMsTUFBVixDQUFpQkMsVUFBakMsQ0FBSCxJQUFpRDFFLENBQUMsQ0FBQzJFLElBQUYsQ0FBTztBQUFDSSxNQUFBQSxDQUFDLEVBQUNqRixDQUFIO0FBQUtrRixNQUFBQSxDQUFDLEVBQUNsRixDQUFDLENBQUNtRjtBQUFULEtBQVAsQ0FBakQ7QUFBd0UsR0FBeEcsR0FBMEd0RCxDQUFDLFdBQUQsQ0FBVXVELGNBQVYsQ0FBeUJsRixDQUF6QixFQUE0QitFLENBQTdJO0FBQStJLENBQWgyQixFQUFpMkJ4QyxDQUFDLENBQUM1QixTQUFGLENBQVl3RSxhQUFaLEdBQTBCLFlBQVU7QUFBQyxNQUFJM0QsQ0FBQyxHQUFDLElBQU47QUFBVyxPQUFLNEQsUUFBTCxDQUFjLENBQWQsRUFBaUJDLE1BQWpCLEdBQXdCMUQsQ0FBQyxXQUFELENBQVUyRCxVQUFWLENBQXFCLEtBQUtDLFlBQUwsQ0FBa0JDLEtBQXZDLEVBQTZDLENBQTdDLENBQXhCO0FBQXdFLE1BQUk1RCxDQUFDLEdBQUMsRUFBTjtBQUFTTyxFQUFBQSxFQUFFLENBQUNxQixTQUFILENBQWFDLElBQWIsQ0FBa0IseUJBQWxCLEVBQTRDdEIsRUFBRSxDQUFDc0QsTUFBL0MsRUFBc0QsVUFBUzNGLENBQVQsRUFBV3NCLENBQVgsRUFBYTtBQUFDLFNBQUksSUFBSXBCLENBQUMsR0FBQyxDQUFWLEVBQVlBLENBQUMsR0FBQ3dCLENBQUMsQ0FBQytELFlBQUYsQ0FBZUcsU0FBN0IsRUFBdUMxRixDQUFDLEVBQXhDO0FBQTJDLE9BQUMsVUFBU0YsQ0FBVCxFQUFXO0FBQUMsWUFBSUUsQ0FBQyxHQUFDbUMsRUFBRSxDQUFDd0QsV0FBSCxDQUFldkUsQ0FBZixDQUFOO0FBQXdCcEIsUUFBQUEsQ0FBQyxDQUFDNEYsU0FBRixDQUFZakUsQ0FBQyxXQUFELENBQVU4QyxNQUFWLENBQWlCQyxVQUFqQixLQUE4QnpDLENBQUMsQ0FBQzRELFVBQUYsQ0FBYUMsVUFBM0MsSUFBdUQsS0FBR2hHLENBQTFELEdBQTREMEIsQ0FBQyxDQUFDeUIsT0FBRixDQUFVLENBQVYsQ0FBNUQsR0FBeUV6QixDQUFDLENBQUN5QixPQUFGLENBQVUsQ0FBVixDQUFyRjtBQUFtRyxZQUFJL0MsQ0FBQyxHQUFDeUIsQ0FBQyxXQUFELENBQVVvRSxjQUFWLENBQXlCLENBQXpCLEVBQTJCcEUsQ0FBQyxXQUFELENBQVVzQyxJQUFWLENBQWVDLGFBQTFDLEVBQXdEMUMsQ0FBQyxDQUFDK0QsWUFBRixDQUFlRyxTQUF2RSxDQUFOO0FBQUEsWUFBd0Z0RixDQUFDLEdBQUNvQixDQUFDLENBQUN3RSxXQUFGLElBQWVsRyxDQUF6RztBQUFBLFlBQTJHTyxDQUFDLEdBQUNELENBQUMsR0FBQ29CLENBQUMsQ0FBQ3lFLE9BQUgsR0FBV3RFLENBQUMsV0FBRCxDQUFVdUUsV0FBVixDQUFzQm5FLENBQUMsQ0FBQ3FCLEdBQUYsQ0FBTStDLE9BQU4sQ0FBY2hDLElBQXBDLENBQXpIO0FBQUEsWUFBbUtuRCxDQUFDLEdBQUM7QUFBQ29GLFVBQUFBLEtBQUssRUFBQ3RHLENBQVA7QUFBU3VHLFVBQUFBLE1BQU0sRUFBQ2pHLENBQUMsR0FBQ29CLENBQUMsQ0FBQ3lFLE9BQUgsR0FBVzVGLENBQTVCO0FBQThCaUcsVUFBQUEsR0FBRyxFQUFDLFNBQU9qRyxDQUF6QztBQUEyQ2tHLFVBQUFBLElBQUksRUFBQ25HLENBQUMsR0FBQyxHQUFELEdBQUsyQixDQUFDLENBQUNxQixHQUFGLENBQU1nQixVQUFOLENBQWlCZCxHQUFqQixDQUFxQnBELENBQUMsQ0FBQ0osQ0FBRCxDQUF0QixFQUEyQnlHLElBQWpGO0FBQXNGQyxVQUFBQSxRQUFRLEVBQUNwRyxDQUEvRjtBQUFpR3FHLFVBQUFBLE9BQU8sRUFBQyxDQUFDLENBQTFHO0FBQTRHQyxVQUFBQSxNQUFNLEVBQUN0RyxDQUFDLElBQUUsS0FBR3dCLENBQU4sR0FBUSxJQUFSLEdBQWFHLENBQUMsQ0FBQ3FCLEdBQUYsQ0FBTWtCLEdBQU4sQ0FBVWhCLEdBQVYsQ0FBYzNCLENBQUMsV0FBRCxDQUFVc0MsSUFBVixDQUFlMEMsS0FBZixJQUFzQmhGLENBQUMsV0FBRCxDQUFVdUUsV0FBVixDQUFzQjFFLENBQUMsQ0FBQytELFlBQUYsQ0FBZXFCLGFBQXJDLENBQXBDO0FBQWhJLFNBQXJLO0FBQStYcEYsUUFBQUEsQ0FBQyxDQUFDcUYsSUFBRixDQUFPbEMsSUFBUCxDQUFZM0QsQ0FBWixHQUFlUSxDQUFDLENBQUNzRixRQUFGLENBQVduQyxJQUFYLENBQWdCM0UsQ0FBaEIsQ0FBZixFQUFrQ2dCLENBQUMsQ0FBQ3dGLFFBQUYsR0FBV2hGLENBQUMsQ0FBQ3VGLFFBQUYsQ0FBVy9GLENBQVgsQ0FBWCxJQUEwQlksQ0FBQyxJQUFHTyxFQUFFLENBQUM2RSxLQUFILENBQVNoSCxDQUFULEVBQVlpSCxLQUFaLENBQWtCdEYsQ0FBQyxXQUFELENBQVV1RixZQUFWLENBQXVCLENBQXZCLEVBQXlCLEdBQXpCLEVBQTZCLENBQUMsQ0FBOUIsSUFBaUMsR0FBbkQsRUFBd0RELEtBQXhELENBQThEdEYsQ0FBQyxXQUFELENBQVV1RixZQUFWLENBQXVCLENBQXZCLEVBQXlCLEVBQXpCLElBQTZCLEVBQTNGLEVBQStGckcsSUFBL0YsQ0FBb0csWUFBVTtBQUFDVyxVQUFBQSxDQUFDLENBQUN1RixRQUFGLENBQVcvRixDQUFYO0FBQWMsU0FBN0gsRUFBK0hpRyxLQUEvSCxDQUFxSXRGLENBQUMsV0FBRCxDQUFVdUYsWUFBVixDQUF1QixDQUF2QixFQUF5QixFQUF6QixJQUE2QixFQUFsSyxFQUFzS3JHLElBQXRLLENBQTJLLFlBQVU7QUFBQ0csVUFBQUEsQ0FBQyxDQUFDeUYsT0FBRixHQUFVLENBQUMsQ0FBWCxFQUFhakYsQ0FBQyxDQUFDMkYsUUFBRixDQUFXbkcsQ0FBWCxDQUFiO0FBQTJCLFNBQWpOLEVBQW1Od0IsS0FBbk4sRUFBOUIsQ0FBbEM7QUFBNFIsT0FBbHlCLENBQW15QnhDLENBQW55QixDQUFEO0FBQTNDO0FBQWsxQixHQUF0NUI7QUFBdzVCLENBQTEzRCxFQUEyM0R1QyxDQUFDLENBQUM1QixTQUFGLENBQVlvRyxRQUFaLEdBQXFCLFVBQVNqSCxDQUFULEVBQVc7QUFBQyxNQUFJSSxDQUFDLEdBQUMsS0FBSzRHLFFBQUwsQ0FBY2hILENBQUMsQ0FBQ3NHLEtBQWhCLENBQU47QUFBNkJsRyxFQUFBQSxDQUFDLENBQUMwRCxRQUFGLENBQVcsQ0FBWCxFQUFjQyxZQUFkLENBQTJCMUIsRUFBRSxDQUFDaUYsS0FBOUIsRUFBcUMvQixNQUFyQyxHQUE0Q3ZGLENBQUMsQ0FBQ3lHLElBQTlDLEVBQW1EcEUsRUFBRSxDQUFDcUIsU0FBSCxDQUFhQyxJQUFiLENBQWtCLGdCQUFjM0QsQ0FBQyxDQUFDd0csR0FBbEMsRUFBc0NuRSxFQUFFLENBQUN3QixXQUF6QyxFQUFxRCxVQUFTN0QsQ0FBVCxFQUFXRSxDQUFYLEVBQWE7QUFBQ0UsSUFBQUEsQ0FBQyxDQUFDMEQsUUFBRixDQUFXLENBQVgsRUFBY0MsWUFBZCxDQUEyQjFCLEVBQUUsQ0FBQzJCLE1BQTlCLEVBQXNDQyxXQUF0QyxHQUFrRC9ELENBQWxELEVBQW9ERSxDQUFDLENBQUMwRCxRQUFGLENBQVcsQ0FBWCxFQUFjeUQsTUFBZCxHQUFxQixDQUFDLENBQTFFO0FBQTRFLEdBQS9JLENBQW5ELEVBQW9NdkgsQ0FBQyxDQUFDMEcsUUFBRixLQUFhN0UsQ0FBQyxXQUFELENBQVU4QyxNQUFWLENBQWlCQyxVQUFqQixLQUE4QnpDLENBQUMsQ0FBQzRELFVBQUYsQ0FBYUMsVUFBM0MsS0FBd0Q1RixDQUFDLENBQUNvSCxLQUFGLEdBQVEsR0FBUixFQUFZcEgsQ0FBQyxDQUFDcUgsTUFBRixHQUFTLEdBQTdFLEdBQWtGcEYsRUFBRSxDQUFDcUIsU0FBSCxDQUFhQyxJQUFiLENBQWtCLHdCQUFsQixFQUEyQ3RCLEVBQUUsQ0FBQ3dCLFdBQTlDLEVBQTBELFVBQVM3RCxDQUFULEVBQVdFLENBQVgsRUFBYTtBQUFDRSxJQUFBQSxDQUFDLENBQUMyRCxZQUFGLENBQWUxQixFQUFFLENBQUMyQixNQUFsQixFQUEwQkMsV0FBMUIsR0FBc0MvRCxDQUF0QztBQUF3QyxHQUFoSCxDQUEvRixDQUFwTTtBQUFzWixDQUEvMEUsRUFBZzFFdUMsQ0FBQyxDQUFDNUIsU0FBRixDQUFZd0csUUFBWixHQUFxQixVQUFTckgsQ0FBVCxFQUFXO0FBQUMsT0FBS2dILFFBQUwsQ0FBY2hILENBQUMsQ0FBQ3NHLEtBQWhCLEVBQXVCeEMsUUFBdkIsQ0FBZ0MsQ0FBaEMsRUFBbUN5RCxNQUFuQyxHQUEwQyxDQUFDLENBQTNDLEVBQTZDLEtBQUtHLFVBQUwsRUFBN0M7QUFBK0QsQ0FBaDdFLEVBQWk3RWpGLENBQUMsQ0FBQzVCLFNBQUYsQ0FBWTZHLFVBQVosR0FBdUIsWUFBVTtBQUFDLE9BQUksSUFBSTFILENBQUMsR0FBQyxJQUFOLEVBQVdFLENBQUMsR0FBQyxDQUFiLEVBQWVFLENBQUMsR0FBQyxDQUFyQixFQUF1QkEsQ0FBQyxHQUFDLEtBQUsyRyxJQUFMLENBQVUxRixNQUFuQyxFQUEwQ2pCLENBQUMsRUFBM0M7QUFBOEMsU0FBSzJHLElBQUwsQ0FBVTNHLENBQVYsRUFBYXVHLE9BQWIsS0FBdUJ6RyxDQUFDLElBQUUsQ0FBMUI7QUFBOUM7O0FBQTJFLE9BQUksSUFBSUksQ0FBQyxHQUFDLENBQU4sRUFBUUYsQ0FBQyxHQUFDLENBQWQsRUFBZ0JBLENBQUMsR0FBQyxLQUFLMkcsSUFBTCxDQUFVMUYsTUFBNUIsRUFBbUNqQixDQUFDLEVBQXBDO0FBQXVDLFNBQUsyRyxJQUFMLENBQVUzRyxDQUFWLEVBQWF1RyxPQUFiLEtBQXVCLEtBQUtJLElBQUwsQ0FBVTNHLENBQVYsRUFBYXNHLFFBQWIsSUFBdUI3RSxDQUFDLFdBQUQsQ0FBVThDLE1BQVYsQ0FBaUJDLFVBQWpCLEtBQThCekMsQ0FBQyxDQUFDNEQsVUFBRixDQUFhQyxVQUFsRSxJQUE4RTFGLENBQUMsRUFBdEc7QUFBdkM7O0FBQWlKLE9BQUtnRixRQUFMLENBQWMsQ0FBZCxFQUFpQkMsTUFBakIsR0FBd0IxRCxDQUFDLFdBQUQsQ0FBVTJELFVBQVYsQ0FBcUIsS0FBS0MsWUFBTCxDQUFrQkMsS0FBdkMsRUFBNkNwRixDQUE3QyxDQUF4QixFQUF3RUosQ0FBQyxJQUFFLEtBQUs2RyxJQUFMLENBQVUxRixNQUFiLEtBQXNCLEtBQUtzRixPQUFMLEtBQWUsS0FBS0EsT0FBTCxHQUFhLENBQUMsQ0FBZCxFQUFnQjlFLENBQUMsV0FBRCxDQUFVOEYsTUFBVixDQUFpQkMsYUFBakIsR0FBK0IsS0FBS2IsSUFBcEQsRUFBeURsRixDQUFDLFdBQUQsQ0FBVThDLE1BQVYsQ0FBaUJrRCxTQUFqQixFQUF6RCxFQUFzRnhGLEVBQUUsQ0FBQzZFLEtBQUgsQ0FBUyxLQUFLWSxJQUFkLEVBQW9CQyxFQUFwQixDQUF1QixFQUF2QixFQUEwQjtBQUFDQyxJQUFBQSxPQUFPLEVBQUM7QUFBVCxHQUExQixFQUF1Q2pILElBQXZDLENBQTRDLFlBQVU7QUFBQ2YsSUFBQUEsQ0FBQyxDQUFDaUksS0FBRjtBQUFVLEdBQWpFLEVBQW1FdkYsS0FBbkUsRUFBckcsQ0FBdEIsQ0FBeEU7QUFBZ1IsQ0FBLzdGLEVBQWc4RkQsQ0FBQyxDQUFDNUIsU0FBRixDQUFZcUgsUUFBWixHQUFxQixVQUFTbEksQ0FBVCxFQUFXRSxDQUFYLEVBQWE7QUFBQyxVQUFPRixDQUFDLElBQUUwQixDQUFDLENBQUN5RyxNQUFGLENBQVNDLEtBQVQsQ0FBZUMsTUFBZixDQUFzQixPQUF0QixDQUFILEVBQWtDbkksQ0FBekM7QUFBNEMsU0FBSSxPQUFKO0FBQVkyQixNQUFBQSxDQUFDLFdBQUQsQ0FBVThDLE1BQVYsQ0FBaUIyRCxZQUFqQixDQUE4QnBHLENBQUMsQ0FBQ3FHLFVBQUYsQ0FBYUMsS0FBM0MsR0FBa0QsS0FBS1AsS0FBTCxFQUFsRDtBQUErRDs7QUFBTSxTQUFJLE1BQUo7QUFBV2pJLE1BQUFBLENBQUMsQ0FBQ3lJLE1BQUYsQ0FBU2xCLE1BQVQsR0FBZ0IsQ0FBQyxDQUFqQixFQUFtQixLQUFLUixJQUFMLENBQVUsS0FBS2IsV0FBZixFQUE0QlMsT0FBNUIsR0FBb0MsQ0FBQyxDQUF4RCxFQUEwRCxLQUFLVSxRQUFMLENBQWMsS0FBS04sSUFBTCxDQUFVLEtBQUtiLFdBQWYsQ0FBZCxDQUExRCxFQUFxR25FLENBQUMsQ0FBQ2UsV0FBRixDQUFjNEYsU0FBZCxDQUF3QjdHLENBQUMsV0FBRCxDQUFVOEMsTUFBVixDQUFpQmdFLFVBQWpCLEtBQThCLGFBQXRELENBQXJHO0FBQXhJO0FBQW1ULENBQXR4RyxFQUF1eEd6SCxDQUFDLENBQUMsQ0FBQ2xCLENBQUQsQ0FBRCxFQUFLeUMsQ0FBTCxDQUExeEcsQ0FBNUs7O0FBQSs4RyxTQUFTQSxDQUFULEdBQVk7QUFBQyxNQUFJbkMsQ0FBQyxHQUFDLFNBQU9nQixDQUFQLElBQVVBLENBQUMsQ0FBQ3NILEtBQUYsQ0FBUSxJQUFSLEVBQWF4SCxTQUFiLENBQVYsSUFBbUMsSUFBekM7QUFBOEMsU0FBT2QsQ0FBQyxDQUFDcUcsT0FBRixHQUFVLENBQUMsQ0FBWCxFQUFhckcsQ0FBQyxDQUFDeUcsSUFBRixHQUFPLEVBQXBCLEVBQXVCekcsQ0FBQyxDQUFDMEcsUUFBRixHQUFXLEVBQWxDLEVBQXFDMUcsQ0FBQyxDQUFDNkYsT0FBRixHQUFVLENBQS9DLEVBQWlEN0YsQ0FBQyxDQUFDMkMsU0FBRixHQUFZLElBQTdELEVBQWtFM0MsQ0FBQyxDQUFDdUksT0FBRixHQUFVO0FBQUNDLElBQUFBLFlBQVksRUFBQyx3QkFBVTtBQUFDeEksTUFBQUEsQ0FBQyxDQUFDbUYsWUFBRixHQUFlO0FBQUNDLFFBQUFBLEtBQUssRUFBQyxhQUFQO0FBQXFCRSxRQUFBQSxTQUFTLEVBQUMsQ0FBL0I7QUFBaUNrQixRQUFBQSxhQUFhLEVBQUN4RyxDQUFDLENBQUM0RCxTQUFGO0FBQS9DLE9BQWYsRUFBNkU1RCxDQUFDLENBQUM0RixXQUFGLEdBQWNyRSxDQUFDLFdBQUQsQ0FBVXVGLFlBQVYsQ0FBdUIsQ0FBdkIsRUFBeUIsQ0FBekIsQ0FBM0YsRUFBdUg5RyxDQUFDLENBQUMwQyxRQUFGLEVBQXZILEVBQW9JMUMsQ0FBQyxDQUFDK0UsYUFBRixFQUFwSSxFQUFzSi9FLENBQUMsQ0FBQzZGLE9BQUYsR0FBVW5FLENBQUMsQ0FBQytHLE1BQUYsQ0FBU0MsT0FBekssRUFBaUxuSCxDQUFDLFdBQUQsQ0FBVThGLE1BQVYsQ0FBaUJzQixVQUFqQixHQUE0QjNJLENBQUMsQ0FBQzJDLFNBQS9NO0FBQXlOLEtBQWxQO0FBQW1QaUcsSUFBQUEsZUFBZSxFQUFDLDJCQUFVO0FBQUM1SSxNQUFBQSxDQUFDLENBQUNtRixZQUFGLEdBQWU7QUFBQ0MsUUFBQUEsS0FBSyxFQUFDLFlBQVA7QUFBb0JFLFFBQUFBLFNBQVMsRUFBQyxDQUE5QjtBQUFnQ2tCLFFBQUFBLGFBQWEsRUFBQ3hHLENBQUMsQ0FBQzRELFNBQUY7QUFBOUMsT0FBZjs7QUFBNEUsV0FBSSxJQUFJbEUsQ0FBQyxHQUFDTSxDQUFDLENBQUM0RixXQUFGLEdBQWMsQ0FBeEIsRUFBMEJsRyxDQUFDLEdBQUNNLENBQUMsQ0FBQ21GLFlBQUYsQ0FBZUcsU0FBM0MsRUFBcUQ1RixDQUFDLEVBQXRELEVBQXlEO0FBQUMsWUFBSUUsQ0FBQyxHQUFDSSxDQUFDLENBQUM0RixXQUFGLElBQWVsRyxDQUFyQjtBQUFBLFlBQXVCSSxDQUFDLEdBQUNGLENBQUMsR0FBQzhCLENBQUMsQ0FBQytHLE1BQUYsQ0FBU0MsT0FBVixHQUFrQm5ILENBQUMsV0FBRCxDQUFVdUUsV0FBVixDQUFzQm5FLENBQUMsQ0FBQ3FCLEdBQUYsQ0FBTStDLE9BQU4sQ0FBY2hDLElBQXBDLENBQTVDO0FBQUEsWUFBc0ZuRSxDQUFDLEdBQUM7QUFBQ29HLFVBQUFBLEtBQUssRUFBQ3RHLENBQVA7QUFBU3VHLFVBQUFBLE1BQU0sRUFBQ25HLENBQWhCO0FBQWtCb0csVUFBQUEsR0FBRyxFQUFDLFNBQU9wRyxDQUE3QjtBQUErQnFHLFVBQUFBLElBQUksRUFBQ3ZHLENBQUMsR0FBQyxHQUFELEdBQUsrQixDQUFDLENBQUNxQixHQUFGLENBQU1nQixVQUFOLENBQWlCZCxHQUFqQixDQUFxQjNCLENBQUMsV0FBRCxDQUFVdUYsWUFBVixDQUF1QixDQUF2QixFQUF5QnZGLENBQUMsV0FBRCxDQUFVc0MsSUFBVixDQUFlQyxhQUF4QyxDQUFyQixFQUE2RXFDLElBQXZIO0FBQTRIQyxVQUFBQSxRQUFRLEVBQUN4RyxDQUFySTtBQUF1SXlHLFVBQUFBLE9BQU8sRUFBQyxDQUFDLENBQWhKO0FBQWtKQyxVQUFBQSxNQUFNLEVBQUMxRyxDQUFDLEdBQUMsSUFBRCxHQUFNK0IsQ0FBQyxDQUFDcUIsR0FBRixDQUFNa0IsR0FBTixDQUFVaEIsR0FBVixDQUFjM0IsQ0FBQyxXQUFELENBQVVzQyxJQUFWLENBQWUwQyxLQUFmLElBQXNCaEYsQ0FBQyxXQUFELENBQVV1RSxXQUFWLENBQXNCOUYsQ0FBQyxDQUFDbUYsWUFBRixDQUFlcUIsYUFBckMsQ0FBcEM7QUFBaEssU0FBeEY7QUFBa1Z4RyxRQUFBQSxDQUFDLENBQUN5RyxJQUFGLENBQU9sQyxJQUFQLENBQVkzRSxDQUFaO0FBQWU7O0FBQUEyQixNQUFBQSxDQUFDLFdBQUQsQ0FBVThGLE1BQVYsQ0FBaUJDLGFBQWpCLEdBQStCdEgsQ0FBQyxDQUFDeUcsSUFBakMsRUFBc0NyRixDQUFDLENBQUN5RyxNQUFGLENBQVNnQixFQUFULENBQVlDLE9BQVosQ0FBb0IsMkJBQXBCLEVBQWdEO0FBQUNySSxRQUFBQSxJQUFJLEVBQUMsZ0JBQVU7QUFBQ2MsVUFBQUEsQ0FBQyxXQUFELENBQVU4QyxNQUFWLENBQWlCa0QsU0FBakIsSUFBNkJ4RixFQUFFLENBQUM2RSxLQUFILENBQVNyRixDQUFDLFdBQUQsQ0FBVXdILFFBQVYsQ0FBbUJDLFNBQTVCLEVBQXVDbkMsS0FBdkMsQ0FBNkMsRUFBN0MsRUFBaURZLEVBQWpELENBQW9ELEVBQXBELEVBQXVEO0FBQUNDLFlBQUFBLE9BQU8sRUFBQztBQUFULFdBQXZELEVBQW9FdEYsS0FBcEUsRUFBN0I7QUFBeUc7QUFBMUgsT0FBaEQsRUFBNEtiLENBQUMsV0FBRCxDQUFVd0gsUUFBVixDQUFtQkUsTUFBL0wsQ0FBdEMsRUFBNk9qSixDQUFDLENBQUMySCxLQUFGLEVBQTdPO0FBQXVQLEtBQTUrQjtBQUE2K0J1QixJQUFBQSxlQUFlLEVBQUMsMkJBQVU7QUFBQ2xKLE1BQUFBLENBQUMsQ0FBQ21GLFlBQUYsR0FBZTtBQUFDQyxRQUFBQSxLQUFLLEVBQUMsYUFBUDtBQUFxQkUsUUFBQUEsU0FBUyxFQUFDLENBQS9CO0FBQWlDa0IsUUFBQUEsYUFBYSxFQUFDeEcsQ0FBQyxDQUFDNEQsU0FBRjtBQUEvQyxPQUFmLEVBQTZFNUQsQ0FBQyxDQUFDNEYsV0FBRixHQUFjLENBQTNGLEVBQTZGNUYsQ0FBQyxDQUFDNkYsT0FBRixHQUFVbkUsQ0FBQyxDQUFDK0csTUFBRixDQUFTVSxXQUFoSCxFQUE0SG5KLENBQUMsQ0FBQytFLGFBQUYsRUFBNUg7QUFBOEk7QUFBdHBDLEdBQTVFLEVBQW91Qy9FLENBQTN1QztBQUE2dUM7O0FBQUFGLENBQUMsV0FBRCxHQUFVSixDQUFWIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZT1yZXF1aXJlO1xudmFyIHQ9bW9kdWxlO1xudmFyIG89ZXhwb3J0cztcblwidXNlIHN0cmljdFwiO3ZhciBuLGk9dGhpcyYmdGhpcy5fX2V4dGVuZHN8fChuPWZ1bmN0aW9uKGUsdCl7cmV0dXJuKG49T2JqZWN0LnNldFByb3RvdHlwZU9mfHx7X19wcm90b19fOltdfWluc3RhbmNlb2YgQXJyYXkmJmZ1bmN0aW9uKGUsdCl7ZS5fX3Byb3RvX189dH18fGZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBvIGluIHQpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsbykmJihlW29dPXRbb10pfSkoZSx0KX0sZnVuY3Rpb24oZSx0KXtmdW5jdGlvbiBvKCl7dGhpcy5jb25zdHJ1Y3Rvcj1lfW4oZSx0KSxlLnByb3RvdHlwZT1udWxsPT09dD9PYmplY3QuY3JlYXRlKHQpOihvLnByb3RvdHlwZT10LnByb3RvdHlwZSxuZXcgbyl9KSxhPXRoaXMmJnRoaXMuX19kZWNvcmF0ZXx8ZnVuY3Rpb24oZSx0LG8sbil7dmFyIGksYT1hcmd1bWVudHMubGVuZ3RoLHI9YTwzP3Q6bnVsbD09PW4/bj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHQsbyk6bjtpZihcIm9iamVjdFwiPT10eXBlb2YgUmVmbGVjdCYmXCJmdW5jdGlvblwiPT10eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSlyPVJlZmxlY3QuZGVjb3JhdGUoZSx0LG8sbik7ZWxzZSBmb3IodmFyIHM9ZS5sZW5ndGgtMTswPD1zO3MtLSkoaT1lW3NdKSYmKHI9KGE8Mz9pKHIpOjM8YT9pKHQsbyxyKTppKHQsbykpfHxyKTtyZXR1cm4gMzxhJiZyJiZPYmplY3QuZGVmaW5lUHJvcGVydHkodCxvLHIpLHJ9O09iamVjdC5kZWZpbmVQcm9wZXJ0eShvLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciByLGw9ZShcIkFwcENvbW1vblwiKSxzPWUoXCJDQ1Rvb2xcIiksYz1lKFwiQmFzZVNka1wiKSxwPWUoXCJQbGF0Zm9ybUZ1blwiKSxkPWUoXCJVc2VyVm9cIiksdT1lKFwiQ2ZnXCIpLGY9ZShcIkdhbWVTY2VuZVwiKSxoPWUoXCJNb2RlbE1hbmFnZVwiKSxtPWUoXCJwb3BcIiksdD1jYy5fZGVjb3JhdG9yLGU9dC5jY2NsYXNzLGU9KHQucHJvcGVydHkscj1tLmRlZmF1bHQsaSh5LHIpLHkucHJvdG90eXBlLnN0YXJ0PWZ1bmN0aW9uKCl7bC5kZWZhdWx0LlBGPT1jLkdBTUVQRi5BRFJfWE0mJnAuUGxhdGZvcm1GdW4uc2hvd0Jhbm5lckFkKCl9LHkucHJvdG90eXBlLmluaXRCb3NzPWZ1bmN0aW9uKCl7dGhpcy5fYm9zc0luZm89dGhpcy5nZXRBaUJvc3MoKTt2YXIgbz10aGlzLm5vZGVBcnJbMF0ucGFyZW50LmdldENoaWxkQnlOYW1lKFwidnNfdHhcIiksZT11LkNmZy5HaG9zdDEuZ2V0KHRoaXMuX2Jvc3NJbmZvLmF0dHJpYnV0ZXMpO2UmJmNjLnJlc291cmNlcy5sb2FkKFwiaW1nL3ZpZXdVaS9yb2xlXCIrZS5pY29uLGNjLlNwcml0ZUZyYW1lLGZ1bmN0aW9uKGUsdCl7byYmKG8uY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWU9dCl9KX0seS5wcm90b3R5cGUuZ2V0QWlMaXN0PWZ1bmN0aW9uKCl7bC5kZWZhdWx0LmRhdGEuUmFuZG9tTmFtZUxlbnx8KGwuZGVmYXVsdC5kYXRhLlJhbmRvbU5hbWVMZW49T2JqZWN0LmtleXModS5DZmcuUmFuZG9tTmFtZS5nZXRBbGwoKSkubGVuZ3RoKTt2YXIgZSx0PXUuQ2ZnLk1hbi5nZXRBbGwoKSxvPVtdO2ZvcihlIGluIHQpMDw9dFtlXS5tb2RlbC5pbmRleE9mKGwuZGVmYXVsdC5HU2NlbmUuX0dhbWVNb2RlbCkmJm8ucHVzaCh0W2VdLmlkKTtyZXR1cm4gb30seS5wcm90b3R5cGUuZ2V0QWlCb3NzPWZ1bmN0aW9uKCl7dmFyIHQ9W107cmV0dXJuIHUuQ2ZnLkdob3N0LmZvckVhY2goZnVuY3Rpb24oZSl7MDw9ZS5tb2RlbC5pbmRleE9mKGwuZGVmYXVsdC5HU2NlbmUuX0dhbWVNb2RlbCkmJnQucHVzaCh7djplLHc6ZS5ib3JufSl9KSxsLmRlZmF1bHQud2VpZ2h0R2V0VmFsdWUodCkudn0seS5wcm90b3R5cGUuc3RhcnRNYXRjaGluZz1mdW5jdGlvbigpe3ZhciBzPXRoaXM7dGhpcy5sYWJlbEFyclswXS5zdHJpbmc9bC5kZWZhdWx0LnN0clJlcGxhY2UodGhpcy5tYXRjaGluZ0RhdGEudGl0bGUsMCk7dmFyIGM9MTA7Y2MucmVzb3VyY2VzLmxvYWQoXCJwcmVmYWIvcG9wL01hdGNoaW5nSXRlbVwiLGNjLlByZWZhYixmdW5jdGlvbihlLHIpe2Zvcih2YXIgdD0wO3Q8cy5tYXRjaGluZ0RhdGEucGxheWVyTnVtO3QrKykhZnVuY3Rpb24oZSl7dmFyIHQ9Y2MuaW5zdGFudGlhdGUocik7dC5zZXRQYXJlbnQobC5kZWZhdWx0LkdTY2VuZS5fR2FtZU1vZGVsPT09aC5HQU1FX01PREVMLkJPU1NfTU9ERUwmJjA9PWU/cy5ub2RlQXJyWzFdOnMubm9kZUFyclswXSk7dmFyIG89bC5kZWZhdWx0LmdldFJhbmRvbVNEaWZmKDEsbC5kZWZhdWx0LmRhdGEuUmFuZG9tTmFtZUxlbixzLm1hdGNoaW5nRGF0YS5wbGF5ZXJOdW0pLG49cy5wbGF5ZXJJbmRleD09ZSxpPW4/cy5fc2tpbklkOmwuZGVmYXVsdC5HZXRBcnJUYXJnZSh1LkNmZy5Sb2xlTWFuLmtleXMpLGE9e2luZGV4OmUsc2tpbklEOm4/cy5fc2tpbklkOmksaW1nOlwicm9sZVwiK2ksbmFtZTpuP1wi5oiRXCI6dS5DZmcuUmFuZG9tTmFtZS5nZXQob1tlXSkubmFtZSxpc1BsYXllcjpuLGlzUmVhZHk6ITEsYWlEYXRhOm58fDA9PWM/bnVsbDp1LkNmZy5NYW4uZ2V0KGwuZGVmYXVsdC5kYXRhLlNldEFJfHxsLmRlZmF1bHQuR2V0QXJyVGFyZ2Uocy5tYXRjaGluZ0RhdGEuYWlTZXRUaW5nTGlzdCkpfTtzLmxpc3QucHVzaChhKSxzLml0ZW1MaXN0LnB1c2godCksYS5pc1BsYXllcj9zLmpvaW5Sb29tKGEpOihjLS0sY2MudHdlZW4odCkuZGVsYXkobC5kZWZhdWx0LkdldFJhbmRvbU51bSgwLDIwMCwhMSkvMTAwKS5kZWxheShsLmRlZmF1bHQuR2V0UmFuZG9tTnVtKDEsMjApLzEwKS5jYWxsKGZ1bmN0aW9uKCl7cy5qb2luUm9vbShhKX0pLmRlbGF5KGwuZGVmYXVsdC5HZXRSYW5kb21OdW0oMSwyMCkvMTApLmNhbGwoZnVuY3Rpb24oKXthLmlzUmVhZHk9ITAscy5zZXRSZWFkeShhKX0pLnN0YXJ0KCkpfSh0KX0pfSx5LnByb3RvdHlwZS5qb2luUm9vbT1mdW5jdGlvbihlKXt2YXIgbz10aGlzLml0ZW1MaXN0W2UuaW5kZXhdO28uY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9ZS5uYW1lLGNjLnJlc291cmNlcy5sb2FkKFwiaW1nL3ZpZXdVaS9cIitlLmltZyxjYy5TcHJpdGVGcmFtZSxmdW5jdGlvbihlLHQpe28uY2hpbGRyZW5bMV0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWU9dCxvLmNoaWxkcmVuWzFdLmFjdGl2ZT0hMH0pLGUuaXNQbGF5ZXImJihsLmRlZmF1bHQuR1NjZW5lLl9HYW1lTW9kZWw9PT1oLkdBTUVfTU9ERUwuQk9TU19NT0RFTCYmKG8ud2lkdGg9MTI5LG8uaGVpZ2h0PTEyMCksY2MucmVzb3VyY2VzLmxvYWQoXCJpbWcvdmlld1VpL2h5emJfdHggX3pqXCIsY2MuU3ByaXRlRnJhbWUsZnVuY3Rpb24oZSx0KXtvLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lPXR9KSl9LHkucHJvdG90eXBlLnNldFJlYWR5PWZ1bmN0aW9uKGUpe3RoaXMuaXRlbUxpc3RbZS5pbmRleF0uY2hpbGRyZW5bMl0uYWN0aXZlPSEwLHRoaXMuY2hlY2tSZWFkeSgpfSx5LnByb3RvdHlwZS5jaGVja1JlYWR5PWZ1bmN0aW9uKCl7Zm9yKHZhciBlPXRoaXMsdD0wLG89MDtvPHRoaXMubGlzdC5sZW5ndGg7bysrKXRoaXMubGlzdFtvXS5pc1JlYWR5JiYodCs9MSk7Zm9yKHZhciBuPTAsbz0wO288dGhpcy5saXN0Lmxlbmd0aDtvKyspdGhpcy5saXN0W29dLmlzUmVhZHkmJih0aGlzLmxpc3Rbb10uaXNQbGF5ZXImJmwuZGVmYXVsdC5HU2NlbmUuX0dhbWVNb2RlbD09PWguR0FNRV9NT0RFTC5CT1NTX01PREVMfHxuKyspO3RoaXMubGFiZWxBcnJbMF0uc3RyaW5nPWwuZGVmYXVsdC5zdHJSZXBsYWNlKHRoaXMubWF0Y2hpbmdEYXRhLnRpdGxlLG4pLHQ9PXRoaXMubGlzdC5sZW5ndGgmJih0aGlzLmlzUmVhZHl8fCh0aGlzLmlzUmVhZHk9ITAsbC5kZWZhdWx0Lk1hcENsci5NYXRjaFJvbGVEYXRhPXRoaXMubGlzdCxsLmRlZmF1bHQuR1NjZW5lLnN0YXJ0R2FtZSgpLGNjLnR3ZWVuKHRoaXMubm9kZSkudG8oLjUse29wYWNpdHk6MH0pLmNhbGwoZnVuY3Rpb24oKXtlLmNsb3NlKCl9KS5zdGFydCgpKSl9LHkucHJvdG90eXBlLm9uQnV0dG9uPWZ1bmN0aW9uKGUsdCl7c3dpdGNoKGUmJnMuQ0NUb29sLkF1ZGlvLlBsYXllcihcIkNsaWNrXCIpLHQpe2Nhc2VcIkNsb3NlXCI6bC5kZWZhdWx0LkdTY2VuZS5zZXRHYW1lU3RhcnQoZi5HQU1FX1NUQVRFLkluZGV4KSx0aGlzLmNsb3NlKCk7YnJlYWs7Y2FzZVwiSm9pblwiOmUudGFyZ2V0LmFjdGl2ZT0hMSx0aGlzLmxpc3RbdGhpcy5wbGF5ZXJJbmRleF0uaXNSZWFkeT0hMCx0aGlzLnNldFJlYWR5KHRoaXMubGlzdFt0aGlzLnBsYXllckluZGV4XSkscC5QbGF0Zm9ybUZ1bi5TZW5kRXZlbnQobC5kZWZhdWx0LkdTY2VuZS5nZXRNb2RlU3RyKCkrXCJsZXZlbF9zdGFydFwiKX19LGEoW2VdLHkpKTtmdW5jdGlvbiB5KCl7dmFyIG49bnVsbCE9PXImJnIuYXBwbHkodGhpcyxhcmd1bWVudHMpfHx0aGlzO3JldHVybiBuLmlzUmVhZHk9ITEsbi5saXN0PVtdLG4uaXRlbUxpc3Q9W10sbi5fc2tpbklkPTAsbi5fYm9zc0luZm89bnVsbCxuLmluaXRGdW49e3BvcF9NYXRjaGluZzpmdW5jdGlvbigpe24ubWF0Y2hpbmdEYXRhPXt0aXRsZTpcIuS8muiuruWHhuWkh+S4re+8iCVkLzbvvIlcIixwbGF5ZXJOdW06NixhaVNldFRpbmdMaXN0Om4uZ2V0QWlMaXN0KCl9LG4ucGxheWVySW5kZXg9bC5kZWZhdWx0LkdldFJhbmRvbU51bSgwLDUpLG4uaW5pdEJvc3MoKSxuLnN0YXJ0TWF0Y2hpbmcoKSxuLl9za2luSWQ9ZC5Vc2VyVm8udXNlU2tpbixsLmRlZmF1bHQuTWFwQ2xyLkFpQm9zc0RhdGE9bi5fYm9zc0luZm99LHBvcF9NYXRjaGluZ19NMjpmdW5jdGlvbigpe24ubWF0Y2hpbmdEYXRhPXt0aXRsZTpcIuWKoOePreeUs+ivt++8iCVkLzLvvIlcIixwbGF5ZXJOdW06MixhaVNldFRpbmdMaXN0Om4uZ2V0QWlMaXN0KCl9O2Zvcih2YXIgZT1uLnBsYXllckluZGV4PTA7ZTxuLm1hdGNoaW5nRGF0YS5wbGF5ZXJOdW07ZSsrKXt2YXIgdD1uLnBsYXllckluZGV4PT1lLG89dD9kLlVzZXJWby51c2VTa2luOmwuZGVmYXVsdC5HZXRBcnJUYXJnZSh1LkNmZy5Sb2xlTWFuLmtleXMpLHQ9e2luZGV4OmUsc2tpbklEOm8saW1nOlwicm9sZVwiK28sbmFtZTp0P1wi5oiRXCI6dS5DZmcuUmFuZG9tTmFtZS5nZXQobC5kZWZhdWx0LkdldFJhbmRvbU51bSgxLGwuZGVmYXVsdC5kYXRhLlJhbmRvbU5hbWVMZW4pKS5uYW1lLGlzUGxheWVyOnQsaXNSZWFkeTohMSxhaURhdGE6dD9udWxsOnUuQ2ZnLk1hbi5nZXQobC5kZWZhdWx0LmRhdGEuU2V0QUl8fGwuZGVmYXVsdC5HZXRBcnJUYXJnZShuLm1hdGNoaW5nRGF0YS5haVNldFRpbmdMaXN0KSl9O24ubGlzdC5wdXNoKHQpfWwuZGVmYXVsdC5NYXBDbHIuTWF0Y2hSb2xlRGF0YT1uLmxpc3Qscy5DQ1Rvb2wuVUkuT3BlblBvcChcInByZWZhYi9wb3AvcG9wX01hdGNBTV8xdjFcIix7Y2FsbDpmdW5jdGlvbigpe2wuZGVmYXVsdC5HU2NlbmUuc3RhcnRHYW1lKCksY2MudHdlZW4obC5kZWZhdWx0Lk1haW5WaWV3LkluZGV4UGFnZSkuZGVsYXkoLjUpLnRvKC41LHtvcGFjaXR5OjB9KS5zdGFydCgpfX0sbC5kZWZhdWx0Lk1haW5WaWV3LlBvcEJveCksbi5jbG9zZSgpfSxwb3BfTWF0Y2hpbmdfTTM6ZnVuY3Rpb24oKXtuLm1hdGNoaW5nRGF0YT17dGl0bGU6XCLkvJrorq7lh4blpIfkuK3vvIglZC8277yJXCIscGxheWVyTnVtOjcsYWlTZXRUaW5nTGlzdDpuLmdldEFpTGlzdCgpfSxuLnBsYXllckluZGV4PTAsbi5fc2tpbklkPWQuVXNlclZvLnVzZUJvc3NTa2luLG4uc3RhcnRNYXRjaGluZygpfX0sbn1vLmRlZmF1bHQ9ZSJdfQ==
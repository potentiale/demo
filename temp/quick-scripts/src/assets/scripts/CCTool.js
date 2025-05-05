"use strict";
cc._RF.push(module, '1a8f9t9OFtDpabFUqgY3IZ1', 'CCTool');
// scripts/CCTool.js

"use strict";

var e = require;
var t = module;
var o = exports;
"use strict";

var _n,
    d = void 0 && (void 0).__extends || (_n = function n(e, t) {
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
});

Object.defineProperty(o, "__esModule", {
  value: !0
}), o.CCTool = void 0;
var u = e("LanguageFun"),
    f = e("pop"),
    h = e("ToastCurrencyItem"),
    m = e("AppCommon"),
    y = e("Manager"),
    g = e("BaseSdk");

(function (o) {
  var e,
      t = (e = u.LanguageFun, d(n, e), n);

  function n() {
    return null !== e && e.apply(this, arguments) || this;
  }

  o.Language = t;
  i.SetCoolingTime = function () {
    var e = m["default"].gettimestamp(null, "ms");
    return e - m["default"].data.timestamp < 300 ? (cc.log("点击太快"), !0) : (m["default"].data.timestamp = e, !1);
  }, i.GetShaderScale = function () {
    return g.GAMEPF.isADR() ? 10 : 1;
  }, i.InCamera = function (e) {
    var t = Math.abs(m["default"].GScene.GameCamera.node.x - e.x),
        e = Math.abs(m["default"].GScene.GameCamera.node.y - e.y);
    return this.CameraSize || (this.CameraSize = {
      width: cc.winSize.width,
      height: cc.winSize.height
    }, this.CameraSize.width *= .6, this.CameraSize.height *= .6), !(t > this.CameraSize.width || e > this.CameraSize.height);
  }, i.GetV2 = function (e) {
    return e.getLocation().addSelf(cc.v2(-cc.winSize.width / 2, -cc.winSize.height / 2));
  }, t = i;

  function i() {}

  o.System = t;
  a.prototype.GetFormPool = function () {
    return 0 < this.list.length ? this.list.splice(0, 1)[0] : this.newClassFun();
  }, a.prototype.ReturnPool = function (e) {
    this.list.push(e);
  }, t = a;

  function a(e, t) {
    this.name = "", this.path = "", this.list = [], this.newClassFun = function () {}, this.name = e, this.newClassFun = t;
  }

  o.ClassPool = t;
  r.prototype.Up = function (e) {
    return this.UpCDFun[e = void 0 === e ? "default" : e] && (this.limt[e] = this.UpCDFun[e]()), this.limt[e];
  }, r.prototype.Check = function (e) {
    return !this.arr[e = void 0 === e ? "default" : e] || this.arr[e] <= 0;
  }, r.prototype.Set = function (e, t) {
    void 0 === e && (e = "default"), void 0 === t && (t = this.limt[e]), this.arr[e] = t;
  }, r.prototype.Clear = function (e) {
    this.arr[e = void 0 === e ? "default" : e] = 0;
  }, r.prototype.Init = function () {
    for (var e in this.UpCDFun) {
      this.limt[e] = 1;
    }

    for (var e in this.limt) {
      this.Up(e);
    }
  }, r.prototype.InitItem = function (e, t) {
    this.limt[e] = t;
  }, r.prototype.OnUpdate = function (e) {
    for (var t in this.arr) {
      this.arr[t] -= e;
    }
  }, r.prototype.Reset = function () {
    for (var e in this.arr) {
      this.arr[e] = this.limt[e];
    }
  }, t = r;

  function r(e) {
    if (this.limt = {
      "default": 1
    }, this.arr = {}, this.UpCDFun = {}, e) {
      for (var t in e) {
        this.limt[t] = e[t];
      }

      this.Init();
    }
  }

  o.CDManage = t;
  s.CameraPlayer = function (e, t) {
    o.System.InCamera(e) && this.Player(t);
  }, s.Player = function (o, n, i, a) {
    var r = this;
    void 0 === n && (n = "playEffect"), void 0 === i && (i = !1), void 0 === a && (a = 1);
    var e = this.ClipArr[o];

    if (!(1 != m["default"].data.is_AudioOpen && 0 <= ["play", "playEffect"].indexOf(n))) {
      if (this.ClipArr[o] || !(0 <= n.indexOf("play"))) {
        var t = this.IDArr[o + ""];

        switch (n) {
          case "stop":
          case "stopMusic":
            t && cc.audioEngine.stop(t);
            break;

          case "resume":
            t && cc.audioEngine.resume(t);
            break;

          case "play":
            t = cc.audioEngine.play(e, i, a), this.IDArr[o] = t;
            break;

          case "playMusic":
            t = cc.audioEngine.playMusic(e, i), this.IDArr[o] = t;
            break;

          case "playEffect":
            t = cc.audioEngine.playEffect(e, !1);
            break;

          default:
            if ("resume" == n && !t) return this.Player(o, "play", i, a);
            cc.audioEngine[n](t);
        }

        return a && cc.audioEngine.setVolume(t, a), t;
      }

      cc.resources.load("audio/" + o, cc.AudioClip, function (e, t) {
        return e ? cc.log("加载音频失败：" + o) : (cc.log("加载音频成功" + o), r.ClipArr[o] = t, void r.Player(o, n, i, a));
      });
    }
  }, s.PlayBgm = function (e, t) {
    void 0 === e && (e = this.bgmName), void 0 === t && (t = 1), m["default"].data.is_BgmOpen && (this.StopBgm(), o.Audio.Player(e, "playMusic", !0, t), this.bgmName = e);
  }, s.StopBgm = function () {
    var e,
        t = ["Bgm_Lobby", "Bgm_Battle", "Bgm_Battle2", "Bgm_Battle3", "Bgm_Matching"];

    for (e in t) {
      o.Audio.Player(t[e], "stopMusic");
    }
  }, s.IDArr = {}, s.ClipArr = {}, s.bgmName = "Bgm_Battle", t = s;

  function s() {}

  o.Audio = t;
  c.prototype.GetFormPool = function (e) {
    var t;
    return 0 < this.pool.size() ? t = this.pool.get() : (this.pool.put(cc.instantiate(this.prefabNode)), (t = this.pool.get())._pool = this), t.active = !0, e.addChild(t), this.useNum++, t;
  }, c.prototype.ReturnPool = function (e, t) {
    e.active = !1, e.name = this.name, this.useNum--, this.useNum < 0 && (this.useNum = 0), this.pool.put(e), t && t();
  }, t = c;

  function c(e, t, o) {
    if (this.name = "", this.path = "", this.autoExpandNum = 10, this.list = [], this.useNum = 0, this.prefabNode = t, this.name = e, t) {
      this.pool = new cc.NodePool(t.name);

      for (var n = o || 0, i = 0; i < n; ++i) {
        var a = cc.instantiate(t);
        a.active = !1, a.name = this.name, (a._pool = this).pool.put(a);
      }

      console.log("初始化对象池-" + e, e + "Pool");
    }
  }

  o.GamePool = t;
  l.LoadPrefab = function (t, o, n) {
    void 0 === o && (o = m["default"].MainView.PopBox), y.Manager.loader.loadPrefab(t).then(function (e) {
      e.setParent(o), n && n(e);
    })["catch"](function (e) {
      cc.error("加载失败:" + t, e);
    });
  }, t = l;

  function l() {}

  o.Loader = t, o.Egg = function (e) {
    var o = this;
    this._isActive = !1, this._num = 0, this.fun = {
      Click: function Click(e) {
        function t() {
          o._isActive && (o._num++, o._num > e.num && (e.call(), e.isCanRepeat || e.node.off(cc.Node.EventType.TOUCH_START, t, e.node), o._isActive = !1));
        }

        e.node.on(cc.Node.EventType.TOUCH_START, t, e.node);
      }
    }, this.fun[e.type](e), this._isActive = !0;
  };
  p.ShowToast = function (a, r, s, c, l, p, d, u) {
    var f = this;
    void 0 === r && (r = 40), void 0 === c && (c = 1), void 0 === l && (l = 0), void 0 === p && (p = cc.Color.WHITE), void 0 === d && (d = m["default"].MainView.PopBox), void 0 === u && (u = !0), a = o.Language.check(a), cc.resources.load("prefab/pop/ToastItem", cc.Prefab, function (e, t) {
      var o = cc.instantiate(t);

      if (o.scale = 0, u) {
        f.toastList.splice(0, 0, o);

        for (var n = 1; n < f.toastList.length; n++) {
          var i = f.toastList[n];
          i && (i.y += r + 20);
        }
      }

      o.setParent(d), o.setPosition(0, l);
      t = o.children[0].getComponent(cc.Label);
      t.string = a, t.fontSize = r, t.lineHeight = r + 10, t.node.color = p, s && (o.getComponent(cc.Sprite).enabled = !1), cc.tween(o).to(.1, {
        scale: 1
      }).delay(c).parallel(cc.tween().to(.3, {
        scale: 2
      }), cc.tween().to(.3, {
        opacity: 0
      })).call(function () {
        var e = f.toastList.indexOf(o);
        0 <= e && f.toastList.splice(e, 1), o.destroy(), o.removeFromParent(!1);
      }).start();
    });
  }, p.ShowImgToast = function (o) {
    var n = new cc.Node("ImgToast"),
        i = n.addComponent(cc.Sprite);
    n.scale = 0, cc.resources.load(o.path, cc.SpriteFrame, function (e, t) {
      i.spriteFrame = t, (o.parent || m["default"].MainView.PopBox).addChild(n), n.setPosition(cc.v2()), cc.tween(n).to(.1, {
        scale: 1
      }).delay(o.delayTime).parallel(cc.tween().to(.3, {
        scale: 2
      }), cc.tween().to(.3, {
        opacity: 0
      })).call(function () {
        n.destroy(), n.removeFromParent(!1);
      }).start();
    });
  }, p.OpenPop = function (t, o, n, i) {
    var a = this;
    if (void 0 === o && (o = {}), void 0 === n && (n = m["default"].MainView.PopBox), cc.log("openpop", t), this.letPopLoadingPath == t) return cc.log("正在打开界面");
    this.oldLoadPath.indexOf(t) < 0 && (this.oldLoadPath.push(t), this.SetUILoad(!0)), this.letPopLoadingPath = t, y.Manager.loader.loadPrefab(t).then(function (e) {
      a.SetUILoad(!1), a.letPopLoadingPath = "";
      var t = e.getComponent(f["default"]);
      t && (t.pdata = o), e.setParent(n), i && i(t);
    })["catch"](function (e) {
      a.SetUILoad(!1), cc.error("找不到界面:" + t, e);
    });
  }, p.LoadFxrAdView = function () {
    cc.resources.load("prefab/view/FxrAdView", cc.Prefab, function (e, t) {
      cc.instantiate(t).setParent(m["default"].MainView.node);
    });
  }, p.SetUILoad = function (e) {
    var t = this;
    this.uiLoadts ? e ? this.uiLoadts.show() : this.uiLoadts.hide() : 0 <= this.oldLoadPath.indexOf("prefab/pop/LoadIng") || this.OpenPop("prefab/pop/LoadIng", {}, m["default"].MainView.node, function (e) {
      t.uiLoadts = e, t.uiLoadts.hide();
    });
  }, p.showLabelPop = function (n) {
    cc.resources.load("prefab/pop/labelPop", cc.Prefab, function (e, t) {
      var o = cc.instantiate(t),
          t = o.getComponent(cc.Label);
      t.fontSize = n.fontSize || 40, t.string = n.text, o.setParent(n.parent || m["default"].MainView.PopBox), o.setPosition(n.pos.x, n.pos.y), cc.tween(o).delay(n.delay || 0).by(1, {
        y: 100
      }).parallel(cc.tween().by(.3, {
        y: 20
      }), cc.tween().to(.2, {
        opacity: 0
      })).call(function () {
        o.destroy();
      }).start();
    });
  }, p.showImgGoToTarget = function (a) {
    cc.resources.load("prefab/pop/imgPop", cc.Prefab, function (e, i) {
      return i ? void cc.resources.load(a.img, cc.SpriteFrame, function (e, n) {
        for (var t = 0; t < (a.num || 1); t++) {
          !function () {
            var e = cc.instantiate(i);
            e.getComponent(cc.Sprite).spriteFrame = n, e.scale = m["default"].GetRandomNum(4, 6) / 10, e.setParent(m["default"].MainView.PopBox), e.setPosition(a.startPos.x, a.startPos.y);
            var t = m["default"].getDistance(a.startPos, a.endPos),
                o = cc.tween(e);
            "in" == a.type ? (o.parallel(cc.tween().by(.1, {
              x: m["default"].GetRandomNum(-100, 100)
            }), cc.tween().by(m["default"].GetRandomNum(20, 30) / 100, {
              y: m["default"].GetRandomNum(60, 200)
            }).by(m["default"].GetRandomNum(5, 7) / 10, {
              y: -100
            }, {
              easing: "bounceOut"
            })), o.delay(m["default"].GetRandomNum(0, 5) / 10).to(.5, {
              position: a.endPos
            }).to(.2, {
              scale: 0
            })) : o.to(t / 1e3, {
              position: a.endPos
            }).parallel(cc.tween().to(.3, {
              scale: 3
            }), cc.tween().to(.2, {
              opacity: 0
            })), o.call(function () {
              a.cb && (a.cb(), a.cb = null), e.destroy();
            }).start();
          }();
        }
      }) : cc.log("缺少预制体");
    });
  }, p.GetScreenshot = function () {}, p.showCurrencyTips = function (n, i, a, r, s) {
    void 0 === a && (a = !1), void 0 === r && (r = cc.Vec2.ZERO), void 0 === s && (s = m["default"].MainView.PopBox), cc.resources.load("prefab/pop/ToastCurrencyItem", cc.Prefab, function (e, t) {
      var o = cc.instantiate(t);
      o.scale = 1, o.setParent(s), o.setPosition(r), o.getComponent(h["default"]).setText(n, i), a && (o.getComponent(cc.Sprite).enabled = !1), cc.tween(o).to(.1, {
        opacity: 255
      }).delay(.6).parallel(cc.tween().by(1, {
        y: 130
      }), cc.tween().delay(.7).to(.3, {
        scale: 0
      }), cc.tween().delay(.5).to(1, {
        opacity: 0
      })).call(function () {
        o.destroy(), o.removeFromParent(!1);
      }).start();
    });
  }, p.toastList = [], p.oldLoadPath = [], p.letPopLoadingPath = "", t = p;

  function p() {}

  o.UI = t;
})(o.CCTool || (o.CCTool = {}));

cc._RF.pop();
"use strict";
cc._RF.push(module, '28e3bgMkYFMBK613O48lQ1W', 'LoaderAdapter');
// scripts/LoaderAdapter.js

"use strict";

var e = require;
var t = module;
var o = exports;
"use strict";

Object.defineProperty(o, "__esModule", {
  value: !0
}), o.LoaderAdapter = void 0;
var c = e("AssetLoader"),
    n = e("ResUtil"),
    e = (i.prototype.loadRes = function () {
  var e = c["default"].makeLoadResArgs.apply(this, arguments);
  c.assetLoader.loadRes(e.url, e.type, e.onProgess, e.onCompleted, e.bundle);
}, i.prototype.preloadRes = function () {
  var e = c["default"].makeLoadResArgs.apply(this, arguments);
  c.assetLoader.preloadRes(e.url, e.type, e.onProgess, e.onCompleted, e.bundle);
}, i.prototype.releaseAsset = function (e) {
  c.assetLoader.releaseAsset(e);
}, i.prototype.loadSpriteAsync = function (e, i) {
  var a = this;
  return new Promise(function (o, n) {
    a.loadRes(e, cc.SpriteFrame, function (e, t) {
      e ? n(e) : ((e = t) instanceof cc.Texture2D && (e = new cc.SpriteFrame(t)), i && cc.isValid(i) && a.setAutoRelease(e, i, !0), o(e));
    });
  });
}, i.prototype.loadSpine = function (e, i) {
  var a = this;
  return new Promise(function (o, n) {
    a.loadRes(e, sp.SkeletonData, function (e, t) {
      e ? n(e) : (t = t, i && cc.isValid(i) && a.setAutoRelease(t, i, !0), o(t));
    });
  });
}, i.prototype.loadSpriteAltasAsync = function (e, i) {
  var a = this;
  return new Promise(function (o, n) {
    a.loadRes(e, function (e, t) {
      e ? n(e) : (i && cc.isValid(i) && a.setAutoRelease(t, i), o(t));
    });
  });
}, i.prototype.loadPrefab = function (e) {
  var i = this;
  return new Promise(function (o, n) {
    i.loadRes(e, cc.Prefab, function (e, t) {
      e ? n(e) : (t = i.instantiate(t), o(t));
    });
  });
}, i.prototype.instantiate = function (e) {
  var t = cc.instantiate(e);
  return this.setAutoRelease(e, t, !0), t;
}, i.prototype.loadDragonBones = function (e, a, r) {
  var s = this;
  return new Promise(function (n, i) {
    s.loadRes(e, dragonBones.DragonBonesAsset, function (e, t) {
      var o;
      e ? i() : (o = t, r && cc.isValid(r) && (s.setAutoRelease(t, r, !0), s.loadRes(a, dragonBones.DragonBonesAtlasAsset, function (e, t) {
        e ? i() : (s.setAutoRelease(t, r, !0), n({
          asset: o,
          atlasAsset: t
        }));
      })));
    });
  });
}, i.prototype.loadDragonBonesByPath = function (e, n, i, a) {
  var r,
      s = n.getComponent(dragonBones.ArmatureDisplay);
  s && (r = this, c.assetLoader.loadResDir(e, function (e, t) {
    if (!(e || t.length <= 0)) {
      for (var o in s.dragonAsset = null, s.dragonAtlasAsset = null, t) {
        t[o] instanceof dragonBones.DragonBonesAsset && (s.dragonAsset = t[o], r.setAutoRelease(t[o], n, !0)), t[o] instanceof dragonBones.DragonBonesAtlasAsset && (s.dragonAtlasAsset = t[o], r.setAutoRelease(t[o], n, !0));
      }

      s.armatureName = "Armature", i && (s.playAnimation(s.getAnimationNames(s.getArmatureNames()[0])[0], -1), s.timeScale = 1), a && a();
    }
  }));
}, i.prototype.setAutoRelease = function (e, t, o) {
  o = n.ResUtil.getResKeeper(t, o);
  return e && o ? (o.autoReleaseRes({
    asset: e
  }), e) : null;
}, i.prototype.makeUseKey = function () {
  return "@useKey_" + this.globalUseId++;
}, i);

function i() {
  this.globalUseId = 0;
}

o.LoaderAdapter = new e();

cc._RF.pop();
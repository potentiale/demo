"use strict";
cc._RF.push(module, 'f108aL9kz9C06GT7GdRgY1o', 'SkinCfg');
// scripts/SkinCfg.js

"use strict";

var e = require;
var t = module;
var o = exports;
"use strict";

var _n,
    t = void 0 && (void 0).__extends || (_n = function n(e, t) {
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
}), o.SkinCfgReader = o.SkinDefine = void 0;
e = e("TConfig");
o.SkinDefine = {
  RoleDefaultHat: 2e4,
  RoleDefaultClothes: 20100,
  RoleDefaultWing: 20200
};
var i,
    t = (i = e.TConfig, t(a, i), a);

function a() {
  var e = i.call(this) || this;
  return e._name = "Skin", e.initByMap({
    2e4: {
      id: 2e4,
      define: "RoleDefaultHat",
      RoleType: 1,
      SkinType: 1,
      sequence: 1,
      unlockType: 0,
      name: "默认",
      SkinSocket: ["hat", "null"],
      SkinIcon: "img/skinicon/Disable"
    },
    20001: {
      id: 20001,
      RoleType: 1,
      SkinType: 1,
      sequence: 3,
      unlockType: 2,
      name: "凹凸鳗面具",
      SkinSocket: ["hat", "hat_6"],
      SkinIcon: "img/skinicon/hat1"
    },
    20002: {
      id: 20002,
      RoleType: 1,
      SkinType: 1,
      sequence: 6,
      unlockType: 2,
      name: "粽子头套",
      SkinSocket: ["hat", "hat_7"],
      SkinIcon: "img/skinicon/hat2"
    },
    20003: {
      id: 20003,
      RoleType: 1,
      SkinType: 1,
      sequence: 2,
      unlockType: 1,
      unlockCost: 100,
      name: "小红帽子",
      SkinSocket: ["hat", "hat_8"],
      SkinIcon: "img/skinicon/hat3"
    },
    20004: {
      id: 20004,
      RoleType: 1,
      SkinType: 1,
      sequence: 5,
      unlockType: 2,
      name: "磕大鸭睡帽",
      SkinSocket: ["hat", "hat_9"],
      SkinIcon: "img/skinicon/hat4"
    },
    20005: {
      id: 20005,
      RoleType: 1,
      SkinType: 1,
      sequence: 4,
      unlockType: 2,
      name: "便便头套",
      SkinSocket: ["hat", "hat_10"],
      SkinIcon: "img/skinicon/hat5"
    },
    20100: {
      id: 20100,
      define: "RoleDefaultClothes",
      RoleType: 1,
      SkinType: 2,
      sequence: 1,
      unlockType: 0,
      name: "默认",
      SkinIcon: "img/skinicon/Disable"
    },
    20101: {
      id: 20101,
      RoleType: 1,
      SkinType: 2,
      sequence: 3,
      unlockType: 2,
      name: "凹凸鳗战衣",
      SkinSocket: ["b6"],
      SkinIcon: "img/skinicon/body1"
    },
    20102: {
      id: 20102,
      RoleType: 1,
      SkinType: 2,
      sequence: 6,
      unlockType: 2,
      name: "粽子卫衣",
      SkinSocket: ["b7"],
      SkinIcon: "img/skinicon/body2"
    },
    20103: {
      id: 20103,
      RoleType: 1,
      SkinType: 2,
      sequence: 2,
      unlockType: 1,
      unlockCost: 200,
      name: "小红衣",
      SkinSocket: ["b8"],
      SkinIcon: "img/skinicon/body3"
    },
    20104: {
      id: 20104,
      RoleType: 1,
      SkinType: 2,
      sequence: 5,
      unlockType: 2,
      name: "磕大鸭睡衣",
      SkinSocket: ["b9"],
      SkinIcon: "img/skinicon/body4"
    },
    20105: {
      id: 20105,
      RoleType: 1,
      SkinType: 2,
      sequence: 4,
      unlockType: 2,
      name: "便便小蓝衣",
      SkinSocket: ["b10"],
      SkinIcon: "img/skinicon/body5"
    },
    20200: {
      id: 20200,
      define: "RoleDefaultWing",
      RoleType: 1,
      SkinType: 3,
      sequence: 1,
      unlockType: 0,
      name: "默认",
      SkinSocket: ["wing", "null"],
      SkinIcon: "img/skinicon/Disable"
    },
    20201: {
      id: 20201,
      RoleType: 1,
      SkinType: 3,
      sequence: 3,
      unlockType: 2,
      name: "黄金羽翼",
      SkinSocket: ["wing", "wing_6"],
      SkinIcon: "img/skinicon/wing1"
    },
    20202: {
      id: 20202,
      RoleType: 1,
      SkinType: 3,
      sequence: 6,
      unlockType: 2,
      name: "小龙粥",
      SkinSocket: ["wing", "wing_7"],
      SkinIcon: "img/skinicon/wing2"
    },
    20203: {
      id: 20203,
      RoleType: 1,
      SkinType: 3,
      sequence: 2,
      unlockType: 1,
      unlockCost: 300,
      name: "气球",
      SkinSocket: ["wing", "wing_8"],
      SkinIcon: "img/skinicon/wing3"
    },
    20204: {
      id: 20204,
      RoleType: 1,
      SkinType: 3,
      sequence: 5,
      unlockType: 2,
      name: "精灵球球",
      SkinSocket: ["wing", "wing_9"],
      SkinIcon: "img/skinicon/wing4"
    },
    20205: {
      id: 20205,
      RoleType: 1,
      SkinType: 3,
      sequence: 4,
      unlockType: 2,
      name: "小小美食家",
      SkinSocket: ["wing", "wing_10"],
      SkinIcon: "img/skinicon/wing5"
    }
  }), e;
}

o.SkinCfgReader = t;

cc._RF.pop();
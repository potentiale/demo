"use strict";
cc._RF.push(module, '45a79osZw1G4Ktb5hL58P2H', 'ItemCfg');
// scripts/ItemCfg.js

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
}), o.ItemCfgReader = void 0;
var i,
    t = (i = e("TConfig").TConfig, t(a, i), a);

function a() {
  var e = i.call(this) || this;
  return e._name = "Item", e.initByMap({
    1: {
      id: 1,
      name: "金币",
      type: 1,
      introduction: "通用货币"
    },
    100: {
      id: 100,
      name: "凹凸激光",
      type: 2,
      introduction: "当老板施放技能时，30%几率发出激光，控制老板3秒"
    },
    101: {
      id: 101,
      name: "勇者之盾",
      type: 2,
      introduction: "当门血量低于30%时，产生一个3s无敌的保护盾"
    },
    102: {
      id: 102,
      name: "招财猫",
      type: 2,
      introduction: "给予炮台偷钱的能力，取决于炮台的等级"
    },
    103: {
      id: 103,
      name: "冰河纸鹤",
      type: 2,
      introduction: "减缓老板20%攻速"
    },
    104: {
      id: 104,
      name: "蛛网发射器",
      type: 2,
      introduction: "100%对撤退的老板射出一张网并束缚2秒"
    },
    105: {
      id: 105,
      name: "钉刺",
      type: 2,
      introduction: "门被攻击时，每秒对老板造成1%最大生命值的伤害"
    },
    106: {
      id: 106,
      name: "激光炮",
      type: 2,
      introduction: "老板生命值低于20%时，直接给予10%最大生命值的伤害"
    },
    107: {
      id: 107,
      name: "维修臂",
      type: 2,
      introduction: "每秒恢复门2%的生命值，没有距离限制"
    },
    108: {
      id: 108,
      name: "心灵宝石",
      type: 2,
      introduction: "增加炮台20%攻击范围"
    },
    109: {
      id: 109,
      name: "时间宝石",
      type: 2,
      introduction: "增加炮台50%攻击速度"
    },
    110: {
      id: 110,
      name: "力量宝石",
      type: 2,
      introduction: "老板距离门越近，攻速越快"
    }
  }), e;
}

o.ItemCfgReader = t;

cc._RF.pop();
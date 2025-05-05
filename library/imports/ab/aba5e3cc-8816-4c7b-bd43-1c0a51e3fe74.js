"use strict";
cc._RF.push(module, 'aba5ePMiBZMe71DHApR4/50', 'RoleManCfg');
// scripts/RoleManCfg.js

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
}), o.RoleManCfgReader = void 0;
var i,
    t = (i = e("TConfig").TConfig, t(a, i), a);

function a() {
  var e = i.call(this) || this;
  return e._name = "RoleMan", e.initByMap({
    1e4: {
      id: 1e4,
      type: 1,
      sequence: 2,
      unlockType: 3,
      unlockCost: 1,
      skinName: "b1",
      headDefault: ["head", "head_5", "braid1", "null", "braid2", "null"],
      name: "小帅",
      profession: "临时工",
      hometown: "NJ",
      story: "梦想是当歌手，但现在担任负责人，出了什么事都是他负责。",
      skillID: [1e4],
      RoleBones: "bones/role"
    },
    10100: {
      id: 10100,
      type: 1,
      sequence: 1,
      unlockType: 1,
      unlockCost: 1,
      skinName: "b2",
      headDefault: ["head", "head_2", "braid1", "braid1_2", "braid2", "braid2_2"],
      name: "小美",
      profession: "财务",
      hometown: "CD",
      story: "打工多年拥有自己的小金库，靠着优秀的理财能力躺平生活。",
      skillID: [10100],
      RoleBones: "bones/role"
    },
    10200: {
      id: 10200,
      type: 1,
      sequence: 3,
      unlockType: 3,
      unlockCost: 1,
      skinName: "b4",
      headDefault: ["head", "head_4", "braid1", "null", "braid2", "null"],
      name: "阿猿",
      profession: "程序员",
      hometown: "不详",
      story: "这猴子打小就聪明，热爱创造搞发明，能够为大家创造很多小东西",
      skillID: [10200, 10250],
      RoleBones: "bones/role"
    },
    10300: {
      id: 10300,
      type: 1,
      sequence: 4,
      unlockType: 3,
      unlockCost: 1,
      skinName: "b3",
      headDefault: ["head", "head_3", "braid1", "braid1_3", "braid2", "braid2_3"],
      name: "丽丽",
      profession: "设计师",
      hometown: "FJ",
      story: "画画特别有天赋，能够使画作具象化，在某次绘画中绘画了自己而产生了自己的分身",
      skillID: [10300, 10350],
      RoleBones: "bones/role"
    }
  }), e;
}

o.RoleManCfgReader = t;

cc._RF.pop();
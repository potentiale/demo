"use strict";
cc._RF.push(module, '9a997YPkFFKFq9pbjnMbDac', 'ManCfg');
// scripts/ManCfg.js

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
}), o.ManCfgReader = void 0;
var i,
    t = (i = e("TConfig").TConfig, t(a, i), a);

function a() {
  var e = i.call(this) || this;
  return e._name = "Man", e.initByMap({
    1: {
      id: 1,
      name: "资源型1",
      born: 3,
      buildingMax: '{"2":6,"4":4,"5":4}',
      type1: [8, 1, 1],
      type2: [8, 1, 1],
      resource1: [15, 8, 5, 2],
      resource2: [10, 8, 5, 2],
      defend1: [8, 4, 3],
      defend2: [8, 4, 3],
      attack1: [10, 2],
      attack2: [10, 2],
      model: [1]
    },
    2: {
      id: 2,
      name: "资源型2",
      born: 3,
      buildingMax: '{"2":5,"4":5,"5":5}',
      type1: [7, 2, 1],
      type2: [7, 2, 1],
      resource1: [15, 8, 5, 2],
      resource2: [10, 8, 5, 2],
      defend1: [8, 4, 3],
      defend2: [8, 4, 3],
      attack1: [10, 2],
      attack2: [10, 2],
      model: [1]
    },
    3: {
      id: 3,
      name: "资源型3",
      born: 3,
      buildingMax: '{"2":4,"4":6,"5":6}',
      type1: [7, 1, 2],
      type2: [7, 1, 2],
      resource1: [15, 8, 5, 2],
      resource2: [10, 8, 5, 2],
      defend1: [8, 4, 3],
      defend2: [8, 4, 3],
      attack1: [10, 2],
      attack2: [10, 2],
      model: [1]
    },
    4: {
      id: 4,
      name: "攻击型1",
      born: 2,
      buildingMax: '{"2":6,"4":5,"5":2}',
      type1: [6, 3, 1],
      type2: [6, 3, 1],
      resource1: [15, 8, 5, 2],
      resource2: [10, 8, 5, 2],
      defend1: [8, 4, 3],
      defend2: [8, 4, 3],
      attack1: [10, 2],
      attack2: [10, 2],
      model: [1]
    },
    5: {
      id: 5,
      name: "攻击型2",
      born: 2,
      buildingMax: '{"2":7,"4":4,"5":2}',
      type1: [5, 4, 1],
      type2: [5, 4, 1],
      resource1: [10, 8, 5, 2],
      resource2: [10, 8, 5, 2],
      defend1: [8, 4, 3],
      defend2: [8, 4, 3],
      attack1: [10, 2],
      attack2: [10, 2],
      model: [1]
    },
    6: {
      id: 6,
      name: "攻击型3",
      born: 2,
      buildingMax: '{"2":8,"4":3,"5":1}',
      type1: [5, 3, 2],
      type2: [5, 3, 2],
      resource1: [10, 8, 5, 2],
      resource2: [10, 8, 5, 2],
      defend1: [8, 4, 3],
      defend2: [8, 4, 3],
      attack1: [10, 2],
      attack2: [10, 2],
      model: [1]
    },
    7: {
      id: 7,
      name: "防御型1",
      born: 4,
      buildingMax: '{"2":4,"4":4,"5":2}',
      type1: [6, 1, 3],
      type2: [6, 1, 3],
      resource1: [10, 8, 5, 2],
      resource2: [10, 8, 5, 2],
      defend1: [8, 4, 3],
      defend2: [8, 4, 3],
      attack1: [10, 2],
      attack2: [10, 2],
      model: [1, 3]
    },
    8: {
      id: 8,
      name: "防御型2",
      born: 4,
      buildingMax: '{"2":5,"4":5,"5":2}',
      type1: [5, 1, 4],
      type2: [5, 1, 4],
      resource1: [10, 8, 5, 2],
      resource2: [10, 8, 5, 2],
      defend1: [8, 4, 3],
      defend2: [8, 4, 3],
      attack1: [10, 2],
      attack2: [10, 2],
      model: [1, 3]
    },
    9: {
      id: 9,
      name: "防御型3",
      born: 4,
      buildingMax: '{"2":6,"4":5,"5":3}',
      type1: [5, 2, 3],
      type2: [5, 2, 3],
      resource1: [10, 8, 5, 2],
      resource2: [10, 8, 5, 2],
      defend1: [8, 4, 3],
      defend2: [8, 4, 3],
      attack1: [10, 2],
      attack2: [10, 2],
      model: [1, 3]
    },
    10: {
      id: 10,
      name: "平衡型1",
      born: 2,
      buildingMax: '{"2":5,"4":5,"5":5}',
      type1: [4, 3, 3],
      type2: [4, 3, 3],
      resource1: [10, 8, 5, 2],
      resource2: [10, 8, 5, 2],
      defend1: [8, 4, 3],
      defend2: [8, 4, 3],
      attack1: [10, 2],
      attack2: [10, 2],
      model: [1, 3]
    },
    11: {
      id: 11,
      name: "平衡型2",
      born: 2,
      buildingMax: '{"2":5,"4":5,"5":5}',
      type1: [4, 4, 2],
      type2: [4, 4, 2],
      resource1: [10, 8, 5, 2],
      resource2: [10, 8, 5, 2],
      defend1: [8, 4, 3],
      defend2: [8, 4, 3],
      attack1: [10, 2],
      attack2: [10, 2],
      model: [1, 3]
    },
    12: {
      id: 12,
      name: "平衡型3",
      born: 2,
      buildingMax: '{"2":5,"4":5,"5":5}',
      type1: [4, 2, 4],
      type2: [4, 2, 4],
      resource1: [10, 8, 5, 2],
      resource2: [10, 8, 5, 2],
      defend1: [8, 4, 3],
      defend2: [8, 4, 3],
      attack1: [10, 2],
      attack2: [10, 2],
      model: [1, 3]
    },
    18: {
      id: 18,
      name: "平衡型3",
      born: 10,
      buildingMax: '{"2":5,"4":2,"5":2,"17":3,"18":2,"19":2}',
      type1: [5, 4, 2, 1],
      type2: [1, 5, 10, 1],
      resource1: [10, 8, 5, 2],
      resource2: [10, 8, 5, 2],
      defend1: [10, 5, 4],
      defend2: [10, 4, 3],
      attack1: [10, 2],
      attack2: [10, 2],
      monster1: [5, 5, 7],
      monster2: [5, 5, 8],
      specialtower: [85, 155],
      model: [2]
    }
  }), e;
}

o.ManCfgReader = t;

cc._RF.pop();
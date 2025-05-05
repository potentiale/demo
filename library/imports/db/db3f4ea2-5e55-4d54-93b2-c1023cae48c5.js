"use strict";
cc._RF.push(module, 'db3f46iXlVNVJOywQI8rkjF', 'RuleCfg');
// scripts/RuleCfg.js

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
}), o.RuleCfgReader = void 0;
var i,
    t = (i = e("TConfig").TConfig, t(a, i), a);

function a() {
  var e = i.call(this) || this;
  return e._name = "Rule", e.initByMap({
    1: {
      id: 1,
      text: "员工守则"
    },
    2: {
      id: 2,
      text: "1、工作态度：保持高效，禁止加班。\n2、会议制度：每天早上请于9:00准时到办公室进行早会。\n3、公共环境：为了消防安全着想，办公室严禁摆放私人物品。\n4、工作制度：工作时间内，员工不得擅离工作岗位，不得从事与工作无关的行为。\n5、禁止区域：不得靠近老板办公桌区域，不得私用公司电话。\n6、注意事项：禁止于公司区域进行拍摄活动，发现者点名表扬。\n7、入职要求：由于公司每年损耗的大门可以绕地球三圈，所以必须掌握维修大门技能，实在不行就自费叫修门师傅。\n8、员工福利：快递柜每天都可以收到神秘快递。\n9、生活便利：门口小卖部可以购买必需品，请合理消费。"
    }
  }), e;
}

o.RuleCfgReader = t;

cc._RF.pop();
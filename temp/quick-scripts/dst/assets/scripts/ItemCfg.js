
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ItemCfg.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcSXRlbUNmZy5qcyJdLCJuYW1lcyI6WyJlIiwicmVxdWlyZSIsInQiLCJtb2R1bGUiLCJvIiwiZXhwb3J0cyIsIm4iLCJfX2V4dGVuZHMiLCJPYmplY3QiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsIkFycmF5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiY29uc3RydWN0b3IiLCJjcmVhdGUiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiSXRlbUNmZ1JlYWRlciIsImkiLCJUQ29uZmlnIiwiYSIsIl9uYW1lIiwiaW5pdEJ5TWFwIiwiaWQiLCJuYW1lIiwidHlwZSIsImludHJvZHVjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFDLEdBQUNDLE9BQU47QUFDQSxJQUFJQyxDQUFDLEdBQUNDLE1BQU47QUFDQSxJQUFJQyxDQUFDLEdBQUNDLE9BQU47QUFDQTs7QUFBYSxJQUFJQyxFQUFKO0FBQUEsSUFBTUosQ0FBQyxHQUFDLFVBQU0sU0FBS0ssU0FBWCxLQUF1QkQsRUFBQyxHQUFDLFdBQVNOLENBQVQsRUFBV0UsQ0FBWCxFQUFhO0FBQUMsU0FBTSxDQUFDSSxFQUFDLEdBQUNFLE1BQU0sQ0FBQ0MsY0FBUCxJQUF1QjtBQUFDQyxJQUFBQSxTQUFTLEVBQUM7QUFBWCxlQUF5QkMsS0FBekIsSUFBZ0MsVUFBU1gsQ0FBVCxFQUFXRSxDQUFYLEVBQWE7QUFBQ0YsSUFBQUEsQ0FBQyxDQUFDVSxTQUFGLEdBQVlSLENBQVo7QUFBYyxHQUFuRixJQUFxRixVQUFTRixDQUFULEVBQVdFLENBQVgsRUFBYTtBQUFDLFNBQUksSUFBSUUsQ0FBUixJQUFhRixDQUFiO0FBQWVNLE1BQUFBLE1BQU0sQ0FBQ0ksU0FBUCxDQUFpQkMsY0FBakIsQ0FBZ0NDLElBQWhDLENBQXFDWixDQUFyQyxFQUF1Q0UsQ0FBdkMsTUFBNENKLENBQUMsQ0FBQ0ksQ0FBRCxDQUFELEdBQUtGLENBQUMsQ0FBQ0UsQ0FBRCxDQUFsRDtBQUFmO0FBQXNFLEdBQTVLLEVBQThLSixDQUE5SyxFQUFnTEUsQ0FBaEwsQ0FBTjtBQUF5TCxDQUF6TSxFQUEwTSxVQUFTRixDQUFULEVBQVdFLENBQVgsRUFBYTtBQUFDLFdBQVNFLENBQVQsR0FBWTtBQUFDLFNBQUtXLFdBQUwsR0FBaUJmLENBQWpCO0FBQW1COztBQUFBTSxFQUFBQSxFQUFDLENBQUNOLENBQUQsRUFBR0UsQ0FBSCxDQUFELEVBQU9GLENBQUMsQ0FBQ1ksU0FBRixHQUFZLFNBQU9WLENBQVAsR0FBU00sTUFBTSxDQUFDUSxNQUFQLENBQWNkLENBQWQsQ0FBVCxJQUEyQkUsQ0FBQyxDQUFDUSxTQUFGLEdBQVlWLENBQUMsQ0FBQ1UsU0FBZCxFQUF3QixJQUFJUixDQUFKLEVBQW5ELENBQW5CO0FBQTZFLENBQTVWLENBQVI7O0FBQXNXSSxNQUFNLENBQUNTLGNBQVAsQ0FBc0JiLENBQXRCLEVBQXdCLFlBQXhCLEVBQXFDO0FBQUNjLEVBQUFBLEtBQUssRUFBQyxDQUFDO0FBQVIsQ0FBckMsR0FBaURkLENBQUMsQ0FBQ2UsYUFBRixHQUFnQixLQUFLLENBQXRFO0FBQXdFLElBQUlDLENBQUo7QUFBQSxJQUFNbEIsQ0FBQyxJQUFFa0IsQ0FBQyxHQUFDcEIsQ0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhcUIsT0FBZixFQUF1Qm5CLENBQUMsQ0FBQ29CLENBQUQsRUFBR0YsQ0FBSCxDQUF4QixFQUE4QkUsQ0FBaEMsQ0FBUDs7QUFBMEMsU0FBU0EsQ0FBVCxHQUFZO0FBQUMsTUFBSXRCLENBQUMsR0FBQ29CLENBQUMsQ0FBQ04sSUFBRixDQUFPLElBQVAsS0FBYyxJQUFwQjtBQUF5QixTQUFPZCxDQUFDLENBQUN1QixLQUFGLEdBQVEsTUFBUixFQUFldkIsQ0FBQyxDQUFDd0IsU0FBRixDQUFZO0FBQUMsT0FBRTtBQUFDQyxNQUFBQSxFQUFFLEVBQUMsQ0FBSjtBQUFNQyxNQUFBQSxJQUFJLEVBQUMsSUFBWDtBQUFnQkMsTUFBQUEsSUFBSSxFQUFDLENBQXJCO0FBQXVCQyxNQUFBQSxZQUFZLEVBQUM7QUFBcEMsS0FBSDtBQUErQyxTQUFJO0FBQUNILE1BQUFBLEVBQUUsRUFBQyxHQUFKO0FBQVFDLE1BQUFBLElBQUksRUFBQyxNQUFiO0FBQW9CQyxNQUFBQSxJQUFJLEVBQUMsQ0FBekI7QUFBMkJDLE1BQUFBLFlBQVksRUFBQztBQUF4QyxLQUFuRDtBQUF3SCxTQUFJO0FBQUNILE1BQUFBLEVBQUUsRUFBQyxHQUFKO0FBQVFDLE1BQUFBLElBQUksRUFBQyxNQUFiO0FBQW9CQyxNQUFBQSxJQUFJLEVBQUMsQ0FBekI7QUFBMkJDLE1BQUFBLFlBQVksRUFBQztBQUF4QyxLQUE1SDtBQUErTCxTQUFJO0FBQUNILE1BQUFBLEVBQUUsRUFBQyxHQUFKO0FBQVFDLE1BQUFBLElBQUksRUFBQyxLQUFiO0FBQW1CQyxNQUFBQSxJQUFJLEVBQUMsQ0FBeEI7QUFBMEJDLE1BQUFBLFlBQVksRUFBQztBQUF2QyxLQUFuTTtBQUFnUSxTQUFJO0FBQUNILE1BQUFBLEVBQUUsRUFBQyxHQUFKO0FBQVFDLE1BQUFBLElBQUksRUFBQyxNQUFiO0FBQW9CQyxNQUFBQSxJQUFJLEVBQUMsQ0FBekI7QUFBMkJDLE1BQUFBLFlBQVksRUFBQztBQUF4QyxLQUFwUTtBQUF5VCxTQUFJO0FBQUNILE1BQUFBLEVBQUUsRUFBQyxHQUFKO0FBQVFDLE1BQUFBLElBQUksRUFBQyxPQUFiO0FBQXFCQyxNQUFBQSxJQUFJLEVBQUMsQ0FBMUI7QUFBNEJDLE1BQUFBLFlBQVksRUFBQztBQUF6QyxLQUE3VDtBQUE4WCxTQUFJO0FBQUNILE1BQUFBLEVBQUUsRUFBQyxHQUFKO0FBQVFDLE1BQUFBLElBQUksRUFBQyxJQUFiO0FBQWtCQyxNQUFBQSxJQUFJLEVBQUMsQ0FBdkI7QUFBeUJDLE1BQUFBLFlBQVksRUFBQztBQUF0QyxLQUFsWTtBQUFtYyxTQUFJO0FBQUNILE1BQUFBLEVBQUUsRUFBQyxHQUFKO0FBQVFDLE1BQUFBLElBQUksRUFBQyxLQUFiO0FBQW1CQyxNQUFBQSxJQUFJLEVBQUMsQ0FBeEI7QUFBMEJDLE1BQUFBLFlBQVksRUFBQztBQUF2QyxLQUF2YztBQUE2Z0IsU0FBSTtBQUFDSCxNQUFBQSxFQUFFLEVBQUMsR0FBSjtBQUFRQyxNQUFBQSxJQUFJLEVBQUMsS0FBYjtBQUFtQkMsTUFBQUEsSUFBSSxFQUFDLENBQXhCO0FBQTBCQyxNQUFBQSxZQUFZLEVBQUM7QUFBdkMsS0FBamhCO0FBQThrQixTQUFJO0FBQUNILE1BQUFBLEVBQUUsRUFBQyxHQUFKO0FBQVFDLE1BQUFBLElBQUksRUFBQyxNQUFiO0FBQW9CQyxNQUFBQSxJQUFJLEVBQUMsQ0FBekI7QUFBMkJDLE1BQUFBLFlBQVksRUFBQztBQUF4QyxLQUFsbEI7QUFBeW9CLFNBQUk7QUFBQ0gsTUFBQUEsRUFBRSxFQUFDLEdBQUo7QUFBUUMsTUFBQUEsSUFBSSxFQUFDLE1BQWI7QUFBb0JDLE1BQUFBLElBQUksRUFBQyxDQUF6QjtBQUEyQkMsTUFBQUEsWUFBWSxFQUFDO0FBQXhDLEtBQTdvQjtBQUFvc0IsU0FBSTtBQUFDSCxNQUFBQSxFQUFFLEVBQUMsR0FBSjtBQUFRQyxNQUFBQSxJQUFJLEVBQUMsTUFBYjtBQUFvQkMsTUFBQUEsSUFBSSxFQUFDLENBQXpCO0FBQTJCQyxNQUFBQSxZQUFZLEVBQUM7QUFBeEM7QUFBeHNCLEdBQVosQ0FBZixFQUE2eEI1QixDQUFweUI7QUFBc3lCOztBQUFBSSxDQUFDLENBQUNlLGFBQUYsR0FBZ0JqQixDQUFoQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGU9cmVxdWlyZTtcbnZhciB0PW1vZHVsZTtcbnZhciBvPWV4cG9ydHM7XG5cInVzZSBzdHJpY3RcIjt2YXIgbix0PXRoaXMmJnRoaXMuX19leHRlbmRzfHwobj1mdW5jdGlvbihlLHQpe3JldHVybihuPU9iamVjdC5zZXRQcm90b3R5cGVPZnx8e19fcHJvdG9fXzpbXX1pbnN0YW5jZW9mIEFycmF5JiZmdW5jdGlvbihlLHQpe2UuX19wcm90b19fPXR9fHxmdW5jdGlvbihlLHQpe2Zvcih2YXIgbyBpbiB0KU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LG8pJiYoZVtvXT10W29dKX0pKGUsdCl9LGZ1bmN0aW9uKGUsdCl7ZnVuY3Rpb24gbygpe3RoaXMuY29uc3RydWN0b3I9ZX1uKGUsdCksZS5wcm90b3R5cGU9bnVsbD09PXQ/T2JqZWN0LmNyZWF0ZSh0KTooby5wcm90b3R5cGU9dC5wcm90b3R5cGUsbmV3IG8pfSk7T2JqZWN0LmRlZmluZVByb3BlcnR5KG8sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksby5JdGVtQ2ZnUmVhZGVyPXZvaWQgMDt2YXIgaSx0PShpPWUoXCJUQ29uZmlnXCIpLlRDb25maWcsdChhLGkpLGEpO2Z1bmN0aW9uIGEoKXt2YXIgZT1pLmNhbGwodGhpcyl8fHRoaXM7cmV0dXJuIGUuX25hbWU9XCJJdGVtXCIsZS5pbml0QnlNYXAoezE6e2lkOjEsbmFtZTpcIumHkeW4gVwiLHR5cGU6MSxpbnRyb2R1Y3Rpb246XCLpgJrnlKjotKfluIFcIn0sMTAwOntpZDoxMDAsbmFtZTpcIuWHueWHuOa/gOWFiVwiLHR5cGU6MixpbnRyb2R1Y3Rpb246XCLlvZPogIHmnb/mlr3mlL7mioDog73ml7bvvIwzMCXlh6Dnjoflj5Hlh7rmv4DlhYnvvIzmjqfliLbogIHmnb8z56eSXCJ9LDEwMTp7aWQ6MTAxLG5hbWU6XCLli4fogIXkuYvnm75cIix0eXBlOjIsaW50cm9kdWN0aW9uOlwi5b2T6Zeo6KGA6YeP5L2O5LqOMzAl5pe277yM5Lqn55Sf5LiA5LiqM3Pml6DmlYznmoTkv53miqTnm75cIn0sMTAyOntpZDoxMDIsbmFtZTpcIuaLm+i0oueMq1wiLHR5cGU6MixpbnRyb2R1Y3Rpb246XCLnu5nkuojngq7lj7DlgbfpkrHnmoTog73lipvvvIzlj5blhrPkuo7ngq7lj7DnmoTnrYnnuqdcIn0sMTAzOntpZDoxMDMsbmFtZTpcIuWGsOays+e6uOm5pFwiLHR5cGU6MixpbnRyb2R1Y3Rpb246XCLlh4/nvJPogIHmnb8yMCXmlLvpgJ9cIn0sMTA0OntpZDoxMDQsbmFtZTpcIuibm+e9keWPkeWwhOWZqFwiLHR5cGU6MixpbnRyb2R1Y3Rpb246XCIxMDAl5a+55pKk6YCA55qE6ICB5p2/5bCE5Ye65LiA5byg572R5bm25p2f57yaMuenklwifSwxMDU6e2lkOjEwNSxuYW1lOlwi6ZKJ5Yi6XCIsdHlwZToyLGludHJvZHVjdGlvbjpcIumXqOiiq+aUu+WHu+aXtu+8jOavj+enkuWvueiAgeadv+mAoOaIkDEl5pyA5aSn55Sf5ZG95YC855qE5Lyk5a6zXCJ9LDEwNjp7aWQ6MTA2LG5hbWU6XCLmv4DlhYnngq5cIix0eXBlOjIsaW50cm9kdWN0aW9uOlwi6ICB5p2/55Sf5ZG95YC85L2O5LqOMjAl5pe277yM55u05o6l57uZ5LqIMTAl5pyA5aSn55Sf5ZG95YC855qE5Lyk5a6zXCJ9LDEwNzp7aWQ6MTA3LG5hbWU6XCLnu7Tkv67oh4JcIix0eXBlOjIsaW50cm9kdWN0aW9uOlwi5q+P56eS5oGi5aSN6ZeoMiXnmoTnlJ/lkb3lgLzvvIzmsqHmnInot53nprvpmZDliLZcIn0sMTA4OntpZDoxMDgsbmFtZTpcIuW/g+eBteWuneefs1wiLHR5cGU6MixpbnRyb2R1Y3Rpb246XCLlop7liqDngq7lj7AyMCXmlLvlh7vojIPlm7RcIn0sMTA5OntpZDoxMDksbmFtZTpcIuaXtumXtOWuneefs1wiLHR5cGU6MixpbnRyb2R1Y3Rpb246XCLlop7liqDngq7lj7A1MCXmlLvlh7vpgJ/luqZcIn0sMTEwOntpZDoxMTAsbmFtZTpcIuWKm+mHj+Wuneefs1wiLHR5cGU6MixpbnRyb2R1Y3Rpb246XCLogIHmnb/ot53nprvpl6jotorov5HvvIzmlLvpgJ/otorlv6tcIn19KSxlfW8uSXRlbUNmZ1JlYWRlcj10Il19
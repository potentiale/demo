
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/SkinCfg.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU2tpbkNmZy5qcyJdLCJuYW1lcyI6WyJlIiwicmVxdWlyZSIsInQiLCJtb2R1bGUiLCJvIiwiZXhwb3J0cyIsIm4iLCJfX2V4dGVuZHMiLCJPYmplY3QiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsIkFycmF5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiY29uc3RydWN0b3IiLCJjcmVhdGUiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiU2tpbkNmZ1JlYWRlciIsIlNraW5EZWZpbmUiLCJSb2xlRGVmYXVsdEhhdCIsIlJvbGVEZWZhdWx0Q2xvdGhlcyIsIlJvbGVEZWZhdWx0V2luZyIsImkiLCJUQ29uZmlnIiwiYSIsIl9uYW1lIiwiaW5pdEJ5TWFwIiwiaWQiLCJkZWZpbmUiLCJSb2xlVHlwZSIsIlNraW5UeXBlIiwic2VxdWVuY2UiLCJ1bmxvY2tUeXBlIiwibmFtZSIsIlNraW5Tb2NrZXQiLCJTa2luSWNvbiIsInVubG9ja0Nvc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBQyxHQUFDQyxPQUFOO0FBQ0EsSUFBSUMsQ0FBQyxHQUFDQyxNQUFOO0FBQ0EsSUFBSUMsQ0FBQyxHQUFDQyxPQUFOO0FBQ0E7O0FBQWEsSUFBSUMsRUFBSjtBQUFBLElBQU1KLENBQUMsR0FBQyxVQUFNLFNBQUtLLFNBQVgsS0FBdUJELEVBQUMsR0FBQyxXQUFTTixDQUFULEVBQVdFLENBQVgsRUFBYTtBQUFDLFNBQU0sQ0FBQ0ksRUFBQyxHQUFDRSxNQUFNLENBQUNDLGNBQVAsSUFBdUI7QUFBQ0MsSUFBQUEsU0FBUyxFQUFDO0FBQVgsZUFBeUJDLEtBQXpCLElBQWdDLFVBQVNYLENBQVQsRUFBV0UsQ0FBWCxFQUFhO0FBQUNGLElBQUFBLENBQUMsQ0FBQ1UsU0FBRixHQUFZUixDQUFaO0FBQWMsR0FBbkYsSUFBcUYsVUFBU0YsQ0FBVCxFQUFXRSxDQUFYLEVBQWE7QUFB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QUFBQSxVQUFVLEVBQUMsQ0FBQyxNQUFELEVBQVEsUUFBUixDQUE1RjtBQUE4R0MsTUFBQUEsUUFBUSxFQUFDO0FBQXZILEtBQXIrRDtBQUFrbkUsV0FBTTtBQUFDUixNQUFBQSxFQUFFLEVBQUMsS0FBSjtBQUFVRSxNQUFBQSxRQUFRLEVBQUMsQ0FBbkI7QUFBcUJDLE1BQUFBLFFBQVEsRUFBQyxDQUE5QjtBQUFnQ0MsTUFBQUEsUUFBUSxFQUFDLENBQXpDO0FBQTJDQyxNQUFBQSxVQUFVLEVBQUMsQ0FBdEQ7QUFBd0RDLE1BQUFBLElBQUksRUFBQyxNQUE3RDtBQUFvRUMsTUFBQUEsVUFBVSxFQUFDLENBQUMsTUFBRCxFQUFRLFFBQVIsQ0FBL0U7QUFBaUdDLE1BQUFBLFFBQVEsRUFBQztBQUExRyxLQUF4bkU7QUFBd3ZFLFdBQU07QUFBQ1IsTUFBQUEsRUFBRSxFQUFDLEtBQUo7QUFBVUUsTUFBQUEsUUFBUSxFQUFDLENBQW5CO0FBQXFCQyxNQUFBQSxRQUFRLEVBQUMsQ0FBOUI7QUFBZ0NDLE1BQUFBLFFBQVEsRUFBQyxDQUF6QztBQUEyQ0MsTUFBQUEsVUFBVSxFQUFDLENBQXREO0FBQXdEQyxNQUFBQSxJQUFJLEVBQUMsT0FBN0Q7QUFBcUVDLE1BQUFBLFVBQVUsRUFBQyxDQUFDLE1BQUQsRUFBUSxTQUFSLENBQWhGO0FBQW1HQyxNQUFBQSxRQUFRLEVBQUM7QUFBNUc7QUFBOXZFLEdBQVosQ0FBZixFQUE2NUVyQyxDQUFwNkU7QUFBczZFOztBQUFBSSxDQUFDLENBQUNlLGFBQUYsR0FBZ0JqQixDQUFoQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGU9cmVxdWlyZTtcbnZhciB0PW1vZHVsZTtcbnZhciBvPWV4cG9ydHM7XG5cInVzZSBzdHJpY3RcIjt2YXIgbix0PXRoaXMmJnRoaXMuX19leHRlbmRzfHwobj1mdW5jdGlvbihlLHQpe3JldHVybihuPU9iamVjdC5zZXRQcm90b3R5cGVPZnx8e19fcHJvdG9fXzpbXX1pbnN0YW5jZW9mIEFycmF5JiZmdW5jdGlvbihlLHQpe2UuX19wcm90b19fPXR9fHxmdW5jdGlvbihlLHQpe2Zvcih2YXIgbyBpbiB0KU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LG8pJiYoZVtvXT10W29dKX0pKGUsdCl9LGZ1bmN0aW9uKGUsdCl7ZnVuY3Rpb24gbygpe3RoaXMuY29uc3RydWN0b3I9ZX1uKGUsdCksZS5wcm90b3R5cGU9bnVsbD09PXQ/T2JqZWN0LmNyZWF0ZSh0KTooby5wcm90b3R5cGU9dC5wcm90b3R5cGUsbmV3IG8pfSk7T2JqZWN0LmRlZmluZVByb3BlcnR5KG8sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksby5Ta2luQ2ZnUmVhZGVyPW8uU2tpbkRlZmluZT12b2lkIDA7ZT1lKFwiVENvbmZpZ1wiKTtvLlNraW5EZWZpbmU9e1JvbGVEZWZhdWx0SGF0OjJlNCxSb2xlRGVmYXVsdENsb3RoZXM6MjAxMDAsUm9sZURlZmF1bHRXaW5nOjIwMjAwfTt2YXIgaSx0PShpPWUuVENvbmZpZyx0KGEsaSksYSk7ZnVuY3Rpb24gYSgpe3ZhciBlPWkuY2FsbCh0aGlzKXx8dGhpcztyZXR1cm4gZS5fbmFtZT1cIlNraW5cIixlLmluaXRCeU1hcCh7MmU0OntpZDoyZTQsZGVmaW5lOlwiUm9sZURlZmF1bHRIYXRcIixSb2xlVHlwZToxLFNraW5UeXBlOjEsc2VxdWVuY2U6MSx1bmxvY2tUeXBlOjAsbmFtZTpcIum7mOiupFwiLFNraW5Tb2NrZXQ6W1wiaGF0XCIsXCJudWxsXCJdLFNraW5JY29uOlwiaW1nL3NraW5pY29uL0Rpc2FibGVcIn0sMjAwMDE6e2lkOjIwMDAxLFJvbGVUeXBlOjEsU2tpblR5cGU6MSxzZXF1ZW5jZTozLHVubG9ja1R5cGU6MixuYW1lOlwi5Ye55Ye46bOX6Z2i5YW3XCIsU2tpblNvY2tldDpbXCJoYXRcIixcImhhdF82XCJdLFNraW5JY29uOlwiaW1nL3NraW5pY29uL2hhdDFcIn0sMjAwMDI6e2lkOjIwMDAyLFJvbGVUeXBlOjEsU2tpblR5cGU6MSxzZXF1ZW5jZTo2LHVubG9ja1R5cGU6MixuYW1lOlwi57K95a2Q5aS05aWXXCIsU2tpblNvY2tldDpbXCJoYXRcIixcImhhdF83XCJdLFNraW5JY29uOlwiaW1nL3NraW5pY29uL2hhdDJcIn0sMjAwMDM6e2lkOjIwMDAzLFJvbGVUeXBlOjEsU2tpblR5cGU6MSxzZXF1ZW5jZToyLHVubG9ja1R5cGU6MSx1bmxvY2tDb3N0OjEwMCxuYW1lOlwi5bCP57qi5bi95a2QXCIsU2tpblNvY2tldDpbXCJoYXRcIixcImhhdF84XCJdLFNraW5JY29uOlwiaW1nL3NraW5pY29uL2hhdDNcIn0sMjAwMDQ6e2lkOjIwMDA0LFJvbGVUeXBlOjEsU2tpblR5cGU6MSxzZXF1ZW5jZTo1LHVubG9ja1R5cGU6MixuYW1lOlwi56OV5aSn6bit552h5bi9XCIsU2tpblNvY2tldDpbXCJoYXRcIixcImhhdF85XCJdLFNraW5JY29uOlwiaW1nL3NraW5pY29uL2hhdDRcIn0sMjAwMDU6e2lkOjIwMDA1LFJvbGVUeXBlOjEsU2tpblR5cGU6MSxzZXF1ZW5jZTo0LHVubG9ja1R5cGU6MixuYW1lOlwi5L6/5L6/5aS05aWXXCIsU2tpblNvY2tldDpbXCJoYXRcIixcImhhdF8xMFwiXSxTa2luSWNvbjpcImltZy9za2luaWNvbi9oYXQ1XCJ9LDIwMTAwOntpZDoyMDEwMCxkZWZpbmU6XCJSb2xlRGVmYXVsdENsb3RoZXNcIixSb2xlVHlwZToxLFNraW5UeXBlOjIsc2VxdWVuY2U6MSx1bmxvY2tUeXBlOjAsbmFtZTpcIum7mOiupFwiLFNraW5JY29uOlwiaW1nL3NraW5pY29uL0Rpc2FibGVcIn0sMjAxMDE6e2lkOjIwMTAxLFJvbGVUeXBlOjEsU2tpblR5cGU6MixzZXF1ZW5jZTozLHVubG9ja1R5cGU6MixuYW1lOlwi5Ye55Ye46bOX5oiY6KGjXCIsU2tpblNvY2tldDpbXCJiNlwiXSxTa2luSWNvbjpcImltZy9za2luaWNvbi9ib2R5MVwifSwyMDEwMjp7aWQ6MjAxMDIsUm9sZVR5cGU6MSxTa2luVHlwZToyLHNlcXVlbmNlOjYsdW5sb2NrVHlwZToyLG5hbWU6XCLnsr3lrZDljavooaNcIixTa2luU29ja2V0OltcImI3XCJdLFNraW5JY29uOlwiaW1nL3NraW5pY29uL2JvZHkyXCJ9LDIwMTAzOntpZDoyMDEwMyxSb2xlVHlwZToxLFNraW5UeXBlOjIsc2VxdWVuY2U6Mix1bmxvY2tUeXBlOjEsdW5sb2NrQ29zdDoyMDAsbmFtZTpcIuWwj+e6ouiho1wiLFNraW5Tb2NrZXQ6W1wiYjhcIl0sU2tpbkljb246XCJpbWcvc2tpbmljb24vYm9keTNcIn0sMjAxMDQ6e2lkOjIwMTA0LFJvbGVUeXBlOjEsU2tpblR5cGU6MixzZXF1ZW5jZTo1LHVubG9ja1R5cGU6MixuYW1lOlwi56OV5aSn6bit552h6KGjXCIsU2tpblNvY2tldDpbXCJiOVwiXSxTa2luSWNvbjpcImltZy9za2luaWNvbi9ib2R5NFwifSwyMDEwNTp7aWQ6MjAxMDUsUm9sZVR5cGU6MSxTa2luVHlwZToyLHNlcXVlbmNlOjQsdW5sb2NrVHlwZToyLG5hbWU6XCLkvr/kvr/lsI/ok53ooaNcIixTa2luU29ja2V0OltcImIxMFwiXSxTa2luSWNvbjpcImltZy9za2luaWNvbi9ib2R5NVwifSwyMDIwMDp7aWQ6MjAyMDAsZGVmaW5lOlwiUm9sZURlZmF1bHRXaW5nXCIsUm9sZVR5cGU6MSxTa2luVHlwZTozLHNlcXVlbmNlOjEsdW5sb2NrVHlwZTowLG5hbWU6XCLpu5jorqRcIixTa2luU29ja2V0OltcIndpbmdcIixcIm51bGxcIl0sU2tpbkljb246XCJpbWcvc2tpbmljb24vRGlzYWJsZVwifSwyMDIwMTp7aWQ6MjAyMDEsUm9sZVR5cGU6MSxTa2luVHlwZTozLHNlcXVlbmNlOjMsdW5sb2NrVHlwZToyLG5hbWU6XCLpu4Tph5Hnvr3nv7xcIixTa2luU29ja2V0OltcIndpbmdcIixcIndpbmdfNlwiXSxTa2luSWNvbjpcImltZy9za2luaWNvbi93aW5nMVwifSwyMDIwMjp7aWQ6MjAyMDIsUm9sZVR5cGU6MSxTa2luVHlwZTozLHNlcXVlbmNlOjYsdW5sb2NrVHlwZToyLG5hbWU6XCLlsI/pvpnnsqVcIixTa2luU29ja2V0OltcIndpbmdcIixcIndpbmdfN1wiXSxTa2luSWNvbjpcImltZy9za2luaWNvbi93aW5nMlwifSwyMDIwMzp7aWQ6MjAyMDMsUm9sZVR5cGU6MSxTa2luVHlwZTozLHNlcXVlbmNlOjIsdW5sb2NrVHlwZToxLHVubG9ja0Nvc3Q6MzAwLG5hbWU6XCLmsJTnkINcIixTa2luU29ja2V0OltcIndpbmdcIixcIndpbmdfOFwiXSxTa2luSWNvbjpcImltZy9za2luaWNvbi93aW5nM1wifSwyMDIwNDp7aWQ6MjAyMDQsUm9sZVR5cGU6MSxTa2luVHlwZTozLHNlcXVlbmNlOjUsdW5sb2NrVHlwZToyLG5hbWU6XCLnsr7ngbXnkIPnkINcIixTa2luU29ja2V0OltcIndpbmdcIixcIndpbmdfOVwiXSxTa2luSWNvbjpcImltZy9za2luaWNvbi93aW5nNFwifSwyMDIwNTp7aWQ6MjAyMDUsUm9sZVR5cGU6MSxTa2luVHlwZTozLHNlcXVlbmNlOjQsdW5sb2NrVHlwZToyLG5hbWU6XCLlsI/lsI/nvo7po5/lrrZcIixTa2luU29ja2V0OltcIndpbmdcIixcIndpbmdfMTBcIl0sU2tpbkljb246XCJpbWcvc2tpbmljb24vd2luZzVcIn19KSxlfW8uU2tpbkNmZ1JlYWRlcj10Il19
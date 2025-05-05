
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/TwoDHorizontalLayoutObject.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '718bcYXmkxKq568jA176mfk', 'TwoDHorizontalLayoutObject');
// scripts/TwoDHorizontalLayoutObject.js

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
}), o.TwoDHorizontalLayoutObject = void 0;
var i,
    t = (i = e("TwoDLayoutObject").TwoDLayoutObject, t(a, i), a.prototype.getRowByIndex = function (e) {
  return i.prototype.getColumnByIndex.call(this, e);
}, a.prototype.getColumnByIndex = function (e) {
  return i.prototype.getRowByIndex.call(this, e);
}, a.prototype.rows = function () {
  return i.prototype.columns.call(this);
}, a.prototype.columns = function () {
  return i.prototype.rows.call(this);
}, a.prototype.getIndex = function (e, t) {
  return e + t * this.key_count;
}, a);

function a() {
  return null !== i && i.apply(this, arguments) || this;
}

o.TwoDHorizontalLayoutObject = t;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcVHdvREhvcml6b250YWxMYXlvdXRPYmplY3QuanMiXSwibmFtZXMiOlsiZSIsInJlcXVpcmUiLCJ0IiwibW9kdWxlIiwibyIsImV4cG9ydHMiLCJuIiwiX19leHRlbmRzIiwiT2JqZWN0Iiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJBcnJheSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImNvbnN0cnVjdG9yIiwiY3JlYXRlIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIlR3b0RIb3Jpem9udGFsTGF5b3V0T2JqZWN0IiwiaSIsIlR3b0RMYXlvdXRPYmplY3QiLCJhIiwiZ2V0Um93QnlJbmRleCIsImdldENvbHVtbkJ5SW5kZXgiLCJyb3dzIiwiY29sdW1ucyIsImdldEluZGV4Iiwia2V5X2NvdW50IiwiYXBwbHkiLCJhcmd1bWVudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBQyxHQUFDQyxPQUFOO0FBQ0EsSUFBSUMsQ0FBQyxHQUFDQyxNQUFOO0FBQ0EsSUFBSUMsQ0FBQyxHQUFDQyxPQUFOO0FBQ0E7O0FBQWEsSUFBSUMsRUFBSjtBQUFBLElBQU1KLENBQUMsR0FBQyxVQUFNLFNBQUtLLFNBQVgsS0FBdUJELEVBQUMsR0FBQyxXQUFTTixDQUFULEVBQVdFLENBQVgsRUFBYTtBQUFDLFNBQU0sQ0FBQ0ksRUFBQyxHQUFDRSxNQUFNLENBQUNDLGNBQVAsSUFBdUI7QUFBQ0MsSUFBQUEsU0FBUyxFQUFDO0FBQVgsZUFBeUJDLEtBQXpCLElBQWdDLFVBQVNYLENBQVQsRUFBV0UsQ0FBWCxFQUFhO0FBQUNGLElBQUFBLENBQUMsQ0FBQ1UsU0FBRixHQUFZUixDQUFaO0FBQWMsR0FBbkYsSUFBcUYsVUFBU0YsQ0FBVCxFQUFXRSxDQUFYLEVBQWE7QUFBQyxTQUFJLElBQUlFLENBQVIsSUFBYUYsQ0FBYjtBQUFlTSxNQUFBQSxNQUFNLENBQUNJLFNBQVAsQ0FBaUJDLGNBQWpCLENBQWdDQyxJQUFoQyxDQUFxQ1osQ0FBckMsRUFBdUNFLENBQXZDLE1BQTRDSixDQUFDLENBQUNJLENBQUQsQ0FBRCxHQUFLRixDQUFDLENBQUNFLENBQUQsQ0FBbEQ7QUFBZjtBQUFzRSxHQUE1SyxFQUE4S0osQ0FBOUssRUFBZ0xFLENBQWhMLENBQU47QUFBeUwsQ0FBek0sRUFBME0sVUFBU0YsQ0FBVCxFQUFXRSxDQUFYLEVBQWE7QUFBQyxXQUFTRSxDQUFULEdBQVk7QUFBQyxTQUFLVyxXQUFMLEdBQWlCZixDQUFqQjtBQUFtQjs7QUFBQU0sRUFBQUEsRUFBQyxDQUFDTixDQUFELEVBQUdFLENBQUgsQ0FBRCxFQUFPRixDQUFDLENBQUNZLFNBQUYsR0FBWSxTQUFPVixDQUFQLEdBQVNNLE1BQU0sQ0FBQ1EsTUFBUCxDQUFjZCxDQUFkLENBQVQsSUFBMkJFLENBQUMsQ0FBQ1EsU0FBRixHQUFZVixDQUFDLENBQUNVLFNBQWQsRUFBd0IsSUFBSVIsQ0FBSixFQUFuRCxDQUFuQjtBQUE2RSxDQUE1VixDQUFSOztBQUFzV0ksTUFBTSxDQUFDUyxjQUFQLENBQXNCYixDQUF0QixFQUF3QixZQUF4QixFQUFxQztBQUFDYyxFQUFBQSxLQUFLLEVBQUMsQ0FBQztBQUFSLENBQXJDLEdBQWlEZCxDQUFDLENBQUNlLDBCQUFGLEdBQTZCLEtBQUssQ0FBbkY7QUFBcUYsSUFBSUMsQ0FBSjtBQUFBLElBQU1sQixDQUFDLElBQUVrQixDQUFDLEdBQUNwQixDQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQnFCLGdCQUF4QixFQUF5Q25CLENBQUMsQ0FBQ29CLENBQUQsRUFBR0YsQ0FBSCxDQUExQyxFQUFnREUsQ0FBQyxDQUFDVixTQUFGLENBQVlXLGFBQVosR0FBMEIsVUFBU3ZCLENBQVQsRUFBVztBQUFDLFNBQU9vQixDQUFDLENBQUNSLFNBQUYsQ0FBWVksZ0JBQVosQ0FBNkJWLElBQTdCLENBQWtDLElBQWxDLEVBQXVDZCxDQUF2QyxDQUFQO0FBQWlELENBQXZJLEVBQXdJc0IsQ0FBQyxDQUFDVixTQUFGLENBQVlZLGdCQUFaLEdBQTZCLFVBQVN4QixDQUFULEVBQVc7QUFBQyxTQUFPb0IsQ0FBQyxDQUFDUixTQUFGLENBQVlXLGFBQVosQ0FBMEJULElBQTFCLENBQStCLElBQS9CLEVBQW9DZCxDQUFwQyxDQUFQO0FBQThDLENBQS9OLEVBQWdPc0IsQ0FBQyxDQUFDVixTQUFGLENBQVlhLElBQVosR0FBaUIsWUFBVTtBQUFDLFNBQU9MLENBQUMsQ0FBQ1IsU0FBRixDQUFZYyxPQUFaLENBQW9CWixJQUFwQixDQUF5QixJQUF6QixDQUFQO0FBQXNDLENBQWxTLEVBQW1TUSxDQUFDLENBQUNWLFNBQUYsQ0FBWWMsT0FBWixHQUFvQixZQUFVO0FBQUMsU0FBT04sQ0FBQyxDQUFDUixTQUFGLENBQVlhLElBQVosQ0FBaUJYLElBQWpCLENBQXNCLElBQXRCLENBQVA7QUFBbUMsQ0FBclcsRUFBc1dRLENBQUMsQ0FBQ1YsU0FBRixDQUFZZSxRQUFaLEdBQXFCLFVBQVMzQixDQUFULEVBQVdFLENBQVgsRUFBYTtBQUFDLFNBQU9GLENBQUMsR0FBQ0UsQ0FBQyxHQUFDLEtBQUswQixTQUFoQjtBQUEwQixDQUFuYSxFQUFvYU4sQ0FBdGEsQ0FBUDs7QUFBZ2IsU0FBU0EsQ0FBVCxHQUFZO0FBQUMsU0FBTyxTQUFPRixDQUFQLElBQVVBLENBQUMsQ0FBQ1MsS0FBRixDQUFRLElBQVIsRUFBYUMsU0FBYixDQUFWLElBQW1DLElBQTFDO0FBQStDOztBQUFBMUIsQ0FBQyxDQUFDZSwwQkFBRixHQUE2QmpCLENBQTdCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZT1yZXF1aXJlO1xudmFyIHQ9bW9kdWxlO1xudmFyIG89ZXhwb3J0cztcblwidXNlIHN0cmljdFwiO3ZhciBuLHQ9dGhpcyYmdGhpcy5fX2V4dGVuZHN8fChuPWZ1bmN0aW9uKGUsdCl7cmV0dXJuKG49T2JqZWN0LnNldFByb3RvdHlwZU9mfHx7X19wcm90b19fOltdfWluc3RhbmNlb2YgQXJyYXkmJmZ1bmN0aW9uKGUsdCl7ZS5fX3Byb3RvX189dH18fGZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBvIGluIHQpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsbykmJihlW29dPXRbb10pfSkoZSx0KX0sZnVuY3Rpb24oZSx0KXtmdW5jdGlvbiBvKCl7dGhpcy5jb25zdHJ1Y3Rvcj1lfW4oZSx0KSxlLnByb3RvdHlwZT1udWxsPT09dD9PYmplY3QuY3JlYXRlKHQpOihvLnByb3RvdHlwZT10LnByb3RvdHlwZSxuZXcgbyl9KTtPYmplY3QuZGVmaW5lUHJvcGVydHkobyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxvLlR3b0RIb3Jpem9udGFsTGF5b3V0T2JqZWN0PXZvaWQgMDt2YXIgaSx0PShpPWUoXCJUd29ETGF5b3V0T2JqZWN0XCIpLlR3b0RMYXlvdXRPYmplY3QsdChhLGkpLGEucHJvdG90eXBlLmdldFJvd0J5SW5kZXg9ZnVuY3Rpb24oZSl7cmV0dXJuIGkucHJvdG90eXBlLmdldENvbHVtbkJ5SW5kZXguY2FsbCh0aGlzLGUpfSxhLnByb3RvdHlwZS5nZXRDb2x1bW5CeUluZGV4PWZ1bmN0aW9uKGUpe3JldHVybiBpLnByb3RvdHlwZS5nZXRSb3dCeUluZGV4LmNhbGwodGhpcyxlKX0sYS5wcm90b3R5cGUucm93cz1mdW5jdGlvbigpe3JldHVybiBpLnByb3RvdHlwZS5jb2x1bW5zLmNhbGwodGhpcyl9LGEucHJvdG90eXBlLmNvbHVtbnM9ZnVuY3Rpb24oKXtyZXR1cm4gaS5wcm90b3R5cGUucm93cy5jYWxsKHRoaXMpfSxhLnByb3RvdHlwZS5nZXRJbmRleD1mdW5jdGlvbihlLHQpe3JldHVybiBlK3QqdGhpcy5rZXlfY291bnR9LGEpO2Z1bmN0aW9uIGEoKXtyZXR1cm4gbnVsbCE9PWkmJmkuYXBwbHkodGhpcyxhcmd1bWVudHMpfHx0aGlzfW8uVHdvREhvcml6b250YWxMYXlvdXRPYmplY3Q9dCJdfQ==
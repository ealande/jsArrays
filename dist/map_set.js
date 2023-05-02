"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var myMap = new Map();
myMap.set("name", "erick");
myMap.set("stack", "html,css,js");
console.log(myMap);
var names = myMap.get("name");
console.log(names);
console.log(myMap.size);
console.log(myMap.has('name'));
console.log(myMap.has('lastName'));
console.log(myMap.size);
var _iterator = _createForOfIteratorHelper(myMap.keys()),
  _step;
try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var key = _step.value;
    console.log(key);
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}
var _iterator2 = _createForOfIteratorHelper(myMap.values()),
  _step2;
try {
  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
    var value = _step2.value;
    console.log(value);
  }
} catch (err) {
  _iterator2.e(err);
} finally {
  _iterator2.f();
}
var _iterator3 = _createForOfIteratorHelper(myMap.entries()),
  _step3;
try {
  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
    var entries = _step3.value;
    console.log(entries);
  }
} catch (err) {
  _iterator3.e(err);
} finally {
  _iterator3.f();
}
var _iterator4 = _createForOfIteratorHelper(myMap.entries()),
  _step4;
try {
  for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
    var _step4$value = _slicedToArray(_step4.value, 2),
      _key = _step4$value[0],
      _value = _step4$value[1];
    console.log("".concat(_key, ": ").concat(_value));
  }
} catch (err) {
  _iterator4.e(err);
} finally {
  _iterator4.f();
}
myMap.delete("stack");
console.log(myMap);

//set

var cpfs = new Set();
cpfs.add('30802499090');
cpfs.add('78742316006');
cpfs.add('07334365011');
cpfs.add('66423671036');
console.log(cpfs);
console.log(cpfs.keys());
console.log(cpfs.values());
cpfs.forEach(function (value) {
  console.log(value);
});
var array = ['Gian Souza', 'Jose Paulo', 'Maria Isabel', 'Luana', 'Luana', 'Gian Souza'];
console.log(array);
var arraySet = new Set([].concat(array));
console.log(arraySet);
var arrayWithoutDoubles = _toConsumableArray(arraySet);
console.log(arrayWithoutDoubles);
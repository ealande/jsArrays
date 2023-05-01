"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _console;
function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
//rest
function sum() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
console.log(sum(10, 20, 30, 40, 50, 60));
function sumWithRest() {
  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }
  var sum = numbers.reduce(function (total, currentNumber) {
    total += currentNumber;
    return total;
  }, 0);
  return sum;
}
console.log(sumWithRest(10, 20, 30, 20, 40, 50, 50));

//spread

var numbers = [1, 2, 3, 4];
console.log(numbers);
(_console = console).log.apply(_console, numbers);
var soccerTeamsSP = ['Santos', 'Palmeiras', 'Corinthians', 'Bragantino'];
var soccerTeamsRJ = ['Flamengo', 'Fluminense', "Botafogo"];

//const soccerTeam = soccerTeamsRJ.concat(soccerTeamsSP)

var soccerTeams = [].concat(soccerTeamsSP, soccerTeamsRJ);
console.log(soccerTeams);
var juliaCar = {
  Model: 'GOl',
  Brand: 'VW',
  Motor: 1.6
};
var anaCar = _objectSpread(_objectSpread({}, juliaCar), {}, {
  Motor: 1.8
});
console.log(anaCar);

//desestructuration

//const motorOftheCarOfAna = anaCar.Motor;
var motorOftheCarOfAna = anaCar.Motor;
var motorOftheCarOfJulia = juliaCar.Motor;
var _soccerTeams = _toArray(soccerTeams),
  item1 = _soccerTeams[0],
  item2 = _soccerTeams[1],
  item3 = _soccerTeams[2],
  restOfTeams = _soccerTeams.slice(3);
console.log(item1);
console.log(item2);
console.log(restOfTeams);
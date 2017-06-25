"use strict";

var _city = require("./city.json");

var _city2 = _interopRequireDefault(_city);

var _uniqueRandomArray = require("unique-random-array");

var _uniqueRandomArray2 = _interopRequireDefault(_uniqueRandomArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//var cityNames = require("./city.json");
//var uniqueRandomArray = require("unique-random-array");
module.exports = {
	all: _city2.default,
	random: (0, _uniqueRandomArray2.default)(_city2.default)
};
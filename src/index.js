var cityNames = require("./city.json");
var uniqueRandomArray = require("unique-random-array");
module.exports = { 
	all : cityNames,
	random : uniqueRandomArray(cityNames)
}
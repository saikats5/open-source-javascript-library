var cityNames = require("./city.json");
var uniqueRandomArray = require("unique-random-array");
modeule.exports = { 
	all : cityNames,
	random : uniqueRandomArray(cityNames)
}
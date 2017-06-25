//var cityNames = require("./city.json");
//var uniqueRandomArray = require("unique-random-array");
import cityNames from "./city.json";
import uniqueRandomArray from "unique-random-array";
module.exports = { 
	all : cityNames,
	random : uniqueRandomArray(cityNames)
}
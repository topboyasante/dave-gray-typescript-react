"use strict";
let stringArr = ["one", "hey", "dave"];
let guitars = ["strat", "les paul", 5150];
let mixedData = ["evh", 1984, true];
stringArr[0] = "John";
stringArr.push("Moses");
guitars[0] = 1984;
guitars.unshift("Jim");
guitars = stringArr;
let test = [];
let bands = [];
bands.push("Van Halen");
bands = [...bands, "Joe"];
//tuple
let myTuple = ["Dave", 43, false];
let mixed = ['John', 1, false];
mixed = myTuple;
myTuple[1] = 45;
//objects
let myObject;
myObject = [];
const exampleObject = {
    name: "Dave",
    isHungry: true
};
exampleObject.isHungry = false;
let oppenHeimer = {
    name: "Eddie",
    active: false,
    albums: [1985, "Love And Money"]
};
const greetGuitarist = (guitarist) => {
    console.log(`Hello ${guitarist.name} !`);
};
greetGuitarist(oppenHeimer);
//Enums:
var Grade;
(function (Grade) {
    Grade[Grade["A"] = 10] = "A";
    Grade[Grade["B"] = 20] = "B";
    Grade[Grade["C"] = 21] = "C";
    Grade[Grade["D"] = 22] = "D";
    Grade[Grade["E"] = 23] = "E";
    Grade[Grade["F"] = 24] = "F";
})(Grade || (Grade = {}));
console.log(Grade.A);

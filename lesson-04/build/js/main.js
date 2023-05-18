"use strict";
let myName;
myName = 'John';
function add(a, b) {
    return a + b;
}
function logMsg(message) {
    console.log(message);
}
let subtract = function (a, b) {
    return a - b;
};
// interface numFunction {
//     (a:number,b:number) : number
// }
let multiply = function (c, d) {
    return c * d;
};
//optional parameters:
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
//Default parameters
const sumAll = (a, b, c = 5) => {
    return a + b + c;
};
//Rest Parameters
const total = (...nums) => {
    return nums.reduce((prev, current) => prev + current);
};
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
//custom type guard
const isNumber = (value) => {
    return typeof value === "number" ? true : false;
};
const numberOrString = (value) => {
    if (typeof value === "string") {
        return "string";
    }
    else if (isNumber(value)) {
        return "number";
    }
    return createError("This should never Happen"); //uses of the never type
};

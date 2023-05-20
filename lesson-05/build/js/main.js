"use strict";
//Convert to a more or less specific type
let a = "hello";
let b = a; // b = a, but a is of Type Two
let c = a; // c = a but a is of type Three
let d = "world"; //won't work in react
let e = "world";
const addOrConcat = (a, b, c) => {
    if (c === "add") {
        return a + b;
    }
    return " " + a + b;
};
//Here, we tell TS that we know our code will return a string so we "force" it to set our variable type as a string
let myVal = addOrConcat(2, 2, "concat");
//Even though TS has no issues with is, this is an error as we can't concatenate a number
let nextVal = addOrConcat(2, 2, "concat");
//DOM
const img = document.querySelector("img");
//Non-Null Assertion
const myImg = document.getElementById("#img");
//won't work as tsx
const nextImg = document.getElementById("#img");
img.src = "https://google.com.gh";
myImg.src;

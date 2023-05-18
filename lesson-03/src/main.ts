let stringArr =  ["one","hey","dave"]

let guitars = ["strat","les paul",5150]

let mixedData = ["evh",1984,true]

stringArr[0] = "John"
stringArr.push("Moses")

guitars[0] = 1984
guitars.unshift("Jim")

guitars = stringArr

let test  = []
let bands:string[] = []
bands.push("Van Halen")
bands  = [...bands,"Joe"]

//tuple
let myTuple:[string,number,boolean] = ["Dave",43,false]

let mixed = ['John',1,false]

mixed = myTuple

myTuple[1] = 45


//objects
let myObject:Object
myObject = []

const exampleObject = {
    name:"Dave",
    isHungry:true
}
exampleObject.isHungry = false

//type
type Guitarist = {
    name:string,
    active?:boolean,
    albums:(string | number)[]
}

let oppenHeimer:Guitarist = {
    name:"Eddie",
    active:false,
    albums:[1985,"Love And Money"]
}

const greetGuitarist = (guitarist:Guitarist) => {
    console.log(`Hello ${guitarist.name} !`)
}

greetGuitarist(oppenHeimer)

//Enums:
enum Grade{
    A=10,
    B=20,
    C,
    D,
    E,
    F
}
console.log(Grade.A)
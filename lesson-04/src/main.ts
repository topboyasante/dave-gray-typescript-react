//Type Aliases
type stringOrNumber = string | number
type stringOrNumberArray = (string | number)[]

interface Guitarist {
    name:string,
    active?:boolean,
    albums:stringOrNumberArray
}


let myName:"Dave" | "John" | "Amy"
myName = 'John'

function add(a:number,b:number):number{
    return a+b
}

function logMsg(message:any){
    console.log(message)
}

let subtract = function(a:number,b:number):number{
    return a-b
}

type numFunction = (a:number,b:number) => number

// interface numFunction {
//     (a:number,b:number) : number
// }

let multiply:numFunction = function(c,d){
    return c  * d
}

//optional parameters:
const addAll = (a:number, b:number, c?:number):number =>{
    if(typeof c !== 'undefined'){
        return a+b+c
    }
    return a+b
}

//Default parameters
const sumAll = (a:number, b:number, c:number = 5):number =>{
    return a+b+c
}

//Rest Parameters
const total = (...nums:number[]):number =>{
    return nums.reduce((prev,current)=>prev+current)
}

const createError = (errMsg:string)=>{
    throw new Error(errMsg)
}

const infinite = () =>{
    let i: number = 1
    while(true){
        i++
        if(i>100) break 
    }
}

//custom type guard
const isNumber = (value:any) : boolean => {
    return typeof value === "number" ? true : false
}


const numberOrString = (value:number | string):string =>{
    if(typeof value  === "string"){
        return "string"
    }
    else if(isNumber(value)){
        return "number"
    }
    return  createError("This should never Happen") //uses of the never type
}
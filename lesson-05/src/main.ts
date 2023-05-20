//Type Assertions
type One = string
type Two = string | number
type Three = "hello"

//Convert to a more or less specific type
let a : One = "hello"
let b = a as Two // b = a, but a is of Type Two
let c = a as  Three // c = a but a is of type Three

let d = <One>  "world" //won't work in react
let e = <string | number>  "world"

const addOrConcat = (a:number,b:number,c:"add" | "concat"):number|string =>{
    if(c === "add"){
        return a + b
    }
    return " " + a+b
}

//Here, we tell TS that we know our code will return a string so we "force" it to set our variable type as a string
let myVal : string  = addOrConcat(2,2,"concat") as string

//Even though TS has no issues with is, this is an error as we can't concatenate a number
let nextVal : number  = addOrConcat(2,2,"concat") as number


//DOM
const img = document.querySelector("img")!

//Non-Null Assertion
const myImg = document.getElementById("#img") as HTMLImageElement

//won't work as tsx
const nextImg  = <HTMLImageElement>document.getElementById("#img")

img.src = "https://google.com.gh"
myImg.src
//Classes

class User {
    name:string
    jobDesc:String
    id:number
    yearsOfExp:number

    constructor(name:string,jobDesc:string,id:number,yearsOfExp:number){
        this.name = name
        this.jobDesc = jobDesc
        this.id = id
        this.yearsOfExp = yearsOfExp
    }
}

//With visibility Modifiers
class AnotherUser {
   
    secondLang!:string //Object Assertions 

    constructor(
        public name:string,
        // public readonly jobDesc:string,
        public jobDesc:string,
        private id:number,
        protected yearsOfExp:number)
        {
        this.name = name
        this.jobDesc = jobDesc
        this.id = id
        this.yearsOfExp = yearsOfExp
    }

    public getID(){
        return `Hello I'm ${this.id}`
    }
}

const Dave = new AnotherUser("Dave","Backend Engineer", 1, 20)

console.log(Dave.getID())

//returns an error:
// console.log(Dave.id)
// console.log(Dave.yearsOfExp)


class WebDeveloper extends AnotherUser{
    constructor(
        public computer:string,
        name:string,
        jobDesc:string,
        id:number,
        yearsOfExp:number
    ){
        super(name, jobDesc, id, yearsOfExp) // calls the parent constructor method, and gets access to its properties
        this.computer = computer 
    }
    public getJobDesc(){
        return `I am a ${this.jobDesc}`
    }
}

const Sara = new WebDeveloper ("Macbook Pro","Sara","Web Devloper",20,20)


//Applying Interfaces to a class:

interface Musician{
    name:string,
    instrument:string,
    play(action:string):string
}

class Guitarist implements Musician{
    name: string
    instrument: string

    constructor(name:string,instrument:string){
        this.name=name
        this.instrument = instrument
    }

    play(action:string):string{
        return `${this.name} ${action} the ${this.instrument}`
    }
}

const Asante = new Guitarist("Asante","Bass Guitar")
console.log(Asante.play("strums"))

//Static Properties

class Peeps{
    static count: number = 0

    static getCount():number{
        return Peeps.count
    }

    public id: number

    constructor(public name:string){
        this.name = name
        this.id = ++Peeps.count
    }
}

const Bill = new Peeps("Bill")


//Getters and Setters
class Bands{
    private dataState:string[]
    constructor(){
        this.dataState = []
    }

    public get data(): string[]{
        return this.data
    }

    public set data(value:string[]){
        if(Array.isArray(value) && value.every(element => typeof element === "string")){
            //Setters cannot return a value
            this.dataState = value
            return
        }
        else{
            throw new Error("Param is not a string array")
        }
    }
}

const myBand = new Bands()
myBand.data = ["Blacko Sheriff","Tion Wayne","Aitch"]


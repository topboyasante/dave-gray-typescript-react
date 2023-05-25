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
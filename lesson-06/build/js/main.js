"use strict";
//Classes
class User {
    constructor(name, jobDesc, id, yearsOfExp) {
        this.name = name;
        this.jobDesc = jobDesc;
        this.id = id;
        this.yearsOfExp = yearsOfExp;
    }
}
//With visibility Modifiers
class AnotherUser {
    constructor(name, 
    // public readonly jobDesc:string,
    jobDesc, id, yearsOfExp) {
        this.name = name;
        this.jobDesc = jobDesc;
        this.id = id;
        this.yearsOfExp = yearsOfExp;
        this.name = name;
        this.jobDesc = jobDesc;
        this.id = id;
        this.yearsOfExp = yearsOfExp;
    }
    getID() {
        return `Hello I'm ${this.id}`;
    }
}
const Dave = new AnotherUser("Dave", "Backend Engineer", 1, 20);
console.log(Dave.getID());
//returns an error:
// console.log(Dave.id)
// console.log(Dave.yearsOfExp)
class WebDeveloper extends AnotherUser {
    constructor(computer, name, jobDesc, id, yearsOfExp) {
        super(name, jobDesc, id, yearsOfExp); // calls the parent constructor method, and gets access to its properties
        this.computer = computer;
        this.computer = computer;
    }
    getJobDesc() {
        return `I am a ${this.jobDesc}`;
    }
}
const Sara = new WebDeveloper("Macbook Pro", "Sara", "Web Devloper", 20, 20);

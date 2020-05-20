class Person {
    constructor(name, age, sex) {
        this.name = name || 'Anonymous';
        this.age = age || 18;
        this.sex = sex || 'Nostalgic';
    }

    getBirthYear()  {
        const year = new Date().getFullYear();
        const BoY = year-this.age;
        return (`${this.name} is ${this.age} years old and was born on ${year}.`);
        

    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, sex, major) {
        super(name, age, sex);
        this.major = major;
    }

    getDescription() {
        return super.getDescription();
    }
}

const Andrew = new Student('Andrew Chily', 34, 'Male');
console.log(Andrew);
console.log(Andrew.getBirthYear());



const Vishwajeet  = new Student('Vishwajeet', 33, 'Male', 'Computer Science');
console.log(Vishwajeet);
console.log(Vishwajeet.getBirthYear());


// Exercise 

class Traveler extends Person {
    constructor(name, age, sex, homeLocation) {
        super(name, age, sex);
        this.homeLocation = homeLocation;
    }

    getDescription() {
       let description = super.getDescription();
       description = description + ` He is from ${this.homeLocation}.`;
       return description;
    }
}
const Allen = new Traveler('Allen Solley', 22, 'Male', 'New York');
console.log(Allen.getDescription());


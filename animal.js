class Animal {  
    static kingdom = "Animalia";

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    speak(){
        return `${this.name} say hi`;
    }

    getAge(){
        return this.age;
    }
}

class Dog extends Animal {

    constructor (name, age, isVaccinated){
        super(name, age);        
        this.isVaccinated = isVaccinated;
    }
    speak(){
        return `${this.name} barks`;
    }
}

const d = new Dog("raxy", 4, true);
const a = new Animal("Zvuv", 30);
//// both true
// console.log(d instanceof Animal);
// console.log(d instanceof Dog);

// console.log(d.speak());
// console.log(a.speak());

console.log(d.getAge());
console.log(a.getAge());
console.log(d.isVaccinated);




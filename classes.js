class Animal {
    static kingdom = "Animalia";
    #secret = "default-value"
    constructor(name, legs, sec) {
        this.name = name;
        this.legs = legs;

        this.#secret = sec;
    }    
    speaks() {
        return `${this.name} moved his ${this.legs} legs ans make a sound. ${this.#secret}`;
    }

    getSecret(){
        // if (await check(token))
        return this.#secret                
    }
    setSecret(newValue){
        this.#secret = newValue;
    }
}

const dog = new Animal("rexy", 4, '#$^*R@#R');
console.log(dog.speaks());




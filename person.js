class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    isAdult() {
        return this.age > 18;
    }

    static sort(people) {
        return people.sort(
            (p1, p2) => {
                return p1.age - p2.age;
                // if (p1.age > p2.age)
                //     return 1;
                // if (p1.age < p2.age)
                //     return -10
                // return 0;
            })
    }
}

const p1 = new Person("david1", 40)
const p2 = new Person("david2", 42)
const p3 = new Person("david3", 41)
const p4 = new Person("david4", 39)
const people = [p1, p2, p3, p4];

const res = Person.sort(people);
console.log(res);




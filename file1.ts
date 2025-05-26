type User<T, V> = {
    name: string;
    age: T[];
    city?: string;
    id: V | string;
}

let u3: User<number, string>;
let u4: User<any, boolean>;

u3 = {name: "david", age: [40], id: "4"}


interface IUser {
    name: string;
    age: number;
    city?: string;
}

interface IStudent extends IUser {
    grades: number[];
}


let u1: IUser;
u1 = {name: "sdf", age: 40};
let s1: IStudent;
s1 = {...u1, grades: [1,2,3]}


enum Directions {
    Up = "up",
    Down = "down",
    Right = "right",
    Left = "left"
}
let myDirection: Directions;
myDirection = Directions.Left;
// myDirection = Directions.Up;
console.log(myDirection);

enum Country {
    ISRAEL,
    AMERIKA
}

let c : Country = Country.ISRAEL;

///////////////////////////////

let myObject : Record<number, number>;
myObject = {
    40:40
}
console.log(myObject);




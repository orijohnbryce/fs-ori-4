class Shape {

    constructor(){
        if (new.target === Shape){
            throw new Error("Can't instanciate abstract Shape class")
        }
    }
    
    getArea() {
        throw new Error("getArea at Shape level not implemented")
    }

    static sortShapes(shapes) {

        return [...shapes].sort(
            (s1, s2) => {
                return s1.getArea() - s2.getArea();
            })
        // return shapes.slice().sort ... 
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius ** 2
    }
}

class Triangle extends Shape {
    constructor(base, hight) {
        super();
        this.base = base;
        this.hight = hight;
    }

    getArea() {
        return (this.base * this.hight) / 2;
    }
}


function printArea(shape) {
    console.log(shape.getArea());
}

const t1 = new Triangle(3, 8);
const t2 = new Triangle(3, 5);
const c1 = new Circle(1);

const s = new Shape();
const res = Circle.sortShapes([t1, t2, c1]);
console.log(res);

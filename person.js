class Person {
    static counter = 0;

    constructor(name, age) {
        Person.counter += 1;
        this.name = name;
        this.age = age;
    }

    hasDiscount() {
        return this.age > 70;
    }
}

class Student extends Person {
    constructor(name, age, grades) {
        super(name, age);
        this.grades = grades;
    }

    hasDiscount() {
        if (this.getGradesAverage() > 80)
            return true;
        return super.hasDiscount()
    }
    getGradesAverage() {

        let sum = 0;
        for (const grade of this.grades)
            sum += grade;

        // const sum = this.grades.reduce((a, b) => a + b)

        return sum / this.grades.length;
    }

    static sortStudents(studentList) {
        return studentList.sort((s1, s2) => {
            return s2.getGradesAverage() - s1.getGradesAverage();
        })
    }
}

const s1 = new Student("David", 40, [100, 100, 70]);
const s2 = new Student("Moshe", 40, [80, 90, 100]);

console.log(s1.hasDiscount());


// // console.log(Student.sortStudents([s1, s2]));
// p = new Person("yakov", 23);
// // console.log(s1.hasOwnProperty('grades'));
// console.log(s1 instanceof Object);


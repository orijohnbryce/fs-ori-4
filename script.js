// splice



// function add(x, y) {
//     return x+y;
// }

// let arr = [4,5]
// // add(arr[0], arr[1])
// add(...arr)


//////////////////////////

// let arr1 = [1,2,3]

// let arr2 = arr1;

// arr2[0] = 500;

// console.log(arr1);

// function f(lst) {
//     // lst.push(5)
//     const l2 = lst.slice()
//     l2.push(5)
// }

// let arr = [1,2]
// f(arr)
// console.log(arr);


/////////////////////

let a = [1,2,3]
a = [4,5,6]
a = 50;
a = NaN;

const c = [12,3,4,5]
c.push(3) // OK
c = [3,4,5]  // error!!!

////////////////////////

let a1 = [1,2,3]
let a2 = a1; // no copy at all

let a3 = [...a1];  // shallow copy
// a3 = a1.slice()

// shallow copy 
let a4 = [1,2, ['a']];
let a5 = [...a4];


// deep copy:
let a6 = [1,2, ['a']];
// convert to string (json):

// let a6_as_string = "[1,2, ['a']]"
JSON.stringify(a6)

// convert back to Object (Array)
// let a7 = stringToObject(a6_as_string)
JSON.parse(a6)








// const zeros = new Array(10);
// zeros.fill(0);

// const zeros = new Array(10).fill(0);
// const ones = new Array(10).fill(1);


// ==========================================

// document.addEventListener("DOMContentLoaded", ()=>{alert("yo")})

// ==========================================

// const arr = [1, 2]
// const [a, c, d] = arr;
// // console.log(a, c, d);

// let x = 5;
// let y = 10;

// // let t = x;
// // x = y;
// // y = t;

// // [x, y] = [y, x];

// ==========================================


// const obj = { 1: 10, 2: 20, 3: 30 };

// // Object.entries(obj).forEach(myFunc)
// // // Object.entries(obj)  // [ [ '1', 10 ], [ '2', 20 ], [ '3', 30 ] ]

// // function myFunc([k, v]) {
// //     console.log(`key: ${k}. value: ${v}`);    
// // }

// for ([k, v] of Object.entries(obj)) {
//     console.log(k, v);
// }


// const obj = {x: 10, y: 20};
// const {x, y} = obj;
// console.log(x, y);


// const person = {name: 'david', age: 40, address: 'Jerusalem'}

// // function isUnder18(person) {
// //     return person.age < 18;
// // }
// function isUnder18({age, name}) {
//     return age < 18;
// }

// console.log(isUnder18(person));


// const a = [-1, -2, -3];
// for ([x,y] of Object.entries(a)){
//     console.log(x, y); // 0, -1  |  1, -2 |  2, -3
// }

///////////////////////////////////////////////////////////

// function printValue(value) {

//     switch (value) {
//         case 'banana':
//             console.log("case banana");
//             break;
//         case 'apple':
//             console.log("case apple");
//             break;
//         case 'orange':
//             console.log("case orange");
//             break;
//         default:
//             console.log("UnKnown value");            
//             break;
//     }
    
//     console.log("sending email...");    
// }
// printValue("banana")

const age = 0;

switch (true) {
    case age > 40:        
        console.log("Very expencieve");        
        break;
    case age > 20 & age < 40:        
        console.log("expencieve");        
        break;
    case age < 20 & age > 10:        
        console.log("so so");        
        break;
    case age < 10:        
        console.log("cheap");        
        break;    
    default:
        break;
}

// ==================================




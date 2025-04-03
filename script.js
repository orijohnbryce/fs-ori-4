
const arr = [1,2,3]

const [x, y, z] = arr;


const obj = {a: 100, b: 200, c: 300};
const {a, b, c} = obj;


const person = {name: 'david', address: 'tlv', age: 20, tel: 123};
const {age : personAge} = person;

// console.log(personAge); // 20


const {tel = "no tel provided"} = person
// console.log(tel);


// ===========================================

const lst = [1,2,3,4,5,6];

function multi(x) {
    return x * 2;
}

// const newLst1 = []
// for (num of lst){
//     newLst1.push(multi(num));
// }



const newLst = lst.map((n)=>n*2);
// const newLst = lst.map((n)=>{n*2});
// console.log(newLst);


// **********************************************

// Filter
// const lst = [1,2,3,4,5,6];

function isEven(n) {
    return n % 2 == 0;
}

const newLst2 = [];
for (n of lst){
    if (isEven(n)){
        newLst2.push(n);
    }
}

const newLst3 = lst.filter((n)=>n%2 == 0);
// console.log(newLst3);

/////////////////////////////////////////

// let res;
// for (n of lst){
//     if (isEven(n)){
//         res = n;
//         break;
//     }
// }
let res = lst.find(isEven);
// console.log(res);

/////////////////////////////////

// // const lst = [1,2,3,4,5,6];

// let index;
// for (index = 0; index < lst.length; index++) {
//     if (isEven(lst[index])){
//         break;
//     }
// }
let index = lst.findIndex(isEven);
console.log(index);





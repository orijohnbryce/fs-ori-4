function compareByAge(x, y) {
    if (x.age > y.age)
        return 1;  // the arrived args are in the correct order
    if (x.age < y.age)
        return -1;  // need to swap
    return 0;  // don't care
}

// function compareByEven(x, y) {
//     if (x%2 === y%2)
//         return 0;    
//     if (x%2)
//         return 1    
//     return -1
// }

function sortArray(arr) {
    /* return new sorted array  */
    return arr.sort(compareByEven)
}

// const lst = [3, 4, 5, 6, 3, 56, 4, 232];
const lst = [
    { name: 'david', age: 40 },
    { name: 'moshe', age: 2 },
    { name: 'ayakov', age: 50 },
    { name: 'tzahi', age: 20 },
]
// console.log(sortArray(lst));

///////////////////////////////

console.log(lst.sort((a, b)=>{
    a = a.name;
    b = b.name;
    if (a.charCodeAt(0) > b.charCodeAt(0))
        return 1;
    if (a.charCodeAt(0) < b.charCodeAt(0))
        return -1;
    return 0;    
    }
));
console.log(lst);




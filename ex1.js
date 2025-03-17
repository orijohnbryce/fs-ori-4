function evens(arr) {
    
    const res = [];
    for (let i =0; i< arr.length ; i +=2){
        res.push(arr[i]);
    }
    return res;
}

// console.log(evens([0,1,2,3,4,5,6]));

function evenKeys(obj) {
    
    const keys = Object.keys(obj); // array
    const res = {};  // object

    for (let i=0; i< keys.length ; i+=2){
        res[keys[i]] = obj[keys[i]];
        // const currentKey = keys[i];
        // res[currentKey] = obj[currentKey];
    }
    return res;
}

const obj = {a: 12, b: 'david', 18: 'yosi', list: [1,2,3]}
// console.log(evenKeys(obj));
console.log(obj);


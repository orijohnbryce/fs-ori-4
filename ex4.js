function getValues(obj) {
    const res = [];
    for (let k in obj){
        // res.push(obj.k)  // wrong        
        res.push(obj[8]) 
    }
    return res;
}

let o = {1:10, 2:20, 3:30}
// console.log(getValues(o));


/////// part B

// for (let k in o)
for (key of Object.keys(o)){
    console.log(key);    
}
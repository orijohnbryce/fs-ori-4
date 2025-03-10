const o = {
    "name": "david",
    height: 180,
    80: 800,
    sayHi: ()=>{console.log("hi");}
}

// console.log(o['name']) // david

o['name'] = "yosef"
// console.log(o.name)  // yosef


o.name = "moshe"
// console.log(o.name) // moshe


// console.log(o.address) // undefine


o.address = "Jerusalem"
// console.log(o.address) // Jerusalem


// delete
delete o.height;
// console.log(o);


// console.log('name' in o); // true/false

for (let k in o){
    // console.log(k);    
}


// console.log(Object.keys(o));
// console.log(Object.values(o));



function getKeys(obj) {
    const res = [];
    for (let k in obj){
        res.push(k)
    }
    return res;
}

// console.log(getKeys(o));

let arr = [1,2,3]
arr.length

Object.keys(o).length

////


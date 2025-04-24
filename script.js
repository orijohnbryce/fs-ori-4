function myFunc(x) {
    console.log(x);

    myFunc(x + 1);
}

// myFunc(0);



// ==============================================

const p = new Promise((resolve, reject) => {
    console.log("1. This is from promise");
    
    reject("example reject arg")
    return;
    if (true){
        console.log("before resolve");        
        resolve("example arg");
        console.log("after resolve");
    }
})

p.then((s)=>{
    console.log("yo " + s);
    //
    //
    //
}).catch((error)=>{
    console.log("3. yo "+ error)
    //
    //
    //
})
// p.catch((error)=>{console.log("3. yo "+ error)})


console.log("2. End of script!");

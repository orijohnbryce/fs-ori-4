// const promise = new Promise((resolve, reject)=>{
//     console.log("hi from promise");    
    
//     const isSuccess = true;

//     if (isSuccess){
//         console.log("success = true");        
//         resolve(isSuccess);
//     }else {
//         console.log("success = false");
//         reject(isSuccess)
//     }
// })

// promise.then(()=>{
//     console.log("Hi from then");    
// }).catch(()=>{console.log("hi from catch")})

// console.log("Bye Bye");
/////////////////////////////////////////////////////


// ex2
// const myPromise = new Promise((resolve, reject)=>{
//     const isRaining = Math.random() < 0.2;
//     isRaining ? resolve() : reject();
// })

// myPromise.then(()=>{console.log("is raining")}).catch(()=>console.log("Not raining"))

/////////////////////////////////////////////////////////



// async function func() {
//     console.log("from func");
    
//     return 50;
// }

// const res = func();
// console.log(res instanceof Promise);
// console.log(typeof(res));
// res.then((x)=>console.log(x)).catch((e)=>{console.log(e)})
// console.log("Bye");


//////////////////////////////////////////////

const resP = fetch("https://doge.ceo/api/breeds/image/random")

resP.then((res)=>{
    console.log(res);
    return;
    const resJP = res.json();
    resJP.then((resJ)=>{
        console.log(resJ);        
    }).catch((e)=>{
        console.log(`some error during convert response to json. more info: ${e}`);        
    })
    

}).catch((e)=>{
    console.log(`some error during call to random dog image. more info: ${e}`);
    
})




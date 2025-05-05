// const resP = fetch("https://doge.ceo/api/breeds/image/random")

// resP.then((res) => {

//     const resJP = res.json();
//     resJP.then((resJ) => {
//         console.log(resJ);
//     }).catch((e) => {
//         console.log(`some error during convert response to json. more info: ${e}`);
//     })
// }).catch((e) => {
//     console.log(`some error during call to random dog image. more info: ${e}`);
// })

// ==================================

fetch("https://dog.ceo/api/breeds/image/random").then((res) => {
    console.log(res);
    
    res.json().then((resJ) => {
        console.log(resJ);
    }).catch((e) => {
        console.log(`Error converting to Json: ${e}`);
    })
}).catch((e) => {
    console.log("Error fetching data");
})
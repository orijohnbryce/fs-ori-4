const arr = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90];

// arr.fill("dsdf",3, 6);
// console.log(arr);

/////////////////////////////////////////////

// arr.copyWithin(5, 1, 3);
// console.log(arr);

///////////////////////////////////

const ages = [10, 18, 15, 3.5, 10]

const res = ages.some((age) => age > 20);

// console.log(res);

const res2 = ages.every((age) => age > 3);
// console.log(res2);

/////////////////////////////////////////////////



const lst = [10, 20, 30, 40];

// const res1 = lst.reduce((acc, n)=>acc + n, 0);

// const res1 = lst.reduce(
//                         (obj, n) => {
//                             obj[n] = n * n;
//                             return acc;
//                         },
//                         {});
// console.log(res1);


//////////////////////////////////////


// Promise

const myPromise = new Promise((resolve, reject) => {
    console.log("The promise is running");

    Math.random() > 0.5 ? resolve() : reject();
})

myPromise.then(() => {
    console.log("Resolve");
}).catch(() => {
    console.log("Reject");
})






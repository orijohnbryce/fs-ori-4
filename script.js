Math.random();  // return a number between 0 to 1
Math.floor();   // return round-down number.  1.7 -> 1
Math.ceil();    // return round-up number.  1.05 -> 2
Math.round();  // round

Math.max(1,2,4,3,-5,9)  // return the largest number (9)
Math.min(1,2,4,3,-5,9)  // return the smallest number (-5)

Math.abs(-4); // return the absolute value of the number (4)
Math.sqrt(4);  // return the square-root
Math.pow(2, 4);  //   2**4

Math.PI;   // contains the value of PI  (3.1415)


// =============================

// console.log(0.1 + 0.2 === 0.3);  // False.  floating-points


let res = 0.1 + 0.2;   // 0.299999999999999999
// let res = 0.299999999999999999;
let expected = 0.3; 
let tolerance = 0.00001;

if (Math.abs(res - expected) < tolerance){
    // console.log("Coorect");    
} else {
    // console.log("Incorrect");    
}

// ===================================================

let x = -Infinity;
// console.log(x);

if (-99999999999 < x){
    // console.log("Yes");    
} else {
    // console.log("No");
}

// =======================

// Dates.
// Timestamp  || Epoch
Date.now()

    
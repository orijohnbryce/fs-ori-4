// if (0) console.log("Today is Tu Beshvat");

let x; 

x = true;
x = false;
x = 0;  // false
x = "asdfasdfasdf";  // true
x = 0 // false
x = "0" // true 
x = null; // false
x = NaN; // false
x = "NaN"; // true
x = undefined; // false

let y;
y = false;
x = true;

// OR  - ||
let res;
res = true || false;  // true
res = true || true;  // true
res = false || true; // true
res = false || false; // false

// AND  -  &&
res = true && false;  // false
res = true && true;  // true
res = false && true; // false
res = false && false; // false


// NOT
res = !true;   // false
res = !false;  // true;

res = !NaN;  // true;
res = !null && 50; // true
res = !null || undefined; // true
res = !null && undefined; // false

res = !false;  // true
x = false;
res = !x; // 


// comparison operators
x = 5;
y = 6;
res = x == y;  // false

x = "5";
y = 5;
res = x === y; // check if equal in value & type.
res = x && y; // true

res = !(x === y) // true
res = x !== y;

x = 5;
res = x === 5; // true
res = x > 5;  // false
res = x >= 5;  // true
res = x < 5; // false
res = x <= 5;  // true



x = true;
y = false;

x || y; // true
x && y; // false
!x ;    // false
(!x) || y; //  false
x && (!y); // true


if (res) console.log("True");
if (!res) console.log("False");

// ======================

// Conditions!

if (x) {
    console.log('x is true')
};

// else

if (x){
    console.log("x is true");    
} else {
    console.log("x is false");    
}


// =========================
// short version for IF (ternary operator)

// condition ?  <true-action>  :  <false-action>


x = false;
x ? console.log("x is true")  :  console.log("x is false");

// כהמשך לתרגיל 7, במקום להדפיס את המחרוזת, שמור אותה בתוך משתנה חדש
let ex7res;
if (typeof(x) === 'number'){
    ex7res = "x is a number";
} else {
    ex7res = "not a number";
}

// with the ternary operator:
ex7res = typeof(x) === 'number' ? "x is a number" : "not a number"

// do the kid is allow to go to the trip
let isAllow = age > 18 ? true : false;



// nested if

if (parentAllow && escort){ 
    // do something
}

if (parentAllow){
    if (escort){
        // do something
        console.log("yes");        
    }else {
        console.log("maybe");
        
    }
}

//  ====================

// if - else - if
let parentAllow = true; // /false
let canGo;
if (age > 18){
    canGo = "yes"
} else if (parentAllow) {
    canGo = escort ? "yes" : "no"
}

// 





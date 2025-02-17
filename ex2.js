let x1 = 150;
let x2 = -1;
let x3 = 224.5;



if ((x1 < x2) && (x2 < x3)){
    // x1 x2 x3
    console.log("ascending");
    console.log(x1, x2, x3);        
} else if ((x1 < x3) && (x3 < x2)) {
    // x1 x3 x2
    console.log(x1, x3, x2);         
}

// x2 x1 x3

// x2 x3 x1

// x3 x1 x2

// x3 x2 x1  -  Descending
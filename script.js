
// let i = 5;
// if (true){
//     let test = "moshe"
// }
// console.log(test);  // error


//==============================

// let i = 5;
// do {
//     i--;
//     console.log(i);    
// } while (false);


//==============================

// FOR

// for (let index = -100; index <= 100; index++) {

//     if (!(index % 15)){
//         console.log(index);        
//     }

// }



// let x = 5, y = 10;
// console.log(x, y);


// console.log("i, j");

// for (let i = 0, j=10; i < 5; i++, j--) {
//     console.log(i, j);

// }

// *********************************

// Iterable

// let word = "example";
// for (let i=0; i< word.length; i ++){
//     console.log(word[i]);    
// }

// for (let char of "example"){
//     console.log(char);    
// }

// if (true) {
//     if (false) {
//         // ..
//     }
// }

// for (let index = 0; index < 10; index++) {
//     console.log("Index is:", index);

//     for (let j = index; j > 0; j--) {
//         console.log(j);
//     }
// }


// multiplication table
for (let index = 1; index <= 10; index++) {

    let temp = ""
    for (let j = 1; j <= 10; j++){
        let new_val = String(j * index).padStart(3)
        temp += new_val + " ";
    }
    console.log(temp);
    
}

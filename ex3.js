// A

function sevens() {
    let resArr = [];
    for (let index = 0; index < 5; index++) {        
        resArr[index] = 7*(index+1);
    }

    console.log(resArr);    
}

// sevens()



// B
function findLargest(arr) {
    // let largest = -Infinity; // one option
    
    
    
    // let largest = arr[0];
    let largest = undefined;
    for (num of arr){
        if (num > largest){
            largest = num;
        }
    }

    console.log(largest);
    
}

findLargest([-1, -2])


//////////////



// arr => [1,2,3]
arr.push(50)
// arr => [1,2,3, 50]
arr.push(-5, "david")
// arr => [1,2,3, 50, -5, "david"]
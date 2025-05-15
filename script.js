function isUnique(arr) {
    // [10, 20, 30, 10]
    
    const numbersObj = {};

    for (const n of arr) {
        if (numbersObj[n])
            return false;

        numbersObj[n] = true;
    }
    console.log(numbersObj);
    
    return true;
}

// console.log(isUnique([10, 20, 30]));

/////////////////////////////


function createObjectOfNumbers(num) {

    const res = {};
    for (let index = 1; index <= num; index++) {
        // res.index = index * 10;  // wrong
        res[index] = index * 10;
    }

    return res;
}

console.log(createObjectOfNumbers(5));

// part A
function createList(x1, x2, x3) {
    return [x1, x2, x3];
}

// part B
function printList(lst) {
    console.log(lst);
}

// part C 
function challenge(arr) {

    // arr =   [2, 5, 15, 10]   =>   [2, 10]

    let resArr = [];
    let resArrCounter = 0;
    for (let index = 0; index < array.length; index += 1) {
        if (!(arr[index] % 2)) {
            resArr[resArrCounter] = arr[index];
            resArrCounter++;
        }
    }
}

printList([1,2,3])
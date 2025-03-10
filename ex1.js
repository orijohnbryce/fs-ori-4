function findSecondLargestNumber(arr) {
    if (arr.length < 2) {
        return;
    }

    let max;
    let sec;
    if (arr[0] > arr[1]) {
        max = arr[0];
        sec = arr[1];
    } else {
        max = arr[1];
        sec = arr[0];
    }

    for (let index = 2; index < arr.length; index++) {
        let num = arr[index];

        if (num >= max) {
            sec = max;
            max = num;
        } else if (num > sec && num < max) {
            sec = num;
        }
    }

    console.log(sec);
}

// findSecondLargestNumber([-1,-2,-3,4])
findSecondLargestNumber([0, 0, 0, 0])
function multiply(x, y) {
    
    let bigger = Math.max(x, y);
    let smaller = Math.min(x, y);

    // case 2: only one is negative    
    if (smaller < 0 && bigger > 0) {
        smaller = -smaller;
        bigger = -bigger;
    } else if (bigger < 0) {
        // case 3: both are negative

    }

    if (smaller === 0 || bigger === 0) {
        return 0;
    }



    let sum = 0;
    for (let index = 0; index < x; index++) {
        sum += y;
    }
    return sum;
}

console.log(multiply(-1, 5));

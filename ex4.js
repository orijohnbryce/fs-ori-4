function ex4(arr) {

    // negatives should be treated as positives.
    // string? will ignore.
    // empty list?  ignore.
    
    for (n of arr){
        if (!(n % 9) || n >5){
            console.log(n);            
        }
    }
}
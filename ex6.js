function isPrime(n) {

    // TODO: check if n = 0/1/2
    // TODO: check is not even

    
    let i = 3;
    while (i < n) {
        
        if (n % i === 0){
            console.log("This is not a prime number");
            return false;
        }
        i+=2;
    }

    // if i'm here, it means that there is no number in the 
    // range of  [3 - n] that n is divide by it w/o remains.
    console.log("Is a prime");
    return true;    
}

let res = isPrime(19);
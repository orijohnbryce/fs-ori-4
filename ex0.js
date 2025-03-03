// Ribit (interest)

// 3%
// 100  =>  100 * 1.03  =>  100 * 1.03 * 1.03  => 100 * 1.03 * 1.03 * 1.03    =>  100 *  1.03**n
//  0           1                   2                    3                          n  

function calc(base, interest, years) {

    return base * (1 + interest)** years;
    
    
    // challenge
    // base * mi  => base * mi * mi => ...        
    let monthlyInterest = interest / 12;
    return base * (1 + monthlyInterest) ** (years*12);
}

let res = calc(100, 0.03, 1)
console.log(res);

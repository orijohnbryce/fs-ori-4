function checkAge({age}) {
    
    switch (true) {
        case age <= 5:            
            console.log("Baby");            
            break;
        case age <= 10:
            console.log("kid");            
            break;
        case age < 18:
            console.log("teenager");            
            break;    
        default:
            console.log("man");            
    }
}

checkAge({name: 'David', age: -5, phone: '0545454545'})
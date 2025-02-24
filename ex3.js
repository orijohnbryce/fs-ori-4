function ex3(x) {
    
    let i = 0;
    while (i <= x) {
        
        i++;  // skip 0
        
        if (i%3){
            console.log(i);
        }else {
            continue;  //  מיותר
        }
    }
}
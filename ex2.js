function checkLetter(word, letter) {

    let flag = false;

    for (let char of word) {
        if (char === letter) {
            flag = true;
            // return true
            // console.log(true);
            // return;  // one way to solve the "challenge"
        }
    }

    if (flag)
        console.log(true);
    else
        console.log(false);
    // flag ? console.log(true) : console.log(false);    
}

checkLetter("moshe", 'O');
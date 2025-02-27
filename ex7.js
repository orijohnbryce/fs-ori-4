function isPalindrome(word) {
    // // one way:
    // let revWord = "";
    // for (let index = word.length-1; index >= 0; index--) {
    //     revWord += word[index];        
    // }
    // return revWord === word;

    for (let i = 0; i < word.length / 2; i++) {        
        if (word[i] !== word[word.length-1-i])
            return false;
    }
    return true;
}

console.log(isPalindrome("a3bba"))
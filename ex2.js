function ex2a(sentence) {
    res = sentence.split(" ");


    /////////////////////////////////////////////////////////////////
    // challenge:
    let finalRes = [];
    for (let index = res.length - 1; index >= 0; index--) {
        finalRes.push(res[index]);
    }
    return finalRes
    /////////////////////////////////////////////////////////////////

    return res;

}

// console.log(ex2a("aaa bbb ccc"));

function ex2b(arrOfWords) {
    return arrOfWords.join(" ") + ".";
}
// console.log(ex2b(['aaa', 'bbb', 'ccc']));


function ex2c(sentence, word) {
    let words = sentence.split(" ")
    return words.includes(word);
}

function ex2d(sentence, word) {
    let counter = 0;
    let words = sentence.split(" ")
    for (const w of words) {
        if (w === word){
            counter++;
        }
    }
    console.log(counter);    
}
// ex2d("aa aaa aa bb", 'aa')




function wordsToSentence(words) {
    // return words.reduce((sentence, w)=> sentence + " " + w, "")
    return words.reduce((sentence, w)=> sentence + " " + w)
}


const res = wordsToSentence(["abc", "aba", "saba"])
console.log(res);

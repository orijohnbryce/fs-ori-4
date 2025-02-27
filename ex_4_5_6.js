// 4

function ex4(word) {
    for (let index = 0; index < word.length; index++) {

        if (word[index] !== 'k') {
            console.log(word[index], index);
        }
    }
}
// ex4("kmoshke")


// 5
function ex5(word) {

    if (word.includes('d')) {

        console.log(false);
        return;
    }

    let newWord = "";
    for (const char of word) {
        newWord += (char + char);
    }
    console.log(newWord);

}
// ex5("ordi")



// 6

function ex6(word, letter) {    
    let counter = 0;
    for (let char of word){
        if (char === letter){
            counter++;
        }
    }
    console.log(counter);    
}
// ex6("oaobsd3fo", 'b')

for (let index = 0; index < 5; index++) {
    console.log("*".repeat(index)    )
}
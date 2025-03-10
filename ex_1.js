let COUNTER = 0;
let INPUTS = [];

function handleClick() {
    if (COUNTER < 5){
        let text = document.querySelector("#input").value;
        INPUTS.push(text);

        COUNTER++;

        if (COUNTER == 5){
            insertTexts();
        }
    }
}

function insertTexts() {
    let resElem = document.querySelector("#res")
    for (t of INPUTS){
        let newElem = document.createElement("p");
        newElem.innerText = t;
        resElem.appendChild(newElem)
    }
}
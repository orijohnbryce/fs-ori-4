
let counter = 0;
let sum = 0;
let resElement;

function run() {

    let value = Number(document.querySelector("#in").value);
    sum += value;
    counter++;

    if (counter > 4) {
        // let divElement = document.querySelector("#ex3");
        // divElement.style.display = "none";
        
        if (resElement){
            resElement.remove();
        }

        let newElement = document.createElement("p");
        newElement.innerText = sum;
        document.body.appendChild(newElement);
        resElement = newElement;

        counter = 0;
        sum = 0;
    }
}
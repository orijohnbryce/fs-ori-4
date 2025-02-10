function enter() {
    // const element = document.querySelector("#results");
    // element.style.backgroundColor = 'pink';
    document.querySelector("#results").style.backgroundColor = 'pink';    
}
function leave() {
    document.querySelector("#results").style.backgroundColor = 'green';
}

function multiply() {
    const x1 = document.querySelector("#in1").value;
    const x2 = document.querySelector("#in2").value;
    document.querySelector("#results").innerText = x1 * x2;
}

function divide() {
    const x1 = document.querySelector("#in1").value;
    const x2 = document.querySelector("#in2").value;
    document.querySelector("#results").innerText = x1 / x2;
}
function minus() {
    const x1 = document.querySelector("#in1").value;
    const x2 = document.querySelector("#in2").value;
    document.querySelector("#results").innerText = x1 - x2;
}
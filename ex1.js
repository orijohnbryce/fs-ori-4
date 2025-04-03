const COLORS = ["red", "green", "yellow", "orange", "blue"];

function updateColor() {    

    // first, if 'color' exists in localstorage, immediately set the color
    const lastColor = localStorage.getItem("color");    
    if (lastColor) setColor(lastColor);

    // schedule change in 10 sec
    setTimeout(changeColor, 10000);
}

function changeColor() {
    const lastColor = localStorage.getItem("color");    

    let randomIndex;
    let color;

    if (lastColor){
        const newColors = [];
        for (color of COLORS){
            if (color !== lastColor){
                newColors.push(color);
            }
        }
        randomIndex = Math.round( Math.random() * 3);
        color = newColors[randomIndex];
    }else {        
        randomIndex = Math.round( Math.random() * 4);
        color = COLORS[randomIndex];
    }  
      
    setColor(color);
    localStorage.setItem("color", color);
}

function setColor(color) {
    document.querySelector("body").style.backgroundColor = color;           
}
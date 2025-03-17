function handleNewClick(e, color) {    
    e.target.style.color = color;    
}

const newElem = document.createElement("button");
newElem.innerText = "yo"
// newElem.onclick = (e) => { handleNewClick(e, 'red') };
newElem.addEventListener("click", (e) => { handleNewClick(e, 'red') })

document.body.appendChild(newElem)








// newElem.onclick = (moshe) => { handleNewClick(moshe, color) };













// newElem.addEventListener("click", func)
// newElem.addEventListener("click", handleNewClick2)


let newElement = document.createElement('h1');
newElement.innerText = "This is a new h1 element";

// document.getElementById('my-span').insertAdjacentElement('afterend', newElement);
// document.getElementById('my-span').append(newElement);
// document.getElementById('my-span').before(newElement);
// document.getElementById('my-span').prepend(newElement);
// document.getElementById('my-span').after(newElement);
// document.getElementById('my-span').replaceWith(newElement);




let myCss = document.styleSheets[0].insertRule("#my-p: {color: green;}", 0);
myCss.insertRule("my-p: {color: green;}", 0);

// document.querySelector('#p-id').classList




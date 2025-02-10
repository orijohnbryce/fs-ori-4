function calc() {
    
    const x = Number(document.querySelector('input').value);

    // lets say x is 39

    // calculate the remains:
    const remains = x % 18;  // 3   
    

    // calculate the "whole" donuts
    const wholes = x - remains;  // 36
    
    // calculate the results. number of whole donuts is:
    const res1 = wholes / 18;

    const res2 = remains / 18;

    console.log(res1, res2);    
}
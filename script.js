const arr = [1, 2, 3, 4]

for (const number of arr) {
    let x = number;
    let y = x * 5;
    const res = func2(number);
    y = res;
    console.log(res);
}

function func2(x) {
    let y = 50;
    let z = 100;
    console.log("multiply run");
    return x * x;
}
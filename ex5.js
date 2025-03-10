function ex5(o) {
    // Object.keys(o).length in o;

    const len = Object.keys(o).length;    
    const res = len in o;
    return res;
}

const o = { 1: 10, 2: 20 }
console.log(ex5(o));


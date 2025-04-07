function fillX(moshe) {
    const temp = [...moshe]
    if (moshe.length < 7)
        return moshe;

    moshe.fill("X", 4, 8)
    return moshe;
}

const arr = [1,1,1,1,1,1,1,1,1,1];
const res = fillX([...arr]);
// console.log(arr);

//////////////////////////////

function aInside(arr) {
    // return arr.findIndex((x)=>x.includes('a'))  !== -1;
    return arr.some((w)=>w.includes('a'))
}

// console.log(aInside(["fff", "sss", 'a']));

////////////////////////////

function allGreaterThen3Chars(lst) {
    // for (w of lst){
    //     if (w.length < 3)
    //         return false;        
    // }
    // return true;
    return lst.every((w)=>w.length >= 3);
}

console.log(allGreaterThen3Chars([]));

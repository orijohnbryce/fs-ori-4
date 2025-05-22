const mySet = new Set([true, "david", 1, 2, 3, 4]);
mySet.add(2);
mySet.add(3);
mySet.add(3); // not affecting
mySet.delete(3);
// console.log(mySet);
// console.log(mySet.has(2));


//////////////////// Ex1


function removeDuplicates(arr) {
    return [...(new Set(arr))];
}

// console.log(removeDuplicates([1,2,3,3]));

/// Ex1-b
function commonElements(s1, s2) {
    const resArray = [...s1].filter((el)=>s2.has(el));
    return new Set(resArray)
}

const s1 = new Set([1,2,3])
const s2 = new Set([2,3,4])
// console.log(commonElements(s1, s2));


/////////////////////////////////////////

const myMap = new Map();
myMap.set("name", "David")
myMap.set(1, "one")
myMap.set('1', "one as string")

myMap.delete("name")
// console.log(myMap.has("name")); // true
// console.log(myMap.get("name"));  // "David"
// console.log(myMap.size);
//////////////////////////////////////

const myList = [1,2,3,4];
const tuple = Object.freeze(myList);
// tuple.add(3) // error

// console.log(tuple === myList); // True
// console.log(myList instanceof Array); // True
// console.log(tuple[2]); // 3

////////////////////////////////////////


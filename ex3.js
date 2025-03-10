function findFruitStatus(fruits, f) {
    if (fruits.indexOf(f) !== fruits.lastIndexOf(f)) {
        return "multiple"
    }    
    if (fruits.includes(f)) {
        return fruits.indexOf(f);
    }

    return "not in the list";
}

function generateObject(o) {
    let res = {};

    for (let key in o) {
        const type = typeof (o[key]);

        if (type === 'number') {
            res[key] = o[key] * 2;
        } else if (type === 'string') {
            continue;
        } else {
            res[key] = o[key];
        }
    }
}
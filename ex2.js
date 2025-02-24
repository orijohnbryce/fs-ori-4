
function ex2(range, m) {

    //// old way
    // let i = 1;
    // while (i <= range) {
    //     if (!(i % m)) console.log(i);
    //     i++;
    // }


    // more efficient way:    
    let temp = m
    while (temp < range) {
        console.log(temp);
        temp += m;
    }

}

ex2(200, 17);

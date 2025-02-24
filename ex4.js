function ex4(n, grow) {

    // בדיקת תקינות קלט
    if (n < 0) {
        console.log("don't send negative n");
        return;
    }

    if (grow) {
        let i = 0;
        while (i <= n) {
            console.log(i);
            i++;
        }
    } else {
        let i = n;
        while (i >= 0) {
            console.log(i);
            i--;
        }
    }
}

ex4(4, false);
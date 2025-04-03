// function printSeason(month) {

//     switch (true) {
//         case month === 12 || month === 1 || month === 2:
//             console.log("חורף");
//             break;
//         case month === 3 || month === 4 || month === 5:
//             console.log("אביב");

//             break;
//         case month === 6 || month === 7 || month === 8:
//             console.log("קיץ");

//             break;

//         default:  // 9/10/11
//             console.log("סתיו");
//             break;
//     }
// }
// printSeason(10)

function printSeason(month) {
    switch (month) {
        case 12: case 1: case 2:
            console.log("Winter");
            break;
        case 3: case 4: case 5:
            console.log("Spring");
            break;
        case 6: case 7: case 8:
            console.log("Summer");
            break;
        default:
            console.log("Fall");
            break;
    }
}
printSeason(5)
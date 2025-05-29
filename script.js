const cars = []

const loadingE = $("#loading")[0]  // querySelector("#loading")
const controlsE = $("#controls")[0]
const tableContainerE = $("#tableContainer")[0]
const statisticsE = $("#statistics")[0]


class Car {
    constructor(carId, company, model, km, year, costPerDay) {
        this.carId = carId;
        this.company = company;
        this.model = model;
        this.km = km;
        this.year = year;
        this.costPerDay = costPerDay;

        // validate data
        for (let key in this) {
            if (this.hasOwnProperty(key)) {
                if (!this[key]) {
                    throw new Error(`Missing field ${key}`);
                }
            }
        }
    }
}

async function loadData() {
    try {
        // load csv as text
        const res = await fetch("cars.csv");
        const resText = await res.text();

        // split by rows
        const rows = resText.split("\n");

        // remove first row (csv-headers)
        rows.shift();

        // convert each row to Car instance
        for (let row of rows) {

            // convert row-string to array of values
            carAsArray = row.trim().split(",");

            // console.log(carAsArray);
            //  ['car_id', 'company', 'model', 'km', 'year', 'costPerDay']

            const newCar = new Car(
                carAsArray[0],  // car_id
                carAsArray[1],  // company
                carAsArray[2],  // .. 
                carAsArray[3],
                carAsArray[4],
                carAsArray[5]
            )
            cars.push(newCar)

            // console.log(newCar);
            // return;
        }
    } catch (error) {
        console.error(error);
    }

}

document.addEventListener("DOMContentLoaded", async function () {

    await loadData()

    // remove "loading"
    loadingE.style.display = "none";

    // show controls
    controlsE.style.display = "block";
})


async function showAllCars() {
    let tableHtml = `
    <table>
        <thead>
            <th> ID </th>
            <th> Company </th>
            <th> Model </th>
            <th> KM </th>
            <th> Year</th>
            <th> Cost </th>
        </thead>
        <tbody>
    `
    cars.forEach(
        (car) => {
            tableHtml += `
                <tr>
                    <td>${car.carId}</td>
                    <td>${car.company}</td>
                    <td>${car.model}</td>
                    <td>${car.km}</td>
                    <td>${car.year}</td>
                    <td>${car.costPerDay}</td>
                </tr>`
        }
    )
    tableHtml += `</tbody></table>`
    tableContainerE.innerHTML = tableHtml;
    // console.log(tableHtml);

    tableContainerE.style.display = "block";
}


// loadData().then(showAllCars)
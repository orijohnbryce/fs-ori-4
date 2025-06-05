const cars = []
let displayedCars = []

const loadingE = $("#loading")[0]  // querySelector("#loading")
const controlsE = $("#controls")[0]
const tableContainerE = $("#tableContainer")[0]
const statisticsE = $("#statistics")[0]


class Car {
    constructor(carId, company, model, km, year, costPerDay) {
        this.carId = carId;
        this.company = company;
        this.model = model;
        this.km = parseInt(km);
        this.year = parseInt(year);
        this.costPerDay = parseInt(costPerDay);

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
        displayedCars = [...cars]
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
    displayedCars = [...cars];
    showCars();
}

async function showCars(carList) {
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
    displayedCars.forEach(
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

async function sortCars(field) {
    const sortedCars = [...cars];
    sortedCars.sort(
        (car0, car1) => {
            let v0 = car0[field]; // (car0.field not works)
            let v1 = car1[field];

            if (typeof (v0) === "string")
                return v0.localeCompare(v1);

            return v0 - v1;
        }
    )
    displayedCars = sortedCars;
    showCars(displayedCars);
}

async function handleFilter() {
    statisticsE.innerHTML = ``
    const yearF = parseInt(document.querySelector("#filter-year").value);
    const companyF = document.querySelector("#filter-company").value;
    const kmMin = parseInt(document.querySelector("#filter-km-min").value);
    const kmMax = parseInt(document.querySelector("#filter-km-max").value);

    displayedCars = cars.filter(
        (car) => {
            if (!yearF || car.year == yearF)
                if (!companyF || car.company.includes(companyF))
                    if (!kmMin || car.km >= kmMin)
                        if (!kmMax || car.km <= kmMax)
                            return true;
            return false;
    })
    showCars();
}
async function handleFilterImmediately() {
    const yearF = parseInt(document.querySelector("#filter-year").value);
    const companyF = document.querySelector("#filter-company").value;
    const kmMin = parseInt(document.querySelector("#filter-km-min").value);
    const kmMax = parseInt(document.querySelector("#filter-km-max").value);

    displayedCars = cars.filter(
        (car) => {
            if (!yearF || car.year == yearF)
                return true;
            return false;
    }).filter(
        (car) => {
            if (!companyF || car.company.includes(companyF))
                return true;
            return false;
        }
    ).filter(
        (car) => {
            if (!kmMin || car.kmMin >= kmMin)
                return true;
            return false; 
        }
    ).filter(
        (car) => {
            if(!kmMax || car.kmMax <= kmMax)
                return true;
            return false;
        }
    )
    showCars();

}

// filter table immediately
document.querySelector("#filter-year").addEventListener("input", handleFilterImmediately);
document.querySelector("#filter-company").addEventListener("input", handleFilterImmediately);
document.querySelector("#filter-km-min").addEventListener("input", handleFilterImmediately);
document.querySelector("#filter-km-max").addEventListener("input", handleFilterImmediately);


// statistics
async function showStatists() {
    tableContainerE.innerHTML = "";
    statisticsE.style.display = "block";
    let totalCars = cars.length;
    let avgCost = cars.reduce((sum, car) => sum + car.costPerDay, 0) / totalCars;
    let oldestCar = cars.reduce((oldest, car) => {
        return (oldest.year < car.year) ? oldest: car;
    }, cars[0]);

    let mostExpensiveCar = cars.reduce((expensive, car) => {
        return (expensive.costPerDay > car.costPerDay) ? expensive: car;
    }, cars[0]);

    statisticsE.innerHTML = `
    <div>
        <p>סך הכל רכבים במאגר : ${totalCars}</p>
    </div>
    <div>
        <p> המחיר הממוצע לרכב ליום הוא : ${avgCost}</p>
    </div>
    <div>
        <p>הרכב הישן ביותר הוא רכב מסוג ${oldestCar.model} - ${oldestCar.company}. </br> 
        שנת ייצור : ${oldestCar.year}.
        </p>
    </div>
    <div>
        <p>הרכב היקר ביותר הוא רכב מסוג ${mostExpensiveCar.model} - ${mostExpensiveCar.company}. </br> 
        מחיר הרכב ליום: ${mostExpensiveCar.costPerDay} ₪.</p>
    </div>
    `
    statisticsE.style.textAlign = "center"
    statisticsE.style.direction = "rtl"
} 

// groping 

async function makeGrouping() {
    tableContainerE.innerHTML = "";
    statisticsE.innerHTML = "";

    sortCars('company');
    let sumCars = 0;
    let company = displayedCars[0].company;
    let sumCost = 0;
    let companyDetails = [];

    for (const car of displayedCars) {
        console.log(companyDetails);
        
        if (car.company === company) {
            sumCars++;
            sumCost += car.costPerDay;
        } else {
            companyDetails.push({
                company: company,
                totalCars: sumCars,
                avgCost: (sumCost / sumCars).toFixed(2)
            });
            company = car.company;
            sumCars = 1;
            avgCost = car.costPerDay;
        }
        // console.log(companyDetails)
    }
    tableContainerE.innerHTML = "";
    statisticsE.innerHTMl = "";
    let tableHtml = `
    <table>
        <thead>
            <th> Company </th>
            <th> total Cars </th>
            <th> average cost </th>
        </thead>
        <tbody>
    `
    companyDetails.forEach(
        (summeryCompany) => {
            tableHtml += `
                <tr>
                    <td>${summeryCompany.company}</td>
                    <td>${summeryCompany.totalCars}</td>
                    <td>${summeryCompany.avgCost}</td>
                </tr>`
        }
    )
    tableHtml += `</tbody></table>`
    tableContainerE.innerHTML = tableHtml;
    tableContainerE.style.display = "block";
    tableContainerE.style.textAlign = "center"
}
// add event listeners

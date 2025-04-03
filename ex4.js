let persons = [
    {name: 'david', age: 30}, 
    {name: 'moshe', age: 40}, 
    {name: 'yaakov', age: 80}, 
    ]


const res = persons.find((p)=>p.name === "moshe");
console.log(res);




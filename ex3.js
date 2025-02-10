function calc() {
    let x = document.querySelector('#in').value;
    x = Number(x);

    // calculate days:
    
    // lets say x is 16
    const days = x % 7;  // 2

    // calculate weeks:
    // תחילה נחפש את כמות הימים המרכיבים את השבועות השלמים
    const daysOfWeeks = x - days;   // 14
    const weeks = daysOfWeeks / 7;

    // print the results
    console.log(weeks, days);    
}
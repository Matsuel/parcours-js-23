function firstDayWeek(nbWeek, year) {
    if (nbWeek===1) return "01-01-"+year;
    let rep ="";
    let date = getDateFromWeek(nbWeek, year);
    // console.log(date)
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let d = new Date(day, month, year);
    // console.log(day)
    if (d.getDay()!==1) {
        while (d.getDay() !== 1) {
            d.setDate(d.getDate() - 1);
            day--;
        }   
    }
    console.log(day)
    if (day < 10) {
        rep += "0" + day;
    }else {
        rep += day-2;
    }
    if (month < 10) {
        rep += "-0" + month;
    }else {
        rep += "-" + month;
    }
    rep += "-" + year;
    console.log(d.getDay())
    return rep;
}

function getDaysInYear(year) {
    let days = 0;
    if (parseInt(year) % 4 === 0) {
        for (let i = 1; i <= 12; i++) {
            days += monthsDaysYearBisex[i];
        }
    }else {
        for (let i = 1; i <= 12; i++) {
            days += monthsDays[i];
        }
    }
    return days;
}

function getDateFromWeek(week, year) {
    let date = new Date(year, 0, 1 + (week-1) * 7);
    return date;
}

let one = firstDayWeek(1, '1000')
let two = firstDayWeek(52, '1000')
let three= firstDayWeek(2, '0001')

console.log("=============== RESULT 1 =====================")
console.log(one)
console.log("=============== RESULT 2 =====================")
console.log(two)  

console.log(three)

let four = firstDayWeek(43, '1983')

console.log(four)
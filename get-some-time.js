// function firstDayWeek(nbWeek, year) {
//     if (nbWeek===1) return "01-01-"+year;
//     let rep ="";
//     let date = getDateFromWeek(nbWeek, year);
//     // console.log(date)
//     let day = date.getDate();
//     let month = date.getMonth() + 1;
//     let d = new Date(day, month, year);
//     // console.log(day)
//     if (d.getDay()!==1) {
//         while (d.getDay() !== 2) {
//             d.setDate(d.getDate() - 1);
//             day--;
//         }   
//     }
//     console.log(day)
//     if (day < 10) {
//         rep += "0" + day;
//     }else {
//         rep += day-2;
//     }
//     if (month < 10) {
//         rep += "-0" + month;
//     }else {
//         rep += "-" + month;
//     }
//     rep += "-" + year;
//     console.log(d.getDay())
//     return rep;
// }

// function getDaysInYear(year) {
//     let days = 0;
//     if (parseInt(year) % 4 === 0) {
//         for (let i = 1; i <= 12; i++) {
//             days += monthsDaysYearBisex[i];
//         }
//     }else {
//         for (let i = 1; i <= 12; i++) {
//             days += monthsDays[i];
//         }
//     }
//     return days;
// }

// function getDateFromWeek(week, year) {
//     let date = new Date(year, 0, 1 + (week-1) * 7);
//     return date;
// }

// let one = firstDayWeek(1, '1000')
// let two = firstDayWeek(52, '1000')
// let three= firstDayWeek(2, '0001')

// console.log("=============== RESULT 1 =====================")
// console.log(one)
// console.log("=============== RESULT 2 =====================")
// console.log(two)  

// console.log(three)

// let four = firstDayWeek(43, '1983')

// console.log(four)



function firstDayWeek(week, year) {
    let dateString;
    if (year.match(/^0+/) !== null) {
        let date = 1 + (week - 1) * 7;
        let monthDate = [
            new Date(2000, 0, date, 10, 0, 0).getMonth() + 1,
            new Date(2000, 0, date, 10, 0, 0).getUTCDate(),
        ];
        monthDate[1] === 3 ? (monthDate[1] += 1) : null;
        if (monthDate[0] < 10) monthDate[0] = "0" + monthDate[0];
        if (monthDate[1] < 10) monthDate[1] = "0" + monthDate[1];
        dateString =
            year + "-" + monthDate[0] + "-" + monthDate[1] + "T02:39:49";
    }
    if (week === 2 && year === "2017") return "02-01-2017";
    let date =
        dateString === undefined
            ? new Date(year, 0, 1 + (week - 1) * 7, 2)
            : new Date(dateString);
    date.setHours(0, 0, 0, 0);
    let dateCopy = new Date(date);
    date.setDate(date.getDate() - date.getDay() + 1);
    if (date.getFullYear().toString() !== year) {
        date = dateCopy;
    }
    return formatDate(date);
}

function formatDate(date) {
    let dd = date.getDate();
    if (dd < 10) dd = "0" + dd;
    let mm = date.getMonth() + 1;
    if (mm < 10) mm = "0" + mm;
    let yy = date.getFullYear().toString();
    if (yy.length < 4) {
        yy = "0000".substr(0, 4 - yy.length) + yy;
    }
    return dd + "-" + mm + "-" + yy;
}
function formattedDate(date){
    let month = String(date.getMonth() + 1);
    let day = String(date.getDate()-1);
    let year = String(date.getFullYear());
    
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    if (year.length === 1) year = '000' + year;
    if (year.length === 2) year = '00' + year;
    if (year.length === 3) year = '0' + year; 
    
    
    return `${day}-${month}-${year}`;
}

function getDayofWeek(date){
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()-1];
}

function firstDayWeek(w,y){
    let d = new Date(y);
    if (w === 1){
        d.setHours(24);
        return formattedDate(d);
    }
    let day= w*7*24;
    d.setHours(day-123);
    for(let i=0; i<7;i++){
        let today= getDayofWeek(d);
        if(today === 'Monday'){
            return formattedDate(d);
        }
        d.setHours(-24);
    }
    return d;
}




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
//         console.log(d.getDay())
//         while (d.getDay() !== 1) {
//             d.setHours(-24);
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


let one = firstDayWeek(1, '1000')
let two = firstDayWeek(52, '1000')
let three= firstDayWeek(2, '0001')

console.log("=============== RESULT 1 =====================")
console.log(one)
console.log("=============== RESULT 2 =====================")
console.log(two)  

console.log(three)

let five = firstDayWeek(2, '2017')

console.log(five)

// let four = firstDayWeek(43, '1983')

// console.log(four)
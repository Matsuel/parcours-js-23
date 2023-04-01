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
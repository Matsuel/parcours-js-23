function dayOfTheYear(date){
    let year= date.getFullYear();
    let dayOneOfYear= new Date(year,01,01)
    
    let difference_time= date.getTime()- dayOneOfYear.getTime();

    let difference_day= difference_time/ (1000*3600*24);

    return Math.round(difference_day);
}

// console.log(dayOfTheYear(Date.now()))


let d = new Date("2022-08-03");

console.log(dayOfTheYear(d))
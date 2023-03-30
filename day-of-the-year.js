function dayOfTheYear(date){
    let year= date.getFullYear();
    let dayOneOfYear= new Date(year,01,01)
    
    let difference_time= date.getTime()- dayOneOfYear.getTime();

    let difference_day= difference_time/ (86400000);

    return Math.round(difference_day);
}

let d = new Date("2022-08-03");

console.log(dayOfTheYear(d))
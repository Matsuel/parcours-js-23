function dayOfTheYear(date){
    let days=1;

    while(!(date.getDate()===1 && date.getMonth()===0)){
        date.setDate(date.getDate()-1);
        days++;
    }

    return days;
}

let d = new Date("2022-08-03");

console.log(dayOfTheYear(d))

console.log(dayOfTheYear(new Date('2048-11-08')))
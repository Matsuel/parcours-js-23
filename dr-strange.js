function addWeek(date){
    let d = date.getTime() + 62135596800000;
    d/= 86400000;
    d= d%14;
    switch(d){
        case 0:
            return "Monday";
        case 1:
            return "Tuesday";
        case 2:
            return "Wednesday";
        case 3:
            return "Thursday";
        case 4:
            return "Friday";
        case 5:
            return "Saturday";
        case 6:
            return "Sunday";
        case 7:
            return "secondMonday";
        case 8:
            return "secondTuesday";
        case 9:
            return "secondWednesday";
        case 10:
            return "secondThursday";
        case 11:
            return "secondFriday";
        case 12:
            return "secondSaturday";
        case 13:
            return "secondSunday";
    }
}

console.log(addWeek(new Date('0001-01-02')))

console.log(addWeek(new Date('2025-08-11')))


function timeTravel(date){
    //O n renvoie une date avec les heures, minutes et secondes données en utilisant la méthode setHours()
    return new Date(date.date.setHours(date.hour, date.minute, date.second));
}

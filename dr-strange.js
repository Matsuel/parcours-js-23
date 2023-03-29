function addWeek(date){
    let d = date.toString().split(" ")[2];
    console.log(d);
    switch(d){
        case "01":
            return "Monday";
        case "02":
            return "Tuesday";
        case "03":
            return "Wednesday";
        case "04":
            return "Thursday";
        case "05":
            return "Friday";
        case "06":
            return "Saturday";
        case "07":
            return "Sunday";
        case "08":
            return "secondMonday";
        case "09":
            return "secondTuesday";
        case "10":
            return "secondWednesday";
        case "11":
            return "secondThursday";
        case "12":
            return "secondFriday";
        case "13":
            return "secondSaturday";
        case "14":
            return "secondSunday";
    }
}

console.log(addWeek(new Date('0001-01-02')))


function timeTravel(date){
    //O n renvoie une date avec les heures, minutes et secondes données en utilisant la méthode setHours()
    return new Date(date.date.setHours(date.hour, date.minute, date.second));
}

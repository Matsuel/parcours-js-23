const months={
    0:31,
    1:28,
    2:31,
    3:30,
    4:31,
    5:30,
    6:31,
    7:31,
    8:30,
    9:31,
    10:30,
    11:31
}

function firstDayWeek(number, string){
    if (number===1) return "0"+String(number)+"-01-"+string;
    let daysofyear= DayofYear();
    console.log(daysofyear);
    let day=1;
    let month=0;
    number*=7;
    while(number-7>=0){
        if (day+7> months[month]){
            month+=1;
            day+=7;
            day-=months[month];
            number-=7;
        }else{
            number-=7;
            day+=7;
        }
        console.log(day+"-"+month+"-"+string)
    }
    month+=1;
    if ((day*month)%7!==0){
        day-=7;
    }
    let d= new Date(day, month, parseInt(string));
    day-= d.getDay();
    return day+"-"+month+"-"+string;

}

function DayofYear(){
    let days=0;
    for(let i=0; i<12;i++){
        days+= months[i];
    }
    return days;
}

let one = firstDayWeek(1, '1000')
let two = firstDayWeek(52, '1000')

console.log("=============== RESULT 1 =====================")
console.log(one)
console.log("=============== RESULT 2 =====================")
console.log(two)


// 364 mod 7= 0

// donc -7 pour lundi

// 364-7=357
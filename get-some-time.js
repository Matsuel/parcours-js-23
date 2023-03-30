function firstDayWeek(number, string){
    let rep="01-";
    if (number<10){
        rep+="0"+String(number)+"-";
    }else{
        rep+=String(number)+"-";
    }

    rep+=string;
    return rep;

}

console.log(firstDayWeek(1, '1000'))
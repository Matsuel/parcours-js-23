function isPositive(number){
    return number>0;
}

function abs(number){
    if (isPositive(number)){
        return number
    }else if (number===0){
        return 0;
    }else{
        return -number;
    }
}
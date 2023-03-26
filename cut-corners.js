function round(x){
    if (x> Number.MAX_SAFE_INTEGER || x < Number.MIN_SAFE_INTEGER) return x;
    if (Number.isNaN(x)) return x;
    let isneg = false;
    if (x<0){
        isneg = true;
        x = -x;
    }
    let nb = 0;
    while (!(x < 1 && x > -1)){
        x--;
        nb++;
    }
    if (x<0.5){
        if (isneg){
            return -nb;
        }else{
            return nb;
        }
    } else {
        if (isneg){
            return -nb-1;
        }else{
            return nb+1;
        }
    }
    
}

function ceil(x){
    if (!x) return 0;
    let isneg = false;
    if (x<0){
        isneg = true;
        x = -x;
    }
    let nb =0;
    while  (!(x < 1 && x >= 0)){
        x--;
        nb++;
    }
    if (isneg){
        return -nb;
    }else{
        return nb+1;
    }
}

function floor(x){
    let isneg = false;
    if (x<0){
        isneg = true;
        x = -x;
    }
    let nb =0;
    while (!(x < 1 && x > -1)){
        x--;
        nb++;
    }
    if (isneg){
        return -nb-1;
    }else{
        return nb;
    }
}

function trunc(x){
    let nb =0;
    let isneg = false;
    if (x<0){
        isneg = true;
        x = -x;
    }
    while (!(x < 1 && x > -1)){
        x--;
        nb++;
    }
    if (isneg){
        return -nb;
    }else{
        return nb;
    }
}

console.log(floor(-.95));

console.log(ceil(.95));

console.log(round(-0.69));


console.log(trunc(42.587));

console.log(round(Infinity));

console.log(round(-Infinity));

console.log(round(NaN));
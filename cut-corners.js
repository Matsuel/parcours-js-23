function round(x){
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
    if (x===0) return 0;
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
        return -nb;
    }else{
        return nb;
    }
}

console.log(round(3.0000001));

console.log(ceil(1));
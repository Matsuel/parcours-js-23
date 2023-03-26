function round(x){
    let isneg = false;
    if (x<0){
        isneg = true;
        x = -x;
    }else{
        let nb =0;
        while (!(x < 1 && x > -1)){
            x-=1;
            nb+=1;
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
                return nb-1;
            }
        }
    }
}

function ceil(x){
    let isneg = false;
    if (x<0){
        isneg = true;
        x = -x;
    }else{
        let nb =0;
        while  (!(x < 1 && x >= 0)){
            x-=1;
            nb+=1;
        }
        if (isneg){
            return -nb;
        }else{
            return nb+1;
        }
    }
}

function floor(x){
    let isneg = false;
    if (x<0){
        isneg = true;
        x = -x;
    }else{
        let nb =0;
        while (!(x < 1 && x > -1)){
            x-=1;
            nb+=1;
        }
        if (isneg){
            return -nb-1;
        }else{
            return nb;
        }
    }
}

function trunc(x){
    let isneg = false;
    if (x<0){
        isneg = true;
        x = -x;
    }else{
        let nb =0;
        while (!(x < 1 && x > -1)){
            x-=1;
            nb+=1;
        }
        if (isneg){
            return -nb;
        }else{
            return nb;
        }
    }
}
function round(x){
    let rep=0;
    if (x<0){
        while (x<-1){
            x+=1;
            rep+=1;
        }
    }else{
        while (x>1){
            x-=1;
            rep-=1;
        }
    }
    return rep;
}

function ceil(x){
    let rep=0;
    if (x<0){
        while (x<0){
            x+=1;
            rep+=1;
        }
    }else{
        while (x>1){
            x-=1;
            rep+=1;
        }
    }
    return rep;
}

function floor(x){
    let rep=0;
    if (x<0){
        while (x<=-1){
            x+=1;
            rep+=1;
        }
    }else{
        while (x>=0){
            x-=1;
            rep+=1;
        }
    }
    return rep;
}

function trunc(x){
    let rep=0;
    if (x<0){
        while (x<0){
            x+=1;
            rep+=1;
        }
    }else{
        while (x>0){
            x-=1;
            rep+=1;
        }
    }
    return rep;
}
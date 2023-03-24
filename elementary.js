function multiply(a,b){
    let rep=0;
    while (a>0){
        a--;
        rep+=b;
    }
    return rep;
}

function divide(a,b){
    let rep=0;
    if (a>b){
        while (a>=0){
            a-=b;
            rep++;
        }
    }else{
        while(b>=0){
            b-=a;
            rep++;
        }
    }
    return rep;
}

function modulo(a,b){
    let rep=0;
    if (a>b){
        while (a>=0){
            a-=b;
            rep++;
        }
        return a;
    }else{
        while(b>=0){
            b-=a;
            rep++;
        }
        return b;
    }
}
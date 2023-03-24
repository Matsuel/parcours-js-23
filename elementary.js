function multiply(a,b){
    let rep=0;
    if (a<0){
        while (a<0){
            a++;
            rep+=b;
        }
        return -rep;
    }else{
        while (a>0){
            a--;
            rep+=b;
        }
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
        return rep;
    }else{
        return 0;
    }
    
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

console.log(multiply(-22,123));
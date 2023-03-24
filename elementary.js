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
        return rep;
    }
}

function divide(a,b){
    let rep=0;
    if (a>b){
        while (a>=b){
            a-=b;
            rep++;
        }
        return rep;
    }else{
        return 0;
    }
    
}

function modulo(a,b){
    if (a>b){
        while (a>0){
            a-=b;
        }
        return a;
    }else{
        return a;
    }
}

console.log(divide(78,34))
console.log(modulo(78,34))
console.log(modulo(34,78))
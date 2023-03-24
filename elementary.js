function multiply(a, b) {
    let rep = 0
    if (a<0){
        a = -a
        b = -b
    }
    for (let i=0;i<a;i++){
        rep += b
    }
    return rep
}

function divide(a,b){
    let rep = 0
    let sign=0
    if (b<0 && a>0){
        b=-b
        sign=-1
    }else if (a<0 && b>0){
        a=-a
        sign=-1
    }else if (a<0 && b<0){
        a=-a
        b=-b
    }
    while (a>=b){
        a-=b
        rep++
    }
    if (sign<0){
        rep = -rep
    }
    return rep
}

function modulo(a,b){
    let sign=0
    if (a<0 && b<0){
        a=-a
        b=-b
        sign=-1
    }else if (a<0 && b>0){
        a=-a
        sign=-1
    }else if (b<0 && a>0){
        b=-b
        sign=0
    }
    while (a>=b){
        a-=b
    }
    if (sign<0){
        a = -a
    }
    return a
}

console.log(multiply(5, 5))
console.log(divide(-123, -22))
console.log(modulo(-123, -22))
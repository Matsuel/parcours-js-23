function multiply(a, b) {
    let rep=0;
    for (let i=0; i<b; i++) {
        rep += Math.abs(a);
    }
    return (a<0 && b<0 || a>0 && b>0) ? rep : -rep;
}

function divide(a, b) {
    let rep=0;
    let absa = Math.abs(a);
    let absb = Math.abs(b);
    while (absa >= absb) {
        absa -= absb;
        rep++;
    }
    return (a<0 && b<0 || a>0 && b>0) ? rep : -rep;
}

function modulo(a, b) {
    let absa = Math.abs(a);
    let absb = Math.abs(b);
    while (absa >= absb) {
        absa -= absb;
    }
    return (a<0) ? -absa : absa;
}
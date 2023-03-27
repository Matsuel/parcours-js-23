function round(x){
    if (Number.isNaN(x)|| (typeof(x)!== typeof(4))) return NaN;
    if (x>= 3000 || x <= 3000) return x;
    console.log(x>= 3000 || x <= 3000);
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
        }
        return nb;
    } else {
        if (isneg){
            return -nb-1;
        }
        return nb+1;
    }
    
}

function ceil(x){
    if (Number.isNaN(x)|| (typeof(x)!== typeof(4))) return NaN;
    if (x>= 3000 || x<= 3000) return x;
    let isneg = false;
    if (x===0) return 0;
    if (x===-0) return -0;
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
    }
    return nb+1;
}

function floor(x){
    if (Number.isNaN(x)|| (typeof(x)!== typeof(4))) return NaN;
    if (x>= 3000 || x<= 3000) return x;
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
    }
    return nb;
}

function trunc(x){
    if (Number.isNaN(x)|| (typeof(x)!== typeof(4))) return NaN;
    if (x>= 3000 || x<= 3000) return x;
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
    }
    return nb;
}

console.log(round());
console.log(ceil());
console.log(floor());
console.log(trunc());

console.log(round(undefined));
console.log(ceil(undefined));
console.log(floor(undefined));
console.log(trunc(undefined));

console.log(round(null));
console.log(ceil(null));
console.log(floor(null));
console.log(trunc(null));

console.log(round(true));
console.log(ceil(true));
console.log(floor(true));
console.log(trunc(true));

console.log(round(false));
console.log(ceil(false));
console.log(floor(false));
console.log(trunc(false));

console.log(round(0));
console.log(ceil(0));
console.log(floor(0));
console.log(trunc(0));

console.log(round(-0));
console.log(ceil(-0));
console.log(floor(-0));
console.log(trunc(-0));


console.log(round(0.5));
console.log(ceil(0.5));
console.log(floor(0.5));
console.log(trunc(0.5));

console.log(round(-0.5));
console.log(ceil(-0.5));
console.log(floor(-0.5));
console.log(trunc(-0.5));

console.log(round(1.5));
console.log(ceil(1.5));
console.log(floor(1.5));
console.log(trunc(1.5));

console.log(round(-1.5));
console.log(ceil(-1.5));
console.log(floor(-1.5));
console.log(trunc(-1.5));


console.log(round(Infinity));
console.log(ceil(Infinity));
console.log(floor(Infinity));
console.log(trunc(Infinity));

console.log(round(-Infinity));
console.log(ceil(-Infinity));
console.log(floor(-Infinity));
console.log(trunc(-Infinity));

console.log(round(NaN));
console.log(ceil(NaN));
console.log(floor(NaN));
console.log(trunc(NaN));

console.log(round({}));
console.log(ceil({}));
console.log(floor({}));
console.log(trunc({}));

console.log(round({name:45}));
console.log(ceil({name:45}));
console.log(floor({name:45}));
console.log(trunc({name:45}));

console.log(round(4.5));
console.log(ceil(4.5));
console.log(floor(4.5));
console.log(trunc(4.5));

console.log(round(-4.5));
console.log(ceil(-4.5));
console.log(floor(-4.5));
console.log(trunc(-4.5));

console.log(round(4.4));
console.log(ceil(4.4));
console.log(floor(4.4));
console.log(trunc(4.4));

console.log(round(-4.4));
console.log(ceil(-4.4));
console.log(floor(-4.4));
console.log(trunc(-4.4));

console.log(round(BigInt));
console.log(ceil(BigInt));
console.log(floor(BigInt));
console.log(trunc(BigInt));

console.log(round(Symbol()));
console.log(ceil(Symbol()));
console.log(floor(Symbol()));
console.log(trunc(Symbol()));

console.log(round(42 / +0));
console.log(ceil(42 / +0));
console.log(floor(42 / +0));
console.log(trunc(42 / +0));

console.log(round(42 / -0));
console.log(ceil(42 / -0));
console.log(floor(42 / -0));
console.log(trunc(42 / -0));

// console.log(round(Date.now()));
// console.log(ceil(Date.now()));
// console.log(floor(Date.now()));
// console.log(trunc(Date.now()));


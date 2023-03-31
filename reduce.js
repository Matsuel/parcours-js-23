function fold(arr, func, acc){
    let rep=acc;
    for(let i=0; i<arr.length; i++){
        rep=func(rep,arr[i],i,arr);
    }
    return rep;
}

function foldRight(arr, func, acc){
    let rep=acc;
    for(let i=arr.length-1; i>=0; i--){
        rep=func(rep,arr[i],i,arr);
    }
    return rep;
}

function reduce(arr, func){
    if (arr.length <1 ){
        throw new Error("Array is empty");
    }else{
        let rep=arr[0];
        for(let i=1; i<arr.length; i++){
            rep=func(rep,arr[i],i,arr);
        }
        return rep;
    }
}

function reduceRight(arr, func){
    if (arr.length <1 ){
        throw new Error("Array is empty");
    }else{
        let rep=arr[arr.length-1];
        for(let i=arr.length-2; i>=0; i--){
            rep=func(rep,arr[i],i,arr);
        }
        return rep;
    }
}

// const adder = (a, b) => a + b
// let a=fold([1, 2, 3], adder, 2) // returns 8 (2 + 1 + 2 + 3)
// let b=foldRight([1, 2, 3], adder, 2) // returns 8 (2 + 3 + 2 + 1)
// let c = reduce([1, 2, 3], adder) // returns 6 (1 + 2 + 3)
// let d = reduceRight([1, 2, 3], adder) // returns 6 (3 + 2 + 1)

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
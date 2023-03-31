function map(arr, func){
    let rep=[];
    for(let i=0; i<arr.length; i++){
        rep.push(func(arr[i],i,arr));
    }
    return rep;
}

function flatMap(arr,func){
    return arr.reduce(
        (acc, val, i , arr) => acc.concat(func(val, i, arr)),
        []
    )
}
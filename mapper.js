function map(arr, func){
    let rep=[];
    for(let i=0; i<arr.length; i++){
        rep.push(func(arr[i],i,arr));
    }
    return rep;
}

function flatMap(arr,func){
    return arr.reduce(
        (acc, item) => acc.concat(func(item)),
        []
    )
}
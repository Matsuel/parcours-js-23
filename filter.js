function filter(ar, func){
    let rep=[];
    for(let i=0; i<ar.length; i++){
        if(func(ar[i],i,ar)){
            rep.push(ar[i]);
        }
    }
    return rep;
}

function reject(arr, func){
    let rep=[];
    for(let i=0; i<arr.length; i++){
        if(!func(arr[i],i,arr)){
            rep.push(arr[i]);
        }
    }
    return rep;
}

function partition(arr, func){
    return [filter(arr, func), reject(arr, func)];
}
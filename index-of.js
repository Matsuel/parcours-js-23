function indexOf(arr,val,opt=0){
    for(let i=opt;i<arr.length;i++){
        if(arr[i]===val){
        return i;
        }
    }
    return -1;
}

function lastIndexOf(arr,val,opt=arr.length-1){
    let rep=-1;
    for(let i=opt;i>=0;i--){
        if(arr[i]===val){
            rep=i;
        }
    }
    return rep;
}

function includes(arr,val){
    return indexOf(arr,val)!==-1;
}

let t=1;
console.log(lastIndexOf([t, 0, 0, t], t, 2));
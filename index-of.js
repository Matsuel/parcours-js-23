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
            return i;
        }
    }
    return rep;
}

function includes(arr,val){
    return indexOf(arr,val)!==-1;
}

console.log(lastIndexOf([1, 2, 3, 4, 5, 4, 3, 2, 1], 2))
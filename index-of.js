function indexOf(arr,val){
    for(var i=0;i<arr.length;i++){
        if(arr[i]===val){
        return i;
        }
    }
    return -1;
}

function lastIndexOf(arr,val){
    for(var i=arr.length-1;i>=0;i--){
        if(arr[i]===val){
        return i;
        }
    }
    return -1;
}

function includes(arr,val){
    return indexOf(arr,val)!==-1;
}
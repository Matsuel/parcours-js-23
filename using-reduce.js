function adder(arr,n=0){
    if (arr.length===0){
        return n;
    }
    let rep= arr.reduce((acc, obj) => acc + obj);
    return rep+n;
}
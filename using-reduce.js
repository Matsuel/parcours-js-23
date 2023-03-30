function adder(arr,n=0){
    let rep= arr.reduce((acc, obj) => acc + obj);
    return rep+n;
}
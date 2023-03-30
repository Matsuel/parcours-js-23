function adder(arr,n){
    let rep= arr.reduce((acc, obj) => acc + obj);
    return rep+n;
}
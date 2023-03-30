function adder(arr,n){
    return arr.reduce((acc, obj) => acc + obj,
        n===undefined? 0 : n
    );

}
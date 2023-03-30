function adder(arr,n){
    return arr.reduce((acc, obj) => acc + obj,
        n===undefined? 0 : n
    );

}

function sumOrMul (arr,n){
    return arr.reduce((acc, obj) => 
        obj % 2 === 0 ? acc * obj : acc + obj,
        n===undefined? 0 : n
    );
}
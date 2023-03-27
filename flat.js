function flat(arr,int=1){
    if (!Array.isArray(arr) || int===0){
        return arr;
    }
    return arr.reduce((acc, curentarray)=>{
        return acc.concat(flat(curentarray,int-1))
    })
}   
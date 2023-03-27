function flat(arr,int){
    if (int===undefined) int=1;
    if (!(Array.isArray(arr))){
        return arr;
    }
    if (int ===0){
        return arr;
    }
    return arr.reduce((acc, curentarray)=>{
        return acc.concat(flat(curentarray,int-1))
    },[])
}   

console.log(flat([1]))
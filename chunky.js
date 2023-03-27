function chunk(arr, size){
    let rep = [];
    for (let i=0; i<arr.length; i++){
        for (let j = 0; j < size; j++){
            rep.push(arr.slice(i, i+size));
        }
    }
    return rep;
}
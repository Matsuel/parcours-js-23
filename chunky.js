function chunk(arr, size){
    let rep = [];
    for (let i=0; i<arr.length; i+=size){
        rep.push(arr.slice(i, i+size));
    }
    return rep;
}
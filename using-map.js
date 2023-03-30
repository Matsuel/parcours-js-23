function citiesOnly(arr){
    let rep=[]; 
    for (const obj of arr){
        rep.push(obj.city);
    }
    return rep;
}
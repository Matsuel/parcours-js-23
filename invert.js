function invert(obj){
    var newObj= {};
    for(var key in obj){
        newObj[obj[key]] = key;
    }
    return newObj;
}
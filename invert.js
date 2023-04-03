function invert(obj){
    var newObj= {};
    for(var key in obj){
        if (obj.hasOwnProperty(key)){
            newObj[obj[key]] = key;
        }
    }
    return newObj;
}
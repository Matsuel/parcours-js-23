function pick(obj,str){
    var newObj = {};
    for(var key in obj){
        if (obj.hasOwnProperty(key)){
            if (str.indexOf(key) !== -1){
                newObj[key] = obj[key];
            }
        }
    }
    return newObj;
}

function omit(obj,str){
    var newObj = {};
    for(var key in obj){
        if (obj.hasOwnProperty(key)){
            if (str.indexOf(key) === -1){
                newObj[key] = obj[key];
            }
        }
    }
    return newObj;
}
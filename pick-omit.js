function pick(obj,str){
    var newObj = {};
    for(var key in obj){
        if(typeof str === 'string'){
            if (str.match(`^${key}$`)){
                newObj[key] = obj[key];
            }
        }else{
            if (str.includes(key)){
                newObj[key] = obj[key];
            }
        }
    }
    return newObj;
}

function omit(obj,str){
    var newObj = {};
    for(var key in obj){
        if (!obj.hasOwnProperty(key)) continue;
        if(typeof str === 'string'){
            if (!str.match(`^${key}$`)){
                newObj[key] = obj[key];
            }
        }else{
            if (!str.includes(key)){
                newObj[key] = obj[key];
            }
        }
    }
    return newObj;
}
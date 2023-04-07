function filterEntries(object,filter){
    let rep={};
    for (let key in object){
        if (filter([key,object[key]])){
            rep[key]=object[key];
        }
    }
    return rep;
}

function mapEntries(object,map){
    let temp ={};
    let rep= {};
    for( let key of object){
        temp[key]= map([key, object[key]])
    }
    for(let key of temp){
        rep[temp[key][0]]= temp[key][1]
    }
    return rep;
}
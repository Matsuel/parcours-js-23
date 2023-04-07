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
    let rep ={};
    
}
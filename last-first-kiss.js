function first(el){
    if (el.length===0) return el;
    else return el[0];
}

function last(el){
    if (el.length===0) return el;
    else return el[el.length-1];
}

function kiss(el){
    return first(el)+last(el);
}
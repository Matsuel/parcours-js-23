function first(el){
    return el[0];
}

function last(el){
    return el[el.length-1];
}

function kiss(el){
    let rep=[]
    rep.push(last(el))
    rep.push(first(el))
    return rep;
}

console.log(kiss([1, 2, 3, 4, 5, 6]))
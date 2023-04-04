function filterKeys(db,filter){
    let rep={};
    for (let key in db) {
        if (!db.hasOwnProperty(key))  continue;
        if (filter(key)) {
            rep[key] = db[key];
        }
    }
    return rep;
}

function mapKeys(db,m){
    let rep={};
    for (let key in db) {
        if (!db.hasOwnProperty(key))  continue;
        rep[m(key)] = db[key];
    }
    return rep;
}


function reduceKeys(db, reduce, acc= ""){
    if (acc=== undefined) {let undef=true};
    for (let key in db) {
        acc = reduce(acc,key);
    }
    if (acc.slice(0,2)===", "){
        return acc.substring(2, acc.length);
    }else if (undef && acc[0]===":"){
        return acc.substring(0, acc.length);
    }
    return acc.substring(0, acc.length);
}

const nutrients = { carbohydrates: 12, protein: 20, fat: 5 }

console.log(filterKeys(nutrients, (key) => /protein/.test(key)))
// output: { protein: 20 }

console.log(mapKeys(nutrients, (k) => `-${k}`))
// output: { -carbohydrates: 12, -protein: 20, -fat: 5 }

console.log(reduceKeys(nutrients, (acc, cr) =>acc.concat(', ', cr)))
// output: carbohydrates, protein, fat
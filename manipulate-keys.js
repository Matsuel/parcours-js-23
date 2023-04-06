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
    let undef=false;
    if (acc=== undefined) {
        undef=true
        acc="";
    };
    let rep = Object.keys(obj).reduce((acc, curr) => {
        return callback(acc, curr, initialValue);
    }, initialValue);
    if (typeof rep !== "number") {
        if (rep.slice(0, 2) === ", ") rep = rep.slice(2);
        if (undef && rep[0] === ":") rep = rep.slice(1);
    }
    return rep;
}

const nutrients = { carbohydrates: 12, protein: 20, fat: 5 }

console.log(filterKeys(nutrients, (key) => /protein/.test(key)))
// output: { protein: 20 }

console.log(mapKeys(nutrients, (k) => `-${k}`))
// output: { -carbohydrates: 12, -protein: 20, -fat: 5 }

console.log(reduceKeys(nutrients, (acc, cr) =>acc.concat(', ', cr)))
// output: carbohydrates, protein, fat
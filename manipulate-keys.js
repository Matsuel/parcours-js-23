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


function reduceKeys(db, red, init= ""){
    let undef=false;
    if (init=== undefined) {
        undef=true
        init="";
    };
    let rep = Object.keys(db).reduce((acc, el) => {
        return red(acc, el, init);
    }, init);
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
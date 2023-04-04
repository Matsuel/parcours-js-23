function filterValues(db, filter){
    let rep = {};
    for (let key in db) {
        if (!db.hasOwnProperty(key))  continue;
        if (filter(db[key])) {
            rep[key] = db[key];
        }
    }
    return rep;
}

function mapValues(db, map){
    let rep = {};
    for (let key in db) {
        if (!db.hasOwnProperty(key))  continue;
        rep[key] = map(db[key]);
    }
    return rep;
}

function reduceValues(){
    let rep = {};
}
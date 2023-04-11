function defaultCurry(obj1) {
    return function (obj2) {
        let rep = {};
        for (let key in obj1) {
            rep[key] = obj1[key];
        }
        for (let key in obj2) {
            rep[key] = obj2[key];
        }
        return rep;
    };
}

function mapCurry(func) {
    return function (obj2) {
        let rep = {};
        for (let key in obj2) {
            rep[func([key, obj2[key]])[0]] = func([key, obj2[key]])[1];
        }
        return rep;
    };
}

function reduceCurry(obj1) {
    return function (obj2, obj3) {
        let rep = obj3;
        for (let key in obj2) {
            rep = obj1(rep, [key, obj2[key]]);
        }
        return rep;
    };
}

function filterCurry(obj1) {
    return function (obj2) {
        let rep = {};
        for (let key in obj2) {
            if (obj1([key, obj2[key]])) {
                rep[key] = obj2[key];
            }
        }
        return rep;
    };
}

function reduceScore(obj1, obj2) {
    return reduceCurry((acc, [, v]) =>
        v.isForceUser ? acc + v.pilotingScore + v.shootingScore : acc
    )(obj1, obj2);
}

function filterForce(obj) {
    return filterCurry(([, v]) => v.isForceUser && v.shootingScore >= 80)(obj);
}

function mapAverage(obj) {
    let avgScorep = mapCurry(([k, v]) => [
        k,
        (v.pilotingScore + v.shootingScore) / 2,
    ])(obj);
    for (let key in avgScorep) {
        obj[key].averageScore = avgScorep[key];
    }
    return obj;
}
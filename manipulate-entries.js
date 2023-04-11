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
    for( let key in object){
        temp[key]= map([key, object[key]])
    }
    for(let key in temp){
        rep[temp[key][0]]= temp[key][1]
    }
    return rep;
}

function reduceEntries(object, red, init){
    let acc= init;
    for (let key in object){
        acc= red(acc, [key, object[key]]);
    }
    return acc;
}


function totalCalories(entries) {
    return Number(
        reduceEntries(
            entries,
            (acc, curr) => {
                let value = (nutritionDB[curr[0]]["calories"] / 100) * curr[1];
                return acc + value;
            },
            0
        ).toFixed(1)
    );
}

function lowCarbs(el) {
    return filterEntries(el, (element) => {let value = (nutritionDB[element[0]]["carbs"] / 100) * element[1];return parseInt(value) <= 50;});
}

function cartTotal(entries) {
    let res = {};
    for (let key in entries) {
        res[key] = {};
        for (let dbKey in nutritionDB[key]) {
            res[key][dbKey] =
                Math.round(
                    (entries[key] / 100) * nutritionDB[key][dbKey] * 1000
                ) / 1000;
        }
    }
    return res;
}

const groceriesCart = { orange: 500, oil: 20, sugar: 480 }

console.log('Total calories:')
console.log(totalCalories(groceriesCart))
console.log('Items with low carbs:')
console.log(lowCarbs(groceriesCart))
// console.log('Total cart nutional facts:')
// console.log(totalCart(groceriesCart))
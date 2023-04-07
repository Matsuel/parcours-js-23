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

function totalCalories(object){
    let total=0;

    for (let key in object){
        total+= object[key];
    }

    return total;
}

function lowCarbs(object){
    let rep={};
    for (let key in object){
        if (rep==={}){
            rep[key]= object[key];
        }
        if(object[key]<=50){
            rep[key]= object[key]
        }
    }
    return rep;
}


const groceriesCart = { orange: 500, oil: 20, sugar: 480 }

console.log('Total calories:')
console.log(totalCalories(groceriesCart))
console.log('Items with low carbs:')
console.log(lowCarbs(groceriesCart))
// console.log('Total cart nutional facts:')
// console.log(totalCart(groceriesCart))
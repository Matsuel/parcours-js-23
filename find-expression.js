// const add4= '+4'
// const mul2= '*2'
function findExpression(number){
    if (number===undefined || !(number%2===0)) return undefined;
    let nb=1;
    let rep="1";

    while (nb<number){
        if (nb === number) return rep;
        if (nb*2 < number){
            rep+= " "+ mul2;
            nb*=2;
        }
        else rep+= " "+add4, nb+=4;
    }
    return rep;
}

// console.log(findExpression(8))
// console.log(findExpression(14))
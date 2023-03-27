// const add4= '+4'
// const mul2= '*2'
function findExpression(number){
    if (number===undefined) return undefined;
    let nb=1;
    let rep="1";

    while (nb<=number){
        if (nb === number) return rep;
        if (nb+4 === number){
            rep+= " "+ add4;
            nb+=4;
        }
        else rep+= " "+mul2, nb*=2;
    }
    return rep;
}

console.log(findExpression(8))
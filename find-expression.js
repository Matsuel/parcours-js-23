
function findExpression(number,rep, nb){
    // console.log(number)
    if (!(number%2===0) && rep===undefined) return undefined;
    if (rep===undefined && nb===undefined) rep='1'+" "+mul2, nb=1;
    if (number/2<= number-4) return findExpression(number/2, rep+" "+mul2, nb*2)
    if (number===0) return rep;
    else return findExpression(number-4, rep+" "+add4, nb+4)
}


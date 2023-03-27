// const add4 = '+4'
// const mul2 = '*2'

function findExpression(number,rep){
    if (rep===undefined) rep='1';
    if (number%2!==0){
        return undefined
    }
    else{
        if (number-4>0){
            return findExpression(number-4, rep+add4)
        }else{
            return findExpression(number/2, rep+mul2)
        }
    }

}
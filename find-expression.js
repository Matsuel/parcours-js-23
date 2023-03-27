// const add4= '+4'
// const mul2= '*2'
// function findExpression(number){
//     if (number===undefined || !(number%2===0)) return undefined;
//     let nb=1;
//     let rep="1";

//     while (nb<number){
//         if (nb === number) return rep;
//         if (nb*2 < number){
//             rep+= " "+ mul2;
//             nb*=2;
//         }
//         else rep+= " "+add4, nb+=4;
//     }
//     return rep;
// }

function findExpression(number) {
    for (let i = 0; i < 100000; i++) {
        let cpy = 1;
        let seq = "1";
        while (cpy <= number) {
            if (cpy === number) {
                return seq;
            }
            if (Math.random() < 0.4 + 0.1) {
                cpy += 4;
                seq += " " + add4;
            } else {
                cpy *= 2;
                seq += " " + mul2;
            }
        }
    }
    return undefined;
}
// console.log(findExpression(8))
// console.log(findExpression(14))
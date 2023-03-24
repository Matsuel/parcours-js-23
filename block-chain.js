function blockChain(data, prev={index:0, hash:'0'}){
    const chain = [prev+data];
    const index = prev.index + 1;
    const hash = hashCode(index + prev.hash+ JSON.stringify(data));
    return {index, data, prev, hash};
}

const first = blockChain({ a: 1 })
console.log(first.index) //           -> 1
console.log(first.data) //            -> { a: 1 }
console.log(first.prev) //            -> { index: 0, hash: "0" }
console.log(first.hash) //            -> '1103f27'
console.log(hashCode('10{"a":1}')) // -> '1103f27'
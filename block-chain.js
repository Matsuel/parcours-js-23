const hashCode = str =>
  (
    [...str].reduce((h, c) => (h = (h << 5) - h + c.charCodeAt(0)) & h, 0) >>> 0
  ).toString(36)

function blockChain(data, prev={index:0, hash:'0'}){
    const index = prev.index + 1;
    const hash = hashCode(index + prev.hash+ JSON.stringify(data));
    const chain = data => blockChain(data, {index, hash});
    const block={
        index,
        hash,
        data,
        prev,
    }
    return {index, hash, data, prev, chain};
}

// const first = blockChain({ a: 1 })
// console.log(first.index) //           -> 1
// console.log(first.data) //            -> { a: 1 }
// console.log(first.prev) //            -> { index: 0, hash: "0" }
// console.log(first.hash) //            -> '1103f27'
// console.log(hashCode('10{"a":1}')) // -> '1103f27'

const block = blockChain({ a: 1 }).chain({ hello: 'world' })

const chain = block
  .chain({ value: 4455 })
  .chain({ some: 'data' })
  .chain({ cool: 'stuff' })

const fork = block
  .chain({ value: 335 })
  .chain({ some: 'data' })
  .chain({ cool: 'stuff' })


console.log(chain)
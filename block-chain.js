const hashCode = str =>
  (
    [...str].reduce((h, c) => (h = (h << 5) - h + c.charCodeAt(0)) & h, 0) >>> 0
  ).toString(36)

function blockChain(data, prev={index:0, hash:'0'}){
    const index = prev.index + 1;
    const hash = hashCode(index + prev.hash+ JSON.stringify(data));
    const chain = (data, prev={index, hash}) => {blockChain(data, prev={index, hash})};
    return {index, hash, data, prev, chain};
}

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
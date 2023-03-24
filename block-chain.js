const hashCode = str =>
  (
    [...str].reduce((h, c) => (h = (h << 5) - h + c.charCodeAt(0)) & h, 0) >>> 0
  ).toString(36)

function blockChain(data, prev={index:0, hash:'0'}){
    let block = {
        data,
        prev
    }
    block.index = block.prev.index + 1;
    block.hash = hashCode(block.index + prev.hash+ JSON.stringify(data));
    // const chain = () => blockChain({index, hash}, {index, hash, data, prev, chain});
    block.chain = (data) => blockChain(data, block);
    // console.log({index, hash, data, prev, chain})
    return block;
}

const block = blockChain({ a: 1 }).chain({ hello: 'world' })

// console.log(block);

const chain = block
  .chain({ value: 4455 })
  .chain({ some: 'data' })
  .chain({ cool: 'stuff' })

const fork = block
  .chain({ value: 335 })
  .chain({ some: 'data' })
  .chain({ cool: 'stuff' })


// console.log(chain)
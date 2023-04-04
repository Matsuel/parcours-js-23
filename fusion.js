function fusion(obj1, obj2){
    let obj3 = {};
    for (let key in obj1) {
        if (obj2.hasOwnProperty(key)) {
            if ((obj1[key] instanceof Array) && (obj2[key] instanceof Array)) {
                obj3[key] = obj1[key].concat(obj2[key]);
            } else if ((typeof obj1[key] === 'string')&& (typeof obj2[key] === 'string')) {
                obj3[key] = obj1[key] +" "+ obj2[key];
            }else if ((typeof obj1[key] === 'number') && (typeof obj2[key] === 'number')) {
                obj3[key] = obj1[key] + obj2[key];
            }else if ((typeof obj1[key] === 'object')&& (typeof obj2[key] === 'object')) {
                obj3[key] = fusion(obj2[key], obj2[key]);
            }else{
                if (obj2.hasOwnProperty(key)) {
                    obj3[key] = obj2[key];
                }
            }
        }else{
            obj3[key] = obj1[key];
        }   
    }
    for (let key in obj2) {
        if (!obj1.hasOwnProperty(key)) {
            obj3[key] = obj2[key];
        }
    }
    return obj3;
}

// let a=fusion({ arr: [1, "2"] }, { arr: [2] }); // -> { arr: [ 1, '2', 2 ] }
// let ab=fusion({ arr: [], arr1: [5] },{ arr: [10, 3], arr1: [15, 3], arr2: ["7", "1"] }); // ->{ arr: [ 10, 3 ], arr1: [ 5, 15, 3 ], arr2: [ '7', '1' ] }

// console.log(a);
// console.log(ab);

// let c =fusion({ str: "salem" }, { str: "alem" }); // -> { str: 'salem alem' }
// let cb= fusion({ str: "salem" }, { str: "" }); // -> { str: 'salem ' }


// console.log(c);
// console.log(cb);

// let ee = fusion({ a: 10, b: 8, c: 1 }, { a: 10, b: 2 }); // -> { a: 20, b: 10, c: 1 }

// console.log(ee);

// let re= fusion({ a: 1, b: { c: "Salem" } }, { a: 10, x: [], b: { c: "alem" } }); // -> { a: 11, x: [], b: { c: 'Salem alem' } }
// let rere= fusion( { a: { b: [3, 2], c: { d: 8 } } },{ a: { b: [0, 3, 1], c: { d: 3 } } }); // -> { a: { b: [ 3, 2, 0, 3, 1 ], c: { d: 11 } } }

// console.log(re)
// console.log(rere)

// let vfd= fusion({ a: "hello", b: [] }, { a: 4 }); // -> { a: 4, b: [] }

// console.log(vfd)

let e = fusion(
    { arr: [], arr1: [1] },
    { arr: [12, 3], arr1: [2, 3], arr2: ['2', '1'] }
  )

console.log(e)


let w = fusion({ a: { b: 1 } }, { a: 1 })

console.log(w)
function arrToSet(arr){
    let set=new Set();
    for (let i=0; i<arr.length;i++){
        set.add(arr[i]);
    }
    return set;
}

function arrToStr(arr){
    let str="";
    for (const el of arr){
        str+=el;
    }
    return str;
}

function setToArr(set){
    let arr=[];
    for (const el of set){
        arr.push(el);
    }
    return arr;
}

function setToStr(set){
    let str="";
    for (const el of set){
        str+=el;
    }
    return str;
}

function strToArr(str){
    let arr=[];
    for (let i=0; i<str.length;i++){
        arr.push(str.charAt(i));
    }
    return arr;
}

function strToSet(str){
    let set = new Set();
    for(let i=0; i<str.length;i++){
        set.add(str.charAt(i));
    }
    return set;
}

function mapToObj(map){
    let obj= new Object;
    for (const [key,value] of map){
        if (typeof key === 'string'){
            obj[key]=value;
        }else{
            obj[String(key)]=value;
        }
    }
    return obj;
}

function objToArr(obj){
    let arr=[];
    for (const key in obj){
        arr.push(obj[key]);
    }
    return arr;
}

function objToMap(obj){
    let keys= Object.keys(obj);
    let values= Object.values(obj);
    let map = new Map();
    for (let i=0; i<keys.length;i++){
        map.set(keys[i],values[i]);
    }
    return map;
}

function arrToObj(arr){
    let obj= new Object;
    for (let i=0; i<arr.length;i++){
        obj[i]=arr[i];
    }
    return obj;
}

function strToObj(str){
    let obj= new Object;
    for (let i=0; i<str.length;i++){
        obj[i]=str.charAt(i);
    }
    return obj;
}

function superTypeOf(obj){
    return Object.prototype.toString.call(obj);
}

const str = 'hello'
const arr = [1, 2, 1, 3]
const obj = { x: 45, y: 75, radius: 24 }
const set = new Set()
const map = new Map()
set.add(1)
set.add(2)
set.add(1)
set.add(3)
map.set('a', 1)
map.set('b', 2)
map.set(3, 'c')
map.set(4, 'd')

console.log(arrToSet(arr)) // -> Set { 1, 2, 3 }
console.log(arrToStr(arr)) // -> '1213'
console.log(setToArr(set)) // -> [1, 2, 3]
console.log(setToStr(set)) // -> '123'
console.log(strToArr(str)) // -> ['h', 'e', 'l', 'l', 'o']
console.log(strToSet(str)) // -> Set { 'h', 'e', 'l', 'o' }
console.log(mapToObj(map)) // -> { a: 1, b: 2, '3': 'c', '4': 'd' }
console.log(objToArr(obj)) // -> [45, 75, 24]
console.log(objToMap(obj)) // -> Map { 'x' => 45, 'y' => 75, 'radius' => 24 }
console.log(arrToObj(arr)) // -> { '0': 1, '1': 2, '2': 1, '3': 3 }
console.log(strToObj(str)) // -> { '0': 'h', '1': 'e', '2': 'l', '3': 'l', '4': 'o' }

superTypeOf(map) //         -> 'Map'
superTypeOf(set) //         -> 'Set'
superTypeOf(obj) //         -> 'Object'
superTypeOf(str) //         -> 'String'
superTypeOf(666) //         -> 'Number'
superTypeOf(NaN) //         -> 'Number'
superTypeOf(arr) //         -> 'Array'
superTypeOf(null) //        -> 'null'
superTypeOf(undefined) //   -> 'undefined'
superTypeOf(superTypeOf) // -> 'Function'
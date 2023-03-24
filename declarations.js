const escapeStr= String.fromCharCode(96,92,47,34,39)

const arr= [4,'2']

const obj= {
    str : "",
    num : 0,
    bool : false,
    undef : undefined,
}

const nested={
    arr:[4,undefined,'2'],
    obj:{
        str : "",
        num : 0,
        bool : false,
    }
}

Object.freeze(obj);
Object.freeze(nested);
Object.freeze(nested.obj);
Object.freeze(arr);
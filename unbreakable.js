function split(str, sep) {
    if (sep === null) {
        sep = ",";
    }
    let rep = [];
    if (sep === "") {
        for (let i = 0; i < str.length; i++) {
            rep.push(str[i]);
        }
        return rep;
    }
    let end = str.indexOf(sep);
    while (end > -1) {
        end = str.indexOf(sep);
        if (end === -1) {
            break;
        }
        rep.push(str.slice(0, end));
        str = str.slice(end + sep.length);
    }
    rep.push(str);
    return rep;
}

const str = 'The quick brown fox jumps over the lazy dog.';

console.log(split(str, ' '))


function join(array, sep=","){
    let rep="";
    for (let i=0; i<array.length-1;i++){
        rep += array[i]+ sep;
    }
    rep += array[array.length-1];
    return rep;
}

const elements = ['Fire', 'Air', 'Water'];

console.log(join(elements));

console.log(split('ggg - ddd - b', ' - '))

console.log(split('a b c', ' '))

console.log(split('ee,ff,g,', ','))
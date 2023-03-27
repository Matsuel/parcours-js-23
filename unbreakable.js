function split(str,sep=","){
    if (sep === "") return str;
    let rep = [];
    let mot ="";
    for (let i=0; i<str.length;i++){
        if (str[i] === sep){
            rep.push(mot);
            mot = "";
        } else {
            mot += str[i];
        }
    }
    rep.push(mot);
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

console.log(split(split('ggg - ddd - b', ' - ')))
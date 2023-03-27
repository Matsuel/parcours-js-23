function split(str,sep=""){
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

const words = str.split(' ');

console.log(words)

console.log(split(str, ' '))
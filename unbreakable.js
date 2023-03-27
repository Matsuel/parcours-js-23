function split(str, sep=",") {
    let rep = [];
    if (sep === "") {
        for (let i = 0; i < str.length; i++) {
            rep.push(str[i]);
        }
        return rep;
    }
    let mot ="";
    for (let i = 0; i < str.length; i++) {
        if (str[i]===sep){
            rep.push(mot);
            mot = "";
        }

        if (str[i]=== sep[0]){
            for (let j=1; j<sep.length;j++){
                if (str[i+j]===sep[j]){
                    if (j===sep.length-1){
                        rep.push(mot);
                        mot = "";
                        i += j;
                    }
                }
            }
        }
        mot+=str[i];
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

console.log(split('ggg - ddd - b', ' - '))

console.log(split('a b c', ' '))
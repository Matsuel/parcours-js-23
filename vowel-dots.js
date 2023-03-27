const vowels = new RegExp(/[aeiou]/gi);

function vowelDots(str){
    let rep="";
    for (const letter of str){
        if (letter.match(vowels)){
            rep+= letter+ ".";
        }else{
            rep+=letter;
        }
    }
    return rep;
}
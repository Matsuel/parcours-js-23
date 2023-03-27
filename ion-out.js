function ionOut(str){
    let rep= [];
    let arr= str.split(" ");
    let regexiont = new RegExp(/tion/g);
    let regexion= new RegExp(/[.,?]ion/g);
    for (const word of arr){
        if (word.match(regexiont)){
            rep.push(word.replace(regexion, ""))
        }
    }
    return rep;
}
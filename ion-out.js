function ionOut(str){
    let rep= [];
    let arr= str.split(" ");
    console.log(arr);
    let regexiont = new RegExp(/tion/g)
    for (const word of arr){
        if (word.match(regexiont)){
            rep.push(word.replace(regexiont, ""))
        }
    }
    return rep;
}
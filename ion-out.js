function ionOut(str){
    let rep= [];
    let arr= str.split(" ");
    let regexiont = new RegExp(/tion/g);
    let regexion= new RegExp(/ion/g);
    for (const word of arr){
        if (word.match(regexiont)){
            if (word.includes(".")|| word.includes(",")|| word.includes("?")){
                let newword= word.replace(regexion,"")
                rep.push(newword.substring(0,newword.length-1))
            }else{
                rep.push(word.replace(regexion, ""))
            }
        }
    }
    return rep;
}

console.log(ionOut('attention, direction'))
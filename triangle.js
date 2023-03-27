function triangle(str, int){
    let rep="";
    for (let i=0; i<=int; i++){
        for (let j=0; j<i;j++){
            rep+="*";
        }
        rep+="\n";
    }
    return rep.substring(1,rep.length-1);
}

console.log(triangle("*",5));
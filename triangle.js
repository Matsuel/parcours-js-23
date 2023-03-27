function triangle(str, int){
    let rep="";
    for (let i=0; i<=int; i++){
        for (let j=1;j<=i;j++){
            rep+=str;
        }
        rep+="\n";
    }
    return rep.substring(1,rep.length-1);
}

console.log(triangle("*",5));
function triangle(str, int){
    let rep="";
    for (let i=0; i<=int; i++){
        rep+= rep + str.repeat(i)+"\n";
    }
    return rep.substring(1,rep.length-1);
}

console.log(triangle("*",5));
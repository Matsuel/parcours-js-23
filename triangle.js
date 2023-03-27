function triangle(str, int){
    let rep="";
    for (let i=1; i<=int; i++){
        rep+= rep + str.repeat(i)+"\n";
    }
    return rep.slice(0,-1);
}

console.log(triangle("*",5));
const DNAtoRNA = {
    G: "C",
    C: "G",
    T: "A",
    A: "U",
};
const RNAtoDNA = {
    C: "G",
    G: "C",
    A: "T",
    U: "A",
};

function RNA(str){
    if (str===""){
        return "";
    }
    return str
        .split("")
        .map((x)=> DNAtoRNA[x])
        .join("");

}

function DNA(str){
    if (str===""){
        return "";
    }
    return str
        .split("")
        .map((x)=> RNAtoDNA[x])
        .join("");

}

console.log(RNA('TAGC'))


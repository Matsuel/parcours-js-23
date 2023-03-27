function letterSpaceNumber(str){
    letterSpaceNumberregex= new RegExp(/[a-z] [0-9](?![a-z0-9])/gi);
    let arr = str.match(letterSpaceNumberregex);
    if (arr !== null) return arr;
    else return [];
    // return arr!==null ? arr: [];
}//C'est pareil juste pas à l'aise

console.log(letterSpaceNumber('example 1, example 20'))
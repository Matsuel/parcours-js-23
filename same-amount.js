function sameAmount(str, regex1, regex2){
    return str.match(regex1)!==null && str.match(regex2)!=null;
}

console.log(sameAmount("data", /q /, /qqqqqqq/))
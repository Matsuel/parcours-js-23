function sameAmount(str, regex1, regex2){
    let test1= str.match(regex1);
    let test2= str.match(regex2);
    return str.match(regex1)!==null && str.match(regex2)!=null && test1.length=== test2.length;
}

console.log(sameAmount("data", /q /, /qqqqqqq/))
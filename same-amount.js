function sameAmount(str, regex1, regex2){
    let rep= Boolean;
    for (const letter of str){
        if (letter.match(regex1) && letter.match(regex2)){
            rep= false;
        }
        return false;
    }
    return rep;
}
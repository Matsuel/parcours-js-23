function slice(element, start=0, end=element.length){
    let rep=[];
    if (start<0){
        start=element.length+start;
    }
    if (end<0){
        end=element.length+end;
    }
    if (element instanceof Array){
        for (let i=start;i<=end-1;i++){
            rep.push(element[i]);
        }
        return rep;
    }else{
        for (let i=start;i<=end;i++){
            rep.push(element.charAt(i));
        }
        return rep.join("");
    }
}


console.log(slice([1, 2, 3, 4, 5, 4, 3, 2, 1], 2, 4));
console.log(slice("12345", 2));
console.log(slice('abcdef', 2))
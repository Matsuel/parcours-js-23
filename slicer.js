function slice(element, start=0, end=element.length-1){
    let rep=[];
    if (element instanceof Array){
        for (let i=start;i<=end;i++){
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
console.log(slice("1,2,3,4,5", 2));
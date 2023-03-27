function reverse(element){
    let rep = [];
    if (element instanceof Array){
        for (let i=element.length-1; i>=0;i--){
            rep.push(element[i]);
        }
        return rep;
    }else {
        for (let i=element.length-1; i>=0;i--){
            rep.push(element[i]);
        }
        return  rep;
    }
}

console.log(reverse([1,2,3,4,5]));

console.log(reverse("Hello World"));
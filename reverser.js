function reverse(element){
    if (element instanceof Array){
        let rep = [];
        for (let i=element.length-1; i>=0;i--){
            rep.push(element[i]);
        }
        return rep;
    }else {
        let rep = "";
        for (let i=element.length-1; i>=0;i--){
            rep += element[i];
        }
        return  rep;
    }
}

console.log(reverse([1,2,3,4,5]));

console.log(reverse("Hello World"));

console.log(reverse("pouet"))
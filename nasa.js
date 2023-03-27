function nasa(int){
    let rep ="";
    for (let i=1; i<=int;i++){
        if (i%3===0 && i%5===0){
            rep += "NASA ";
        }else if (i%3===0){
            rep += "NA ";
        }else if (i%5===0){
            rep += "SA ";
        }else{
            rep += i.toString() + " ";
        }
    }
    return rep;
}

console.log(nasa(15));
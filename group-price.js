function groupPrice(str){
    let rep=[];
    let regexprice= new RegExp(/(([A-Z]{3})|\$)([0-9]+\.[0-9]+)/,"g");
    let prices= str.match(regexprice);
    console.log(prices);
    if (prices===null) return rep;
    else{
        for(const price of prices){
            console.log(price)
            if ((price.match(/[0-9]+/g)[0])){
                rep.push(price);
            }
        }
    }
    return rep;
}

console.log(groupPrice("USD12.31"))
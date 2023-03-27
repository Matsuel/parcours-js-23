function groupPrice(str){
    let rep=[];
    let pricearr=[];
    let regexprice= new RegExp(/(([A-Z]{3})|\$)([0-9]+\.[0-9]+)/,"g");
    let prices= str.match(regexprice);
    if (prices===null) return rep;
    else{
        for(const price of prices){
            pricearr=[];
            pricearr.push(price);
            pricearr.push(price.match(/[0-9]+/g)[0]);
            pricearr.push(price.match(/[0-9]+/g)[1]);
            rep.push(pricearr)
        }
    }

    return rep;
}

console.log(groupPrice("USD12.31"))

console.log(groupPrice('The price of the cereals is $4.00.'))

console.log(groupPrice('product one its $9.98 and the second one its $10.20'))
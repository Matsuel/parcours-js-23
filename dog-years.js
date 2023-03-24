function dogYears(planet,age){
    let rep=0;
    if (planet==="earth"){
        rep=(age/31557600)*7;
    }else if (planet==="mercury"){
        rep=age*7/0.2408467/31557600;
    }else if (planet==="venus"){
        rep=age*7/0.61519726/31557600;
    }else if (planet==="mars"){
        rep=age*7/1.8808158/31557600;
    }else if (planet==="jupiter"){
        rep=age*7/11.862615/31557600;
    }else if (planet==="saturn"){
        rep=age*7/29.447498/31557600;
    }else if (planet==="uranus"){
        rep=age*7/84.016846/31557600;
    }else if (planet==="neptune"){
        rep=age*7/164.79132/31557600;
    }

    rep= parseFloat(rep).toFixed(2);
    return Number(rep);
}

console.log(dogYears("earth", 1000000000));
console.log(dogYears("mercury", 2134835688));
function dogYears(planet,age){
    age =age/31557600;
    if (planet==="earth"){
        return age*7;
    }else if (planet==="mercury"){
        return age*7*0.2408467;
    }else if (planet==="venus"){
        return age*7*0.61519726;
    }else if (planet==="mars"){
        return age*7*1.8808158;
    }else if (planet==="jupiter"){
        return age*7*11.862615;
    }else if (planet==="saturn"){
        return age*7*29.447498;
    }else if (planet==="uranus"){
        return age*7*84.016846;
    }else if (planet==="neptune"){
        return age*7*164.79132;
    }
}

console.log(dogYears("earth", 1000000000));
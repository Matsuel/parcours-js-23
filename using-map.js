function citiesOnly(arr){
    let rep=[]; 
    const map= arr.map(obj => obj.city);
    for (const obj of map){
        rep.push(obj);
    }
    return rep;
}

function upperCasingStates(arr){
    let rep=[];
    const map= arr.map(obj);
    for (const city of arr){
        let wordcity = city.split(" ");
        let c="";
        for (const word of wordcity){
            c+=word.charAt(0).toUpperCase()+word.slice(1)+" ";
        }
        rep.push(c.substring(0,c.length-1));
        //rep.push(city.charAt(0).toUpperCase()+city.slice(1));
    }
    return rep;
}

function fahrenheitToCelsius(arr){
    let rep=[];
    for (const temp of arr){
        rep.push((temp-32)*0.5556);
    }
    return rep;
}

function trimTemp(arr){
    let rep=[];
    for (let obj of arr){
        obj.temp= obj[temp].replace(" ","");
        rep.push(obj);
    }
    return rep;
}

function tempForecasts(arr){
    let rep="";
    for (const obj of arr){
        let stringobj="";
        stringobj= fahrenheitToCelsius(obj.temp)+"°Celsius in "+obj.city+", "+obj.state;
        rep+=stringobj+'\n';
    }
    return rep;
}

let t1= citiesOnly([
    {
      city: 'Los Angeles',
      temperature: '  101 °F   ',
    },
    {
      city: 'San Francisco',
      temperature: ' 84 ° F   ',
    },
  ])

console.log(t1)
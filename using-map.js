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
    let m= arr.map(item=> item);
    for (const obj of m){
        let str="";
        let city= obj.city;
        let wordcity= city.split(" ");
        for (const word of wordcity){
            word= word[0].toUpperCase()+word.slice(1);
            str+=word+" ";
        }
        rep.push(str.substring(0,str.length-1));
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
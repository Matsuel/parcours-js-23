function citiesOnly(arr){
    let rep=[]; 
    const map= arr.map(obj => obj.city);
    for (const obj of map){
        rep.push(obj);
    }
    return rep;
}

function upperCasingStates(arr){
    return arr.map((obj) => 
        obj
            .split(" ")
            .map((word) => {
                return word[0].toUpperCase() + word.slice(1);
            })
            .join(" ")
    );
}

function fahrenheitToCelsius(arr){
    return arr.map((obj) => 
        Math.floor((Number(obj.slice(0,-2))-32)*(5/9))+ "°C"
    );
}

function trimTemp(arr){
    return arr.map((obj) => {
        obj.temperature = obj.temperature.replaceAll(" ","");
        return obj;
    });
}

function tempForecasts(arr){
    return arr.map((obj) => {
        let c= fahrenheitToCelsius([obj.temperature])+ "°Celsius in "+ obj.city+ obj.state;
        return c;
    }
    );
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
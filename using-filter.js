function filterShortStateName(arr){
    return arr.filter((obj) => obj.state.length<7);
}

function filterStartVowel(arr){
    return arr.filter((obj) => obj.city[0].match(/[aeiou]/i));
}

function filter5Vowels(arr){
    return arr.filter((obj)=> obj.city.match(/[aeiou]/gi && obj.city.length > 5));
}

function filter1DistinctVowel(arr){
    
}
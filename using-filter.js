function filterShortStateName(arr){
    return arr.filter((obj) => obj.length<7);
}

function filterStartVowel(arr){
    return arr.filter((obj) => obj[0].match(/[aeiou]/i));
}

function filter5Vowels(arr){
    return arr.filter((obj)=> obj.city.match(/[aeiou]/gi && obj.length > 5));
}

function filter1DistinctVowel(arr){

}

let d = filterShortStateName([
    'Alaska',
    'Hawaii',
    'Idaho',
    'Iowa',
    'Kansas',
    'Maine',
    'Nevada',
    'Ohio',
    'Oregon',
    'Texas',
    'Utah',
  ])

  console.log(d)
function filterShortStateName(arr){
    return arr.filter((obj) => obj.length<7);
}

function filterStartVowel(arr){
    return arr.filter((obj) => obj[0].match(/[aeiou]/i));
}

function filter5Vowels(arr){
    return arr.filter((obj)=> obj.match(/[aeiou]/gi).length >= 5);
}

function filter1DistinctVowel(arr){
    return arr.filter(
        (obj)=> new Set(obj.toLowerCase().match(/[aeiou]/gi)).size ===1
    )
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

  let a = filter5Vowels([
    'California',
    'Louisiana',
    'North Carolina',
    'South Carolina',
    'South Dakota',
    'West Virginia',
  ])

  console.log(a)

  let z =filter1DistinctVowel([
    'Alabama',
    'Alaska',
    'Arkansas',
    'Kansas',
    'Maryland',
    'Mississippi',
    'New Jersey',
    'Tennessee',
  ])

  console.log(z);
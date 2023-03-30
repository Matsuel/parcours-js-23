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

function multiFilter(arr){
    return arr.map((obj)=>{
        let state = obj.name.toLowerCase().match(/[aeiou]/gi);
        let name = obj.name.match(!/^[aeiou]/i);
        let capital = obj.capital.length >=8;
        let region = obj.region!== "South";
        return state && name && capital && region;
    })
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

  let yt = multiFilter([
    { tag: 'CA', name: 'California', capital: 'Sacramento', region: 'West' },
    { tag: 'HI', name: 'Hawaii', capital: 'Honolulu', region: 'West' },
    {
      tag: 'MO',
      name: 'Missouri',
      capital: 'Jefferson City',
      region: 'Midwest',
    },
    {
      tag: 'PA',
      name: 'Pennsylvania',
      capital: 'Harrisburg',
      region: 'Northeast',
    },
    {
      tag: 'RI',
      name: 'Rhode Island',
      capital: 'Providence',
      region: 'Northeast',
    },
  ])

  console.log(yt);
function countLeapYears (date){
    let years= date.getFullYear();
    let count=0;

    console.log(years)

    for (let i=1; i<years;i++){
        if (i%4===0 && (i % 100 !== 0 || i % 400 === 0)){
            count++;
        }
    }
    return count;
}

let one = countLeapYears(new Date('1664-08-09'))

console.log(one)
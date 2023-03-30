function countLeapYears (date){
    let years= date.getFullYear();
    let count=0;

    for (let i=1; i<=date;i++){
        if (i%4===0){
            count++;
        }
    }
    return count;
}
function longWords(arr){
    return arr.reduce((acc, obj) => 
        obj.length > 5 ? false : true,
    );
}

function oneLongWord(arr){
    let count = 0;
    return arr.reduce((acc, obj) =>
        obj.length >= 10 ? count++ : count,
        count === 0 || count >1 ? false : true
    );
}
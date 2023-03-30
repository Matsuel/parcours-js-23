function longWords(arr){
    return arr.reduce((acc, obj) => 
        obj.length > 5 ? true : false,
    );
}
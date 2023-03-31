function forEach (arr, func){
    for (const item of arr){
        console.log(func(item));
    }
}
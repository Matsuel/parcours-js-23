function currify(fn){
    return function(...args){
        if (args.length >1 ){
            args= [fn(...args)];
        }
        return fn(...args);
    };
}
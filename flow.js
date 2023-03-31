function flow(el) {
    return function(...args){
        if (args.length >1 ){
            args= [el[0](...args)];
        }
        return el.reduce((acc, fn) => fn(acc), args[0]);
    };
}
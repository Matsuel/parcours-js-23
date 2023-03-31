function flow(el) {
    return function(...args){
        if (args.length >1 ){
            args= [arr[0](...args)];
        }
        return args.reduce((acc, fn) => fn(acc), el[0]);
    };
}
function currify(el){
    return function currified(...args){
        return args.length >= fn.length
        ? fn(...args)
        : currified.bind(null, ...args);
    };
}
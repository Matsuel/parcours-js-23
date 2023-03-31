function currify(el){
    return function currified(...args){
        return args.length >= el.length
        ? el(...args)
        : currified.bind(null, ...args);
    };
}
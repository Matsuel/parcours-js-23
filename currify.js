function currify(el){
    return function currified(...args){
        return args.length > el.length
        ? fn(...args)
        : currified.bind(null, ...args);
    };
}
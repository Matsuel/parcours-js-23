function flow(el) {
    return function(...args){
        return args.reduce((acc, fn) => fn(acc), el[0])
    }
}
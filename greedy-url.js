function getURL(str){
    const linkRegex = new RegExp(/https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}(\.[a-zA-Z0-9()]{1,6})?(?:[-a-zA-Z0-9()\[\],@:%_\+.~#?&\/=]*)/g);
    return str.match(linkRegex);
}

function greedyQuery(str){
    const linkRegexWith3Query= new RegExp(/\?([-a-zA-Z0-9\[\],()@]*=[-a-zA-Z0-9\[\],()@]*&){2,255}([-a-zA-Z0-9\[\],()@]*=[-a-zA-Z0-9\[\],()@]*)/g);
    return str.match(linkRegexWith3Query);
}

function notSoGreedy(str){
    return str;
}
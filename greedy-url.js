function getURL(str){
    var linkRegex = new RegExp(/https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}(\.[a-zA-Z0-9()]{1,6})?(?:[-a-zA-Z0-9()\[\],@:%_\+.~#?&\/=]*)/g);
    return str.match(linkRegex);
}

function greedyQuery(str){
    return str;
}

function notSoGreedy(str){
    return str;
}
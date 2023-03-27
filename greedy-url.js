function getURL(str){
    let rep=[];
    let arr = str.split(" ");
    var linkRegex = new RegExp(/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/);
    for (const url of arr){
        if (url.match(linkRegex)){
            rep.push(url)
        }
    }
    return rep;
}

function greedyQuery(str){
    return str;
}

function notSoGreedy(str){
    return str;
}
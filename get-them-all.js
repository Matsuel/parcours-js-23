export function getArchitects() {
    let rep =[];
    let a = Array.from(document.getElementsByTagName('a'))
    let other = Array.from(document.getElementsByTagName('span'))
    rep.push(a)
    rep.push(other)
    return rep;
}

export function getClassical() {
    return [
        document.getElementsByClassName("a.classical"),
        document.getElementsByClassName("a:not(.classical)"),
    ];
}

export function getActive() {
    return [
        document.querySelectorAll("a.classical.active"),
        document.querySelectorAll("a.classical:not(.active)"),
    ];
}

export function  getBonannoPisano() {
    return [
        document.getElementById("bonanno-pisano"),
        document.querySelectorAll("a.classical.active"),
    ];
}

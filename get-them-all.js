export function getArchitects() {
    let rep =[];
    let a = Array.from(document.getElementsByTagName('a'))
    let other = Array.from(document.getElementsByTagName('span'))
    rep.push(a)
    rep.push(other)
    return rep;
}

export function getClassical() {
    let rep =[];
    let classical = Array.from(document.getElementsByClassName('classical'))
    let other = Array.from(document.querySelectorAll('a:not(.classical)'))
    rep.push(classical)
    rep.push(other)
    return rep;
}

export function getActive() {
    return [
        Array.from(document.querySelectorAll("a.classical.active")),
        Array.from(document.querySelectorAll("a.classical:not(.active)")),
    ];
}

export function  getBonannoPisano() {
    let rep =[];
    let bonanno = document.getElementById("BonannoPisano")
    let other = Array.from(document.querySelectorAll("a.classical.active"))
    rep.push(bonanno)
    rep.push(other)
    return rep;
}

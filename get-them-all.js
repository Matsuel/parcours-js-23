function getArchitects() {
    return [
        document.getElementsByTagName("a"),
        document.getElementsByTagName("span"),
    ];
}

function getClassical()  {
    return [
        document.getElementsByClassName("a.classical"),
        document.getElementsByClassName("a:not(.classical)"),
    ];
}

function getActive ()  {
    return [
        document.querySelectorAll("a.classical.active"),
        document.querySelectorAll("a.classical:not(.active)"),
    ];
}

function getBonannoPisano()  {
    return [
        document.getElementById("bonanno-pisano"),
        document.querySelectorAll("a.classical.active"),
    ];
}

export { getArchitects, getClassical, getActive, getBonannoPisano };
export function getArchitects() {
    const a = document.getElementsByTagName("a");
    const other = document.getElementsByTagName("span");
    return [
        a,
        other,
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

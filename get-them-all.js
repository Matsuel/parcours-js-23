export function getArchitects() {
    const a = document.getElementsByTagName("a");
    const other = document.getElementsByTagName("span");
    return [
        a,
        other,
    ];
}

export function getClassical()  {
    return [
        document.getElementsByClassName("a.classical"),
        document.getElementsByClassName("a:not(.classical)"),
    ];
}

export function getActive ()  {
    return [
        document.querySelectorAll("a.classical.active"),
        document.querySelectorAll("a.classical:not(.active)"),
    ];
}

export function getBonannoPisano()  {
    return [
        document.getElementById("bonanno-pisano"),
        document.querySelectorAll("a.classical.active"),
    ];
}

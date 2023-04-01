export const  getArchitects= () => {
    let a = document.getElementsByTagName('a')
    let other = document.getElementsByTagName('span')
    return [
        a,
        other,
    ];
}

export const  getClassical= () => {
    return [
        document.getElementsByClassName("a.classical"),
        document.getElementsByClassName("a:not(.classical)"),
    ];
}

export const getActive = () =>  {
    return [
        document.querySelectorAll("a.classical.active"),
        document.querySelectorAll("a.classical:not(.active)"),
    ];
}

export const  getBonannoPisano= () =>  {
    return [
        document.getElementById("bonanno-pisano"),
        document.querySelectorAll("a.classical.active"),
    ];
}

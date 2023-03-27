function pyramid(str, int) {
    let spaces = " ".repeat(str.length);
    let rep = "";
    for (let i = 1; i <= int; i++) {
        rep = rep + spaces.repeat(int - i) + str.repeat(2 * i - 1) + "\n";
    }
    return rep.slice(0, -1);
}

console.log(pyramid("*",5))
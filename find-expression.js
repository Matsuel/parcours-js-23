
function findExpression(number) {
    for (let i = 0; i < 100000; i++) {
        let cpy = 1;
        let seq = "1";
        while (cpy <= number) {
            if (cpy === number) {
                return seq;
            }
            if (Math.random() < 0.4 + 0.1) {
                cpy += 4;
                seq += " " + add4;
            } else {
                cpy *= 2;
                seq += " " + mul2;
            }
        }
    }
    return undefined;
}

function sums(n) {
    if (n <=1) return [];
    let rep = []
    let currenttab = [];

    function findPartitions(start, end) {
        if (end === 0) {
            rep.push(currenttab.slice());
        } else {
            for (let i = start; i <= end; i++) {
                currenttab.push(i);
                findPartitions(i, end - i);
                currenttab.pop();
            }
        }
    }

    findPartitions(1, n);
    return rep;
}



console.log(sums(4));

console.log(sums(6))
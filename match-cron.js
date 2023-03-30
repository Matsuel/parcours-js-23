function matchCron(cron, date){
    let crons = cron.split(" ");
    if (crons.length !== 5) return false;
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let hour = date.getHours();
    let minute = date.getMinutes();
    let dayOfWeek = date.getDay();

    let dateInfos = [day, month, hour, minute, dayOfWeek];

    console.log(day, month, hour, minute, dayOfWeek)

    console.log(crons[0], crons[1], crons[2], crons[3], crons[4])

    for (let i = 0; i < crons.length; i++) {
        if (crons[i] !== '*' && crons[i] !== dateInfos[i].toString()) return false;

    }
    return true;
}

let one = matchCron('* * * * 1', new Date('2020-06-01 00:00:00'));

console.log(one)
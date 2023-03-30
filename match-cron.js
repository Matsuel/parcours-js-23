function matchCron(cron, date){
    let crons = cron.split(" ");
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let dayOfWeek = date.getDay();
    return crons[0] === second.toString() && crons[1] === minute.toString() && crons[2] === hour.toString() && crons[3] === day.toString() && crons[4] === month.toString() && crons[5] === dayOfWeek.toString();
}
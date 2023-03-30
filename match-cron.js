function matchCron(cron, date){
    let crons = cron.split(" ");
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let hour = date.getHours();
    let minute = date.getMinutes();
    let dayOfWeek = date.getDay();
    return crons[0] === minute && crons[1]=== hour && crons[2]=== day && crons[3] === month && crons[4] === dayOfWeek;
}
function matchCron(cron, date){
    let crons = cron.split(" ");
    if (crons.length !== 5) return false;
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let hour = date.getHours();
    let minute = date.getMinutes();
    let dayOfWeek = date.getDay();

    if (crons[0] !== "*" && crons[0] !== minute) return false;
    if (crons[1] !== "*" && crons[1] !== hour) return false;
    if (crons[2] !== "*" && crons[2] !== day) return false;
    if (crons[3] !== "*" && crons[3] !== month) return false;
    if (crons[4] !== "*" && crons[4] !== dayOfWeek) return false;
    else return true;
}
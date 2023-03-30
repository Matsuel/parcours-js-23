function dayOfTheYear(date){
    let dayOneOfYear= new Date(date.getFullYear(),01,01)
    
    let difference_time= date.getTime()- dayOneOfYear.getTime();

    let difference_day= difference_time/ (1000*3600*24);

    return difference_day;
}
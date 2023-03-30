function isValid(date) {
  return date instanceof Date && !isNaN(date);
}

function isAfter(datea, dateb){
  return isValid(datea) && isValid(dateb) && datea > dateb;
}

function isBefore(datea, dateb){
  return isValid(datea) && isValid(dateb) && datea < dateb;
}

function isFuture(date){
  return isValid(date) && date > new Date();
}

function isPast(date){
  return isValid(date) && date < new Date();
}
function isValid(date) {
  // return date instanceof Date;

  if (new Date(date) === "Invalid date")return false;
  if (!(date instanceof Date) && typeof date !== "number")return d=false;
  return true;

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
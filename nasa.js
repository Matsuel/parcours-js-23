function nasa(int){
    if (int % 3 === 0 && int % 5 === 0){
        return "NASA";
    }else if (int % 3 === 0){
        return "NA";
    }else if (int % 5 === 0){
        return "SA";
    }
}
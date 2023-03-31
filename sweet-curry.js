function mult2(a){
    return (x)=>a*x;
}

function add3(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}

function sub4(a){
    return (b)=>(c)=>(d)=>(e)=>a-b-c-d-e;
}
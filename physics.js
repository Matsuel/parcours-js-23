function getAcceleration(obj){
    if (obj.f!=undefined && obj.m!=undefined){
        return obj.f/obj.m;
    }else if (obj.Δv!=undefined && obj.Δt!=undefined){
        return obj.Δv/obj.Δt;
    }else if (obj.t!=undefined && obj.d!=undefined){
        return 2*obj.d/obj.t**2;
    }else{
        return "impossible"
    }
}

console.log(getAcceleration({}))
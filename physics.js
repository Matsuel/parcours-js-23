function getAcceleration(obj){
    if (obj==={}){
        return "impossible";
    }else if (obj.f!=0 && obj.m!=0){
        return obj.f/obj.m;
    }else if (obj.Δv!=0 && obj.Δt!=0){
        return obj.Δv/obj.Δt;
    }else if (obj.t!=0 && obj.d!=0){
        return 2*obj.d/obj.t**2;
    }else{
        return "impossible"
    }
}
export function build(numberOfBricks){
    let nb =1;

    let i = setInterval(()=>{
        let brick= document.createElement("div");
        brick.id= "brick-"+nb;
        (nb+1)%3===0? (brick.dataset.foundation= true): null;
        document.body.appendChild(brick);
        nb++;
        if (nb>numberOfBricks){
            clearInterval(i);
        }
    },100);
    

}

export function repair(...nbid){
    nbid.forEach((n)=>{
        let brick= document.getElementById("brick-"+n);
        brick.getAttribute("foundation")? (brick.dataset.repaired= "in progress"): (brick.dataset.repaired= true);
    })
}

export function destroy(){
    let bricks= document.querySelectorAll("div[id^='brick-']");
    bricks[bricks.length-1].remove();
}
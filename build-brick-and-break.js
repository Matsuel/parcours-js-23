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
    })
    

}

export function repair(number){
    for (let i=1; i<=number; i++){
        let block= document.getElementById("brick-"+i);
        if ((i+1)%3===0){
            block.dataset.repaired= "in progress";
        }else{
            block.dataset.repaired= true;
        }
    }
}

export function destroy(){
    let bricks= document.querySelectorAll("div[id^='brick-']");
    bricks[bricks.length-1].remove();
}
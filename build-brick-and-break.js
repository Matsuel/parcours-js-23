export function build(numberOfBricks){
    let i=1;
    setInterval(function(){
        let block=document.createElement("div");
        block.id="brick-"+String(i);
        block.innerHTML=String(i);
        (i+1)%3===0 ? block.dataset.repaired= true : null;
        document.body.append(block);
        i++;
        if (i> numberOfBricks){
            clearInterval(this);
        }
    }, 100);
    

}

export function repair(number){
    for (let i=1; i<=number; i++){
        let block= document.getElementById("brick-"+String(i));
        if ((i+1)%3===0){
            block.dataset.repaired= "in progress";
        }else{
            block.dataset.repaired= "true";
        }
    }
}

export function destroy(){
    let bricks= document.querySelectorAll("div[id^='brick-']");
    bricks[bricks.length-1].remove();
}
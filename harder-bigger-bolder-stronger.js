export function generateLetters(){
    for (let i=0; i<120;i++){
        let el = document.createElement("div");
        el.style.fontSize= `${11+i}px`;
        el.textContent= String.fromCharCode(65+Math.floor(Math.random()*26));
        if (i<40){
            el.style.fontWeight= 300;
        }else if (i<80){
            el.style.fontWeight= 400;
        }else{
            el.style.fontWeight= 600;
        }
        document.body.appendChild(el);
    }
}
import {styles} from './pimp-my-style.data.js';
let nb = 0;

export function pimp(){
    let button= document.getElementsByClassName('button');
    if(button.classList.contains('unpimp')){
        nb--;
        button.classList.remove(styles[nb]);
        if (nb===0){
            button.classList.toggle('unpimp');
        }
    }else{
        button.classList.add(styles[nb]);
        nb++;
    }
    if (nb===styles.length){
        button.classList.toggle('unpimp');
    }
}
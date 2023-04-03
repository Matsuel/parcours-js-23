import {colors } from './fifty-shades-of-cold.data.js';

export function generateClasses(){
    let style= document.createElement('style');
    for (let color of colors) {
        style.innerHTML += `.${color}\n{\n background: ${color}; \n}`;
    }
    document.head.appendChild(style);
}  

export function generateColdShades(){
    colors.forEach(color => {
        if (
            color.match(/(aqua|blue|turquoise|green|cyan|navy|purple)/) !== null
        ) {
            const div = document.createElement("div");
            div.classList.add(color);
            div.innerHTML = color;
            body.appendChild(div);
        }
    });
}

export function choseShade(shade){
    document.querySelectorAll('div').forEach(div => {
        div.className = shade;
    });
}
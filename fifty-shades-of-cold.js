import {colors } from './fifty-shades-of-cold.data.js';

export function generateClasses(){
    let style= document.createElement('style');
    for (let color of colors) {
        style.innerHTML += `.${color}\n{\n background: ${color}; \n}`;
    }
    document.head.appendChild(style);
}  

export function generateColdShades(){
    let cold = ['aqua', 'blue', 'turquoise', 'green', 'cyan', 'navy', 'purple']
    for(let color of colors){
        if (cold.indexOf(color) === -1){
            let div = document.createElement('div');
            div.className = color;
            div.textContent = color;
            document.body.appendChild(div);
        }
    }
}

export function choseShade(shade){
    document.querySelectorAll('div').forEach(div => {
        div.className = shade;
    });
}
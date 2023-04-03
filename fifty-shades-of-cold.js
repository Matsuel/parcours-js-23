import {colors } from './fifty-shades-of-cold.data.js';

export function generateClasses(){
    let style= document.createElement('style');
    style.innerHTML = "";
    for (let color of colors) {
        style.innerHTML += `.${color} { background-color: ${color}; }`;
    }
    document.head.appendChild(style);
}  

export function generateColdShades(){
    color.forEach(color => {
        const div = document.createElement('div');
        div.classList.add(color);
        div.innerHTML = color;
        document.body.appendChild(div);
    });
}

export function choseShade(shade){
    document.querySelectorAll('div').forEach(div => {
        div.className = shade;
    });
}
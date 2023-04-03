import {Colors } from './fifty-shades-of-cold.data.js';

export function generateClasses(){
    const style= document.createElement('style');
    Colors.forEach(color => {
        style.innerHTML += `.${color} {\n background: ${color};\n }\n\n`;
    });
    document.head.appendChild(style);
}  

export function generateColdShades(){
    Colors.forEach(color => {
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
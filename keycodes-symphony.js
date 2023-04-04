document.addEventListener('keydown', function(e) {
    compose(e);
});

export function compose(event){
    if (event=== undefined) return;
    if (event.keyCode >= 65 && event.keyCode <= 90){
        let div = document.createElement('div');
        div.classList.add('note');
        div.innerHTML = event.key;
        div.style.backgroundColor= `rgb( ${(255/26)* (event.key.charCodeAt(0)-97)}, ${(255/26)* (event.key.charCodeAt(0)-97)}, ${(255/26)* (event.key.charCodeAt(0)-97)})`;
        document.body.appendChild(div);
    }else if (event.key === 'Backspace'){
        document.body.removeChild(document.body.lastElementChild);
    }else if (event.key === 'Escape'){
        document.body.innerHTML = '';
    }
}  
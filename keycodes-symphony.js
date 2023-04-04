document.addEventListener('keydown', function(e) {
    compose(e);
});

export function compose(event){
    if (event=== undefined) return;
    if (event.keyCode >= 65 && event.keyCode <= 90 || event.keyCode >= 97 && event.keyCode <= 122){
        let div = document.createElement('div');
        div.classList.add('note');
        div.innerHTML = event.key;
        div.style.backgroundColor= `rgb(  ${255/event.key.charCodeAt(0)} ,  ${255/event.key.charCodeAt(0)} , ${255/event.key.charCodeAt(0)} )`;
        document.body.appendChild(div);
    }else if (event.key === 'Backspace'){
        document.body.removeChild(document.body.lastElementChild);
    }else if (event.key === 'Escape'){
        document.body.innerHTML = '';
    }
}  
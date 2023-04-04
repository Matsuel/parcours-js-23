document.addEventListener('keydown', function(e) {
    compose(e);
});

export function compose(event){
    if (event=== undefined) return;
    if (event.keyCode >= 65 && event.keyCode <= 90 || event.keyCode >= 97 && event.keyCode <= 122){
        let div = document.createElement('div');
        div.classList.add('note');
        div.style.backgroundColor= `rgb( (255/ ${event.keyCode} ), (255/ ${event.keyCode} ), (255/ ${event.keyCode} ))`;
        document.body.appendChild(div);
    } 
}  
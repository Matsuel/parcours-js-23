let circles = [];
let box;

class Circle{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.HTML= null;
        this.isTrapped = false;
        this.size= 50;
        this.draw();
        circles.push(this);
    }
    draw(){
        this.HTML = document.createElement('div');
        this.HTML.classList.add('circle');
        this.HTML.style.left = this.x + 'px';
        this.HTML.style.top = this.y + 'px';
        this.HTML.style.background = 'white';
        this.trap();
        document.body.appendChild(this.HTML);
    }

    trap(){
        if (this.x > box.x && this.y> box.y && this.x+ this.size< box.x + box.width && this.y+ this.size< box.height + box.y){
            this.isTrapped = true;
            this.HTML.style.background = "var(--purple)";
        }else{
            this.isTrapped = false;
            this.HTML.style.background = "white";
        }
    }
}

class Box {
    constructor() {
        this.HTML = document.createElement("div");
        this.HTML.classList.add("box");
        this.HTML.style.position = "absolute";
        this.HTML.style.top = "50%";
        this.HTML.style.left = "50%";
        this.HTML.style.transform = "translate(-50%, -50%)";
        document.body.appendChild(this.HTML);
        this.x = this.HTML.offsetLeft - this.HTML.offsetWidth / 2 - 1; // -1 to account for the border
        this.y = this.HTML.offsetTop - this.HTML.offsetHeight / 2 - 1;
        this.width = this.HTML.offsetWidth + 1; // +1 to account for the border
        this.height = this.HTML.offsetHeight + 1;
    }
}

document.body.addEventListener('click', event =>{
    createCircle(event)
});

document.body.addEventListener('mousemove', event =>{
    moveCircle(event)
});


export function createCircle(event){
    if (event === undefined) return;
    new Circle(event.clientX-25, event.clientY-25);
}

export function moveCircle(event){

}

export function setBox(){
    box = new Box();
}
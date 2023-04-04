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
        if (this.x > box.x && this.y> box.y && this.x+ this.size< box.size && this.y+ this.size< box.size){
            this.isTrapped = true;
            this.HTML.style.background = "var(--purple)";
        }else{
            this.isTrapped = false;
            this.HTML.style.background = "white";
        }
    }
}

document.addEventListener('click', event =>{
    createCircle(event)
});

export function createCircle(event){
    if (event === undefined) return;
    new Circle(event.clientX-25, event.clientY-25);
}
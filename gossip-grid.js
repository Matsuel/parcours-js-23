import {gossips} from './gossip-grid.data.js'

export function grid(){
    let click= false;
    const form = document.createElement("form");
    form.classList.add("gossip");

    const textarea = document.createElement("textarea");
    const button = document.createElement("button");
    button.type = "submit";
    button.innerHTML = "Share gossip!";
    button.addEventListener("click", (event)=>{
        click = true;
        event.preventDefault();
        if (textarea.value.length > 0){
            
            console.log(gossips);
            document.querySelectorAll(".gossip").forEach((element,i)=>{
                (i>0) ? element.remove() : null;
            });
            gossips.unshift(textarea.value);
            textarea.value = "";
            displayCards();
        };
    });

    const ranges = document.createElement("div");
    ranges.classList.add("ranges");
    const range1 = document.createElement("input");
    range1.type = "range";
    range1.className = "range";
    range1.id = "width";
    range1.min = "200";
    range1.max = "800";
    range1.value = "500";
    range1.addEventListener("input", (event)=>{
        const elements = document.querySelectorAll(".gossip");
        elements.forEach((element)=>{
            element.style.width = `${event.target.value}px`;
        }); 
    });

    const range2 = document.createElement("input");
    range2.type = "range";
    range2.className = "range";
    range2.id = "fontSize";
    range2.min = "20";
    range2.max = "40";
    range2.value = "30";
    range2.addEventListener("input", (event)=>{
        const elements = document.querySelectorAll(".gossip");
        console.log(elements.length);
        elements.forEach((element)=>{
            element.style.fontSize = `${event.target.value}px`;
        });
    });

    const range3 = document.createElement("input");
    range3.type = "range";
    range3.className = "range";
    range3.id = "background";
    range3.min = "20";
    range3.max = "75";
    range3.value = "50";
    range3.addEventListener("input", (event)=>{
        const elements = document.querySelectorAll(".gossip");
        elements.forEach((element)=>{
            element.style.background = `hsl(0,100%, ${event.target.value}%)`;
        });
    });

    ranges.appendChild(range1);
    ranges.appendChild(range2);
    ranges.appendChild(range3);

    form.appendChild(textarea);

    form.appendChild(button);

    document.body.appendChild(ranges);
    document.body.appendChild(form);

    displayCards();
}

function displayCards(){
    gossips.forEach((gossip)=>{
        console.log(gossip)
        const el = document.createElement("div");
        el.classList.add("gossip");
        el.innerHTML = gossip;
        document.body.appendChild(el);
    });
}
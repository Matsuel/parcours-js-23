document.addEventListener('mousemove', e=>{
    pick(e);
});

document.addEventListener('click', e=>{
    pick(e);
    copyToClipboard();
});

const hsl = document.createElement('div');
hsl.classList.add('hsl');
document.body.appendChild(hsl);

const hue = document.createElement('div');
hue.classList.add('hue', 'text');
document.body.appendChild(hue);

const luminosity = document.createElement('div');
luminosity.classList.add('luminosity', 'text');
document.body.appendChild(luminosity);

const svg = document.createElement("svg")
svg.id = "svg";
svg.setAttribute("width", "100%");
svg.setAttribute("height", "100%");
svg.setAttribute("viewBox", "0 0 100 100");
svg.setAttribute("preserveAspectRatio", "none");

const axisX = document.createElementNS("http://www.w3.org/2000/svg", "line");
axisX.id = "axisX";
axisX.setAttribute("width", "100%");
axisX.setAttribute("height", "100%");
axisX.setAttribute("x1", "0");
axisX.setAttribute("x2", "0");
svg.appendChild(axisX);

const axisY = document.createElementNS("http://www.w3.org/2000/svg", "lien");
axisY.id = "axisY";
axisY.setAttribute("width", "100%");
axisY.setAttribute("height", "100%");
axisY.setAttribute("y1", "0");
axisY.setAttribute("y2", "0");
svg.appendChild(axisY);

export function pick(event){
    if (event=== undefined) return;
    const huevalue = Math.round(event.clientX / window.innerWidth * 360);
    const lum = Math.round(event.clientY / window.innerHeight * 100);
    const color = `hsl(${huevalue}, 100%, ${lum}%)`;
    document.body.style.background = color;
    hsl.innerHTML = color;
    hue.innerHTML = `${String(huevalue)}`;
    luminosity.innerHTML = `${String(lum)}`;
    axisX.setAttribute("x1", event.clientX);
    axisX.setAttribute("x2", `${event.clientX}`);
    axisY.setAttribute("y1", `${event.clientY}`);
    axisY.setAttribute("y2", `${event.clientY}`);
    console.log(axisX.getAttribute("x1"));

}

async function copyToClipboard(){
    try {
        await navigator.clipboard.writeText(hsl.innerHTML);
    } catch (error) {
        console.error(error);
    }
}
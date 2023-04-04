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

export function pick(event){
    if (event=== undefined) return;
    const hue = Math.round(event.clientX / window.innerWidth * 360);
    const luminosity = Math.round(event.clientY / window.innerHeight * 100);
    const color = `hsl(${hue}, 100%, ${luminosity}%)`;
    document.body.style.background = color;
    hsl.innerHTML = color;
    hue.innerHTML = `${String(hue)}`;
    luminosity.innerHTML = `${String(luminosity)}`;
}

async function copyToClipboard(){
    try {
        await navigator.clipboard.writeText(hsl.innerHTML);
    } catch (error) {
        console.error(error);
    }
}
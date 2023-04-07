import {places} from './where-do-we-go.data.js';

let scroll = window.scrollY;
let allPlaces = sortPlacesByCoordinates();

document.addEventListener("scroll", () => {
    getPlace();
    scroll>window.scrollY? document.querySelector(".direction").innerHTML = "N": document.querySelector(".direction").innerHTML = "S";
    scroll = window.scrollY;
});

let a = document.createElement("a");
    a.classList.add("location");
    document.body.appendChild(a);

export function explore(){
    
    
    console.log(allPlaces);
    for(let i=0; i<allPlaces.length; i++){
        const section = document.createElement("section");
        section.style.background = `url('./where-do-we-go_images/${allPlaces[i][1].toLowerCase().replaceAll(/ /g, "-").split(',')[0]}.jpg')`;
        section.style.backgroundSize = "cover";
        section.style.backgroundPosition = "center";
        section.style.backgroundRepeat = "no-repeat";
        section.style.width = "100%";
        section.style.height = "100vh";
        // a.style.color = allPlaces[i][2];
        // a.target = "_blank";
        // a.href = `https://www.google.com/maps/place/${urlEncodeCoordinates(
        //     places[i].coordinates
        // )}/`;
        // console.log(allPlaces[allPlaces.length-1-i][1]);
        // a.textContent = allPlaces[i][1]+"\n"+places[i].coordinates;
        document.body.appendChild(section);

    }
    const compass = document.createElement("div");
    compass.classList.add("direction");
    document.body.appendChild(compass);
}

function getPlace(){
    const size= window.innerHeight;
    const scroll = window.scrollY+ size/2;
    const index = Math.floor(scroll/size);
    const place = allPlaces[index];
    const coordinates = places[index].coordinates;
    console.log(coordinates);
    (place[1][place[1].length-1]===" ")? place[1] = place[1].substring(0, place[1].length-1): place[1];
    a.textContent= `${place[1].trim() } \n ${coordinates}`;
    a.style.color = allPlaces[index][2];
    a.href = `https://www.google.com/maps/place/${CoordinatesGoogle(
        places[index].coordinates
    )}/`;
    a.target = "_blank";
}

function sortPlacesByCoordinates(){
    let allPlaces = [];
    for (let i=0 ; i<places.length ; i++){
        let place = places[i];
        let placeCoordinates = place.coordinates;
        let placeCoordinatesArray = placeCoordinates.split(" ");
        allPlaces.push([placeCoordinatesArray[0], place.name, place.color]);
    }
    for (let i=0 ; i<allPlaces.length ; i++){
        for (let j=i ; j<allPlaces.length; j++){
            let coordinates1 = allPlaces[i][0].replace(",", "").replace("°", "").replace("'", "").replace("N", "").replace("E", "").replace("S", "").replace("W", "").replace('"', "").replace(".", "");  
            (allPlaces[i][0].indexOf("S")!== -1)? coordinates1 = -coordinates1: coordinates1;
            // console.log(coordinates1);            
            let coordinates2 = allPlaces[j][0].replace(",", "").replace("°", "").replace("'", "").replace("N", "").replace("E", "").replace("S", "").replace("W", "").replace('"', "").replace(".", "");
            (allPlaces[j][0].indexOf("S")!== -1)? coordinates2 = -coordinates2: coordinates2;
            if (coordinates1 < coordinates2){
                let temp = allPlaces[i];
                allPlaces[i] = allPlaces[j];
                allPlaces[j] = temp;
            }
        }
    }
    return allPlaces;
}

function CoordinatesGoogle(coordinates) {
    return coordinates
        .replaceAll(" ", "%20")
        .replaceAll("°", "%C2%B0")
        .replaceAll('"', "%22");
}
"use strict";



let handleKlikOnCzlonek = function (event) {
    var nazwa = event.target.id.toString();
    var nazwaOK = oczyscNazwe(nazwa); //lreka -> reka itd...
    odegrajNazwe(nazwaOK, 500);
    kolorEfekt(event.target, 700);
}

function oczyscNazwe(nazwa) {
/* z lreka,preka,lnoga,pnoga robi reka, noga  */    
    if (nazwa=="glowa"||nazwa=="szyja"||nazwa=="brzuch") {
        return nazwa
    };
   return(nazwa.substring(1));
}

function odegrajNazwe(nazwa,delay) {
    var plik = "snd/" + nazwa + ".ogg"; 
    var nazwaSound = new Audio(plik);
    setTimeout(() => nazwaSound.play(), delay);
}

function kolorEfekt(elem, delay) {
/* Na chwile zmiana koloru */    
    var kolorOrig = elem.style.backgroundColor;
    elem.style.backgroundColor = "maroon";
    setTimeout(()=>elem.style.backgroundColor=kolorOrig, delay);
}

let czlonki = document.querySelectorAll('.czlonek');
[...czlonki].forEach(czlonek => czlonek.onclick = handleKlikOnCzlonek);
//Glowa nie dostala klasy '.czlonek', wiec minimalnie inne potraktowanie:
let glowa = document.getElementById("glowa");
glowa.onclick = handleKlikOnCzlonek;


let warning = document.getElementById('ostrzezenie');
// setTimeout(() => {warning.style.display = "none"}, 2000);
setTimeout(() => {warning.style.backgroundColor = "transparent";
                  warning.style.color = "transparent";},
                  4000);


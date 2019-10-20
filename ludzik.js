"use strict";

let czlonki = [];
let glowa = null;

window.onload = init;

function init() {
    czlonki = document.querySelectorAll('.czlonek');
    [...czlonki].forEach(czlonek => czlonek.onclick = handleKlikOnCzlonek);
    //Glowa nie dostala klasy '.czlonek', wiec minimalnie inne potraktowanie:
    glowa = document.getElementById("glowa");
    glowa.onclick = handleKlikOnCzlonek;
    
    //Jesli mobilne - ostrzezenie o waskim ekranie:
    var warning = document.getElementById('ostrzezenie');
    setTimeout(() => {
        warning.style.backgroundColor = "transparent";
        warning.style.color = "transparent";
    }, 4000);
}


let handleKlikOnCzlonek = function (event) {
    var nazwa = event.target.id.toString();
    var nazwaOK = oczyscNazwe(nazwa); //lreka -> reka itd...
    odegrajNazwe(nazwaOK, 500);
    kolorEfekt(event.target, 1200);
    //
    blokujKlikanie(2000);
}

function blokujKlikanie(naCzas) {
    /* Zabezpieczenie przed wscieklym klikaniem */

    //Wylaczenie handlerow, ukrycie kursora:
    [...czlonki].forEach(czlonek => czlonek.onclick = null);
    [...czlonki].forEach(czlonek => czlonek.style.cursor = "none");
    glowa.onclick = null;
    glowa.style.cursor = "none";

    //Handlery i kursor wracaja:
    setTimeout(() => {
        [...czlonki].forEach(czlonek => czlonek.onclick = handleKlikOnCzlonek);
        glowa.onclick=handleKlikOnCzlonek;
        //
        [...czlonki].forEach(czlonek => czlonek.style.cursor = "pointer");
        glowa.style.cursor = "pointer";
    },naCzas);
}

function oczyscNazwe(nazwa) {
    /* z lreka,preka,lnoga,pnoga robi reka, noga  */
    if (nazwa == "glowa" || nazwa == "szyja" || nazwa == "brzuch") {
        return nazwa
    };
    return (nazwa.substring(1));
}

function odegrajNazwe(nazwa, delay) {
    var plik = "snd/" + nazwa + ".ogg";
    var nazwaSound = new Audio(plik);
    setTimeout(() => nazwaSound.play(), delay);
}

function kolorEfekt(elem, delay) {
    /* Na chwile: zmiana koloru */
    var kolorOrig = elem.style.backgroundColor;
    elem.style.backgroundColor = "maroon";
    //
    //Powrot starego koloru - lepiej jest przejechac sie po wszystkim, bo jak naklika za duzo, to maroon zostaje:
    setTimeout(() => {
        [...czlonki].forEach(czlonek => czlonek.style.backgroundColor = kolorOrig);
        glowa.style.backgroundColor = kolorOrig;
    }, delay);
}





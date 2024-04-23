




//  MILESTONE 4
// Create un ulteriore pulsante che vi permetta di fare il lavoro inverso: la slide attiva invece di andare avanti torna indietro.
// Potete partire copiando il codice ma cosa dovete cambiare? In questa milestone vi assicurerete di aver davvero capito la precedente :occhiolino:



// trovo tutti gli elementi con classe slide
let slides = document.getElementsByClassName("slide");

let imgActNow;
let prossimaSlide;


// codice che verrà letto al click del pulsante #btnNexus
document.getElementById("btnNext").addEventListener("click",function (){
    // inizio addListener

    // itero su tutte le slide

for (let i = 0; i < slides.length; i++) {

    const slide = slides[i];
    console.log(i,slide);

    // per ogni slide controllo se è presente la classe active
    if( slide.classList.contains("active") ){
    // true, rimuovo classe
        slide.classList.remove("active");
    // tengo nota dell'indice
        imgActNow = i;
        console.log("rimuovo immagine attiva",i);
    }

    
}

// prossima slide = imgactnow + 1
 prossimaSlide = imgActNow + 1;

// se superiamo l'ultimo indice avviene un reset
if( prossimaSlide >= slides.length){
    prossimaSlide = 0;
}


slides[prossimaSlide].classList.add("active");

console.log(`sposto la selezione da ${imgActNow} a ${prossimaSlide}`);

// fine addListener
});

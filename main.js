


//  MILESTONE 3
// Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.
// Se abbiamo lavorato correttamente in milestone 2 dovrebbe bastarci poco. Creiamo un event listener per gestire il click sul pulsante.
// All'interno spostiamo il codice scritto in milestone 2 per far si che la slide non venga cambia al caricamento della pagina, ma al nostro click sul pulsante.
// Se superate l'ultima slide si spacca tutto e non fa nulla: è un bonus.

//  MILESTONE 4
// Create un ulteriore pulsante che vi permetta di fare il lavoro inverso: la slide attiva invece di andare avanti torna indietro.
// Potete partire copiando il codice ma cosa dovete cambiare? In questa milestone vi assicurerete di aver davvero capito la precedente :occhiolino:



// trovo tutti gli elementi con classe slide
let slides = document.getElementsByClassName("slide");

let imgActNow;
let prossimaSlide;


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




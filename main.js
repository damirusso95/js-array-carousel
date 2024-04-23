

//  MILESTONE 2
// Ora dobbiamo scrivere del codice che al caricamento della pagina sposti la slide attiva da quella corrente alla successiva, non pensate al click.
// Ragionate prima sul necessario. Devo recuperare un elemento specifico? Devo recuperare più elementi?
// Aiutandovi anche e soprattutto con la console dell'ispettore recuperate tutti gli elementi necessari.
// Scrivete poi il codice che all'avvio della pagina in automatico sposti la slide attiva dalla prima alla seconda.

//  MILESTONE 3
// Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.
// Se abbiamo lavorato correttamente in milestone 2 dovrebbe bastarci poco. Creiamo un event listener per gestire il click sul pulsante.
// All'interno spostiamo il codice scritto in milestone 2 per far si che la slide non venga cambia al caricamento della pagina, ma al nostro click sul pulsante.
// Se superate l'ultima slide si spacca tutto e non fa nulla: è un bonus.

//  MILESTONE 4
// Create un ulteriore pulsante che vi permetta di fare il lavoro inverso: la slide attiva invece di andare avanti torna indietro.
// Potete partire copiando il codice ma cosa dovete cambiare? In questa milestone vi assicurerete di aver davvero capito la precedente :occhiolino:



// trovo tutti gli elementi con classe slide
slides = document.getElementsByClassName("slide");


// itero su tutte le slide

for (let i = 0; i < slides.length; i++) {

    const slide = slides[i];
    console.log(slide);
    
}
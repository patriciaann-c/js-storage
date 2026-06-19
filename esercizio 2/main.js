// Esercizio 2
// mostra un messaggio diverso se è la prima volta che l'utente visita il sito

const message = document.querySelector("#message");

// per attendere il caricamento dell'intera pagina
document.addEventListener("DOMContentLoaded", () => {

    // leggiamo il valore da localStorage
    const hasVisited = localStorage.getItem("hasVisited");

    // verificiamo che esiste il valore nel localStorage
    if (hasVisited === "true") {
        console.log("Bentornato!");
        message.textContent = "Bentornato";

    } else {
        message.textContent = "Benvenuto!";
        console.log("Benvenuto!");

        // salviamo il valore nel localStorage
        localStorage.setItem("hasVisited", "true")
    }
})
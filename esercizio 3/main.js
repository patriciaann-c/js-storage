// Esercizio 3
// crea un contatore che incrementa ad ogni visita della pagina

const counter = document.querySelector("#counter");

document.addEventListener("DOMContentLoaded", () => {

    let countVisit = localStorage.getItem("visitNumber");
    counter.textContent = countVisit++;

    localStorage.setItem("visitNumber", countVisit);
})
// Esercizio 4
// gestisci la selezione della lingua e ricorda la preferenza dell'utente

const langSelect = document.querySelector(".form-select");

langSelect.addEventListener("change", () => {
    console.log(langSelect);
    localStorage.setItem("lang", langSelect.value)
})

document.addEventListener("DOMContentLoaded", () => {
    const userLang = localStorage.getItem("lang");
    console.log(userLang);
    langSelect.value = userLang;

})
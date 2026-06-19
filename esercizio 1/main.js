// Esercizio 1
// salva il nome inserito dall'utente e mostralo in pagina al ricaricamento

const button = document.querySelector("#save");
const inputUser = document.querySelector("#userName");

button.addEventListener("click", () => {
    const userName = inputUser.value;
    console.log(userName);

    localStorage.setItem("name", userName);
});

document.addEventListener("DOMContentLoaded", () => {

    const nome = localStorage.getItem("name");
    console.log(nome);

    inputUser.value = nome;

})

// sessionStorage : memoria a breve termine, quando chiude il browser anche il dato sparisce
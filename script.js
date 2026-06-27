const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");
const buttons = document.querySelector(".buttons");

const messages = [
    "Čekaj malo... 😄",
    "Jesi sigurna? 🤔",
    "Ne juri me, molim te 😂",
    "Još samo jednom probaj 😅",
    "Nemoj tako... 🥺",
    "Skoro si me uhvatila 😆",
    "Hajde razmisli još malo 🤭",
    "Ne odustaješ? 🙈",
    "Poslednji pokušaj 😎",
    "Dobro... sad može 😭"
];

let tries = 0;

function moveButton() {

    if (tries >= 10) {
        message.innerHTML = "Dobro... sad možeš da klikneš 😅";
        noBtn.removeEventListener("mouseover", moveButton);
        noBtn.removeEventListener("click", moveButton);
        noBtn.style.cursor = "pointer";
        return;
    }

    message.innerHTML = messages[tries];

    const maxX = buttons.offsetWidth - noBtn.offsetWidth;
    const maxY = buttons.offsetHeight - noBtn.offsetHeight;

    const x = Math.floor(Math.random() * maxX);
    const y = Math.floor(Math.random() * maxY);

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

    tries++;
}

noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("click", moveButton);

yesBtn.addEventListener("click", () => {
    alert("❤️ Znao sam da ćeš reći DA! ❤️");
});

noBtn.addEventListener("click", () => {

    if (tries >= 10) {
        alert("😂 Dobro, uspela si da klikneš 'Ne'!");
    }

});

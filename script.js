const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");

let tries = 0;

const texts = [
    "Ne možeš me uhvatiti 😂",
    "Nemoj to 😅",
    "Razmisli još jednom ❤️",
    "Sigurna si? 🤔",
    "Ajde klikni DA 😁",
    "Ne odustajem 😎",
    "Još malo 😂",
    "Ozbiljno? 😅",
    "DA izgleda mnogo lepše ❤️",
    "Poslednja šansa 😁"
];

function moveButton() {

    if (tries >= 10) {
        noBtn.innerHTML = "NE 😢";
        return;
    }

    tries++;

    message.innerHTML = texts[tries - 1];

    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

noBtn.addEventListener("mouseover", moveButton);

yesBtn.addEventListener("click", () => {

    document.body.innerHTML = `
        <div style="
        height:100vh;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        background:#ffd6e8;
        text-align:center;
        font-family:Arial">

        <h1 style="font-size:55px;color:#ff2d75;">
        🎉 JEEEEEE! 🎉
        </h1>

        <h2>
        Vidimo se večeras na kafi. ❤️
        </h2>

        <h3>
        Samo mi pošalji kada i gde da dođem.
        </h3>

        <br>

        <h2>Stefan ❤️</h2>

        </div>
    `;
});

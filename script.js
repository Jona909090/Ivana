const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");

let tries = 0;

const texts = [
   "Jesi li sigurna? 😊",
"Ne odustaj tako lako.",
"Kafa je sladja u dvoje. ☕",
"Molim te... 😄",
"Možda ipak 'Naravno'? 😉",
"Hajde, razmisli još jednom.",
"Biće zabavno. 😊",
"Skoro si me uhvatila!",
"Još samo jednom probaj. 😅",
"Poslednja šansa. 😄"
];

function moveButton() {

    if (tries >= 10) {
       noBtn.innerHTML = "Ne 😅";
        return;
    }

    tries++;
yesBtn.style.transform = "scale(" + (1 + tries * 0.08) + ")";
   message.innerHTML = "💬 " + texts[tries - 1];
message.style.opacity = "1";
    const maxX = window.innerWidth - noBtn.offsetWidth - 50;
const maxY = window.innerHeight - noBtn.offsetHeight - 50;

    const x = 50 + Math.random() * (maxX - 50);
const y = 50 + Math.random() * (maxY - 50);
    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}
setTimeout(() => {
    message.style.opacity = "0";
}, 1500);
noBtn.addEventListener("mouseenter", moveButton);

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

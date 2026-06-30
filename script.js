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
yesBtn.style.boxShadow = "0 0 30px #ff4f8b";
   message.innerHTML = "💬 " + texts[tries - 1];
message.style.opacity = "1";
  yesBtn.style.transition = "all 0.35s ease";
yesBtn.style.background = "#ff2d75";
yesBtn.style.color = "white";
    const maxX = window.innerWidth - noBtn.offsetWidth - 50;
const maxY = window.innerHeight - noBtn.offsetHeight - 50;

  const currentX = noBtn.offsetLeft;
const currentY = noBtn.offsetTop;
const x = currentX + (Math.random() * 300 - 150);
const y = currentY + (Math.random() * 250 - 125);
noBtn.style.left = Math.max(20, Math.min(maxX, x)) + "px";
   noBtn.style.top = Math.max(20, Math.min(maxY, y)) + "px";
noBtn.style.transition = "left 0.25s ease, top 0.25s ease, transform 0.25s ease";
noBtn.style.transform = "rotate(" + (Math.random() * 20 - 10) + "deg)";
   setTimeout(() => {
    message.style.opacity = "0";
      noBtn.style.cursor = "pointer";
}, 1500);
  } 
noBtn.addEventListener("mouseenter", moveButton);


yesBtn.addEventListener("click", () => {

    document.body.innerHTML = `
        <div style="
        height:100vh;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        background:linear-gradient(135deg,#ffe6f0,#ffc9dd,#ffdff0);
        text-align:center;
        font-family:'Segoe UI',sans-serif

        <h1 style="font-size:60px;color:#ff2d75;">
        🎉☕ Jeeee! ☕🎉
        </h1>

        <h2>
        Vidimo se večeras na kafi.☕❤️
        </h2>

        <h3>
        Samo mi pošalji kada i gde da dođem.
        </h3>

        <br>

        <h2>Stefan ❤️</h2>

        </div>
    `;
});

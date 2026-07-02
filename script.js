const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const bubble = document.getElementById("bubble");
const container = document.querySelector(".buttons");
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
noBtn.style.animation = "shake .18s"; 

setTimeout(() => { 
    noBtn.style.animation = "";
},180);
 if (tries >= 10) {

    document.body.innerHTML = `
    <div style="
        height:100vh;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        background:url('pozadina.jpg') center/cover no-repeat;
        text-align:center; 
        color:white;
        padding:20px;
    ">

        <h1 style="font-size:60px;">
            😢
        </h1>

        <h2 style="font-size:42px;margin-top:20px;"> 
            Šteta...
        </h2>

        <h3 style="font-size:28px;margin-top:15px;">
            Poštujem tvoj izbor.
        </h3>

        <p style="font-size:22px;margin-top:20px;">
            Ako se nekad predomisliš...
            kafa će i dalje čekati. ☕
        </p>

    </div>
    `;

    return;
}
    tries++;
yesBtn.style.transform = "scale(" + (1 + tries * 0.08) + ")"; 
yesBtn.style.boxShadow = "0 0 30px #ff4f8b";
   message.innerHTML = "💬 " + texts[tries - 1];
   bubble.innerHTML = texts[tries - 1];
bubble.style.opacity = "1";
message.style.opacity = "1";
  yesBtn.style.transition = "all 0.35s ease";
yesBtn.style.background = "#ff2d75";
yesBtn.style.color = "white";
const maxX = container.clientWidth - noBtn.offsetWidth;
const maxY = container.clientHeight - noBtn.offsetHeight;

const x = Math.random() * maxX;
const y = Math.random() * maxY;

noBtn.style.left = x + "px";
noBtn.style.top = y + "px";
   bubble.style.left = (parseInt(noBtn.style.left) - 10) + "px";
bubble.style.top = (parseInt(noBtn.style.top) - 55) + "px";
noBtn.style.transition = "left 0.25s ease, top 0.25s ease, transform 0.25s ease";
noBtn.style.transform = "rotate(" + (Math.random() * 20 - 10) + "deg)";
   setTimeout(() => {
    message.style.opacity = "0";
      bubble.style.opacity = "0";
      noBtn.style.cursor = "pointer";
}, 1500);
  } 
noBtn.addEventListener("mouseenter", moveButton);


yesBtn.addEventListener("click", () => {
 document.body.innerHTML = `
<div style="
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:url('jeeeeee.jpg') center center;
    background-size:cover;
    background-repeat:no-repeat;
">
</div>
`;
    `;
});

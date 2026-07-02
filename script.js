const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const bubble = document.getElementById("bubble");
const container = document.getElementById("container");
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
    background:#111;
    display:flex;
    justify-content:center;
    align-items:center;
">

    <div style="
        position:relative;
        display:inline-block;
        max-width:90vw;
        max-height:90vh;
    ">

        <img src="jeeeeee.jpg" style="
            width:100%;
            height:auto;
            max-height:90vh;
            display:block;
            border-radius:20px;
            box-shadow:0 0 40px rgba(0,0,0,.5);
        ">

        <div style="
            position:absolute;
            inset:0;
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            text-align:center;
            color:white;
            padding:40px;
        ">

            <h1 style="
                font-size:72px;
                margin:0;
                font-family:Arial,sans-serif;
                font-weight:bold;
                color:#ffffff;
                text-shadow:0 0 15px rgba(0,0,0,.8);
            ">
                🎉 JEEEEE! 🎉
            </h1>

            <div style="
                margin-top:30px;
                font-size:48px;
                font-family:Arial,sans-serif;
                font-weight:bold;
                text-shadow:0 0 12px rgba(0,0,0,.8);
            ">
                Vidimo se večeras na kafi. ☕❤️
            </div>

            <div style="
                margin-top:20px;
                font-size:28px;
                font-family:Arial,sans-serif;
                text-shadow:0 0 10px rgba(0,0,0,.8);
            ">
                Samo mi pošalji kada i gde da dođem.
            </div>

            <div style="
                margin-top:55px;
                font-size:72px;
                font-family:'Brush Script MT',cursive;
                color:white;
                text-shadow:0 0 12px rgba(0,0,0,.8);
            ">
                Stefan ❤️
            </div>

        </div>

    </div>

</div>
`;
});

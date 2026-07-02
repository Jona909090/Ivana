const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const bubble = document.getElementById("bubble");
const container = document.getElementById("container");

let tries = 0;

const texts = [
    "Jesi li sigurna? 😊",
    "Ne odustaj tako lako.",
    "Kafa je slađa u dvoje. ☕",
    "Molim te... 😄",
    "Možda ipak 'Naravno'? 😉",
    "Hajde, razmisli još jednom.",
    "Biće zabavno. 😊",
    "Skoro si me uhvatila!",
    "Još samo jednom probaj. 😅",
    "Poslednja šansa. 😄"
];

function moveButton(){

    noBtn.style.animation="shake .18s";

    setTimeout(()=>{
        noBtn.style.animation="";
    },180);

    if(tries>=10){

        document.body.innerHTML=`
        <div style="
            width:100%;
            height:100vh;
            display:flex;
            justify-content:center;
            align-items:center;
            background:url('pozadina.jpg') center/cover no-repeat;
            color:white;
            flex-direction:column;
            text-align:center;
        ">

            <h1 style="font-size:60px;">😢</h1>

            <h2 style="font-size:42px;margin-top:20px;">
                Šteta...
            </h2>

            <p style="font-size:26px;margin-top:20px;">
                Ako se nekad predomisliš,
                kafa će i dalje čekati. ☕
            </p>

        </div>
        `;

        return;
    }

    tries++;

    yesBtn.style.transform=`scale(${1+tries*0.08})`;
    yesBtn.style.background="#ff2d75";

    message.innerHTML="💬 "+texts[tries-1];
    bubble.innerHTML=texts[tries-1];

    message.style.opacity="1";
    bubble.style.opacity="1";

    const maxX=container.clientWidth-noBtn.offsetWidth-30;
    const maxY=container.clientHeight-noBtn.offsetHeight-30;

    const positions=[
        {x:20,y:20},
        {x:maxX-20,y:20},
        {x:20,y:maxY-20},
        {x:maxX-20,y:maxY-20},
        {x:maxX/2,y:20},
        {x:maxX/2,y:maxY-20},
        {x:20,y:maxY/2},
        {x:maxX-20,y:maxY/2},
        {x:maxX/2,y:maxY/2}
    ];

    const pos=positions[Math.floor(Math.random()*positions.length)];

    noBtn.style.left=pos.x+"px";
    noBtn.style.top=pos.y+"px";

    bubble.style.left=(noBtn.getBoundingClientRect().left-10)+"px";
    bubble.style.top=(noBtn.getBoundingClientRect().top-55)+"px";

    setTimeout(()=>{
        message.style.opacity="0";
        bubble.style.opacity="0";
    },1500);

}
noBtn.addEventListener("mouseenter", moveButton);
noBtn.addEventListener("touchstart", function(e){
    e.preventDefault();
    moveButton();
});

yesBtn.addEventListener("click", ()=>{

document.body.innerHTML=`

<div style="
    position:fixed;
    inset:0;
    background:#111;
    display:flex;
    justify-content:center;
    align-items:center;
">

    <div style="
        position:relative;
        width:90%;
        max-width:900px;
    ">

        <img src="jeeeeee.jpg" style="
            width:100%;
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
                text-shadow:0 0 15px rgba(0,0,0,.8);
            ">
                🎉 JEEEEE! 🎉
            </h1>

            <div style="
                margin-top:25px;
                font-size:38px;
                font-weight:bold;
                text-shadow:0 0 10px rgba(0,0,0,.8);
            ">
                Vidimo se večeras na kafi. ☕❤️
            </div>

            <div style="
                margin-top:18px;
                font-size:24px;
                text-shadow:0 0 8px rgba(0,0,0,.8);
            ">
                Samo mi pošalji kada i gde da dođem.
            </div>

            <div style="
                margin-top:55px;
                font-size:60px;
                font-family:'Brush Script MT',cursive;
                text-shadow:0 0 10px rgba(0,0,0,.8);
            ">
                Stefan ❤️
            </div>

        </div>

    </div>

</div>

`;

});

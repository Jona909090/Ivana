const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");

const questionPage = document.getElementById("questionPage");
const successPage = document.getElementById("successPage");
const sadPage = document.getElementById("sadPage");

const retry = document.getElementById("retry");
const messageBox = document.getElementById("messageBox");
const hearts = document.getElementById("hearts");
const fireworks = document.getElementById("fireworks");

let attempts = 0;

const messages = [

"Čekaj malo... ☕",

"Jesi sigurna? 🥺",

"Ne žuri me... 😅",

"Još samo jednom probaj. ❤️",

"Nemoj tako... 😢",

"Skoro si me uhvatila. 😂",

"Hajde razmisli još malo. 🤔",

"Ne odustaješ? 🙈",

"Poslednji pokušaj. 😎",

"Dobro... sad može. 🤷"

];

function random(min,max){

return Math.floor(Math.random()*(max-min))+min;

}

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=random(0,100)+"vw";

heart.style.animationDuration=random(5,10)+"s";

heart.style.fontSize=random(18,36)+"px";

hearts.appendChild(heart);

setTimeout(()=>heart.remove(),10000);

}

setInterval(createHeart,300);
function moveButton(){

const w=window.innerWidth-180;
const h=window.innerHeight-120;

const x=random(20,w);
const y=random(20,h);

noBtn.style.left=x+"px";
noBtn.style.top=y+"px";

}

noBtn.addEventListener("mouseenter",()=>{

if(attempts<10){

messageBox.innerHTML=messages[attempts];

attempts++;

moveButton();

}

else{

questionPage.classList.remove("active");

sadPage.classList.add("active");

}

});

noBtn.addEventListener("click",(e)=>{

e.preventDefault();

moveButton();

});

yesBtn.addEventListener("click",()=>{

questionPage.classList.remove("active");

successPage.classList.add("active");

launchFireworks();

});

retry.addEventListener("click",()=>{

attempts=0;

messageBox.innerHTML="";

sadPage.classList.remove("active");

questionPage.classList.add("active");

});
function launchFireworks(){

for(let i=0;i<35;i++){

setTimeout(()=>{

const boom=document.createElement("div");

boom.className="firework";

boom.style.left=random(10,90)+"vw";
boom.style.top=random(10,80)+"vh";

boom.style.setProperty("--x",(Math.random()-0.5)*300+"px");
boom.style.setProperty("--y",(Math.random()-0.5)*300+"px");

for(let j=0;j<24;j++){

const p=document.createElement("span");

const angle=(360/24)*j;
const dist=150;

p.style.setProperty("--x",Math.cos(angle*Math.PI/180)*dist+"px");
p.style.setProperty("--y",Math.sin(angle*Math.PI/180)*dist+"px");

boom.appendChild(p);

}

fireworks.appendChild(boom);

setTimeout(()=>boom.remove(),1200);

},i*180);

}

}

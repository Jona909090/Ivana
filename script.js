const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");

const successScreen = document.getElementById("successScreen");
const sadScreen = document.getElementById("sadScreen");

const popSound = document.getElementById("popSound");

const texts = [
"Čekaj malo... 😊",
"Jesi sigurna? 🤔",
"Ne žuri me, molim te 😅",
"Još samo jednom probaj ❤️",
"Nemoj tako... 🥺",
"Skoro si me uhvatila 😂",
"Hajde razmisli još malo 🤗",
"Ne odustaješ? 🙈",
"Poslednji pokušaj 😎",
"Dobro... sad može 😭"
];

let tries = 0;

function moveButton(){

    if(tries >= 10){
        return;
    }

    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

    message.innerHTML = texts[tries];

    tries++;
}

noBtn.addEventListener("mouseover", moveButton);

noBtn.addEventListener("click", function(){

    if(tries >= 10){

        document.querySelector(".container").style.display="none";

        sadScreen.classList.remove("hidden");

    }

});
yesBtn.addEventListener("click", () => {

    // Pusti zvuk šampanjca
    if (popSound) {
        popSound.currentTime = 0;
        popSound.play().catch(() => {});
    }

    // Sakrij početni ekran
    document.querySelector(".container").style.display = "none";

    // Prikaži ekran "Jeeeeee!"
    successScreen.classList.remove("hidden");

    // Konfete
    confetti({
        particleCount: 250,
        spread: 180,
        origin: { y: 0.6 }
    });

    // Vatromet 5 sekundi
    const duration = 5000;
    const end = Date.now() + duration;

    (function frame() {

        confetti({
            particleCount: 5,
            angle: 60,
            spread: 70,
            origin: { x: 0 }
        });

        confetti({
            particleCount: 5,
            angle: 120,
            spread: 70,
            origin: { x: 1 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }

    })();

});

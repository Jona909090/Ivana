const yes = document.getElementById("yes");
const no = document.getElementById("no");
const popup = document.getElementById("popup");

const messages = [
    "😅 Čekaj malo...",
    "🤔 Jesi li sigurna?",
    "🥺 Razmisli još jednom...",
    "😄 Ne odustajem!",
    "❤️ Ma hajde...",
    "😂 Skoro si me uhvatila!",
    "😊 Dobro, probaj opet!"
];

let i = 0;

no.addEventListener("mouseover", () => {
    const maxX = window.innerWidth - no.offsetWidth - 20;
    const maxY = window.innerHeight - no.offsetHeight - 20;

    no.style.left = Math.random() * maxX + "px";
    no.style.top = Math.random() * maxY + "px";

    if (i < messages.length) {
        no.innerText = messages[i];
        i++;
    }
});

yes.addEventListener("click", () => {
    popup.style.display = "flex";
    popup.innerHTML = `
        <div style="
            background:white;
            color:#333;
            padding:40px;
            border-radius:20px;
            text-align:center;
            max-width:500px;
        ">
            <h1>🥰 Jeeee!</h1>
            <p style="font-size:24px;margin-top:20px;">
                Znao sam da ćeš reći DA! ❤️<br><br>
                Vidimo se večeras na kafi. ☕😊
            </p>
        </div>
    `;
});

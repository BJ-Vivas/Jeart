// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const clickHereBtn = document.getElementById("clickHereBtn");
const valentineText = document.getElementById("valentine-text");
const buttons = document.getElementById("letter-buttons");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const finalText = document.getElementById("final-text");

// Image cycling for NO clicks
const images = ["First.gif","Second.gif","Third.gif","Fourth.gif","Fifth.gif", "Sixth.gif", "Seventh.gif", "Eighth.gif", "Ninth.gif", "Tenth.gif", "Eleventh.png"];
let imgIndex = -1;
let noClickCount = 0;

let yesScale = 1;
yesBtn.style.transformOrigin = "center";
yesBtn.style.transition = "transform 0.3s ease";

// NO text sequence
const noTexts = [
  "Pwede bati nata?🥺🥺🥺",
  "Pleasee pooo🥺",
  "Cgeee naaaa🥺🥺",
  "Wawa man meee😔😔😔",
  "Pleasee Baby🥺",
  "Pleasee Baby🥺🥺",
  "Pleasee Baby🥺🥺🥺",
  "Pleasee Baby🥺🥺🥺🥺",
  "Pleasee Baby🥺🥺🥺🥺🥺",
  "Pleasee Baby🥺🥺🥺🥺🥺🥺",
  "Pleasee Baby🥺🥺🥺🥺🥺🥺🥺"
];

// Open envelope
envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";
    setTimeout(() => {
        document.querySelector(".letter-window").classList.add("open");
    }, 50);
});

// ClickHere → Valentine stage
clickHereBtn.addEventListener("click", () => {
    title.textContent = "Happy Valentines💙💙💙";
    catImg.src = "Flowers.gif";

    clickHereBtn.style.display = "none";
    valentineText.style.display = "block";
    buttons.style.display = "flex";
});

// NO button logic
noBtn.addEventListener("click", () => {
    noClickCount++;

    // Cycle images
    imgIndex = (imgIndex + 1) % images.length;
    catImg.src = images[imgIndex];

    // Change valentine text according to sequence
    if(noClickCount <= noTexts.length){
        valentineText.textContent = noTexts[noClickCount - 1];
    }

    // YES button grows after 5 NO clicks (scaled to viewport width)
    if (noClickCount >= 6) {
        // scale grows by 20% of viewport width for mobile proportionality
        const scaleFactor = window.innerWidth / 800; // base 800px
        yesScale += 0.5 * scaleFactor;
        yesBtn.style.transform = `scale(${yesScale})`;
    }
});

// YES button logic
yesBtn.addEventListener("click", () => {
    title.textContent = "Yippeeee!";
    catImg.src = "Kiss.gif";

    valentineText.style.display = "none";
    buttons.style.display = "none";
    finalText.style.display = "block";
});

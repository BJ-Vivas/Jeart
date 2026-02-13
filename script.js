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

    // YES button grows after 5 NO clicks
    if (noClickCount >= 6) {
        yesScale += 0.5;
        yesBtn.style.transform = `scale(${yesScale})`;
    }
});

// YES button logic
yesBtn.addEventListener("click", () => {
    title.textContent = "Yeeeyyyy🥳🥳🥳";
    catImg.src = "Kiss.gif";

    valentineText.style.display = "none";
    buttons.style.display = "none";
    finalText.style.display = "block";
});

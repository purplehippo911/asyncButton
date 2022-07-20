const btns = document.querySelectorAll(".btn");
const shrekButton = document.querySelector(".btn4");
const final = document.querySelector(".btn31");
const buttons = Array.from(btns);
const unluckyButton = buttons[12];
let timeout = 5000;
let gamePlay = 15000;

function changeButton(timeout) {
    const rand = Math.floor(Math.random() * 30);
    const cookieButton = buttons[rand];
    const numButton = cookieButton.textContent;
    
    console.log(cookieButton, "🍪");
    cookieButton.textContent = "🍪 ";

    setTimeout(() => {
        cookieButton.textContent = numButton;
        changeButton(timeout);
    }, timeout);
}


window.addEventListener("load", changeButton(timeout));


unluckyButton.addEventListener("click", () => {
  document.querySelector(".container").innerHTML = `
  <div class="gallery">
    <h1>Game over</h1>
    <p>OOPS! You pushed the unlucky button!! Reload the page to try again.</p>
    <a href="blackcat.gif" download="black cat gif">
      <img src="img/blackcat.gif" alt="black cat gif" class="cat">
    </a>
  </div>
  `;
});

shrekButton.addEventListener("click", () => {
    document.querySelector(".container").innerHTML = `
    <div class="gallery">
      <div class="col"> 
      <h1>Shrek gallery</h1>
      <p>OOPS! You pushed shrek's button!! Reload the page to try again before he comes.</p>
      </div>
        <a href="img/shrekwithcrew.jpg" download="shrekwithcrew"> 
        <img src="img/shrekwithcrew.jpg" alt="shrek and the crew" class="shrek">
        </a>
        <a href="img/handsomeShrek.jpg" download="handsomeShrek"> 
        <img src="img/handsomeShrek.jpg" alt="handsome shrek" class="shrek">
        </a>
        <a href="img/ShockedShrek.webp" download="ShockedShrek"> 
        <img src="img/ShockedShrek.webp" alt="handsome shrek" class="shrek">
        </a>
        <a href="img/shrekanddonkey.jpg" download="shrekanddonkey"> 
        <img src="img/shrekanddonkey.jpg" alt="handsome shrek" class="shrek">
        </a>
    <div>
    `;
})

final.addEventListener("click", () => {
    document.querySelector(".container").innerHTML = `
    <div class="gallery">
        <h1>🎉 YOU WON!!!🍪 🎉 </h1>
        <p>Congratulations you won. I said that the cookie was HIDDEN. Sometimes it's about thinking smart, not hard.</p>
        <a href="img/trophy.JPG" download="you earn this.">
        <img src="img/trophy.JPG" alt="trophy" class="trophy">
        </a>
    </div>
    `;
});
const btns = document.querySelectorAll(".btn");
const shrekButton = document.querySelector(".btn4");
const buttons = Array.from(btns);
const unluckyButton = buttons[12];
let timeout = 5000;
let gamePlay = 15000;
let isClicked = false;

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

    // if(isClicked == true) {
    //     alert("YO, you won!")
    // }
}


window.addEventListener("load", changeButton(timeout));


unluckyButton.addEventListener("click", () => {
  document.querySelector(".container").innerHTML = `
  <div class="col">
  <h1>Game over</h1>
  <p>OOPS! You pushed the unlucky button!! Reload the page to try again.</p>
  </div>
  <a href="https://github.com/purplehippo911">
      <img src="img/shyguy.jpg" alt="shyguy">
      <p>Don't forget to check out my other projects, by clicking on the image above.</p>
  </a>
  `;
});

shrekButton.addEventListener("click", (button) => {
    document.querySelector(".container").innerHTML = `
    <div class="col">
    <h1>Shrek gallery</h1>
    <p>OOPS! You pushed shrek's button!! Reload the page to try again before he comes.</p>
    </div>
    <div class="grid"> 
    <img src="img/shrekwithcrew.jpg" alt="shrek and the crew" class="shrek">
    <img src="img/handsomeShrek.jpg" alt="handsome shrek" class="shrek">
    <img src="img/ShockedShrek.webp" alt="shocked shrek" class="shrek">
    <img src="img/shrekanddonkey.jpg" alt="shrekanddonkey" class="shrek">
    <div>
    `;
})
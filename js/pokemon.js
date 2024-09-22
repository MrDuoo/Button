const mybutton = document.getElementById("buttonChange");
let positionX = 50;
let positionY = 50;
const step = 10;

window.addEventListener("keydown", moveCharacter);

function moveCharacter(event) {
  switch (event.key) {
    case "ArrowUp":
      positionY = Math.max(0, positionY - step);
      break;
    case "ArrowDown":
      positionY = Math.min(
        window.innerHeight - mybutton.clientHeight,
        positionY + step
      );
      break;
    case "ArrowLeft":
      positionX = Math.max(0, positionX - step);
      break;
    case "ArrowRight":
      positionX = Math.min(
        window.innerWidth - mybutton.clientWidth,
        positionX + step
      );
      break;
  }
  mybutton.style.top = positionY + "px";
  mybutton.style.left = positionX + "px";
}
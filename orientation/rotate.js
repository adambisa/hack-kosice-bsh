const anglA = document.querySelector(".angles");
const anglB = document.querySelector(".angles2");
const anglC = document.querySelector(".angles3");

function handleOrientation(event) {
  let a = Math.round(event.alpha * 100) / 100;
  let b = Math.round(event.beta * 100) / 100;
  let c = Math.round(event.gamma * 100) / 100;
  anglA.textContent = a;
  anglB.textContent = b;
  anglC.textContent = c;
}

window.addEventListener("deviceorientation", handleOrientation);

var myShakeEvent = new Shake({
  threshold: 15, // optional shake strength threshold
  timeout: 1000, // optional, determines the frequency of event generation
});

myShakeEvent.start();

window.addEventListener("shake", shakeDadAss, false);

//function to call when shake occurs
function shakeDadAss() {
  //put your own code here etc.
  console.log("shake dad ass!");
}

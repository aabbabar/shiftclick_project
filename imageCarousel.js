const [ prev, play, pause, next ] = document.querySelectorAll("button");
const img = document.querySelector("img");
const imgID = [ "0183", "1049", "1255", "0750", "1352", "0905", "1096" ];
const caption = document.querySelector("#caption");
const captions = [
  "Pearl Oysters (Pleurotus ostreatus) growing in spiral formations",
  "A convergent growth of Amber Jelly fungus (Exidia recisia)",
  "An Artist's Conk (Ganoderma applanatum) covered in yellow flat-footed fly galls",
  "A fully splayed Collared Earthstar (Geastrum triplex)",
  "Yellow Brain fungus (Tremella mesenterica) also known as 'witches' butter",
  "Beautiful labyrinthian patterns on underside of a Blushing Bracket (Daedeleopsis confragosa)",
  "A small congregation of Shaggy Scalycaps (Pholiota squarrosa)"
];
let currentIndex = 0;
let autoplay;

window.addEventListener("load", autoplayStart);
play.addEventListener("click", autoplayStart);
pause.addEventListener("click", autoplayStop);
prev.addEventListener("click", () => arrowButton("l"));
next.addEventListener("click", () => arrowButton("r"));

function changeImg(direction) {
  if (direction == "r") {
    currentIndex === 6 ? (currentIndex = 0) : currentIndex++;
  } else if (direction == "l") {
    currentIndex === 0 ? (currentIndex = 6) : currentIndex--;
  }
  let nextImg = imgID[currentIndex];
  img.src = `/imgs/IMG_${nextImg}.JPG`;
  caption.textContent = captions[currentIndex];
}

function arrowButton(direction) {
  changeImg(direction);
  autoplayStop();
}

function autoplayStart() {
  autoplay = setInterval(() => changeImg("r"), 1500);
}

function autoplayStop() {
  clearInterval(autoplay);
}

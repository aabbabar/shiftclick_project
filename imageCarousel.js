const [ prev, play, pause, next ] = document.querySelectorAll("button");
const img = document.querySelector("#carousel");
const caption = document.querySelector("#caption");
let currentIndex = 0;
let autoplay;

window.addEventListener("load", autoplayStart);
play.addEventListener("click", autoplayStart);
pause.addEventListener("click", autoplayStop);
prev.addEventListener("click", () => arrowButton("l"));
next.addEventListener("click", () => arrowButton("r"));

function changeImg(direction) {
  if (direction == "r") {
    currentIndex === imgs.length - 1 ? (currentIndex = 0) : currentIndex++;
  } else if (direction == "l") {
    currentIndex === 0 ? (currentIndex = imgs.length - 1) : currentIndex--;
  }
  let nextID = imgs[currentIndex].id;
  img.src = `/imgs/fungi/IMG_${nextID}.JPG`;
  caption.textContent = imgs[currentIndex].caption;
}

function arrowButton(direction) {
  changeImg(direction);
  autoplayStop();
}

function autoplayStart() {
  autoplay = setInterval(() => changeImg("r"), 3000);
}

function autoplayStop() {
  clearInterval(autoplay);
}

const imgs = [
  {
    id      : "0183",
    caption : "Pearl Oysters (Pleurotus ostreatus) growing in spiral formations"
  },
  {
    id      : "1049",
    caption : "A convergent growth of Amber Jelly fungus (Exidia recisia)"
  },
  {
    id      : "1255",
    caption : "An Artist's Conk (Ganoderma applanatum) covered in yellow flat-footed fly galls"
  },
  {
    id      : "0750",
    caption : "A fully unfurled Collared Earthstar (Geastrum triplex)"
  },
  {
    id      : "1352",
    caption : "Yellow Brain fungus (Tremella mesenterica) also known as 'witches' butter"
  },
  {
    id      : "0905",
    caption : "Labyrinthian patterns on underside of a Blushing Bracket (Daedeleopsis confragosa)"
  },
  {
    id      : "1096",
    caption : "A small congregation of Shaggy Scalycaps (Pholiota squarrosa)"
  }
];

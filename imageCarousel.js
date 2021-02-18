const [ prev, autoplay, next ] = document.querySelectorAll(".carouselButton");
const img = document.querySelector("#image");
const caption = document.querySelector("#caption");
let currentIndex = 0;
let isAutoplay = false;
let autoplayer;

autoplay.addEventListener("click", toggleAutoplay);
prev.addEventListener("click", () => arrowButton("l"));
next.addEventListener("click", () => arrowButton("r"));
window.addEventListener("load", autoplayStart);

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
  autoplayStop();
  changeImg(direction);
}

function autoplayStart() {
  autoplayStop();
  autoplayer = setInterval(() => changeImg("r"), 3000);
  autoplay.src = "/imgs/icons/autoplay-on.png";
  isAutoplay = true;
}

function autoplayStop() {
  autoplay.src = "/imgs/icons/autoplay-off.png";
  clearInterval(autoplayer);
  isAutoplay = false;
}

function toggleAutoplay() {
  isAutoplay ? autoplayStop() : autoplayStart();
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

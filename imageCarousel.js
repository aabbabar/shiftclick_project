const carouselButtons = document.querySelectorAll(".carouselButton");
const [ prev, autoplay, next ] = carouselButtons;
const img = document.querySelector("#image");
const caption = document.querySelector("#caption");
let currentIndex = 0;
let isAutoplay = false;
let autoplayer;

autoplay.addEventListener("click", toggleAutoplay);
prev.addEventListener("click", () => arrowButton("l"));
next.addEventListener("click", () => arrowButton("r"));
window.addEventListener("load", autoplayStart);
document.addEventListener("keydown", (keydown) => keyControl(keydown));
carouselButtons.forEach((button) => {
  button.addEventListener("mouseover", () => button.classList.add("carouselButtonHover"));
  button.addEventListener("mouseout", () => button.classList.remove("carouselButtonHover"));
});

function changeImg(direction) {
  if (direction == "r") {
    currentIndex === imgs.length - 1 ? (currentIndex = 0) : currentIndex++;
  } else if (direction == "l") {
    currentIndex === 0 ? (currentIndex = imgs.length - 1) : currentIndex--;
  }
  let nextID = imgs[currentIndex].id;
  img.src = `./imgs/fungi/IMG_${nextID}.JPG`;
  caption.textContent = imgs[currentIndex].caption;
}

function autoplayStart() {
  autoplayStop();
  autoplayer = setInterval(() => changeImg("r"), 3000);
  autoplay.src = "./imgs/icons/autoplay-on.png";
  isAutoplay = true;
}

function autoplayStop() {
  autoplay.src = "./imgs/icons/autoplay-off.png";
  clearInterval(autoplayer);
  isAutoplay = false;
}

function toggleAutoplay() {
  isAutoplay ? autoplayStop() : autoplayStart();
}

function arrowButton(direction) {
  autoplayStop();
  changeImg(direction);
}

function flash(button) {
  button.classList.add("carouselButtonHover");
  setTimeout(() => button.classList.remove("carouselButtonHover"), 150);
}

function keyControl(keydown) {
  switch (keydown.key) {
    case "ArrowLeft":
      arrowButton("l");
      flash(prev);
      break;
    case "ArrowRight":
      arrowButton("r");
      flash(next);
      break;
    case " ":
      toggleAutoplay();
      flash(autoplay);
  }
}

const imgs = [
  {
    id      : "0183",
    caption : "Pearl Oysters (Pleurotus ostreatus) growing in spiral formations",
    alt     : "Pearl Oysters"
  },
  {
    id      : "1049",
    caption : "A convergent growth of Amber Jelly fungus (Exidia recisia)",
    alt     : "Amber Jelly Fungus"
  },
  {
    id      : "1255",
    caption : "An Artist's Conk (Ganoderma applanatum) covered in yellow flat-footed fly galls",
    alt     : "Artist's Conk"
  },
  {
    id      : "0750",
    caption : "A fully unfurled Collared Earthstar (Geastrum triplex)",
    alt     : "Collared Earthstar"
  },
  {
    id      : "1352",
    caption : 'Yellow Brain fungus (Tremella mesenterica) also known as "witches\' butter"',
    alt     : "Yellow Brain fungus"
  },
  {
    id      : "0905",
    caption : "Labyrinthian patterns on underside of a Blushing Bracket (Daedeleopsis confragosa)",
    alt     : "Blushing Bracket"
  },
  {
    id      : "1096",
    caption : "A small congregation of Shaggy Scalycaps (Pholiota squarrosa)",
    alt     : "Shaggy Scalycaps"
  }
];

const img = document.querySelector('img');
const prev = document.querySelector('#prev');
const play = document.querySelector('#play');
const pause = document.querySelector('#pause');
const next = document.querySelector('#next');
const imgID = [ '0183', '1049', '1255', '0750', '1093', '1352', '0905', '1096' ];
let currentIndex = 0;
prev.addEventListener('click', () => changeImg('l'));
next.addEventListener('click', () => changeImg('r'));

function changeImg(direction) {
  if (direction == 'r') {
    currentIndex === 7 ? (currentIndex = 0) : currentIndex++;
  } else if (direction == 'l') {
    currentIndex === 0 ? (currentIndex = 7) : currentIndex--;
  }
  let nextImg = imgID[currentIndex];
  img.src = `/imgs/IMG_${nextImg}.JPG`;
}

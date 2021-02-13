const img = document.querySelector('img');
const prev = document.querySelector('#prev');
const play = document.querySelector('#play');
const pause = document.querySelector('#pause');
const next = document.querySelector('#next');
const imgID = [ '0183', '1049', '1255', '0750', '1093', '1352', '0905', '1096' ];

let currentIndex = 0;

img.src = `/imgs/IMG_${imgID[0]}.JPG`;

function changeImg() {
    let nextImg = imgID[currentIndex];
    img.src = `/imgs/IMG_${nextImg}.JPG`;
}

prev.addEventListener('click', () => {
    currentIndex = currentIndex !== 0 ? currentIndex - 1 : 7;
    changeImg();
});
next.addEventListener('click', () => {
    currentIndex = currentIndex !== 7 ? currentIndex + 1 : 0;
    changeImg();
});

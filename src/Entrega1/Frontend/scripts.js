// Carrossel Automático
const carrosselSlide = document.querySelector('.carrossel-slide');
const images = document.querySelectorAll('.carrossel-slide img');

let counter = 0;
const size = images[0].clientWidth;

setInterval(() => {
    if (counter >= images.length - 1) counter = -1;
    counter++;
    carrosselSlide.style.transform = `translateX(${-size * counter}px)`;
}, 3000);
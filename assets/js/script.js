document.getElementById('ano-atual').textContent = new Date().getFullYear();


let slideIndex = 0;
let slides = document.querySelector('.slide');
let dots = document.querySelectorAll('.dot');

let images = document.querySelectorAll('.slide img');

function showSlide(index) {
    const imageWidth = images[0].clientWidth;
    slides.style.transform = `translateX(${-index * imageWidth}px)`;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

function currentSlide(index) {
    slideIndex = index;
    showSlide(slideIndex);
}

function autoSlide() {
    slideIndex++;
    if (slideIndex >= dots.length) slideIndex = 0;
    showSlide(slideIndex);
}

setInterval(autoSlide, 4000); 


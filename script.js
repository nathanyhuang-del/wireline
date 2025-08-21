
const imageNames = [
    "independence_group_2-e1338358559631-resized-image-960x240.jpg",
    "independence_group-e1338358711896-resized-image-960x240.jpg",
    "schlumberger_umbilical_reel-e1338358798271-resized-image-960x240.jpg",
    "top_ss_set_1.jpg",
    "top_ss_set_2.jpg",
    // Add more image filenames here
];

const slideshow = document.querySelector('.slideshow');



// Dynamically add images to the slideshow
imageNames.forEach((name, i) => {
    const img = document.createElement('img');
    img.src = `images/homepage slideshow/${name}`;
    img.className = 'slide';
    if (i === 0) img.classList.add('active');
    slideshow.appendChild(img);
});

let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
    slides[slideIndex].classList.remove('active');
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add('active');
}

setInterval(showSlides, 3000); // Change image every 3 seconds





window.addEventListener('DOMContentLoaded', () => {
    const overlay = document.querySelector('.slideshow-overlay');
    const slideshow = document.querySelector('.slideshow');
    // Fade in overlay and darken slideshow on load
    setTimeout(() => {
        overlay.classList.add('visible');
        slideshow.classList.remove('light');
    }, 100);

    // Fade out overlay and lighten slideshow when scrolled past
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        if (scrollY > 400) { // adjust threshold as needed
            overlay.classList.remove('visible');
            slideshow.classList.add('light');
        } else {
            overlay.classList.add('visible');
            slideshow.classList.remove('light');
        }
    });
});




const products = [
    {
        name: "Structural Steel Beams, C-Section, Columns, Angles",
        image: "images/products/product1.jpg",
        link: "#"
    },
    {
        name: "316 Stainless Steel. Sheet & Plate, Angle, Bar, Pipe, Tube",
        image: "images/products/product2.jpg",
        link: "#"
    },
    {
        name: "Precision Metals - Gauge Plate & Silver Steel",
        image: "images/products/product3.jpg",
        link: "#"
    },
        {
        name: "Precision Metals - Gauge Plate & Silver Steel",
        image: "images/products/product4.jpg",
        link: "#"
    }
    // Add more products as needed
];

const carouselTrack = document.querySelector('.carousel-track');

// Dynamically create product tiles
products.forEach(product => {
    const tile = document.createElement('div');
    tile.className = 'product-tile';

    const img = document.createElement('img');
    img.src = product.image;
    img.alt = product.name;

    const a = document.createElement('a');
    a.href = product.link;
    a.className = 'product-link';
    a.textContent = product.name;

    tile.appendChild(img);
    tile.appendChild(a);
    carouselTrack.appendChild(tile);
});

// Carousel arrow functionality
document.querySelectorAll('.carousel-arrow').forEach(btn => {
    btn.addEventListener('click', function() {
        const tile = carouselTrack.querySelector('.product-tile');
        const style = getComputedStyle(tile);
        const tileWidth = Math.round(tile.offsetWidth +
            parseInt(style.marginLeft) +
            parseInt(style.marginRight));
        if (btn.classList.contains('left')) {
            carouselTrack.scrollBy({ left: -tileWidth, behavior: 'smooth' });
        } else {
            carouselTrack.scrollBy({ left: tileWidth, behavior: 'smooth' });
        }
    });
});

window.addEventListener('scroll', () => {
    const servicesSection = document.querySelector('.services-options');
    if (!servicesSection) return;

    const rect = servicesSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight - 100) { // Adjust threshold as needed
        const cards = servicesSection.querySelectorAll('.service-card');
        if (cards[0]) cards[0].classList.add('fade-in-left');
        if (cards[1]) cards[1].classList.add('fade-in-right');
    }
});


window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('transparent');
    } else {
        navbar.classList.remove('transparent');
    }
});
const imageNames = [
    "independence_group_2-e1338358559631-resized-image-960x240.jpg",
    "independence_group-e1338358711896-resized-image-960x240.jpg",
    "schlumberger_umbilical_reel-e1338358798271-resized-image-960x240.jpg",
    "top_ss_set_1.jpg",
    "top_ss_set_2.jpg",
    // Add more image filenames here
];

const slideshow = document.querySelector('.slideshow');

if (slideshow) {
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

    const overlay = document.querySelector('.slideshow-overlay');
    // Fade in overlay and darken slideshow on load
    setTimeout(() => {
        if (overlay) overlay.classList.add('visible');
        slideshow.classList.remove('light');
    }, 100);

    // Fade out overlay and lighten slideshow when scrolled past
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        if (overlay) {
            if (scrollY > 400) {
                overlay.classList.remove('visible');
                slideshow.classList.add('light');
            } else {
                overlay.classList.add('visible');
                slideshow.classList.remove('light');
            }
        }
    });
}

const products = [
    {
        name: "Wireless Cable Tracker - CCT",
        image: "images/products/cct.jpg",
        link: "#"
    },
    {
        name: "Model: WE1500PC\n1500m 3/16″ Electric",
        image: "images/products/we1500pc.jpg",
        link: "#"
    },
    {
        name: "Model: WE1500\n1500m 3/16″ Electric",
        image: "images/products/we1500.jpg",
        link: "#"
    },
    {
        name: "Model: WES2000\n2000m 1/8″ Electric",
        image: "images/products/wes2000.jpg",
        link: "#"
    },
    {
        name: "Model: WH2000PC\n2000m 3/16″ Hydraulic",
        image: "images/products/wh2000pc.jpg",
        link: "#"
    },
    {
        name: "Model: WE3500\n3500m 3/16″ Electric",
        image: "images/products/we3500.jpg",
        link: "#"
    },
    {
        name: "Model: WH3500\n3500m 3/16″ Hydraulic",
        image: "images/products/wh3500.jpg",
        link: "#"
    },
    {
        name: "External Wireline Boom",
        image: "images/products/external_wireline_boom.jpg",
        link: "#"
    },
    {
        name: "Internal Wireline Boom",
        image: "images/products/internal_wireline_boom.jpg",
        link: "#"
    },
    {
        name: "Wireline Sheave",
        image: "images/products/wireline_sheave.jpg",
        link: "#"
    }
];

const carouselTrack = document.querySelector('.carousel-track');

if (carouselTrack) {
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
}

// Services fade-in animation
window.addEventListener('scroll', () => {
    const servicesSection = document.querySelector('.services-options');
    if (!servicesSection) return;

    const rect = servicesSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight - 100) {
        const cards = servicesSection.querySelectorAll('.service-card');
        if (cards[0]) cards[0].classList.add('fade-in-left');
        if (cards[1]) cards[1].classList.add('fade-in-right');
    }
});

// Navbar transparency on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    if (window.scrollY > 0) {
        navbar.classList.add('transparent');
    } else {
        navbar.classList.remove('transparent');
    }
});


const winchTilesContainer = document.getElementById('winch-product-tiles');
if (winchTilesContainer) {
    // Get winch products: products[1] to products[6] (6 items after CCT)
    const winchProducts = products.slice(1, 7);
    winchProducts.forEach(product => {
        const tile = document.createElement('div');
        tile.className = 'product-page-tile';

        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.name;

        const name = document.createElement('div');
        name.className = 'product-page-name';
        name.textContent = product.name;

        tile.appendChild(img);
        tile.appendChild(name);
        winchTilesContainer.appendChild(tile);
    });
}

const cctTileContainer = document.getElementById('cct-product-tile');
if (cctTileContainer) {
    const cctProduct = products.find(p => p.name.includes('CCT'));
    if (cctProduct) {
        const tile = document.createElement('div');
        tile.className = 'product-page-tile';

        const img = document.createElement('img');
        img.src = cctProduct.image;
        img.alt = cctProduct.name;

        const name = document.createElement('div');
        name.className = 'product-page-name';
        name.textContent = cctProduct.name;

        tile.appendChild(img);
        tile.appendChild(name);
        cctTileContainer.appendChild(tile);
    }
}

const boomTilesContainer = document.getElementById('boom-products');
if (boomTilesContainer) {
    // Get last 3 products for Booms & Sheaves
    const boomProducts = products.slice(-3);
    boomProducts.forEach(product => {
        const tile = document.createElement('div');
        tile.className = 'product-page-tile';

        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.name;

        const name = document.createElement('div');
        name.className = 'product-page-name';
        name.textContent = product.name;

        tile.appendChild(img);
        tile.appendChild(name);
        boomTilesContainer.appendChild(tile);
    });
}
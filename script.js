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
        id: "cct",
        name: "Wireless Cable Tracker - CCT",
        image: "images/products/cct.jpg",
        link: "cct.html",
        description: "Designed for efficient cable tracking in drilling operations. Easy to install and operate.",
        specs: [
            "Wireless cable tracking technology",
            "Compatible with most drill rigs",
            "Measures line speed and depth",
            "No winch unit required"
        ],
        KeyFeatures: [
            "Battery powered for portability",
            "Weather resistant enclosure",
            "Includes user manual"
        ]
    },
    {
        id: "we1500pc",
        name: "Model: WE1500PC\n1500m 3/16″ Electric",
        image: "images/products/we1500pc.jpg",
        link: "we1500pc.html",
        description: "Ideal for medium-depth wireline operations. Reliable electric motor for consistent performance.",
        specs: [
            "Cable length: 1500m",
            "Cable diameter: 3/16″",
            "Electric powered",
            "Portable chassis"
        ],
        KeyFeatures: [
            "Easy to transport",
            "Low maintenance",
            "Safety features included"
        ]
    },
    {
        id: "we1500",
        name: "Model: WE1500\n1500m 3/16″ Electric",
        image: "images/products/we1500.jpg",
        link: "we1500.html",
        description: "Suitable for various wireline tasks. Durable construction ensures longevity.",
        specs: [
            "Drum Capacity: 1500m 3/16” wireline",
            "Line Speed Range: 1 – 35m/min",
            "Max Torque/Max Pull: 230Nm/160kg @ Drum Barrel",
            "Input: Single Phase AC200-240V, 15A",
            "Environmental Rating: IP65",
            "Dimension: 850mm(W) x 900mm(D) x 700mm(H)",
            "Weight: 200kg without cable"
        ],
        KeyFeatures: [
            "PLC controlled standalone wireline winch",
            "German bevel gearbox and servo drive",
            "Auto cable spooling system– 100% accuracy",
            "Electrical brake – zero creeping",
            "Remote tethered controller",
            "Depth, line speed and cable tension real time readout",
            "Loose cable detection and shutdown",
            "Datum zero depth position detection and shutdown",
            "Tool jamming detection and shutdown",
            "Hand free auto start – Useful for single operator",
            "Programmable multiple setpoints and interval running mode",
            "Retractable mode – For setting-up and packing-up",
            "Free wheel mode – for horizontal or upward run",
            "Fully support third party survey software integration",
            "Real time depth and speed display on PC or Tablet screen via USB port",
            "Real time alarm and error diagnostic system",
            "Optional - wireless auxiliary remote controller",
            "Optional – auxiliary depth encoder"
        ]
    },
    {
        id: "wes2000",
        name: "Model: WES2000\n2000m 1/8″ Electric",
        image: "images/products/wes2000.jpg",
        link: "wes2000.html",
        description: "Perfect for extended reach wireline jobs. Lightweight and easy to transport.",
        specs: [
            "Cable length: 2000m",
            "Cable diameter: 1/8″",
            "Electric powered",
            "Compact design"
        ],
        KeyFeatures: [
            "Lightweight construction",
            "Energy efficient",
            "Quick setup"
        ]
    },
    {
        id: "wh2000pc",
        name: "Model: WH2000PC\n2000m 3/16″ Hydraulic",
        image: "images/products/wh2000pc.jpg",
        link: "wh2000pc.html",
        description: "Hydraulic operation for powerful wireline handling. Built for demanding environments.",
        specs: [
            "Cable length: 2000m",
            "Cable diameter: 3/16″",
            "Hydraulic powered",
            "Heavy-duty build"
        ],
        KeyFeatures: [
            "High torque output",
            "Robust hydraulic system",
            "Suitable for tough conditions"
        ]
    },
    {
        id: "we3500",
        name: "Model: WE3500\n3500m 3/16″ Electric",
        image: "images/products/we3500.jpg",
        link: "we3500.html",
        description: "Handles deep wireline projects with ease. High-capacity electric motor.",
        specs: [
            "Cable length: 3500m",
            "Cable diameter: 3/16″",
            "Electric powered",
            "Large capacity"
        ],
        KeyFeatures: [
            "Supports long cable runs",
            "Stable operation",
            "Advanced safety systems"
        ]
    },
    {
        id: "wh3500",
        name: "Model: WH3500\n3500m 3/16″ Hydraulic",
        image: "images/products/wh3500.jpg",
        link: "wh3500.html",
        description: "Designed for heavy-duty, deep wireline operations. Reliable hydraulic system.",
        specs: [
            "Cable length: 3500m",
            "Cable diameter: 3/16″",
            "Hydraulic powered",
            "Robust construction"
        ],
        KeyFeatures: [
            "Heavy-duty frame",
            "Efficient hydraulic controls",
            "Long service life"
        ]
    },
    {
        id: "external-wireline-boom",
        name: "External Wireline Boom",
        image: "images/products/external_wireline_boom.jpg",
        link: "external-wireline-boom.html",
        description: "Ideal for field operations requiring robust and reliable wireline support. Custom options available on request.",
        specs: [
            "Fits most 4WD vehicles",
            "Heavy-duty steel construction",
            "Hydraulic operation",
            "Easy installation and removal"
        ],
        KeyFeatures: [
            "Custom configurations available",
            "Corrosion resistant finish",
            "Minimal maintenance required"
        ]
    },
    {
        id: "internal-wireline-boom",
        name: "Internal Wireline Boom",
        image: "images/products/internal_wireline_boom.jpg",
        link: "internal-wireline-boom.html",
        description: "Optimized for use inside service vehicles. Enhances wireline deployment efficiency.",
        specs: [
            "Designed for vehicle interiors",
            "Space-saving design",
            "Durable materials",
            "Smooth operation"
        ],
        KeyFeatures: [
            "Quick deployment",
            "Low profile design",
            "Easy to clean surfaces"
        ]
    },
    {
        id: "wireline-sheave",
        name: "Wireline Sheave",
        image: "images/products/wireline_sheave.jpg",
        link: "wireline-sheave.html",
        description: "Ensures safe and efficient cable handling. Suitable for a wide range of wireline applications.",
        specs: [
            "High-strength alloy construction",
            "Smooth cable guidance",
            "Corrosion resistant",
            "Easy mounting"
        ],
        KeyFeatures: [
            "Universal mounting options",
            "Low friction bearings",
            "Long-lasting performance"
        ]
    }
];

const services = [
    {
        id: "vehicle-fitouts",
        title: "VEHICLE FITOUTS",
        homepageDescription: "We offer a full range of product processing services to support our wireline equipment and accessories.",
        description: "", // Add detailed description for the service page here
        image: "images/services/service1.jpg",
        link: "vehicle-fitouts.html"
    },
    {
        id: "custom-jobs",
        title: "SPECIAL WINCH PROJECTS & ACCESSORIES",
        homepageDescription: "Our team provides technical support and custom solutions for wireline engineering projects worldwide.",
        description: "", // Add detailed description for the service page here
        image: "images/services/service2.jpg",
        link: "custom-jobs.html"
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

        // Make product name a link
        const nameLink = document.createElement('a');
        nameLink.className = 'product-page-name';
        nameLink.href = product.link;
        nameLink.textContent = product.name;
        nameLink.style.textDecoration = "none"; // Optional: remove underline

        tile.appendChild(img);
        tile.appendChild(nameLink);
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

        // Make product name a link
        const nameLink = document.createElement('a');
        nameLink.className = 'product-page-name';
        nameLink.href = cctProduct.link;
        nameLink.textContent = cctProduct.name;
        nameLink.style.textDecoration = "none";

        tile.appendChild(img);
        tile.appendChild(nameLink);
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

        // Make product name a link
        const nameLink = document.createElement('a');
        nameLink.className = 'product-page-name';
        nameLink.href = product.link;
        nameLink.textContent = product.name;
        nameLink.style.textDecoration = "none";

        tile.appendChild(img);
        tile.appendChild(nameLink);
        boomTilesContainer.appendChild(tile);
    });
}
document.querySelectorAll('.product-insert').forEach(el => {
    const productId = el.getAttribute('data-product-id');
    const product = products.find(p => p.id === productId);
    if (product) {
        // Main horizontal container
        const container = document.createElement('div');
        container.className = 'product-display';

        // Large image
        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.name;
        img.className = 'product-display-img';

        // Info container
        const info = document.createElement('div');
        info.className = 'product-display-info';

        // Large product name
        const name = document.createElement('h2');
        name.className = 'product-display-name';
        name.textContent = product.name;

        // Description
        const desc = document.createElement('p');
        desc.className = 'product-display-desc';
        desc.textContent = product.description || "";

        // Enquire Now button
        const button = document.createElement('button');
        button.className = 'enquire-now-btn';
        button.textContent = 'Enquire Now';
    button.onclick = function() {
    window.location.href = 'contact.html?subject=' + encodeURIComponent('Enquiry about ' + product.name);
    };

        info.appendChild(name);
        info.appendChild(desc);
        info.appendChild(button);

        container.appendChild(img);
        container.appendChild(info);

        // --- Add line and specs/additional info section below ---
        const wrapper = document.createElement('div');
        wrapper.appendChild(container);

        // Horizontal line
        const hr = document.createElement('hr');
        hr.className = 'product-divider';
        wrapper.appendChild(hr);

        // Specifications and additional info section
        const specsSection = document.createElement('div');
        specsSection.className = 'product-specs-section';

        // Specs column
        if (product.specs && product.specs.length > 0) {
            const specsCol = document.createElement('div');
            specsCol.className = 'specs-col';

            const specsTitle = document.createElement('h3');
            specsTitle.textContent = "Specifications";
            specsCol.appendChild(specsTitle);

            const specsList = document.createElement('ul');
            specsList.className = 'product-specs-list';
            product.specs.forEach(spec => {
                const li = document.createElement('li');
                li.textContent = spec;
                specsList.appendChild(li);
            });
            specsCol.appendChild(specsList);

            specsSection.appendChild(specsCol);
        }

        // Additional info column
        if (product.KeyFeatures && product.KeyFeatures.length > 0) {
            const infoCol = document.createElement('div');
            infoCol.className = 'additional-info-col';

            const infoTitle = document.createElement('h3');
            infoTitle.textContent = "Key Features";
            infoCol.appendChild(infoTitle);

            const infoList = document.createElement('ul');
            infoList.className = 'product-additional-list';
            product.KeyFeatures.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                infoList.appendChild(li);
            });
            infoCol.appendChild(infoList);

            specsSection.appendChild(infoCol);
        }

        wrapper.appendChild(specsSection);

        el.replaceWith(wrapper);
    }
});

document.querySelectorAll('.service-insert').forEach(el => {
    const serviceId = el.getAttribute('data-service-id');
    const service = services.find(s => s.id === serviceId);
    if (service) {
        // Create container
        const container = document.createElement('div');
        container.className = 'service-display';

        // Service title
        const title = document.createElement('h1');
        title.className = 'service-display-title';
        title.textContent = service.title;

        // Service description
        const desc = document.createElement('p');
        desc.className = 'service-display-desc';
        desc.textContent = service.description;

        container.appendChild(title);
        container.appendChild(desc);

        el.replaceWith(container);
    }
});
const servicesContainer = document.getElementById('services-container');
if (servicesContainer) {
    services.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card';

        const img = document.createElement('img');
        img.src = service.image;
        img.alt = service.title;
        img.className = 'service-icon';

        const title = document.createElement('h3');
        title.textContent = service.title;

        const desc = document.createElement('p');
        desc.textContent = service.homepageDescription; // Changed from service.description

        const button = document.createElement('button');
        button.className = 'service-btn';
        button.textContent = 'FIND OUT MORE';
        button.onclick = function() {
            window.location.href = service.link;
        };

        serviceCard.appendChild(img);
        serviceCard.appendChild(title);
        serviceCard.appendChild(desc);
        serviceCard.appendChild(button);

        servicesContainer.appendChild(serviceCard);
    });
}

function validateForm() {
    // Check honeypot field (catches bots)
    const website = document.getElementById('website').value;
    if (website !== '') {
        return false; // Bot detected, silently reject
    }
    
    // Check message length
    const message = document.getElementById('message').value;
    if (message.length < 10) {
        alert('Please provide a more detailed message (at least 10 characters).');
        return false;
    }
    
    // If all checks pass
    alert('Thank you for your message! We will get back to you soon.');
    return true;
}

// Auto-fill contact form subject from URL parameter
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const subject = urlParams.get('subject');
    const subjectField = document.getElementById('subject');
    
    if (subject && subjectField) {
        subjectField.value = decodeURIComponent(subject);
    }
});


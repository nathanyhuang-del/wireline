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
    // WDT Variants
    {
        id: "wdt-pipe-rod",
        category: "wdt",
        name: "WDT – Pipe/Rod Kit",
        image: "images/products/cct.jpg",
        link: "wdt-pipe-rod.html",
        description: "Wireless Depth Tracker configured for pipe/rod applications providing accurate depth and speed without a dedicated winch.",
        specs: ["Optimised for drill pipe/rods", "Wireless data transmission", "Low power consumption"],
        KeyFeatures: ["Fast setup", "Rugged enclosure", "High accuracy encoder"]
    },
    {
        id: "wdt-rodder",
        category: "wdt",
        name: "WDT – Rodder Kit",
        image: "images/products/cct.jpg",
        link: "wdt-rodder.html",
        description: "Rodder kit variant for the Wireless Depth Tracker supporting continuous rodder operations.",
        specs: ["Rodder compatible mount", "Real-time depth & speed", "Extended battery option"],
        KeyFeatures: ["Modular mounting", "Weather resistant", "Field serviceable"]
    },
    {
        id: "wdt-fitted-encoder",
        category: "wdt",
        name: "WDT – Fitted Encoder",
        image: "images/products/cct.jpg",
        link: "wdt-fitted-encoder.html",
        description: "Encoder-fitted configuration enabling integration with existing site hardware.",
        specs: ["High resolution encoder", "Direct integration capability", "USB / Wireless output"],
        KeyFeatures: ["Plug & play", "Low maintenance", "Precision readings"]
    },
    // Electric Winches
    {
        id: "we1500",
        category: "winch-electric",
        name: "WE1500 1500m 3/16” Electric",
        image: "images/products/we1500.jpg",
        link: "we1500.html",
        description: "Electric winch for mid-depth operations with advanced control and safety features.",
        specs: ["1500m 3/16\" capacity", "1–35m/min speed range", "IP65 rated", "Single Phase 200–240V"],
        KeyFeatures: ["PLC control", "Auto spooling", "Real-time depth & tension"]
    },
    {
        id: "we3500",
        category: "winch-electric",
        name: "WE3500 3500m 3/16” Electric",
        image: "images/products/we3500.jpg",
        link: "we3500.html",
        description: "High capacity 3500m electric winch engineered for reliability in deep operations.",
        specs: ["3500m 3/16\" capacity", "High torque servo drive", "Advanced diagnostics"],
        KeyFeatures: ["Stability under load", "Long cable life design", "Remote control"]
    },
    {
        id: "we5000",
        category: "winch-electric",
        name: "WE5000 5000m 3/16” Electric",
        image: "images/products/we3500.jpg",
        link: "we5000.html",
        description: "Ultra deep 5000m electric winch option for extended survey and logging tasks.",
        specs: ["5000m 3/16\" capacity", "Reinforced drum assembly", "Precision drive control"],
        KeyFeatures: ["Extended reach", "Thermal protection", "Service friendly layout"]
    },
    {
        id: "we1500pc",
        category: "winch-electric",
        name: "WE1500PC 1500m 3/16” Electric",
        image: "images/products/we1500pc.jpg",
        link: "we1500pc.html",
        description: "Portable chassis variant of the WE1500 for easy field deployment.",
        specs: ["1500m 3/16\" capacity", "Portable frame", "Electric drive"],
        KeyFeatures: ["Compact footprint", "Low maintenance", "Operator friendly"]
    },
    {
        id: "wes2000",
        category: "winch-electric",
        name: "WES2000 2000m 1/8” Electric",
        image: "images/products/wes2000.jpg",
        link: "wes2000.html",
        description: "Lightweight 2000m 1/8\" electric winch for smaller diameter logging.",
        specs: ["2000m 1/8\" capacity", "Energy efficient drive", "Compact design"],
        KeyFeatures: ["Lightweight", "Quick setup", "Reliable performance"]
    },
    // Hydraulic Winches
    {
        id: "wh2000",
        category: "winch-hydraulic",
        name: "WH2000 2000m 3/16” Hydraulic",
        image: "images/products/wh2000pc.jpg",
        link: "wh2000pc.html",
        description: "Hydraulic 2000m winch delivering strong pulling force for demanding tasks.",
        specs: ["2000m 3/16\" capacity", "Hydraulic drive", "Heavy duty build"],
        KeyFeatures: ["High torque", "Rugged frame", "Stable control"]
    },
    {
        id: "wh3500",
        category: "winch-hydraulic",
        name: "WH3500 1500m 3/16” Hydraulic",
        image: "images/products/wh3500.jpg",
        link: "wh3500.html",
        description: "Hydraulic winch variant suited for operations requiring smooth controlled power.",
        specs: ["1500m 3/16\" capacity", "Hydraulic actuation", "Serviceable design"],
        KeyFeatures: ["Robust hydraulic system", "Reliable under load", "Efficient cooling"]
    },
    // Booms & Snatch Blocks
    {
        id: "external-wireline-boom",
        category: "boom",
        name: "External Wireline Boom",
        image: "images/products/external_wireline_boom.jpg",
        link: "external-wireline-boom.html",
        description: "External deployment boom for vehicle mounted operations.",
        specs: ["Vehicle mount compatible", "Steel construction", "Hydraulic assist"],
        KeyFeatures: ["Customisable", "Corrosion resistant", "Low maintenance"]
    },
    {
        id: "internal-wireline-boom",
        category: "boom",
        name: "Internal Wireline Boom",
        image: "images/products/internal_wireline_boom.jpg",
        link: "internal-wireline-boom.html",
        description: "Internal boom optimised for enclosed vehicle fitouts.",
        specs: ["Space saving arm", "Protected routing", "Smooth operation"],
        KeyFeatures: ["Quick deployment", "Low profile", "Durable finish"]
    },
    {
        id: "wireline-snatch-blocks",
        category: "boom",
        name: "Wireline Snatch Blocks",
        image: "images/products/wireline_sheave.jpg",
        link: "wireline-sheave.html",
        description: "Snatch blocks for safe redirection and handling of wireline cables.",
        specs: ["High strength alloy", "Low friction sheave", "Multiple mounting options"],
        KeyFeatures: ["Long service life", "Low friction", "Easy inspection"]
    }
];

const services = [
    {
        id: "winch-spooling",
        title: "WINCH SPOOLING",
        homepageDescription: "Professional spooling ensuring even tension and extended cable life.",
        description: "Our winch spooling service delivers precision layering to maximise cable longevity and operational safety.",
        image: "images/services/service1.jpg",
        link: "winch-spooling.html"
    },
    {
        id: "winch-repairs",
        title: "WINCH REPAIRS & SERVICES",
        homepageDescription: "Maintenance and overhaul solutions to keep your assets operational.",
        description: "We perform diagnostic assessment, component replacement and performance testing to restore winches to optimal condition.",
        image: "images/services/service2.jpg",
        link: "winch-repairs.html"
    },
    {
        id: "custom-winches",
        title: "CUSTOMED WINCH PROJECTS",
        homepageDescription: "Tailored engineering for unique operational challenges.",
        description: "We design and deliver custom winch systems and accessories to meet specialised field requirements.",
        image: "images/services/service1.jpg",
        link: "custom-winches.html"
    },
    {
        id: "vehicle-fitouts",
        title: "VEHICLE FITOUTS",
        homepageDescription: "Integrated mobile workspaces for efficient field logging operations.",
        description: "From ergonomic layouts to equipment integration, our vehicle fitouts optimise operator comfort and productivity.",
        image: "images/services/service2.jpg",
        link: "vehicle-fitouts.html"
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

// Services fade-in animation (supports any number of cards)
function revealServices() {
    const servicesSection = document.querySelector('.services-options');
    if (!servicesSection) return;
    const rect = servicesSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    if (rect.top < windowHeight - 100) {
        const cards = servicesSection.querySelectorAll('.service-card');
        cards.forEach((card, idx) => {
            const cls = idx % 2 === 0 ? 'fade-in-left' : 'fade-in-right';
            card.classList.add(cls);
            // Staggered delay
            card.style.transitionDelay = (0.1 + idx * 0.15) + 's';
        });
        // Remove listener after reveal for performance
        window.removeEventListener('scroll', revealServices);
    }
}
window.addEventListener('scroll', revealServices);
// Run once in case already in view
revealServices();

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


// Populate product category sections
function populateGrid(containerId, filterFn) {
    const container = document.getElementById(containerId);
    if (!container) return;
    products.filter(filterFn).forEach(product => {
        const tile = document.createElement('div');
        tile.className = 'product-page-tile';
        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.name;
        const nameLink = document.createElement('a');
        nameLink.className = 'product-page-name';
        nameLink.href = product.link;
        nameLink.textContent = product.name;
        nameLink.style.textDecoration = 'none';
        tile.appendChild(img);
        tile.appendChild(nameLink);
        container.appendChild(tile);
    });
}

populateGrid('wdt-products', p => p.category === 'wdt');
populateGrid('winch-product-tiles', p => p.category && p.category.startsWith('winch-'));
populateGrid('boom-products', p => p.category === 'boom');
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

        // Set page title
        document.title = `${product.name} - Wireline Engineering`;

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

// Auto-fill contact form subject from URL parameter AND set page title
document.addEventListener('DOMContentLoaded', function() {

    
    // Auto-fill contact form subject
    const urlParams = new URLSearchParams(window.location.search);
    const subject = urlParams.get('subject');
    const subjectField = document.getElementById('subject');
    
    if (subject && subjectField) {
        subjectField.value = decodeURIComponent(subject);
    }
});

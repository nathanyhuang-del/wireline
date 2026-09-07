const imageNames = [
    "independence_group_2-e1338358559631-resized-image-960x240.jpg",
    "independence_group-e1338358711896-resized-image-960x240.jpg",
    "schlumberger_umbilical_reel-e1338358798271-resized-image-960x240.jpg",
    "top_ss_set_1.jpg",
    "top_ss_set_2.jpg",
];

const slideshow = document.querySelector('.slideshow');

if (slideshow) {
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

    setInterval(showSlides, 3000);

    const overlay = document.querySelector('.slideshow-overlay');
    setTimeout(() => {
        if (overlay) overlay.classList.add('visible');
        slideshow.classList.remove('light');
    }, 100);

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

// Mobile menu button
(function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    if (!navToggle || !navMenu) return;

    function setOpen(open) {
        navMenu.classList.toggle('open', open);
        navToggle.classList.toggle('open', open);
        navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    }

    navToggle.addEventListener('click', () => {
        setOpen(!navMenu.classList.contains('open'));
    });

    // Tapping a link, or widening the window back to desktop, closes the menu
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => setOpen(false));
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 900) setOpen(false);
    });
})();

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    if (window.scrollY > 0) {
        navbar.classList.add('transparent');
    } else {
        navbar.classList.remove('transparent');
    }
});

function validateForm() {
    const website = document.getElementById('website').value;
    if (website !== '') {
        return false;
    }
    const message = document.getElementById('message').value;
    if (message.length < 10) {
        alert('Please provide a more detailed message (at least 10 characters).');
        return false;
    }
    alert('Thank you for your message! We will get back to you soon.');
    return true;
}

document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const subject = urlParams.get('subject');
    const subjectField = document.getElementById('subject');
    if (subject && subjectField) {
        subjectField.value = decodeURIComponent(subject);
    }
});

// Every product/service gets its page automatically from the shared template,
// so adding one in the CMS needs no new HTML file.
function productUrl(product) {
    return 'product.html?id=' + encodeURIComponent(product.id);
}

function serviceUrl(service) {
    return 'service.html?id=' + encodeURIComponent(service.id);
}

// The id comes from the element's data attribute (old per-product pages) or,
// on the shared template, from the ?id= value in the address.
function insertId(el, attr) {
    return el.getAttribute(attr) || new URLSearchParams(window.location.search).get('id');
}

function notFoundMessage(what) {
    const box = document.createElement('div');
    box.className = 'not-found';
    const heading = document.createElement('h1');
    heading.textContent = what + ' not found';
    const text = document.createElement('p');
    text.textContent = 'Sorry, we could not find that ' + what.toLowerCase() + '.';
    const back = document.createElement('a');
    back.className = 'enquire-now-btn';
    back.href = what === 'Product' ? 'products.html' : 'services.html';
    back.textContent = 'Back to ' + (what === 'Product' ? 'Products' : 'Services');
    box.appendChild(heading);
    box.appendChild(text);
    box.appendChild(back);
    return box;
}

(async function() {
    const [productsRes, servicesRes] = await Promise.all([
        fetch('/content/products.json'),
        fetch('/content/services.json')
    ]);
    const { products } = await productsRes.json();
    const { services } = await servicesRes.json();

    // Products page category grids
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
            nameLink.href = productUrl(product);
            nameLink.textContent = product.name;
            nameLink.style.textDecoration = 'none';
            tile.appendChild(img);
            tile.appendChild(nameLink);
            container.appendChild(tile);
        });
    }

    populateGrid('wdt-products', p => p.category === 'wdt');
    populateGrid('winch-product-tiles', p => p.category === 'winch');
    populateGrid('boom-products', p => p.category === 'boom');

    // Individual product detail pages
    document.querySelectorAll('.product-insert').forEach(el => {
        const productId = insertId(el, 'data-product-id');
        const product = products.find(p => p.id === productId);
        if (!product) {
            el.replaceWith(notFoundMessage('Product'));
            return;
        }

        const container = document.createElement('div');
        container.className = 'product-display';

        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.name;
        img.className = 'product-display-img';

        const info = document.createElement('div');
        info.className = 'product-display-info';

        const name = document.createElement('h2');
        name.className = 'product-display-name';
        name.textContent = product.name;

        document.title = `${product.name} - Wireline Engineering`;

        const desc = document.createElement('p');
        desc.className = 'product-display-desc';
        desc.textContent = product.description || "";

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

        const wrapper = document.createElement('div');
        wrapper.appendChild(container);

        const hr = document.createElement('hr');
        hr.className = 'product-divider';
        wrapper.appendChild(hr);

        const specsSection = document.createElement('div');
        specsSection.className = 'product-specs-section';

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

        if (product.keyFeatures && product.keyFeatures.length > 0) {
            const infoCol = document.createElement('div');
            infoCol.className = 'additional-info-col';
            const infoTitle = document.createElement('h3');
            infoTitle.textContent = "Key Features";
            infoCol.appendChild(infoTitle);
            const infoList = document.createElement('ul');
            infoList.className = 'product-additional-list';
            product.keyFeatures.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                infoList.appendChild(li);
            });
            infoCol.appendChild(infoList);
            specsSection.appendChild(infoCol);
        }

        wrapper.appendChild(specsSection);
        el.replaceWith(wrapper);
    });

    // Individual service detail pages
    document.querySelectorAll('.service-insert').forEach(el => {
        const serviceId = insertId(el, 'data-service-id');
        const service = services.find(s => s.id === serviceId);
        if (!service) {
            el.replaceWith(notFoundMessage('Service'));
            return;
        }

        const container = document.createElement('div');
        container.className = 'service-display';

        document.title = `${service.title} - Wireline Engineering`;

        const title = document.createElement('h1');
        title.className = 'service-display-title';
        title.textContent = service.title;

        const desc = document.createElement('p');
        desc.className = 'service-display-desc';
        desc.textContent = service.description;

        container.appendChild(title);
        container.appendChild(desc);
        el.replaceWith(container);
    });

})();

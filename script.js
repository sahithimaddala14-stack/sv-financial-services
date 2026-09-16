/* ================================================================
   S V FINANCIAL SERVICES - COMPLETE JAVASCRIPT
   ================================================================ */

/* ================================================================
   CONFIGURATION SECTION - EASILY EDITABLE
   ================================================================ */

const CONFIG = {
    // Company Information
    company: {
        name: "S V Financial Services",
        established: 2017,
        whatsapp: "9133257272",
        phone: "9133257272",
        email: "sesharaogv@gmail.com",
        address: "214/B, Nelagiri Block, Aditya Enclave, Ameerpet, Hyderabad-500016"
    },
    
    // Statistics for the About Page "Our Impact" section
    statistics: [
        {
            title: "PERSONALIZED SOLUTIONS",
            description: "Financing options tailored to your needs"
        },
        {
            title: "TRANSPARENT PROCESS",
            description: "Clear guidance at every step"
        },
        {
            title: "ONGOING SUPPORT",
            description: "We're with you throughout"
        },
        {
            title: "TRUSTED BANKING NETWORK",
            description: "Connecting you with a wide network of banking partners"
        }
    ],

    // Homepage Trust Section — key company facts
    trustStatistics: [
        { value: "2017", label: "Established" },
        { value: "36+", label: "Banks & NBFC's" }
    ],
    
    // Loan Products by Category (legacy grouping — retained, no longer rendered directly)
    loanProducts: {
        PERSONAL: ["Education Loans", "Personal Loans", "Professional Loans"],
        HOME: ["Home Loans", "Mortgage Loans"],
        VEHICLE: ["Car Loans", "Commercial Vehicle Loans"],
        BUSINESS: ["Business Loans", "Equipment Loans"],
        PROFESSIONAL: ["Professional Loans"],
        OTHER: ["CC & BG's"]
    },

    // Loan Solutions — cinematic section. One entry per EXISTING product above,
    // flattened into user-friendly nav labels. No products added or removed.
    // Descriptions are generic, factual category definitions only — no rates,
    // eligibility, approval timelines, or guarantees are stated.
    loanSolutions: [
        {
            key: "home",
            navLabel: "Home Loans",
            productName: "Home Loans",
            description: "Explore this solution with S V Financial Services.",
            icon: "home",
            href: "home-loans.html"
        },
        {
            key: "business",
            navLabel: "Business Loans",
            productName: "Business Loans",
            description: "Explore this solution with S V Financial Services.",
            icon: "business",
            href: "business-loans.html"
        },
        {
            key: "personal",
            navLabel: "Personal Loans",
            productName: "Personal Loans",
            description: "Explore this solution with S V Financial Services.",
            icon: "personal",
            href: "personal-loans.html"
        },
        {
            key: "professional",
            navLabel: "Professional Loans",
            productName: "Professional Loans",
            description: "Explore this solution with S V Financial Services.",
            icon: "professional",
            href: "professional-loans.html"
        },
        {
            key: "mortgage",
            navLabel: "Mortgage Loans",
            productName: "Mortgage Loans",
            description: "Explore this solution with S V Financial Services.",
            icon: "mortgage",
            href: "mortgage-loans.html"
        },
        {
            key: "vehicle",
            navLabel: "Car Loans",
            productName: "Car Loans",
            description: "Explore this solution with S V Financial Services.",
            icon: "vehicle",
            href: "car-loans.html"
        },
        {
            key: "commercial-vehicle",
            navLabel: "Commercial Vehicle Loans",
            productName: "Commercial Vehicle Loans",
            description: "Explore this solution with S V Financial Services.",
            icon: "truck",
            href: "commercial-vehicle-loans.html"
        },
        {
            key: "cc-bg",
            navLabel: "CC & BG's",
            productName: "CC & BG's",
            description: "Explore this solution with S V Financial Services.",
            icon: "shield",
            href: "cc-bg-loans.html"
        },
        {
            key: "education",
            navLabel: "Education Loans",
            productName: "Education Loans",
            description: "Explore this solution with S V Financial Services.",
            icon: "education",
            href: "education-loans.html"
        },
        {
            key: "equipment",
            navLabel: "Equipment Loans",
            productName: "Equipment Loans",
            description: "Explore this solution with S V Financial Services.",
            icon: "equipment",
            href: "equipment-loans.html"
        }
    ],

    // Supporting strip content — drawn only from the existing "Why Choose Us"
    // features already on the site (see CONFIG.features below).
    loanStripItems: [
        "Personalized Solutions",
        "Multiple Banking Partners",
        "Minimal Documentation",
        "Ongoing Support"
    ],
    
    // Banking Partners (Easily updatable)
    bankingPartners: [
        "HDFC Bank",
        "IDFC Bank",
        "Axis Bank",
        "Kotak Bank",
        "Yes Bank",
        "IndusInd Bank",
        "Bajaj Finserv",
        "Tata Capital",
        "L&T Finance",
        "Protium",
        "Poonawalla Fincorp",
        "Aditya Birla",
        "Fullerton"
    ],
    
    // Why Choose Us Features
    features: [
        {
            number: "36+",
            title: "Banking Partners",
            description: "Access to a diverse network of banking partners across India."
        },
        {
            number: "10+",
            title: "Loan Solutions",
            description: "Multiple loan solutions for different financial needs."
        },
        {
            number: "2017",
            title: "Established",
            description: "Serving clients with financial solutions since 2017."
        },
        {
            number: "2",
            title: "Employment Types",
            description: "Solutions for both salaried and self-employed applicants."
        },
        {
            number: "Simple",
            title: "Documentation",
            description: "Minimal documentation support based on lender requirements."
        },
        {
            number: "End-to-End",
            title: "Support",
            description: "Personalized guidance throughout the financing process."
        }
    ],

    // Eligibility Calculator Rules
    eligibilityRules: {
        salaried: [
            { min: 20000, max: 40000, loan: "up to ₹10,00,000" },
            { min: 40000, max: 80000, loan: "up to ₹20,00,000" },
            { min: 80000, max: 120000, loan: "approximately ₹30,00,000–₹40,00,000" },
            { min: 120000, max: Infinity, loan: "₹50,00,000+" }
        ],
        selfEmployed: [
            { min: 1, max: 3, label: "₹1 Cr–₹3 Cr", loan: "₹10,00,000–₹1 Cr" },
            { min: 3, max: 5, label: "₹3 Cr–₹5 Cr", loan: "₹1 Cr–₹3 Cr" },
            { min: 5, max: 10, label: "₹5 Cr–₹10 Cr", loan: "₹3 Cr–₹6 Cr" },
            { min: 10, max: 15, label: "₹10 Cr–₹15 Cr", loan: "₹6 Cr–₹9 Cr" },
            { min: 15, max: Infinity, label: "₹15 Cr+", loan: "above ₹10 Cr" }
        ]
    },
    
    // How It Works Timeline
    timeline: [
        {
            number: "01",
            title: "Apply Online",
            description: "Complete a simple online application with your basic details."
        },
        {
            number: "02",
            title: "Document Verification",
            description: "Submit required documents for quick verification."
        },
        {
            number: "03",
            title: "Loan Approval",
            description: "Get loan approval from our partner banks."
        },
        {
            number: "04",
            title: "Disbursement",
            description: "Receive funds directly to your account."
        }
    ],
    
    // About Page - Core Values
    coreValues: [
        "Integrity",
        "Transparency",
        "Client-centricity",
        "Innovation",
        "Excellence"
    ],
    
    // About Page - Promise
    promise: [
        "Personalized solutions",
        "Competitive rates",
        "Minimal documentation",
        "Ongoing support throughout your financial journey"
    ],
    
    // About Page - Journey Timeline
    journeyTimeline: [
        {
            year: 2017,
            title: "Foundation",
            description: "S V Financial Services was established with a mission to simplify access to financial solutions."
        },
        {
            year: "2019",
            title: "Expansion",
            description: "Expanded our network and reach across India."
        }
    ],
    
    // About Page - Leadership
    leadership: [
        {
            name: "Hema Latha",
            title: "Director & Founder",
            image: "assets/leaders/hema-latha.jpeg"
        },
        {
            name: "GV Sesha Rao",
            title: "Director",
            image: "assets/leaders/hemanth-kumar.jpeg"
        },
        {
            name: "Hemanth Kumar",
            title: "Director",
            image: "assets/leaders/gv-sesha-rao.jpeg"
        }
    ],
    
    // FAQ
    faq: [
        {
            question: "What financial solutions does S V Financial Services offer?",
            answer: "We offer a wide range of loan solutions including Education Loans, Personal Loans, Home Loans, Business Loans, Car Loans, and more through our network of 36+ banking partners."
        },
        {
            question: "Who can apply for your loan solutions?",
            answer: "We serve both salaried individuals and self-employed professionals. Our eligibility checker can help you understand your indicative loan eligibility based on your income or annual turnover."
        },
        {
            question: "How does the eligibility checker work?",
            answer: "The eligibility checker is a quick assessment tool that provides an indicative loan amount based on your employment type and income. It's not a final approval but helps you understand your potential eligibility."
        },
        {
            question: "What documents may be required?",
            answer: "Document requirements vary based on the loan type and lender. Typically, you'll need identity proof, income documents, bank statements, and other basic verification documents. Our team will guide you through the specific requirements."
        },
        {
            question: "Does checking eligibility guarantee loan approval?",
            answer: "No. The eligibility checker provides an indicative assessment. Final eligibility, loan amount, interest rate, and approval are subject to lender assessment and applicable criteria."
        },
        {
            question: "How can I contact the S V Financial Services team?",
            answer: "You can contact us via phone, email, or WhatsApp. Use the contact information in the footer or click 'Talk to Our Team' to connect with our advisors."
        }
    ]
};

// ================================================================
// NAVIGATION HANDLING
// ================================================================

function setupNavigation() {
    const header = document.getElementById('header');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMenuBtn = document.getElementById('closeMenuBtn');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-menu-link');
    
    // Handle scroll for header background
    const updateHeaderState = () => {
        if (!header) return;
        header.classList.toggle('scrolled', window.scrollY > 24);
    };
    window.addEventListener('scroll', updateHeaderState, { passive: true });
    updateHeaderState();
    
    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.add('active');
    });
    
    closeMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
    
    // Close mobile menu when link clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });
    
    // Update current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();
}

// ================================================================
// SCROLL ANIMATIONS - INTERSECTION OBSERVER
// ================================================================

function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const animateTrustValue = (valueElement) => {
        const target = Number(valueElement.dataset.countTarget);
        if (!Number.isFinite(target) || valueElement.dataset.counted === 'true') return;

        valueElement.dataset.counted = 'true';
        if (reduceMotion.matches) {
            valueElement.textContent = `${target}${valueElement.dataset.countSuffix || ''}`;
            return;
        }

        const duration = 600;
        const startTime = performance.now();
        const updateValue = (currentTime) => {
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const easedProgress = 1 - Math.pow(1 - progress, 3);
            valueElement.textContent = `${Math.round(target * easedProgress)}${valueElement.dataset.countSuffix || ''}`;
            if (progress < 1) {
                requestAnimationFrame(updateValue);
            }
        };

        requestAnimationFrame(updateValue);
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                const trustValue = entry.target.querySelector('.trust-value[data-count-target]');
                if (trustValue) animateTrustValue(trustValue);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.trust-card, .feature-item, .partner-card, .faq-item, .value-item, .promise-item, .journey-step, .award-item, .leader-card, .timeline-step, .product-card').forEach(el => {
        observer.observe(el);
    });
}

// ================================================================
// SECTION 02: TRUST PRINCIPLES
// ================================================================

function renderStatistics() {
    const trustGrid = document.getElementById('trustGrid');
    
    CONFIG.trustStatistics.forEach(stat => {
        const card = document.createElement('div');
        card.className = 'trust-card trust-card--refined';
        card.innerHTML = `
            <span class="trust-value" data-count-target="${parseInt(stat.value, 10)}" data-count-suffix="${stat.value.replace(/[0-9]/g, '')}">0${stat.value.replace(/[0-9]/g, '')}</span>
            <span class="trust-label">${stat.label}</span>
        `;
        trustGrid.appendChild(card);
    });
}

// ================================================================
// SECTION 03: LOAN SOLUTIONS - CINEMATIC EXPLORER
// ================================================================

const LOAN_NAV_ICONS = {
    home: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9 L10 3 L17 9"/><path d="M5 8 V16 H15 V8"/></svg>',
    business: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="7" width="14" height="9" rx="1"/><path d="M7.5 7 V5 H12.5 V7"/></svg>',
    education: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 7.5 L10 4 L18 7.5 L10 11 Z"/><path d="M5.5 9.2 V13.5 C5.5 14.8 7.5 15.8 10 15.8 C12.5 15.8 14.5 14.8 14.5 13.5 V9.2"/></svg>',
    vehicle: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 13 L4.5 8 H15.5 L17 13"/><rect x="2.5" y="13" width="15" height="3" rx="1"/><circle cx="6" cy="16" r="1.2"/><circle cx="14" cy="16" r="1.2"/></svg>',
    professional: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="10" cy="6.5" r="3"/><path d="M4 17 C4 13 6.5 11.5 10 11.5 C13.5 11.5 16 13 16 17"/></svg>',
    personal: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="10" cy="6" r="3.2"/><path d="M3.5 17 C3.5 13.2 6.4 11.5 10 11.5 C13.6 11.5 16.5 13.2 16.5 17"/></svg>',
    mortgage: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="6.5" cy="7.5" r="3"/><path d="M8.7 9.7 L16 17 M12.5 13.5 L15 11 M14.5 15.5 L17 13"/></svg>',
    equipment: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="10" cy="10" r="2.6"/><path d="M10 3.5 V6 M10 14 V16.5 M16.5 10 H14 M6 10 H3.5 M14.9 5.1 L13.1 6.9 M6.9 13.1 L5.1 14.9 M14.9 14.9 L13.1 13.1 M6.9 6.9 L5.1 5.1"/></svg>',
    truck: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="8" width="8" height="6" rx="1"/><path d="M10 10 H14.5 L17 12.5 V14 H10 Z"/><circle cx="5.5" cy="15.2" r="1.2"/><circle cx="14" cy="15.2" r="1.2"/></svg>',
    shield: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2.5 L16.5 5 V9.5 C16.5 13.2 13.7 16 10 17.5 C6.3 16 3.5 13.2 3.5 9.5 V5 Z"/></svg>'
};

// Add the business WhatsApp number in international format without + or spaces.
const WHATSAPP_NUMBER = CONFIG.company.whatsapp !== "REPLACE_WITH_BUSINESS_WHATSAPP_NUMBER"
    ? CONFIG.company.whatsapp
    : "";

// Loan solutions images - one per loan type
const LOAN_VISUALS = {
    home: "assets/loans/Home loan.png",
    business: "assets/loans/business loan.png",
    education: "assets/loans/education loan.png",
    vehicle: "assets/loans/car loan.png",
    professional: "assets/loans/professional loan.png",
    personal: "assets/loans/personal loan.png",
    mortgage: "assets/loans/Mortgage loan.png",
    equipment: "assets/loans/Equipment loan.png",
    "commercial-vehicle": "assets/loans/Commercial Vehicle loan.png",
    "cc-bg": "assets/loans/CC & BG's.png"
};

function setupLoanSolutions() {
    const nav = document.getElementById('loanNav');
    if (!nav) return;

    CONFIG.loanSolutions.forEach((item, index) => {
        const link = document.createElement('a');
        link.className = 'loan-nav__item' + (index === 0 ? ' active' : '');
        link.href = item.href;
        link.dataset.key = item.key;
        link.innerHTML = `
            <span class="loan-nav__icon">${LOAN_NAV_ICONS[item.icon] || ''}</span>
            <span class="loan-nav__label">${item.navLabel}</span>
        `;

        link.addEventListener('click', () => {
            document.querySelectorAll('.loan-nav__item').forEach(el => el.classList.remove('active'));
            link.classList.add('active');
        });

        nav.appendChild(link);
    });

    // Show the first solution by default
    displayLoanContent(CONFIG.loanSolutions[0].key);
}

function openLoanWhatsApp(item) {
    // Lead-generation routing is intentionally disabled until the real business
    // WhatsApp number is supplied. This prevents us from inventing a contact number.
    if (!WHATSAPP_NUMBER) return;

    const message = `Hi S V Financial Services, I am interested in ${item.productName}. Please share more details.`;
    const url = `https://wa.me/91${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
}

function displayLoanContent(key) {
    const container = document.getElementById('loanContent');
    const imageElement = document.getElementById('loanImage');
    if (!container) return;

    const item = CONFIG.loanSolutions.find(sol => sol.key === key);
    if (!item) return;

    container.innerHTML = `
        <span class="loan-content__name">${item.productName}</span>
        <p class="loan-content__desc">${item.description}</p>
    `;

    // Update the loan image with smooth crossfade
    if (imageElement && LOAN_VISUALS[key]) {
        const newImageSrc = LOAN_VISUALS[key];
        if (imageElement.src !== newImageSrc) {
            // Fade out
            imageElement.classList.add('is-changing');
            
            // Preload the new image
            const preloadImg = new Image();
            preloadImg.onload = () => {
                // Change the image
                imageElement.src = newImageSrc;
                imageElement.alt = item.productName;
                
                // Fade in
                setTimeout(() => {
                    imageElement.classList.remove('is-changing');
                }, 50);
            };
            preloadImg.src = newImageSrc;
        }
    }

    // Give the persistent coin a subtle pulse for responsiveness
    pulsePersistentCoin();
}

function renderLoanStrip() {
    const container = document.getElementById('loanStrip');
    if (!container) return;

    CONFIG.loanStripItems.forEach(label => {
        const el = document.createElement('div');
        el.className = 'loan-strip__item';
        el.innerHTML = `<span class="loan-strip__label">${label}</span>`;
        container.appendChild(el);
    });
}

// ================================================================
// PERSISTENT ₹ COIN — single global signature visual
// One fixed-position DOM element (#persistentRupee) that travels
// between predefined per-section "safe" anchor points as the user
// scrolls. Position/scale/opacity are interpolated (eased + damped)
// every animation frame — never snapped, never DOM-heavy on scroll.
// ================================================================

// Anchor point per major homepage section: { x, y } are viewport %
// (vw/vh) for the coin's center, scale/opacity control prominence.
// WAVE PATTERN: LEFT → CENTER → RIGHT → CENTER → LEFT → CENTER → RIGHT
// This creates a flowing, physical-feeling journey through the page.
const COIN_ANCHORS = [
    { id: 'home',            x: 12, y: 46, scale: 1.20, opacity: 1.00 }, // HERO: Far LEFT, prominent & large
    { id: 'trust',           x: 50, y: 50, scale: 0.75, opacity: 0.70 }, // CENTER, transitional
    { id: 'services',        x: 88, y: 52, scale: 1.40, opacity: 0.95 }, // FAR RIGHT, main centerpiece
    { id: 'eligibility',     x: 50, y: 45, scale: 0.80, opacity: 0.70 }, // CENTER, form area
    { id: 'why-us',          x: 15, y: 35, scale: 0.90, opacity: 0.80 }, // LEFT, features grid
    { id: 'partners',        x: 50, y: 30, scale: 0.70, opacity: 0.65 }, // CENTER, partner logos
    { id: 'how-it-works',    x: 88, y: 50, scale: 0.65, opacity: 0.60 }, // FAR RIGHT, timeline
    { id: 'emi-calculator',  x: 50, y: 15, scale: 0.55, opacity: 0.50 }, // CENTER, calculator
    { id: 'about-preview',   x: 12, y: 70, scale: 0.65, opacity: 0.65 }, // LEFT, about section
    { id: 'faq',             x: 50, y: 50, scale: 0.60, opacity: 0.55 }, // CENTER, accordion
    { id: 'contact-cta',     x: 88, y: 30, scale: 1.00, opacity: 0.90 }  // FAR RIGHT, closing
];

// Simplified path for narrow viewports — same wave pattern, but
// much smaller horizontal travel and reduced prominence.
// Still LEFT → CENTER → RIGHT but in a tighter range.
const COIN_ANCHORS_MOBILE = [
    { id: 'home',            x: 15, y: 16, scale: 0.75, opacity: 0.85 },   // LEFT
    { id: 'trust',           x: 50, y: 12, scale: 0.50, opacity: 0.55 },   // CENTER
    { id: 'services',        x: 85, y: 14, scale: 0.80, opacity: 0.80 },   // RIGHT
    { id: 'eligibility',     x: 50, y: 10, scale: 0.55, opacity: 0.60 },   // CENTER
    { id: 'why-us',          x: 18, y: 10, scale: 0.60, opacity: 0.65 },   // LEFT
    { id: 'partners',        x: 50, y: 10, scale: 0.50, opacity: 0.55 },   // CENTER
    { id: 'how-it-works',    x: 82, y: 10, scale: 0.50, opacity: 0.50 },   // RIGHT
    { id: 'emi-calculator',  x: 50, y: 8,  scale: 0.45, opacity: 0.45 },   // CENTER
    { id: 'about-preview',   x: 15, y: 12, scale: 0.50, opacity: 0.55 },   // LEFT
    { id: 'faq',             x: 50, y: 10, scale: 0.45, opacity: 0.48 },   // CENTER
    { id: 'contact-cta',     x: 85, y: 14, scale: 0.70, opacity: 0.75 }    // RIGHT
];

// Fixed, static anchor used whenever the user prefers reduced motion —
// no travel, no spin, just a quiet, centered presence.
const COIN_REDUCED_MOTION_ANCHOR = { x: 50, y: 50, scale: 0.65, opacity: 0.60 };

function setupPersistentCoin() {
    const coin = document.getElementById('persistentRupee');
    if (!coin) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (reduceMotion.matches) {
        coin.style.setProperty('--rupee-x', COIN_REDUCED_MOTION_ANCHOR.x);
        coin.style.setProperty('--rupee-y', COIN_REDUCED_MOTION_ANCHOR.y);
        coin.style.setProperty('--rupee-scale', COIN_REDUCED_MOTION_ANCHOR.scale);
        coin.style.setProperty('--rupee-opacity', COIN_REDUCED_MOTION_ANCHOR.opacity);
        return; // no scroll listener, no rAF loop, no spin (handled in CSS)
    }

    const isMobile = () => window.innerWidth < 768;

    // Cache each anchor section's vertical CENTER in document coordinates.
    // Recomputed on load/resize only — never read from layout during scroll.
    let anchorCenters = [];
    let activeAnchors = COIN_ANCHORS;

    function recalculate() {
        activeAnchors = isMobile() ? COIN_ANCHORS_MOBILE : COIN_ANCHORS;
        anchorCenters = activeAnchors.map(anchor => {
            const el = document.getElementById(anchor.id);
            if (!el) return null;
            const rect = el.getBoundingClientRect();
            const top = rect.top + window.scrollY;
            return top + el.offsetHeight / 2;
        });
    }

    function computeTarget() {
        const viewportCenter = window.scrollY + window.innerHeight / 2;

        // Before the first anchor or if nothing resolved — hold at the first anchor.
        let i = 0;
        while (i < anchorCenters.length - 1 && anchorCenters[i + 1] !== null && viewportCenter > anchorCenters[i + 1]) {
            i++;
        }

        const a = activeAnchors[i];
        const b = activeAnchors[Math.min(i + 1, activeAnchors.length - 1)];
        const centerA = anchorCenters[i];
        const centerB = anchorCenters[Math.min(i + 1, anchorCenters.length - 1)];

        let t = 0;
        if (centerA !== null && centerB !== null && centerB !== centerA) {
            t = (viewportCenter - centerA) / (centerB - centerA);
            t = Math.max(0, Math.min(1, t));
        }
        // Smoothstep easing between anchors for a more cinematic transition.
        const eased = t * t * (3 - 2 * t);

        // Fade out after the very last anchor (approaching the footer).
        let fadeMultiplier = 1;
        const lastCenter = anchorCenters[anchorCenters.length - 1];
        if (lastCenter !== null && viewportCenter > lastCenter) {
            const footer = document.querySelector('.footer');
            if (footer) {
                const footerTop = footer.getBoundingClientRect().top + window.scrollY;
                const distanceIntoFooter = viewportCenter - footerTop;
                fadeMultiplier = Math.max(0, 1 - distanceIntoFooter / 300);
            }
        }

        return {
            x: a.x + (b.x - a.x) * eased,
            y: a.y + (b.y - a.y) * eased,
            scale: a.scale + (b.scale - a.scale) * eased,
            opacity: (a.opacity + (b.opacity - a.opacity) * eased) * fadeMultiplier
        };
    }

    // Current (rendered) and target (computed) state, smoothly damped together.
    const current = { x: 82, y: 46, scale: 1.15, opacity: 0 };
    const SMOOTHING = 0.09;
    const EPSILON = 0.05;
    let rafId = null;

    function tick() {
        const target = computeTarget();
        let stillMoving = false;

        ['x', 'y', 'scale', 'opacity'].forEach(prop => {
            const delta = target[prop] - current[prop];
            if (Math.abs(delta) > EPSILON) stillMoving = true;
            current[prop] += delta * SMOOTHING;
        });

        coin.style.setProperty('--rupee-x', current.x.toFixed(2));
        coin.style.setProperty('--rupee-y', current.y.toFixed(2));
        coin.style.setProperty('--rupee-scale', current.scale.toFixed(3));
        coin.style.setProperty('--rupee-opacity', current.opacity.toFixed(3));

        if (stillMoving) {
            rafId = requestAnimationFrame(tick);
        } else {
            rafId = null; // settle — stop the loop until scroll/resize wakes it again
        }
    }

    function wake() {
        if (rafId === null) {
            rafId = requestAnimationFrame(tick);
        }
    }

    window.addEventListener('scroll', wake, { passive: true });
    window.addEventListener('resize', () => {
        recalculate();
        wake();
    }, { passive: true });

    recalculate();
    wake();
}

function pulsePersistentCoin() {
    const coin = document.getElementById('persistentRupee');
    if (!coin) return;
    coin.classList.remove('is-pulsing');
    // Force reflow so the animation can retrigger on rapid consecutive clicks.
    void coin.offsetWidth;
    coin.classList.add('is-pulsing');
    window.setTimeout(() => coin.classList.remove('is-pulsing'), 700);
}

// ================================================================
// SECTION 04: LOAN ELIGIBILITY CHECKER
// ================================================================

let eligibilityState = {
    employmentType: null,
    income: null,
    result: null
};

function setupEligibilityChecker() {
    const container = document.getElementById('eligibilityContainer');
    renderEligibilityStep1(container);
    
    // Connect buttons
    document.getElementById('checkEligibilityHero').addEventListener('click', () => {
        container.scrollIntoView({ behavior: 'smooth' });
    });
    
    document.getElementById('exploreSolutions').addEventListener('click', () => {
        document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
    });
}

function renderEligibilityStep1(container) {
    container.innerHTML = `
        <div class="eligibility-step active">
            <div class="eligibility-question">What best describes you?</div>
            <div class="eligibility-options">
                <button class="option-button" data-type="salaried">Salaried</button>
                <button class="option-button" data-type="self-employed">Self-employed</button>
            </div>
        </div>
    `;
    
    container.querySelectorAll('.option-button').forEach(btn => {
        btn.addEventListener('click', (e) => {
            eligibilityState.employmentType = e.target.dataset.type;
            renderEligibilityStep2(container);
        });
    });
}

function renderEligibilityStep2(container) {
    const isSalaried = eligibilityState.employmentType === 'salaried';
    const question = isSalaried ? "What's your monthly income?" : "What's your annual turnover?";
    const rules = isSalaried ? CONFIG.eligibilityRules.salaried : CONFIG.eligibilityRules.selfEmployed;
    
    let incomeHtml = '<div class="income-buttons">';
    
    rules.forEach((rule, index) => {
        let label = '';
        if (isSalaried) {
            if (rule.min === 120000) {
                label = `₹${(rule.min / 1000).toFixed(0)}k+`;
            } else {
                label = `₹${(rule.min / 1000).toFixed(0)}k – ₹${(rule.max / 1000).toFixed(0)}k`;
            }
        } else {
            label = rule.label;
        }
        
        incomeHtml += `
            <button class="income-button" data-rule-index="${index}">
                <strong>${label}</strong><br>
                <small>Indicative: ${rule.loan}</small>
            </button>
        `;
    });
    
    incomeHtml += '</div>';
    
    container.innerHTML = `
        <div class="eligibility-step active">
            <div class="eligibility-question">${question}</div>
            ${incomeHtml}
        </div>
    `;
    
    container.querySelectorAll('.income-button').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const ruleIndex = parseInt(e.currentTarget.dataset.ruleIndex);
            eligibilityState.income = ruleIndex;
            renderEligibilityResult(container);
        });
    });
}

function renderEligibilityResult(container) {
    const isSalaried = eligibilityState.employmentType === 'salaried';
    const rules = isSalaried ? CONFIG.eligibilityRules.salaried : CONFIG.eligibilityRules.selfEmployed;
    const result = rules[eligibilityState.income];
    
    eligibilityState.result = result.loan;
    
    container.innerHTML = `
        <div class="eligibility-step active">
            <div class="result-card">
                <div class="result-title">Indicative Eligibility</div>
                <div class="result-amount">${result.loan}</div>
                <div class="result-disclaimer">
                    Loan amount may differ. Final eligibility, loan amount, interest rate and approval are subject to lender assessment and applicable criteria.
                </div>
            </div>
            
            <div class="eligibility-question" style="font-size: 16px; margin-bottom: 24px;">Want to explore your options?</div>
            
            <form class="lead-capture-form" id="leadForm">
                <div class="form-group">
                    <label for="leadName">Name *</label>
                    <input type="text" id="leadName" placeholder="Your full name" required>
                </div>
                
                <div class="form-group">
                    <label for="leadPhone">Mobile Number *</label>
                    <input type="tel" id="leadPhone" placeholder="10-digit mobile number" pattern="[0-9]{10}" required>
                </div>
                
                <div class="checkbox-group">
                    <input type="checkbox" id="whatsappPreference" checked>
                    <label for="whatsappPreference">Yes, contact me on WhatsApp</label>
                </div>
                
                <button type="submit" class="whatsapp-button">TALK TO US ON WHATSAPP</button>
            </form>
        </div>
    `;
    
    // Handle form submission
    document.getElementById('leadForm').addEventListener('submit', handleWhatsAppSubmit);
}

function handleWhatsAppSubmit(e) {
    e.preventDefault();
    
    const name = document.getElementById('leadName').value.trim();
    const phone = document.getElementById('leadPhone').value.trim();
    const whatsappPreference = document.getElementById('whatsappPreference').checked;
    
    // Validate
    if (!name || name.length < 2) {
        alert('Please enter a valid name');
        return;
    }
    
    if (!phone || phone.length !== 10) {
        alert('Please enter a valid 10-digit mobile number');
        return;
    }
    
    // Generate WhatsApp message
    const message = `Hi, I'm interested in exploring financial solutions.\n\nName: ${name}\nPhone: ${phone}\nEmployment Type: ${eligibilityState.employmentType === 'salaried' ? 'Salaried' : 'Self-employed'}\nIndicative Eligibility: ${eligibilityState.result}\n\nPlease help me understand my available options.`;
    
    // Open WhatsApp with pre-filled message
    const whatsappNumber = CONFIG.company.whatsapp;
    if (whatsappNumber === "REPLACE_WITH_BUSINESS_WHATSAPP_NUMBER") {
        alert('WhatsApp number not configured. Please contact support.');
        return;
    }
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/91${whatsappNumber}?text=${encodedMessage}`;
    
    // Open in new tab
    window.open(whatsappURL, '_blank');
}

// ================================================================
// SECTION 05: WHY CHOOSE US
// ================================================================

function renderWhyChooseUs() {
    const container = document.getElementById('featuresGrid');
    
    CONFIG.features.forEach((feature, index) => {
        const item = document.createElement('div');
        item.className = 'feature-item feature-item--enhanced';
        item.style.animationDelay = (index * 100) + 'ms';
        item.innerHTML = `
            <div class="feature-number">${feature.number}</div>
            <div class="feature-title">${feature.title}</div>
            <div class="feature-description">${feature.description}</div>
        `;
        container.appendChild(item);
    });
}

// ================================================================
// SECTION 06: BANKING PARTNERS
// ================================================================

function renderBankingPartners() {
    const container = document.getElementById('partnersGrid');
    
    CONFIG.bankingPartners.forEach((partner, index) => {
        const card = document.createElement('div');
        card.className = 'partner-card';
        card.style.animationDelay = (index * 50) + 'ms';
        card.innerHTML = `<div class="partner-name">${partner}</div>`;
        container.appendChild(card);
    });
}

// ================================================================
// SECTION 07: HOW IT WORKS
// ================================================================

function renderTimeline() {
    const container = document.getElementById('timeline');
    
    CONFIG.timeline.forEach((step, index) => {
        const stepEl = document.createElement('div');
        stepEl.className = 'timeline-step timeline-step--enhanced';
        stepEl.style.animationDelay = (index * 100) + 'ms';
        stepEl.innerHTML = `
            <div class="timeline-number">${step.number}</div>
            <div class="timeline-content">
                <div class="timeline-title">${step.title}</div>
                <div class="timeline-description">${step.description}</div>
            </div>
        `;
        container.appendChild(stepEl);
    });
}

// ================================================================
// SECTION 08: EMI CALCULATOR
// ================================================================

function setupEmiCalculator() {
    const loanAmountSlider = document.getElementById('loanAmountSlider');
    const loanAmountInput = document.getElementById('loanAmountInput');
    const interestRateSlider = document.getElementById('interestRateSlider');
    const interestRateInput = document.getElementById('interestRateInput');
    const loanTenureSlider = document.getElementById('loanTenureSlider');
    const loanTenureInput = document.getElementById('loanTenureInput');
    
    // Sync slider and input
    loanAmountSlider.addEventListener('input', (e) => {
        loanAmountInput.value = e.target.value;
        calculateEMI();
    });
    
    loanAmountInput.addEventListener('input', (e) => {
        let value = parseInt(e.target.value) || 0;
        if (value > 10000000) value = 10000000;
        if (value < 100000) value = 100000;
        loanAmountSlider.value = value;
        loanAmountInput.value = value;
        calculateEMI();
    });
    
    interestRateSlider.addEventListener('input', (e) => {
        interestRateInput.value = e.target.value;
        calculateEMI();
    });
    
    interestRateInput.addEventListener('input', (e) => {
        let value = parseFloat(e.target.value) || 4;
        if (value > 15) value = 15;
        if (value < 4) value = 4;
        interestRateSlider.value = value;
        interestRateInput.value = value;
        calculateEMI();
    });
    
    loanTenureSlider.addEventListener('input', (e) => {
        loanTenureInput.value = e.target.value;
        calculateEMI();
    });
    
    loanTenureInput.addEventListener('input', (e) => {
        let value = parseInt(e.target.value) || 60;
        if (value > 360) value = 360;
        if (value < 12) value = 12;
        loanTenureSlider.value = value;
        loanTenureInput.value = value;
        calculateEMI();
    });
    
    // Initial calculation
    calculateEMI();
}

function calculateEMI() {
    const principal = parseInt(document.getElementById('loanAmountInput').value) || 500000;
    const rate = parseFloat(document.getElementById('interestRateInput').value) || 9;
    const tenure = parseInt(document.getElementById('loanTenureInput').value) || 60;
    
    // EMI Formula: EMI = P * R * (1 + R)^N / ((1 + R)^N - 1)
    const monthlyRate = rate / 12 / 100;
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, tenure)) / 
                (Math.pow(1 + monthlyRate, tenure) - 1);
    
    const totalPayable = emi * tenure;
    const totalInterest = totalPayable - principal;
    
    // Update display
    document.getElementById('monthlyEmi').textContent = '₹' + formatNumber(Math.round(emi));
    document.getElementById('totalInterest').textContent = '₹' + formatNumber(Math.round(totalInterest));
    document.getElementById('totalPayable').textContent = '₹' + formatNumber(Math.round(totalPayable));
    
    // Draw chart
    drawChart(principal, totalInterest);
}

function drawChart(principal, interest) {
    const canvas = document.getElementById('emiChart');
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(canvas.width, canvas.height) / 3;
    
    const total = principal + interest;
    const principalAngle = (principal / total) * 2 * Math.PI;
    
    // Draw principal slice
    ctx.fillStyle = '#D4A574';
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, 0, principalAngle);
    ctx.lineTo(centerX, centerY);
    ctx.fill();
    
    // Draw interest slice
    ctx.fillStyle = '#E8F0F8';
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, principalAngle, 2 * Math.PI);
    ctx.lineTo(centerX, centerY);
    ctx.fill();
}

function formatNumber(num) {
    if (num >= 10000000) {
        return (num / 10000000).toFixed(1) + ' Cr';
    } else if (num >= 100000) {
        return (num / 100000).toFixed(1) + ' Lakh';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(0) + 'K';
    }
    return num.toString();
}

// ================================================================
// SECTION 10: FAQ ACCORDION
// ================================================================

function setupFAQ() {
    const container = document.getElementById('faqContainer');
    
    CONFIG.faq.forEach((item, index) => {
        const faqItem = document.createElement('div');
        faqItem.className = 'faq-item';
        faqItem.style.animationDelay = (index * 50) + 'ms';
        faqItem.innerHTML = `
            <button class="faq-question">${item.question}</button>
            <div class="faq-answer">
                <div class="faq-answer-text">${item.answer}</div>
            </div>
        `;
        
        container.appendChild(faqItem);
        
        // Add click handler
        const question = faqItem.querySelector('.faq-question');
        const answer = faqItem.querySelector('.faq-answer');
        
        question.addEventListener('click', () => {
            const isOpen = question.classList.contains('open');
            
            // Close all FAQ items
            document.querySelectorAll('.faq-question').forEach(q => q.classList.remove('open'));
            document.querySelectorAll('.faq-answer').forEach(a => a.classList.remove('open'));
            
            // Open clicked item
            if (!isOpen) {
                question.classList.add('open');
                answer.classList.add('open');
            }
        });
    });
}

// ================================================================
// ABOUT PAGE - CORE VALUES
// ================================================================

function renderCoreValues() {
    const container = document.getElementById('valuesGrid');
    if (!container) return;
    
    CONFIG.coreValues.forEach((value, index) => {
        const item = document.createElement('div');
        item.className = 'value-item value-item--enhanced';
        item.style.animationDelay = (index * 100) + 'ms';
        item.innerHTML = `<div class="value-name">${value}</div>`;
        container.appendChild(item);
    });
}

// ================================================================
// ABOUT PAGE - PROMISE
// ================================================================

function renderPromise() {
    const container = document.getElementById('promiseGrid');
    if (!container) return;
    
    CONFIG.promise.forEach((item, index) => {
        const promiseItem = document.createElement('div');
        promiseItem.className = 'promise-item promise-item--enhanced';
        promiseItem.style.animationDelay = (index * 100) + 'ms';
        promiseItem.innerHTML = `<div class="promise-title">${item}</div>`;
        container.appendChild(promiseItem);
    });
}

// ================================================================
// ABOUT PAGE - STATISTICS
// ================================================================

function renderAboutStats() {
    const container = document.getElementById('aboutStatsGrid');
    if (!container) return;
    
    CONFIG.statistics.forEach(stat => {
        const card = document.createElement('div');
        card.className = 'trust-card trust-card--enhanced';
        card.innerHTML = `
            <span class="impact-title">${stat.title}</span>
            <span class="impact-description">${stat.description}</span>
        `;
        container.appendChild(card);
    });
}

// ================================================================
// ABOUT PAGE - JOURNEY TIMELINE
// ================================================================

function renderJourneyTimeline() {
    const container = document.getElementById('journeyTimeline');
    if (!container) return;
    
    CONFIG.journeyTimeline.forEach((item, index) => {
        const step = document.createElement('div');
        step.className = 'journey-step journey-step--enhanced';
        step.style.animationDelay = (index * 100) + 'ms';
        step.innerHTML = `
            <div class="journey-year">${item.year}</div>
            <div class="journey-content">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        `;
        container.appendChild(step);
    });
}

// ================================================================
// ABOUT PAGE - LEADERSHIP TEAM
// ================================================================

function renderLeadership() {
    const container = document.getElementById('leadershipGrid');
    if (!container) return;
    
    CONFIG.leadership.forEach((leader, index) => {
        const card = document.createElement('div');
        card.className = 'leader-card leader-card--enhanced';
        card.style.animationDelay = (index * 100) + 'ms';
        card.innerHTML = `
            <div class="leader-photo">
                <img src="${leader.image}" alt="${leader.name}">
            </div>
            <div class="leader-name">${leader.name}</div>
            <div class="leader-title">${leader.title}</div>
        `;
        container.appendChild(card);
    });
}

// ================================================================
// CONTACT CTA BUTTON HANDLERS
// ================================================================

function setupContactButtons() {
    // Call Us button - tel: link
    const callBtn = document.getElementById('callBtn');
    if (callBtn) {
        callBtn.addEventListener('click', () => {
            const phone = CONFIG.company.phone;
            if (phone.includes('[')) {
                alert('Phone number not configured. Please contact support.');
                return;
            }
            window.open(`tel:${phone}`, '_blank');
        });
    }
    
    // Apply Now & Talk to Our Team buttons - WhatsApp link
    const applyButtons = document.querySelectorAll('#applyBtnHeader, #applyBtnMobile, #contactTeamBtn');
    applyButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const whatsappNumber = CONFIG.company.whatsapp;
            if (whatsappNumber === 'REPLACE_WITH_BUSINESS_WHATSAPP_NUMBER' || !whatsappNumber) {
                alert('WhatsApp not configured. Please contact support.');
                return;
            }
            const message = "Hi S V Financial Services, I would like to enquire about a loan. Please share more details.";
            const encodedMessage = encodeURIComponent(message);
            // WhatsApp number already includes country code (91)
            const whatsappURL = `https://wa.me/91${whatsappNumber}?text=${encodedMessage}`;
            window.open(whatsappURL, '_blank', 'noopener,noreferrer');
        });
    });
}

// ================================================================
// INITIALIZE APPLICATION
// ================================================================


/* ================================================================
   PREMIUM MOTION ENHANCEMENTS - PHASE 1
   Subtle, reversible, performance-first parallax.
   ================================================================ */

function getParallaxOffset(element, maxTravel = 30) {
    const rect = element.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    if (rect.bottom < 0 || rect.top > viewportHeight) return 0;

    const center = rect.top + (rect.height / 2);
    const distance = center - (viewportHeight / 2);
    const normalized = Math.max(-1, Math.min(1, distance / Math.max(viewportHeight, 1)));
    return Math.round(normalized * maxTravel * -1);
}

function setupHeroParallax() {
    const hero = document.querySelector('.about-hero--parallax, .hero--parallax');
    const content = hero ? hero.querySelector('.hero-content') : null;
    if (!hero || !content) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const isMobile = () => window.innerWidth < 768;
    let ticking = false;

    const update = () => {
        ticking = false;
        if (reduceMotion.matches || isMobile()) {
            content.style.removeProperty('--parallax-y');
            content.style.removeProperty('--about-hero-depth');
            return;
        }
        const offset = Math.max(-30, Math.min(30, getParallaxOffset(hero, 30)));
        if (hero.classList.contains('about-hero--parallax')) {
            content.style.setProperty('--about-hero-depth', `${offset}px`);
        } else {
            content.style.setProperty('--parallax-y', `${offset}px`);
        }
    };

    const requestUpdate = () => {
        if (!ticking) {
            ticking = true;
            requestAnimationFrame(update);
        }
    };

    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate, { passive: true });
    update();
}

function setupAboutPreviewParallax() {
    const section = document.querySelector('.about-preview--parallax');
    const content = section ? section.querySelector('.about-preview-content') : null;
    if (!section || !content) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const isMobile = () => window.innerWidth < 768;
    let ticking = false;

    const update = () => {
        ticking = false;
        if (reduceMotion.matches || isMobile()) {
            content.style.removeProperty('--parallax-y');
            return;
        }
        const offset = Math.max(-20, Math.min(20, getParallaxOffset(section, 20)));
        content.style.setProperty('--parallax-y', `${offset}px`);
    };

    const requestUpdate = () => {
        if (!ticking) {
            ticking = true;
            requestAnimationFrame(update);
        }
    };

    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate, { passive: true });
    update();
}

function initializeApp() {
    // Common to all pages
    setupNavigation();
    setupContactButtons();
    setupHeroParallax();
    setupAboutPreviewParallax();
    setupPersistentCoin();
    
    // Homepage specific
    if (document.getElementById('trustGrid')) {
        renderStatistics();
    }
    setupScrollAnimations();
    
    if (document.getElementById('loanNav')) {
        setupLoanSolutions();
        renderLoanStrip();
    }
    
    if (document.getElementById('eligibilityContainer')) {
        setupEligibilityChecker();
    }
    
    if (document.getElementById('featuresGrid')) {
        renderWhyChooseUs();
    }
    
    if (document.getElementById('partnersGrid')) {
        renderBankingPartners();
    }
    
    if (document.getElementById('timeline')) {
        renderTimeline();
    }
    
    if (document.getElementById('emiChart')) {
        setupEmiCalculator();
    }
    
    if (document.getElementById('faqContainer')) {
        setupFAQ();
    }
    
    // About page specific
    if (document.getElementById('valuesGrid')) {
        renderCoreValues();
    }
    
    if (document.getElementById('promiseGrid')) {
        renderPromise();
    }
    
    if (document.getElementById('aboutStatsGrid')) {
        renderAboutStats();
    }
    
    if (document.getElementById('journeyTimeline')) {
        renderJourneyTimeline();
    }
    
    if (document.getElementById('leadershipGrid')) {
        renderLeadership();
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}

// ================================================================
// RESPONSIVE VIDEO FALLBACK
// ================================================================

document.addEventListener('DOMContentLoaded', () => {
    const video = document.querySelector('.hero-video');
    const audioControl = document.getElementById('heroAudioControl');

    if (video) {
        // Show fallback image if video doesn't load
        video.addEventListener('error', () => {
            const fallback = document.querySelector('.hero-fallback');
            if (fallback) {
                fallback.style.display = 'block';
            }
        });
    }

    if (video && audioControl) {
        const updateAudioControl = () => {
            const isMuted = video.muted;
            audioControl.setAttribute('aria-pressed', String(!isMuted));
            audioControl.setAttribute('aria-label', isMuted ? 'Turn sound on' : 'Turn sound off');
            audioControl.setAttribute('title', isMuted ? 'Turn sound on' : 'Turn sound off');
        };

        updateAudioControl();

        audioControl.addEventListener('click', () => {
            const shouldUnmute = video.muted;
            video.muted = !shouldUnmute;

            if (shouldUnmute) {
                const playback = video.play();
                if (playback) {
                    playback.catch(() => {
                        video.muted = true;
                        updateAudioControl();
                    });
                }
            }

            updateAudioControl();
        });
    }
});

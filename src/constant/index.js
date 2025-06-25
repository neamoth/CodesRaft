const navItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
];

const services = [
    {
        id: 1,
        title: "Mobile Repair",
        imgPath: "slide1.webp",
        url: "/",

    },
    {
        id: 2,
        title: "Tablet Repair",
        imgPath: "slide2.webp",
        url: "/",

    },
    {
        id: 3,
        title: "Laptop Repair",
        imgPath: "slide3.webp",
        url: "/",

    },
    {
        id: 4,
        title: "Smartwatch Repair",
        imgPath: "slide4.webp",
        url: "/",

    },
    {
        id: 5,
        title: "Mobile Repair",
        imgPath: "slide1.webp",
        url: "/",

    },
    {
        id: 6,
        title: "Tablet Repair",
        imgPath: "slide2.webp",
        url: "/",

    },
];

const pricing = [
    {
        id: 1,
        title: "Water Damage Repair",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: "1000tk",
        imgPath: "repair1.png",
    },
    {
        id: 2,
        title: "Screen Repair",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: "3000tk",
        imgPath: "repair2.png",
    },
    {
        id: 3,
        title: "Mobile Unlock",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: "500tk",
        imgPath: "repair3.png",
    },
    {
        id: 4,
        title: "Battery Replacement",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: "800tk",
        imgPath: "repair4.png",
    },
    {
        id: 5,
        title: "Charging Port Repair",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: "500tk",
        imgPath: "repair3.png",
    },
    {
        id: 6,
        title: "Software Update",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: "500tk",
        imgPath: "repair1.png",
    },
];

const cta = {
    id: 1,
    subtitle: "Need Fast Repairs?",
    title: "Trusted Mobile Repair Experts at Your Service",
    desc1: "We fix screens, batteries, water damage, and more – all in record time.",
    desc2: "Walk in or book online today for hassle-free mobile repairs with a warranty.",
    link: "/contact",
    img: "cta.webp"
};


const faqData = [
    {
        id: 1,
        question: "How long does a screen repair take?",
        answer: "Most screen repairs are done within 30–60 minutes, depending on the device.",
    },
    {
        id: 2,
        question: "Do you offer any warranty on repairs?",
        answer: "Yes, we offer a 6-month warranty on most repairs.",
    },
    {
        id: 3,
        question: "Do I need an appointment?",
        answer: "Walk-ins are welcome, but booking online ensures faster service.",
    },
    {
        id: 4,
        question: "Can you fix water-damaged phones?",
        answer: "Yes, we specialize in diagnosing and repairing water-damaged devices.",
    },
    {
        id: 5,
        question: "Do you use original parts?",
        answer: "We use OEM-quality parts to ensure long-lasting repairs.",
    },
    {
        id: 6,
        question: "Is data safe during repair?",
        answer: "Yes, we take extra precautions to ensure your data is safe.",
    },
];

const footer = {
    desc:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    logo: "CodesRaft",
    nav: [
        {
            title: "Navigation",
            links: [
                { label: "Home", href: "/" },
                { label: "Services", href: "/Services" },
                { label: "Shop", href: "/Shop" },
                { label: "Contact", href: "/Contact" },
            ],
        },
        {
            title: "License",
            links: [
                { label: "Privacy Policy", href: "/" },
                { label: "Terms of Use", href: "/" },
                { label: "Cookie Policy", href: "/" },
            ],
        },
    ],
    contact: [
        { label: "+1 800-555-1234", type: "tel:", imgPath: "/images/footer-icon-phone.png" },
        { label: "info@CodesRaft", type: "mailto:", imgPath: "/images/footer-icon-email.png" },
        { label: "123 Technology DrSan Jose, CA 95110", type: "/", imgPath: "/images/footer-icon-location.png" },
    ],
    social: [
        { platform: "twitter", href: "/", imgPath: "/images/social1.svg" },
        { platform: "facebook", href: "/", imgPath: "/images/social2.svg" },
        { platform: "linkedin", href: "/", imgPath: "/images/social3.svg" },
        { platform: "instagram", href: "/", imgPath: "/images/social4.svg" },
    ],
}

export {
    navItems,
    footer,
    services,
    pricing,
    cta,
    faqData,
}
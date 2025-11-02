import project1Img from "../../assets/project-1.png";
import project2Img from "../../assets/project-2.png";
import project3Img from "../../assets/project-3.png";
import project4Img from "../../assets/project-4.png";
import project5Img from "../../assets/project-5.png";
import project6Img from "../../assets/project-6.png";
import project7Img from "../../assets/project-7.png";
import project8Img from "../../assets/project-8.png";
import project9Img from "../../assets/project-9.png";
import project10Img from "../../assets/project-10.png";
import project11Img from "../../assets/project-11.png";
import project12Img from "../../assets/project-12.png";

const projectsData = [
  {
    id: 1,
    title: "BistroBoss — Restaurant Management System",
    category: "MERN Stack",
    image: project1Img,
    shortDesc:
      "Fullstack restaurant project with both user and admin dashboards, menu management, and secure payments.",
    details: {
      overview:
        "BistroBoss helps restaurant owners manage orders, reservations, and menus seamlessly. It includes a dual dashboard system for users and admins with real-time updates and role-based access control.",
      techStack: "MongoDB, Express, React, Node.js, Tailwind CSS, JWT, Stripe",
      liveLink: "https://client-side-nine-chi.vercel.app/",
      client:
        "https://github.com/Engr-Mahajabin/Bostro-Boss-Restuarent/tree/main/bistro-boss-restuarent/client/client-side",
      server:
        "https://github.com/Engr-Mahajabin/Bostro-Boss-Restuarent/tree/main/bistro-boss-restuarent/server/server-side",
    },
  },
  {
    id: 2,
    title: "ShopHub — E-commerce Platform",
    category: "MERN Stack",
    image: project2Img,
    shortDesc:
      "A full-featured e-commerce website built with the MERN stack. Includes authentication, product management, and secure Stripe payments",
    details: {
      overview:
        "ShopHub is a complete MERN-based e-commerce platform inspired by Daraz, with full admin and user functionalities. It supports product listing, order management, authentication, and real-time payments.",
      techStack: "React, Node.js, MongoDB, Express, Tailwind CSS",
      liveLink: "https://frontend-hazel-ten-38.vercel.app/",
      client: "https://github.com/Engr-Mahajabin/ShopHub---Frontend",
      server: "https://github.com/Engr-Mahajabin/ShopHub---Backend",
    },
  },
  {
    id: 3,
    title: "StreakMaster — Personal Growth Tracker",
    category: "AI Automation",
    image: project3Img,
    shortDesc:
      "A personal productivity tracker app that visualizes daily streaks and helps users build consistent habits",
    details: {
      overview:
        "StreakMaster motivates users through visual habit streaks and local data persistence for progress tracking even offline.",
      techStack: "React, Tailwind CSS, LocalStorage",
      liveLink: "https://streakmaster-frontend.netlify.app/",
      client: "https://github.com/Engr-Mahajabin/StreakMaster-Frontend-",
      server: "",
    },
  },
  {
    id: 4,
    title: "Portfolio Website",
    category: "Others",
    image: project4Img,
    shortDesc:
      "My personal developer portfolio showcasing projects and skills.",
    details: {
      overview:
        "Designed a clean and responsive portfolio site using React and Tailwind CSS to showcase my projects and achievements.",
      techStack: "React, Tailwind CSS, Framer Motion",
      liveLink: "https://mahajabinritu.vercel.app",
      client: "",
      server: "",
    },
  },
  {
    id: 5,
    title: "Alpha Clash Game",
    category: "Others",
    image: project5Img,
    shortDesc:
      "A fun JavaScript typing game that challenges users to type letters accurately and quickly.",
    details: {
      overview:
        "An engaging browser game that measures typing accuracy and reaction time, with randomized letter sequences.",
      techStack: "HTML, CSS, JavaScript (DOM Manipulation)",
      liveLink: "https://prismatic-semolina-a92cf5.netlify.app/",
      client: "https://github.com/Engr-Mahajabin/Alpha-Clash-Game",
      server: "",
    },
  },
  {
    id: 6,
    title: "Number Guessing Game",
    category: "Others",
    image: project6Img,
    shortDesc:
      "A simple number guessing game built with vanilla JavaScript featuring hints and scoring.",
    details: {
      overview:
        "A lightweight game where players guess the correct number in limited attempts. Includes score and reset system.",
      techStack: "HTML, CSS, JavaScript",
      liveLink:
        "https://6793d5f118922d76954fdf0b--musical-creponne-45debb.netlify.app/",
      client: "https://github.com/Engr-Mahajabin/Number-Guessing-Game",
      server: "",
    },
  },
  {
    id: 7,
    title: "MediCare Plus — Health & Medical Website",
    category: "WordPress",
    image: project7Img,
    shortDesc:
      "A professional healthcare and clinic website customized using the Mediax WordPress theme. Focused on clean design, appointment booking, and doctor profiles.",
    details: {
      overview:
        "This project was built using the premium Mediax theme from ThemeForest. I customized the homepage layout, doctor section, and service pages to match the client's branding. I also optimized the site speed, added an appointment form, and integrated social media links for better engagement.",
      techStack:
        "WordPress, Elementor, Mediax Theme, WPForms, Yoast SEO, Astra Plugins",
    },
  },
  {
    id: 8,
    title: "Builderon — Construction Company Website",
    category: "WordPress",
    image: project8Img,
    shortDesc:
      "A modern and responsive construction company website customized using the Builderon Elementor Template Kit. Designed to showcase services, projects, and client trust effectively.",
    details: {
      overview:
        "This website was created using the Builderon Template Kit from ThemeForest. I customized the homepage structure, services, and project portfolio section to align with the client's business identity. The contact and quote request forms were optimized for better lead conversion. I also made design adjustments using Elementor and global styling to ensure consistency across all pages.",
      techStack:
        "WordPress, Elementor, Builderon Template Kit, Contact Form 7, Yoast SEO, Google Maps Embed",
    },
  },
  {
    id: 9,
    title: "Archo — Architecture & Interior Design Website",
    category: "WordPress",
    image: project9Img,
    shortDesc:
      "A refined architecture & interior design website customised using the Archo Elementor Template Kit. Designed to showcase projects, services and studio credibility.",
    details: {
      overview:
        "This project uses the Archo Template Kit from ThemeForest, tailored for architecture and interior design agencies. I customised the homepage, services section, project gallery and contact form to fit the client’s brand identity and built-in portfolio needs.",
      techStack:
        "WordPress, Elementor, Archo Template Kit, Bootstrap, Elementor Add-ons",
    },
  },
  {
    id: 10,
    title: "Farmart — Organic Marketplace Website",
    category: "WordPress",
    image: project10Img,
    shortDesc:
      "A modern and responsive multipurpose e-commerce marketplace site customised using the Farmart theme for organic and grocery products.",
    details: {
      overview:
        "Built using the Farmart premium WordPress theme which supports multi-vendor marketplace, advanced shop layouts and intuitive user experience. I customised the homepage, product filters, vendor store pages and checkout flow to align with the client’s branding and business model.",
      techStack:
        "WordPress, WooCommerce, Elementor, Farmart Theme, Multi-Vendor Plugins (Dokan / WCFM)",
    },
  },
  {
    id: 11,
    title: "Togo — Travel & Tour Booking Website",
    category: "WordPress",
    image: project11Img,
    shortDesc:
      "A modern and user-friendly tour booking site customised using the Togo WordPress theme. Designed for travel agencies to showcase tours, itineraries and bookings.",
    details: {
      overview:
        "This website was built using the Togo WordPress theme from ThemeForest, tailored for travel and tour operators. I customised the homepage layout, tour listing and detail pages, booking forms and filter functionality to match the client's brand and business model. " +
        "The theme’s built-in booking system, itinerary modules and map integration were leveraged for professional user experience. :contentReference[oaicite:1]{index=1}",
      techStack:
        "WordPress, Elementor, Togo Theme, WooCommerce, Tour Booking System, WPML",
    },
  },
  {
    id: 12,
    title: "Almaris — Luxury Hotel Booking Website",
    category: "WordPress",
    image: project12Img,
    shortDesc:
      "A premium hotel booking website customised using the Almaris WordPress theme. Designed to showcase rooms, services, and effortless bookings.",
    details: {
      overview:
        "This project was built using the Almaris theme, a luxury WordPress theme specialised for hotels and resorts. I customised the homepage layout, room listing, booking form and service pages to reflect the client’s branding and business needs. :contentReference[oaicite:1]{index=1}",
      techStack:
        "WordPress, Elementor, Almaris Theme, WooCommerce Booking, Easy Hotel Booking plugin",
    },
  },
];

export default projectsData;

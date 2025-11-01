import project1Img from "../../assets/project-1.png";
import project2Img from "../../assets/project-2.png";
import project3Img from "../../assets/project-3.png";
import project4Img from "../../assets/project-4.png";
import project5Img from "../../assets/project-5.png";
import project6Img from "../../assets/project-6.png";

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
];

export default projectsData;

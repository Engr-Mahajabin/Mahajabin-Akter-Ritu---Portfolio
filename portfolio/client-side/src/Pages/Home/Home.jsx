import React, { useEffect, useState } from "react";
import './Home.css';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Home = () => {
    const words = [
        "Frontend Developer",
        "MERN Stack Developer",
        "Aspiring Software Engineer",
        "Tech Enthusiast",
    ];

    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[index];
        let timeout;

        if (isDeleting) {
            if (charIndex > 0) {
                timeout = setTimeout(() => {
                    setText(currentWord.substring(0, charIndex - 1));
                    setCharIndex((prev) => prev - 1);
                }, 50);
            } else {
                setIsDeleting(false);
                setIndex((prev) => (prev + 1) % words.length);
            }
        } else {
            if (charIndex < currentWord.length) {
                timeout = setTimeout(() => {
                    setText(currentWord.substring(0, charIndex + 1));
                    setCharIndex((prev) => prev + 1);
                }, 100);
            } else {
                timeout = setTimeout(() => {
                    setIsDeleting(true);
                }, 1500);
            }
        }

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, index]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-white bg-black">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Mahajabin Akter Ritu</h1>

            <h2 className="text-xl md:text-3xl font-semibold mt-4">
                I am a <span className="text-blue-400">{text}</span>
                <span className="blinking-cursor">|</span>
            </h2>

            <div className="flex gap-6 mt-12 text-2xl">
                <a href="https://www.facebook.com/profile.php?id=100075475152520" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="hover:text-blue-400 transition duration-300" />
                </a>
                <a href="https://x.com/Mahajabin_Ritu" target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="hover:text-blue-400 transition duration-300" />
                </a>
                <a href="https://www.linkedin.com/in/mahajabin-akter-ritu-0366432b3/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="hover:text-blue-400 transition duration-300" />
                </a>
                <a href="https://github.com/Mahajabin217" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="hover:text-blue-400 transition duration-300" />
                </a>
            </div>

        </div>
    );
};

export default Home;

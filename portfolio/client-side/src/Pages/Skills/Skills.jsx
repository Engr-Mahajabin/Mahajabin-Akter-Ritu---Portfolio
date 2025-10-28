import React from "react";
import { motion } from "framer-motion";
import SectionTitles from "../../Components/SectionTitles/SectionTitles";
import SkillCard from "./SkillCard";

// Icons
import {
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaGithub,
    FaCode,
    FaHtml5,
    FaCss3Alt,
    FaBootstrap,
    FaPython,
    FaDatabase,
} from "react-icons/fa";
import {
    SiMongodb,
    SiTailwindcss,
    SiPostman,
    SiNetlify,
    SiFigma,
    SiLeetcode,
    SiCodeforces,
    SiCodechef,
    SiNextdotjs,
    SiC,
    SiCplusplus,
    SiExpress,
    SiVercel,
    SiJavascript,
} from "react-icons/si";
import { RiTeamLine, RiSpeakLine, RiTimerFlashLine } from "react-icons/ri";
import { GiBrain } from "react-icons/gi";

// ====== Data Sections ======
const frontend = [
    { icon: FaHtml5, name: "HTML" },
    { icon: FaCss3Alt, name: "CSS" },
    { icon: FaBootstrap, name: "Bootstrap" },
    { icon: SiTailwindcss, name: "Tailwind CSS" },
    { icon: FaReact, name: "React" },
    { icon: SiNextdotjs, name: "Next.js" },
];

const backend = [
    { icon: FaNodeJs, name: "Node.js" },
    { icon: SiExpress, name: "Express.js" },
    { icon: SiMongodb, name: "MongoDB" },
    { icon: FaDatabase, name: "MySQL" },
];

const languages = [
    { icon: SiJavascript, name: "JavaScript" },
    { icon: SiC, name: "C" },
    { icon: SiCplusplus, name: "C++" },
    { icon: FaPython, name: "Python" },
];

const tools = [
    { icon: FaGitAlt, name: "Git" },
    { icon: FaGithub, name: "GitHub" },
    { icon: SiFigma, name: "Figma" },
    { icon: SiPostman, name: "Postman" },
    { icon: SiNetlify, name: "Netlify" },
    { icon: SiVercel, name: "Vercel" },
];

const softSkills = [
    { icon: GiBrain, name: "Problem Solving" },
    { icon: RiSpeakLine, name: "Communication" },
    { icon: RiTeamLine, name: "Teamwork" },
    { icon: RiTimerFlashLine, name: "Time Management" },
];

const cpSkills = [
    {
        icon: SiLeetcode,
        name: "LeetCode",
        link: "https://leetcode.com/u/Mahajabin217/",
    },
    {
        icon: SiCodeforces,
        name: "Codeforces",
        link: "https://codeforces.com/profile/ritu_217",
    },
    {
        icon: SiCodechef,
        name: "CodeChef",
        link: "https://www.codechef.com/users/engr_mahajabin",
    },
];

const Skills = () => {
    return (
        <div className="bg-gradient-to-br from-black via-gray-900 to-black py-10 text-white">
            <SectionTitles heading="My Skills" subHeading="Explore my expertise" />

            {/* ==== FRONTEND ==== */}
            <motion.div
                className="max-w-6xl mx-auto px-6 md:px-16 mb-16 pt-12"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h3 className="text-3xl font-bold mb-8 flex items-center gap-2 text-blue-400">
                    🎨 Frontend
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center">
                    {frontend.map((skill, i) => (
                        <motion.div key={i} whileHover={{ scale: 1.1 }} className="relative group">
                            <div className="absolute inset-0 bg-blue-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition duration-300 rounded-full" />
                            <SkillCard icon={skill.icon} name={skill.name} />
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent my-10" />

            {/* ==== BACKEND ==== */}
            <motion.div
                className="max-w-6xl mx-auto px-6 md:px-16 mb-16"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h3 className="text-3xl font-bold mb-8 flex items-center gap-2 text-blue-400">
                    ⚙️ Backend
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center">
                    {backend.map((skill, i) => (
                        <motion.div key={i} whileHover={{ scale: 1.1 }} className="relative group">
                            <div className="absolute inset-0 bg-blue-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition duration-300 rounded-full" />
                            <SkillCard icon={skill.icon} name={skill.name} />
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent my-10" />

            {/* ==== LANGUAGES ==== */}
            <motion.div
                className="max-w-6xl mx-auto px-6 md:px-16 mb-16"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h3 className="text-3xl font-bold mb-8 flex items-center gap-2 text-blue-400">
                    🧠 Languages
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center">
                    {languages.map((skill, i) => (
                        <motion.div key={i} whileHover={{ scale: 1.1 }} className="relative group">
                            <div className="absolute inset-0 bg-blue-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition duration-300 rounded-full" />
                            <SkillCard icon={skill.icon} name={skill.name} />
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent my-10" />

            {/* ==== TOOLS ==== */}
            <motion.div
                className="max-w-6xl mx-auto px-6 md:px-16 mb-16"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h3 className="text-3xl font-bold mb-8 flex items-center gap-2 text-blue-400">
                    🧰 Tools & Platforms
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center">
                    {tools.map((tool, i) => (
                        <motion.div key={i} whileHover={{ scale: 1.1 }} className="relative group">
                            <div className="absolute inset-0 bg-blue-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition duration-300 rounded-full" />
                            <SkillCard icon={tool.icon} name={tool.name} />
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent my-10" />

            {/* ==== SOFT SKILLS ==== */}
            <motion.div
                className="max-w-6xl mx-auto px-6 md:px-16 mb-16"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h3 className="text-3xl font-bold mb-8 flex items-center gap-2 text-blue-400">
                    🤝 Soft Skills
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center">
                    {softSkills.map((skill, i) => (
                        <motion.div key={i} whileHover={{ scale: 1.1 }} className="relative group">
                            <div className="absolute inset-0 bg-blue-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition duration-300 rounded-full" />
                            <SkillCard icon={skill.icon} name={skill.name} />
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent my-10" />

            {/* ==== COMPETITIVE PROGRAMMING ==== */}
            <motion.div
                className="max-w-6xl mx-auto px-6 md:px-16 mb-16"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h3 className="text-3xl font-bold mb-8 flex items-center gap-2 text-blue-400">
                    🏆 Competitive Programming
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center">
                    {cpSkills.map((platform, i) => (
                        <motion.div key={i} whileHover={{ scale: 1.1 }} className="relative group">
                            <div className="absolute inset-0 bg-blue-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition duration-300 rounded-full" />
                            <SkillCard
                                icon={platform.icon}
                                name={platform.name}
                                link={platform.link} />
                        </motion.div>
                    ))}
                </div>
            </motion.div>


        </div>
    );
};

export default Skills;

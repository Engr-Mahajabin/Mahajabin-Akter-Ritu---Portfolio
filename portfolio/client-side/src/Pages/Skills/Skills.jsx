import React from "react";
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
    SiVercel
} from "react-icons/si";
import { RiTeamLine, RiSpeakLine, RiTimerFlashLine } from "react-icons/ri";
import { GiBrain } from "react-icons/gi";

// ✅ Tech Stack
const techSkills = [
    { icon: FaHtml5, name: "HTML" },
    { icon: FaCss3Alt, name: "CSS" },
    { icon: FaBootstrap, name: "Bootstrap" },
    { icon: SiTailwindcss, name: "Tailwind CSS" },
    { icon: FaReact, name: "React" },
    { icon: SiNextdotjs, name: "Next.js" },
    { icon: FaNodeJs, name: "Node.js" },
    { icon: SiExpress, name: "Express.js" },
    { icon: SiMongodb, name: "MongoDB" },
    { icon: SiC, name: "C" },
    { icon: SiCplusplus, name: "C++" },
    { icon: FaPython, name: "Python" },
];

// ✅ Tools
const tools = [
    { icon: FaGitAlt, name: "Git" },
    { icon: FaGithub, name: "GitHub" },
    { icon: SiFigma, name: "Figma" },
    { icon: SiPostman, name: "Postman" },
    { icon: SiNetlify, name: "Netlify" },
    { icon: SiVercel, name: "Vercel" },
];

// ✅ Soft Skills
const softSkills = [
    { icon: GiBrain, name: "Problem Solving" },
    { icon: RiSpeakLine, name: "Communication" },
    { icon: RiTeamLine, name: "Teamwork" },
    { icon: RiTimerFlashLine, name: "Time Management" },
];

// ✅ Competitive Programming
const cpSkills = [
    {
        icon: SiLeetcode,
        name: "LeetCode",
        link: "https://leetcode.com/your_username", // 🔁 Replace with yours
    },
    {
        icon: SiCodeforces,
        name: "Codeforces",
        link: "https://codeforces.com/profile/your_username", // 🔁 Replace with yours
    },
    {
        icon: SiCodechef,
        name: "CodeChef",
        link: "https://www.codechef.com/users/your_username", // 🔁 Replace with yours
    },
];

const Skills = () => {
    return (
        <div className="bg-gradient-to-br from-black via-gray-900 to-black py-12 text-white">
            <SectionTitles heading="My Skills" subHeading="Explore my expertise" />

            {/* Tech Stack */}
            <div className="px-6 md:px-16 mb-12 pt-16">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <FaCode className="text-blue-400" /> Tech Stack
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
                    {techSkills.map((skill, i) => (
                        <SkillCard key={i} icon={skill.icon} name={skill.name} />
                    ))}
                </div>
            </div>

            {/* Tools */}
            <div className="px-6 md:px-16 mb-12">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <FaGitAlt className="text-blue-400" /> Tools & Platforms
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
                    {tools.map((tool, i) => (
                        <SkillCard key={i} icon={tool.icon} name={tool.name} />
                    ))}
                </div>
            </div>

            {/* Soft Skills */}
            <div className="px-6 md:px-16 mb-12">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <RiTeamLine className="text-blue-400" /> Soft Skills
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
                    {softSkills.map((skill, i) => (
                        <SkillCard key={i} icon={skill.icon} name={skill.name} />
                    ))}
                </div>
            </div>

            {/* Competitive Programming */}
            <div className="px-6 md:px-16">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <FaCode className="text-blue-400" /> Competitive Programming
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
                    {cpSkills.map((platform, i) => (
                        <SkillCard
                            key={i}
                            icon={platform.icon}
                            name={platform.name}
                            link={platform.link}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;

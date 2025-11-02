import React from "react";
import { motion } from "framer-motion";
import SectionTitles from "../../Components/SectionTitles/SectionTitles";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

// ====== Data ======
const educationData = [
    {
        id: 1,
        title: "B.Sc in Computer Science and Engineering",
        institution: "National University (Dhaka Mohanagar Mohila College)",
        date: "2018 - 2022",
        description: [
            "Graduated with honors.",
            "Focused on software development, algorithms, and system design.",
        ],
    },
    {
        id: 2,
        title: "Higher Secondary Certificate (HSC)",
        institution: "Dhaka Mohanagar Mohila College",
        date: "2016 - 2017",
        description: ["Completed HSC in Science stream with outstanding results."],
    },
    {
        id: 3,
        title: "Secondary School Certificate (SSC)",
        institution: "Sher-E Bangla Balika Mohaviddalay",
        date: "2016",
        description: ["Completed SSC in Science stream with outstanding results."],
    },
];

const workExperienceData = [
    {
        id: 1,
        title: "Frontend Developer Intern",
        company: "ViretaDev",
        date: "July 2025 - October 2025",
        description: [
            "Built a Hotel Management System & WorkStation projects using React, Bootstrap, and Tailwind CSS.",
            "Focused on scalable, responsive, and user-friendly interfaces.",
            "Implemented dynamic forms, dashboards, and real-time data updates.",
            "Optimized performance and enhanced user experience.",
        ],
    },
    {
        id: 2,
        title: "Frontend Developer Intern",
        company: "CodeAlpha",
        date: "March 2025 - April 2025",
        description: [
            "Developed 3 mini projects using HTML, CSS, and JavaScript:",
            "• Image Gallery with filtering and lightbox functionality",
            "• Calculator app with responsive layout and proper validation",
            "• Personal Portfolio website showcasing skills and projects",
            "Learned hands-on front-end fundamentals and DOM manipulation.",
        ],
    },
];

// ====== Component ======
const Resume = () => {
    return (
        <div className="bg-gradient-to-br from-black via-gray-900 to-black py-10 px-4 text-white">
            {/* Section Title */}
            <SectionTitles heading="Resume" subHeading="Check Out My Journey" />

            {/* === Education === */}
            <motion.div
                className="max-w-6xl mx-auto mt-16"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h3 className="text-3xl font-bold mb-12 flex items-center justify-center gap-2 text-blue-400">
                    🎓 Education
                </h3>
                <VerticalTimeline lineColor="#1f2937">
                    {educationData.map(({ id, title, institution, date, description }) => (
                        <VerticalTimelineElement
                            key={id}
                            date={date}
                            contentStyle={{
                                background: "linear-gradient(135deg, #0f172a, #1e293b)",
                                color: "#fff",
                                borderRadius: "12px",
                                boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
                            }}
                            contentArrowStyle={{ borderRight: "7px solid #1e293b" }}
                            iconStyle={{
                                background: "linear-gradient(135deg, #2563eb, #1d4ed8)",
                                color: "#fff",
                            }}
                            icon={<FaGraduationCap />}
                        >
                            <h3 className="text-xl font-semibold text-blue-400">{title}</h3>
                            <h4 className="text-gray-300">{institution}</h4>
                            <ul className="text-gray-400 mt-2 list-disc list-inside space-y-1">
                                {description.map((line, i) => (
                                    <li key={i}>{line}</li>
                                ))}
                            </ul>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </motion.div>

            {/* Divider */}
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent my-16" />

            {/* === Work Experience === */}
            <motion.div
                className="max-w-6xl mx-auto"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h3 className="text-3xl font-bold mb-12 flex items-center justify-center gap-2 text-blue-400">
                    💼 Work Experience
                </h3>
                <VerticalTimeline lineColor="#1f2937">
                    {workExperienceData.map(({ id, title, company, date, description }) => (
                        <VerticalTimelineElement
                            key={id}
                            date={date}
                            contentStyle={{
                                background: "linear-gradient(135deg, #0f172a, #1e293b)",
                                color: "#fff",
                                borderRadius: "12px",
                                boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
                            }}
                            contentArrowStyle={{ borderRight: "7px solid #1e293b" }}
                            iconStyle={{
                                background: "linear-gradient(135deg, #2563eb, #1d4ed8)",
                                color: "#fff",
                            }}
                            icon={<FaBriefcase />}
                        >
                            <h3 className="text-xl font-semibold text-blue-400">{title}</h3>
                            <h4 className="text-gray-300">{company}</h4>
                            <ul className="text-gray-400 mt-2 list-disc list-inside space-y-1">
                                {description.map((line, i) => (
                                    <li key={i}>{line}</li>
                                ))}
                            </ul>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </motion.div>

            {/* === Resume Download Button === */}
            <motion.div
                className="text-center mt-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <a
                    href="https://drive.google.com/file/d/1H4w_eaNm9I5_Of-1KcM3QZNpSgxCeBup/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-400 text-black font-semibold rounded-lg hover:scale-105 transform transition duration-300"
                >
                    📄 Download My Resume
                </a>
            </motion.div>
        </div>
    );
};

export default Resume;

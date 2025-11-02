import React, { useState } from "react";
import projectsData from "./projectsData.js";
import SectionTitles from "../../Components/SectionTitles/SectionTitles";

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [expanded, setExpanded] = useState(null);

    const categories = ["All", "MERN Stack", "AI Automation", "WordPress", "Others"];

    const filteredProjects =
        activeCategory === "All"
            ? projectsData
            : projectsData.filter((p) => p.category === activeCategory);

    const toggleExpand = (id) => {
        setExpanded(expanded === id ? null : id);
    };

    return (
        <section className="bg-black text-white py-10 px-5 md:px-20 min-h-screen">
            <SectionTitles heading="Projects" subHeading="Explore My Work" />

            {/* Category Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-10 py-6">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-4 py-2 rounded-md text-sm font-medium ${activeCategory === cat
                            ? "bg-blue-500 text-white"
                            : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Project Cards */}
            <div className="space-y-8">
                {filteredProjects.map((project) => (
                    <div
                        key={project.id}
                        className="bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                        <div className="flex flex-col md:flex-row gap-6">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full md:w-1/3 rounded-md object-cover"
                            />
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 mb-3">
                                    {project.shortDesc}
                                </p>

                                {expanded === project.id && (
                                    <div className="text-gray-300 space-y-2">
                                        <p>
                                            <strong>Overview:</strong>{" "}
                                            {project.details.overview}
                                        </p>
                                        <p>
                                            <strong>Tech Stack:</strong>{" "}
                                            {project.details.techStack}
                                        </p>
                                        <div className="flex gap-4 mt-3">
                                            <a
                                                href={project.details.liveLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-sm text-white font-medium"
                                            >
                                                Live Preview
                                            </a>
                                            <a
                                                href={project.details.client}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md text-sm text-white font-medium"
                                            >
                                                Client-Side
                                            </a>
                                            <a
                                                href={project.details.server}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md text-sm text-white font-medium"
                                            >
                                                Server-Side
                                            </a>
                                        </div>
                                    </div>
                                )}

                                <button
                                    onClick={() => toggleExpand(project.id)}
                                    className="mt-3 text-blue-400 hover:text-blue-300 text-sm font-medium"
                                >
                                    {expanded === project.id
                                        ? "View less ↑"
                                        : "View more ↓"}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;

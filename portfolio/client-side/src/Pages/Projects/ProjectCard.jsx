
import React from "react";

const ProjectCard = ({ title, image, description, liveLink, github, tech }) => {
    return (
        <div className="bg-gray-800 rounded-xl shadow-md hover:shadow-lg p-4 transition-all duration-300">
            <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg" />

            <h3 className="text-white text-xl font-bold mt-4">{title}</h3>
            <p className="text-white text-sm mt-2">{description}</p>
            <div className="flex flex-wrap gap-2 mt-3">
                {tech.map((t, i) => (
                    <span key={i} className="text-xs bg-gray-200 px-2 py-1">
                        {t}
                    </span>
                ))}
            </div>
            <div className="flex justify-between mt-4 text-sm">
                {liveLink && (
                    <a href={liveLink} target="_blank" className="text-blue-400 hover:underline">
                        Live
                    </a>
                )}
                {github && (
                    <a href={github} target="_blank" className="text-blue-400 hover:underline">
                        GitHub
                    </a>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;

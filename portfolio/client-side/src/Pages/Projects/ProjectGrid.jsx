
import React from "react";
import projectsData from "./ProjectsData.js";
import ProjectCard from "./ProjectCard";

const ProjectGrid = ({ category }) => {
    const filtered = category === "all"
        ? projectsData
        : projectsData.filter(p => p.category === category);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(project => (
                <ProjectCard key={project.id} {...project} />
            ))}
        </div>
    );
};

export default ProjectGrid;

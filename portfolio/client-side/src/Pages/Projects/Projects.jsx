
import React from "react";
import ProjectGrid from "./ProjectGrid";
import SectionTitles from "../../Components/SectionTitles/SectionTitles";

const Projects = () => {
    return (
        <div className="py-8 bg-black min-h-screen">
            <div className="py-8">
                <SectionTitles heading="projects" subHeading="Explore My Work" />
            </div>

            <div className="tabs tabs-lift w-full max-w-5xl mx-auto justify-center bg-blue-400 text-black">

                {/* Personal Tab */}
                <input type="radio" name="projects_tab" className="tab" aria-label="Personal" defaultChecked />
                <div className="tab-content bg-black border-base-300 p-6">
                    <ProjectGrid category="personal" />
                </div>

                {/* Office Tab */}
                <input type="radio" name="projects_tab" className="tab" aria-label="Office" />
                <div className="tab-content bg-black border-base-300 p-6">
                    <ProjectGrid category="office" />
                </div>

                {/* Internship Tab */}
                <input type="radio" name="projects_tab" className="tab" aria-label="Internship" />
                <div className="tab-content bg-black border-base-300 p-6">
                    <ProjectGrid category="internship" />
                </div>

                {/* Team Contributions Tab */}
                <input type="radio" name="projects_tab" className="tab" aria-label="Team Contributions" />
                <div className="tab-content bg-black border-base-300 p-6">
                    <ProjectGrid category="team" />
                </div>
            </div>
        </div>
    );
};

export default Projects;

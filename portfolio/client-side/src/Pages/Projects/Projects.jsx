
// import React from "react";
// import ProjectGrid from "./ProjectGrid";
// import SectionTitles from "../../Components/SectionTitles/SectionTitles";

// const Projects = () => {
//     return (
//         <div className="py-8 bg-black min-h-screen">
//             <div className="py-8">
//                 <SectionTitles heading="projects" subHeading="Explore My Work" />
//             </div>

//             <div className="tabs tabs-lift w-full max-w-5xl mx-auto justify-center bg-blue-400 text-black">

//                 {/* Personal Tab */}
//                 <input type="radio" name="projects_tab" className="tab" aria-label="Personal" defaultChecked />
//                 <div className="tab-content bg-black border-base-300 p-6">
//                     <ProjectGrid category="personal" />
//                 </div>

//                 {/* Office Tab */}
//                 <input type="radio" name="projects_tab" className="tab" aria-label="Office" />
//                 <div className="tab-content bg-black border-base-300 p-6">
//                     <ProjectGrid category="office" />
//                 </div>

//                 {/* Internship Tab */}
//                 <input type="radio" name="projects_tab" className="tab" aria-label="Internship" />
//                 <div className="tab-content bg-black border-base-300 p-6">
//                     <ProjectGrid category="internship" />
//                 </div>

//                 {/* Team Contributions Tab */}
//                 <input type="radio" name="projects_tab" className="tab" aria-label="Team Contributions" />
//                 <div className="tab-content bg-black border-base-300 p-6">
//                     <ProjectGrid category="team" />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Projects;


import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import projectsData from "./ProjectsData";
import SectionTitles from "../../Components/SectionTitles/SectionTitles";

const categories = ["all", "Frontend", "Fullstack (MERN)", "Others"];

const Projects = () => {
    const [selected, setSelected] = useState("all");

    const filtered =
        selected === "all"
            ? projectsData
            : projectsData.filter((p) => p.category.toLowerCase() === selected);

    return (
        <div className="py-8 bg-black min-h-screen">
            <div className="py-8">
                <SectionTitles heading="projects" subHeading="Explore My Work" />
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setSelected(cat)}
                        className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${selected === cat
                            ? "bg-blue-500 text-white shadow-md"
                            : "bg-gray-100 text-gray-700 hover:bg-blue-200"
                            }`}
                    >
                        {cat.toUpperCase()}
                    </button>
                ))}
            </div>

            {/* Swiper Slider */}
            <div className="max-w-6xl mx-auto px-4">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {filtered.map((project) => (
                        <SwiperSlide key={project.id}>
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-52 object-cover"
                                />
                                <div className="p-5 text-left">
                                    <h3 className="text-lg font-bold text-[#0a0a3a]">{project.title}</h3>
                                    <p className="text-sm text-gray-500 mb-2">{project.category}</p>
                                    <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                                    <div className="flex justify-between">
                                        {project.live && (
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                className="text-blue-500 hover:underline text-sm"
                                            >
                                                Live Demo →
                                            </a>
                                        )}
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                className="text-gray-500 hover:text-black text-sm"
                                            >
                                                GitHub
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Projects;

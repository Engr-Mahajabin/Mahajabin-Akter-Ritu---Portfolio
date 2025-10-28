import React from "react";

const SkillCard = ({ icon: Icon, name, link }) => {
    return (
        <div
            className="flex flex-col items-center justify-center 
                 bg-gray-800/50 backdrop-blur-sm
                 w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 
                 rounded-2xl shadow-lg 
                 border border-gray-700 
                 hover:border-blue-400 
                 hover:shadow-blue-400/20 
                 transition-all duration-300 
                 hover:scale-105 group"
        >
            <Icon size={44} className="mb-2 text-blue-400 group-hover:text-white transition" />
            <p className="text-sm md:text-base font-semibold text-center">{name}</p>

            {link && (
                <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 px-3 py-1 rounded-md bg-blue-400 text-black text-xs font-medium hover:bg-white hover:text-black transition"
                >
                    View Profile
                </a>
            )}
        </div>
    );
};

export default SkillCard;

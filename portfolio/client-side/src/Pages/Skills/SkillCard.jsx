import React from 'react';
const SkillCard = ({ icon: Icon, name, link }) => {
    return (
        <div className="w-44 h-44 p-6 rounded-xl shadow-lg bg-gray-800 hover:bg-blue-400 hover:text-black text-white flex flex-col items-center justify-center transition-transform transform hover:scale-105">
            <Icon size={48} className="mb-3" />
            <p className="text-lg font-semibold text-center">{name}</p>
            {link && (
                <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 px-4 py-1 bg-blue-400 rounded text-black text-sm hover:bg-white transition"
                >
                    View Profile
                </a>
            )}
        </div>
    );
};

export default SkillCard;

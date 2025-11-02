import React from 'react';
import SectionTitles from '../../Components/SectionTitles/SectionTitles';
import img from '../../assets/portfolio_pic.png';


const About = () => {

    return (
        <div className="bg-black py-4 px-8 md:px-24">
            <SectionTitles heading="about me" subHeading="Get to know" />

            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center mt-12 pb-20">

                {/* Profile Image */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <img
                        src={img}
                        alt="profile_img"
                        className="w-full max-w-xs md:max-w-sm lg:max-w-md rounded-lg shadow-lg object-cover"
                    />
                </div>

                {/* About Details */}
                <div className="w-full md:w-3/4 text-left text-white">
                    <h3 className="text-blue-400 text-xl font-semibold mb-2">Who am I?</h3>
                    <h1 className="text-2xl md:text-3xl font-bold mb-4 text-gray-100">
                        I'm Mahajabin Akter Ritu — a MERN Stack Developer and lifelong learner.
                    </h1>

                    <p className="text-gray-300 mb-2">
                        I'm a self-taught developer from Dhaka, passionate about turning ideas into real products.
                        I build full-stack web apps with React, Node.js, Express.js, MongoDB, focusing on clean code & user experience.
                    </p>
                    <p className="text-gray-300 mb-2">
                        I also enhanced my problem-solving skills by completing the Competitive Programming course by Phitron,
                        where I learned C, C++, data structures, and algorithms.
                    </p>
                    <p className="text-gray-300 mb-6">
                        I'm constantly learning to grow as a well-rounded Software Engineer who builds scalable, meaningful products.
                    </p>

                    <hr className="border-gray-300 mb-6" />

                    {/* Personal Info */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-300">
                        <p><strong>Name:</strong> Mahajabin Akter Ritu</p>
                        <p><strong>Email:</strong> mahajabin.ritu98@gmail.com</p>
                        <p><strong>From:</strong> Dhaka, Bangladesh</p>
                        <p><strong>Languages:</strong> Bengali (Native), English (Professional)</p>
                    </div>

                    <a
                        href="https://drive.google.com/file/d/1H4w_eaNm9I5_Of-1KcM3QZNpSgxCeBup/view?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full mt-8"
                    >
                        Download Resume
                    </a>
                </div>
            </div>
        </div>

    );
};

export default About;
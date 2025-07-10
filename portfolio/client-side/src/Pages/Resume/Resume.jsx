// import React from "react";

// const educationData = [
//     {
//         year: "2018 - 2022",
//         title: "High School Degree",
//         description:
//             "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
//     },
//     {
//         year: "2018 - 2022",
//         title: "Bachelor's Degree",
//         description:
//             "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
//     },
//     {
//         year: "2018 - 2022",
//         title: "Master Degree",
//         description:
//             "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
//     },
// ];

// const experienceData = [
//     {
//         year: "2018 - 2022",
//         title: "UI/UX Designer",
//         description:
//             "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
//     },
//     {
//         year: "2018 - 2022",
//         title: "Full-Stack Developer",
//         description:
//             "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
//     },
//     {
//         year: "2018 - 2022",
//         title: "Frontend Developer",
//         description:
//             "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
//     },
// ];

// const Resume = () => {
//     return (
//         <div className="w-full min-h-screen bg-gray-100 flex justify-center items-start py-10 px-4">
//             <main className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
//                 {/* Education */}
//                 <section className="space-y-6">
//                     <header>
//                         <h2 className="text-green-600 text-2xl font-semibold pb-4 border-b border-gray-300">EDUCATION</h2>
//                     </header>
//                     <div className="border-l-2 border-gray-400 pl-6 space-y-6">
//                         {educationData.map((item, index) => (
//                             <div
//                                 key={index}
//                                 className="relative bg-white p-4 rounded-lg shadow hover:shadow-md transition duration-300"
//                             >
//                                 <div className="absolute w-4 h-4 bg-green-600 border-2 border-white rounded-full -left-8 top-4"></div>
//                                 <h4 className="text-green-600 font-medium text-sm">{item.year}</h4>
//                                 <h3 className="text-lg font-semibold text-gray-800 py-2">{item.title}</h3>
//                                 <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </section>

//                 {/* Experience */}
//                 <section className="space-y-6">
//                     <header>
//                         <h2 className="text-green-600 text-2xl font-semibold pb-4 border-b border-gray-300">EXPERIENCE</h2>
//                     </header>
//                     <div className="border-l-2 border-gray-400 pl-6 space-y-6">
//                         {experienceData.map((item, index) => (
//                             <div
//                                 key={index}
//                                 className="relative bg-white p-4 rounded-lg shadow hover:shadow-md transition duration-300"
//                             >
//                                 <div className="absolute w-4 h-4 bg-green-600 border-2 border-white rounded-full -left-8 top-4"></div>
//                                 <h4 className="text-green-600 font-medium text-sm">{item.year}</h4>
//                                 <h3 className="text-lg font-semibold text-gray-800 py-2">{item.title}</h3>
//                                 <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </section>
//             </main>
//         </div>
//     );
// };

// export default Resume;


// import React from 'react';
// import SectionTitles from "../../Components/SectionTitles/SectionTitles";
// import {
//     VerticalTimeline,
//     VerticalTimelineElement,
// } from 'react-vertical-timeline-component';
// import 'react-vertical-timeline-component/style.min.css';

// // If using Material Icons or any React Icon Library:
// import { MdWork, MdSchool, MdStar } from 'react-icons/md';

// const Resume = () => {
//     return (
//         <div className="bg-black py-10 px-4">
//             {/* <h2 className="text-3xl font-bold text-center mb-10 text-green-600">My Resume</h2> */}
//             <SectionTitles heading="resume" subHeading="Check Out My"></SectionTitles>
//             <VerticalTimeline>
//                 <VerticalTimelineElement
//                     className="vertical-timeline-element--work"
//                     contentStyle={{ background: '#2196f3', color: '#fff' }}
//                     contentArrowStyle={{ borderRight: '7px solid  #2196f3' }}
//                     date="2011 - present"
//                     iconStyle={{ background: '#2196f3', color: '#fff' }}
//                     icon={<MdWork />}
//                 >
//                     <h3 className="vertical-timeline-element-title">Creative Director</h3>
//                     <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
//                     <p>Creative Direction, User Experience, Visual Design, Team Leading</p>
//                 </VerticalTimelineElement>

//                 <VerticalTimelineElement
//                     className="vertical-timeline-element--education"
//                     date="2006 - 2010"
//                     iconStyle={{ background: '#2196f3', color: '#fff' }}
//                     icon={<MdSchool />}
//                 >
//                     <h3 className="vertical-timeline-element-title">Bachelor of Science</h3>
//                     <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
//                     <p>Computer Science, Software Engineering</p>
//                 </VerticalTimelineElement>

//                 {/* <VerticalTimelineElement
//                     iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
//                     icon={<MdStar />}
//                 /> */}
//             </VerticalTimeline>
//         </div>
//     );
// };

// export default Resume;


import React from 'react';
import SectionTitles from "../../Components/SectionTitles/SectionTitles";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';

const educationData = [
    {
        id: 1,
        title: "Bachelor of Science in Computer Science",
        institution: "XYZ University",
        date: "2015 - 2019",
        description: "Graduated with honors. Focused on software development and algorithms.",
    },
    {
        id: 2,
        title: "High School Diploma",
        institution: "ABC High School",
        date: "2013 - 2015",
        description: "Completed higher secondary education with science major.",
    },
];

const workExperienceData = [
    {
        id: 1,
        title: "Software Engineer",
        company: "Awesome Company",
        date: "Jun 2019 - Present",
        description: "Developing web applications using React and Node.js.",
    },
    {
        id: 2,
        title: "Intern Developer",
        company: "Tech Startup",
        date: "Jan 2019 - May 2019",
        description: "Assisted in building features for the company website.",
    },
];

const Resume = () => {
    return (
        <div className="bg-black py-10 px-4">
            <SectionTitles heading="resume" subHeading="Check Out My"></SectionTitles>
            <VerticalTimeline>
                {/* Education Section */}
                {educationData.map(({ id, title, institution, date, description }) => (
                    <VerticalTimelineElement
                        key={id}
                        className="vertical-timeline-element--education"
                        date={date}
                        iconStyle={{ background: '#6fba1c', color: '#fff' }}
                        icon={<FaGraduationCap />}
                    >
                        <h3 className="vertical-timeline-element-title">{title}</h3>
                        <h4 className="vertical-timeline-element-subtitle">{institution}</h4>
                        <p>{description}</p>
                    </VerticalTimelineElement>
                ))}

                {/* Work Experience Section */}
                {workExperienceData.map(({ id, title, company, date, description }) => (
                    <VerticalTimelineElement
                        key={id}
                        className="vertical-timeline-element--work"
                        date={date}
                        iconStyle={{ background: '#1c87ba', color: '#fff' }}
                        icon={<FaBriefcase />}
                    >
                        <h3 className="vertical-timeline-element-title">{title}</h3>
                        <h4 className="vertical-timeline-element-subtitle">{company}</h4>
                        <p>{description}</p>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </div>
    );
};

export default Resume;

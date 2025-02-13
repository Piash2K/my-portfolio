import html from '../assets/html.png';
import css from '../assets/css.svg';
import javascript from '../assets/JavaScript.png';
import react from '../assets/react.svg';
import nodejs from '../assets/Node.png';
import mongodb from '../assets/mongodb.png';
import tailwind from '../assets/Tailwind.png';
import daisyui from '../assets/daisyui.png';
import express from '../assets/expressjs.png';
import c from '../assets/C.png';
import cplus from '../assets/C++.png';

import AOS from 'aos';
import 'aos/dist/aos.css';  // Import AOS styles

import { useEffect } from 'react';

const skills = [
    { name: 'HTML', logo: html },
    { name: 'CSS', logo: css },
    { name: 'JavaScript', logo: javascript },
    { name: 'React', logo: react },
    { name: 'Node.js', logo: nodejs },
    { name: 'MongoDB', logo: mongodb },
    { name: 'Tailwind CSS', logo: tailwind },
    { name: 'DaisyUI', logo: daisyui },
    { name: 'Express.js', logo: express },
    { name: 'C', logo: c },
    { name: 'C++', logo: cplus },
];

const SkillCard = ({ skill }) => (
    <div
        data-aos="fade-up"   // AOS Animation: Fade up effect when in view
        data-aos-duration="1000"   // Duration of animation in ms
        data-aos-delay="200"       // Delay before animation starts
        className="flex flex-col items-center p-6 bg-white rounded-lg shadow-xl transition-all duration-300 ease-in-out"
    >
        <img src={skill.logo} alt={skill.name} className="w-16 h-16 mb-4" />
        <h3 className="text-xl font-semibold text-gray-800">{skill.name}</h3>
    </div>
);

const Skills = () => {
    useEffect(() => {
        AOS.init();  // Initialize AOS animations on page load
    }, []);

    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-center text-gray-800 mb-8">
                    My Skills
                </h2>
                <p className="text-lg sm:text-xl lg:text-2xl text-center text-gray-700 mb-10 w-8/12 mx-auto">
                    I build modern, high-performance web applications with the MERN stack, focusing on clean code and seamless user experiences.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                    {skills.map((skill, index) => (
                        <SkillCard key={index} skill={skill} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

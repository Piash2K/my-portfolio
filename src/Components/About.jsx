import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const About = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,  // Animation duration
      once: true,      // Animation happens only once when the element is scrolled into view
    });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center px-6 lg:px-20 mt-24 sm:mt-16 mb-24 sm:mb-16 space-y-8">
      {/* Section Title with AOS animation */}
      <h2
        className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 border-b-4 border-[#FD6E0A] inline-block pb-4"
        data-aos="fade-up" // AOS animation for fade-up
      >
        About Me
      </h2>

      

      {/* Introduction Section with AOS */}
      <p
        className="text-lg sm:text-xl lg:text-2xl text-gray-800 leading-relaxed text-center md:w-7/12"
        data-aos="fade-up" // AOS animation for fade-up
        data-aos-delay="300" // Animation delay
      >
        I started my coding journey in 2022 and delved into web development in 2024. I specialize in full-stack web development, with expertise in React.js, Node.js, MongoDB, and Tailwind CSS. My focus is on building high-performance applications with intuitive UI/UX and scalable backend architectures.
      </p>

      {/* Work and Passion Section */}
      <div
        className="flex flex-col sm:flex-row justify-center items-center gap-8 w-full max-w-4xl"
        data-aos="fade-up" // AOS animation for fade-up
        data-aos-delay="400" // Animation delay
      >
        {/* Work and Passion */}
        <div
          className="flex-1 p-4 sm:p-6 lg:p-10 rounded-2xl shadow-md border-l-4 border-[#FD6E0A] transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          data-aos="zoom-in" // AOS zoom-in animation
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            What I Love to Do
          </h3>
          <ul className="list-disc text-base sm:text-lg lg:text-xl text-gray-700 pl-5">
            <li>Building user-friendly web applications.</li>
            <li>Optimizing performance and scalability.</li>
            <li>Designing modern UI/UX experiences.</li>
          </ul>
        </div>

        {/* Personal Interests */}
        <div
          className="flex-1 p-4 sm:p-6 lg:p-10 rounded-2xl shadow-md border-l-4 border-[#FD6E0A] transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          data-aos="zoom-in" // AOS zoom-in animation
          data-aos-delay="500" // Animation delay
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Beyond Coding
          </h3>
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
            When I'm not coding, I enjoy playing basketball and painting landscapes. Both help me stay creative and focused, whether on the court, canvas, or in development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

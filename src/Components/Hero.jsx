import { FaGithub, FaLinkedin, FaTwitter, FaFileDownload, FaNodeJs, FaPhone } from "react-icons/fa";
import { SiReact, SiMongodb, SiTailwindcss, SiJavascript } from "react-icons/si";
import bannerimg from '../assets/piash.jpg';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

const Hero = () => {
    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.div
            className="hero min-h-screen text-[#1B1B1B] flex items-center justify-center overflow-hidden relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
        >
            <div className="container px-6 py-16 gap-16 mx-auto flex flex-col-reverse lg:flex-row items-center relative z-10">
                <motion.div
                    className="lg:mr-12 text-center lg:text-left"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="text-lg font-medium mb-2">Hi, I am</h2>
                    <h1 className="text-xl font-bold text-[#1B1B1B] mb-2 leading-tight tracking-wide animate__animated animate__fadeIn animate__delay-1s">
                        Piash Islam
                    </h1>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1B1B1B] mb-8 leading-tight tracking-wide animate__animated animate__fadeIn animate__delay-1s">
                        WEB DEVELOPER
                    </h1>
                    <div className="text-lg sm:text-xl lg:text-2xl text-[#3D3D3D] mb-6 mx-auto font-medium animate__animated animate__fadeIn animate__delay-4s">
                        <div className="flex flex-wrap gap-2">
                            <Typewriter
                                words={[
                                    "Building web applications.",
                                    "Optimizing performance.",
                                    "Designing modern UI/UX.",
                                    "Working with React.js, Node.js, MongoDB.",
                                    "Building intuitive backends.",
                                    "Focusing on user-centric design."
                                ]}
                                loop={true}
                                cursor
                                cursorStyle="|"
                                typeSpeed={100}
                                deleteSpeed={50}
                                delaySpeed={1500}
                            />
                        </div>
                    </div>

                    <p className="text-lg sm:text-xl lg:text-xl text-[#3D3D3D] mb-6 max-w-3xl mx-auto font-medium animate__animated animate__fadeIn animate__delay-1s">
                        Passionate about building high-performance, scalable web applications with modern technologies, ensuring excellent UI/UX and seamless user experiences.
                    </p>

                    <motion.div
                        className="text-lg sm:text-xl lg:text-xl text-[#3D3D3D] mb-6 mx-auto font-medium animate__animated animate__fadeIn animate__delay-3s"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        <h2 className="text-2xl font-semibold mb-4">Technologies & Tools</h2>
                        <div className="flex flex-wrap gap-4">
                            <SiReact className="text-4xl text-[#61DAFB]" />
                            <FaNodeJs className="text-4xl text-[#68A063]" />
                            <SiMongodb className="text-4xl text-[#47A248]" />
                            <SiTailwindcss className="text-4xl text-[#06B6D4]" />
                            <SiJavascript className="text-4xl text-[#F7DF1E]" />
                        </div>
                    </motion.div>

                    <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-x-4 sm:space-y-0">
                        <a href="/resume.pdf" download="Piash_Islam_Resume.pdf" className="bg-[rgb(253,111,10)] text-white font-semibold py-4 px-12 rounded-full shadow-xl hover:scale-110 flex items-center gap-4">
                            <FaFileDownload />
                            Download Resume
                        </a>
                        <button onClick={scrollToContact} className="bg-[rgb(253,111,10)] text-white font-semibold py-4 px-12 rounded-full shadow-xl hover:scale-110 flex items-center gap-4">
                            <FaPhone />
                            Contact Me
                        </button>
                    </div>
                </motion.div>

                <motion.div
                    className="flex flex-col justify-center items-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    <div className="relative w-56 sm:w-72 lg:w-80 h-56 sm:h-72 lg:h-80 rounded-full overflow-hidden border-4 border-[#1B1B1B] shadow-xl mt-8 lg:mt-0">
                        <img src={bannerimg} alt="Profile" className="object-cover w-full h-full" />
                    </div>

                    <div className="flex justify-center lg:justify-start space-x-6 mt-6 animate__animated animate__fadeIn animate__delay-1s">
                        <a href="https://github.com/piash2k" target="_blank" rel="noopener noreferrer" className="text-3xl text-[#1B1B1B] hover:scale-125">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/piash2k" target="_blank" rel="noopener noreferrer" className="text-3xl text-[#1B1B1B] hover:scale-125">
                            <FaLinkedin />
                        </a>
                        <a href="https://twitter.com/piashislam2k" target="_blank" rel="noopener noreferrer" className="text-3xl text-[#1B1B1B] hover:scale-125">
                            <FaTwitter />
                        </a>
                    </div>
                </motion.div>
            </div>
            <div className="absolute inset-0 bg-[#FFF8F3]"></div>
        </motion.div>
    );
};

export default Hero;

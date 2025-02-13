import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => setProjects(data));

    // Initialize AOS
    AOS.init({
      duration: 1000,  // You can adjust the duration
      easing: "ease-in-out", // You can adjust easing function
      once: true, // Trigger animation only once
    });
  }, []);

  return (
    <div className="p-8 lg:p-15 bg-gray-100">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-center text-gray-800 mb-8">Projects</h2>
      <p className="text-lg sm:text-xl lg:text-2xl text-center text-gray-700 mb-10 w-11/12 md:w-7/12 mx-auto">
        Explore a selection of my recent projects that showcase my web development skills and expertise. Click on "View More" to dive into the details of each project.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:w-10/12 mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="rounded-xl shadow-lg overflow-hidden bg-white border border-gray-200 transition-transform transform hover:-translate-y-2 duration-300"
            data-aos="fade-right"  // Add AOS right-to-left animation
          >
            <img src={project.image} alt={project.name} className="w-full h-48 object-cover object-top rounded-t-xl" />

            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900">{project.name}</h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <div className="mt-4 flex justify-between items-center">
                <Link
                  to={`/project/${project.id}`}
                  className="px-4 py-2 rounded-lg text-white bg-[rgb(253,111,10)] hover:bg-[rgb(253,111,10)] transition-all shadow-md"
                >
                  View More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

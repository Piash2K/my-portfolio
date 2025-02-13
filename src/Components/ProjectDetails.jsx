import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const ProjectDetails = () => {
  const { id } = useParams(); // Grab the project id from the URL
  const [project, setProject] = useState(null);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-out", // Smooth animation easing
      once: true, // Trigger animation only once
    });

    // Fetch project details from JSON
    fetch(`/projects.json`)
      .then((response) => response.json())
      .then((data) => {
        const selectedProject = data.find((p) => p.id.toString() === id);
        if (selectedProject) {
          setProject(selectedProject);
        }
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
      });
  }, [id]);

  if (!project)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <ClipLoader color="#FDB70F" loading={true} size={50} />
      </div>
    );

  return (
    <div className="p-6 sm:p-10 bg-[#F9F9F9] min-h-screen">
      {/* Back Button */}
      <div className="mb-6" data-aos="fade-up">
        <Link
          to="/"
          className="px-6 py-2 bg-[rgb(253,111,10)] text-white font-semibold rounded-lg shadow-md hover:bg-[#ff7f32] transition-colors"
        >
          Back to Home
        </Link>
      </div>

      {/* Project Details Container */}
      <div className="max-w-5xl mx-auto bg-white p-6 sm:p-10 rounded-3xl shadow-xl">
        {/* Project Name */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-6" data-aos="fade-up">
          {project.name}
        </h2>

        {/* Flexbox Container for Image and Details */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Project Image */}
          <div className="w-full lg:w-1/2" data-aos="fade-up">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-64 sm:h-80 object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Project Details */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6" data-aos="fade-up" data-aos-delay="200">
            {/* Project Description */}
            <p className="text-gray-700 text-base sm:text-lg">{project.description}</p>

            {/* Technologies Used */}
            <div>
              <h3 className="font-semibold text-lg text-gray-800">Technologies:</h3>
              <ul className="list-disc pl-6 text-gray-600">
                {project.technologies.map((tech, index) => (
                  <li key={index} className="text-sm sm:text-base">{tech}</li>
                ))}
              </ul>
            </div>

            {/* Live Link */}
            <div>
              <h3 className="font-semibold text-lg text-gray-800">Live Link:</h3>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:underline text-sm sm:text-base"
                data-aos="fade-up"
              >
                {project.liveLink}
              </a>
            </div>

            {/* GitHub Link */}
            <div>
              <h3 className="font-semibold text-lg text-gray-800">GitHub Link:</h3>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:underline text-sm sm:text-base"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                {project.githubLink}
              </a>
            </div>

            {/* Project Challenges */}
            <div>
              <h3 className="font-semibold text-lg text-gray-800">Challenges:</h3>
              <p className="text-gray-600 text-sm sm:text-base">{project.challenges}</p>
            </div>

            {/* Project Improvements */}
            <div>
              <h3 className="font-semibold text-lg text-gray-800">Improvements:</h3>
              <p className="text-gray-600 text-sm sm:text-base">{project.improvements}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;

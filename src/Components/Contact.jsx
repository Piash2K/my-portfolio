import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { FaEnvelope, FaPhone, FaWhatsapp, FaUser, FaPaperPlane } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-out-cubic" });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_v5mcj52";
    const templateID = "template_883xjqt";
    const publicKey = "6w6mYJRXpgjanY1Li";

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then((response) => {
        console.log("Email sent successfully:", response);
        setStatus("Your message has been sent successfully!");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setStatus(`Something went wrong: ${error.text}`);
      });
  };

  return (
    <div className="p-6 sm:p-12 bg-[#FFF8F3]">
      <h2 data-aos="fade-up" className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-center text-gray-800 mb-8">
        Get in Touch
      </h2>

      <p
        data-aos="fade-up"
        data-aos-delay="200"
        className="text-lg sm:text-xl lg:text-2xl text-center text-gray-700 mb-10 w-8/12 mx-auto"
      >
        Feel free to reach out for collaborations, discussions, or just to say hello!
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-8">
        {/* Contact Form Section */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="bg-white p-6 sm:p-10 rounded-lg shadow-xl w-full max-w-md"
        >
          <form onSubmit={handleSubmit}>
            <div className="mb-5 relative">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Name
              </label>
              <FaUser className="absolute bottom-4 left-4 transform -translate-y-1/2 text-gray-700" />
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full pl-14 pr-4 p-4 border border-[rgb(253,111,10)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(253,111,10)]"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-5 relative">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <FaEnvelope className="absolute bottom-4 left-4 transform -translate-y-1/2 text-gray-700" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-14 pr-4 p-4 border border-[rgb(253,111,10)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(253,111,10)]"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-5 relative">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <FaPaperPlane className="absolute bottom-36 left-4 transform -translate-y-1/2 text-gray-700" />
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full pl-14 pr-4 p-4 border border-[rgb(253,111,10)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(253,111,10)]"
                rows="6"
                placeholder="Your Message"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[rgb(253,111,10)] text-white p-4 rounded-lg hover:bg-[#ff7f32] transition-all duration-300 shadow-md"
            >
              Send Message
            </button>
          </form>

          {/* Status message */}
          {status && <p className="mt-4 text-center text-gray-700">{status}</p>}
        </div>

        {/* Contact Info Section */}
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="bg-white p-6 sm:p-10 rounded-lg shadow-xl w-full max-w-md"
        >
          <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-center text-gray-800">
            Contact Info
          </h3>
          <div className="flex flex-col space-y-6">
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-3xl text-[rgb(253,111,10)]" />
              <p className="text-lg">
                <a href="mailto:piashdiu@gmail.com" className="text-lg hover:text-[rgb(253,111,10)]">
                  piashdiu@gmail.com
                </a>
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhone className="text-3xl text-[rgb(253,111,10)]" />
              <p className="text-lg">
                <a href="tel:+8801301565464" className="text-lg hover:text-[rgb(253,111,10)]">
                  +8801301565464
                </a>
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <FaWhatsapp className="text-3xl text-[rgb(253,111,10)]" />
              <p className="text-lg">
                <a href="https://wa.me/8801301565464" className="text-lg hover:text-[rgb(253,111,10)]">
                  Click to Chat
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

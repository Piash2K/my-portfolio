import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleMenu = () => setIsOpen(!isOpen);

  // Set the active section on scroll
  useEffect(() => {
    const onScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (
          element &&
          window.scrollY >= element.offsetTop - 100 &&
          window.scrollY < element.offsetTop + element.offsetHeight
        ) {
          setActiveSection(section);
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu after clicking a link
  const handleLinkClick = (section) => {
    setActiveSection(section);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-95 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-5 px-6">
        {/* Logo */}
        <Link to="/" className="text-4xl font-bold text-white">
          PIASH
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg">
          {["home", "about", "skills", "projects", "contact"].map((item) => (
            <li key={item}>
              <ScrollLink
                to={item}
                smooth={true}
                duration={500}
                offset={-80}
                className={`px-4 py-2 cursor-pointer transition duration-300 ${
                  activeSection === item
                    ? "text-primary border-b-2 border-primary"
                    : "text-gray-300 hover:text-primary"
                }`}
                onClick={() => handleLinkClick(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu with Background Color */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-95 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        {/* Close Button */}
        <button
          className="absolute top-6 right-6 text-white text-2xl"
          onClick={toggleMenu}
        >
          <FaTimes />
        </button>

        {/* Mobile Navigation Links */}
        <ul className="flex flex-col items-center justify-center h-full space-y-8 text-white text-2xl">
          {["home", "about", "skills", "projects", "contact"].map((item) => (
            <li key={item}>
              <ScrollLink
                to={item}
                smooth={true}
                duration={500}
                offset={-80}
                className={`block cursor-pointer transition duration-300 ${
                  activeSection === item ? "text-primary" : "text-gray-300"
                } hover:text-primary`}
                onClick={() => handleLinkClick(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

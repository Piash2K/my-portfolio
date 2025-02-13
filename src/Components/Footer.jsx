import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer footer-center p-4 bg-black bg-opacity-95 text-white">
      <div>
        <p>Copyright © {currentYear} - All rights reserved by Piash</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://github.com/piash2k" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl hover:text-gray-400 transition-colors" />
          </a>
          <a href="https://www.linkedin.com/in/piash2k" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl hover:text-gray-400 transition-colors" />
          </a>
          <a href="https://twitter.com/piashislam2k" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl hover:text-gray-400 transition-colors" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

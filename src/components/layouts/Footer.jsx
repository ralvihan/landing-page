import { FaInstagram, FaFacebookF, FaYoutube, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-orange-900 bg-transparent text-gray-300 py-7" id="footer">
      
      {/* Top container for content */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          
          {/* Left Section - Logo and Description */}
          <div className="md:w-1/2">
            <div className="mb-4">
              <img 
                src="/B.svg" 
                alt="Logo B" 
                className="w-12 h-12 mb-4"
              />
            </div>

            <p className="text-gray-200 leading-relaxed mb-6">
              Unlock Your Career Potential with LinkedIn<br/>
              Personal Branding & Networking untuk Dapat Kerja Lebih Cepat
            </p>

            <div className="space-y-2">
              <p className="text-gray-200">email@example.com</p>
              <p className="text-gray-200">+62 123-1456-7890</p>
            </div>
          </div>

          {/* Right Section - Navigation and Customer */}
          <div className="flex flex-col md:flex-row gap-8">
            
            {/* Navigation Section */}
            <div className="min-w-[140px]">
              <h3 className="text-white font-semibold text-lg mb-6">Navigasi Cepat</h3>
              <ul className="space-y-3">
                <li><a href="#features" className="text-gray-200 hover:text-white transition-colors">Features</a></li>
                <li><a href="#testimonial" className="text-gray-200 hover:text-white transition-colors">Testimonial</a></li>
              </ul>
            </div>

            {/* Customer Section */}
            <div className="min-w-[120px]">
              <h3 className="text-white font-semibold text-lg mb-6">Customer</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-200 hover:text-white transition-colors">Client Support</a></li>
                <li><a href="#" className="text-gray-200 hover:text-white transition-colors">Latest News</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom border full-width */}
      <div className="border-t border-gray-400 mt-6"></div>

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto px-6 mt-4 flex flex-col md:flex-row justify-between items-center gap-2">
        <p className="text-gray-200 text-center md:text-left text-sm">
          Copyright © {new Date().getFullYear()} - All rights reserved
        </p>

        <div className="flex items-center space-x-4 mt-2 md:mt-0">
          <a href="https://www.instagram.com/raihan" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 transition-colors">
            <FaInstagram className="w-5 h-5" />
          </a>
          <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200e transition-colors">
            <FaTwitter className="w-5 h-5" />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 transition-colors">
            <FaFacebookF className="w-5 h-5" />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 transition-colors">
            <FaYoutube className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 transition-colors">
            <FaLinkedinIn className="w-5 h-5" />
          </a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;

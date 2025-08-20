import { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      window.history.pushState(null, null, `#${sectionId}`);
    }
    closeMenu();
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { 
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', section: 'hero' },
    { name: 'Classes', section: 'features' },
    { name: 'About', section: 'testimonial' },
    { name: 'Contact', section: 'footer' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-20 transition-colors duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto flex justify-between items-center p-4 px-6 md:px-8">
        <div className="flex items-center space-x-2">
          <img src="/B.svg" alt="Logo" className="w-8 h-8" />
        </div>

        {/* Desktop menu */}
        <ul className="hidden lg:flex space-x-6 font-semibold">
          {menuItems.map((item) => (
            <li key={item.section}>
              <button
                onClick={() => scrollToSection(item.section)}
                className="hover:text-orange-500 transition-colors duration-200 cursor-pointer"
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-xl hover:text-orange-500 transition-colors duration-200"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <ul className="flex flex-col space-y-2 p-4">
            {menuItems.map((item) => (
              <li key={item.section}>
                <button
                  onClick={() => scrollToSection(item.section)}
                  className="block w-full py-2 px-4 hover:bg-orange-50 hover:text-orange-500 rounded-md transition-colors duration-200 text-right"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;

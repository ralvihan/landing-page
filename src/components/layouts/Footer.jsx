import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = { 
    product: [
      { name: "Features", href: "#features" },
      { name: "Testimonials", href: "#testimonial" },
      { name: "Pricing", href: "#pricing" }
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Contact", href: "#contact" },
      { name: "Blog", href: "#blog" }
    ],
    support: [
      { name: "Help Center", href: "#help" },
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" }
    ]
  };

  const socialLinks = [
    { icon: FaInstagram, url: "https://instagram.com" },
    { icon: FaFacebook, url: "https://facebook.com" },,  
    { icon: FaYoutube, url: "https://youtube.com" },
  ];

  return (
    <footer id="footer" className="bg-orange-950 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
        
        {/* Brand */}
        <div className="lg:col-span-1">
          <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Logo LinkedIn</h3>
          <p className="text-sm md:text-base text-gray-300 mb-4 md:mb-6 leading-relaxed">
            Master your LinkedIn presence and accelerate your career growth.
          </p>
        </div>

        {/* Product */}
        <div>
          <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Product</h4>
          <ul className="space-y-2">
            {footerLinks.product.map((link, i) => (
              <li key={i}>
                <a href={link.href} className="text-sm md:text-base text-gray-300 hover:text-white transition-colors duration-200">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Company</h4>
          <ul className="space-y-2">
            {footerLinks.company.map((link, i) => (
              <li key={i}>
                <a href={link.href} className="text-sm md:text-base text-gray-300 hover:text-white transition-colors duration-200">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Support</h4>
          <ul className="space-y-2">
            {footerLinks.support.map((link, i) => (
              <li key={i}>
                <a href={link.href} className="text-sm md:text-base text-gray-300 hover:text-white transition-colors duration-200">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Kontak</h4>
          <p className="text-sm md:text-base text-gray-300 mb-2">email@example.com</p>
          <div className="flex space-x-3 md:space-x-4">
            {socialLinks.map((item, i) => {
              const Icon = item.icon;
              return (
                <a 
                  key={i} 
                  href={item.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-xl"
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6 flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
          <p className="text-xs md:text-sm text-gray-400">© {currentYear} LinkedIn React. All rights reserved.</p>
          <div className="flex space-x-4 md:space-x-6">
            <a href="#privacy" className="text-xs md:text-sm text-gray-400 hover:text-white transition-colors duration-200">Privacy</a>
            <a href="#terms" className="text-xs md:text-sm text-gray-400 hover:text-white transition-colors duration-200">Terms</a>
            <a href="#cookies" className="text-xs md:text-sm text-gray-400 hover:text-white transition-colors duration-200">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

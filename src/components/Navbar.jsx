import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/welcome" },
    { name: "Pricing", path: "#pricing" },
    { name: "Contact", path: "#contact" },
    { name: "Advertisement", path: "/" },
  ];

  // ✅ Smooth scroll or route navigation
  const handleMenuClick = (path) => {
    if (path.startsWith("#")) {
      const section = document.querySelector(path);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = path;
    }
    setMenuOpen(false);
  };

  // ✅ WhatsApp button handler
  const handleWhatsAppClick = () => {
    const phoneNumber = "919360962680"; 
    const message = encodeURIComponent("I am interested in the 7 Days Workshop");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
          <Link
            to="/"
            className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Technovahub
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-medium text-gray-700">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleMenuClick(item.path)}
              className="relative group transition"
            >
              {item.name}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-blue-600 to-purple-600 transition-all group-hover:w-full"></span>
            </button>
          ))}
        </div>

        {/* CTA Buttons (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/enroll"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-full font-semibold shadow-md hover:shadow-lg transition"
            >
              Enroll Now
            </Link>
          </motion.div>

          {/* ✅ WhatsApp Contact Button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <button
              onClick={handleWhatsAppClick}
              className="bg-green-500 text-white px-5 py-2 rounded-full font-semibold shadow-md hover:shadow-lg transition"
            >
              Contact on WhatsApp
            </button>
          </motion.div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white/90 backdrop-blur-md shadow-md"
        >
          <div className="flex flex-col items-center space-y-4 py-6 text-gray-700 font-medium">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleMenuClick(item.path)}
                className="hover:text-blue-600 transition"
              >
                {item.name}
              </button>
            ))}

            {/* Enroll Button */}
            <Link
              to="/enroll"
              onClick={() => setMenuOpen(false)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-full font-semibold shadow-md hover:shadow-lg transition"
            >
              Enroll Now
            </Link>

            {/* ✅ WhatsApp Contact Button (Mobile) */}
            <button
              onClick={() => {
                handleWhatsAppClick();
                setMenuOpen(false);
              }}
              className="bg-green-500 text-white px-5 py-2 rounded-full font-semibold shadow-md hover:shadow-lg transition"
            >
              Contact on WhatsApp
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;

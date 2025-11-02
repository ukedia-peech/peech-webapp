import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { getPublicAssetPath } from "../../utils/utils";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Solutions", href: "/solutions" },
    { name: "About", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black-950/80 backdrop-blur-xl shadow-2xl border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo - Minimal & Clean */}
            <Link to="/" onClick={handleNavClick}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center space-x-3 group"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-primary-500/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img
                    src={getPublicAssetPath("peech-logo-removebg-preview.png")}
                    alt="Peech"
                    className="relative w-8 h-8 object-contain"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                </div>
                <span className="text-lg lg:text-xl font-semibold text-white tracking-tight">
                  Peech
                </span>
              </motion.div>
            </Link>

            {/* Desktop Navigation - Ultra Minimal */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link key={item.name} to={item.href} onClick={handleNavClick}>
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.4 }}
                      className="relative px-4 py-2 group"
                    >
                      <span
                        className={`relative text-sm font-medium transition-colors duration-300 ${
                          isActive
                            ? "text-white"
                            : "text-gray-400 group-hover:text-white"
                        }`}
                      >
                        {item.name}
                      </span>

                      {/* Active indicator - subtle underline */}
                      {isActive && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-primary-500 to-orange-500"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      )}

                      {/* Hover effect */}
                      <motion.div
                        className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ scale: 1.05 }}
                      />
                    </motion.div>
                  </Link>
                );
              })}
            </nav>

            {/* CTA Button - Glassmorphism Design */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="hidden lg:block"
            >
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative"
                >
                {/* Glowing border effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 via-orange-500 to-primary-600 rounded-xl opacity-60 group-hover:opacity-100 blur-sm transition duration-300"></div>

                {/* Glassmorphism container */}
                <div className="relative px-6 py-2.5 bg-black-900/40 backdrop-blur-xl rounded-xl border border-white/10 group-hover:border-white/20 transition-all duration-300 overflow-hidden">
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Glass reflection */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>

                  {/* Button content */}
                  <div className="relative flex items-center gap-2">
                    <span className="text-white font-medium text-sm tracking-tight">
                      Get Started
                    </span>
                    <svg
                      className="w-4 h-4 text-primary-400 group-hover:translate-x-0.5 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>

                  {/* Shimmer effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700"></div>
                </div>
              </motion.button>
              </Link>
            </motion.div>

            {/* Mobile Menu Button - Refined Animation */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/5 transition-colors"
              aria-label="Toggle menu"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <motion.span
                  animate={
                    isOpen
                      ? { rotate: 45, y: 7, backgroundColor: "#f97316" }
                      : { rotate: 0, y: 0, backgroundColor: "#e5e7eb" }
                  }
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-0.5 rounded-full"
                />
                <motion.span
                  animate={isOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-0.5 bg-gray-300 rounded-full"
                />
                <motion.span
                  animate={
                    isOpen
                      ? { rotate: -45, y: -7, backgroundColor: "#f97316" }
                      : { rotate: 0, y: 0, backgroundColor: "#e5e7eb" }
                  }
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-0.5 rounded-full"
                />
              </div>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu - Rendered outside header to avoid inheritance */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 bg-black-950 z-[60]"
            onClick={() => setIsOpen(false)}
            style={{ backgroundColor: 'rgb(3, 7, 18)' }}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="container-custom px-4 sm:px-6 pt-24 pb-8"
              onClick={(e) => e.stopPropagation()}
            >
              <nav className="flex flex-col space-y-2">
                {navItems.map((item, index) => {
                  const isActive = location.pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={handleNavClick}
                    >
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.08, duration: 0.4 }}
                        className={`relative px-6 py-4 rounded-xl transition-all duration-300 ${
                          isActive
                            ? "bg-gradient-to-r from-primary-500/20 to-orange-500/20 border border-primary-500/30"
                            : "hover:bg-white/5"
                        }`}
                      >
                        <span
                          className={`text-lg font-medium ${
                            isActive ? "text-white" : "text-gray-300"
                          }`}
                        >
                          {item.name}
                        </span>

                        {isActive && (
                          <motion.div
                            className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-primary-500 to-orange-500 rounded-r-full"
                            layoutId="activeMobile"
                          />
                        )}
                      </motion.div>
                    </Link>
                  );
                })}
              </nav>

              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: navItems.length * 0.08 + 0.1,
                  duration: 0.4,
                }}
                className="mt-8"
              >
                <Link to="/contact" onClick={handleNavClick}>
                  <button className="w-full px-6 py-4 bg-gradient-to-r from-primary-500 to-orange-500 text-white text-base font-semibold rounded-xl shadow-2xl shadow-primary-500/30">
                    Get Started
                  </button>
                </Link>
              </motion.div>

              {/* Mobile Footer Info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="mt-12 pt-8 border-t border-white/5"
              >
                <p className="text-gray-500 text-sm text-center">
                  © {new Date().getFullYear()} Peech. All rights reserved.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;

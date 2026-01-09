import React, { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./components/layout/Header";
import Footer from "./components/sections/Footer";
import LoadingScreen from "./components/ui/LoadingScreen";
import ScrollToTop from "./components/ui/ScrollToTop";
import HomePage from "./pages/HomePage"; // Import HomePage directly (most visited)

// We don't need a basename anymore since we're using a custom domain

// Lazy load other pages for better performance
const SolutionsPage = lazy(() => import("./pages/SolutionsPage"));
const ResourcesPage = lazy(() => import("./pages/ResourcesPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const CareersPage = lazy(() => import("./pages/CareersPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));

// Wrapper component to access location for Footer
const AppContent = ({ isLoading, handleLoadingComplete }) => {
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';

  return (
    <div className="App">
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      </AnimatePresence>

      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Header />
            <main>
              <Suspense
                fallback={
                  <div className="min-h-screen flex items-center justify-center bg-black-950">
                    <div className="flex flex-col items-center gap-4">
                      <div className="w-16 h-16 border-4 border-primary-500/30 border-t-primary-500 rounded-full animate-spin"></div>
                      <p className="text-gray-400 text-sm">Loading...</p>
                    </div>
                  </div>
                }
              >
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/home" element={<HomePage />} />
                  <Route path="/solutions" element={<SolutionsPage />} />
                  <Route path="/resources" element={<ResourcesPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/careers" element={<CareersPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                </Routes>
              </Suspense>
            </main>
            <Footer hideContactForm={false} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <Router>
      <ScrollToTop />
      <AppContent isLoading={isLoading} handleLoadingComplete={handleLoadingComplete} />
    </Router>
  );
}

export default App;

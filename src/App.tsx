import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductViewer from './components/ProductViewer';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import Loader from './components/Loader';

// ✅ New Imports
import ShowcaseCarousel from './components/ShowcaseCarousel';
import PopupModal from './components/PopupModal';
import { useScrollReveal } from './components/useScrollReveal';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  useScrollReveal(); // ✅ Activate scroll reveal on scroll

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <Hero />
          <Features />
          <ProductViewer />
          <Pricing />
          <FAQ />
          <CTA />
          
          {/* ✅ New Feature Sections */}
          <ShowcaseCarousel />
          <PopupModal />

          <Footer />
          <ChatBot />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;

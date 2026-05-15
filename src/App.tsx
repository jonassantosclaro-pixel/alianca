/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WorkGallery from './components/WorkGallery';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import WelcomeIntro from './components/Intro';
import Testimonials from './components/Testimonials';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 6000); // Intro lasts 6 seconds as requested
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen font-sans">
      <WelcomeIntro />
      <div className={showIntro ? 'opacity-0' : 'opacity-100 transition-opacity duration-1000'}>
        <Navbar />
        <Hero />
        <Services />
        <WorkGallery />
        <Testimonials />
        <About />
        <Contact />
        <Footer />
        <FloatingActions />
      </div>
    </main>
  );
}


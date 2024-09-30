import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Signup from './components/Signup';
import FeatureDetailed from './components/FeatureDetailed';

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <FeatureDetailed />
      <Testimonials />
      <Signup />
      <Footer />
    </div>
  );
};

export default App;


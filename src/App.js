import React from 'react';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import Category from './components/Categories';
import FeaturedProduct from './components/FeaturedProduct';
// import WhyChooseSection from './components/WhyChooseSection';

function App() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Category />
      <FeaturedProduct />
      {/* <WhyChooseSection /> */}
      <Footer />
    </div>
  );
}
export default App;

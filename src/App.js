import React from 'react';
// import Footer from './components/Footer';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import Category from './components/Categories';
import FeaturedProduct from './components/FeaturedProduct';
import WhyChooseSection from './components/WhyChooseSection';
import RecentlyViewed from './components/RecentlyViewed';
import { FooterSection, Footer } from './components/FooterSection';


function App() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Category />
      <FeaturedProduct />
      <WhyChooseSection />
      <RecentlyViewed />
      <FooterSection />
      <Footer />
    </div>
  );
}
export default App;

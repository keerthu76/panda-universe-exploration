
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FactsSection from '@/components/FactsSection';
import ConservationSection from '@/components/ConservationSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HeroSection />
        <FactsSection />
        <ConservationSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

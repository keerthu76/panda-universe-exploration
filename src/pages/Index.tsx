
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FactsSection from '@/components/FactsSection';
import HabitatSection from '@/components/HabitatSection';
import SanctuarySection from '@/components/SanctuarySection';
import ConservationSection from '@/components/ConservationSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HeroSection />
        <FactsSection />
        <HabitatSection />
        <SanctuarySection />
        <ConservationSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

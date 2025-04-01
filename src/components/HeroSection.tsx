
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-panda-green-light/20 to-white min-h-[85vh] flex items-center">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-panda-black">
              Welcome to <span className="text-panda-green">Panda</span><span className="text-panda-bamboo">Verse</span>
            </h1>
            <p className="text-lg md:text-xl mb-6 text-gray-700">
              Discover the fascinating world of pandas and join the mission to protect these adorable creatures for future generations.
            </p>
            <div className="flex space-x-4">
              <Button className="bg-panda-green hover:bg-panda-green-dark text-white">
                Learn More
              </Button>
              <Button variant="outline" className="border-panda-bamboo text-panda-bamboo hover:bg-panda-bamboo hover:text-white">
                Support Conservation
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden shadow-xl animate-float">
              <img 
                src="https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?q=80&w=2072&auto=format&fit=crop" 
                alt="Giant Panda" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <a 
          href="#facts" 
          className="animate-bounce bg-white p-2 w-10 h-10 ring-1 ring-panda-green shadow-lg rounded-full flex items-center justify-center"
        >
          <ArrowDown className="w-6 h-6 text-panda-green" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

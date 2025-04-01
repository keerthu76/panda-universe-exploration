
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <span className="text-xl font-bold text-panda-green">Panda<span className="text-panda-bamboo">Verse</span></span>
            </a>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#facts" className="text-gray-700 hover:text-panda-green font-medium transition-colors">Facts</a>
            <a href="#habitat" className="text-gray-700 hover:text-panda-green font-medium transition-colors">Habitat</a>
            <a href="#sanctuaries" className="text-gray-700 hover:text-panda-green font-medium transition-colors">Sanctuaries</a>
            <a href="#conservation" className="text-gray-700 hover:text-panda-green font-medium transition-colors">Conservation</a>
          </div>
          
          <div className="md:hidden flex items-center">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a 
              href="#facts" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-panda-green-light hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Facts
            </a>
            <a 
              href="#habitat" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-panda-green-light hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Habitat
            </a>
            <a 
              href="#sanctuaries" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-panda-green-light hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sanctuaries
            </a>
            <a 
              href="#conservation" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-panda-green-light hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Conservation
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

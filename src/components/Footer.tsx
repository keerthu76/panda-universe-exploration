
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-panda-green-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Panda<span className="text-panda-bamboo">Verse</span></h3>
            <p className="mb-4 text-gray-300">
              Dedicated to educating the world about pandas and supporting conservation efforts to protect these amazing creatures.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-panda-bamboo transition-colors">
                <Facebook />
              </a>
              <a href="#" className="hover:text-panda-bamboo transition-colors">
                <Twitter />
              </a>
              <a href="#" className="hover:text-panda-bamboo transition-colors">
                <Instagram />
              </a>
              <a href="#" className="hover:text-panda-bamboo transition-colors">
                <Youtube />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#facts" className="hover:text-panda-bamboo transition-colors">Panda Facts</a></li>
              <li><a href="#habitat" className="hover:text-panda-bamboo transition-colors">Habitats</a></li>
              <li><a href="#sanctuaries" className="hover:text-panda-bamboo transition-colors">Sanctuaries & Zoos</a></li>
              <li><a href="#conservation" className="hover:text-panda-bamboo transition-colors">Conservation</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Get Involved</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-panda-bamboo transition-colors">Donate</a></li>
              <li><a href="#" className="hover:text-panda-bamboo transition-colors">Adopt a Panda</a></li>
              <li><a href="#" className="hover:text-panda-bamboo transition-colors">Volunteer</a></li>
              <li><a href="#" className="hover:text-panda-bamboo transition-colors">Educational Resources</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} PandaVerse. All rights reserved.</p>
          <p className="mt-2">
            This website is dedicated to the protection and conservation of giant pandas worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

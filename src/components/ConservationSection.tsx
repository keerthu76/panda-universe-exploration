
import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Shield, Leaf } from 'lucide-react';

const ConservationSection = () => {
  const organizations = [
    {
      name: 'World Wildlife Fund',
      description: 'Works to protect panda habitats and establish new reserves.',
      link: 'https://www.worldwildlife.org/species/giant-panda',
      logo: 'https://cdn.worldwildlife.org/assets/structure/wwf_logo_square.png'
    },
    {
      name: 'Chengdu Panda Base',
      description: 'Focuses on breeding and reintroduction programs.',
      link: 'https://www.panda.org.cn/',
      logo: 'https://www.panda.org.cn/Content/images/logo.png'
    },
    {
      name: 'Pandas International',
      description: 'Provides direct support to panda conservation centers.',
      link: 'https://www.pandasinternational.org/',
      logo: 'https://www.pandasinternational.org/wp-content/uploads/2020/03/PI-Logo-e1659034229348.jpg'
    }
  ];

  return (
    <section id="conservation" className="panda-container bg-white">
      <h2 className="section-title">Conservation Efforts</h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
        The journey to save pandas requires global cooperation. Here's how conservationists are working to ensure these beloved animals survive for generations to come.
      </p>

      <div className="bg-gradient-to-br from-panda-green/10 to-panda-bamboo/10 p-6 md:p-10 rounded-2xl shadow-sm mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-panda-green rounded-full flex items-center justify-center mb-4">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-panda-green mb-2">Habitat Protection</h3>
            <p className="text-gray-600">
              Establishing protected reserves and connecting fragmented forest areas to create wildlife corridors.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-panda-bamboo rounded-full flex items-center justify-center mb-4">
              <Leaf className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-panda-green mb-2">Bamboo Preservation</h3>
            <p className="text-gray-600">
              Ensuring healthy bamboo forests through sustainable management and replanting initiatives.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-panda-green-dark rounded-full flex items-center justify-center mb-4">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-panda-green mb-2">Breeding Programs</h3>
            <p className="text-gray-600">
              Supporting captive breeding and reintroduction programs to boost wild panda populations.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h3 className="text-2xl font-bold text-center text-panda-green-dark mb-6">Success Story</h3>
        <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1527118732049-c88155f2107c?q=80&w=1974&auto=format&fit=crop" 
              alt="Panda success story" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 p-6 flex flex-col justify-center">
            <h4 className="text-xl font-bold mb-3">From Endangered to Vulnerable</h4>
            <p className="text-gray-600 mb-4">
              In 2016, giant pandas were reclassified from "Endangered" to "Vulnerable" on the IUCN Red List, thanks to a 17% increase in their population over a decade.
            </p>
            <p className="text-gray-600">
              This conservation success story demonstrates what can be achieved through dedicated conservation efforts, habitat protection, and international cooperation.
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-center text-panda-green mb-6">Organizations Leading the Way</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {organizations.map((org, index) => (
          <div key={index} className="border rounded-lg p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow">
            <div className="h-16 w-16 mb-4 flex items-center justify-center">
              <img 
                src={org.logo} 
                alt={`${org.name} logo`}
                className="max-h-full max-w-full"
              />
            </div>
            <h4 className="text-lg font-bold mb-2">{org.name}</h4>
            <p className="text-gray-600 mb-4">{org.description}</p>
            <Button 
              variant="link" 
              className="text-panda-green hover:text-panda-green-dark"
              onClick={() => window.open(org.link, '_blank')}
            >
              Learn More
            </Button>
          </div>
        ))}
      </div>

      <div className="bg-panda-green p-8 rounded-xl text-white text-center">
        <h3 className="text-2xl font-bold mb-4">Join the Movement to Save Pandas</h3>
        <p className="mb-6 max-w-2xl mx-auto">
          Your contribution can help protect these beloved creatures and their habitats for future generations.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button className="bg-white text-panda-green hover:bg-panda-bamboo hover:text-white">
            Donate Now
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-panda-green">
            Adopt a Panda
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ConservationSection;

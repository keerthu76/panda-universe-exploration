
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const HabitatSection = () => {
  const habitats = [
    {
      id: 'mountains',
      name: 'Mountain Forests',
      description: 'Pandas primarily inhabit temperate mountain forests with dense bamboo undergrowth at elevations of 5,000 to 10,000 feet. These cool, misty mountains provide the perfect environment for bamboo to flourish.',
      image: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=2073&auto=format&fit=crop',
      characteristics: [
        'High altitude: 1,500-3,000 meters',
        'Cool, misty climate',
        'Dense bamboo undergrowth',
        'Mixed coniferous and broadleaf forests'
      ]
    },
    {
      id: 'bamboo',
      name: 'Bamboo Forests',
      description: 'Bamboo forests are crucial for pandas as they provide both food and shelter. Pandas require at least two species of bamboo to be available in their habitat to sustain their dietary needs throughout the year.',
      image: 'https://images.unsplash.com/photo-1597241362038-3f1e57174805?q=80&w=2069&auto=format&fit=crop',
      characteristics: [
        'Multiple bamboo species',
        'Dense bamboo thickets',
        'Umbrella bamboo and arrow bamboo',
        'Year-round bamboo availability is crucial'
      ]
    },
    {
      id: 'reserves',
      name: 'Nature Reserves',
      description: 'China has established over 60 nature reserves dedicated to protecting giant pandas and their habitat. These reserves cover more than 60% of the pandas' natural habitat and approximately 70% of the wild panda population.',
      image: 'https://images.unsplash.com/photo-1527904324834-3bda86da6771?q=80&w=2004&auto=format&fit=crop',
      characteristics: [
        'Protected status',
        'Limited human access',
        'Ecological research centers',
        'Conservation management plans'
      ]
    }
  ];

  return (
    <section id="habitat" className="panda-container bg-white">
      <h2 className="section-title">Panda Habitats</h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
        Giant pandas live primarily in the mountain forests of central China, where cool, misty forests are rich with bamboo.
      </p>

      <Tabs defaultValue="mountains" className="w-full max-w-4xl mx-auto">
        <TabsList className="grid grid-cols-3 mb-8">
          {habitats.map((habitat) => (
            <TabsTrigger key={habitat.id} value={habitat.id}>{habitat.name}</TabsTrigger>
          ))}
        </TabsList>
        
        {habitats.map((habitat) => (
          <TabsContent key={habitat.id} value={habitat.id} className="focus:outline-none">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="md:w-1/2">
                <div className="rounded-xl overflow-hidden shadow-md mb-4">
                  <img 
                    src={habitat.image} 
                    alt={habitat.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold mb-3 text-panda-green">{habitat.name}</h3>
                <p className="text-gray-600 mb-4">{habitat.description}</p>
                <h4 className="font-bold text-panda-bamboo mb-2">Key Characteristics:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {habitat.characteristics.map((item, idx) => (
                    <li key={idx} className="text-gray-600">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
      
      <div className="mt-12 p-6 bg-panda-green-light/10 rounded-lg">
        <h4 className="text-xl font-bold mb-3 text-center text-panda-green-dark">Current Habitat Status</h4>
        <p className="text-center text-gray-700">
          Due to human expansion and development, pandas now inhabit only a small fraction of their historical range. Habitat fragmentation remains one of the greatest threats to panda populations.
        </p>
      </div>
    </section>
  );
};

export default HabitatSection;

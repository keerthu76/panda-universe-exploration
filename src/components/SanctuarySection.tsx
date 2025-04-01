
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, ExternalLink } from 'lucide-react';

const SanctuarySection = () => {
  const sanctuaries = [
    {
      name: 'Chengdu Research Base',
      location: 'Chengdu, Sichuan, China',
      description: 'A world-renowned breeding center focused on giant panda conservation, research, and public education.',
      website: 'https://www.panda.org.cn/',
      type: 'Research & Breeding',
      pandas: '100+',
      image: 'https://images.unsplash.com/photo-1591413338056-4b625b2c565a?q=80&w=2070&auto=format&fit=crop'
    },
    {
      name: 'Wolong National Nature Reserve',
      location: 'Wenchuan County, Sichuan, China',
      description: 'One of China\'s earliest and largest panda reserves, with a focus on habitat conservation and wild panda protection.',
      website: 'https://www.wwf.org.uk/where-we-work/places/wolong-nature-reserve',
      type: 'Protected Reserve',
      pandas: '150+ (wild)',
      image: 'https://images.unsplash.com/photo-1602529710584-458a995c8785?q=80&w=1935&auto=format&fit=crop'
    },
    {
      name: 'Smithsonian National Zoo',
      location: 'Washington D.C., USA',
      description: 'Home to a successful giant panda breeding program and important international conservation partnership.',
      website: 'https://nationalzoo.si.edu/animals/giant-panda',
      type: 'Zoo & Research',
      pandas: '3',
      image: 'https://images.unsplash.com/photo-1624962018092-8ec7c9647884?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  return (
    <section id="sanctuaries" className="panda-container bg-gray-50">
      <h2 className="section-title">Panda Sanctuaries & Zoos</h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        Explore facilities around the world that are dedicated to panda conservation, research, and public education.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sanctuaries.map((sanctuary, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-48 overflow-hidden">
              <img 
                src={sanctuary.image} 
                alt={sanctuary.name}
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
              />
            </div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl text-panda-green">{sanctuary.name}</CardTitle>
                  <CardDescription className="flex items-center mt-1">
                    <MapPin className="h-4 w-4 mr-1" />
                    {sanctuary.location}
                  </CardDescription>
                </div>
                <Badge variant="secondary" className="bg-panda-bamboo text-white">
                  {sanctuary.type}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-2">{sanctuary.description}</p>
              <p className="text-sm font-medium">Panda Population: <span className="text-panda-green">{sanctuary.pandas}</span></p>
            </CardContent>
            <CardFooter>
              <Button 
                variant="outline" 
                className="w-full border-panda-green text-panda-green hover:bg-panda-green hover:text-white"
                onClick={() => window.open(sanctuary.website, '_blank')}
              >
                Visit Website <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-600 mb-6">
          These are just a few examples of the many facilities worldwide dedicated to panda conservation. 
          Check your local zoo to see if they participate in panda conservation programs.
        </p>
        <Button className="bg-panda-green hover:bg-panda-green-dark">
          View Full Directory
        </Button>
      </div>
    </section>
  );
};

export default SanctuarySection;

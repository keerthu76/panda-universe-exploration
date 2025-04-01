
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Leaf, Scale, Clock } from 'lucide-react';

const FactsSection = () => {
  const facts = [
    {
      icon: <Scale className="h-8 w-8 text-panda-bamboo" />,
      title: 'Size & Weight',
      description: 'Giant pandas can grow up to 1.5m tall and weigh between 100-150kg. Males are typically 10-20% larger than females.'
    },
    {
      icon: <Leaf className="h-8 w-8 text-panda-green" />,
      title: 'Bamboo Diet',
      description: 'Pandas spend 10-16 hours a day eating bamboo. An adult panda can consume 12-38kg of bamboo daily.'
    },
    {
      icon: <Clock className="h-8 w-8 text-panda-bamboo" />,
      title: 'Lifespan',
      description: 'Giant pandas in the wild typically live 15-20 years, while those in captivity can live up to 30 years.'
    },
    {
      icon: <Heart className="h-8 w-8 text-panda-green" />,
      title: 'Conservation Status',
      description: 'Once endangered, giant pandas are now classified as "vulnerable" thanks to conservation efforts, with about 1,864 in the wild.'
    }
  ];

  return (
    <section id="facts" className="panda-container bg-gray-50 py-16">
      <h2 className="section-title">Fascinating Panda Facts</h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        Giant pandas are one of the world's most adored and protected rare animals. Discover what makes these black and white bears so special.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {facts.map((fact, index) => (
          <Card key={index} className="border-t-4 border-t-panda-bamboo hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center gap-4">
              {fact.icon}
              <CardTitle className="text-xl">{fact.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{fact.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 p-6 bg-white rounded-lg shadow-md">
        <h3 className="text-2xl font-bold mb-4 text-center">Did You Know?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-panda-green/10 p-4 rounded-lg">
            <p className="font-medium text-panda-green">A newborn panda is about the size of a stick of butter—about 1/900th the size of its mother.</p>
          </div>
          <div className="bg-panda-bamboo/10 p-4 rounded-lg">
            <p className="font-medium text-panda-green-dark">Pandas have a "pseudo-thumb," an enlarged wrist bone that helps them grip bamboo stems.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FactsSection;

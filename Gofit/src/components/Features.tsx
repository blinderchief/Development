
import React from 'react';
import { Brain, Camera, LeafyGreen, Utensils } from 'lucide-react';
import FadeIn from './ui/animation/FadeIn';

const features = [
  {
    icon: <Brain className="w-10 h-10 text-gofit-500" />,
    title: "AI-Driven Recipes",
    description: "Advanced algorithms generate hyper-personalized recipes based on your unique health profile and preferences."
  },
  {
    icon: <Camera className="w-10 h-10 text-gofit-500" />,
    title: "Pantry Integration",
    description: "Scan available ingredients with your smartphone to create recipes from what you already have, reducing food waste."
  },
  {
    icon: <LeafyGreen className="w-10 h-10 text-gofit-500" />,
    title: "Sustainability Focus",
    description: "Prioritize eco-friendly eating with recommendations for local, seasonal, and low-impact foods."
  },
  {
    icon: <Utensils className="w-10 h-10 text-gofit-500" />,
    title: "User-Friendly Interface",
    description: "Enjoy intuitive navigation and step-by-step instructions to make healthy meal preparation accessible for everyone."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 md:py-32 px-4 relative">
      {/* Background decorative elements */}
      <div className="absolute right-0 bottom-0 -z-10 animate-pulse-subtle opacity-10">
        <div className="w-96 h-96 rounded-full bg-gofit-200 blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Intelligent Features
          </h2>
          <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto mb-20">
            Combining AI technology with nutrition science to transform your eating habits
          </p>
        </FadeIn>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FadeIn key={index} delay={index * 100} direction="up">
              <div className="glass-card rounded-xl p-6 h-full flex flex-col transition-all duration-300 hover:shadow-md hover:translate-y-[-4px]">
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
